"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

const pains = [
  {
    title: "Escorpião em casa?",
    subtitle: "Perigo real, principalmente para crianças e idosos.",
    cta: "Chamar agora — prioridade",
    action: "escorpião",
    urgency: "Atendimento prioritário em Franca SP",
  },
  {
    title: "Barata no comércio?",
    subtitle: "Suja a imagem do negócio. Resolvemos em 24h.",
    cta: "Quero resolver agora",
    action: "barata",
    urgency: "Gel biologicamente formulado — aprovação ANVISA",
  },
  {
    title: "Cupim destruindo?",
    subtitle: "Cada dia parado é mais prejuízo no seu patrimônio.",
    cta: "Agendar vistoria",
    action: "cupim",
    urgency: "Barreira química com garantia contratual",
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
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Identificou alguma praga?
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            A solução está a um clique
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[color:var(--brand-muted)]">
            Escolha o problema — a Sentinela resolve com laudo e garantia.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-sm transition hover:shadow-[0_10px_40px_rgba(132,255,0,0.25)]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-lime)]/20">
                <span className="text-2xl font-black text-[color:var(--brand-green-deep)]">
                  {i === 0 ? "!" : i === 1 ? "!" : "!"}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-[color:var(--brand-navy)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-muted)]">
                {p.subtitle}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-lime)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-green-deep)]">
                {p.urgency}
              </div>
              <div className="mt-6 flex-1" />
              <a
                href={whatsappHref(`Olá! Preciso de ajuda com ${p.action} em Franca SP.`)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-navy)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] active:scale-95"
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
              href={whatsappHref("Olá, Sentinela! Preciso de laudo ANVISA urgente.")}
              className="font-bold text-[color:var(--brand-navy)] underline underline-offset-2 hover:text-[color:var(--brand-green-deep)]"
            >
              Agende hoje.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
