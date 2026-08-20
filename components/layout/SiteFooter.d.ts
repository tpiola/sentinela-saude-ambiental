import type { CSSProperties } from "react";

/**
 * Rodapé navy com medalhão do brasão e aviso sanitário obrigatório.
 * @startingPoint section="Layout" subtitle="Rodapé navy com contatos e aviso" viewport="1200x520"
 */
export interface SiteFooterProps {
  logoSrc?: string;
  links?: readonly { href: string; label: string }[];
  phoneDisplay?: string;
  phoneE164?: string;
  email?: string;
  addressFull?: string;
  cnpj?: string;
  year?: number;
  className?: string;
  style?: CSSProperties;
}

export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
