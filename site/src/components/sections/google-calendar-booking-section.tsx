"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function GoogleCalendarBookingSection() {
  const href = calendarBookingHref();

  const benefits = [
    { Icon: CalendarIcon, text: "Solicite o melhor período para atendimento" },
    { Icon: ClockIcon, text: "A equipe confirma a disponibilidade" },
    { Icon: MapPinIcon, text: "Atendemos " + BRAND.coverageSummary },
    { Icon: CheckCircleIcon, text: "Condições informadas antes da contratação" },
  ];

  return (
    <section
      id="agendar"
      className="scroll-mt-28 bg-gradient-to-br from-[color:var(--brand-navy)] via-[color:var(--brand-navy-soft)] to-[#004080] py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
              Agendamento Online
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl leading-tight">
              Solicite um horário com clareza
            </h2>
            <p className="mt-4 text-white/75 text-lg leading-relaxed">
              Escolha o melhor dia e horario direto pelo Google Agenda.
              Confirmacao automatica e lembrete antes do atendimento.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-lime)]/20 text-[color:var(--brand-lime)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-white/85 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm p-8 text-center shadow-2xl"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--brand-lime)] shadow-lg">
              <CalendarIcon className="h-10 w-10 text-[color:var(--brand-navy)]" />
            </div>

            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
              Ver disponibilidade
            </h3>
            <p className="mt-2 text-white/70">
              Atendimento conforme disponibilidade operacional
            </p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy)] shadow-lg transition hover:bg-[color:var(--brand-green-light)] active:scale-95"
            >
              Consultar agenda
            </a>

            <p className="mt-4 text-sm text-white/50">
              A confirmação depende da região, urgência e disponibilidade.
            </p>

            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="text-xs text-white/50 mb-3">Prefere falar diretamente?</p>
              <a
                href={"https://wa.me/" + BRAND.phoneE164}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 px-5 py-2 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/10 transition"
              >
                WhatsApp: {BRAND.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
