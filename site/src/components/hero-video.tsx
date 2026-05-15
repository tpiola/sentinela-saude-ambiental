"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoBrandFull } from "@/components/logo-sentinel";
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.25]);

  const src = videoSrc ?? envSrc ?? BRAND.heroVideoUrl;

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-[color:var(--brand-navy)]"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/brand/hero-poster.svg"
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy)] via-[color:var(--brand-navy)]/75 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-navy)]/90 via-transparent to-[color:var(--brand-lime)]/28"
          aria-hidden
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-24"
      >
        <div className="mb-10 rounded-2xl bg-white/95 px-5 py-7 shadow-2xl ring-1 ring-white/60 backdrop-blur-md md:px-10 md:py-9">
          <LogoBrandFull />
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl leading-[1.12] font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
          Proteção que você sente. Resultados que você vê.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/90 md:text-xl">
          {BRAND.tagline}{" "}
          <span className="text-[color:var(--brand-green-light)] drop-shadow-sm">
            Orçamento ágil pelo WhatsApp — sem burocracia.
          </span>
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href={whatsappHref()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-[52px] min-w-[240px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-[family-name:var(--font-heading)] text-base font-bold tracking-wide text-[color:var(--brand-navy-heading)] shadow-xl ring-2 shadow-black/25 ring-white/25 transition hover:bg-[color:var(--brand-green-light)]"
          >
            Quero meu diagnóstico gratuito
          </motion.a>
          <a
            href="#servicos"
            className="text-sm font-semibold text-white/95 underline-offset-4 hover:underline"
          >
            Ver como trabalhamos
          </a>
        </div>
        <p className="mt-8 text-xs text-white/55 md:text-sm">
          Atendimento em {BRAND.region}
        </p>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50"
        aria-hidden
      >
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-5 rounded-full border-2 border-white/35"
        >
          <span className="mx-auto mt-1 block h-2 w-1 rounded-full bg-white/60" />
        </motion.span>
      </div>
    </section>
  );
}
