import React from "react";

export function LgpdBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const consent = localStorage.getItem("sentinela_lgpd_consent");
      if (!consent) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch (e) {}
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("sentinela_lgpd_consent", "accepted_" + new Date().toISOString());
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e LGPD"
      className="animate-fade-up"
      style={{
        position: "fixed",
        bottom: 24,
        left: 20,
        right: 20,
        maxWidth: 720,
        margin: "0 auto",
        zIndex: 9999,
        background: "rgba(0, 20, 42, 0.96)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(143, 206, 42, 0.4)",
        borderRadius: 14,
        padding: "16px 20px",
        boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        color: "#fff",
      }}
    >
      <div style={{ flex: "1 1 340px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: "0.875rem" }}>🔒</span>
          <strong style={{ fontSize: "0.875rem", color: "var(--brand-lime)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Privacidade & LGPD
          </strong>
        </div>
        <p style={{ margin: 0, fontSize: "0.8125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.45 }}>
          Utilizamos cookies e tecnologias de medição estritamente em conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong> para garantir segurança e agilidade no seu atendimento.
        </p>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button
          type="button"
          onClick={accept}
          className="hover-lift"
          style={{
            padding: "10px 22px",
            background: "var(--brand-lime)",
            color: "var(--brand-navy)",
            border: 0,
            borderRadius: 6,
            fontWeight: 800,
            fontSize: "0.875rem",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(143,206,42,0.3)",
          }}
        >
          Aceitar e Prosseguir
        </button>
      </div>
    </aside>
  );
}