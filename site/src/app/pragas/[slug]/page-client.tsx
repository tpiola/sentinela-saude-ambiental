import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { BRAND, whatsappHref } from "@/lib/brand";
import type { PestData } from "@/lib/pests";
import { buildFaqGraphNode } from "@/lib/seo-schema";
import { getSiteUrl } from "@/lib/site";

const healthGuidance = new Set(["escorpiao", "aranhas"]);

function buildPestGraph(pest: PestData) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/pragas/${pest.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `Controle de ${pest.name.toLowerCase()} em Franca SP`,
        description: pest.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Controle de ${pest.name.toLowerCase()}`,
        description: pest.description,
        serviceType: `Controle de ${pest.name.toLowerCase()}`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: BRAND.areaServed.map((name) => ({
          "@type": "City",
          name,
          containedInPlace: { "@type": "State", name: "São Paulo" },
        })),
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pragas",
            item: `${siteUrl}/servicos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pest.name,
            item: url,
          },
        ],
      },
      buildFaqGraphNode(
        `${url}#faq`,
        pest.faq.map((item) => ({ question: item.q, answer: item.a })),
      ),
    ],
  };
}

export function PestPageClient({ pest }: { pest: PestData }) {
  const needsHealthGuidance = healthGuidance.has(pest.slug);
  const pestLabel = pest.name.toLowerCase();

  return (
    <main id="conteudo" className="bg-white">
      <JsonLd data={buildPestGraph(pest)} />

      <section className="bg-[color:var(--brand-navy)] pt-20 text-white">
        <div className="container-responsive grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
              Controle de pragas · Franca/SP
            </p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-6xl">
              Controle de {pestLabel} em Franca SP
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {pest.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/agendar"
                data-track={`pest_assessment_${pest.slug}`}
                className="inline-flex min-h-14 items-center justify-center bg-[color:var(--brand-lime)] px-7 font-bold text-[color:var(--brand-navy-heading)]"
              >
                Solicitar avaliação
              </Link>
              <a
                href={whatsappHref(
                  `Olá, Sentinela. Encontrei sinais de ${pestLabel}. Meu bairro/cidade é:`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-track={`pest_whatsapp_${pest.slug}`}
                className="inline-flex min-h-14 items-center justify-center border border-white/30 px-7 font-bold"
              >
                Enviar foto no WhatsApp
              </a>
            </div>

            {needsHealthGuidance && (
              <p className="mt-6 border-l-2 border-[color:var(--brand-lime)] pl-4 text-sm leading-6 text-white/70">
                Se houve picada ou surgiram sintomas, procure atendimento de saúde
                imediatamente. A inspeção ambiental é uma etapa separada do cuidado
                médico.
              </p>
            )}
          </div>

          <figure className="relative min-h-[430px] overflow-hidden border border-white/15">
            <Image
              src="/media/sentinela/drive/dedetizacao-centro-franca-sp.webp"
              alt={`Atendimento profissional para controle de ${pestLabel} em Franca`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-responsive grid gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Entenda a ocorrência
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
              Por que {pestLabel} aparecem?
            </h2>
          </div>
          <p className="text-lg leading-8 text-[color:var(--brand-muted)]">
            {pest.whyAppears}
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--brand-surface)] py-16 sm:py-20">
        <div className="container-responsive">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
            O que observar
          </p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
            {pest.risks.headline}
          </h2>
          <div className="mt-10 grid border-l border-t border-[color:var(--brand-border)] md:grid-cols-2">
            {pest.risks.items.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-r border-[color:var(--brand-border)] bg-white p-6 sm:p-8"
              >
                <p className="text-xs font-bold text-[color:var(--brand-green-deep)]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[color:var(--brand-muted)]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-responsive grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Controle profissional
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
              {pest.treatment.headline}
            </h2>
            <p className="mt-4 leading-7 text-[color:var(--brand-muted)]">
              O método é definido após a inspeção. Quando houver aplicação, a equipe
              informa a preparação, o afastamento e os cuidados necessários.
            </p>
          </div>
          <ol className="space-y-4">
            {pest.treatment.steps.map((step) => (
              <li
                key={step.numero}
                className="grid gap-4 border border-[color:var(--brand-border)] p-6 sm:grid-cols-[64px_1fr]"
              >
                <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-green-deep)]">
                  {step.numero}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[color:var(--brand-muted)]">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--brand-navy)] py-16 text-white sm:py-20">
        <div className="container-responsive grid gap-8 md:grid-cols-2">
          <article className="border-t-2 border-[color:var(--brand-lime)] pt-5">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              Preparação e liberação
            </h2>
            <p className="mt-3 leading-7 text-white/70">{pest.dryingTime}</p>
          </article>
          <article className="border-t-2 border-[color:var(--brand-lime)] pt-5">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              Retorno e monitoramento
            </h2>
            <p className="mt-3 leading-7 text-white/70">{pest.revisitTime}</p>
          </article>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-responsive grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Prevenção
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)]">
              Medidas que ajudam a reduzir novas ocorrências
            </h2>
            <ul className="mt-7 divide-y divide-[color:var(--brand-border)] border-y border-[color:var(--brand-border)]">
              {pest.preventionTips.map((tip) => (
                <li key={tip} className="flex gap-3 py-4 leading-7 text-[color:var(--brand-muted)]">
                  <span aria-hidden className="text-[color:var(--brand-green-deep)]">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)]">
              Antes de contratar
            </h2>
            <div className="mt-7 divide-y divide-[color:var(--brand-border)] border-y border-[color:var(--brand-border)]">
              {pest.faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer pr-8 font-bold text-[color:var(--brand-navy)]">
                    {item.q}
                  </summary>
                  <p className="mt-3 leading-7 text-[color:var(--brand-muted)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {pest.slug === "escorpiao" && (
        <aside className="border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-8">
          <div className="container-responsive text-sm leading-6 text-[color:var(--brand-muted)]">
            <strong className="text-[color:var(--brand-navy)]">Fonte de saúde:</strong>{" "}
            <a
              href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos/acidentes-por-escorpioes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Ministério da Saúde — acidentes por escorpiões
            </a>
            . Orientação consultada em agosto de 2026.
          </div>
        </aside>
      )}

      <section className="bg-[color:var(--brand-surface)] py-16 text-center sm:py-20">
        <div className="container-responsive">
          <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
            Precisa avaliar sinais de {pestLabel} no imóvel?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[color:var(--brand-muted)]">
            Informe a ocorrência, o tipo de imóvel e o bairro para confirmar a
            cobertura e o próximo passo.
          </p>
          <Link
            href="/agendar"
            className="mt-7 inline-flex min-h-14 items-center bg-[color:var(--brand-lime)] px-8 font-bold text-[color:var(--brand-navy-heading)]"
          >
            Solicitar avaliação
          </Link>
        </div>
      </section>
    </main>
  );
}
