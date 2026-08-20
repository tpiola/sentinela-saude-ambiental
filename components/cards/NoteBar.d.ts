import type { CSSProperties, ReactNode } from "react";

export interface NoteBarProps {
  children?: ReactNode;
  ctaLabel?: string;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function NoteBar(props: NoteBarProps): JSX.Element;
