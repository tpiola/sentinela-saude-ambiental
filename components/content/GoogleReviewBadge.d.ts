import type { CSSProperties } from "react";

/**
 * Selo de avaliação Google (SVG inline, ~1KB, nítido em qualquer resolução).
 * @startingPoint section="Prova social" subtitle="Selo Google 5 estrelas em SVG" viewport="700x120"
 */
export interface GoogleReviewBadgeProps {
  /** Nota real do perfil, formato PT-BR. Padrão "4,9". */
  rating?: string;
  /** Cidade/estado exibido depois da nota. Padrão "Franca SP". */
  place?: string;
  /** Largura em px. Padrão 240; dentro de botão use 150–170. */
  width?: number;
  /** Dentro de botão o selo fica a 0.7. */
  opacity?: number;
  className?: string;
  style?: CSSProperties;
}

export declare function GoogleReviewBadge(props: GoogleReviewBadgeProps): JSX.Element;
