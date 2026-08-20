import type { CSSProperties } from "react";

export interface WhatsAppIconProps {
  /** Lado do quadrado em px. Padrão 20 (CTA usa 20, float usa 28–32). */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export declare function WhatsAppIcon(props: WhatsAppIconProps): JSX.Element;
