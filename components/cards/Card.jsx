import React from "react";

const SURFACES = {
  white: { background: "var(--surface-card)", border: "1px solid var(--border-default)", color: "var(--brand-navy)" },
  muted: { background: "var(--brand-surface)", border: "1px solid var(--border-default)", color: "var(--brand-navy)" },
  navy: { background: "var(--brand-navy)", border: "1px solid var(--border-inverse)", color: "#fff" },
  glass: { background: "var(--surface-card-inverse)", border: "1px solid var(--border-inverse)", color: "#fff" },
};

/** Superfície base. Reto por padrão — `radius="lg"` só em galeria/FAQ. */
export function Card({
  surface = "white",
  radius = "none",
  padding = "1.5rem",
  accent,
  shadow = false,
  children,
  className,
  style,
}) {
  const accentEdge =
    accent === "left"
      ? { borderLeft: "2px solid var(--brand-lime)" }
      : accent === "top"
        ? { borderTop: "2px solid var(--brand-lime)" }
        : null;
  return (
    <div
      className={className}
      style={{
        borderRadius: radius === "none" ? 0 : `var(--radius-${radius})`,
        padding,
        boxShadow: shadow ? "var(--shadow-card)" : "none",
        ...SURFACES[surface],
        ...accentEdge,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
