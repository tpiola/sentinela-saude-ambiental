"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

const pains = [
  {
    title: "Escorpião",
    dor: "Perigo real. Picada pode matar em horas.",
    solucao: "Atendimento mais rápido de Franca. Saímos na hora.",
    cta: "Chamar agora — prioridade",
    action: "escorpião",
  },
  {
    title: "Baratas",
    dor: "Sujam alimentos, transmitem doenças, contaminam tudo.",
    solucao: "Eliminação em 24h com gel e garantia.",
    cta: "Quero eliminar",
    action: "barata",
  },
  {
    title: "Cupim",
    dor: "Destrói móveis, portas, telhados — você só vê quando já estragou.",
    solucao: "Barreira química com garantia contratual.",
    cta: "Agendar vistoria",
    action: "cupim",
  },
  {
    title: "Condomínios e Empresas",
    dor: "",
    solucao:
      "Laudo ANVISA, cronograma, conformidade. Serviço sem parar sua operação.",
    cta: "Solicitar proposta",
    action: "empresa",
  },
  {
    title: "Sítios e Chácaras",
    dor: "",
    solucao:
      "Áreas amplas, pragas de campo. Atendimento especializado.",
    cta: "Chamar especialista",
    action: "sítio",
  },
];

export function PainSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime-deep)] uppercase">
            Identificou alguma praga?
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            A Sentinela resolve.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[color:var(--brand-muted)]">
            Cada minuto parado é prejuízo. Chama agora.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:shadow-[0_10px_40px_rgba(239,68,68,0.15)]"
            >
              {/* Dor section */}
              <div className="mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                  ⚠ O problema
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-extrabold text-[color:var(--brand-navy)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-red-700">
                  {p.dor}
                </p>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-dashed border-gray-200" />

              {/* Solução section */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-lime-deep)]">
                  ✓ A solução
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-[color:var(--brand-navy)]">
                  {p.solucao}
                </p>
              </div>

              <div className="mt-6 flex-1" />
              <a
                href={whatsappHref(
                  `Olá, Sentinela! Preciso de ajuda com ${p.action} em Franca SP.`,
                )}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-navy)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] active:scale-95"
              >
                {p.cta}
              </a>
            </motion.article>
          ))}
        </div>

        {/* Bonus cards - 2 columns */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {pains.slice(3).map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.24 + i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-extrabold text-[color:var(--brand-navy)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-muted)]">
                {p.solucao}
              </p>
              <div className="mt-4 flex-1" />
              <a
                href={whatsappHref(
                  `Olá, Sentinela! Quero ${p.action === "empresa" ? "uma proposta para minha empresa" : "falar com especialista sobre sítio/chácara"} em Franca SP.`,
                )}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[color:var(--brand-navy)] bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-navy)] hover:text-white active:scale-95"
              >
                {p.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[color:var(--brand-muted)]">
            Laudo ANVISA vencendo?{" "}
            <a
              href={whatsappHref(
                "Olá, Sentinela! Preciso de laudo ANVISA urgente.",
              )}
              className="font-bold text-[color:var(--brand-navy)] underline underline-offset-2 hover:text-[color:var(--brand-lime-deep)]"
            >
              Agende hoje.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
