import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

/**
 * CTA padrão da Sentinela — cantos retos, peso 700, altura mínima 56px no tamanho `cta`.
 * @startingPoint section="Primitivos" subtitle="CTA de conversão em 6 variantes" viewport="700x180"
 */
export interface ButtonProps {
  /** whatsapp = verde sólido (conversão) · lime = ação em fundo navy · navy = ação em fundo claro · outline-* = secundário · underline = link com régua lima */
  variant?: "whatsapp" | "lime" | "navy" | "outline-navy" | "outline-light" | "underline";
  /** cta = 56px (hero e seções) · md = 48px · sm = 44px (chips do header) */
  size?: "cta" | "md" | "sm";
  /** Presente = renderiza <a>. */
  href?: string;
  /** Normalmente <WhatsAppIcon size={20} />. */
  icon?: ReactNode;
  /** Arredondamento total — só para CTAs de "Como funciona" e galeria. */
  pill?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
