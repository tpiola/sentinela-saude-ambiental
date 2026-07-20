/**
 * Integrações públicas do site. IDs públicos podem ficar em NEXT_PUBLIC_*;
 * tokens, segredos e chaves privadas nunca devem ser enviados ao navegador.
 */
export const INTEGRATIONS = {
  googleCalendarUrl: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ?? "",
  googleFormEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL ?? "",
  googleContactFormOpenUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_OPEN_URL ?? "",
  n8nWebhookLead: process.env.NEXT_PUBLIC_N8N_WEBHOOK_LEAD ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;

export function calendarBookingHref(): string {
  const direct = INTEGRATIONS.googleCalendarUrl.trim();
  if (direct) return direct;
  const site =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://sentinelasaudeambiental.com.br";
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
  email?: string;
  phone: string;
  audience: "residencial" | "empresa";
  message?: string;
  timestamp: string;
};

async function postLead(payload: LeadPayload | ContactLeadPayload): Promise<void> {
  const url = INTEGRATIONS.n8nWebhookLead;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // O contato por WhatsApp permanece disponível se a automação estiver fora do ar.
  }
}

export const sendLeadToN8n = postLead;
export const sendContactLeadToN8n = postLead;
