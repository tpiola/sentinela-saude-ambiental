"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Dedetização e desinsetização",
    desc: "Tratamentos alinhados ao seu cenário — sem improviso, com produtos adequados e segurança para família e pets quando aplicável.",
  },
  {
    title: "Controle integrado",
    desc: "Diagnóstico + plano + execução: menos retrabalho, mais previsibilidade e tranquilidade no seu ambiente.",
  },
  {
    title: "Empresas e condomínios",
    desc: "Rotinas que combinam discrição, documentação e foco em conformidade para operações que não podem parar.",
  },
  {
    title: "Orientação clara",
    desc: "Você entende o que será feito e por quê — linguagem direta, sem termos vazios nem pressão desnecessária.",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 bg-[color:var(--brand-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[color:var(--brand-navy)] md:text-4xl">
            O que você realmente contrata
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[color:var(--brand-muted)]">
            Quando o problema é pragas, hesitar custa caro — financeiro e em
            saúde. Aqui o foco é{" "}
            <strong className="text-[color:var(--brand-navy)]">
              eliminar incerteza
            </strong>
            : método, transparência e deslocamento na região.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[color:var(--brand-border)] bg-white p-8 shadow-sm ring-1 ring-black/[0.03] transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--brand-green)]/15 text-[color:var(--brand-navy)]">
                <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[color:var(--brand-navy)]">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
