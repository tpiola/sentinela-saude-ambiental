import React from "react";

const LINKS = [
  { href: "#home", label: "Início" },
  { href: "#praga", label: "Controle de Escorpião" },
  { href: "#b2b", label: "Empresas & Condomínios" },
  { href: "#agendar", label: "Solicitar Orçamento" },
];

const colHead = {
  margin: "0 0 1rem",
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--brand-lime)",
};
const link = { fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" };

/** Rodapé navy: medalhão do brasão, faixa de cobertura, 3 colunas e aviso sanitário. */
export function SiteFooter({
  logoSrc = "assets/logo-brasao.png",
  links = LINKS,
  phoneDisplay = "(16) 99374-7147",
  phoneE164 = "5516993747147",
  email = "sentinelasaudeambiental@gmail.com",
  addressFull = "Av. Pedro Calandria Fernandes, 1300 — Franca/SP, CEP 14407-350",
  cnpj = "30.438.427/0001-37",
  year = 2026,
  className,
  style,
}) {
  return (
    <footer className={className} style={{ background: "var(--brand-navy)", color: "#fff", borderTop: "1px solid var(--border-default)", ...style }}>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.5rem" }}>
        <div style={{ position: "relative", marginTop: "-2.5rem", height: 96, width: 96, borderRadius: "999px", background: "var(--brand-navy)", boxShadow: "0 0 0 2px rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={logoSrc} alt="Marca Sentinela Saúde Ambiental" style={{ height: "85%", width: "85%", objectFit: "contain" }} />
        </div>
      </div>

      <div style={{ margin: "0 auto", maxWidth: "72rem", padding: "0 1.5rem 3rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", margin: "2.5rem 0", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", padding: "1.25rem 1.5rem" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 700, color: "#fff" }}>Atendimento em Franca e região</h2>
            <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
              Confirme a cobertura do seu bairro ou município antes de agendar.
            </p>
          </div>
          <a href="/contato" style={{ display: "inline-flex", minHeight: "var(--control-min-h)", alignItems: "center", borderBottom: "2px solid var(--brand-lime)", fontWeight: 700, color: "#fff", textDecoration: "none" }}>
            Ver contatos
          </a>
        </div>

        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
          <div>
            <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 900, letterSpacing: "-0.01em", color: "#fff" }}>SENTINELA</p>
            <p style={{ margin: "0.75rem 0 0", maxWidth: "24ch", fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
              Controle de pragas com inspeção, orientação preventiva e registro do serviço conforme o escopo contratado.
            </p>
          </div>
          <nav aria-label="Links do rodapé">
            <h2 style={colHead}>Links</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.625rem" }}>
              {links.map((l) => (
                <li key={l.href}><a href={l.href} style={link}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 style={colHead}>Contato</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.625rem" }}>
              <li><a href={`https://wa.me/${phoneE164}`} style={link}>WhatsApp {phoneDisplay}</a></li>
              <li><a href={`tel:+${phoneE164}`} style={link}>Ligar {phoneDisplay}</a></li>
              <li><a href={`mailto:${email}`} style={{ ...link, wordBreak: "break-all" }}>{email}</a></li>
              <li style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>{addressFull}</li>
              <li><a href="#" style={{ ...link, color: "var(--brand-lime)", textDecoration: "underline", textUnderlineOffset: 2 }}>Ver rota no mapa →</a></li>
            </ul>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>© {year} Sentinela Saúde Ambiental. CNPJ: {cnpj}</p>
          <p style={{ margin: 0, maxWidth: "28rem", fontSize: "0.75rem", lineHeight: 1.5, color: "rgba(255,255,255,0.35)" }}>
            Em caso de picada, intoxicação ou sintomas, procure atendimento de saúde imediatamente. O controle de pragas não substitui atendimento médico.
          </p>
        </div>
      </div>
    </footer>
  );
}
