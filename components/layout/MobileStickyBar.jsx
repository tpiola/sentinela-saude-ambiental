import React from "react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon.jsx";
import { UiIcon } from "../icons/UiIcon.jsx";

/** Barra fixa mobile: ligar (ícone) + WhatsApp (CTA principal). Altura 56px + safe-area. */
export function MobileStickyBar({
  phoneE164 = "5516993747147",
  whatsappHref = "https://wa.me/5516993747147",
  label = "Chamar no WhatsApp",
  position = "fixed",
  className,
  style,
}) {
  return (
    <div
      className={className}
      style={{
        position,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 55,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(0,35,71,0.95)",
        backdropFilter: "blur(16px)",
        padding: "0.625rem 0.75rem calc(0.625rem + env(safe-area-inset-bottom))",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <a
          href={`tel:${phoneE164}`}
          aria-label="Ligar agora"
          style={{ display: "flex", height: 48, width: 48, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff" }}
        >
          <UiIcon name="phone" size={20} />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", gap: "0.5rem", borderRadius: "var(--radius-md)", background: "var(--brand-whatsapp-bright)", padding: "0.875rem 0", fontSize: "0.9375rem", fontWeight: 700, color: "#fff", textDecoration: "none", boxShadow: "0 8px 20px rgba(37,211,102,0.3)" }}
        >
          <WhatsAppIcon size={20} />
          {label}
        </a>
      </div>
    </div>
  );
}
