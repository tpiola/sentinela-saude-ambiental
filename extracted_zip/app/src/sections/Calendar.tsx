import { useRef, useState, useEffect } from 'react';

const months = [
  { name: 'Janeiro', pests: [
    { label: '🦂 Escorpião CRÍTICO', level: 'critical' },
    { label: '🪳 Baratas alto', level: 'warn' },
    { label: '🦟 Mosquitos', level: 'normal' },
  ]},
  { name: 'Fevereiro', pests: [
    { label: '🦂 Escorpião CRÍTICO', level: 'critical' },
    { label: '🪳 Baratas alto', level: 'warn' },
  ]},
  { name: 'Março', pests: [
    { label: '🦂 Escorpião alto', level: 'warn' },
    { label: '🐜 Formigas', level: 'normal' },
  ]},
  { name: 'Abril', pests: [
    { label: '🪵 Cupim médio', level: 'normal' },
    { label: '🕊️ Pombos', level: 'normal' },
  ]},
  { name: 'Maio', pests: [
    { label: '🪵 Cupim CRÍTICO', level: 'critical' },
    { label: '🐀 Roedores', level: 'normal' },
  ]},
  { name: 'Junho', pests: [
    { label: '🐀 Roedores alto', level: 'warn' },
    { label: '🕊️ Pombos', level: 'normal' },
  ]},
  { name: 'Julho', pests: [
    { label: '🐀 Roedores alto', level: 'warn' },
    { label: '💧 Caixa d\'água', level: 'safe' },
  ]},
  { name: 'Agosto', pests: [
    { label: '🕊️ Pombos médio', level: 'normal' },
    { label: '💧 Reservatório', level: 'safe' },
  ]},
  { name: 'Setembro', pests: [
    { label: '🦂 Início escorpião', level: 'warn' },
    { label: '🪵 Cupim médio', level: 'normal' },
  ]},
  { name: 'Outubro', pests: [
    { label: '🦂 Escorpião alto', level: 'warn' },
    { label: '🪳 Baratas alto', level: 'warn' },
  ]},
  { name: 'Novembro', pests: [
    { label: '🦂 Escorpião CRÍTICO', level: 'critical' },
    { label: '🦟 Mosquitos', level: 'normal' },
  ]},
  { name: 'Dezembro', pests: [
    { label: '🦂 Escorpião CRÍTICO', level: 'critical' },
    { label: '🪳 Baratas alto', level: 'warn' },
  ]},
];

const levelStyles = {
  critical: 'text-sentinel-red font-bold bg-sentinel-red-bg',
  warn: 'text-sentinel-amber font-semibold bg-sentinel-amber-bg',
  normal: 'text-sentinel-ink-3',
  safe: 'text-sentinel-sage font-semibold',
};

const cardBorderStyles = {
  critical: 'border-l-4 border-l-sentinel-red',
  warn: 'border-l-4 border-l-sentinel-amber',
  normal: '',
  safe: 'border-l-4 border-l-sentinel-sage',
};

const monthCardStyle = (month: typeof months[0]) => {
  const hasCritical = month.pests.some(p => p.level === 'critical');
  const hasWarn = month.pests.some(p => p.level === 'warn');
  if (hasCritical) return cardBorderStyles.critical;
  if (hasWarn) return cardBorderStyles.warn;
  return cardBorderStyles.safe;
};

export default function Calendar() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="sentinel-section bg-sentinel-forest" aria-labelledby="cal-h">
      <div className="sentinel-container">
        <header className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="sentinel-overline text-sentinel-glow">Sazonalidade de Pragas em Franca SP</span>
          <h2 id="cal-h" className="font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05] tracking-[-.02em] text-white mt-3">
            O que monitorar<br />em cada mês
          </h2>
          <p className="text-white/60 mt-3">Proteja-se antes do pico — não depois.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {months.map((month, i) => (
            <div
              key={i}
              className={`bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.08] transition-all duration-300 ${monthCardStyle(month)} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="text-[.72rem] font-bold text-white/40 uppercase tracking-wider mb-2">{month.name}</div>
              <div className="flex flex-col gap-1.5">
                {month.pests.map((pest, j) => (
                  <span key={j} className={`text-[.7rem] leading-[1.4] px-2 py-1 rounded ${levelStyles[pest.level as keyof typeof levelStyles]}`}>
                    {pest.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
