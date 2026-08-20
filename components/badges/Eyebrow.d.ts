import type { CSSProperties, ReactNode } from "react";

export interface EyebrowProps {
  children?: ReactNode;
  /** light = verde-lima escuro (fundo branco) · inverse = lima (fundo navy). */
  tone?: "light" | "inverse";
  /** Régua lima de 32×2px antes do texto (variante usada em "Sobre a Sentinela"). */
  rule?: boolean;
  as?: "p" | "span" | "h2" | "dt";
  className?: string;
  style?: CSSProperties;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
