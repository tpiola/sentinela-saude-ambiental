import type { CSSProperties, ReactNode } from "react";

/**
 * Superfície base do site.
 * @startingPoint section="Superfícies" subtitle="Cartão reto em 4 superfícies" viewport="700x200"
 */
export interface CardProps {
  /** white · muted (#f0f4f8) · navy · glass (branco 5% sobre navy). */
  surface?: "white" | "muted" | "navy" | "glass";
  /** none é o padrão do site; lg (16px) só em galeria e FAQ. */
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  padding?: string;
  /** Régua lima de 2px na borda esquerda ou superior. */
  accent?: "left" | "top";
  shadow?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
