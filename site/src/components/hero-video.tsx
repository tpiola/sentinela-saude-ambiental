"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center md:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-lime)]/30 bg-[color:var(--brand-lime)]/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--brand-lime)]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
              Atendimento em Franca SP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[family-name:var(--font-heading)] text-5xl leading-[1.02] font-extrabold tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
          >
            Escorpião apareceu?<br />
            <span className="text-[color:var(--brand-lime)]">
              Resolvemos em Franca.
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">
              Mais rápidos da cidade.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-5 max-w-2xl text-base text-white/70"
          >
            Baratas, cupins, ratos. Casas, condomínios, sítios. Laudo ANVISA e
            garantia em todo serviço.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={whatsappHref(
                "Olá, Sentinela! Preciso agora — tem escorpião/barata/cupim em casa em Franca SP.",
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[56px] w-full min-w-[280px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-10 py-4 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy-heading)] shadow-[0_0_30px_rgba(132,255,0,0.5)] animate-pulse sm:w-auto"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Preciso agora — chamar WhatsApp
            </motion.a>
            <a
              href="/agendar"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Agendar serviço
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-black text-[color:var(--brand-lime)]">
                &lt; 1h
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                Resposta
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[color:var(--brand-lime)]">
                11+
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                Anos em Franca
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[color:var(--brand-lime)]">
                Franca
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                SP e região
              </div>
            </div>
          </motion.div>
        </div>
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
