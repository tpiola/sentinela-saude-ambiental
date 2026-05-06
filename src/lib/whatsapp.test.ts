import { describe, expect, it } from "vitest";
import {
  WHATSAPP_NUMBER,
  createLeadDedupeKey,
  createWhatsAppUrl,
  normalizePhone,
} from "./whatsapp";

describe("whatsapp helpers", () => {
  it("normalizes Brazilian phone numbers before dedupe", () => {
    expect(normalizePhone("(16) 9 9374-7147")).toBe("5516993747147");
    expect(normalizePhone("5516993747147")).toBe("5516993747147");
  });

  it("keeps the same dedupe key inside the same 15 minute window", () => {
    const input = {
      phone: "(16) 9 9999-9999",
      propertyType: "residencia",
      pestType: "escorpiao",
      source: "site_diagnostico",
    };

    expect(createLeadDedupeKey({ ...input, now: 1000 })).toBe(
      createLeadDedupeKey({ ...input, now: 14 * 60 * 1000 }),
    );
  });

  it("builds encoded WhatsApp links with the central phone number", () => {
    const url = createWhatsAppUrl("Olá, preciso de ajuda.");

    expect(url).toContain(`https://wa.me/${WHATSAPP_NUMBER}`);
    expect(url).toContain("text=Ol%C3%A1%2C+preciso+de+ajuda.");
  });
});
