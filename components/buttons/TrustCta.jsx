import React from "react";
import { GoogleReviewBadge } from "../content/GoogleReviewBadge.jsx";

const TONES = {
  verde: { background: "var(--gbp-verde-sentinela)", color: "var(--gbp-creme)" },
  ambar: { background: "var(--gbp-ambar)", color: "var(--gbp-tinta)" },
};

/** CTA premium de 2 linhas: rótulo forte + selo Google a 70%. Altura mínima 56px. */
export function TrustCta({ label, href, tone = "verde", rating = "4,9", place = "Franca SP", showBadge = true, target, onClick, className, style }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "button";
  const tagProps = href
    ? { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined }
    : { type: "button" };
  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        minHeight: 56,
        width: "100%",
        padding: "10px 20px",
        border: "1px solid transparent",
        borderRadius: "var(--radius-cta)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.9375rem",
        lineHeight: 1.2,
        textAlign: "center",
        textDecoration: "none",
        cursor: "pointer",
        transform: hover ? "translateY(-2px)" : "none",
        filter: hover ? "brightness(0.92)" : "none",
        transition: "transform 200ms var(--ease-out), filter 200ms var(--ease-out)",
        ...TONES[tone],
        ...style,
      }}
    >
      <span>{label}</span>
      {showBadge ? <GoogleReviewBadge rating={rating} place={place} width={158} opacity={0.7} /> : null}
    </Tag>
  );
}

/**
 * O trio obrigatório: Condomínios · Solicitar Avaliação (WhatsApp, primário âmbar) · Escorpião.
 * Mobile-first: empilhado em largura total com gap 12px; 3 colunas a partir de 640px.
 */
export function TrustCtaTrio({
  condominioHref = "#condominio",
  whatsappHref = "https://wa.me/5516993747147?text=" + encodeURIComponent("Olá! Vim pelo site e quero solicitar uma avaliação gratuita."),
  escorpiaoHref = "#escorpiao",
  rating = "4,9",
  place = "Franca SP",
  showBadge = true,
  onNavigate,
  className,
  style,
}) {
  const [wide, setWide] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const handle = (key) => (event) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(key);
  };

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: wide ? "repeat(3, minmax(0, 1fr))" : "1fr",
        ...style,
      }}
    >
      <TrustCta label="Ver Soluções para Condomínio" href={condominioHref} onClick={handle("b2b")} rating={rating} place={place} showBadge={showBadge} />
      <TrustCta label="Solicitar Avaliação" tone="ambar" href={whatsappHref} target="_blank" rating={rating} place={place} showBadge={showBadge} />
      <TrustCta label="Ver Controle de Escorpião" href={escorpiaoHref} onClick={handle("praga")} rating={rating} place={place} showBadge={showBadge} />
    </div>
  );
}
