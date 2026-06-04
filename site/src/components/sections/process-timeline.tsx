"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

const steps = [
  {
    number: "01",
    title: "Primeiro Contato",
    subtitle: "Atração e Consciência",
    text: "Você nos encontra pelo Google, indicação ou redes sociais. Entra em contato pelo WhatsApp ou preenche o diagnóstico gratuito no site.",
    cta: "Diagnóstico gratuito",
    color: "from-[color:var(--brand-lime)]/20 to-transparent",
    badge: "Topo do Funil",
  },
  {
    number: "02",
    title: "Diagnóstico Objetivo",
    subtitle: "Qualificação",
    text: "Identificamos o problema, o tipo de ambiente e a urgência. Priorizamos escorpião, empresas com exigência de vigilância e situações de risco.",
    cta: null,
    color: "from-[color:var(--brand-accent-blue)]/20 to-transparent",
    badge: "Meio do Funil",
  },
  {
    number: "03",
    title: "Proposta Clara",
    subtitle: "Consideração",
    text: "Escopo detalhado, investimento transparente e prazo estimado. Incluímos laudo técnico quando necessário. Sem surpresas.",
    cta: null,
    color: "from-purple-500/20 to-transparent",
    badge: "Meio do Funil",
  },
  {
    number: "04",
    title: "Agendamento",
    subtitle: "Decisão",
    text: "Escolha o dia e horário pelo Google Agenda ou WhatsApp. Confirmação automática com lembrete.",
    cta: null,
    color: "from-[color:var(--brand-lime)]/20 to-transparent",
    badge: "Fundo do Funil",
  },
  {
    number: "05",
    title: "Execução Profissional",
    subtitle: "Entrega",
    text: "Técnicos equipados e treinados. Produtos registrados na ANVISA. Orientações completas sobre segurança durante e após o serviço.",
    cta: null,
    color: "from-emerald-500/20 to-transparent",
    badge: "Fundo do Funil",
  },
  {
    number: "06",
    title: "Pós-serviço",
    subtitle: "Retenção",
    text: "Laudo técnico emitido, garantia informada e follow-up. Plano preventivo para manter seu ambiente protegido o ano todo.",
    cta: null,
    color: "from-orange-500/20 to-transparent",
    badge: "Pós-venda",
  },
];

export function ProcessTimeline() {
  return (
    <section
      id="como-trabalhamos"
      className="scroll-mt-24 bg-[color:var(--brand-navy)] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
            Funil de Vendas
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
            Do primeiro contato à proteção garantida
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Cada etapa é pensada para que você tome a decisão certa com clareza e confiança.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={"relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 bg-gradient-to-br " + step.color + " p-6 backdrop-blur-sm"}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-black text-[color:var(--brand-lime)] leading-none">
                  {step.number}
                </span>
                <span className="rounded-full border border-white/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 bg-white/10">
                  {step.badge}
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
                {step.subtitle}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {step.text}
              </p>
              {step.cta && (
                <a
                  href={whatsappHref()}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-lime)] hover:underline"
                >
                  {step.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-white/70 mb-6 text-sm">
            Pronto para começar? O primeiro passo é gratuito.
          </p>
          <a
            href={whatsappHref()}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-10 py-3 font-[family-name:var(--font-heading)] font-bold text-[color:var(--brand-navy)] shadow-lg transition hover:bg-[color:var(--brand-green-light)] active:scale-95"
          >
            Iniciar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
