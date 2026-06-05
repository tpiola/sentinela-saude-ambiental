"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

const pontos = [
  {
    icon: "shield",
    title: "Prevencao continua",
    body: "Um plano preventivo evita infestacoes, reduz custos de emergencia e protege sua operacao o ano todo.",
  },
  {
    icon: "doc",
    title: "Documentacao completa",
    body: "Laudo tecnico, certificados e registros de aplicacao prontos para qualquer auditoria ou fiscalizacao.",
  },
  {
    icon: "check",
    title: "Conformidade garantida",
    body: "Atendemos as exigencias da Vigilancia Sanitaria e normas do setor, protegendo a reputacao do seu negocio.",
  },
  {
    icon: "clock",
    title: "Sem parar sua operacao",
    body: "Aplicamos gel de ultima geracao e agendamos fora do horario de pico para nao interferir no seu dia a dia.",
  },
];

const icons = {
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  doc: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

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
            Proteja seu negocio antes do problema aparecer
          </h2>
          <p className="mt-4 text-lg text-[color:var(--brand-muted)]">
            Industria, comercio e condominio com exigencia de Vigilancia Sanitaria: tenha laudo tecnico, prevencao documentada e conformidade sem surpresas.
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
              className="rounded-3xl border border-[color:var(--brand-border)] bg-white p-8 shadow-sm flex gap-5"
            >
              <div className="flex-shrink-0 mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-lime)]/15 text-[color:var(--brand-green-deep)]">
                {icons[p.icon as keyof typeof icons]}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={whatsappHref("Ola, Sentinela! Preciso de controle de pragas para minha empresa em Franca SP.")}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-10 py-3 font-[family-name:var(--font-heading)] font-bold text-white shadow-lg transition hover:bg-[color:var(--brand-navy-soft)] active:scale-95"
          >
            Solicitar proposta para empresa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
