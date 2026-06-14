/** Identidade e dados públicos da marca (conferir periodicamente com as redes). */
export const BRAND = {
    name: "Sentinela Saúde Ambiental",
    legalHint: "Better Controle de Pragas",
    tagline:
          "Controle de pragas em Franca/SP com foco em escorpiões, laudo técnico ANVISA e garantia de serviço — atendimento rápido para residências e empresas.",
    shortTagline:
          "Especialistas em escorpiões e controle de pragas em Franca — atendimento ágil com laudo e garantia.",
    /** Cobertura honesta para copy, SEO e JSON-LD. */
    coverageSummary: "Atendimento em Franca/SP e região.",
    region: "Franca e região — SP",
    /** Anos mínimos citados no site (uso: "11+", "mais de 11 anos"). */
    experienceYears: 11,
    experienceYearsShort: "11+",
    experienceYearsLabel: "Mais de 11 anos",
    experienceHeadline: "Mais de 11 anos de experiência em controle de pragas",
    phoneDisplay: "(16) 99374-7147",
    /** E.164 sem símbolos — WhatsApp direto */
    phoneE164: "5516993747147",
    email: "sentinelasaudeambiental@gmail.com",
    instagramUrl: "https://www.instagram.com/sentinelasaudeambiental/",
    /** Página oficial da Sentinela Saúde Ambiental. */
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
    /**
         * Vídeo de fundo do hero (MP4).
     */
    heroVideoUrl:
          "https://videos.pexels.com/video-files/2616634/2616634-hd_1920_1080_24fps.mp4",
    /** Capa do vídeo (foto principal da página no Facebook, cópia local). */
    heroVideoPosterUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop",
    logoPath: "/brand/logo-brasao.png",
    /**
         * Fotos públicas da página no Facebook.
     */
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop",
        alt: "Controle profissional de pragas em ambiente residencial",
      },
      {
        src: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg",
        alt: "Aplicação técnica de inseticida por profissional equipado",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Inspeção técnica em residência para controle de escorpiões",
      },
      {
        src: "https://images.pexels.com/photos/6195291/pexels-photo-6195291.jpeg",
        alt: "Serviço de controle de pragas em empresa",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
        alt: "Equipe técnica realizando dedetização profissional",
      },
      {
        src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        alt: "Ambiente limpo e protegido após controle de pragas",
      },
    ],
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
              desc: "Atendimento prioritário para risco de picada. Eliminação do foco, controle de baratas (alimento do escorpião) e plano preventivo completo.",
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
              question: "O que é dedetização e quando é necessária?",
              answer:
                        "Dedetização é o processo profissional de controle de pragas urbanas como baratas, ratos, formigas, escorpiões e cupins. É necessária quando há sinais de infestação (fezes, rastros, avistamentos) ou como prevenção periódica — especialmente em residências com crianças, pets ou imóveis próximos a terrenos baldios.",
      },
      {
              question: "O que o escorpião come e por que isso importa?",
              answer:
                        "O escorpião-amarelo alimenta-se de baratas e outros insetos. Onde há baratas, há risco de escorpiões. Eliminar baratas profissionalmente é o principal ato preventivo — informação que poucos conhecem.",
      },
      {
              question: "Qual é o período crítico de escorpiões?",
              answer:
                        "De outubro a março, com pico no verão chuvoso. A proteção preventiva deve começar em setembro, antes do período de maior incidência na região.",
      },
      {
              question: "A Sentinela atende quais cidades e regiões?",
              answer:
                        "Atendemos Franca e Região em SP, mediante agendamento — Batatais, Cristais Paulista, Orlândia, Ituverava, São Joaquim da Barra, Pedregulho e outras conforme disponibilidade. Confirme no WhatsApp a sua localização.",
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
              question: "Como funciona o orçamento?",
              answer:
                        "Oferecemos diagnóstico gratuito. Entre em contato pelo WhatsApp e buscamos retorno rápido em horário comercial. O valor é informado após avaliação do ambiente, tamanho e tipo de serviço — sem surpresas.",
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
              question: "Qual a diferença entre desinsetização e desratização?",
              answer:
                        "Desinsetização é o controle de insetos (baratas, formigas, mosquitos, escorpiões). Desratização é o controle de roedores (ratos e camundongos). Muitas vezes ambos os serviços são realizados juntos para controle integrado de pragas.",
      },
      {
        question: 'Escorpião apareceu em casa. O que fazer?',
        answer: 'Mantenha distância, não tente capturar com as mãos e chame a Sentinela imediatamente pelo WhatsApp. Escorpião-amarelo (Tityus serrulatus) é o mais comum em Franca e o mais perigoso — crianças e idosos correm maior risco. Enquanto aguarda, vede frestas, afaste camas das paredes e sacuda roupas e calçados antes de usar.'
      },
      {
        question: 'Condomínio precisa de contrato de dedetização? É obrigatório?',
        answer: 'Sim. A Vigilância Sanitária exige que condomínios residenciais e comerciais mantenham Plano de Manejo de Controle de Pragas (PMOC) com cronograma preventivo e laudo técnico. Sem isso, o condomínio fica sujeito a multas, interdições e responsabilidade civil em caso de acidentes com moradores. A Sentinela atende condomínios em Franca com contrato personalizado.'
      },
      {
        question: 'Sou síndico. Como contratar um plano preventivo para o condomínio?',
        answer: 'Entre em contato pelo WhatsApp. Fazemos vistoria gratuita no condomínio, elaboramos cronograma de visitas (mensal, bimestral ou trimestral) e emitimos laudo técnico para cada aplicação. O plano inclui áreas comuns, garagem, lixeira, caixas d\'água e perímetro externo. Atendemos condomínios em Franca, Batatais e região.'
      },
        ],
} as const;

export function whatsappHref(prefill?: string): string {
    const text =
          prefill ??
          "Olá, Sentinela! Vi o site e gostaria de solicitar um orçamento para dedetização. Meu nome é [seu nome].";
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
