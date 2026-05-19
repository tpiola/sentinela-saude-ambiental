import { BRAND } from "@/lib/brand";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.sentinelasaudeambiental.com.br";

export function buildLocalBusinessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PestControlService",
        "@id": `${siteUrl}/#organization`,
        name: BRAND.name,
        alternateName: BRAND.legalHint,
        description: BRAND.tagline,
        url: siteUrl,
        telephone: `+${BRAND.phoneE164}`,
        email: BRAND.email,
        image: `${siteUrl}${BRAND.logoPath}`,
        logo: `${siteUrl}${BRAND.logoPath}`,
        priceRange: BRAND.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: BRAND.address.streetAddress,
          addressLocality: BRAND.address.addressLocality,
          addressRegion: BRAND.address.addressRegion,
          postalCode: BRAND.address.postalCode,
          addressCountry: BRAND.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BRAND.geo.latitude,
          longitude: BRAND.geo.longitude,
        },
        areaServed: [
          {
            "@type": "GeoCircle",
            description: BRAND.coverageSummary,
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: BRAND.geo.latitude,
              longitude: BRAND.geo.longitude,
            },
            geoRadius: {
              "@type": "Distance",
              value: BRAND.radiusKm,
              unitCode: "KMT",
            },
          },
          ...BRAND.areaServed.map((city) => ({
            "@type": "City",
            name: city,
            containedInPlace: {
              "@type": "State",
              name: "São Paulo",
            },
          })),
        ],
        openingHours: BRAND.openingHours.schema,
        sameAs: [BRAND.instagramUrl, BRAND.facebookUrl],
        hasMap: `${siteUrl}/#mapa`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${BRAND.phoneE164}`,
          email: BRAND.email,
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
        knowsAbout: BRAND.services.map((s) => s.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de controle de pragas",
          itemListElement: BRAND.services.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: BRAND.name,
        description: BRAND.tagline,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: BRAND.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `Controle de pragas em Franca SP | ${BRAND.name}`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "pt-BR",
      },
    ],
  };
}
