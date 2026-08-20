import React from "react";

const BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontFamily: "var(--font-body)",
  fontWeight: 700,
  textDecoration: "none",
  whiteSpace: "nowrap",
  borderRadius: "var(--radius-cta)",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "background-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), filter var(--duration-base) var(--ease-standard)",
};

const SIZES = {
  cta: { minHeight: "var(--cta-min-h)", padding: "0 1.75rem", fontSize: "1rem" },
  md: { minHeight: "3rem", padding: "0 1.5rem", fontSize: "0.9375rem" },
  sm: { minHeight: "var(--control-min-h)", padding: "0 0.875rem", fontSize: "0.75rem", letterSpacing: "0.02em" },
};

const VARIANTS = {
  whatsapp: { background: "var(--brand-whatsapp)", color: "#fff" },
  lime: { background: "var(--brand-lime)", color: "var(--brand-navy-heading)" },
  navy: { background: "var(--brand-navy)", color: "#fff" },
  "outline-navy": { background: "transparent", color: "var(--brand-navy)", borderColor: "var(--brand-navy)" },
  "outline-light": { background: "transparent", color: "#fff", borderColor: "var(--border-inverse-strong)" },
  underline: {
    background: "transparent",
    color: "var(--brand-navy)",
    borderRadius: 0,
    borderBottom: "2px solid var(--brand-lime)",
    padding: "0 0.25rem",
  },
};

const HOVER = {
  whatsapp: { filter: "brightness(1.1)" },
  lime: { background: "var(--brand-green-light)" },
  navy: { background: "var(--brand-navy-soft)" },
  "outline-navy": { background: "var(--brand-navy)", color: "#fff" },
  "outline-light": { background: "rgba(255,255,255,0.1)", borderColor: "#fff" },
  underline: { borderBottomColor: "var(--brand-navy)" },
};

/** CTA do site. Vira <a> quando recebe href. Cantos retos por padrão (radius-cta = 0). */
export function Button({
  variant = "whatsapp",
  size = "cta",
  href,
  icon,
  pill = false,
  fullWidth = false,
  children,
  onClick,
  type = "button",
  target,
  rel,
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const composed = {
    ...BASE,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover ? HOVER[variant] : null),
    ...(pill ? { borderRadius: "var(--radius-pill)" } : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...style,
  };
  const Tag = href ? "a" : "button";
  const tagProps = href
    ? { href, target, rel: rel ?? (target === "_blank" ? "noopener noreferrer" : undefined) }
    : { type };

  return (
    <Tag
      {...tagProps}
      {...rest}
      className={className}
      style={composed}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {children}
    </Tag>
  );
}
