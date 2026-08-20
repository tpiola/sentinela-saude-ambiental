import React from "react";

/** Cabeçalho de seção: eyebrow + h2 + lead, alinhado à esquerda ou centralizado. */
export function SectionHeading({ eyebrow, title, lead, tone = "light", align = "left", rule = false, id, className, style }) {
  const inverse = tone === "inverse";
  return (
    <div
      className={className}
      style={{
        maxWidth: align === "center" ? "48rem" : "56rem",
        marginInline: align === "center" ? "auto" : undefined,
        textAlign: align,
        ...style,
      }}
    >
      <p
        style={{
          display: rule ? "flex" : "block",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: "0.5rem",
          margin: 0,
          fontSize: "var(--text-eyebrow-size)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-eyebrow)",
          color: inverse ? "var(--text-eyebrow-inverse)" : "var(--text-eyebrow)",
        }}
      >
        {rule ? <span style={{ height: 2, width: 32, background: "var(--brand-lime)" }} /> : null}
        {eyebrow}
      </p>
      <h2
        id={id}
        style={{
          margin: "1rem 0 0",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.875rem, 3.4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "var(--tracking-h2)",
          color: inverse ? "#fff" : "var(--brand-navy)",
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p style={{ margin: "1rem 0 0", fontSize: "1rem", lineHeight: "var(--leading-body)", color: inverse ? "var(--text-on-inverse-muted)" : "var(--brand-muted)" }}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
