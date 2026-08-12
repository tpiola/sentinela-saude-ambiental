import type { MetadataRoute } from "next";
import { locations, markets, services } from "@/lib/growth-content";
import { getAllPestSlugs } from "@/lib/pests";
import { getSiteUrl } from "@/lib/site";

const staticRoutes = ["", "/servicos", "/agendar", "/condominio", "/sobre", "/faq", "/privacidade", "/contato", "/blog"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const routes = [
    ...staticRoutes,
    ...getAllPestSlugs().map((slug) => `/pragas/${slug}`),
    ...services.map(({ slug }) => `/servicos/${slug}`),
    ...markets.map(({ slug }) => `/mercados/${slug}`),
    ...locations.map(({ slug }) => `/locais/${slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/agendar" ? 0.9 : 0.8,
  }));
}
