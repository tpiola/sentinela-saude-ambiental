import React from "react";
import { Logo } from "./Logo.jsx";
import { UiIcon } from "../icons/UiIcon.jsx";

const NAV = [
  { href: "#home", label: "Início" },
  { href: "#escorpiao", label: "Escorpiões" },
  { href: "#cupins", label: "Cupins" },
  { href: "#b2b", label: "Empresas & Condomínios" },
];

/** Header Premium Fixo Navy Translúcido com Menu de Subpáginas e Botão Agendar */
export function SiteHeader({
  navLinks = NAV,
  phoneDisplay = "(16) 99374-7147",
  phoneE164 = "5516993747147",
  logoSrc = "assets/logo-brasao.png",
  scrolled = false,
  position = "fixed",
  className,
  style,
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header
      className={className}
      style={{
        position,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(0,20,40,0.96)" : "rgba(0,23,48,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(143,206,42,0.3)" : "1px solid rgba(255,255,255,0.08)",
        padding: scrolled ? "0.625rem 0" : "0.875rem 0",
        transition: "all 0.25s ease",
        ...style,
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "76rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "0 1.5rem" }}>
        
        {/* LOGO */}
        <Logo variant="compact" tone="dark" href="#home" logoSrc={logoSrc} />

        {/* NAVEGAÇÃO DESKTOP */}
        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.9375rem", fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CONTATO TELEFÔNICO + BOTÃO AGENDAR (SEM WHATSAPP NO HEADER) */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
          <a
            href={`tel:+${phoneE164}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.875rem", fontWeight: 700, color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "8px 12px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)" }}
            className="hover-lift"
          >
            <span>📞</span>
            <span>{phoneDisplay}</span>
          </a>

          <a
            href="#agendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: "var(--brand-lime)",
              color: "var(--brand-navy)",
              fontWeight: 800,
              fontSize: "0.9375rem",
              borderRadius: 6,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(143,206,42,0.3)",
              transition: "all 0.2s ease",
            }}
            className="hover-lift"
          >
            <span>📅</span>
            <span>Agendar</span>
          </a>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              minHeight: 40,
              minWidth: 40,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
              borderRadius: 6,
            }}
            className="mobile-toggle-btn"
          >
            <UiIcon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* DRAWER MOBILE */}
      {menuOpen && (
        <div style={{ background: "#001b38", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px", display: "grid", gap: 12 }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#fff", textDecoration: "none", fontSize: "1.0625rem", fontWeight: 700, padding: "8px 0" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setMenuOpen(false)}
            style={{ padding: "12px", background: "var(--brand-lime)", color: "var(--brand-navy)", textAlign: "center", fontWeight: 800, borderRadius: 6, textDecoration: "none", marginTop: 8 }}
          >
            📅 Agendar Vistoria Online
          </a>
        </div>
      )}
    </header>
  );
}
