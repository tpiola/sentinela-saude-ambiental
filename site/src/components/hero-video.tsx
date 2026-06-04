"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LogoBrandHero } from "@/components/logo-sentinel";
import { BRAND, whatsappHref } from "@/lib/brand";

export function HeroVideo({ videoSrc }: { videoSrc?: string }) {
  const envSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const src = videoSrc ?? envSrc ?? BRAND.heroVideoUrl;

  return (
    <section ref={ref} id="inicio" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[color:var(--brand-navy)] pt-20 pb-20 sm:pb-4">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={BRAND.heroVideoPosterUrl} aria-hidden>
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy)] via-[color:var(--brand-navy)]/80 to-[color:var(--brand-navy)]/40" aria-hidden />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:py-20">
        <div className="text-center lg:text-left">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl leading-[1.08] font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Dedetizacao em Franca SP com Seguranca e Garantia
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/85 lg:mx-0">
            Solucao definitiva para cupins, ratos, baratas e escorpioes. Laudo ANVISA e orcamento gratis.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <motion.a href={whatsappHref()} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex min-h-[52px] w-full min-w-[260px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-bold text-[color:var(--brand-navy-heading)] shadow-xl sm:w-auto">
              Fale com um Especialista Agora
            </motion.a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
          <LogoBrandHero />
        </motion.div>
      </motion.div>
    </section>
  );
}
