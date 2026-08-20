import type { CSSProperties } from "react";

/**
 * Cartão de prova visual — foto real de campo com local e título sobre gradiente.
 * @startingPoint section="Superfícies" subtitle="Foto de campo com legenda em gradiente" viewport="700x420"
 */
export interface FieldPhotoCardProps {
  src: string;
  /** Alt descritivo com serviço + bairro/cidade — o site usa alt como sinal de SEO local. */
  alt: string;
  /** Ex.: "Centro · Franca SP" — sai em lima, caixa alta. */
  location: string;
  title: string;
  /** Texto abaixo da foto; omita em grades densas. */
  caption?: string;
  /** "3 / 4" (padrão), "2 / 1" para o destaque, "4 / 5" para bairros. */
  aspect?: string;
  radius?: "none" | "md" | "lg";
  showCaptionBelow?: boolean;
  className?: string;
  style?: CSSProperties;
}

export declare function FieldPhotoCard(props: FieldPhotoCardProps): JSX.Element;
