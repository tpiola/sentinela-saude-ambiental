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
        alternateName: BRAND.legalHint,
        description: BRAND.tagline,
        url: siteUrl,
        telephone: `+${BRAND.phoneE164}`,
        email: BRAND.email,
        image: `${siteUrl}/media/sentinela/drive/dedetizacao-centro-franca-sp.webp`,
        logo: `${siteUrl}${BRAND.logoPath}`,
        taxID: BRAND.cnpj,
        priceRange: "$$",
        areaServed: [
          {
            "@type": "City",
            name: "Franca",
            containedInPlace: {
              "@type": "State",
              name: "São Paulo",
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
          name: "Serviços de controle de pragas urbanas",
          itemListElement: BRAND.services.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              provider: { "@id": `${siteUrl}/#organization` },
              areaServed: {
                "@type": "City",
                name: "Franca",
              },
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
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
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
        description: BRAND.tagline,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/media/sentinela/drive/dedetizacao-centro-franca-sp.webp`,
        },
      },
    ],
  };
}
