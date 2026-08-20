import type { CSSProperties, ReactNode } from "react";

/**
 * Pílula de status/urgência.
 * @startingPoint section="Primitivos" subtitle="Pílula de urgência com ponto pulsante" viewport="700x120"
 */
export interface BadgeProps {
  children?: ReactNode;
  /** inverse = sobre navy (padrão) · light = sobre branco. */
  tone?: "inverse" | "light";
  /** Ponto lima com halo animado — reserve para prontidão de atendimento. */
  pulse?: boolean;
  className?: string;
  style?: CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
