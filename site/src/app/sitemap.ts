import type { MetadataRoute } from "next";
import { allGrowthPages } from "@/lib/growth-content";
import { getAllPestSlugs } from "@/lib/pests";
import { getSiteUrl } from "@/lib/site";

const staticRoutePriority: Record<string, number> = {
  "": 1,
  "/servicos": 0.9,
  "/agendar": 0.9,
  "/condominio": 0.8,
  "/sobre": 0.6,
  "/faq": 0.7,
  "/contato": 0.7,
  "/blog": 0.5,
  "/privacidade": 0.2,
};

const staticRoutesList = Object.keys(staticRoutePriority);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    ...staticRoutesList.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: staticRoutePriority[path],
    })),
    ...getAllPestSlugs().map((slug) => ({
      url: `${baseUrl}/pragas/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...allGrowthPages.services.map((page) => ({
      url: `${baseUrl}/servicos/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...allGrowthPages.markets.map((page) => ({
      url: `${baseUrl}/mercados/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...allGrowthPages.locations.map((page) => ({
      url: `${baseUrl}/locais/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
