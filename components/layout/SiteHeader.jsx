import React from "react";
import { Logo } from "./Logo.jsx";
import { UiIcon } from "../icons/UiIcon.jsx";
import { WhatsAppIcon } from "../icons/WhatsAppIcon.jsx";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/condominio", label: "Condomínios" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "Dúvidas" },
];

const PEST_LINKS = [
  { href: "/pragas/escorpiao", label: "Escorpiões" },
  { href: "/pragas/baratas", label: "Baratas" },
  { href: "/pragas/ratos", label: "Ratos" },
  { href: "/pragas/cupins", label: "Cupins" },
  { href: "/pragas/aranhas", label: "Aranhas" },
  { href: "/pragas/formigas", label: "Formigas" },
  { href: "/pragas/mosquitos", label: "Mosquitos" },
];

/** Header fixo navy translúcido com menu de pragas e telefone em pílula lima. */
export function SiteHeader({
  navLinks = NAV,
  pestLinks = PEST_LINKS,
  phoneDisplay = "(16) 99374-7147",
  whatsappHref = "https://wa.me/5516993747147",
  logoSrc = "assets/logo-brasao.png",
  scrolled = false,
  position = "fixed",
  className,
  style,
}) {
  const [pestsOpen, setPestsOpen] = React.useState(false);
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
        background: scrolled ? "rgba(0,35,71,0.95)" : "rgba(0,35,71,0.9)",
        backdropFilter: "blur(6px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
        padding: scrolled ? "0.5rem 0" : "0.75rem 0",
        transition: "background-color var(--duration-base) var(--ease-standard), padding var(--duration-base) var(--ease-standard)",
        ...style,
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "72rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", padding: "0 1.5rem" }}>
        <Logo variant="compact" tone="dark" href="/" logoSrc={logoSrc} />

        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "inherit", textDecoration: "none" }}>{l.label}</a>
          ))}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setPestsOpen(true)}
            onMouseLeave={() => setPestsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={pestsOpen}
              onClick={() => setPestsOpen((v) => !v)}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", background: "none", border: "none", color: "inherit", font: "inherit", cursor: "pointer" }}
            >
              Pragas
              <UiIcon name="chevron-down" size={12} strokeWidth={3} style={{ transform: pestsOpen ? "rotate(180deg)" : "none", transition: "transform var(--duration-base) var(--ease-standard)" }} />
            </button>
            {pestsOpen ? (
              <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: "0.5rem", width: 224, border: "1px solid rgba(143,206,42,0.2)", background: "var(--brand-navy)", boxShadow: "var(--shadow-elevated)", zIndex: 50 }}>
                <div style={{ background: "rgba(143,206,42,0.1)", padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-lime)" }}>
                  Controle de Pragas
                </div>
                <div style={{ padding: "0.25rem 0" }}>
                  {pestLinks.map((p) => (
                    <a key={p.href} href={p.href} style={{ display: "block", padding: "0.625rem 1rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{p.label}</a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", minHeight: 36, alignItems: "center", gap: "0.375rem", border: "1px solid rgba(143,206,42,0.4)", padding: "0.375rem 0.875rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-lime)", textDecoration: "none" }}
          >
            <WhatsAppIcon size={14} />
            {phoneDisplay}
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ display: "inline-flex", height: 44, width: 44, alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.2)", background: "none", color: "#fff", cursor: "pointer" }}
          >
            <UiIcon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
