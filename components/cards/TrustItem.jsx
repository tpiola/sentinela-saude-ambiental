import React from "react";

/** Célula da faixa de confiança: rótulo caixa-alta + valor em Montserrat. */
export function TrustItem({ label, value, href, className, style }) {
  return (
    <div className={className} style={{ padding: "1.5rem 0", ...style }}>
      <dt style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--brand-muted)" }}>{label}</dt>
      <dd style={{ margin: "0.5rem 0 0", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 600, color: "var(--brand-navy)" }}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{value}</a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
