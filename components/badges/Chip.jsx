import React from "react";

/** Pílula de bairro/município/setor. Vira <a> com href. */
export function Chip({ children, href, size = "md", className, style }) {
  const [hover, setHover] = React.useState(false);
  const s = size === "sm"
    ? { padding: "0.375rem 0.75rem", fontSize: "0.75rem" }
    : { padding: "0.5rem 1rem", fontSize: "0.875rem" };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "var(--radius-pill)",
    border: "1px solid var(--border-default)",
    background: hover && href ? "var(--brand-lime)" : "var(--brand-surface)",
    color: "var(--brand-navy)",
    fontWeight: 600,
    fontFamily: "var(--font-body)",
    textDecoration: "none",
    transition: "background-color var(--duration-base) var(--ease-standard)",
    ...s,
    ...style,
  };
  if (!href) return <span className={className} style={base}>{children}</span>;
  return (
    <a
      className={className}
      href={href}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}
