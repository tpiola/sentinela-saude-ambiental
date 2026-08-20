import type { CSSProperties } from "react";

export interface WhatsAppFloatProps {
  /** Link wa.me com mensagem pré-preenchida. */
  href?: string;
  label?: string;
  /** "static" para previews. */
  position?: "fixed" | "static";
  className?: string;
  style?: CSSProperties;
}

export declare function WhatsAppFloat(props: WhatsAppFloatProps): JSX.Element;
