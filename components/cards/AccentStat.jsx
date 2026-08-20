import React from "react";

/** Destaque com régua lima à esquerda — números e fatos curtos. */
export function AccentStat({ value, label, tone = "light", className, style }) {
  const inverse = tone === "inverse";
  return (
    <div
      className={className}
      style={{ borderLeft: "2px solid var(--brand-lime)", paddingLeft: "1rem", ...style }}
    >
      <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 700, color: inverse ? "#fff" : "var(--brand-navy)" }}>{value}</p>
      <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: inverse ? "var(--text-on-inverse-muted)" : "var(--brand-muted)" }}>{label}</p>
    </div>
  );
}
