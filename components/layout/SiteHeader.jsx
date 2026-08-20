import React from "react";
import { Logo } from "./Logo.jsx";
import { UiIcon } from "../icons/UiIcon.jsx";

const NAV = [
  { href: "#home", label: "Início" },
  { href: "#escorpiao", label: "Escorpiões" },
  { href: "#cupins", label: "Cupins" },
  { href: "#b2b", label: "Empresas & Condomínios" },
];

const ALL_PESTS = [
  { href: "#escorpiao", label: "Escorpiões & Animais Peçonhentos", icon: "🦂" },
  { href: "#cupins", label: "Cupins (Madeira Seca & Solo)", icon: "🪵" },
  { href: "#home", label: "Baratas (Esgoto & Francesinha)", icon: "🪳" },
  { href: "#home", label: "Ratos & Roedores Urbanos", icon: "🐀" },
  { href: "#escorpiao", label: "Aranhas (Armadeira & Marrom)", icon: "🕷️" },
  { href: "#home", label: "Formigas Cortadeiras & Caseiras", icon: "🐜" },
  { href: "#home", label: "Mosquitos & Pernilongos", icon: "🦟" },
  { href: "#home", label: "Pulgas & Carrapatos em Pets", icon: "🐾" },
  { href: "#escorpiao", label: "Marimbondos, Abelhas & Vespas", icon: "🐝" },
  { href: "#home", label: "Higienização de Caixa d'Água", icon: "💧" },
];

/** Header Premium Fixo Navy Translúcido com Menu Completo de Pragas e Animações */
export function SiteHeader({
  navLinks = NAV,
  pestLinks = ALL_PESTS,
  phoneDisplay = "(16) 99374-7147",
  phoneE164 = "5516993747147",
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
        background: scrolled ? "rgba(0,14,31,0.96)" : "rgba(0,18,38,0.92)",
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

        {/* NAVEGAÇÃO DESKTOP COM DROPDOWN DE TODAS AS PRAGAS */}
        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: "1.25rem", fontSize: "0.9375rem", fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
          <a
            href="#home"
            style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", transition: "color 0.2s ease" }}
            onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"}
            onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.88)"}
          >
            Início
          </a>

          {/* MENU DROPDOWN DE TODAS AS PRAGAS */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setPestsOpen(true)}
            onMouseLeave={() => setPestsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={pestsOpen}
              onClick={() => setPestsOpen(!pestsOpen)}
              style={{
                background: "transparent",
                border: 0,
                color: pestsOpen ? "var(--brand-lime)" : "rgba(255,255,255,0.88)",
                fontSize: "0.9375rem",
                fontWeight: 700,
                cursor: "pointer",
                padding: "8px 0",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s ease",
              }}
            >
              <span>Pragas & Insetos</span>
              <UiIcon name="chevron-down" size={14} style={{ transform: pestsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }} />
            </button>

            {pestsOpen && (
              <div
                className="animate-fade-up"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-20px",
                  width: "300px",
                  background: "#001833",
                  border: "1px solid rgba(143,206,42,0.4)",
                  borderRadius: 10,
                  boxShadow: "0 16px 36px rgba(0,0,0,0.6)",
                  padding: "10px 0",
                  zIndex: 100,
                  display: "grid",
                  gap: 2,
                }}
              >
                <div style={{ padding: "6px 16px", fontSize: "0.6875rem", fontWeight: 800, color: "var(--brand-lime)", textTransform: "uppercase", letterSpacing: "0.12em", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  Catálogo de Pragas Atendidas
                </div>
                {pestLinks.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    onClick={() => setPestsOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 16px",
                      color: "rgba(255,255,255,0.88)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "background 0.15s ease, color 0.15s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(143,206,42,0.12)";
                      e.currentTarget.style.color = "var(--brand-lime)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.88)";
                    }}
                  >
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#escorpiao"
            style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", transition: "color 0.2s ease" }}
            onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"}
            onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.88)"}
          >
            Escorpiões
          </a>

          <a
            href="#cupins"
            style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", transition: "color 0.2s ease" }}
            onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"}
            onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.88)"}
          >
            Cupins
          </a>

          <a
            href="#b2b"
            style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", transition: "color 0.2s ease" }}
            onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"}
            onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.88)"}
          >
            Empresas & Condomínios
          </a>
        </nav>

        {/* CONTATO TELEFÔNICO + BOTÃO AGENDAR */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
          <a
            href={`tel:+${phoneE164}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.875rem", fontWeight: 700, color: "rgba(255,255,255,0.88)", textDecoration: "none", padding: "8px 12px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)" }}
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
              padding: "10px 22px",
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
        <div style={{ background: "#001833", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px", display: "grid", gap: 12 }}>
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
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 8 }}>
            <span style={{ fontSize: "0.75rem", color: "var(--brand-lime)", fontWeight: 800, textTransform: "uppercase" }}>Pragas Atendidas:</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 6 }}>
              {pestLinks.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8125rem", textDecoration: "none", padding: "4px 0" }}
                >
                  {p.icon} {p.label.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
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