"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pains = [
  {
    title: "Escorpião",
    dor: "Surgiu um escorpião dentro de casa em Franca. Você não pode esperar.",
    solucao: "Atendimento mais rápido da cidade. Saímos na hora com produtos ANVISA.",
    cta: "Preciso de ajuda urgente",
    action: "escorpião",
  },
  {
    title: "Baratas",
    dor: "Aparecem à noite, contaminam comida, espalham sujeira pela cozinha.",
    solucao: "Eliminação em até 24h com gel seletivo. Garantia de resultado.",
    cta: "Quero resolver",
    action: "barata",
  },
  {
    title: "Cupim",
    dor: "Destrói móvel, roda de batente, forro de teto — e você só descobre quando já estragou.",
    solucao: "Barreira química com garantia contratual. Proteção contra cupim de madeira e de solo.",
    cta: "Solicitar vistoria",
    action: "cupim",
  },
  {
    title: "Condomínios e Empresas",
    dor: "Vigilância Sanitária apertando, laudo vencendo, morador reclamando de praga.",
    solucao: "Contrato preventivo com cronograma mensal, laudo ANVISA e relatório fotográfico. Sem parar sua operação.",
    cta: "Quero proposta comercial",
    action: "empresa",
  },
  {
    title: "Sítios e Chácaras",
    dor: "Área grande, mato, bicho entrando — a dedetização convencional não dá conta.",
    solucao: "Atendimento especializado para áreas rurais em Franca e região. Pulverização costal e termonebulização.",
    cta: "Chamar especialista",
    action: "sítio",
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
            Pragas em Franca e região?
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            A Sentinela resolve.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[color:var(--brand-muted)]">
            Mais de 11 anos atendendo Franca-SP. Serviço com laudo técnico, garantia e responsabilidade.
          </p>
        </motion.div>

        {/* Cards principais */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-white p-6 shadow-sm transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Título */}
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-[color:var(--brand-navy)]">
                {p.title}
              </h3>

              {/* O problema */}
              <div className="mt-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
                  O problema
                </span>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {p.dor}
                </p>
              </div>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent" aria-hidden />

              {/* A solução */}
              <div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-lime)]" />
                  A solução
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-[color:var(--brand-navy)]">
                  {p.solucao}
                </p>
              </div>

              <div className="mt-6 flex-1" />
              <Link
                href="/agendar"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-navy)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] active:scale-95"
              >
                {p.cta}
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Cards B2B + Sítio */}
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
              {/* Coluna do conteúdo */}
              <div className="flex flex-1 flex-col min-w-0">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-extrabold text-[color:var(--brand-navy)]">
                  {p.title}
                </h3>
                {/* O problema */}
                <span className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
                  O problema
                </span>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {p.dor}
                </p>
                {/* A solução */}
                <span className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-lime)]" />
                  A solução
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-[color:var(--brand-navy)]">
                  {p.solucao}
                </p>
                <div className="mt-4 flex-1" />
                <Link
                  href="/agendar"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[color:var(--brand-navy)] bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-navy)] hover:text-white active:scale-95"
                >
                  {p.cta}
                </Link>
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
            Laudo ANVISA vencendo ou precisa de documentação?{" "}
            <Link
              href="/agendar"
              className="font-bold text-[color:var(--brand-navy)] underline underline-offset-2 hover:text-[color:var(--brand-lime-deep)]"
            >
              Fale com a Sentinela.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
