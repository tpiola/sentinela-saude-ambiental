import type { MetadataRoute } from "next";
import { getAllPestSlugs } from "@/lib/pests";
import { getSiteUrl } from "@/lib/site";

const staticRoutes = ["", "/servicos", "/agendar", "/condominio", "/sobre", "/faq", "/privacidade", "/contato", "/blog"] as const;
const primaryServiceRoutes = [
  "/servicos/dedetizacao",
  "/servicos/limpeza-caixa-dagua",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const routes = [
    ...staticRoutes,
    ...getAllPestSlugs().map((slug) => `/pragas/${slug}`),
    ...primaryServiceRoutes,
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
