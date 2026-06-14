"use client";

import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

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
          className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Escorpião, barata, cupim ou não conformidade? Antecipe-se com laudo ANVISA e garantia em Franca SP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/85"
        >
          {BRAND.experienceYearsLabel} atendendo residências e empresas no Centro, Jardim Francano, City Petrópolis, 
          Parque Progresso, Residencial Baldassari e todos os bairros de Franca SP. Chame no 
          WhatsApp para diagnóstico gratuito — sem compromisso.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={whatsappHref()}
            className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-[0_0_25px_rgba(132,255,0,0.4)] transition hover:bg-[color:var(--brand-navy-soft)]"
          >
            Solicitar diagnóstico gratuito
          </a>
          <a
            href="#diagnostico"
            className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Diagnóstico online
          </a>
        </motion.div>
      </div>
    </section>
  );
}
