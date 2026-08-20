import React from "react";

/** Rótulo mono-caixa-alta que abre toda seção do site. */
export function Eyebrow({ children, tone = "light", rule = false, as = "p", className, style }) {
  const Tag = as;
  return (
    <Tag
      className={className}
      style={{
        display: rule ? "flex" : "block",
        alignItems: "center",
        gap: "0.5rem",
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-eyebrow-size)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)",
        color: tone === "inverse" ? "var(--text-eyebrow-inverse)" : "var(--text-eyebrow)",
        ...style,
      }}
    >
      {rule ? <span style={{ height: 2, width: 32, background: "var(--brand-lime)" }} /> : null}
      {children}
    </Tag>
  );
}
