import { createHmac, timingSafeEqual } from "node:crypto";

type VerifiedPayload =
  | { ok: true; body: unknown }
  | { ok: false; status: 400 | 403 | 503 };

/** Authenticate the exact bytes before parsing or processing Meta events. */
export async function readVerifiedMetaPayload(
  request: Request,
  appSecret: string | undefined,
): Promise<VerifiedPayload> {
  if (!appSecret) return { ok: false, status: 503 };

  const signature = request.headers.get("x-hub-signature-256");
  if (!signature || !/^sha256=[a-fA-F0-9]{64}$/.test(signature)) {
    return { ok: false, status: 403 };
  }

  let rawBody: Buffer;
  try {
    rawBody = Buffer.from(await request.arrayBuffer());
  } catch {
    return { ok: false, status: 400 };
  }

  const expected = createHmac("sha256", appSecret).update(rawBody).digest();
  const received = Buffer.from(signature.slice(7), "hex");
  if (!timingSafeEqual(expected, received)) {
    return { ok: false, status: 403 };
  }

  try {
    return { ok: true, body: JSON.parse(rawBody.toString("utf8")) };
  } catch {
    return { ok: false, status: 400 };
  }
}
