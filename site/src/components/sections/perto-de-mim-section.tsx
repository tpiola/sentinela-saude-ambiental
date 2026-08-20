import Link from "next/link";
import { BRAND, whatsappHref } from "@/lib/brand";
import { locations } from "@/lib/growth-content";

const cityLocationSlug = new Map(
  locations.map((page) => [page.title.replace("Dedetização em ", ""), page.slug]),
);

export function PertoDeMimSection() {
  return (
    <section
      id="perto-de-mim"
      className="scroll-mt-28 border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Dedetizadora perto de mim
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-[color:var(--brand-navy)] md:text-4xl">
              Procurou &ldquo;dedetizadora perto de mim&rdquo;? A Sentinela já atende o seu bairro.
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-[color:var(--brand-muted)]">
              <p>
                Quando alguém busca &ldquo;controle de pragas perto de mim&rdquo; ou
                &ldquo;dedetização perto de mim&rdquo;, o que quer na prática é uma equipe que
                conheça a região e chegue rápido. A Sentinela opera em Franca e
                municípios vizinhos, com técnico em campo e atendimento pelo
                WhatsApp — sem deslocamento longo nem demora na resposta.
              </p>
              <p>
                O mesmo vale para &ldquo;descupinização perto de mim&rdquo;: a inspeção começa
                no seu imóvel, no seu bairro, com orientação técnica antes de
                qualquer aplicação. Confirme seu bairro e a disponibilidade de
                hoje pelo WhatsApp.
              </p>
            </div>
            <a
              href={whatsappHref(
                "Olá, Sentinela! Procurei por dedetizadora perto de mim. Meu bairro em Franca/SP é:",
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-track="perto_de_mim_whatsapp"
              className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[color:var(--brand-whatsapp)] px-6 font-bold text-white transition hover:brightness-110"
            >
              Confirmar meu bairro no WhatsApp
            </a>
          </div>

          <div className="lg:border-l lg:border-[color:var(--brand-border)] lg:pl-8">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
              Bairros atendidos em Franca
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {BRAND.servicedBairros.map((bairro) => (
                <a
                  key={bairro}
                  href={whatsappHref(
                    `Olá, Sentinela! Procurei por dedetizadora perto de mim. Meu bairro é ${bairro}, em Franca/SP.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--brand-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-navy)] transition hover:border-[color:var(--brand-green-deep)] hover:bg-[color:var(--brand-lime)]"
                >
                  {bairro}
                </a>
              ))}
            </div>

            <h3 className="mt-8 font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
              Municípios da região
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {BRAND.areaServed.map((city) => {
                const slug = cityLocationSlug.get(city);
                const base =
                  "rounded-full border border-[color:var(--brand-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-navy)] transition hover:border-[color:var(--brand-green-deep)] hover:bg-[color:var(--brand-lime)]";
                return slug ? (
                  <Link key={city} href={`/locais/${slug}`} className={base}>
                    {city}
                  </Link>
                ) : (
                  <span key={city} className={base}>
                    {city}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
