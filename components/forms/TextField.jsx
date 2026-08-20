import React from "react";

const LABEL = { fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)" };
const CONTROL = {
  marginTop: "0.5rem",
  minHeight: "3rem",
  width: "100%",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-form)",
  background: "#fff",
  padding: "0 0.75rem",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  color: "var(--foreground)",
};

/** Campo de texto reto do formulário de avaliação. */
export function TextField({ id, label, value, onChange, placeholder, error, required, autoComplete, className, style }) {
  return (
    <label htmlFor={id} className={className} style={{ display: "block", ...style }}>
      <span style={LABEL}>{label}</span>
      <input
        id={id}
        name={id}
        required={required}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-erro` : undefined}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ ...CONTROL, borderColor: error ? "var(--text-error)" : "var(--border-default)" }}
      />
      {error ? (
        <span id={`${id}-erro`} style={{ display: "block", marginTop: "0.25rem", fontSize: "0.75rem", color: "var(--text-error)" }}>{error}</span>
      ) : null}
    </label>
  );
}

/** Select reto com as mesmas medidas do TextField. */
export function SelectField({ id, label, value, onChange, options, placeholder = "Selecione", error, required, className, style }) {
  return (
    <label htmlFor={id} className={className} style={{ display: "block", ...style }}>
      <span style={LABEL}>{label}</span>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-erro` : undefined}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ ...CONTROL, borderColor: error ? "var(--text-error)" : "var(--border-default)" }}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error ? (
        <span id={`${id}-erro`} style={{ display: "block", marginTop: "0.25rem", fontSize: "0.75rem", color: "var(--text-error)" }}>{error}</span>
      ) : null}
    </label>
  );
}
