import { BRAND } from "@/lib/brand";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.sentinelasaudeambiental.com.br";

/** Dados estruturados para SEO local e rich results. */
export function JsonLdLocalBusiness() {
  const data = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: BRAND.name,
    description: BRAND.tagline,
    url: siteUrl,
    telephone: "+55-16-99374-7147",
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Franca",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.5386,
      longitude: -47.4008,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Franca e região, São Paulo",
    },
    sameAs: [BRAND.instagramUrl, BRAND.facebookUrl],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
