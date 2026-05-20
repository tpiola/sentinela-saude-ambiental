"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import {
  calendarBookingHref,
  isExternalCalendarHref,
} from "@/lib/integrations";

export function GoogleCalendarBookingSection() {
  const href = calendarBookingHref();
  const external = isExternalCalendarHref(href);

  return (
    <section
      id="agendar"
      className="scroll-mt-28 border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Agenda
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)] sm:text-3xl md:text-4xl">
            Agende visita ou diagnóstico
          </h2>
          <p className="mt-4 text-sm text-[color:var(--brand-muted)] sm:text-base">
            {BRAND.coverageSummary}
          </p>
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[52px] w-full max-w-sm items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-6 py-3 font-[family-name:var(--font-heading)] text-sm font-bold text-white shadow-lg transition hover:bg-[color:var(--brand-navy-soft)] sm:min-w-[260px] sm:text-base"
            >
              Agendar agora no Google Agenda
            </a>
          ) : (
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-[color:var(--brand-muted)]">
                Para agendar online, escolha um horário diretamente no calendário abaixo ou entre em contato pelo WhatsApp.
              </p>
              <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white p-2 shadow-inner">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=sentinelasaudeambiental%40gmail.com&ctz=America%2FSao_Paulo"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  className="min-h-[450px] sm:min-h-[600px]"
                  title="Calendário de Agendamento Sentinela"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
