export type InsectSeasonality = {
  slug: string;
  nome: string;
  sazonalidade: string;
  indicios: string[];
  href: string;
};

// Dados técnicos gerais de sazonalidade e sinais — válidos para a região de Franca/SP.
export const insectsSeasonality: InsectSeasonality[] = [
  {
    slug: "escorpiao",
    nome: "Escorpião",
    sazonalidade: "Pico em meses quentes e chuvosos (outubro a março)",
    indicios: ["Avistamento do animal", "Ralos sem proteção", "Entulho e frestas"],
    href: "/pragas/escorpiao",
  },
  {
    slug: "baratas",
    nome: "Barata",
    sazonalidade: "Ano todo, mais ativa no calor",
    indicios: ["Fezes e cascas", "Odor característico", "Aparecimento à noite"],
    href: "/pragas/baratas",
  },
  {
    slug: "cupins",
    nome: "Cupim",
    sazonalidade: "Revoada na primavera (setembro a novembro)",
    indicios: ["Asas caídas", "Túneis na madeira", "Pó fino perto de móveis"],
    href: "/pragas/cupins",
  },
  {
    slug: "ratos",
    nome: "Rato",
    sazonalidade: "Ano todo, busca abrigo no frio",
    indicios: ["Fezes", "Roeduras em embalagens", "Ruídos à noite"],
    href: "/pragas/ratos",
  },
  {
    slug: "formigas",
    nome: "Formiga",
    sazonalidade: "Ano todo, pico no verão",
    indicios: ["Trilhas visíveis", "Ninhos em frestas", "Acúmulo de restos"],
    href: "/pragas/formigas",
  },
  {
    slug: "mosquitos",
    nome: "Mosquito",
    sazonalidade: "Verão e períodos de chuva",
    indicios: ["Presença constante", "Água parada em criadouros", "Picadas"],
    href: "/pragas/mosquitos",
  },
];
