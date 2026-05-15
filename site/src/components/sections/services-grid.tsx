"use client";

import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

const iconMap: Record<string, string> = {
  bug: "🪳",
  rat: "🐀",
  shield: "🛡️",
  droplet: "💧",
  alert: "⚠️",
  building: "🏢",
};

export function ServicesGrid() {
  return (
    <section
      id="servicos"
      className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Nossas soluções
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Controle integrado — método, não só aplicação
          </h2>
          <p className="mt-4 text-lg text-[color:var(--brand-muted)]">
            Diagnóstico, plano e documentação para residências e empresas na
            região de Franca — com laudo técnico e foco em Vigilância Sanitária
            quando o seu segmento exige comprovação.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND.services.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl border border-[color:var(--brand-border)] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              <span
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-surface)] text-2xl transition group-hover:bg-[color:var(--brand-lime)]/30"
                aria-hidden
              >
                {iconMap[s.icon] ?? "✓"}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                {s.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-[color:var(--brand-muted)]">
                {s.desc}
              </p>
              <a
                href={whatsappHref(
                  `Olá! Quero saber mais sobre ${s.title} em Franca SP.`,
                )}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-green-deep)] transition group-hover:gap-2"
              >
                Saber mais →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
