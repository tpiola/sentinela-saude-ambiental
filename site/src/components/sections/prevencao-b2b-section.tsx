"use client";

import { motion } from "framer-motion";

const pontos = [
  {
    title: "Prevenção antes da crise",
    body: "Plano contínuo reduz risco de infestação e custo de emergências — menos parada de produção, menos multa por condições inadequadas.",
  },
  {
    title: "Trilha de auditoria",
    body: "Registro do que foi feito, quando e com qual produto: base para fiscalização, fornecedor e boa prática de defesa documental.",
  },
  {
    title: "Reputação e compliance",
    body: "Alinhar operação à exigência da Vigilância Sanitária e normas do segmento — imagem protegida frente a pragas vinculadas a auditoria e clientes B2B.",
  },
  {
    title: "Vigilância e laudos",
    body: "Laudo técnico e rotina alinhada à necessidade de comprovação em indústria de alimentos, saúde, logística e condomínios comercializados.",
  },
];

export function PrevencaoB2BSection() {
  return (
    <section
      id="prevencao-b2b"
      className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Empresas e estabelecimentos
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Estratégia de prevenção — além da dedetização reativa
          </h2>
          <p className="mt-4 text-lg text-[color:var(--brand-muted)]">
            Foco em quem precisa de dedetização documentada, laudos e rotina
            exigível: indústria, comércio, condomínios e prestadores com
            exigência de vigilância sanitária. A reação ao foco aparece quando o
            plano falhou — a prevenção sustenta operação e reputação.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pontos.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-[color:var(--brand-border)] bg-white p-8 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
