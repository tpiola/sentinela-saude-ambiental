import type { CSSProperties } from "react";

/**
 * Mapa do perfil Google Business (obrigatório no rodapé de toda página).
 * @startingPoint section="Prova social" subtitle="Mapa GBP com reveal e botões de rota" viewport="700x420"
 */
export interface GbpMapProps {
  /** Eyebrow acima do mapa. Padrão "Como chegar". */
  title?: string;
  subtitle?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const GBP_GEO: { latitude: number; longitude: number };
export declare const GBP_PROFILE_URL: string;
export declare const GBP_DIRECTIONS_URL: string;
export declare const GBP_EMBED_URL: string;
/** JSON-LD LocalBusiness já com as coordenadas corretas e hasMap. */
export declare function gbpJsonLd(extra?: Record<string, unknown>): Record<string, unknown>;
export declare function GbpMap(props: GbpMapProps): JSX.Element;
