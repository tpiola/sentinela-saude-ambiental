"use client";

import { BRAND } from "@/lib/brand";

const stats = [
  { num: BRAND.experienceYearsShort, label: "anos em Franca e região" },
  { num: "Comercial", label: "Retorno no WhatsApp" },
  { num: "ANVISA", label: "RDC 622/2022" },
  { num: "Laudo", label: "Vigilância Sanitária" },
  { num: "40 km", label: "Raio de atendimento" },
  { num: "CIP", label: "Controle integrado" },
];

export function StatsMarquee() {
  const track = [...stats, ...stats];

  return (
    <section
      className="overflow-hidden border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-5"
      aria-label="Destaques da empresa"
    >
      <div className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
        {track.map((s, i) => (
          <div
            key={`${s.label}-${i}`}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap"
          >
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
              {s.num}
            </span>
            <span className="text-sm text-[color:var(--brand-muted)]">
              {s.label}
            </span>
            <span
              className="h-4 w-px bg-[color:var(--brand-border)]"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  );
}
