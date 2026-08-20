import type { CSSProperties, ReactNode } from "react";

export interface TrustItemProps {
  /** Ex.: "WhatsApp", "Experiência", "Prova institucional", "Cobertura". */
  label: string;
  value: ReactNode;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function TrustItem(props: TrustItemProps): JSX.Element;
