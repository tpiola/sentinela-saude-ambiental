import { buildLocalBusinessGraph } from "@/lib/seo-schema";

/** Dados estruturados para SEO local, FAQ rich results e Google Meu Negócio. */
export function JsonLdLocalBusiness() {
  const data = buildLocalBusinessGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
