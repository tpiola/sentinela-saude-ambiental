"use client";

import Image from "next/image";
import { useState } from "react";
import { whatsappHref } from "@/lib/brand";

const galleryItems = [
  {
    src: "/media/sentinela/drive/dedetizacao-centro-franca-sp.webp",
    alt: "Equipe em serviço de controle de pragas no Centro de Franca SP",
    bairro: "Centro",
    desc: "Registro de atendimento em imóvel comercial, com inspeção do ambiente e orientação sobre as medidas adotadas.",
  },
  {
    src: "/media/sentinela/drive/aplicacao-jardim-francano-franca-sp.webp",
    alt: "Aplicação de controle de pragas no Jardim Francano em Franca SP",
    bairro: "Jardim Francano",
    desc: "Atendimento residencial com preparação do local e orientações específicas para pessoas e animais.",
  },
  {
    src: "/media/sentinela/drive/controle-pragas-city-petropolis-franca-sp.webp",
    alt: "Controle de pragas no City Petrópolis em Franca SP",
    bairro: "City Petrópolis",
    desc: "Inspeção e tratamento direcionado conforme os sinais e as condições encontrados no imóvel.",
  },
  {
    src: "/media/sentinela/drive/dedetizacao-parque-progresso-franca-sp.webp",
    alt: "Atendimento empresarial de controle de pragas no Parque Progresso em Franca SP",
    bairro: "Parque Progresso",
    desc: "Atendimento empresarial com escopo preventivo, registros do serviço e recomendações operacionais.",
  },
  {
    src: "/media/sentinela/drive/escorpiao-residencial-baldassari-franca-sp.webp",
    alt: "Inspeção para controle de escorpiões no Residencial Baldassari em Franca SP",
    bairro: "Residencial Baldassari",
    desc: "Avaliação prioritária de possíveis acessos, abrigos e condições favoráveis à ocorrência de escorpiões.",
  },
  {
    src: "/media/sentinela/drive/servico-vila-santa-terezinha-franca-sp.webp",
    alt: "Serviço de controle de pragas na Vila Santa Terezinha em Franca SP",
    bairro: "Vila Santa Terezinha",
    desc: "Registro de serviço com diagnóstico inicial, execução orientada e recomendações preventivas ao cliente.",
  },
] as const;

export function GallerySection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="galeria" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
            Registros de atendimento
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Serviços realizados em Franca
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--brand-muted)]">
            Imagens do trabalho da equipe em diferentes regiões da cidade. Os
            detalhes de cada serviço variam conforme a ocorrência e o imóvel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => {
            const isExpanded = expanded === index;
            return (
              <article
                key={item.bairro}
                className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[color:var(--brand-lime)] px-3 py-1 text-xs font-bold text-black">
                    {item.bairro}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[color:var(--brand-navy)]">
                    {item.bairro} — Franca SP
                  </h3>
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    aria-controls={`gallery-details-${index}`}
                    className="mt-3 min-h-11 text-sm font-semibold text-[color:var(--brand-green-deep)] underline-offset-4 hover:underline"
                  >
                    {isExpanded ? "Ocultar detalhes" : "Ver detalhes"}
                  </button>

                  {isExpanded ? (
                    <div id={`gallery-details-${index}`} className="mt-3 border-t border-[color:var(--brand-border)] pt-4">
                      <p className="text-sm leading-6 text-[color:var(--brand-muted)]">
                        {item.desc}
                      </p>
                      <a
                        href={whatsappHref(
                          `Olá! Vi um registro de atendimento no ${item.bairro} e gostaria de solicitar uma avaliação.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white"
                      >
                        Solicitar avaliação
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
