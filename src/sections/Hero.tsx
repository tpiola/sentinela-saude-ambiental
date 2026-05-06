import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Fade in on mount — single RAF, no loop
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Parallax on scroll — passive listener, no setState in RAF loop
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (content) {
          content.style.transform = `translateY(${y * 0.28}px)`;
          content.style.opacity = String(Math.max(0, 1 - y / 520));
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative h-[100svh] min-h-[620px] overflow-hidden"
      aria-labelledby="hero-h1"
    >
      {/* ── VIDEO ── fully visible, minimal tint only at edges */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-casa-protegida.jpg"
        aria-hidden="true"
      />

      {/* Thin vignette only — video still clearly visible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,29,62,.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#002D62] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#002D62]/60 to-transparent" />

      {/* ── CONTENT with parallax ── */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-10 flex items-center will-change-transform"
      >
        <div className="sentinel-container w-full">
          <div
            className={`max-w-[680px] transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Authority pill */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/20 px-5 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E6FFFA] animate-pulse" />
              <span className="text-[.65rem] font-black uppercase tracking-[.22em] text-[#E6FFFA]">
                11 Anos · Franca/SP · Insumos Premium
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-h1"
              className="font-display text-[clamp(2.8rem,6.5vw,6rem)] font-black leading-[.95] tracking-[-0.025em] text-white"
            >
              Sua Paz
              <br />
              <span className="text-[#E6FFFA]">de Volta.</span>
            </h1>

            {/* Sub */}
            <p
              className="mt-5 max-w-[500px] text-[1.05rem] leading-[1.75] text-white/75"
              style={{ transitionDelay: '200ms' }}
            >
              Controle de pragas com os insumos mais seguros do mundo —
              <strong className="font-semibold text-white"> inodoros e sem risco para pets e crianças.</strong>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Gold SOS */}
              <a
                href={createWhatsAppUrl('🚨 URGENTE! Preciso de atendimento IMEDIATO da Sentinela Saúde Ambiental em Franca SP.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-[52px] items-center overflow-hidden rounded-full px-8 text-sm font-black uppercase tracking-[.1em] shadow-lg"
                aria-label="SOS Sentinela - Atendimento urgente"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8900A] via-[#F5C842] to-[#C8900A] bg-[length:200%] animate-[band-shimmer_2.8s_linear_infinite]" />
                <span className="relative z-10 flex items-center gap-2 text-[#001A3D]">
                  🚨 SOS Sentinela
                </span>
              </a>

              {/* Ghost */}
              <a
                href="#services"
                className="inline-flex min-h-[52px] items-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Ver Serviços
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7">
              {[
                ['11+', 'anos de experiência'],
                ['100%', 'insumos certificados'],
                ['24h', 'atendimento Franca/SP'],
              ].map(([n, l]) => (
                <div key={l}>
                  <span className="block text-[1.6rem] font-black leading-none text-[#E6FFFA]">{n}</span>
                  <span className="text-[.65rem] font-semibold uppercase tracking-[.12em] text-white/45">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[.58rem] uppercase tracking-[.22em] text-white/70">rolar</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
