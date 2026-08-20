import React from "react";

/** Barra de aviso/documentação: superfície clara, régua lima à esquerda, link à direita. */
export function NoteBar({ children, ctaLabel, href, className, style }) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: "2px solid var(--brand-lime)",
        background: "var(--brand-surface)",
        padding: "1.25rem",
        ...style,
      }}
    >
      <p style={{ margin: 0, maxWidth: "62ch", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--brand-navy)" }}>{children}</p>
      {ctaLabel && href ? (
        <a
          href={href}
          style={{
            display: "inline-flex",
            minHeight: "var(--control-min-h)",
            alignItems: "center",
            whiteSpace: "nowrap",
            fontWeight: 700,
            color: "var(--brand-navy)",
            textDecoration: "underline",
            textDecorationColor: "var(--brand-lime)",
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
          }}
        >
          {ctaLabel}
        </a>
      ) : null}
    </div>
  );
}
