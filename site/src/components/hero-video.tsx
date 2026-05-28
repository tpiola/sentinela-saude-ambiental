"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoImageMark } from "@/components/logo-sentinel";
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.25]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const src = videoSrc ?? envSrc ?? BRAND.heroVideoUrl;

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[color:var(--brand-navy)] pt-[4.5rem] sm:pt-20"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 motion-reduce:transform-none"
      >
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
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy)] via-[color:var(--brand-navy)]/85 to-[color:var(--brand-navy)]/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-navy)]/95 via-transparent to-[color:var(--brand-lime)]/15"
          aria-hidden
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:py-20"
      >
        <div className="text-center lg:text-left">
          <h1 className="font-[family-name:var(--font-heading)] text-[1.65rem] leading-[1.12] font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Controle de pragas com método — além da dedetizadora genérica
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-white/85 sm:mt-6 sm:text-lg lg:mx-0">
            {BRAND.shortTagline}{" "}
            <strong className="text-white">{BRAND.coverageSummary}</strong>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              href={whatsappHref()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-6 py-3.5 font-[family-name:var(--font-heading)] text-sm font-bold text-[color:var(--brand-navy-heading)] shadow-xl sm:min-w-[260px] sm:px-8 sm:text-base"
            >
              Diagnóstico gratuito no WhatsApp
            </motion.a>
            <a
              href="#servicos"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-8"
            >
              Ver serviços
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-white/65 sm:mt-10 sm:text-xs lg:justify-start">
            <li>✓ Orçamento gratuito no WhatsApp</li>
            <li>✓ ANVISA RDC 622</li>
            <li>✓ {BRAND.region}</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-10 w-full max-w-[280px] rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-white/30 backdrop-blur-sm sm:max-w-sm sm:p-6 lg:mt-0 lg:max-w-xs"
        >
          <LogoImageMark
            src="/brand/logo-sentinela-full.png"
            className="mx-auto max-h-32 w-auto object-contain sm:max-h-36 md:max-h-40"
            priority
            sizes="(max-width: 640px) 260px, 300px"
            fallbackShieldSize={72}
          />
        </motion.div>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/40 motion-reduce:hidden sm:bottom-20 md:bottom-8 md:flex"
        aria-hidden
      >
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-7 w-4 rounded-full border-2 border-white/30 sm:h-8 sm:w-5"
        >
          <span className="mx-auto mt-1 block h-1.5 w-1 rounded-full bg-white/50" />
        </motion.span>
      </div>
    </section>
  );
}
