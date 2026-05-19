"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

const steps = [
  {
    title: "Diagnóstico objetivo",
    text: "Você descreve o cenário — identificamos prioridades e próximo passo sem enrolação.",
  },
  {
    title: "Proposta clara",
    text: "Escopo e investimento compreensíveis. Sem letras miúdas escondidas.",
  },
  {
    title: "Execução disciplinada",
    text: "Agenda combinada, execução profissional e orientações para manter o resultado.",
  },
];

export function ProcessTimeline() {
  return (
    <section
      id="como-trabalhamos"
      className="scroll-mt-28 bg-[color:var(--brand-navy)] py-16 text-white sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
            Um fluxo pensado para você confiar e decidir
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Clareza gera confiança — e confiança acelera a decisão certa.
          </p>
        </motion.div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-widest text-[color:var(--brand-green-light)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">{step.text}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href={whatsappHref()}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[color:var(--brand-green)] px-10 py-3 font-[family-name:var(--font-heading)] font-bold text-[color:var(--brand-navy)] shadow-lg transition hover:bg-[color:var(--brand-green-light)]"
          >
            Iniciar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
