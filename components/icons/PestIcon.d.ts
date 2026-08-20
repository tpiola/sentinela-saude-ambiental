import type { CSSProperties } from "react";

export type PestIconName =
  | "baratas"
  | "ratos"
  | "escorpiao"
  | "formigas"
  | "aranhas"
  | "mosquitos"
  | "moscas"
  | "cupins"
  | "caixa-dagua";

export interface PestIconProps {
  name: PestIconName;
  /** Padrão 24. Tiles de ocorrência usam 28. */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export declare function PestIcon(props: PestIconProps): JSX.Element | null;
