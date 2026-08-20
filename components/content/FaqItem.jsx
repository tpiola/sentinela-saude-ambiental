import React from "react";

/** Item de FAQ: cartão branco arredondado, "+" que gira 45° ao abrir. */
export function FaqItem({ question, answer, open, defaultOpen = false, onToggle, className, style }) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open ?? internal;
  function toggle() {
    if (onToggle) onToggle(!isOpen);
    if (open === undefined) setInternal((v) => !v);
  }
  return (
    <li
      className={className}
      style={{
        listStyle: "none",
        overflow: "hidden",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-default)",
        background: "var(--surface-card)",
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={toggle}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1rem 1.25rem",
          background: "none",
          border: "none",
          textAlign: "left",
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--brand-navy)",
          cursor: "pointer",
        }}
      >
        {question}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            fontSize: "1.25rem",
            color: "var(--brand-lime-deep)",
            transform: isOpen ? "rotate(45deg)" : "none",
            transition: "transform var(--duration-base) var(--ease-standard)",
          }}
        >
          +
        </span>
      </button>
      {isOpen ? (
        <p style={{ margin: 0, borderTop: "1px solid var(--border-default)", padding: "0.75rem 1.25rem 1rem", lineHeight: 1.7, color: "var(--brand-muted)" }}>
          {answer}
        </p>
      ) : null}
    </li>
  );
}
