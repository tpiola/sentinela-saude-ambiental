export const WHATSAPP_NUMBER = "5516993747147";

const DEDUPE_WINDOW_MS = 15 * 60 * 1000;

type LeadDedupeInput = {
  phone: string;
  propertyType: string;
  pestType: string;
  source: string;
  now?: number;
};

export function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11) return `55${digits}`;
  return digits;
}

export function createWhatsAppUrl(message = "", phone = WHATSAPP_NUMBER) {
  const url = new URL(`https://wa.me/${phone}`);
  if (message.trim()) {
    url.searchParams.set("text", message);
  }
  return url.toString();
}

export function createLeadDedupeKey({
  phone,
  propertyType,
  pestType,
  source,
  now = Date.now(),
}: LeadDedupeInput) {
  const phoneKey = normalizePhone(phone);
  const windowKey = Math.floor(now / DEDUPE_WINDOW_MS);
  return [source, phoneKey, propertyType, pestType, windowKey]
    .map((part) => String(part).trim().toLowerCase())
    .join(":");
}
