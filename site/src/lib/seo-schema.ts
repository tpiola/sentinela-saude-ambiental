import { BRAND } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export type FaqItem = { question: string; answer: string };

function buildFaqMainEntity(items: readonly FaqItem[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
}

/** GEO/SEO: marca perguntas e respostas para extração por buscadores e IA. */
export function buildFaqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buildFaqMainEntity(items),
  };
}

/** Para compor um FAQPage como um dos nós de um @graph maior (ver growth-page.tsx / page-client.tsx). */
export function buildFaqGraphNode(id: string, items: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: buildFaqMainEntity(items),
  };
}

export function buildLocalBusinessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
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
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
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
        // hasMap aponta para a ficha real do Google (Place ID verificado).
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=Sentinela+Sa%C3%BAde+Ambiental+Franca+SP&query_place_id=0xb70cb762d1af984f",
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
    ],
  };
}
