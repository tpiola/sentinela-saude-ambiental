import { BRAND } from "@/lib/brand";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

/** FAQ específico por praga — otimizado para rich results do Google */
const pragasFAQ = [
  {
    praga: "Escorpião",
    questions: [
      {
        question: "Escorpião apareceu em casa em Franca. O que fazer?",
        answer:
          "Mantenha distância, não tente capturar com as mãos e chame a Sentinela imediatamente. Escorpião-amarelo (Tityus serrulatus) é o mais comum no Residencial Baldassari, City Petrópolis e bairros de Franca — crianças e idosos correm maior risco. Oferecemos atendimento prioritário com resposta em minutos pelo WhatsApp.",
      },
      {
        question: "Quanto custa dedetização de escorpião em Franca SP?",
        answer:
          "O valor da dedetização de escorpião em Franca SP varia conforme o tamanho do imóvel e nível de infestação. A Sentinela oferece orçamento gratuito via WhatsApp (16) 99374-7147 com avaliação técnica no local. Trabalhamos com produtos registrados na ANVISA e garantia no serviço.",
      },
    ],
  },
  {
    praga: "Barata",
    questions: [
      {
        question: "Como eliminar baratas de vez em Franca?",
        answer:
          "A Sentinela utiliza gel inseticida profissional de ação residual em pontos estratégicos (frestas, rodapés, cozinha e banheiros). O tratamento elimina a colônia em até 7 dias com efeito residual de 60-90 dias. Atendemos todos os bairros de Franca SP com laudo técnico e garantia.",
      },
    ],
  },
  {
    praga: "Cupim",
    questions: [
      {
        question: "Tem cupim no meu telhado — a Sentinela resolve?",
        answer:
          "Sim! Realizamos descupinização com barreira química profissional em telhados, móveis e estruturas de madeira. Nosso serviço em Franca inclui inspeção completa, aplicação de produtos registrados ANVISA e garantia contratual contra reinfestação.",
      },
    ],
  },
  {
    praga: "Rato",
    questions: [
      {
        question: "Como eliminar ratos em casa com segurança?",
        answer:
          "A Sentinela utiliza iscas raticidas em porta-iscas blindados — método seguro para crianças e pets. Identificamos pontos de entrada, eliminamos a infestação ativa e instalamos barreiras preventivas. Serviço com laudo técnico para toda Franca e região.",
      },
    ],
  },
];

/** Serviços individuais — Service schema separado para cada praga */
function buildPragaServices() {
  return pragasFAQ.map((p) => ({
    "@type": "Service",
    name: `Dedetização de ${p.praga.toLowerCase()} em Franca SP`,
    description: `Controle profissional de ${p.praga.toLowerCase()} em Franca SP. Atendimento rápido com produtos ANVISA, laudo técnico e garantia. ${BRAND.experienceYears}+ anos de experiência.`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "City",
      name: "Franca",
      containedInPlace: {
        "@type": "State",
        name: "São Paulo",
      },
    },
    serviceType: `Controle de ${p.praga}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: BRAND.areaServed.map((city) => ({
        "@type": "City",
        name: city,
      })),
      eligibleRegion: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: BRAND.geo.latitude,
          longitude: BRAND.geo.longitude,
        },
        geoRadius: "40000",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços de controle de ${p.praga.toLowerCase()} em Franca SP`,
      itemListElement: p.questions.map((q, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "FAQ",
          name: q.question,
          text: q.answer,
        },
      })),
    },
  }));
}

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
          ...BRAND.areaServed
            .filter((city) => city !== "Franca")
            .map((city) => ({
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
        sameAs: [BRAND.instagramUrl, BRAND.facebookUrl],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de controle de pragas urbanas em Franca SP",
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
                containedInPlace: {
                  "@type": "State",
                  name: "São Paulo",
                },
              },
            },
          })),
        },
        // GEO: Dados de geolocalização estruturados para busca local
        geoRadius: "40000",
        currenciesAccepted: "BRL",
        paymentAccepted: "Cash, Credit Card, Debit Card, Pix",
        foundingDate: "2013",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 5,
        },
        knowsAbout: [
          "Controle de escorpiões",
          "Desinsetização profissional",
          "Desratização",
          "Descupinização",
          "Limpeza de caixa d'água",
          "Controle de pragas urbanas",
          "Laudo ANVISA",
          "Vigilância Sanitária",
        ],
        languages: ["pt-BR"],
        slogan: BRAND.shortTagline,
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
      // FAQ genérico
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/faq`,
        url: `${siteUrl}/faq`,
        name: "Perguntas Frequentes — Sentinela Saúde Ambiental Franca SP",
        mainEntity: BRAND.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      // FAQ específico por praga (sub-FAQPages)
      ...pragasFAQ.map((p) => ({
        "@type": "FAQPage",
        "@id": `${siteUrl}/pragas/${p.praga.toLowerCase()}/#faq`,
        url: `${siteUrl}/pragas/${p.praga.toLowerCase()}`,
        name: `Dúvidas sobre ${p.praga} — Sentinela Saúde Ambiental`,
        description: `Tire dúvidas sobre ${p.praga.toLowerCase()} em Franca SP. Especialistas em controle de ${p.praga.toLowerCase()} com ${BRAND.experienceYears}+ anos de experiência.`,
        mainEntity: p.questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      })),
      // Services individuais por praga
      ...buildPragaServices(),
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
          width: 1200,
          height: 630,
          caption: "Sentinela Saúde Ambiental — Controle profissional de pragas em Franca SP",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Serviços",
              item: `${siteUrl}/servicos`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Franca SP",
              item: siteUrl,
            },
          ],
        },
        reviewedBy: {
          "@type": "Organization",
          name: "Vigilância Sanitária de Franca",
          url: "https://www.franca.sp.gov.br/vigilancia-sanitaria",
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".summary"],
        },
      },
    ],
  };
}
