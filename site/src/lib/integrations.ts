/**
 * IDs públicos de mensuração. Quando todos estiverem vazios, nenhum script,
 * cookie de publicidade ou aviso de consentimento é exibido.
 */
export const INTEGRATIONS = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;
