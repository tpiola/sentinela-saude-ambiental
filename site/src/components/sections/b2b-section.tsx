"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

const cards = [
  {
    title: "Laudo técnico oficial",
    text: "Documentação e certificados exigidos por Vigilância Sanitária e auditorias.",
  },
  {
    title: "Sem parar a operação",
    text: "Gel de última geração e horários flexíveis para comércio e indústria.",
  },
  {
    title: "Contrato preventivo",
    text: "Cronograma bimestral ou mensal — evita multas e interdições.",
  },
  {
    title: "Polo industrial de Franca",
    text: "Experiência com calçados, alimentos, condomínios e varejo.",
  },
];

export function B2bSection() {
  return (
    <section
      id="empresas"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-[color:var(--brand-navy)] via-[color:var(--brand-navy)] to-[color:var(--brand-accent-blue)]/40 py-20 text-white md:py-28"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[color:var(--brand-lime)]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[color:var(--brand-accent-blue)]/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
              <span className="h-0.5 w-8 bg-[color:var(--brand-lime)]" />
              Para comércio e indústria
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              Controle de pragas para empresas em Franca SP
            </h2>
            <p className="mt-4 text-sm text-white/80">
              Laudo ANVISA, contrato e controle contínuo.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl border border-white/10 p-6 backdrop-blur-sm ${
                    i === 0
                      ? "bg-gradient-to-br from-white/10 to-white/0 shadow-[0_10px_40px_rgba(132,255,0,0.15)]"
                      : "bg-white/5"
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[color:var(--brand-lime)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <a
              href={whatsappHref(
                "Olá! Preciso de controle de pragas para minha empresa em Franca SP.",
              )}
              className="mt-10 inline-flex min-h-[48px] items-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)]"
            >
              Solicitar proposta empresarial
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute inset-0 translate-x-4 -translate-y-4 rounded-3xl border-2 border-[color:var(--brand-lime)]"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={BRAND.galleryImages[1].src}
                alt={BRAND.galleryImages[1].alt}
                width={800}
                height={1067}
                className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[480px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
