import type { MetadataRoute } from "next";
import { getAllPestSlugs } from "@/lib/pests";
import { getSiteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/servicos",
  "/agendar",
  "/condominio",
  "/sobre",
  "/faq",
  "/privacidade",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const pestRoutes = getAllPestSlugs().map((slug) => `/pragas/${slug}`);
  const routes = [...staticRoutes, ...pestRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/agendar" ? 0.9 : 0.8,
  }));
}
