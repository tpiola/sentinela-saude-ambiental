import type { CSSProperties } from "react";

export interface MobileStickyBarProps {
  phoneE164?: string;
  whatsappHref?: string;
  label?: string;
  position?: "fixed" | "static";
  className?: string;
  style?: CSSProperties;
}

export declare function MobileStickyBar(props: MobileStickyBarProps): JSX.Element;
