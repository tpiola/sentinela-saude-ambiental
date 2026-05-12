"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LocalShowcase3D = dynamic(
  () => import("@/components/local-showcase-3d").then((m) => m.LocalShowcase3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-72 items-center justify-center rounded-2xl bg-zinc-900 text-sm text-zinc-400">
        A carregar demonstração…
      </div>
    ),
  },
);

export function Showcase3DLazy() {
  return (
    <section className="bg-[color:var(--brand-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)] md:text-3xl">
            Experiência interativa
          </h2>
          <p className="mt-3 text-[color:var(--brand-muted)]">
            Detalhe técnico que reforça atenção à execução — performance
            otimizada (carrega apenas quando necessário).
          </p>
        </motion.div>
        <div className="h-72 overflow-hidden rounded-2xl ring-1 ring-black/10 md:h-96">
          <LocalShowcase3D />
        </div>
      </div>
    </section>
  );
}
