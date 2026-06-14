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
          className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Escorpião, barata, cupim, rato.
          <br />
          <span className="text-[color:var(--brand-navy-heading)]">
            A praga mais rápida de Franca resolve.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/85"
        >
          Da chamada ao serviço completo. Laudo, garantia, confiança.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={whatsappHref(
              "Olá, Sentinela! Vi o site e preciso resolver praga urgente em Franca SP.",
            )}
            className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand-navy)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-[0_0_25px_rgba(132,255,0,0.4)] transition hover:bg-[color:var(--brand-navy-soft)]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Chamar agora no WhatsApp
          </a>
          <a
            href="/agendar"
            className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Agendar pelo site
          </a>
        </motion.div>
      </div>
    </section>
  );
}
