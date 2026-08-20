import React from "react";

const PLACE_QUERY = "Dedetizadora%20Sentinela%20Sa%C3%BAde%20Ambiental%20Franca%20SP";

/** Coordenadas oficiais do perfil Google Business (substituem -20.5401,-47.4009). */
export const GBP_GEO = { latitude: -20.4967359, longitude: -47.4182681 };
export const GBP_PROFILE_URL =
  "https://www.google.com/maps/place/Dedetizadora+Sentinela+Sa%C3%BAde+Ambiental/@-20.4967359,-47.4182681,17z";
export const GBP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-20.4967359,-47.4182681";
export const GBP_EMBED_URL =
  `https://maps.google.com/maps?q=${PLACE_QUERY}&ll=-20.4967359,-47.4182681&z=16&output=embed`;

/** JSON-LD LocalBusiness com as coordenadas corretas e hasMap do perfil. */
export function gbpJsonLd(extra) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: "Dedetizadora Sentinela Saúde Ambiental",
    telephone: "+5516993747147",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Pedro Calandria Fernandes, 1300",
      addressLocality: "Franca",
      addressRegion: "SP",
      postalCode: "14407-350",
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", latitude: GBP_GEO.latitude, longitude: GBP_GEO.longitude },
    hasMap: GBP_PROFILE_URL,
    areaServed: "Franca e região — SP",
    openingHours: ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
    ...extra,
  };
}

/**
 * Mapa do perfil Google Business com reveal por clip-path e os dois links-botão.
 * Obrigatório no rodapé de toda página. Mobile-first: 260px de altura, botões empilhados.
 */
export function GbpMap({ title = "Como chegar", subtitle = "Dedetizadora Sentinela Saúde Ambiental — Franca/SP", className, style }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  const [wide, setWide] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  React.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const linkStyle = {
    display: "inline-flex",
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "0 20px",
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "0.9375rem",
    textDecoration: "none",
  };

  return (
    <section ref={ref} className={className} aria-label="Localização no Google" style={{ ...style }}>
      <p style={{ margin: 0, fontSize: "var(--text-eyebrow-size)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-eyebrow)", color: "var(--text-eyebrow-inverse)" }}>
        {title}
      </p>
      <p style={{ margin: "6px 0 16px", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 600, color: "#fff" }}>{subtitle}</p>
      <div
        style={{
          overflow: "hidden",
          borderRadius: 12,
          clipPath: shown ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 600ms var(--ease-out)",
        }}
      >
        <iframe
          src={GBP_EMBED_URL}
          width="100%"
          height={wide ? 320 : 260}
          style={{ border: 0, borderRadius: 12, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa — Dedetizadora Sentinela Saúde Ambiental em Franca SP"
        />
      </div>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: wide ? "auto auto" : "1fr", justifyContent: wide ? "start" : "stretch", marginTop: 16 }}>
        <a href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, background: "var(--brand-lime)", color: "var(--brand-navy-heading)" }}>
          📍 Abrir GPS / Rotas
        </a>
        <a href={GBP_PROFILE_URL} target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, background: "transparent", color: "#fff", border: "1px solid var(--border-inverse-strong)" }}>
          Ver perfil no Google
        </a>
      </div>
    </section>
  );
}
