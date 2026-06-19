"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

const highlights = [
  "Diagnóstico técnico em residências e empresas de Franca SP.",
  "Produtos ANVISA com baixa toxicidade. Seguro para família e pets.",
  "Laudo técnico e certificados para Vigilância Sanitária.",
  "Resposta em minutos pelo WhatsApp.",
];

const miniGallery = [
  { src: "/media/sentinela/drive/aplicacao-jardim-francano-franca-sp.webp", alt: "Aplicação Jardim Francano Franca SP" },
  { src: "/media/sentinela/drive/controle-pragas-city-petropolis-franca-sp.webp", alt: "Controle de pragas City Petrópolis Franca SP" },
  { src: "/media/sentinela/drive/dedetizacao-parque-progresso-franca-sp.webp", alt: "Dedetização Parque Progresso Franca SP" },
  { src: "/media/sentinela/drive/servico-vila-santa-terezinha-franca-sp.webp", alt: "Serviço Vila Santa Terezinha Franca SP" },
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
                src="/media/sentinela/drive/dedetizacao-centro-franca-sp.webp"
                alt="Dedetização profissional no Centro de Franca SP — Sentinela Saúde Ambiental"
                width={800}
                height={1067}
                className="h-[280px] w-full object-cover object-top sm:h-[380px] lg:h-[440px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>

            {/* Mini-grid de imagens abaixo da imagem principal */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {miniGallery.map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-24 w-full object-cover sm:h-32"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
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
              Sobre a Sentinela
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[color:var(--brand-navy)] md:text-4xl lg:text-5xl">
              Dedetizadora em Franca SP com laudo técnico e responsabilidade.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--brand-muted)]">
              A{" "}
              <strong className="text-[color:var(--brand-navy)]">
                {BRAND.name}
              </strong>{" "}
              é referência em controle de pragas em Franca e região.
              Diferente de empresas que apenas aplicam e somem, entregamos ciclo completo:
              diagnóstico, aplicação com produtos ANVISA, laudo e acompanhamento.
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
