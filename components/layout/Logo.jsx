import React from "react";

/** Linhas swoosh decorativas (lima em cima, azul médio embaixo) — parte do lockup da marca. */
export function LogoSwoosh({ className, style }) {
  return (
    <svg viewBox="0 0 280 14" className={className} style={{ width: "100%", maxWidth: 280, ...style }} aria-hidden="true">
      <path d="M4 8 Q70 2 140 6 T276 6" fill="none" stroke="var(--brand-lime)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 11 Q76 7 142 10 T272 10" fill="none" stroke="var(--brand-accent-blue)" strokeWidth="2" strokeLinecap="round" opacity="0.95" />
    </svg>
  );
}

/**
 * Marca Sentinela — brasão PNG + lockup tipográfico.
 * O brasão é imagem oficial: nunca redesenhe em SVG.
 */
export function Logo({
  variant = "compact",
  tone = "dark",
  logoSrc = "assets/logo-brasao.png",
  href,
  className,
  style,
}) {
  const inverse = tone === "dark";
  const titleColor = inverse ? "#fff" : "var(--brand-navy-heading)";
  const subColor = inverse ? "var(--brand-lime)" : "var(--brand-lime-deep)";
  const markHeight = variant === "compact" ? 48 : variant === "hero" ? 112 : 96;

  const mark = (
    <img
      src={logoSrc}
      alt="Sentinela Saúde Ambiental"
      style={{ height: markHeight, width: "auto", objectFit: "contain", flexShrink: 0 }}
    />
  );

  const inner =
    variant === "full" ? (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", textAlign: "center" }}>
        {mark}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: titleColor }}>Sentinela</p>
          <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: subColor }}>Saúde ambiental</p>
        </div>
        <LogoSwoosh />
        <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: inverse ? "rgba(255,255,255,0.5)" : "var(--brand-tagline-grey)" }}>
          Controle integrado de pragas
        </p>
      </div>
    ) : (
      <div style={{ display: "flex", alignItems: "center", gap: variant === "hero" ? "1.5rem" : "0.5rem" }}>
        {mark}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: variant === "hero" ? "2rem" : "1rem", fontWeight: variant === "hero" ? 900 : 800, letterSpacing: "var(--tracking-logo)", textTransform: "uppercase", color: titleColor }}>
            Sentinela
          </span>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: variant === "hero" ? "0.875rem" : "0.75rem", fontWeight: 700, letterSpacing: "var(--tracking-logo-sub)", textTransform: "uppercase", color: subColor }}>
            Saúde Ambiental
          </span>
          {variant === "hero" ? <LogoSwoosh style={{ marginTop: 6, maxWidth: 240 }} /> : null}
        </div>
      </div>
    );

  if (href) {
    return (
      <a href={href} className={className} style={{ textDecoration: "none", ...style }}>
        {inner}
      </a>
    );
  }
  return <div className={className} style={style}>{inner}</div>;
}
