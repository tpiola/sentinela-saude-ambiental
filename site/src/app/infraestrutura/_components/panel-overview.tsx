"use client";

import { useEffect, useState } from "react";
import {
  readPageViews,
  summarizePageViews,
  type AnalyticsSummary,
} from "@/lib/infraestrutura/tracker";
import { readLeads, LEAD_STATUS_LABELS, type LeadStatus } from "@/lib/infraestrutura/leads";
import { Badge, Card, SectionTitle, StatCard } from "./ui";

export function PanelOverview() {
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [leads, setLeads] = useState<ReturnType<typeof readLeads>>([]);

  useEffect(() => {
    setSummary(summarizePageViews(readPageViews()));
    setLeads(readLeads());
  }, []);

  const total = summary?.total ?? 0;
  const mobilePct = total > 0 ? Math.round(((summary?.mobile ?? 0) / total) * 100) : 0;
  const desktopPct = total > 0 ? Math.round(((summary?.desktop ?? 0) / total) * 100) : 0;

  const statusCounts: Partial<Record<LeadStatus, number>> = {};
  for (const lead of leads) {
    statusCounts[lead.status] = (statusCounts[lead.status] ?? 0) + 1;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-brand-navy p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-lime">
          Painel interno
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold">
          Bem-vindo à central de operações
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
          Acompanhe o tráfego do site, gerencie leads, configure a secretária
          virtual Cristina e revise a identidade visual da marca em um só lugar.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Visitas hoje" value={summary?.today ?? 0} icon="📅" accent="lime" />
        <StatCard label="Visitas totais" value={total} icon="👁️" accent="navy" />
        <StatCard
          label="Mobile"
          value={summary?.mobile ?? 0}
          hint={`${mobilePct}% do total`}
          icon="📱"
          accent="accent"
        />
        <StatCard
          label="Desktop"
          value={summary?.desktop ?? 0}
          hint={`${desktopPct}% do total`}
          icon="🖥️"
          accent="muted"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle
            title="Dispositivos"
            subtitle="Divisão entre mobile e desktop"
          />
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-brand-surface">
            <div
              className="h-full bg-brand-accent"
              style={{ width: `${mobilePct}%` }}
            />
            <div
              className="h-full bg-brand-navy"
              style={{ width: `${desktopPct}%` }}
            />
          </div>
          <div className="mt-3 flex items-center gap-5 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-brand-accent" />
              Mobile {mobilePct}%
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-brand-navy" />
              Desktop {desktopPct}%
            </span>
          </div>
          <p className="mt-4 text-xs text-brand-muted">
            Dados gravados localmente neste navegador (sem backend).
          </p>
        </Card>

        <Card>
          <SectionTitle
            title="Resumo do CRM"
            subtitle="Situação dos leads registrados"
          />
          {leads.length === 0 ? (
            <p className="text-sm text-brand-muted">
              Nenhum lead registrado ainda. Adicione na aba CRM/Leads.
            </p>
          ) : (
            <ul className="space-y-3">
              {(["novo", "contatado", "agendado", "concluido"] as LeadStatus[]).map(
                (status) => (
                  <li
                    key={status}
                    className="flex items-center justify-between border-b border-brand-border pb-2 last:border-0"
                  >
                    <span className="text-sm text-brand-muted">
                      {LEAD_STATUS_LABELS[status]}
                    </span>
                    <Badge tone={status === "agendado" ? "lime" : status === "novo" ? "accent" : status === "concluido" ? "navy" : "amber"}>
                      {statusCounts[status] ?? 0}
                    </Badge>
                  </li>
                ),
              )}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
