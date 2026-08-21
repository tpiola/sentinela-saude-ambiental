"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappHref } from "@/lib/brand";

export function EmpresaVideoBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      aria-label="Atendimento para empresas"
      className="relative overflow-hidden bg-[color:var(--brand-navy)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/sentinela/drive/poster-empresarial-franca-sp.webp"
          aria-hidden
        >
          <source src="/media/sentinela/drive/servico-profissional-franca-sp.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand-navy)]/60 via-transparent to-[color:var(--brand-navy)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center md:py-24">
        <span className="border border-[color:var(--brand-lime)]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-lime)]">
          Atendemos empresas, condomínios e indústrias
        </span>
        <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
          Sua operação não pode parar por causa de pragas
        </h2>
        <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          Protocolo preventivo com inspeção, aplicação registrada na ANVISA e
          certificado/laudo técnico conforme o escopo contratado — para síndicos,
          gestores de restaurantes, clínicas e indústrias.
        </p>
        <a
          href={whatsappHref("Olá! Preciso de um plano preventivo de controle de pragas para minha empresa. Pode me ajudar?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-[color:var(--brand-lime)] px-7 font-bold text-[color:var(--brand-navy)] transition hover:brightness-110"
        >
          Solicitar plano para empresa
        </a>
      </div>
    </section>
  );
}
