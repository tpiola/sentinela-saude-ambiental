import type { CSSProperties } from "react";

/**
 * Header fixo do site (navy translúcido, menu de pragas, telefone).
 * @startingPoint section="Layout" subtitle="Header navy com menu de pragas" viewport="1200x120"
 */
export interface SiteHeaderNavItem {
  href: string;
  label: string;
}

export interface SiteHeaderProps {
  navLinks?: readonly SiteHeaderNavItem[];
  /** Itens do dropdown "Pragas". */
  pestLinks?: readonly SiteHeaderNavItem[];
  phoneDisplay?: string;
  whatsappHref?: string;
  logoSrc?: string;
  /** Estado após 40px de rolagem: mais opaco, menos altura. */
  scrolled?: boolean;
  /** Use "static" dentro de cards e previews. */
  position?: "fixed" | "static" | "sticky";
  className?: string;
  style?: CSSProperties;
}

export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
