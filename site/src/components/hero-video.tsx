"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoBrandHero } from "@/components/logo-sentinel";
import { BRAND, whatsappHref } from "@/lib/brand";

type HeroVideoProps = {
  videoSrc?: string;
};

export function HeroVideo({ videoSrc }: HeroVideoProps) {
  const envSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const src = videoSrc ?? envSrc ?? BRAND.heroVideoUrl;

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[color:var(--brand-navy)] pt-20 pb-20 sm:pb-4"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BRAND.heroVideoPosterUrl}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy)] via-[color:var(--brand-navy)]/80 to-[color:var(--brand-navy)]/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-navy)]/95 via-transparent to-[color:var(--brand-lime)]/20"
          aria-hidden
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:py-20"
      >
        <div className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-lime)]/30 bg-[color:var(--brand-lime)]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[color:var(--brand-lime)]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
              11+ anos em Franca SP
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl leading-[1.08] font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Escorpião na sua casa? Resolva hoje com controle profissional
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/85 lg:mx-0">
            Eliminação segura de escorpiões com equipe especializada, atendimento rápido em Franca SP e orientação completa para evitar novas infestações.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:flex-wrap lg:justify-start">
            <motion.a
              href={whatsappHref()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full min-w-[260px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy-heading)] shadow-xl sm:w-auto"
            >
              Solicitar diagnóstico gratuito
            </motion.a>
            <a
              href="#servicos"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Ver serviços
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-white/70 lg:justify-start">
            <li className="flex items-center gap-1.5">✓ ANVISA RDC 622/2022</li>
            <li className="flex items-center gap-1.5">✓ Técnicos registrados</li>
            <li className="flex items-center gap-1.5">✓ Laudo em até 24h</li>
            <li className="flex items-center gap-1.5">✓ Indústria e condomínios</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:max-w-md"
        >
          <LogoBrandHero />
        </motion.div>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/45 sm:flex"
        aria-hidden
      >
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-5 rounded-full border-2 border-white/30"
        >
          <span className="mx-auto mt-1 block h-2 w-1 rounded-full bg-white/50" />
        </motion.span>
      </div>
    </section>
  );
}
