import type { CSSProperties, ReactNode } from "react";

/**
 * Cabeçalho de seção (eyebrow + h2 + lead) com o tracking negativo da marca.
 * @startingPoint section="Blocos de conteúdo" subtitle="Eyebrow + título + lead" viewport="700x220"
 */
export interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "inverse";
  align?: "left" | "center";
  /** Régua lima antes do eyebrow. */
  rule?: boolean;
  /** id do <h2> para aria-labelledby da seção. */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
