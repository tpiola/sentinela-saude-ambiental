"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Bloco educativo — principais pragas urbanas em ambiente climático tropical/subtropical. */
const pragas = [
  {
    title: "RATOS",
    body: "Buscam abrigo, água e restos de alimento; proliferação aumenta junto ao acúmulo de lixo, esgotos degradados e entradas sem vedação. Locais pouco iluminados, fundos falsos de móveis, depósitos e vãos são pontos típicos. Clima mais úmido e noites amenas favorecem deslocamentos em busca de comida.",
    icon: RatIcon,
  },
  {
    title: "BARATAS",
    body: "Indicadores de falhas de limpeza, frestas úmidas ou restos atrás de equipamentos. Ambientes aquecidos, cozinhas e áreas molhadas concentram ocorrências; em clima mais quente tendem a ciclar rápido. Fechamentos, higienização e barreira técnica reduzem hotspot.",
    icon: RoachIcon,
  },
  {
    title: "ARANHAS",
    body: "Aparecem onde há outros artrópodes (presas) e abrigo: caixarias, pergolados e vegetação próxima a paredes. Menos uso de espaços externos com mato encostado ao alvenaria diminui entrada. Luz mal direcionada sobre fachadas também pode atrair insetos e, em cadeia, aranhas.",
    icon: SpiderIcon,
  },
  {
    title: "FORMIGAS",
    body: "Linhas vivas até fonte de carboidrato, umidade ou madeira mole. Dias secos levam migração rumo à água; após chuvas, enxames podem aparecer improvisando novo ninho. Vigilância de frestas, juntas químicas e manejo estrutural evita dispersão pelo imóvel.",
    icon: AntIcon,
  },
  {
    title: "ESCORPIÕES",
    body: "Associados a áreas úmidas, pedras empilhadas, entulho e alto índice de insetos vetores próximos. Períodos de calor úmido ampliam atividade à noite — prevenção com desobstrução, vedações e baixa de baratas correlaciona diretamente com redução de risco.",
    icon: ScorpionIcon,
  },
] as const;

export function PragasUrbanasCards() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pragas-urbanas"
      className="scroll-mt-28 bg-white py-16 md:py-20"
      aria-labelledby="pragas-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Vigilância ambiental urbana
          </p>
          <h2
            id="pragas-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl"
          >
            Pragas urbanas: abrigos e clima favorecem ciclo
          </h2>
          <p className="mt-4 text-[color:var(--brand-muted)]">
            Principais pragas típicas de ambiente sintético/fechados e perímetro
            — entenda onde se instalam e por que a estação amplia ou reduz pressão.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pragas.map((p, i) => {
            const IconCmp = p.icon;
            return (
            <motion.article
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduce ? 0 : 0.4,
                delay: reduce ? 0 : Math.min(i * 0.05, 0.25),
              }}
              className="flex flex-col rounded-3xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-navy)] text-[color:var(--brand-lime)]"
                  aria-hidden
                >
                  <IconCmp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide text-[color:var(--brand-navy)]">
                    {p.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--brand-muted)]">
                {p.body}
              </p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 13c2-5 14-6 17-2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 17h3l1-6c2-.5 4-.5 6 0l1 6h3"
      />
      <path d="M3 21h18" strokeLinecap="round" />
    </svg>
  );
}

function RoachIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <ellipse cx="12" cy="14" rx="6" ry="3.5" />
      <path strokeLinecap="round" d="M6 12l-2 2 M18 12l2 2" />
      <path strokeLinecap="round" d="M7 16l-1 3 M17 16l1 3" />
      <path strokeLinecap="round" d="M12 8v4" />
    </svg>
  );
}

function SpiderIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <circle cx="12" cy="12" r="2" />
      <path strokeLinecap="round" d="M12 10V4 M10 11l-4-4 M14 11l4-4" />
      <path strokeLinecap="round" d="M10 13l-5 5 M14 13l5 5" />
      <path strokeLinecap="round" d="M11 13h2" />
    </svg>
  );
}

function AntIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17c2-7 12-9 13-2"
      />
      <circle cx="8" cy="8" r="1.8" />
      <circle cx="17" cy="7" r="1.8" />
    </svg>
  );
}

function ScorpionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 17c3-9 13-11 17-5"
      />
      <path strokeLinecap="round" d="M17 17l4 4" />
      <path strokeLinecap="round" d="M13 17l3 5" />
    </svg>
  );
}
