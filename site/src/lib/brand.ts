/** Identidade e dados públicos da marca (conferir periodicamente com as redes). */
export const BRAND = {
  name: "Sentinela Saúde Ambiental",
  legalHint: "Better Controle de Pragas",
  tagline:
    "Controle integrado de pragas com laudo técnico e transparência — referência em qualidade e ética frente à dedetizadora genérica. Atendimento alinhado à Vigilância Sanitária.",
  shortTagline:
    "Qualidade, ética e método em controle de pragas para Franca e região — residencial e empresarial.",
  /** Cobertura honesta para copy, SEO e JSON-LD (raio a partir da base em Franca). */
  radiusKm: 40 as const,
  coverageSummary:
    "Atendimento em até 40 km da região de Franca — São Paulo (confirmar disponibilidade no WhatsApp).",
  region: "Franca e região — SP",
  /** Anos mínimos citados no site (uso: “11+”, “mais de 11 anos”). */
  experienceYears: 11,
  experienceYearsShort: "11+",
  experienceYearsLabel: "Mais de 11 anos",
  experienceHeadline: "Mais de 11 anos de experiência em Franca e região",
  phoneDisplay: "(16) 99374-7147",
  /** E.164 sem símbolos — WhatsApp direto */
  phoneE164: "5516993747147",
  email: "sentinelasaudeambiental@gmail.com",
  instagramUrl: "https://www.instagram.com/sentinelasaudeambiental/",
  /** Página oficial da Sentinela Saúde Ambiental. */
  facebookUrl: "https://www.facebook.com/sentinelasaudeambiental",
  /** Centro de Franca SP — ajuste com endereço exato do Google Meu Negócio */
  address: {
    streetAddress: "Atendimento em Franca e região",
    addressLocality: "Franca",
    addressRegion: "SP",
    postalCode: "14400-000",
    addressCountry: "BR",
  },
  geo: {
    latitude: -20.5386,
    longitude: -47.4008,
  },
  openingHours: {
    weekdays: "Segunda a Sábado: 07:00 às 19:00",
    sunday: "Domingo: 08:00 às 17:00",
    schema: ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
  },
  priceRange: "R$250-R$2000",
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
  /**
   * Vídeo de fundo do hero (MP4).
   * Facebook não expõe MP4 direto sem login; use um reel baixado e coloque em
   * /public/brand/hero.mp4 ou defina NEXT_PUBLIC_HERO_VIDEO_URL.
   */
  heroVideoUrl:
    "https://videos.pexels.com/video-files/2616634/2616634-hd_1920_1080_24fps.mp4",
  /** Capa do vídeo (foto principal da página no Facebook, cópia local). */
  heroVideoPosterUrl: "/media/sentinela/facebook/images/01-capa-sentinel.jpg",
  logoPath: "/brand/logo-sentinela.png",
  /**
   * Fotos públicas da página no Facebook (slug legado Better Controle de Pragas).
   * Arquivos em `public/media/sentinela/facebook/images/` — ver README da pasta.
   */
  galleryImages: [
    {
      src: "/media/sentinela/facebook/images/01-capa-sentinel.jpg",
      alt: "Sentinela Saúde Ambiental — equipe e identidade (Facebook)",
    },
    {
      src: "/media/sentinela/facebook/images/02-trabalho-campo.jpg",
      alt: "Trabalho de campo — controle integrado de pragas (Facebook)",
    },
    {
      src: "/media/sentinela/facebook/images/03-atendimento-sentinela.jpg",
      alt: "Atendimento Sentinela — saúde ambiental (Facebook)",
    },
    {
      src: "/media/sentinela/facebook/images/04-controle-pragas.jpg",
      alt: "Controle de pragas — resultado profissional (Facebook)",
    },
    {
      src: "/media/sentinela/facebook/images/05-servico-campo.jpg",
      alt: "Serviço em campo — Sentinela (Facebook)",
    },
    {
      src: "/media/sentinela/facebook/images/06-controle-integrado.jpg",
      alt: "Controle integrado de pragas — Sentinela (Facebook)",
    },
  ],
  /**
   * Miniaturas do Instagram (@sentinelasaudeambiental), cópias locais.
   * Hoje vazio — o perfil não expõe CDN estável para bots; exporte manualmente (README).
   */
  instagramGalleryImages: [] as ReadonlyArray<{
    readonly src: string;
    readonly alt: string;
  }>,
  services: [
    {
      id: "desinsetizacao",
      title: "Desinsetização",
      desc: "Baratas, formigas, aranhas, escorpiões e mosquitos. Gel ou pulverização com baixa toxicidade e sem odor forte.",
      icon: "bug",
    },
    {
      id: "desratizacao",
      title: "Desratização",
      desc: "Mapeamento e eliminação de roedores com iscas seguras, porta-iscas blindados e monitoramento.",
      icon: "rat",
    },
    {
      id: "descupinizacao",
      title: "Descupinização",
      desc: "Proteção do patrimônio contra cupins de madeira seca e de solo, com barreira química especializada.",
      icon: "shield",
    },
    {
      id: "caixa-dagua",
      title: "Limpeza de caixas d'água",
      desc: "Higienização e desinfecção de reservatórios conforme orientação do Ministério da Saúde.",
      icon: "droplet",
    },
    {
      id: "escorpioes",
      title: "Controle de escorpiões",
      desc: "Plano preventivo antes do pico (out–mar). Eliminar baratas reduz o risco de escorpiões na região.",
      icon: "alert",
    },
    {
      id: "empresas",
      title: "Contratos empresariais",
      desc: "Cronograma preventivo, laudo técnico e conformidade para indústria, comércio e condomínios.",
      icon: "building",
    },
  ],
  faq: [
    {
      question: "O que o escorpião come e por que isso importa?",
      answer:
        "O escorpião-amarelo alimenta-se de baratas e outros insetos. Onde há baratas, há risco de escorpiões. Eliminar baratas profissionalmente é o principal ato preventivo — informação que poucos conhecem em Franca SP.",
    },
    {
      question: "Qual é o período crítico de escorpiões em Franca?",
      answer:
        "De outubro a março, com pico no verão chuvoso. A proteção preventiva deve começar em setembro, antes do período de maior incidência na região.",
    },
    {
      question: "A Sentinela atende só Franca ou também cidades próximas?",
      answer:
        "Atendemos Franca como base e cidades da região em até 40 km — Batatais, Cristais Paulista, Orlândia, Ituverava, São Joaquim da Barra, Pedregulho e outras conforme disponibilidade. Confirme no WhatsApp a sua localização.",
    },
    {
      question: "Quanto tempo depois da aplicação posso voltar ao ambiente?",
      answer:
        "O tempo de liberação varia pelo produto, dose e tipo de ambiente — informamos antes do serviço e no laudo/certificado quando aplicável. Respeitar esse período é essencial para segurança de crianças, pets e trabalhadores.",
    },
    {
      question: "Em quanto tempo consigo uma visita ou orçamento?",
      answer:
        "No WhatsApp buscamos responder em poucos minutos em horário comercial; prazos de visita variam pela demanda e pela urgência — escorpião e empresa sob exigência de vigilância costumam ter prioridade na agenda.",
    },
    {
      question: "Quanto custa a dedetização em Franca SP?",
      answer:
        "Residências: entre R$250 e R$500 conforme tamanho e tipo de praga. Empresas e condomínios sob orçamento após diagnóstico gratuito; em horário comercial buscamos retorno rápido pelo WhatsApp — o tempo exato depende da demanda.",
    },
    {
      question: "É seguro para crianças e pets?",
      answer:
        "Sim, com produtos registrados na ANVISA (RDC 622/2022). Informamos o tempo de afastamento para cada serviço. Crianças, animais e alimentos ficam fora durante a aplicação e pelo período técnico indicado.",
    },
    {
      question: "Com que frequência fazer dedetização preventiva?",
      answer:
        "Residências: a cada 3 meses, com reforço em setembro. Empresas alimentícias: bimestral ou mensal. Caixa d'água: a cada 6 meses ou após contaminação.",
    },
    {
      question: "Quais cidades além de Franca são atendidas?",
      answer:
        "Franca e cidades em até 40 km da região: Batatais, Cristais Paulista, Orlândia, Ituverava, São Joaquim da Barra, Pedregulho e entorno. Consulte disponibilidade para outras localidades.",
    },
  ],
} as const;

export function whatsappHref(prefill?: string): string {
  const text =
    prefill ??
    "Olá, Sentinela! Vi o site e quero um diagnóstico gratuito para controle de pragas em Franca SP.";
  return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;
}

/** Abre rotas no Google Maps / GPS do celular */
export function mapsDirectionsUrl(): string {
  const { latitude, longitude } = BRAND.geo;
  const q = encodeURIComponent(BRAND.mapsPlaceQuery);
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=&travelmode=driving&query=${q}`;
}

export function mapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsPlaceQuery)}`;
}

/** Embed sem API key (fallback) */
export function mapsEmbedUrl(): string {
  const { latitude, longitude } = BRAND.geo;
  return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt-BR&z=16&output=embed`;
}
