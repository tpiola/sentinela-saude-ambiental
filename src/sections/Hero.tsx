import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIdx, setTextIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const rotatingWords = ['Sua Casa.', 'Sua Empresa.', 'Sua Escola.', 'Seu Sítio.'];

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#002D62]"
      aria-labelledby="hero-h1"
    >
      {/* Cinematic Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src="/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-casa-protegida.jpg"
      />

      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/70 to-[#002D62]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-transparent to-transparent" />
      {/* Mint health accent glow */}
      <div className="absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-[#E6FFFA]/5 blur-[120px]" />

      {/* Content */}
      <div className="sentinel-container relative z-10 flex min-h-[100svh] items-center pt-28 pb-20">
        <div className={`max-w-[760px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Authority badge */}
          <div
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#E6FFFA]/20 bg-[#E6FFFA]/10 px-5 py-2.5 backdrop-blur-sm"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="h-2 w-2 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-[#E6FFFA]" />
            <span className="text-[.68rem] font-black uppercase tracking-[.2em] text-[#E6FFFA]">
              11 Anos de Autoridade · Franca/SP
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-h1"
            className="font-display text-[clamp(3rem,7vw,6.8rem)] font-black leading-[.94] tracking-[-0.02em] text-white"
          >
            Sua Paz de Volta.
            <br />
            <span className="text-[#E6FFFA]">Sua Saúde</span>
            <br />
            Protegida.
          </h1>

          {/* Rotating context */}
          <div className="mt-5 flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-[#E6FFFA]/50" />
            <span
              key={textIdx}
              className="text-[1.1rem] font-semibold text-[#E6FFFA]/90 animate-[slide-up_.5s_cubic-bezier(.22,1,.36,1)_both]"
            >
              {rotatingWords[textIdx]}
            </span>
          </div>

          {/* Subheadline */}
          <p className="mt-7 max-w-[620px] text-[1.05rem] leading-[1.85] text-white/70 md:text-[1.15rem]">
            11 anos de autoridade máxima em Franca. Atendimento imediato com os insumos mais seguros do mundo —
            inodoros e com <strong className="font-semibold text-white/90">segurança absoluta para crianças e pets.</strong>
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={createWhatsAppUrl('🚨 SOS! Preciso de atendimento URGENTE da Sentinela Saúde Ambiental em Franca SP.')}
              target="_blank"
              rel="noopener noreferrer"
              className="sos-button group relative inline-flex min-h-14 items-center overflow-hidden rounded-full px-9 text-sm font-black uppercase tracking-[.1em]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_100%] animate-[band-shimmer_3s_linear_infinite]" />
              <span className="absolute inset-0 rounded-full ring-2 ring-[#F5C842]/40" />
              <span className="relative flex items-center gap-2 text-[#002D62]">
                <span>🚨</span> SOS Sentinela — Urgente
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex min-h-14 items-center rounded-full border border-white/20 bg-white/5 px-9 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              Ver Serviços de Elite
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-14 grid max-w-[680px] grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { num: '11+', label: 'Anos de Experiência' },
              { num: '100%', label: 'Insumos Certificados' },
              { num: '24h', label: 'Atendimento Franca/SP' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-[1.8rem] font-black leading-none text-[#E6FFFA]">{num}</div>
                <div className="mt-1.5 text-[.7rem] font-semibold uppercase tracking-[.12em] text-white/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[.6rem] uppercase tracking-[.2em] text-white">Rolar</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
