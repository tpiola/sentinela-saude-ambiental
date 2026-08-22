"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { whatsappHref } from "@/lib/brand";

const VIDEO = "/media/sentinela/drive/servico-profissional-franca-sp-limpo.mp4";
const POSTER = "/media/sentinela/facebook/images/poster-hero.jpg";

// Headline dividida por palavra (revelação cinética)
const HEADLINE = [
  "Escorpião,",
  "barata",
  "ou",
  "cupim",
  "em",
  "Franca?",
];
const SUB = "A Sentinela resolve hoje.";

export function ScrollCraftHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [laudo, setLaudo] = useState(false);

  // Progresso do scroll ao longo do ato pinado (0 → 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Playhead lerpado: scroll escreve um TARGET, rAF caminha até ele
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let current = 0;
    const onProgress = (p: number) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;
      const target = p * video.duration;
      const step = () => {
        current += (target - current) * 0.12;
        if (Math.abs(target - current) < 0.01) current = target;
        video.currentTime = current;
        if (current < target - 0.01) raf = requestAnimationFrame(step);
      };
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(step);
      setLaudo(p > 0.82);
    };
    const unsub = scrollYProgress.on("change", onProgress);
    return () => {
      unsub();
      cancelAnimationFrame(raf);
    };
  }, [scrollYProgress, reduce]);

  // Opacidade do headline que esvanece conforme o scroll avança
  const copyOpacity = useTransform(scrollYProgress, [0, 0.45, 0.75], [1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[320vh]"
      aria-label="Dedetização em Franca SP"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-[#04070d]">
        {/* Vídeo scrub */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO}
          poster={POSTER}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          onLoadedMetadata={() => setReady(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070d]/80 via-[#04070d]/40 to-[#04070d]/95" />

        {/* Headline kinetic + CTA */}
        <motion.div
          style={{ opacity: copyOpacity }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--brand-lime)]">
            Dedetizadora em Franca SP · 11+ anos
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
            {HEADLINE.map((word, i) => (
              <motion.span
                key={i}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-3 text-xl font-bold text-[color:var(--brand-lime)]"
          >
            {SUB}
          </motion.p>

          <motion.a
            href={whatsappHref("Olá, preciso de um orçamento de dedetização urgente.")}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 text-base font-bold text-[#04070d] shadow-lg shadow-[color:var(--brand-lime)]/20 transition hover:brightness-110"
          >
            Chamar no WhatsApp
          </motion.a>

          {/* Pista de scroll (movimento-assinatura: inspeção → aplicação → laudo) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-10 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60"
          >
            <span>Role para ver o serviço</span>
            <span className="animate-bounce">↓</span>
          </motion.div>
        </motion.div>

        {/* Revelação do laudo (pico da curva) */}
        <motion.div
          initial={false}
          animate={{ opacity: laudo ? 1 : 0, y: laudo ? 0 : 24 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex items-center gap-3 rounded-xl border border-[color:var(--brand-lime)]/40 bg-[#04070d]/85 px-5 py-3 backdrop-blur">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8fce2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="text-sm font-bold text-white">
              Inspecionamos antes · laudo técnico conforme escopo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
