"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

export function GoogleCalendarBookingSection() {
  const href = calendarBookingHref();

  return (
    <section
      id="agendar"
      className="scroll-mt-28 border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Agenda
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Agende visita ou diagnóstico
          </h2>
          <p className="mt-4 text-[color:var(--brand-muted)]">
            Escolha um horário no Google Agenda. Cobertura:{" "}
            {BRAND.coverageSummary}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[52px] min-w-[260px] items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-8 py-3 font-[family-name:var(--font-heading)] text-base font-bold text-white shadow-lg transition hover:bg-[color:var(--brand-navy-heading)]/90"
          >
            Agendar agora no Google Agenda
          </a>
        </motion.div>
      </div>
    </section>
  );
}
