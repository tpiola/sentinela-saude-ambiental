import React from "react";

/** Grupo de rádios em caixas retas (urgência do atendimento). */
export function RadioPillGroup({ name, legend, options, value, onChange, className, style }) {
  return (
    <fieldset className={className} style={{ border: "none", margin: 0, padding: 0, ...style }}>
      <legend style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--brand-navy)" }}>{legend}</legend>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.75rem" }}>
        {options.map((opt) => (
          <label
            key={opt}
            style={{
              display: "flex",
              minHeight: "var(--control-min-h)",
              alignItems: "center",
              gap: "0.5rem",
              border: `1px solid ${value === opt ? "var(--brand-navy)" : "var(--border-default)"}`,
              background: value === opt ? "var(--brand-surface)" : "#fff",
              padding: "0 1rem",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange?.(e.target.value)}
              style={{ accentColor: "var(--brand-lime-deep)" }}
            />
            <span style={{ whiteSpace: "nowrap", fontSize: "0.875rem", color: "var(--brand-navy)" }}>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
