/** Identidade e dados públicos da marca. Validar periodicamente com o cliente. */
export const BRAND = {
  name: "Sentinela Saúde Ambiental",
  legalHint: "",
  tagline:
    "Controle profissional de pragas em Franca e região, com orientação técnica e documentação do serviço.",
  shortTagline: "Segurança técnica para proteger o seu ambiente.",
  coverageSummary: "Atendimento em Franca/SP e municípios da região.",
  region: "Franca e região — SP",
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
  addressFull:
    "Av. Pedro Calandria Fernandes, 1300 — Franca/SP, CEP 14407-350",
  geo: {
    latitude: -20.4967359,
    longitude: -47.4182681,
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
  heroVideoUrl: "/media/hero-pro.mp4",
  heroVideoPosterUrl: "/media/sentinela/facebook/images/poster-hero.jpg",
  logoPath: "/brand/logo-brasao.png",
  galleryImages: [
    {
      src: "/media/thiago/escorpiao-alerta.jpg",
      alt: "Escorpião encontrado durante inspeção em Franca SP",
    },
    {
      src: "/media/thiago/tecnico-sentinela.jpg",
      alt: "Técnico da Sentinela em atendimento",
    },
    {
      src: "/media/thiago/hero-casa-protegida.jpg",
      alt: "Atendimento residencial da Sentinela Saúde Ambiental",
    },
    {
      src: "/media/thiago/caixa-dagua.jpg",
      alt: "Serviço de limpeza de caixa d'água",
    },
    {
      src: "/media/thiago/antes-depois.jpg",
      alt: "Registro de serviço de controle de pragas",
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
      desc: "Inspeção de acessos e abrigos, orientação preventiva e tratamento definido conforme a ocorrência.",
      icon: "alert",
      imageUrl:
        "/media/sentinela/drive/escorpiao-residencial-baldassari-franca-sp.webp",
    },
    {
      id: "desinsetizacao",
      title: "Desinsetização profissional",
      desc: "Controle de baratas, formigas, aranhas e mosquitos com método adequado ao ambiente e à espécie.",
      icon: "bug",
      imageUrl:
        "/media/sentinela/drive/dedetizacao-centro-franca-sp.webp",
    },
    {
      id: "desratizacao",
      title: "Desratização",
      desc: "Mapeamento de sinais, pontos controlados de monitoramento, orientação de vedação e acompanhamento.",
      icon: "rat",
      imageUrl:
        "/media/sentinela/drive/controle-pragas-city-petropolis-franca-sp.webp",
    },
    {
      id: "descupinizacao",
      title: "Descupinização",
      desc: "Diagnóstico do tipo de cupim e indicação do tratamento conforme a estrutura e a extensão da atividade.",
      icon: "shield",
      imageUrl:
        "/media/sentinela/drive/aplicacao-jardim-francano-franca-sp.webp",
    },
    {
      id: "caixa-dagua",
      title: "Limpeza de caixas d'água",
      desc: "Higienização programada do reservatório com orientação sobre preparo, vedação e retorno ao uso.",
      icon: "droplet",
      imageUrl:
        "/media/sentinela/drive/dedetizacao-parque-progresso-franca-sp.webp",
    },
    {
      id: "empresas",
      title: "Contratos empresariais",
      desc: "Cronograma preventivo, registros do atendimento e acompanhamento para empresas e condomínios.",
      icon: "building",
      imageUrl:
        "/media/sentinela/drive/02-trabalho-campo.jpg",
    },
  ],
  faq: [
    {
      question: "Encontrei um escorpião. O que devo fazer?",
      answer:
        "Mantenha distância, afaste pessoas e animais e não tente capturá-lo com as mãos. Em caso de picada, procure atendimento de saúde imediatamente. Para avaliar o imóvel, solicite uma inspeção da Sentinela.",
    },
    {
      question: "Atende empresas com documentação técnica em Franca?",
      answer:
        "Sim. O serviço pode incluir comprovante de execução e registros previstos no escopo contratado. A periodicidade e os pontos de controle são definidos conforme o ambiente.",
    },
    {
      question: "Existe garantia no serviço?",
      answer:
        "Quando aplicável, prazo, cobertura e condições são descritos na proposta e no comprovante do serviço. Não existe uma garantia única para todas as pragas e ambientes.",
    },
    {
      question: "O tratamento é seguro para crianças e animais?",
      answer:
        "A segurança depende do método, do produto e do cumprimento das orientações. Antes do serviço, a equipe informa preparação, afastamento e cuidados para pessoas, animais, alimentos e áreas tratadas.",
    },
    {
      question: "Quanto tempo dura o efeito do tratamento?",
      answer:
        "A ação e a necessidade de acompanhamento variam conforme a espécie, o produto, a intensidade da atividade e as condições do imóvel. A frequência é definida depois da inspeção.",
    },
    {
      question: "Procurei \"dedetizadora perto de mim\" — vocês atendem meu bairro?",
      answer:
        "Sim. A Sentinela atende Franca e municípios da região. Confirme seu bairro pelo WhatsApp e a equipe informa a disponibilidade do dia: a resposta costuma sair em poucos minutos, com rota e escopo confirmados antes da visita.",
    },
  ],
} as const;

export function whatsappHref(prefill?: string): string {
  const text =
    prefill ??
    "Olá, Sentinela! Acessei o site e gostaria de solicitar uma avaliação para controle de pragas.";
  return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;
}

export function mapsDirectionsUrl(): string {
  const { latitude, longitude } = BRAND.geo;
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
}

export function mapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsPlaceQuery)}`;
}

export function mapsEmbedUrl(): string {
  const { latitude, longitude } = BRAND.geo;
  return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt-BR&z=16&output=embed`;
}
