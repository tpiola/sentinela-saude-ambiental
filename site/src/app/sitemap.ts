import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

// Pragas conhecidas que têm páginas dedicadas
const pragas = [
  { slug: "escorpiao", freq: "weekly" as const, priority: 0.9 },
  { slug: "barata", freq: "monthly" as const, priority: 0.8 },
  { slug: "cupim", freq: "monthly" as const, priority: 0.8 },
  { slug: "rato", freq: "monthly" as const, priority: 0.8 },
  { slug: "formiga", freq: "monthly" as const, priority: 0.7 },
  { slug: "aranha", freq: "monthly" as const, priority: 0.7 },
  { slug: "mosquito", freq: "monthly" as const, priority: 0.7 },
  { slug: "pombo", freq: "monthly" as const, priority: 0.7 },
  { slug: "morcego", freq: "monthly" as const, priority: 0.7 },
  { slug: "pulga", freq: "monthly" as const, priority: 0.7 },
  { slug: "carrapato", freq: "monthly" as const, priority: 0.7 },
  { slug: "traça", freq: "monthly" as const, priority: 0.6 },
];

const today = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/servicos`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/agendar`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/escorpiao`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/condominio`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Adicionar páginas de pragas dinâmicas
  for (const praga of pragas) {
    entries.push({
      url: `${siteUrl}/pragas/${praga.slug}`,
      lastModified: today,
      changeFrequency: praga.freq,
      priority: praga.priority,
    });
  }

  return entries;
}
