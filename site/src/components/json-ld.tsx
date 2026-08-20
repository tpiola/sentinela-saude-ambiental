import { buildLocalBusinessGraph } from "@/lib/seo-schema";

/** Entidades persistentes da empresa e do site. Dados de página vivem na rota. */
export function JsonLdLocalBusiness() {
  const data = buildLocalBusinessGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
