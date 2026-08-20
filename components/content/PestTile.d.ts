import type { CSSProperties } from "react";
import type { PestIconName } from "../icons/PestIcon";

export interface PestTileProps {
  pest: PestIconName;
  label: string;
  href: string;
  className?: string;
  style?: CSSProperties;
}

export declare function PestTile(props: PestTileProps): JSX.Element;
