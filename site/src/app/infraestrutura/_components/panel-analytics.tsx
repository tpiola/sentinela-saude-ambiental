"use client";

import { useEffect, useState } from "react";
import {
  clearPageViews,
  readPageViews,
  summarizePageViews,
  type AnalyticsSummary,
} from "@/lib/infraestrutura/tracker";
import { Card, SectionTitle, StatCard } from "./ui";

export function PanelAnalytics() {
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    setSummary(summarizePageViews(readPageViews()));
  }, [cleared]);

  const total = summary?.total ?? 0;
  const mobilePct = total > 0 ? Math.round(((summary?.mobile ?? 0) / total) * 100) : 0;
  const desktopPct = total > 0 ? Math.round(((summary?.desktop ?? 0) / total) * 100) : 0;
  const tabletPct = total > 0 ? Math.round(((summary?.tablet ?? 0) / total) * 100) : 0;

  const maxDay = Math.max(1, ...(summary?.last7Days.map((d) => d.count) ?? [1]));

  function handleClear() {
    clearPageViews();
    setCleared((current) => !current);
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total de visitas" value={total} icon="📊" accent="navy" />
        <StatCard label="Visitas hoje" value={summary?.today ?? 0} icon="📅" accent="lime" />
        <StatCard label="Mobile" value={summary?.mobile ?? 0} icon="📱" accent="accent" />
        <StatCard label="Desktop" value={summary?.desktop ?? 0} icon="🖥️" accent="muted" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle
            title="Divisão por dispositivo"
            subtitle="Detectado via navigator.userAgent"
          />
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-brand-surface">
            <div className="h-full bg-brand-accent" style={{ width: `${mobilePct}%` }} />
            <div className="h-full bg-brand-lime" style={{ width: `${tabletPct}%` }} />
            <div className="h-full bg-brand-navy" style={{ width: `${desktopPct}%` }} />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-5 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-brand-accent" /> Mobile {mobilePct}%
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-brand-lime" /> Tablet {tabletPct}%
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-brand-navy" /> Desktop {desktopPct}%
            </span>
          </div>
        </Card>

        <Card>
          <SectionTitle title="Últimos 7 dias" subtitle="Pageviews por dia" />
          <div className="flex h-40 items-end gap-2">
            {summary?.last7Days.map((day) => (
              <div key={day.label} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-xs font-bold text-brand-navy">{day.count}</span>
                <div
                  className="w-full rounded-t bg-brand-accent"
                  style={{ height: `${Math.max(4, (day.count / maxDay) * 100)}%` }}
                />
                <span className="text-[10px] text-brand-muted">{day.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Páginas mais acessadas" />
          {!summary || summary.topPaths.length === 0 ? (
            <p className="text-sm text-brand-muted">
              Ainda não há pageviews registrados neste navegador.
            </p>
          ) : (
            <ul className="space-y-2">
              {summary.topPaths.map(({ path, count }) => (
                <li
                  key={path}
                  className="flex items-center justify-between border-b border-brand-border pb-2 text-sm last:border-0"
                >
                  <span className="truncate font-mono text-brand-navy">{path}</span>
                  <span className="ml-3 shrink-0 font-bold text-brand-muted">{count}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <SectionTitle
            title="Integrações"
            subtitle="Mensuração em produção"
          />
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-brand-lime">✓</span>
              <span>
                <strong className="text-brand-navy">@vercel/analytics</strong>{" "}
                <span className="text-brand-muted">
                  já carregado globalmente via VercelTelemetry (com consentimento).
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-lime">✓</span>
              <span>
                <strong className="text-brand-navy">@vercel/speed-insights</strong>{" "}
                <span className="text-brand-muted">métricas de performance reais.</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-lime">✓</span>
              <span>
                <strong className="text-brand-navy">Tracker local</strong>{" "}
                <span className="text-brand-muted">
                  pageviews + tipo de dispositivo gravados no localStorage.
                </span>
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-5 text-brand-muted">
            O tracker local serve como fonte simples e privada para o painel.
            As métricas oficiais do site seguem no Vercel Analytics e no GA4/GTM.
          </p>
        </Card>
      </div>

      <Card className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-brand-muted">
          Dados locais deste navegador. Limpar remove todos os pageviews
          registrados.
        </p>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex min-h-10 items-center justify-center border border-red-300 px-4 text-sm font-bold text-red-700 transition-colors hover:bg-red-50"
        >
          Limpar dados locais
        </button>
      </Card>
    </div>
  );
}
