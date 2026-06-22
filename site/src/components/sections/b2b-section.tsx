"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BRAND, whatsappHref } from "@/lib/brand";

const BENEFITS = [
  {
    title: "Laudo ANVISA incluso",
    desc: "Documentação completa para Vigilância Sanitária. Conformidade RDC 622/2022.",
    emoji: "📋",
  },
  {
    title: "Cronograma preventivo",
    desc: "Visitas programadas sem interromper sua operação. Relatório fotográfico a cada serviço.",
    emoji: "📅",
  },
  {
    title: "Atendimento prioritário",
    desc: "Resposta em menos de 30 minutos. Emergência? Chegamos em 1 hora.",
    emoji: "⚡",
  },
  {
    title: "Sem contrato de fidelidade",
    desc: "Serviço avulso ou contrato mensal. Do jeito que você preferir.",
    emoji: "🤝",
  },
];

const CLIENTS = [
  "Condomínios residenciais",
  "Shoppings e galerias",
  "Indústrias e galpões",
  "Clínicas e hospitais",
  "Restaurantes e bares",
  "Escolas e creches",
];

export function B2BSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--brand-lime)_0%,transparent_70%)] opacity-5" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-navy)]/15 bg-[color:var(--brand-navy)]/5 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[color:var(--brand-navy)] uppercase">
            🏢 Contratos empresariais
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-extrabold text-[color:var(--brand-navy)] md:text-5xl">
            Protegemos o seu<br />
            <span className="text-[color:var(--brand-lime)] [text-shadow:0_0_0_#002347,-1px_-1px_0_#002347,1px_-1px_0_#002347,-1px_1px_0_#002347,1px_1px_0_#002347]">
              patrimônio empresarial
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[color:var(--brand-navy)]/70">
            Condomínios, indústrias, comércios e clínicas em Franca e região contam com a Sentinela para controle de pragas preventivo, laudo ANVISA e atendimento que não para sua operação.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-[color:var(--brand-navy)]/10 bg-white p-6 transition hover:border-[color:var(--brand-lime)]/40 hover:shadow-lg"
            >
              <span className="text-3xl">{b.emoji}</span>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-navy)]/60">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-navy)]/30 uppercase mb-4">
            Atendemos
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-[color:var(--brand-navy)]/10 bg-[color:var(--brand-navy)]/3 px-4 py-2 text-sm font-semibold text-[color:var(--brand-navy)]/80"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={whatsappHref("Olá, Sentinela! Gostaria de solicitar um orçamento para controle de pragas em condomínio/empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-8 py-4 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy)] shadow-[0_0_20px_rgba(132,255,0,0.3)] transition hover:brightness-110 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Orçamento empresarial
          </a>
          <Link
            href="/condominio"
            className="inline-flex min-h-[56px] min-w-[200px] items-center justify-center rounded-full border-2 border-[color:var(--brand-navy)] px-8 py-4 font-[family-name:var(--font-heading)] text-base font-semibold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-navy)] hover:text-white"
          >
            Ver plano condomínios
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-10 border-t border-[color:var(--brand-navy)]/10 pt-10"
        >
          <div className="text-center">
            <div className="text-3xl font-black text-[color:var(--brand-navy)]">50+</div>
            <div className="mt-1 text-xs font-semibold tracking-widest text-[color:var(--brand-navy)]/50 uppercase">
              Condomínios atendidos
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[color:var(--brand-navy)]">100%</div>
            <div className="mt-1 text-xs font-semibold tracking-widest text-[color:var(--brand-navy)]/50 uppercase">
              Laudo ANVISA incluso
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[color:var(--brand-navy)]">&lt; 30 min</div>
            <div className="mt-1 text-xs font-semibold tracking-widest text-[color:var(--brand-navy)]/50 uppercase">
              Resposta garantida
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
