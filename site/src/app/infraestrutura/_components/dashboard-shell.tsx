"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PanelOverview } from "./panel-overview";
import { PanelAnalytics } from "./panel-analytics";
import { PanelHeatmap } from "./panel-heatmap";
import { PanelDesignSystem } from "./panel-design-system";
import { PanelCristina } from "./panel-cristina";
import { PanelCrm } from "./panel-crm";
import { PanelVision } from "./panel-vision";

type TabId =
  | "overview"
  | "analytics"
  | "heatmap"
  | "design"
  | "cristina"
  | "crm"
  | "vision";

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

const TABS: Tab[] = [
  { id: "overview", label: "Visão Geral", icon: "📊" },
  { id: "analytics", label: "Analytics", icon: "📈" },
  { id: "heatmap", label: "Mapa de Calor", icon: "🔥" },
  { id: "design", label: "Design System", icon: "🎨" },
  { id: "cristina", label: "Cristina", icon: "💬" },
  { id: "crm", label: "CRM/Leads", icon: "🗂️" },
  { id: "vision", label: "Visão por Imagem", icon: "🖼️" },
];

const PANELS: Record<TabId, () => React.ReactNode> = {
  overview: () => <PanelOverview />,
  analytics: () => <PanelAnalytics />,
  heatmap: () => <PanelHeatmap />,
  design: () => <PanelDesignSystem />,
  cristina: () => <PanelCristina />,
  crm: () => <PanelCrm />,
  vision: () => <PanelVision />,
};

export function DashboardShell() {
  const router = useRouter();
  const [tab, setTab] = useState<TabId>("overview");
  const [loggingOut, setLoggingOut] = useState(false);

  const active = TABS.find((item) => item.id === tab) ?? TABS[0];
  const ActivePanel = PANELS[tab];

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/infraestrutura/logout", { method: "POST" });
    } catch {
      // Mesmo sem resposta, segue para o login.
    }
    router.replace("/infraestrutura/login");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen bg-brand-surface">
      {/* Sidebar (desktop) */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-brand-navy text-white lg:flex">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-lime font-display text-lg font-extrabold text-brand-navy-heading">
            S
          </span>
          <div>
            <p className="font-display text-sm font-bold leading-tight">
              Sentinela
            </p>
            <p className="text-[11px] text-white/50">Saúde Ambiental</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {TABS.map((item) => {
            const isActive = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-white/10 text-brand-lime"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-4 py-4">
          <div className="mb-3 flex items-center gap-2 text-xs text-white/60">
            <span className="h-2 w-2 rounded-full bg-brand-lime" />
            Conectado como sentinela
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 disabled:opacity-60"
          >
            {loggingOut ? "Saindo..." : "Sair do painel"}
          </button>
        </div>
      </aside>

      {/* Coluna principal */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header mobile + topbar */}
        <header className="sticky top-0 z-10 border-b border-brand-border bg-white">
          <div className="flex items-center gap-3 px-4 py-3 lg:px-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-lime font-display text-base font-extrabold text-brand-navy-heading lg:hidden">
              S
            </span>
            <div className="min-w-0">
              <h1 className="truncate font-display text-lg font-bold text-brand-navy">
                {active.label}
              </h1>
              <p className="hidden text-xs text-brand-muted sm:block">
                Painel de infraestrutura · Sentinela Saúde Ambiental
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="ml-auto inline-flex min-h-9 items-center justify-center border border-brand-border px-3 text-xs font-bold text-brand-muted transition-colors hover:border-brand-navy hover:text-brand-navy lg:hidden"
            >
              Sair
            </button>
          </div>

          {/* Navegação mobile */}
          <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:hidden">
            {TABS.map((item) => {
              const isActive = item.id === tab;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-brand-navy text-white"
                      : "bg-brand-surface text-brand-muted"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </header>

        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
