import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Orientações sobre controle de pragas em Franca",
  description:
    "Orientações gerais da Sentinela sobre escorpiões, baratas, cupins, ratos e prevenção em imóveis de Franca.",
  path: "/blog",
});

const guides = [
  {
    title: "Escorpião em casa: o que observar e quando procurar saúde",
    description:
      "Medidas preventivas, limites do controle ambiental e orientação para casos de picada.",
    href: "/pragas/escorpiao",
  },
  {
    title: "Baratas: por que identificar a ocorrência muda o tratamento",
    description:
      "Abrigos, fontes de alimento e cuidados que devem ser avaliados antes da aplicação.",
    href: "/pragas/baratas",
  },
  {
    title: "Sinais de cupim que merecem uma visita",
    description:
      "Asas, resíduos, túneis e danos aparentes podem indicar diferentes tipos de ocorrência.",
    href: "/pragas/cupins",
  },
  {
    title: "Controle preventivo para empresas e condomínios",
    description:
      "Como inspeção, cronograma e registros podem ser definidos conforme o ambiente.",
    href: "/condominio",
  },
] as const;

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="bg-[color:var(--brand-surface)] px-4 pb-20 pt-36">
        <div className="container-responsive">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-green-deep)]">
            Orientações por ocorrência
          </p>
          <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.035em] text-[color:var(--brand-navy)] sm:text-6xl">
            Informação prática para entender o próximo passo
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--brand-muted)]">
            Conteúdo geral de prevenção e controle ambiental. Em caso de picada,
            intoxicação ou sintomas, procure atendimento de saúde imediatamente.
          </p>
          <div className="mt-12 grid border-l border-t border-[color:var(--brand-border)] md:grid-cols-2">
            {guides.map((guide, index) => (
              <article
                key={guide.title}
                className="border-b border-r border-[color:var(--brand-border)] bg-white p-7"
              >
                <p className="text-xs font-bold text-[color:var(--brand-green-deep)]">
                  GUIA 0{index + 1}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)]">
                  {guide.title}
                </h2>
                <p className="mt-4 leading-7 text-[color:var(--brand-muted)]">
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
                  className="mt-6 inline-flex min-h-11 items-center font-bold text-[color:var(--brand-accent-blue)]"
                >
                  Ler orientação <span aria-hidden className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
