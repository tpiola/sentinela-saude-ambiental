import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND, whatsappHref } from "@/lib/brand";
import type { GrowthPage } from "@/lib/growth-content";
import { buildFaqGraphNode } from "@/lib/seo-schema";
import { getSiteUrl } from "@/lib/site";

function buildGrowthGraph(page: GrowthPage, path: string) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.title,
        description: page.description,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: BRAND.areaServed.map((name) => ({
          "@type": "City",
          name,
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
            name: page.title,
            item: url,
          },
        ],
      },
      buildFaqGraphNode(`${url}#faq`, page.faq),
    ],
  };
}

export function GrowthLanding({ page, path }: { page: GrowthPage; path: string }) {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="bg-white">
        <JsonLd data={buildGrowthGraph(page, path)} />

        <section className="bg-[color:var(--brand-navy)] px-4 pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
          <div className="container-responsive">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-lime)]">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/agendar"
                data-track="growth_assessment"
                className="inline-flex min-h-14 items-center justify-center bg-[color:var(--brand-lime)] px-7 font-bold text-[color:var(--brand-navy-heading)]"
              >
                Solicitar avaliação
              </Link>
              <a
                href={`tel:+${BRAND.phoneE164}`}
                data-track="growth_phone"
                className="inline-flex min-h-14 items-center justify-center border border-white/30 px-7 font-bold"
              >
                Ligar {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-responsive grid border-l border-t border-[color:var(--brand-border)] lg:grid-cols-2">
            <article className="border-b border-r border-[color:var(--brand-border)] p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
                O cenário
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)]">
                Por que a inspeção importa
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--brand-muted)]">
                {page.problem}
              </p>
            </article>
            <article className="border-b border-r border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
                A abordagem
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)]">
                Método conforme o ambiente
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--brand-muted)]">
                {page.solution}
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[color:var(--brand-surface)] py-16 sm:py-20">
          <div className="container-responsive">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              O que será definido
            </p>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
              Informações claras antes do serviço
            </h2>
            <div className="mt-8 grid border-l border-t border-[color:var(--brand-border)] sm:grid-cols-2 lg:grid-cols-4">
              {page.benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="border-b border-r border-[color:var(--brand-border)] bg-white p-6"
                >
                  <span className="text-xs font-bold text-[color:var(--brand-green-deep)]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 font-bold leading-6 text-[color:var(--brand-navy)]">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-responsive grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)]">
                Dúvidas frequentes
              </h2>
              <div className="mt-7 divide-y divide-[color:var(--brand-border)] border-y border-[color:var(--brand-border)]">
                {page.faq.map((item) => (
                  <details key={item.question} className="py-5">
                    <summary className="cursor-pointer pr-8 font-bold text-[color:var(--brand-navy)]">
                      {item.question}
                    </summary>
                    <p className="mt-3 leading-7 text-[color:var(--brand-muted)]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
            <aside>
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
                Continue a pesquisa
              </h2>
              <nav className="mt-4 divide-y divide-[color:var(--brand-border)] border-y border-[color:var(--brand-border)]">
                {page.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-12 items-center justify-between py-3 font-bold text-[color:var(--brand-navy)]"
                  >
                    {item.label} <span aria-hidden>→</span>
                  </Link>
                ))}
              </nav>
            </aside>
          </div>
        </section>

        <section className="bg-[color:var(--brand-navy)] py-16 text-white sm:py-20">
          <div className="container-responsive text-center">
            <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
              Confirme a cobertura e o próximo passo.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
              Informe a ocorrência, o tipo de imóvel e o bairro. A equipe responde
              conforme a rota e a disponibilidade.
            </p>
            <a
              href={whatsappHref(
                `Olá, Sentinela. Gostaria de uma avaliação para ${page.title}. Meu bairro/cidade é:`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-track="growth_whatsapp"
              className="mt-7 inline-flex min-h-14 items-center bg-[color:var(--brand-lime)] px-8 font-bold text-[color:var(--brand-navy-heading)]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
