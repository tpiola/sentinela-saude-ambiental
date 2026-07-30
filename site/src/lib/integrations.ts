import { getSiteUrl } from "@/lib/site";

/**
 * Integrações públicas do site. IDs públicos podem ficar em NEXT_PUBLIC_*;
 * tokens, segredos e webhooks privados permanecem somente no servidor.
 */
export const INTEGRATIONS = {
  googleCalendarUrl: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ?? "",
  googleFormEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL ?? "",
  googleContactFormOpenUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_OPEN_URL ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;

export function calendarBookingHref(): string {
  const direct = INTEGRATIONS.googleCalendarUrl.trim();
  return direct || `${getSiteUrl()}/agendar`;
}

export type AttributionFields = {
  leadId?: string;
  pagePath?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  website?: string;
};

export type LeadPayload = AttributionFields & {
  source: "site-diagnostico";
  name?: string;
  phone: string;
  city: string;
  propertyType?: string;
  pestType: string;
  urgency: string;
  timestamp: string;
};

export type ContactLeadPayload = AttributionFields & {
  source: "site-contato";
  name: string;
  email?: string;
  phone: string;
  audience: "residencial" | "empresa";
  message?: string;
  timestamp: string;
};

async function postLead(
  payload: LeadPayload | ContactLeadPayload,
): Promise<boolean> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    return response.ok;
  } catch {
    // O contato por WhatsApp permanece disponível se a automação estiver fora do ar.
    return false;
  }
}

export const sendLeadToN8n = postLead;
export const sendContactLeadToN8n = postLead;
