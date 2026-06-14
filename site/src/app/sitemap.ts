import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.sentinelasaudeambiental.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/agendar`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/escorpiao`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/condominio`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
