"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

const highlights = [
  "Compromisso com qualidade, ética e transparência no diagnóstico.",
  "Produtos de baixa toxicidade — orientação clara para família e pets.",
  "Laudo técnico e documentação para exigências da Vigilância Sanitária.",
  "Atendimento rápido, discreto e resposta em minutos no WhatsApp.",
];

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-28 bg-white py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="absolute -inset-3 rounded-3xl bg-[color:var(--brand-lime)]/20"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={BRAND.galleryImages[2].src}
                alt={BRAND.galleryImages[2].alt}
                width={800}
                height={1067}
                className="h-[240px] w-full object-cover object-top sm:h-[320px] md:h-[400px] lg:h-[440px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute right-3 bottom-3 max-w-[85%] rounded-2xl bg-[color:var(--brand-navy)] px-4 py-3 text-white shadow-2xl sm:right-4 sm:bottom-4 sm:px-6 sm:py-5">
                <p className="font-[family-name:var(--font-heading)] text-3xl font-black text-[color:var(--brand-lime)] sm:text-4xl md:text-5xl">
                  {BRAND.experienceYearsShort}
                </p>
                <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase sm:text-xs">
                  {BRAND.experienceYearsLabel}
                </p>
                <p className="mt-1 text-[10px] font-semibold text-white/70 normal-case sm:text-xs">
                  {BRAND.experienceHeadline}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
              <span className="h-0.5 w-8 bg-[color:var(--brand-lime)]" />
              Conheça a Sentinela
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[color:var(--brand-navy)] sm:text-3xl md:text-4xl lg:text-5xl">
              Saúde ambiental com laudo, transparência e responsabilidade.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--brand-muted)] sm:mt-6 sm:text-lg">
              A{" "}
              <strong className="text-[color:var(--brand-navy)]">
                {BRAND.name}
              </strong>{" "}
              é referência em qualidade e ética no controle integrado de pragas
              em Franca e região. {BRAND.coverageSummary}
            </p>
            <p className="mt-4 text-sm text-[color:var(--brand-muted)] sm:text-base">
              {BRAND.pricingSummary}
            </p>
            <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/25 text-[color:var(--brand-green-deep)]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm font-medium text-[color:var(--brand-navy)]/90 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref()}
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-8 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] sm:mt-10 sm:w-auto sm:text-base"
            >
              Falar com especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
