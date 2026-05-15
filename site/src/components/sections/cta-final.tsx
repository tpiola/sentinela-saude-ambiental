"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-green)] via-[color:var(--brand-green-deep)] to-[color:var(--brand-navy)] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brand-green-light)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[color:var(--brand-navy)] md:text-4xl"
        >
          Pronto para um ambiente mais seguro — começando agora?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-[color:var(--brand-navy)]/90"
        >
          Um clique no WhatsApp é suficiente para tirar o problema da cabeça e
          colocar solução na agenda.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-10"
        >
          <a
            href={whatsappHref()}
            className="inline-flex min-h-[56px] min-w-[280px] items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-2xl transition hover:bg-[color:var(--brand-navy-soft)]"
          >
            Falar com a Sentinela no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
