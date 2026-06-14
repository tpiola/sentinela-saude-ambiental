/** Identidade e dados públicos da marca (conferir periodicamente com as redes). */
export const BRAND = {
    name: "Sentinela Saúde Ambiental",
    legalHint: "Better Controle de Pragas",
    tagline:
          "Controle de pragas em Franca/SP com foco em escorpiões, laudo técnico ANVISA e garantia de serviço — atendimento rápido para residências e empresas.",
    shortTagline:
          "Especialistas em escorpiões e controle de pragas em Franca — atendimento ágil com laudo e garantia.",
    coverageSummary: "Atendimento em Franca/SP e região.",
    region: "Franca e região — SP",
    experienceYears: 11,
    experienceYearsShort: "11+",
    experienceYearsLabel: "Mais de 11 anos",
    experienceHeadline: "Mais de 11 anos de experiência em controle de pragas",
    phoneDisplay: "(16) 99374-7147",
    phoneE164: "5516993747147",
    email: "sentinelasaudeambiental@gmail.com",
    instagramUrl: "https://www.instagram.com/sentinelasaudeambiental/",
    facebookUrl: "https://www.facebook.com/sentinelasaudeambiental",
    cnpj: "30.438.427/0001-37",
    address: {
          streetAddress: "Av. Pedro Calandria Fernandes, 1300",
          addressLocality: "Franca",
          addressRegion: "SP",
          postalCode: "14407-350",
          addressCountry: "BR",
    },
    addressFull: "Av. Pedro Calandria Fernandes, 1300 — Franca/SP, CEP 14407-350",
    geo: {
          latitude: -20.5401,
          longitude: -47.4009,
    },
    openingHours: {
          weekdays: "Segunda a Sábado: 07:00 às 19:00",
          sunday: "Domingo: 08:00 às 17:00",
          schema: ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
    },
    mapsPlaceQuery: "Sentinela Saúde Ambiental Franca SP",
    areaServed: [
          "Franca",
          "Batatais",
          "Cristais Paulista",
          "Orlândia",
          "Ituverava",
          "São Joaquim da Barra",
          "Pedregulho",
          "Patrocínio Paulista",
          "Restinga",
        ],
    /** Vídeo HD de dedetização profissional (Pexels) */
    heroVideoUrl:
          "https://images.pexels.com/video-files/3065488/3065488-uhd_3840_2160_25fps.mp4",
    /** Poster estático do hero (sem pessoas) */
    heroVideoPosterUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1920&auto=format&fit=crop",
    logoPath: "/brand/logo-brasao.png",
    /** Galeria com FOTOS DE PRAGAS E ANIMAIS — NENHUMA PESSOA */
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop",
        alt: "Escorpião — dedetização profissional em Franca SP",
      },
      {
        src: "https://images.unsplash.com/photo-1578302692590-88c8e9e1ab36?q=80&w=1200&auto=format&fit=crop",
        alt: "Barata — controle de pragas urbano",
      },
      {
        src: "https://images.unsplash.com/photo-1579158950965-8e469e698bdd?q=80&w=1200&auto=format&fit=crop",
        alt: "Rato — desratização profissional",
      },
      {
        src: "https://images.unsplash.com/photo-1576086213366-192adaf2a19f?q=80&w=1200&auto=format&fit=crop",
        alt: "Cupim — descupinização de madeira",
      },
      {
        src: "https://images.unsplash.com/photo-1578302692590-88c8e9e1ab36?q=80&w=1200&auto=format&fit=crop",
        alt: "Formiga — desinsetização",
      },
      {
        src: "https://images.pexels.com/video-files/3065488/3065488-uhd_3840_2160_25fps.mp4",
        alt: "Aplicação profissional de inseticida",
      },
        ],
    instagramGalleryImages: [] as ReadonlyArray<{
          readonly src: string;
          readonly alt: string;
    }>,
    services: [
      {
              id: "escorpioes",
              title: "Controle de escorpiões",
              desc: "Atendimento prioritário para risco de picada. Eliminação do foco com os melhores inseticidas. Plano preventivo completo.",
              icon: "alert",
              imageUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
      },
      {
              id: "desinsetizacao",
              title: "Desinsetização",
              desc: "Baratas, formigas, aranhas e mosquitos. Gel ou pulverização com baixa toxicidade e sem odor forte.",
              icon: "bug",
              imageUrl: "https://images.unsplash.com/photo-1578302692590-88c8e9e1ab36?q=80&w=600&auto=format&fit=crop",
      },
      {
              id: "desratizacao",
              title: "Desratização",
              desc: "Eliminação de roedores com iscas seguras, porta-iscas blindados e monitoramento contínuo.",
              icon: "rat",
              imageUrl: "https://images.unsplash.com/photo-1579158950965-8e469e698bdd?q=80&w=600&auto=format&fit=crop",
      },
      {
              id: "descupinizacao",
              title: "Descupinização",
              desc: "Proteção do patrimônio contra cupins com barreira química de última geração e garantia.",
              icon: "shield",
              imageUrl: "https://images.unsplash.com/photo-1576086213366-192adaf2a19f?q=80&w=600&auto=format&fit=crop",
      },
      {
              id: "caixa-dagua",
              title: "Limpeza de caixas d'água",
              desc: "Higienização conforme Ministério da Saúde. Água limpa e segura para sua família.",
              icon: "droplet",
              imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
      },
      {
              id: "empresas",
              title: "Contratos empresariais",
              desc: "Laudo técnico, cronograma preventivo e conformidade ANVISA para indústria, comércio e condomínios.",
              icon: "building",
              imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop",
      },
        ],
    faq: [
      {
        question: 'Escorpião apareceu em casa. O que fazer?',
        answer: 'Mantenha distância, não tente capturar com as mãos e chame a Sentinela imediatamente. Escorpião-amarelo é o mais comum em Franca e o mais perigoso. Crianças e idosos correm maior risco. Atendimento prioritário via WhatsApp.'
      },
      {
        question: 'Atende empresas com laudo ANVISA?',
        answer: 'Sim. Emitimos laudo técnico e certificado válido para Vigilância Sanitária. Atendemos indústrias, comércios, condomínios e clínicas em Franca com contrato preventivo e documentação completa.'
      },
      {
        question: 'Qual a garantia do serviço?',
        answer: 'Todo serviço tem garantia descrita no laudo técnico. Usamos os melhores inseticidas do mundo, registrados na ANVISA. Se o problema persistir dentro do prazo de garantia, retornamos sem custo.'
      },
      {
        question: 'É seguro para crianças e pets?',
        answer: 'Sim. Usamos produtos de baixa toxicidade registrados na ANVISA (RDC 622/2022). Orientamos o tempo de afastamento necessário. Crianças, animais e alimentos ficam protegidos durante a aplicação.'
      },
      {
        question: 'Quanto tempo dura o efeito?',
        answer: 'O efeito imediato é visível em até 24h. A proteção residual dura de 30 a 90 dias dependendo do produto e ambiente. Recomendamos plano preventivo trimestral para residências e bimestral para empresas.'
      },
        ],
} as const;

export function whatsappHref(prefill?: string): string {
    const text =
          prefill ??
          "Olá, Sentinela! Vi o site e gostaria de solicitar um orçamento para dedetização em Franca SP.";
    return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;
}

export function mapsDirectionsUrl(): string {
    const { latitude, longitude } = BRAND.geo;
    const q = encodeURIComponent(BRAND.mapsPlaceQuery);
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=&travelmode=driving&query=${q}`;
}

export function mapsSearchUrl(): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsPlaceQuery)}`;
}

export function mapsEmbedUrl(): string {
    const { latitude, longitude } = BRAND.geo;
    return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt-BR&z=16&output=embed`;
}
