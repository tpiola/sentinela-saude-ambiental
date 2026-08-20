import type { CSSProperties } from "react";

/**
 * Marca Sentinela (brasão PNG + lockup).
 * @startingPoint section="Layout" subtitle="Brasão + lockup em 3 variantes" viewport="700x200"
 */
export interface LogoProps {
  /** compact = header · hero = grande com swoosh · full = empilhado centralizado (rodapé, capas). */
  variant?: "compact" | "hero" | "full";
  /** dark = sobre navy · light = sobre branco. */
  tone?: "dark" | "light";
  /** Caminho do brasão PNG (assets/logo-brasao.png). Nunca substitua por SVG desenhado. */
  logoSrc?: string;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export interface LogoSwooshProps {
  className?: string;
  style?: CSSProperties;
}

export declare function Logo(props: LogoProps): JSX.Element;
export declare function LogoSwoosh(props: LogoSwooshProps): JSX.Element;
