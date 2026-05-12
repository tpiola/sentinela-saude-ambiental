"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[52vh] items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-blue-700 via-blue-900 to-zinc-950"
      />
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-blue-100/90 uppercase">
          Negócios locais
        </p>
        <h1 className="text-4xl font-semibold text-balance text-white md:text-5xl">
          Site rápido, mapa integrado e experiência memorável
        </h1>
        <p className="mt-5 text-lg text-pretty text-blue-50/90">
          Stack Next.js e Tailwind com parallax, cena 3D e mapa do Google
          incorporado.
        </p>
      </div>
    </section>
  );
}
