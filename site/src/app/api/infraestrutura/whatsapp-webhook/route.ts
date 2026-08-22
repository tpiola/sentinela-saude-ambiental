import { NextResponse } from "next/server";

/**
 * Webhook do WhatsApp Cloud API — a "Cristina" responde automaticamente.
 *
 * Variáveis de ambiente necessárias (configurar na Vercel):
 *   WHATSAPP_VERIFY_TOKEN     — token de verificação do webhook (Meta)
 *   WHATSAPP_ACCESS_TOKEN     — token de acesso da Meta (WhatsApp Cloud API)
 *   WHATSAPP_PHONE_NUMBER_ID  — ID do número de telefone (WhatsApp Business)
 */

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN ?? "";
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN ?? "";
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID ?? "";

const PEST_KEYWORDS: Array<[string, string]> = [
  ["escorp", "escorpião"],
  ["barata", "barata"],
  ["cupim", "cupim"],
  ["rato", "rato"],
  ["formiga", "formiga"],
  ["mosquito", "mosquito"],
  ["aranha", "aranha"],
  ["caixa d", "limpeza de caixa d'água"],
  ["caixa dagua", "limpeza de caixa d'água"],
];

const GREETINGS = ["oi", "ola", "olá", "bom dia", "boa tarde", "boa noite", "hey", "hello"];

const SCHEDULE_INTENT = [
  "agendar",
  "quanto custa",
  "preço",
  "preco",
  "valor",
  "orçamento",
  "orcamento",
  "quanto fica",
  "disponibil",
  "horário",
  "horario",
];

function detectPest(text: string): string | null {
  const normalized = text.toLowerCase();
  for (const [keyword, pest] of PEST_KEYWORDS) {
    if (normalized.includes(keyword)) return pest;
  }
  return null;
}

function detectGreeting(text: string): boolean {
  const normalized = text.toLowerCase();
  return GREETINGS.some((g) => normalized.startsWith(g) || normalized.includes(g));
}

function detectSchedule(text: string): boolean {
  const normalized = text.toLowerCase();
  return SCHEDULE_INTENT.some((k) => normalized.includes(k));
}

function cristinaResponse(text: string): string {
  const pest = detectPest(text);
  const greeting = detectGreeting(text);
  const schedule = detectSchedule(text);

  if (schedule) {
    return `Perfeito! Vou organizar sua visita técnica. 📅\n\nPara confirmar a disponibilidade da equipe, me conta:\n1️⃣ Qual é a ocorrência (escorpião, barata, cupim, rato, caixa d'água…)?\n2️⃣ Em qual bairro/cidade você está?\n3️⃣ Melhor dia e período (manhã ou tarde)?\n\nAtendemos Franca e região, com inspeção antes de qualquer aplicação e comprovante do serviço.`;
  }

  if (pest) {
    return `Entendi, ${pest}! 🛡️\n\nA Sentinela faz uma inspeção completa do ambiente para identificar focos e acessos — e só depois define o tratamento, com orientação técnica e comprovante do serviço.\n\n⚠️ Enquanto isso, evite tocar no animal e afaste crianças e pets do local.\n\nQuer agendar uma avaliação? Me confirma seu bairro que verifico a disponibilidade da equipe.`;
  }

  if (greeting) {
    return `Olá! Eu sou a Cristina, da Sentinela Saúde Ambiental 🌿\n\nPara eu te atender da melhor forma, pode me contar qual é a ocorrência (escorpião, barata, cupim, rato, limpeza de caixa d'água…) e em qual bairro você está?`;
  }

  return `Vou te ajudar! 😊 Pode me contar qual é a ocorrência (escorpião, barata, cupim, rato, caixa d'água…) e em qual bairro você está? Assim verifico a disponibilidade da equipe pra você.`;
}

async function sendWhatsAppMessage(to: string, text: string): Promise<boolean> {
  if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) return false;

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body: text },
        }),
      },
    );
    return response.ok;
  } catch {
    return false;
  }
}

// Verificação do webhook (GET) — o Meta envia hub.challenge
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Verificação falhou.", { status: 403 });
}

// Recebimento de mensagens (POST)
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const entries = (body as { entry?: Array<{ changes?: Array<{ value?: { messages?: Array<{ from?: string; text?: { body?: string } }> } }> }> })?.entry ?? [];

  for (const entry of entries) {
    for (const change of entry.changes ?? []) {
      const messages = change.value?.messages ?? [];
      for (const message of messages) {
        const from = message.from;
        const text = message.text?.body ?? "";
        if (!from || !text) continue;

        const reply = cristinaResponse(text);
        await sendWhatsAppMessage(from, reply);
      }
    }
  }

  return NextResponse.json({ ok: true });
}
