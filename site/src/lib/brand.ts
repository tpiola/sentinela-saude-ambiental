/** Identidade e dados públicos da marca (conferir periodicamente com as redes). */
export const BRAND = {
    name: "Sentinela Saúde Ambiental",
    legalHint: "Better Controle de Pragas",
    tagline:
          "Praga em casa? Resposta em minutos. Atendimento em Franca e região com laudo ANVISA e garantia.",
    shortTagline:
          "Praga em casa? A Sentinela chega primeiro.",
    coverageSummary: "Atendimento em Franca/SP e região num raio de até 40 km.",
    region: "Franca e região — SP",
    experienceYears: 11,
    experienceYearsShort: "11",
    experienceYearsLabel: "11+ anos",
    experienceHeadline: "11+ anos de experiência em Franca",
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
    servicedBairros: [
          "Centro",
          "Jardim Francano",
          "City Petrópolis",
          "Parque Progresso",
          "Residencial Baldassari",
          "Vila Santa Terezinha",
          "Jardim Panorama",
          "Vila Aparecida",
          "Parque dos Pinhais",
          "Jardim Consolação",
          "Residencial Paraíso",
          "Jardim do Éden",
        ],
    /** Vídeo real profissional em ação */
    heroVideoUrl:
          "/media/sentinela/drive/servico-profissional-franca-sp-limpo.mp4",
    /** Poster estático do hero */
    heroVideoPosterUrl: "/media/sentinela/facebook/images/poster-hero.jpg",
    logoPath: "/brand/logo-brasao.png",
    /** Galeria com FOTOS REAIS do profissional Thiago */
    galleryImages: [
      {
        src: "/media/thiago/escorpiao-alerta.jpg",
        alt: "Escorpião — dedetização profissional em Franca SP",
      },
      {
        src: "/media/thiago/tecnico-sentinela.jpg",
        alt: "Técnico da Sentinela — aplicação profissional de inseticida",
      },
      {
        src: "/media/thiago/hero-casa-protegida.jpg",
        alt: "Residência protegida — Sentinela Saúde Ambiental",
      },
      {
        src: "/media/thiago/caixa-dagua.jpg",
        alt: "Limpeza de caixa d'água profissional",
      },
      {
        src: "/media/thiago/antes-depois.jpg",
        alt: "Antes e depois — serviço de dedetização",
      },
      {
        src: "/media/thiago/tecnico-sentinela.jpg",
        alt: "Técnico aplicando inseticida profissional",
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
              desc: "Atendimento prioritário em Franca. Eliminação do foco com produtos ANVISA.",
              icon: "alert",
              imageUrl: "/media/sentinela/drive/escorpiao-residencial-baldassari-franca-sp.webp",
      },
      {
              id: "desinsetizacao",
              title: "Desinsetização profissional",
              desc: "Baratas, formigas, aranhas e mosquitos. Gel biologicamente formulado ou pulverização.",
              icon: "bug",
              imageUrl: "/media/sentinela/drive/dedetizacao-centro-franca-sp.webp",
      },
      {
              id: "desratizacao",
              title: "Desratização",
              desc: "Eliminação de roedores com iscas seguras em porta-iscas blindados. Monitoramento contínuo e relatório técnico.",
              icon: "rat",
              imageUrl: "/media/sentinela/drive/controle-pragas-city-petropolis-franca-sp.webp",
      },
      {
              id: "descupinizacao",
              title: "Descupinização",
              desc: "Proteção do patrimônio contra cupins. Barreira química com garantia contratual.",
              icon: "shield",
              imageUrl: "/media/sentinela/drive/aplicacao-jardim-francano-franca-sp.webp",
      },
      {
              id: "caixa-dagua",
              title: "Limpeza de caixas d'água",
              desc: "Higienização conforme Portaria GM/MS 888/2021. Água limpa e segura para sua família.",
              icon: "droplet",
              imageUrl: "/media/sentinela/drive/dedetizacao-parque-progresso-franca-sp.webp",
      },
      {
              id: "empresas",
              title: "Contratos empresariais",
              desc: "Laudo ANVISA, cronograma preventivo e conformidade para indústria, comércio e condomínios.",
              icon: "building",
              imageUrl: "/media/sentinela/drive/servico-vila-santa-terezinha-franca-sp.webp",
      },
        ],
    faq: [
      {
        question: 'Escorpião apareceu em casa em Franca. O que fazer?',
        answer: 'Mantenha distância, não tente capturar com as mãos e chame a Sentinela imediatamente. Escorpião-amarelo (Tityus serrulatus) é o mais comum no Residencial Baldassari, City Petrópolis e bairros de Franca — crianças e idosos correm maior risco. Oferecemos atendimento prioritário com resposta em minutos pelo WhatsApp.'
      },
      {
        question: 'Atende empresas com laudo ANVISA em Franca?',
        answer: 'Sim. Emitimos laudo técnico e certificado válido para Vigilância Sanitária conforme RDC 622/2022. Atendemos indústrias no Parque Progresso, comércios no Centro de Franca, condomínios e clínicas com contrato preventivo, cronograma documentado e registro fotográfico de cada visita.'
      },
      {
        question: 'Qual a garantia do serviço de dedetização em Franca?',
        answer: 'Todo serviço tem garantia descrita no laudo técnico. Utilizamos inseticidas profissionais registrados na ANVISA, importados dos melhores fabricantes mundiais. Se o problema persistir dentro do prazo de garantia estipulado, retornamos sem custo adicional — válido para serviços no Jardim Francano, Vila Santa Terezinha e toda Franca SP.'
      },
      {
        question: 'É seguro para crianças e pets?',
        answer: 'Sim. Trabalhamos com produtos de baixa toxicidade registrados na ANVISA (RDC 622/2022) e orientamos o tempo de afastamento necessário para cada ambiente. Crianças, gestantes, animais domésticos e alimentos são protegidos durante toda a aplicação conforme protocolo de segurança em todos os bairros de Franca que atendemos.'
      },
      {
        question: 'Quanto tempo dura o efeito da dedetização em Franca?',
        answer: 'O efeito imediato é observado em até 24 horas. A proteção residual varia de 30 a 90 dias dependendo do produto e condições do ambiente. Recomendamos plano preventivo trimestral para residências no Jardim Francano, Vila Aparecida e bairros de Franca, e bimestral para estabelecimentos comerciais no Centro e Parque Progresso.'
      },
        ],
} as const;

export function whatsappHref(prefill?: string): string {
    const text =
          prefill ??
          "Olá, Sentinela! Acessei o site e gostaria de solicitar um orçamento para controle de pragas.";
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
