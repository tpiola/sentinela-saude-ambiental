"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    src: "/media/sentinela/drive/dedetizacao-centro-franca-sp.webp",
    alt: "Dedetização profissional no Centro de Franca SP",
    bairro: "Centro",
    desc: "Aplicação profissional em imóvel comercial no Centro de Franca — laudo técnico e produtos ANVISA.",
    url: "https://wa.me/5516993747147?text=Olá! Vi o serviço no Centro de Franca e quero um orçamento.",
  },
  {
    src: "/media/sentinela/drive/aplicacao-jardim-francano-franca-sp.webp",
    alt: "Aplicação de controle de pragas no Jardim Francano Franca SP",
    bairro: "Jardim Francano",
    desc: "Residência protegida no Jardim Francano — aplicação criteriosa com orientação de segurança para família e pets.",
    url: "https://wa.me/5516993747147?text=Olá! Vi o serviço no Jardim Francano e quero um orçamento.",
  },
  {
    src: "/media/sentinela/drive/controle-pragas-city-petropolis-franca-sp.webp",
    alt: "Controle de pragas no City Petrópolis Franca SP",
    bairro: "City Petrópolis",
    desc: "Desinsetização completa no City Petrópolis — eliminação de baratas, formigas e aranhas com garantia contratual.",
    url: "https://wa.me/5516993747147?text=Olá! Vi o serviço no City Petrópolis e quero um orçamento.",
  },
  {
    src: "/media/sentinela/drive/dedetizacao-parque-progresso-franca-sp.webp",
    alt: "Dedetização no Parque Progresso Franca SP",
    bairro: "Parque Progresso",
    desc: "Atendimento empresarial no Parque Progresso — contrato preventivo com cronograma e laudo ANVISA.",
    url: "https://wa.me/5516993747147?text=Olá! Vi o serviço no Parque Progresso e quero um orçamento.",
  },
  {
    src: "/media/sentinela/drive/escorpiao-residencial-baldassari-franca-sp.webp",
    alt: "Controle de escorpião no Residencial Baldassari Franca SP",
    bairro: "Residencial Baldassari",
    desc: "Atendimento prioritário para escorpião no Residencial Baldassari — eliminação do foco com produtos registrados.",
    url: "https://wa.me/5516993747147?text=Olá! Vi o serviço no Residencial Baldassari e quero um orçamento.",
  },
  {
    src: "/media/sentinela/drive/servico-vila-santa-terezinha-franca-sp.webp",
    alt: "Serviço de dedetização na Vila Santa Terezinha Franca SP",
    bairro: "Vila Santa Terezinha",
    desc: "Serviço completo na Vila Santa Terezinha — diagnóstico, aplicação e laudo técnico com garantia.",
    url: "https://wa.me/5516993747147?text=Olá! Vi o serviço na Vila Santa Terezinha e quero um orçamento.",
  },
];

export function GallerySection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="scroll-mt-28 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Serviços realizados
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Nossos trabalhos em Franca SP
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--brand-muted)]">
            Fotos reais de serviços prestados nos bairros de Franca. Clique para ver detalhes e solicitar orçamento para o seu bairro.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.bairro}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] shadow-sm transition hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
                className="w-full text-left"
                aria-expanded={expanded === index}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-[color:var(--brand-lime)] px-3 py-1 text-xs font-bold text-black shadow">
                    {item.bairro}
                  </div>
                </div>
                <div className="p-4">
                  <AnimatePresence initial={false}>
                    {expanded === index ? (
                      <motion.div
                        key="expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-sm leading-relaxed text-[color:var(--brand-muted)]">
                          {item.desc}
                        </p>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
                        >
                          Solicitar orçamento
                        </a>
                      </motion.div>
                    ) : (
                      <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
                        {item.bairro} — Franca SP
                      </p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
