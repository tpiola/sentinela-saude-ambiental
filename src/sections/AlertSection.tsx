import { useState, useEffect, useRef } from 'react';

const trustItems = [
  { icon: '🛡️', label: 'Insumos Certificados ANVISA' },
  { icon: '🧪', label: 'Referência CRQ' },
  { icon: '⚡', label: 'Resposta Imediata' },
  { icon: '🐾', label: 'Seguro para Pets & Crianças' },
  { icon: '📋', label: 'Selo com Validade Real' },
  { icon: '🏆', label: '11 Anos de Autoridade' },
];

export default function AlertSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[#E6FFFA]/10 bg-[#002D62]"
      aria-labelledby="alert-h"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001228]/50 via-transparent to-[#001228]/50" />

      <div
        className={`sentinel-container relative flex flex-col gap-5 py-5 transition-all duration-700 md:flex-row md:items-center md:justify-between ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 id="alert-h" className="text-[.72rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/70">
          Padrão Sentinela de Qualidade
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {trustItems.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E6FFFA]/10 bg-[#E6FFFA]/5 px-3.5 py-1.5 text-[.62rem] font-bold uppercase tracking-[.1em] text-[#E6FFFA]/60"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
