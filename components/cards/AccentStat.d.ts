import type { CSSProperties, ReactNode } from "react";

export interface AccentStatProps {
  /** Valor ou fato curto: "Franca e região", "< 30 min". */
  value: ReactNode;
  label: string;
  tone?: "light" | "inverse";
  className?: string;
  style?: CSSProperties;
}

export declare function AccentStat(props: AccentStatProps): JSX.Element;
