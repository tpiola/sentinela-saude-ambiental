import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: "Sentinela",
    description: BRAND.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#002d5b",
    theme_color: "#002d5b",
    lang: "pt-BR",
    icons: [
      {
        src: "/brand/hero-poster.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
