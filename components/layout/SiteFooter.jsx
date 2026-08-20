import React from "react";
import { SocialIcon } from "../icons/SocialIcons.jsx";

const LINKS = [
  { href: "#home", label: "Início" },
  { href: "#escorpiao", label: "Escorpiões & Peçonhentos" },
  { href: "#cupins", label: "Cupins & Estruturas" },
  { href: "#b2b", label: "Empresas & Condomínios (B2B)" },
  { href: "#agendar", label: "Agendar Avaliação Técnica" },
];

const colHead = {
  margin: "0 0 1.25rem",
  fontSize: "0.8125rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "var(--brand-lime)",
};

const linkStyle = {
  fontSize: "0.9375rem",
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  transition: "color 0.2s ease, transform 0.2s ease",
};

/** Rodapé Premium Oficial: Degradê Sóbrio, Brasão, Atendimento + Mapa no topo, Redes Oficiais, QR Code e Crédito */
export function SiteFooter({
  logoSrc = "assets/logo-brasao.png",
  qrSrc = "assets/qrcode-whatsapp.png",
  links = LINKS,
  phoneDisplay = "(16) 99374-7147",
  phoneE164 = "5516993747147",
  email = "sentinelasaudeambiental@gmail.com",
  facebookUrl = "https://www.facebook.com/sentinelasaudeambiental?locale=pt_BR",
  instagramUrl = "https://www.instagram.com/sentinelasaudeambiental/",
  addressFull = "Av. Pedro Calandria Fernandes, 1300 — Franca/SP, CEP 14407-350",
  cnpj = "30.438.427/0001-37",
  year = 2026,
  className,
  style,
}) {
  const whatsappUrl = `https://wa.me/${phoneE164}?text=${encodeURIComponent("Olá! Acessei pelo site oficial e gostaria de atendimento técnico.")}`;

  return (
    <footer id="rodape-oficial" className={className} style={{ background: "linear-gradient(175deg, #000c1a 0%, #001630 60%, #00244d 100%)", color: "#fff", borderTop: "3px solid var(--brand-lime)", position: "relative", ...style }}>
      
      {/* MEDALHÃO CENTRAL DO BRASÃO */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.5rem" }}>
        <div style={{ position: "relative", marginTop: "-2.75rem", height: 96, width: 96, borderRadius: "50%", background: "#001020", border: "2px solid var(--brand-lime)", boxShadow: "0 8px 24px rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={logoSrc} alt="Brasão Oficial Sentinela Saúde Ambiental" style={{ height: "80%", width: "80%", objectFit: "contain" }} />
        </div>
      </div>

      <div style={{ margin: "0 auto", maxWidth: "76rem", padding: "1.5rem 1.5rem 3.5rem" }}>
        
        {/* BLOCO SUPERIOR: ATENDIMENTO EM FRANCA E REGIÃO + MAPA FÍSICO 100% OPERACIONAL */}
        <div style={{ margin: "1.5rem 0 3.5rem", borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "28px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: 20 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand-lime)" }}></span>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-lime)" }}>Sede Operacional em Franca/SP</span>
              </div>
              <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 800, color: "#fff" }}>Atendimento em Franca e Região</h2>
              <p style={{ margin: "4px 0 0", fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)" }}>
                {addressFull} · Plantão para Residências, Condomínios e Empresas.
              </p>
            </div>
            <a
              href="https://maps.google.com/maps?daddr=-20.4967359,-47.4182681"
              target="_blank"
              rel="noreferrer"
              className="hover-lift"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--brand-lime)", color: "var(--brand-navy)", borderRadius: 6, fontWeight: 800, textDecoration: "none", fontSize: "0.875rem", boxShadow: "0 4px 14px rgba(143,206,42,0.3)" }}
            >
              📍 Abrir Rota no Google Maps
            </a>
          </div>

          {/* MAPA GOOGLE EMBUTIDO DIRETO POR COORDENADAS */}
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.2)", position: "relative", minHeight: 300, background: "#001020" }}>
            <iframe
              title="Mapa de Localização Sentinela Saúde Ambiental Franca SP"
              src="https://maps.google.com/maps?q=-20.4967359,-47.4182681&hl=pt-BR&z=16&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* GRADE PRINCIPAL DE 4 COLUNAS: SOBRE, NAVEGAÇÃO, CONTATO EXCLUSIVO E QR CODE */}
        <div style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", alignItems: "start" }}>
          
          {/* COLUNA 1: IDENTIDADE INSTITUCIONAL */}
          <div>
            <p style={{ margin: 0, fontSize: "1.35rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#fff" }}>SENTINELA</p>
            <p style={{ margin: "2px 0 0", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-lime)" }}>Saúde Ambiental</p>
            <p style={{ margin: "1rem 0 0", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}>
              Controle profissional de pragas, barreira química contra escorpiões e laudo técnico sanitário conforme as normas da ANVISA em Franca e região.
            </p>
            <div style={{ marginTop: 16, fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)" }}>
              CNPJ: <strong style={{ color: "#fff" }}>{cnpj}</strong><br />
              Alvará Vigilância Sanitária Franca/SP
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO POR SUBPÁGINAS */}
          <nav aria-label="Navegação do rodapé">
            <h3 style={colHead}>Navegação</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.75rem" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}>
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUNA 3: CONTATOS OFICIAIS COM ÍCONES VETORIAIS DE ALTA PRECISÃO */}
          <div>
            <h3 style={colHead}>Contato Direto</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "1rem" }}>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "#25D366"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}>
                  <span style={{ color: "#25D366" }}><SocialIcon name="whatsapp" size={22} /></span>
                  <div>
                    <strong style={{ color: "#25D366", display: "block", fontSize: "0.8125rem", textTransform: "uppercase" }}>WhatsApp Oficial</strong>
                    <span>{phoneDisplay}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "var(--brand-lime)"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}>
                  <span style={{ color: "var(--brand-lime)" }}><SocialIcon name="email" size={22} /></span>
                  <div>
                    <strong style={{ color: "rgba(255,255,255,0.9)", display: "block", fontSize: "0.75rem", textTransform: "uppercase" }}>E-mail</strong>
                    <span style={{ fontSize: "0.8125rem", whiteSpace: "nowrap", display: "inline-block" }}>{email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={facebookUrl} target="_blank" rel="noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "#1877f2"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}>
                  <span style={{ color: "#1877f2" }}><SocialIcon name="facebook" size={22} /></span>
                  <div>
                    <strong style={{ color: "rgba(255,255,255,0.9)", display: "block", fontSize: "0.8125rem", textTransform: "uppercase" }}>Facebook</strong>
                    <span>/sentinelasaudeambiental</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "#e1306c"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}>
                  <span style={{ color: "#e1306c" }}><SocialIcon name="instagram" size={22} /></span>
                  <div>
                    <strong style={{ color: "rgba(255,255,255,0.9)", display: "block", fontSize: "0.8125rem", textTransform: "uppercase" }}>Instagram</strong>
                    <span>@sentinelasaudeambiental</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: QR CODE OFICIAL WHATSAPP */}
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px", textAlign: "center" }}>
            <h3 style={{ ...colHead, margin: "0 0 8px", color: "var(--brand-lime)" }}>Atendimento Rápido</h3>
            <p style={{ margin: "0 0 14px", fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>
              Aponte a câmera do celular para chamar no WhatsApp:
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#fff", padding: 8, borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
              <img src={qrSrc} alt="QR Code WhatsApp Sentinela Saúde Ambiental" style={{ width: 140, height: 140, display: "block" }} />
            </a>
            <span style={{ display: "block", marginTop: 10, fontSize: "0.75rem", color: "var(--brand-lime)", fontWeight: 700 }}>
              (Ou clique na imagem para abrir)
            </span>
          </div>

        </div>

        {/* CRÉDITO PROFISSIONAL REI DAS VENDAS & AVISOS LEGAIS */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginTop: "3.5rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <div>
            <p style={{ margin: 0, fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)" }}>
              © {year} Sentinela Saúde Ambiental · CNPJ: {cnpj}
            </p>
            <p style={{ margin: "4px 0 0", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
              Plataforma desenvolvida por: <a href="https://www.reidasvendas.com.br" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-lime)", textDecoration: "none", fontWeight: 700 }}>www.reidasvendas.com.br</a>
            </p>
          </div>
          <p style={{ margin: 0, maxWidth: "34rem", fontSize: "0.75rem", lineHeight: 1.5, color: "rgba(255,255,255,0.4)" }}>
            ⚠️ Alerta Sanitário: Em caso de picada de escorpião ou animal peçonhento, dirija-se imediatamente à UPA ou pronto-socorro. O controle de pragas elimina focos e impede novas infestações.
          </p>
        </div>
      </div>
    </footer>
  );
}