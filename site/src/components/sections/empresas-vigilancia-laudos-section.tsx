"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

const cards = [
  {
    title: "Laudos e relatórios técnicos",
    text: "Documentação voltada a auditorias, vigilância e exigências do seu segmento — com clareza de produto, método e periodicidade.",
  },
  {
    title: "Prevenção contínua",
    text: "Menos emergência e menos parada: cronograma com inspeção, barreiras e monitoramento alinhados ao risco do local.",
  },
  {
    title: "Registro e rastreabilidade",
    text: "Trilha do que foi executado, quando e em quais setores — base para fiscalização, fornecedores e boa prática interna.",
  },
  {
    title: "Polo industrial e varejo",
    text: "Experiência com calçados, alimentos, logística, saúde, condomínios e operações sob maior escrutínio.",
  },
];

/**
 * Segundo bloco empresarial (antes do cluster de CTAs/formulário): laudos e Vigilância.
 */
export function EmpresasVigilanciaLaudosSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="empresas-auditoria"
      className="relative scroll-mt-28 overflow-hidden bg-[color:var(--brand-navy)] py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-[color:var(--brand-lime)]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[color:var(--brand-accent-blue)]/18 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.42 }}
          >
            <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
              <span className="h-0.5 w-8 bg-[color:var(--brand-lime)]" />
              Laudos · Vigilância · Auditoria
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-[2.35rem]">
              Prevenção com registro — pronto para a fiscalização
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/82">
              Onde há exigência de vigilância sanitária ou contratos B2B, o
              controle de pragas deixa de ser “aplicação” e passa a ser{" "}
              <strong className="text-white">programa documentado</strong>. A
              Sentinela apoia indústria e serviços com rotina técnica, laudos
              quando necessários e foco em risco sanitário e reputação.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduce ? 0 : 0.38,
                    delay: reduce ? 0 : i * 0.04,
                  }}
                  className="rounded-2xl border border-white/12 bg-white/6 p-5 backdrop-blur-sm"
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
                "Olá! Solicito diagnóstico e proposta com laudo/atendimento à Vigilância para minha operação.",
              )}
              className="mt-10 inline-flex min-h-[48px] items-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)]"
            >
              Solicitar proposta com laudo técnico
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.42 }}
            className="relative lg:justify-self-end"
          >
            <div
              className="absolute inset-0 translate-x-3 -translate-y-3 rounded-3xl border-2 border-[color:var(--brand-lime)]/80"
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl lg:max-w-none">
              <Image
                src={BRAND.galleryImages[1].src}
                alt={BRAND.galleryImages[1].alt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
