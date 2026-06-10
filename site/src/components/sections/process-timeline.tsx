"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

const steps = [
  {
    number: "01",
    label: "1",
    title: "Entre em Contato",
    text: "Chame no WhatsApp ou preencha o formulário. Respondemos em minutos no horário comercial sem burocracia.",
    cta: "Falar agora no WhatsApp",
    ctaHref: "whatsapp",
    color: "from-[color:var(--brand-lime)]/20 to-transparent",
  },
  {
    number: "02",
    label: "2",
    title: "Diagnóstico Gratuito",
    text: "Identificamos o problema, o ambiente e a urgência. Sem custo de visita. Escorpiões e situações de risco têm prioridade.",
    cta: null,
    ctaHref: null,
    color: "from-[color:var(--brand-accent-blue)]/20 to-transparent",
  },
  {
    number: "03",
    label: "3",
    title: "Proposta Transparente",
    text: "Recebe um orçamento claro: o que será feito, o produto usado, o prazo e o investimento. Sem surpresas.",
    cta: null,
    ctaHref: null,
    color: "from-purple-500/20 to-transparent",
  },
  {
    number: "04",
    label: "4",
    title: "Agendamento Fácil",
    text: "Escolha o melhor dia e horário pelo WhatsApp ou Google Agenda. Você recebe confirmação e lembrete automático.",
    cta: "Agendar pelo Google",
    ctaHref: "calendar",
    color: "from-[color:var(--brand-lime)]/20 to-transparent",
  },
  {
    number: "05",
    label: "5",
    title: "Serviço Profissional",
    text: "Técnicos treinados, produtos registrados na ANVISA e orientação completa sobre segurança para família e pets.",
    cta: null,
    ctaHref: null,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    number: "06",
    label: "6",
    title: "Garantia e Laudo",
    text: "Recebe o laudo técnico, a garantia do serviço e o plano preventivo para manter seu espaço protegido o ano todo.",
    cta: null,
    ctaHref: null,
    color: "from-orange-500/20 to-transparent",
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
            Como funciona
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
            Do primeiro contato à proteção garantida
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Simples, rápido e sem complicação. Veja como é fácil proteger sua casa ou empresa.
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
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/20 font-[family-name:var(--font-heading)] text-xl font-black text-[color:var(--brand-lime)]">
                  {step.label}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-2xl font-black text-[color:var(--brand-lime)] leading-none opacity-20">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {step.text}
              </p>
              {step.cta && step.ctaHref === "whatsapp" && (
                <a
                  href={whatsappHref()}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-lime)] hover:underline"
                >
                  {step.cta}
                </a>
              )}
              {step.cta && step.ctaHref === "calendar" && (
                <a
                  href={calendarBookingHref()}
                  target="_blank"
                  rel="noopener noreferrer"
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
            O diagnóstico é gratuito e sem compromisso.
          </p>
          <a
            href={whatsappHref()}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-10 py-3 font-[family-name:var(--font-heading)] font-bold text-[color:var(--brand-navy)] shadow-lg transition hover:bg-[color:var(--brand-green-light)] active:scale-95"
          >
            Quero meu orçamento gratuito
          </a>
        </motion.div>
      </div>
    </section>
  );
}
