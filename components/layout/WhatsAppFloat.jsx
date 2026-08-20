import React from "react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon.jsx";

/** Botão flutuante de WhatsApp (desktop) — verde brilhante, halo, canto inferior direito. */
export function WhatsAppFloat({ href = "https://wa.me/5516993747147", label = "Abrir conversa no WhatsApp", position = "fixed", className, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position,
        right: 32,
        bottom: 32,
        zIndex: 60,
        display: "flex",
        height: 64,
        width: 64,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        background: "var(--brand-whatsapp-bright)",
        color: "#fff",
        boxShadow: "var(--shadow-float), var(--ring-whatsapp)",
        transform: hover ? "scale(1.1)" : "none",
        transition: "transform var(--duration-base) var(--ease-standard)",
        ...style,
      }}
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}
