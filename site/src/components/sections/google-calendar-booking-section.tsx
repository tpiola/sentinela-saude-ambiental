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
            <p className="mt-8 text-sm text-[color:var(--brand-muted)]">
              Para agendar online, configure{" "}
              <code className="text-xs">NEXT_PUBLIC_GOOGLE_CALENDAR_URL</code>{" "}
              na Vercel ou chame no WhatsApp.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
