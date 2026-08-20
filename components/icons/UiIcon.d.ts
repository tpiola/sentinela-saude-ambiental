import type { CSSProperties } from "react";

export type UiIconName =
  | "phone"
  | "menu"
  | "close"
  | "chevron-down"
  | "arrow-right"
  | "pin"
  | "document"
  | "calendar"
  | "shield";

export interface UiIconProps {
  name: UiIconName;
  /** Padrão 24. Chevrons do header usam 12–16. */
  size?: number;
  /** Padrão 2 — o traço do site. Chevrons do menu usam 3. */
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

export declare function UiIcon(props: UiIconProps): JSX.Element | null;
