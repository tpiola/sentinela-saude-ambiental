import type { CSSProperties } from "react";

export interface RadioPillGroupProps {
  name: string;
  legend: string;
  options: readonly string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: CSSProperties;
}

export declare function RadioPillGroup(props: RadioPillGroupProps): JSX.Element;
