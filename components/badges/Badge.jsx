import React from "react";

/** Pílula de status. Com `pulse`, ganha o ponto lima com halo (badge de urgência do hero). */
export function Badge({ children, tone = "inverse", pulse = false, className, style }) {
  const inverse = tone === "inverse";
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        borderRadius: "var(--radius-pill)",
        padding: "0.375rem 0.875rem",
        fontSize: "0.75rem",
        fontWeight: 700,
        fontFamily: "var(--font-body)",
        color: inverse ? "var(--brand-lime)" : "var(--brand-lime-deep)",
        background: inverse ? "rgba(143,206,42,0.1)" : "var(--brand-surface)",
        border: `1px solid ${inverse ? "rgba(143,206,42,0.3)" : "var(--brand-border)"}`,
        ...style,
      }}
    >
      {pulse ? (
        <span style={{ position: "relative", display: "flex", height: 8, width: 8 }}>
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              background: "var(--brand-lime)",
              opacity: 0.75,
              animation: "sentinela-ping 1s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
          <span style={{ position: "relative", height: 8, width: 8, borderRadius: "999px", background: "var(--brand-lime)" }} />
        </span>
      ) : null}
      {children}
    </span>
  );
}
