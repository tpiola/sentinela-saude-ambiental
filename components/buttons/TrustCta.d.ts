import type { CSSProperties, MouseEventHandler } from "react";

/**
 * CTA premium com selo Google embaixo do rótulo.
 * @startingPoint section="Prova social" subtitle="Trio de CTA com selo Google" viewport="700x200"
 */
export interface TrustCtaProps {
  label: string;
  href?: string;
  /** verde = #1E5C3F com texto creme · ambar = #E8A020 com texto tinta (CTA primário). */
  tone?: "verde" | "ambar";
  rating?: string;
  place?: string;
  /** false esconde o selo Google dentro do botão. Padrão true. */
  showBadge?: boolean;
  target?: string;
  onClick?: MouseEventHandler;
  className?: string;
  style?: CSSProperties;
}

export interface TrustCtaTrioProps {
  condominioHref?: string;
  /** wa.me com a mensagem "Olá! Vim pelo site e quero solicitar uma avaliação gratuita." */
  whatsappHref?: string;
  escorpiaoHref?: string;
  rating?: string;
  place?: string;
  /** false esconde o selo nos três botões do trio. Padrão true. */
  showBadge?: boolean;
  /** Em SPA/protótipo: recebe "b2b" | "praga" em vez de navegar. */
  onNavigate?: (key: "b2b" | "praga") => void;
  className?: string;
  style?: CSSProperties;
}

export declare function TrustCta(props: TrustCtaProps): JSX.Element;
export declare function TrustCtaTrio(props: TrustCtaTrioProps): JSX.Element;
