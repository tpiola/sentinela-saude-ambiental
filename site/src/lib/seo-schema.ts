import { BRAND } from "@/lib/brand";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

export function buildLocalBusinessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PestControlService",
        "@id": `${siteUrl}/#organization`,
        name: BRAND.name,
        description: BRAND.tagline,
        url: siteUrl,
        telephone: `+${BRAND.phoneE164}`,
        email: BRAND.email,
        image: `${siteUrl}/media/sentinela/drive/dedetizacao-centro-franca-sp.webp`,
        logo: `${siteUrl}${BRAND.logoPath}`,
        taxID: BRAND.cnpj,
        priceRange: "$$",
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
        areaServed: BRAND.areaServed.map((city) => ({
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: "São Paulo" },
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "08:00",
            closes: "17:00",
          },
        ],
        sameAs: [BRAND.instagramUrl, BRAND.facebookUrl],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de controle de pragas",
          itemListElement: BRAND.services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.desc,
              provider: { "@id": `${siteUrl}/#organization` },
              areaServed: { "@type": "City", name: "Franca" },
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
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `Controle de pragas em Franca SP | ${BRAND.name}`,
        description: BRAND.tagline,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/media/sentinela/drive/dedetizacao-centro-franca-sp.webp`,
          width: 1200,
          height: 630,
        },
      },
    ],
  };
}
