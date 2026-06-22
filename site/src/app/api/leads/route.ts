import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

// Google Sheets via Apps Script (configure GOOGLE_SHEETS_WEBHOOK no .env)
const SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK || "";

function ensureDataDir() {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readLeads(): any[] {
  ensureDataDir();
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function appendLead(lead: any) {
  const leads = readLeads();
  leads.push({ ...lead, id: Date.now(), recebido_em: new Date().toISOString() });
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, whatsapp, tipo, origem } = body;

    if (!nome || !whatsapp) {
      return NextResponse.json({ error: "Nome e WhatsApp obrigatórios" }, { status: 400 });
    }

    // Salvar local (backup)
    appendLead({ nome, email, whatsapp, tipo: tipo || "nao_informado", origem: origem || "site" });

    // Enviar para Google Sheets (se configurado)
    if (SHEETS_WEBHOOK) {
      try {
        await fetch(SHEETS_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, whatsapp, tipo, origem, data: new Date().toISOString() }),
        });
      } catch {
        // Silencioso - o backup local já foi feito
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Erro ao processar lead" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ leads: readLeads().length });
}
