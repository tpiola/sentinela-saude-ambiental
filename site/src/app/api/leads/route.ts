import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 12_000;
const ALLOWED_SOURCES = new Set(["site-diagnostico", "site-contato"]);

type UnknownRecord = Record<string, unknown>;

function clean(value: unknown, maxLength = 240): string | undefined {
  if (typeof value !== "string") return undefined;
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized ? normalized.slice(0, maxLength) : undefined;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set<string>();
  const canonical = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const deployment = process.env.VERCEL_URL?.trim();

  if (canonical) allowed.add(canonical.replace(/\/$/, ""));
  if (deployment) allowed.add(`https://${deployment}`);

  return allowed.size === 0 || allowed.has(origin.replace(/\/$/, ""));
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ accepted: false }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ accepted: false }, { status: 413 });
  }

  let input: UnknownRecord;
  try {
    input = (await request.json()) as UnknownRecord;
  } catch {
    return NextResponse.json({ accepted: false }, { status: 400 });
  }

  // Campo-isca: robôs costumam preenchê-lo; pessoas não o veem.
  if (clean(input.website, 120)) {
    return NextResponse.json({ accepted: true }, { status: 202 });
  }

  const source = clean(input.source, 40);
  const phone = clean(input.phone, 40);
  const phoneDigits = phone?.replace(/\D/g, "") ?? "";

  if (!source || !ALLOWED_SOURCES.has(source)) {
    return NextResponse.json({ accepted: false }, { status: 400 });
  }

  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    return NextResponse.json({ accepted: false }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_LEAD?.trim();
  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_LEAD não configurado no ambiente da Vercel.");
    return NextResponse.json({ accepted: false }, { status: 503 });
  }

  const payload = {
    leadId: clean(input.leadId, 80),
    source,
    name: clean(input.name, 120),
    email: clean(input.email, 180),
    phone,
    city: clean(input.city, 160),
    propertyType: clean(input.propertyType, 100),
    pestType: clean(input.pestType, 100),
    urgency: clean(input.urgency, 80),
    audience: clean(input.audience, 40),
    message: clean(input.message, 1_000),
    timestamp: clean(input.timestamp, 80),
    pagePath: clean(input.pagePath, 300),
    referrer: clean(input.referrer, 500),
    utmSource: clean(input.utmSource, 160),
    utmMedium: clean(input.utmMedium, 160),
    utmCampaign: clean(input.utmCampaign, 200),
    utmContent: clean(input.utmContent, 200),
    utmTerm: clean(input.utmTerm, 200),
    receivedAt: new Date().toISOString(),
    userAgent: clean(request.headers.get("user-agent"), 400),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      console.error(`Webhook n8n respondeu com status ${response.status}.`);
      return NextResponse.json({ accepted: false }, { status: 502 });
    }

    return NextResponse.json({ accepted: true }, { status: 202 });
  } catch (error) {
    console.error("Falha ao encaminhar lead para o n8n.", error);
    return NextResponse.json({ accepted: false }, { status: 502 });
  }
}
