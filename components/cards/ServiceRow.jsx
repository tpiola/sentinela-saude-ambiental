import React from "react";

/** Linha "primeiro identificamos, depois tratamos": miniatura, número, praga, contexto, resposta e link. */
export function ServiceRow({ number, title, context, response, thumbSrc, thumbAlt, href, ctaLabel = "Ver orientação", className, style }) {
  return (
    <article
      className={className}
      style={{
        display: "grid",
        gap: "1.25rem",
        gridTemplateColumns: "88px minmax(0,0.8fr) minmax(0,1.2fr) auto",
        alignItems: "center",
        padding: "2rem 0",
        borderBottom: "1px solid var(--border-default)",
        ...style,
      }}
    >
      <div style={{ position: "relative", height: 80, width: 80, overflow: "hidden", borderRadius: "var(--radius-md)", background: "var(--brand-navy)" }}>
        {thumbSrc ? (
          <img src={thumbSrc} alt={thumbAlt ?? ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : null}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-lime-deep)" }}>{number}</p>
        <h3 style={{ margin: "0.25rem 0 0", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "var(--brand-navy)" }}>{title}</h3>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--brand-muted)" }}>{context}</p>
      </div>
      <p style={{ margin: 0, maxWidth: "36ch", fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.6, color: "var(--brand-navy)" }}>{response}</p>
      <a
        href={href}
        style={{
          display: "inline-flex",
          minHeight: "var(--control-min-h)",
          alignItems: "center",
          whiteSpace: "nowrap",
          padding: "0 0.25rem",
          borderBottom: "2px solid var(--brand-lime)",
          fontSize: "0.875rem",
          fontWeight: 700,
          color: "var(--brand-navy)",
          textDecoration: "none",
        }}
      >
        {ctaLabel}
      </a>
    </article>
  );
}
