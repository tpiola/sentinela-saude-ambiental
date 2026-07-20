import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

const routes = [
  "",
  "/servicos",
  "/agendar",
  "/condominio",
  "/sobre",
  "/faq",
  "/privacidade",
  "/pragas/escorpiao",
  "/pragas/barata",
  "/pragas/cupim",
  "/pragas/rato",
  "/pragas/formiga",
  "/pragas/aranha",
  "/pragas/mosquito",
  "/pragas/pombo",
  "/pragas/morcego",
  "/pragas/pulga",
  "/pragas/carrapato",
  "/pragas/traca",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/agendar" ? 0.9 : 0.8,
  }));
}
