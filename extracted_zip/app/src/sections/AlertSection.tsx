import { useState, useEffect, useRef } from 'react';
import { Activity, Lightbulb, Shield } from 'lucide-react';

export default function AlertSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: 'linear-gradient(135deg, #7f1212 0%, #991b1b 50%, #7f1212 100%)', backgroundSize: '300% 100%' }}
      aria-labelledby="alert-h"
    >
      <div className="absolute inset-0 animate-band-shimmer" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 80% at 30% 50%, rgba(255,255,255,.06) 0%, transparent 55%)' }}
      />

      <div className="sentinel-container relative grid lg:grid-cols-[1fr_auto] gap-14 items-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-7'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[.68rem] font-bold tracking-[.1em] uppercase text-red-200 mb-4">
            <Activity className="w-3.5 h-3.5" />
            Alerta SP 2025 · SES-SP / SINAN / UNESP
          </div>
          <h2 id="alert-h" className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-.02em] text-white mb-4">
            Franca está em área de<br />crescimento de escorpiões
          </h2>
          <p className="text-[.95rem] text-white/75 leading-[1.75] max-w-[540px] mb-5">
            O Estado de São Paulo registrou <strong className="text-white">42.526 ocorrências</strong> por
            escorpiões em 2025. Um estudo com dados do SINAN identificou a macrorregião de
            Franca como área de crescimento de acidentes entre 2023 e 2025,
            usando modelos preditivos ARIMA/SARIMA (UNESP, 2025).
          </p>
          <div className="flex items-start gap-3.5 bg-white/[0.08] border border-white/[0.12] rounded-xl px-5 py-4">
            <Lightbulb className="w-6 h-6 text-sentinel-glow shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white text-sm mb-1">O escorpião come barata.</strong>
              <span className="text-white/65 text-[.83rem] leading-[1.6]">
                Onde há infestação de baratas, há risco real de escorpiões.
                Eliminar baratas profissionalmente é o principal ato preventivo
                contra o escorpião-amarelo em Franca SP.
              </span>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-2.5 min-w-[240px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-7'}`}>
          {[
            { n: '42.5k', l: 'Casos em SP\nem 2025' },
            { n: 'Out–Mar', l: 'Período\ncrítico' },
            { n: '20×', l: 'Filhotes por\nninhada' },
            { n: 'Franca', l: 'Área de risco\nSINAN/UNESP' },
          ].map((stat, i) => (
            <div key={i} className="bg-black/25 border border-white/10 rounded-xl p-4 text-center">
              <div className="font-display text-[1.6rem] font-black text-white leading-none mb-1">{stat.n}</div>
              <div className="text-[.66rem] text-white/55 tracking-[.04em] leading-[1.4] whitespace-pre-line">{stat.l}</div>
            </div>
          ))}
          <div className="col-span-2">
            <a
              href="https://wa.me/5516993747147?text=Quero%20proteção%20preventiva%20contra%20escorpiões%20em%20Franca%20SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full font-bold bg-sentinel-amber text-white hover:bg-sentinel-amber-2 transition-all"
            >
              <Shield className="w-4 h-4" />
              Quero Proteção Preventiva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
