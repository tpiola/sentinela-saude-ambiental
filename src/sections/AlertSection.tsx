import { useEffect, useRef, useState } from 'react';

const ITEMS = [
  { icon: '🛡️', label: 'ANVISA Certificado' },
  { icon: '⚡', label: 'Atendimento Imediato' },
  { icon: '🐾', label: 'Seguro para Pets' },
  { icon: '🧪', label: 'Insumos Premium' },
  { icon: '📋', label: 'Selo com Validade' },
  { icon: '🏆', label: '11 Anos em Franca' },
];

export default function AlertSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-white/[0.06] bg-[#001A3D]" aria-label="Credenciais Sentinela">
      <div
        className={`sentinel-container flex flex-wrap items-center justify-between gap-4 py-4 transition-all duration-600 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <span className="hidden text-[.6rem] font-black uppercase tracking-[.2em] text-[#E6FFFA]/40 sm:block">
          Padrão Sentinela
        </span>
        <div className="flex flex-wrap gap-2">
          {ITEMS.map(({ icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[.6rem] font-bold uppercase tracking-[.1em] text-white/50"
            >
              <span aria-hidden="true">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
