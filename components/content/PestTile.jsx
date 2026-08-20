import React from "react";
import { PestIcon } from "../icons/PestIcon.jsx";

/** Tile de tipo de ocorrência: ícone de praga + rótulo, borda que acende no hover. */
export function PestTile({ pest, label, href, className, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      className={className}
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        borderRadius: "var(--radius-md)",
        border: `1px solid ${hover ? "var(--brand-lime-deep)" : "var(--border-default)"}`,
        background: hover ? "#fff" : "var(--brand-surface)",
        padding: "1rem 0.5rem",
        textAlign: "center",
        textDecoration: "none",
        transition: "background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)",
        ...style,
      }}
    >
      <PestIcon name={pest} size={28} style={{ color: "var(--brand-navy)" }} />
      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--brand-navy)" }}>{label}</span>
    </a>
  );
}
