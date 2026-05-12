/** Identidade e dados públicos da marca (conferir periodicamente com as redes). */
export const BRAND = {
  name: "Sentinela Saúde Ambiental",
  legalHint: "Better Controle de Pragas",
  tagline:
    "Ambientes protegidos com segurança e responsabilidade. Atendimento residencial e empresarial.",
  region: "Franca e região — São Paulo",
  phoneDisplay: "(16) 99374-7147",
  /** E.164 sem símbolos — WhatsApp direto */
  phoneE164: "5516993747147",
  email: "bettercontroladoradepragas@hotmail.com",
  instagramUrl: "https://www.instagram.com/sentinelasaudeambiental/",
  facebookUrl: "https://www.facebook.com/Bettercontroledepragas",
  mapsPlaceQueryDefault: "Sentinela Saúde Ambiental Franca SP",
  /** Vídeo hero (HD leve). Troque por arquivo em /public/brand/ ou URL própria. */
  heroVideoUrl:
    "https://videos.pexels.com/video-files/2616634/2616634-hd_1920_1080_24fps.mp4",
  /** Imagens recentes da página pública do Facebook (podem ser substituídas por ficheiros locais). */
  galleryImages: [
    {
      src: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/698003058_1577392217728384_6898408730551573846_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=fe890d&_nc_ohc=0kzVP8NY444Q7kNvwEVH1yf&_nc_oc=AdrM5nAyOVyGaGtc68ftQn6KyOtXmO5RUPIrnWrmd6I7O3wiejbQ708t9fUlpbGU6r8&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_Af4tqD_G3KaDx7ushrRYm4jCPTswP8ejThpvqeFxCB5AUA&oe=6A08C4F8",
      alt: "Equipe e identidade Sentinela Saúde Ambiental",
    },
    {
      src: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/697792849_1578461527621453_3125000566122201328_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=14ed46&_nc_ohc=4LOJekUzHS8Q7kNvwEPyFxQ&_nc_oc=Adqoh-l6GXm7RYBqAN3hzHLl3vWkJQOLyNhE2hVnRpZqP7-r_DqlHutCeLrG1zZllJI&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_Af4EcqOy1Nz8GpNAozZbp__wJ93mASqDRjj2vEBgmGo6RA&oe=6A08BB1D",
      alt: "Trabalho de campo — controle integrado de pragas",
    },
    {
      src: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/696333880_1577400167727589_4713074976998565123_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=14ed46&_nc_ohc=N16v7sJ3Y2MQ7kNvwGyP6_C&_nc_oc=AdoTVh9FJPJTI3GMEAl6GrPNbVw3CUXRf2gHZHNROqQ0LAaXA6rUMgBT6Nv7Lyb04xg&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&oh=00_Af4PwLJ_M93n44Fr6ic8jViro7Whusr1t5WhiQnihdlM5Q&oe=6A08C490",
      alt: "Atendimento Sentinela — saúde ambiental",
    },
    {
      src: "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/693459023_1576088681192071_4134079722347562017_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=14ed46&_nc_ohc=qpth5bKuTyAQ7kNvwGLeB9H&_nc_oc=AdraJFkYArNRK9gpqV0ERbl1N5bcPu88PsGCn8qOrkTO2Jb0wuc7UBR6hJacy8GU52Y&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&oh=00_Af6GQPI6k3YwGL8Dm4eNnbdmDXU2D-plQFKXXJh9RfDApw&oe=6A08CA11",
      alt: "Controle de pragas — resultado profissional",
    },
  ],
} as const;

export function whatsappHref(prefill?: string): string {
  const text =
    prefill ??
    "Olá, Sentinela! Vi o site e quero um orçamento rápido para controle de pragas na minha propriedade.";
  return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;
}
