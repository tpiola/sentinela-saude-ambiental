import type { CSSProperties } from "react";

export interface ProcessStepProps {
  /** "01" … "03". */
  number: string;
  title: string;
  text: string;
  /** CTA de WhatsApp opcional — o site usa nos passos 01 e 03. */
  ctaLabel?: string;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function ProcessStep(props: ProcessStepProps): JSX.Element;
