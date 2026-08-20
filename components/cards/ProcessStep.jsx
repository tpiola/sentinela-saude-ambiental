import React from "react";

/** Passo do processo (glass sobre navy): número lima, título, texto e CTA opcional. */
export function ProcessStep({ number, title, text, ctaLabel, href, className, style }) {
  return (
    <li
      className={className}
      style={{
        listStyle: "none",
        border: "1px solid var(--border-inverse)",
        background: "var(--surface-card-inverse)",
        padding: "1.5rem",
        color: "#fff",
        ...style,
      }}
    >
      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-lime)" }}>{number}</span>
      <h3 style={{ margin: "1rem 0 0", fontFamily: "var(--font-heading)", fontSize: "1.125rem", fontWeight: 700, color: "#fff" }}>{title}</h3>
      <p style={{ margin: "0.75rem 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-on-inverse-muted)" }}>{text}</p>
      {ctaLabel && href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", minHeight: "var(--control-min-h)", alignItems: "center", marginTop: "1.25rem", fontWeight: 600, color: "var(--brand-lime)", textDecoration: "none" }}
        >
          {ctaLabel}
        </a>
      ) : null}
    </li>
  );
}
