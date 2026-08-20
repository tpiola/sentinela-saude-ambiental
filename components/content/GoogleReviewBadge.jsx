import React from "react";

/**
 * Selo "Avaliações Google · 5 estrelas" em SVG inline (PT-BR).
 * Nunca use PNG/JPG para este selo. Herda a cor do texto via currentColor.
 */
export function GoogleReviewBadge({ rating = "4,9", place = "Franca SP", width = 240, opacity = 1, className, style }) {
  const uid = React.useId().replace(/:/g, "");
  const starId = "estrela-" + uid;
  return (
    <svg
      viewBox="0 0 240 44"
      width={width}
      role="img"
      aria-label={`Avaliações Google: 5 estrelas, ${rating} em ${place}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block", maxWidth: "100%", opacity, ...style }}
    >
      <g fontFamily="var(--font-body), Inter, system-ui, sans-serif">
        <text x="0" y="17" fontSize="13" fontWeight="700" fill="currentColor">Avaliações</text>
        <text x="72" y="17" fontSize="13" fontWeight="700">
          <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
        </text>
      </g>
      <g fill="#FBBC05" transform="translate(0,24)">
        <path id={starId} d="M8 0l2.35 4.76 5.25.76-3.8 3.7.9 5.23L8 12l-4.7 2.45.9-5.23-3.8-3.7 5.25-.76z" />
        <use href={`#${starId}`} x="20" />
        <use href={`#${starId}`} x="40" />
        <use href={`#${starId}`} x="60" />
        <use href={`#${starId}`} x="80" />
      </g>
      <text x="100" y="37" fontSize="12" fontWeight="600" fill="currentColor" fontFamily="var(--font-body), Inter, system-ui, sans-serif">
        {rating} · {place}
      </text>
    </svg>
  );
}
