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
    <section id="sobre" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-[color:var(--brand-lime)]/20"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={BRAND.galleryImages[2].src}
                alt={BRAND.galleryImages[2].alt}
                width={800}
                height={1067}
                className="h-[280px] w-full object-cover object-top sm:h-[380px] lg:h-[440px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
            <div className="absolute right-4 bottom-4 rounded-2xl bg-[color:var(--brand-navy)] px-6 py-5 text-white shadow-2xl sm:px-8">
              <p className="font-[family-name:var(--font-heading)] text-4xl font-black text-[color:var(--brand-lime)] sm:text-5xl">
                {BRAND.experienceYearsShort}
              </p>
              <p className="text-xs font-bold tracking-widest text-white/80 uppercase">
                {BRAND.experienceYearsLabel}
              </p>
              <p className="mt-1 text-[10px] font-semibold text-white/70 normal-case">
                {BRAND.experienceHeadline}
              </p>
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
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[color:var(--brand-navy)] md:text-4xl lg:text-5xl">
              Saúde ambiental com laudo, transparência e responsabilidade.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--brand-muted)]">
              A{" "}
              <strong className="text-[color:var(--brand-navy)]">
                {BRAND.name}
              </strong>{" "}
              é referência em qualidade e ética no controle integrado de pragas
              em Franca e região — não somos a “dedetizadora de passagem”:
              planejamos o serviço, registramos o que foi feito e entregamos
              transparência para você e para a Vigilância Sanitária.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/25 text-[color:var(--brand-green-deep)]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="font-medium text-[color:var(--brand-navy)]/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref()}
              className="mt-10 inline-flex min-h-[48px] items-center rounded-full bg-[color:var(--brand-navy)] px-8 py-3 font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)]"
            >
              Falar com especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
