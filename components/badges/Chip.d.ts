import type { CSSProperties, ReactNode } from "react";

export interface ChipProps {
  children?: ReactNode;
  /** Com href a pílula fica clicável e o hover preenche em lima. */
  href?: string;
  /** md = municípios (14px) · sm = bairros extras (12px). */
  size?: "md" | "sm";
  className?: string;
  style?: CSSProperties;
}

export declare function Chip(props: ChipProps): JSX.Element;
