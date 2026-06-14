"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pains = [
  {
    title: "Escorpião",
    dor: "Perigo real. Picada pode matar em horas.",
    solucao: "Atendimento mais rápido de Franca. Saímos na hora.",
    cta: "Chamar agora — prioridade",
    action: "escorpião",
    emoji: "🦂",
  },
  {
    title: "Baratas",
    dor: "Sujam alimentos, transmitem doenças, contaminam tudo.",
    solucao: "Eliminação em 24h com gel e garantia.",
    cta: "Quero eliminar",
    action: "barata",
    emoji: "🪳",
  },
  {
    title: "Cupim",
    dor: "Destrói móveis, portas, telhados — você só vê quando já estragou.",
    solucao: "Barreira química com garantia contratual.",
    cta: "Agendar vistoria",
    action: "cupim",
    emoji: "🪵",
  },
  {
    title: "Condomínios e Empresas",
    dor: "",
    solucao:
      "Laudo ANVISA, cronograma, conformidade. Serviço sem parar sua operação.",
    cta: "Solicitar proposta",
    action: "empresa",
    emoji: "🏢",
  },
  {
    title: "Sítios e Chácaras",
    dor: "",
    solucao:
      "Áreas amplas, pragas de campo. Atendimento especializado.",
    cta: "Chamar especialista",
    action: "sítio",
    emoji: "🌳",
  },
];

export function PainSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, var(--brand-lime) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--brand-lime)] via-[color:var(--brand-green-deep)] to-[color:var(--brand-lime)]" aria-hidden />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-[color:var(--brand-lime)]/30 bg-[color:var(--brand-lime)]/10 px-4 py-1 text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase mb-3">
            Identificou alguma praga?
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            A Sentinela resolve.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[color:var(--brand-muted)]">
            Cada minuto parado é prejuízo. Chama agora.
          </p>
        </motion.div>

        {/* Cards principais — risco imediato */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:shadow-[0_10px_40px_rgba(239,68,68,0.15)]"
            >
              {/* Top-right emoji decorativo */}
              <span className="absolute top-3 right-3 text-2xl opacity-10 transition group-hover:opacity-30" aria-hidden>
                {p.emoji}
              </span>

              {/* Dor section */}
              <div className="mb-2">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                  O problema
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-extrabold text-[color:var(--brand-navy)]">
                  {p.emoji} {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-red-700">
                  {p.dor}
                </p>
              </div>

              {/* Divider personalizada */}
              <div className="my-4 flex items-center gap-2" aria-hidden>
                <span className="h-px flex-1 bg-gradient-to-r from-red-200 to-transparent" />
                <span className="text-red-300 text-[10px] font-bold">VS</span>
                <span className="h-px flex-1 bg-gradient-to-l from-[color:var(--brand-lime)]/50 to-transparent" />
              </div>

              {/* Solução section */}
              <div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-lime-deep)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-lime)]" />
                  A solução
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-[color:var(--brand-navy)]">
                  {p.solucao}
                </p>
              </div>

              <div className="mt-6 flex-1" />
              <a
                href="/agendar"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-navy)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] active:scale-95"
              >
                {p.cta}
              </a>
            </motion.article>
          ))}
        </div>

        {/* Cards B2B + Sítio — tom corporativo, layout alternativo */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {pains.slice(3).map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.24 + i * 0.08 }}
              className="group relative flex flex-row items-start gap-5 overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-gradient-to-br from-[color:var(--brand-surface)] to-white p-6 shadow-sm transition hover:shadow-lg md:p-8"
            >
              {/* Coluna do ícone */}
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-lime)]/15 text-2xl shadow-sm ring-1 ring-[color:var(--brand-lime)]/20">
                {p.emoji}
              </div>

              {/* Coluna do conteúdo */}
              <div className="flex flex-1 flex-col min-w-0">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-extrabold text-[color:var(--brand-navy)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-muted)]">
                  {p.solucao}
                </p>
                <div className="mt-4 flex-1" />
                <a
                  href="/agendar"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[color:var(--brand-navy)] bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-navy)] hover:text-white active:scale-95"
                >
                  {p.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[color:var(--brand-muted)]">
            Laudo ANVISA vencendo?{" "}
            <a
              href="/agendar"
              className="font-bold text-[color:var(--brand-navy)] underline underline-offset-2 hover:text-[color:var(--brand-lime-deep)]"
            >
              Agende hoje.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
