import type { CSSProperties, ReactNode } from "react";

/**
 * Acordeão de dúvidas frequentes.
 * @startingPoint section="Blocos de conteúdo" subtitle="Acordeão de FAQ com + giratório" viewport="700x220"
 */
export interface FaqItemProps {
  question: string;
  answer: ReactNode;
  /** Controlado: passe open + onToggle para manter só um item aberto. */
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

export declare function FaqItem(props: FaqItemProps): JSX.Element;
