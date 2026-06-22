"use client";

import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";
import type { PestData } from "@/lib/pests";

/* ─── Animação padrão ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Schema.org PestControl ─── */
function PestSchema({ pest, siteUrl }: { pest: PestData; siteUrl: string }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PestControlService",
        "@id": `${siteUrl}/pragas/${pest.slug}/#service`,
        name: `Controle de ${pest.name} — ${BRAND.name}`,
        description: pest.description,
        provider: {
          "@type": "LocalBusiness",
          name: BRAND.name,
          telephone: `+${BRAND.phoneE164}`,
          url: siteUrl,
        },
        areaServed: {
          "@type": "City",
          name: "Franca",
          containedInPlace: {
            "@type": "State",
            name: "São Paulo",
          },
        },
        serviceType: `${pest.name}`,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Tempo de secagem",
            value: pest.dryingTime,
          },
          {
            "@type": "PropertyValue",
            name: "Periodicidade recomendada",
            value: pest.revisitTime,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/pragas/${pest.slug}/#faq`,
        mainEntity: pest.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/* ─── Page Client ─── */
export function PestPageClient({ pest }: { pest: PestData }) {
  const isUrgent = pest.slug === "escorpiao" || pest.slug === "aranhas";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://sentinelasaudeambiental.vercel.app";

  return (
    <>
      <PestSchema pest={pest} siteUrl={siteUrl} />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[color:var(--brand-navy)] pt-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            aria-hidden
          >
            <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-lime)] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[color:var(--brand-lime)] blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-5xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_360px]">
              <div>
                <Reveal>
                  <span
                    className={`inline-block rounded-full border px-4 py-1 text-xs font-bold tracking-wider uppercase ${
                      isUrgent
                        ? "border-red-400/40 bg-red-500/20 text-red-300"
                        : "border-[color:var(--brand-lime)]/40 bg-[color:var(--brand-lime)]/10 text-[color:var(--brand-lime)]"
                    }`}
                  >
                    {pest.icon} Controle de {pest.name} — Franca/SP
                  </span>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    Dedetização de{" "}
                    <span className="text-[color:var(--brand-lime)]">
                      {pest.name}
                    </span>{" "}
                    em Franca SP
                  </h1>
                </Reveal>

                <Reveal delay={0.14}>
                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    {pest.description}
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={whatsappHref(
                        `Olá, Sentinela! Tenho problemas com ${pest.name.toLowerCase()} em Franca/SP. Preciso de orçamento urgente.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-[56px] min-w-[260px] items-center justify-center gap-3 rounded-full px-8 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-2xl transition ${
                        isUrgent
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-[color:var(--brand-lime)] text-[color:var(--brand-navy)] hover:brightness-110"
                      }`}
                    >
                      {pest.icon} {pest.name} em casa? <br className="sm:hidden" />
                      Chame agora!
                    </a>
                    <a
                      href={whatsappHref(
                        `Olá, Sentinela! Quero saber mais sobre o plano preventivo de ${pest.name.toLowerCase()} em Franca/SP.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[56px] items-center justify-center rounded-full border-2 border-[color:var(--brand-lime)]/60 px-8 py-4 font-semibold text-[color:var(--brand-lime)] transition hover:bg-[color:var(--brand-lime)]/10"
                    >
                      Plano preventivo →
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.26}>
                  <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
                    <span>✅ Laudo técnico ANVISA</span>
                    <span className="hidden md:inline">·</span>
                    <span>✅ Atendimento rápido via WhatsApp</span>
                    <span className="hidden md:inline">·</span>
                    <span>✅ Garantia contratual</span>
                  </p>
                </Reveal>
              </div>

              {/* Stats / Info Card */}
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                  <div className="text-center">
                    <span className="text-5xl font-black text-[color:var(--brand-lime)] md:text-6xl">
                      {pest.icon}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-white/70 uppercase tracking-wider">
                      {pest.name}
                    </p>
                    <p className="mt-2 text-xs text-white/50">
                      Controle profissional em Franca/SP
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/20 text-base">
                        ⏱️
                      </span>
                      <span>Secagem: {pest.dryingTime.split("—")[0].trim()}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/20 text-base">
                        🔄
                      </span>
                      <span>
                        {pest.revisitTime.split(".")[0].trim()}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Por que aparece ─── */}
        <section className="scroll-mt-28 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal>
              <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
                Entenda o problema
              </p>
              <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                Por que {pest.name.toLowerCase()} aparecem?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[color:var(--brand-muted)]">
                {pest.whyAppears}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── Riscos ─── */}
        <section className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal>
              <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
                {isUrgent ? "⚠ Perigo real" : "Riscos à saúde"}
              </p>
              <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                {pest.risks.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[color:var(--brand-muted)]">
                Conheça os riscos de {pest.name.toLowerCase()} para sua família,
                crianças e animais domésticos.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {pest.risks.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-[color:var(--brand-border)] bg-white p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-lime)]/20 text-2xl">
                      {item.emoji}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-[color:var(--brand-muted)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tratamento ─── */}
        <section className="scroll-mt-28 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal>
              <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
                Como resolvemos
              </p>
              <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                {pest.treatment.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[color:var(--brand-muted)]">
                Nosso método profissional segue protocolo ANVISA com produtos
                registrados e segurança para sua família.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {pest.treatment.steps.map((step, idx) => (
                <Reveal key={step.numero} delay={idx * 0.08}>
                  <div className="group relative overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 transition hover:shadow-lg md:p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] text-2xl font-black text-[color:var(--brand-lime)]">
                        {step.numero}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{step.icone}</span>
                          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Timeline: Secagem + Revisita ─── */}
        <section className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <Reveal>
              <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
                Prazos e garantia
              </p>
              <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                O que esperar do serviço
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-[color:var(--brand-border)] bg-white p-8 text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-lime)]/20 text-3xl">
                    ⏱️
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                    Tempo de Secagem
                  </h3>
                  <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                    {pest.dryingTime}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-[color:var(--brand-border)] bg-white p-8 text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-lime)]/20 text-3xl">
                    🔄
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                    Periodicidade
                  </h3>
                  <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                    {pest.revisitTime}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Dicas de Prevenção ─── */}
        <section className="scroll-mt-28 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <Reveal>
              <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
                Prevenção
              </p>
              <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                Dicas para evitar {pest.name.toLowerCase()}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-10 grid gap-4 md:grid-cols-2">
                {pest.preventionTips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/20 text-xs font-bold text-[color:var(--brand-green-deep)]">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[color:var(--brand-muted)]">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <Reveal>
              <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
                Dúvidas Frequentes
              </p>
              <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                {pest.name}: tire suas dúvidas
              </h2>
            </Reveal>

            <ul className="mt-12 space-y-3">
              {pest.faq.map((item, idx) => (
                <Reveal key={item.q} delay={idx * 0.06}>
                  <li className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white shadow-sm">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-[color:var(--brand-navy)]">
                        {item.q}
                        <span className="shrink-0 text-xl text-[color:var(--brand-green-deep)] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="border-t border-[color:var(--brand-border)] px-5 pt-3 pb-4 leading-relaxed text-[color:var(--brand-muted)]">
                        {item.a}
                      </p>
                    </details>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CTA Final ─── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-green)] via-[color:var(--brand-green-deep)] to-[color:var(--brand-navy)] py-20 md:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          >
            <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brand-green-light)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
            <Reveal>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl">
                Livre-se dos {pest.name.toLowerCase()} agora
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
                {pest.name.toLowerCase()} em casa é{" "}
                <strong className="text-white">
                  {isUrgent
                    ? "risco de vida para crianças e idosos"
                    : "risco à saúde da sua família"}
                </strong>
                . Atendemos com urgência em Franca e região com laudo ANVISA,
                produtos registrados e garantia contratual.
                <strong className="text-white"> Não espere o pior.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10">
                <a
                  href={whatsappHref(
                    `Olá, Sentinela! Quero contratar o plano de controle de ${pest.name.toLowerCase()} para minha residência em Franca/SP.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] min-w-[280px] items-center justify-center gap-3 rounded-full bg-[color:var(--brand-navy)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-2xl transition hover:bg-[color:var(--brand-navy-soft)]"
                >
                  {pest.icon} Quero resolver agora
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-sm text-white/60">
                Ou ligue / WhatsApp:{" "}
                <strong className="text-white">{BRAND.phoneDisplay}</strong> ·{" "}
                Atendimento rápido em horário comercial
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
