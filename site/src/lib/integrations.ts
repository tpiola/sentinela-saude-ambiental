/**
 * Pontos de integração para automações n8n, Google Calendar e CRM.
 * Configure em .env.local — nunca commite segredos.
 */

export const INTEGRATIONS = {
  /** URL pública de agendamento (Google Calendar Appointment Schedule ou Cal.com) */
  googleCalendarUrl: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ?? "",

  /** Formulário Google incorporado (?embedded=true recomendado) — ligado à planilha ou fluxo Sheets */
  googleFormEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL ?? "",

  /** Link externo para o mesmo form (quando não há embed) — abre em nova aba */
  googleContactFormOpenUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_OPEN_URL ?? "",

  /** Webhook n8n — lead do formulário diagnóstico (POST JSON) */
  n8nWebhookLead: process.env.NEXT_PUBLIC_N8N_WEBHOOK_LEAD ?? "",

  /** Webhook n8n — eventos WhatsApp Business (opcional, server-side ideal) */
  n8nWebhookWhatsapp: process.env.NEXT_PUBLIC_N8N_WEBHOOK_WHATSAPP ?? "",

  /** Webhook n8n — Meta (Facebook/Instagram) lead ads ou messenger */
  n8nWebhookMeta: process.env.NEXT_PUBLIC_N8N_WEBHOOK_META ?? "",

  /** Google Analytics 4 */
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",

  /** Google Tag Manager */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
} as const;

/** Agenda: env ou fallback para página /agendar do próprio site. */
export function calendarBookingHref(): string {
  const direct = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL?.trim();
  if (direct) return direct;
  const site =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://sentinelasaudeambiental.vercel.app";
  return `${site}/agendar`;
}

export type LeadPayload = {
  source: "site-diagnostico";
  name?: string;
  phone?: string;
  city?: string;
  propertyType?: string;
  pestType?: string;
  urgency?: string;
  timestamp: string;
};

export type ContactLeadPayload = {
  source: "site-contato";
  name: string;
  email: string;
  phone: string;
  audience: "residencial" | "empresa";
  message?: string;
  timestamp: string;
};

/** Envia lead para n8n em background (não bloqueia UX) */
export async function sendLeadToN8n(payload: LeadPayload): Promise<void> {
  const url = INTEGRATIONS.n8nWebhookLead;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "no-cors",
    });
  } catch {
    /* falha silenciosa — WhatsApp continua como canal principal */
  }
}

export async function sendContactLeadToN8n(
  payload: ContactLeadPayload,
): Promise<void> {
  const url = INTEGRATIONS.n8nWebhookLead;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "no-cors",
    });
  } catch {
    /* falha silenciosa */
  }
}
