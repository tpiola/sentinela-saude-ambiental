"use client";

import { useEffect, useRef, useState } from "react";
import { Card, SectionTitle } from "./ui";

interface HeatPoint {
  x: number; // 0..1 normalizado
  y: number; // 0..1 normalizado
  ts: number;
}

const STORAGE_KEY = "sentinela_heatmap";

function loadPoints(): HeatPoint[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as HeatPoint[]) : [];
  } catch {
    return [];
  }
}

function savePoints(points: HeatPoint[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
  } catch {
    // noop
  }
}

export function PanelHeatmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<HeatPoint[]>([]);

  useEffect(() => {
    setPoints(loadPoints());
  }, []);

  const draw = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grade sutil de fundo
    ctx.strokeStyle = "rgba(0, 35, 71, 0.06)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    const radius = Math.max(24, Math.min(canvas.width, canvas.height) * 0.1);
    ctx.globalCompositeOperation = "lighter";
    for (const point of points) {
      const px = point.x * canvas.width;
      const py = point.y * canvas.height;
      const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius);
      gradient.addColorStop(0, "rgba(255, 90, 60, 0.5)");
      gradient.addColorStop(0.4, "rgba(240, 180, 40, 0.35)");
      gradient.addColorStop(1, "rgba(143, 206, 42, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  };

  useEffect(() => {
    draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  useEffect(() => {
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const next = [...points, { x, y, ts: Date.now() }];
    setPoints(next);
    savePoints(next);
  }

  function handleClear() {
    setPoints([]);
    savePoints([]);
  }

  function handleExport() {
    const blob = new Blob([JSON.stringify(points, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sentinela-heatmap.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <Card>
        <SectionTitle
          title="Mapa de calor"
          subtitle="Clique sobre a área para registrar pontos de interação"
        />
        <div
          ref={containerRef}
          onClick={handleClick}
          className="relative h-[380px] w-full cursor-crosshair overflow-hidden rounded-lg border border-brand-border bg-white"
          role="img"
          aria-label="Mapa de calor de cliques"
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
          {points.length === 0 && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="rounded-lg bg-brand-surface px-4 py-2 text-sm text-brand-muted">
                Nenhum ponto registrado ainda — clique para simular interações.
              </p>
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-brand-muted">
            {points.length} ponto{points.length === 1 ? "" : "s"} registrado
            {points.length === 1 ? "" : "s"}
          </span>
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex min-h-10 items-center justify-center bg-brand-navy px-4 text-sm font-bold text-white transition-colors hover:bg-brand-navy-soft"
          >
            Exportar JSON
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex min-h-10 items-center justify-center border border-brand-border px-4 text-sm font-bold text-brand-muted transition-colors hover:border-red-300 hover:text-red-700"
          >
            Limpar
          </button>
        </div>
      </Card>

      <Card>
        <SectionTitle
          title="Como interpretar"
          subtitle="Quanto mais pontos sobrepostos, mais 'quente' a região"
        />
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-4 w-16 rounded bg-gradient-to-r from-brand-lime via-amber-400 to-red-500" />
            <span className="text-brand-muted">frio → quente</span>
          </div>
          <p className="max-w-xl text-brand-muted">
            Esta é uma implementação demonstrativa em canvas/SVG-free: cada clique
            vira um ponto com gradiente radial e os pontos se acumulam via
            <code className="mx-1 rounded bg-brand-surface px-1 font-mono text-xs">globalCompositeOperation: lighter</code>.
            Em produção, um mapa real (ex.: hotjar/plausible) registraria cliques
            e rolagem de visitantes.
          </p>
        </div>
      </Card>
    </div>
  );
}
