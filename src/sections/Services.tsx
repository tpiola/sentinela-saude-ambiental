import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';
import { Shield, Zap, Leaf, Building2, Award } from 'lucide-react';

const CARDS = [
  {
    id: 'cuidado',
    tag: 'Residências',
    overline: 'O Cuidado',
    title: 'Paz que você sente ao entrar em casa.',
    body: '11 anos selecionando os melhores insumos do mundo. Inodoros. Sem mancha. Seguros para pets e crianças.',
    detail: 'Escorpiões · Baratas · Cupins · Formigas · Roedores · Reservatórios',
    wpp: 'Quero atendimento residencial premium da Sentinela Saúde Ambiental em Franca SP',
    icon: Leaf,
    accent: '#E6FFFA',
    urgent: false,
  },
  {
    id: 'urgencia',
    tag: 'Atendimento Imediato',
    overline: 'A Urgência',
    title: 'Sua equipe de elite está pronta. Agora.',
    body: 'Escorpião? Infestação? Ligou, a gente vai. Técnico uniformizado, discreto, rápido. Franca/SP e região.',
    detail: 'Resposta ágil · Equipe certificada · Deslocamento imediato',
    wpp: '🚨 URGENTE! Preciso de atendimento IMEDIATO da Sentinela Saúde Ambiental em Franca SP',
    icon: Zap,
    accent: '#F5C842',
    urgent: true,
  },
  {
    id: 'elite',
    tag: 'Escolas · Sítios · Condomínios',
    overline: 'Serviços de Elite',
    title: 'Onde há crianças, o padrão é máximo.',
    body: 'Ambientes de alto tráfego exigem protocolo diferenciado. Documentação completa. Barreira molecular invisível.',
    detail: 'Escolas · Sítios · Chácaras · Condomínios · Clínicas',
    wpp: 'Quero atendimento elite para meu ambiente da Sentinela em Franca SP',
    icon: Building2,
    accent: '#E6FFFA',
    urgent: false,
  },
  {
    id: 'protocolo',
    tag: 'Escudo Sentinela',
    overline: 'Protocolo de Prevenção',
    title: 'Impedir antes de combater.',
    body: 'Nossa barreira molecular cria um escudo ao redor do seu imóvel. Renovação com data e validade registradas no Selo Sentinela.',
    detail: 'Renovação programada · Lacre com validade · Relatório técnico',
    wpp: 'Quero o Protocolo de Prevenção Escudo Sentinela em Franca SP',
    icon: Shield,
    accent: '#E6FFFA',
    urgent: false,
  },
] as const;

type Card = (typeof CARDS)[number];

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ServiceCard({ card, index }: { card: Card; index: number }) {
  const { ref, visible } = useReveal();
  const Icon = card.icon;

  return (
    <div
      ref={ref}
      id={card.id}
      className={`group relative overflow-hidden rounded-[28px] border p-8 transition-all duration-700 ${
        card.urgent
          ? 'border-[#F5C842]/30 bg-[#F5C842]/5 ring-1 ring-[#F5C842]/20'
          : 'border-white/10 bg-white/[0.055] hover:bg-white/[0.09] hover:border-white/20'
      } backdrop-blur-md ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Glow orb */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-[56px] opacity-[.18] group-hover:opacity-[.28] transition-opacity duration-500"
        style={{ background: card.accent }}
      />

      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[.58rem] font-black uppercase tracking-[.2em]" style={{ color: card.accent }}>
          {card.tag}
        </span>
        {card.urgent && (
          <span className="animate-pulse rounded-full bg-[#F5C842]/20 px-3 py-1 text-[.58rem] font-black uppercase tracking-[.1em] text-[#F5C842]">
            Imediato
          </span>
        )}
      </div>

      <Icon className="h-8 w-8 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" style={{ color: card.accent }} aria-hidden />

      <p className="mt-5 text-[.62rem] font-black uppercase tracking-[.18em] text-white/35">{card.overline}</p>
      <h3 className="mt-1.5 font-display text-[1.45rem] font-bold leading-[1.15] text-white">{card.title}</h3>
      <p className="mt-4 text-[.9rem] leading-[1.8] text-white/60">{card.body}</p>
      <p className="mt-5 border-t border-white/10 pt-4 text-[.72rem] text-white/35">{card.detail}</p>

      <a
        href={createWhatsAppUrl(card.wpp)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 inline-flex min-h-10 items-center rounded-full px-5 text-xs font-black uppercase tracking-[.1em] transition-all duration-300 ${
          card.urgent
            ? 'bg-gradient-to-r from-[#C8900A] to-[#F5C842] text-[#001A3D] hover:shadow-[0_0_20px_rgba(245,200,66,.5)]'
            : 'bg-[#E6FFFA]/8 text-[#E6FFFA] hover:bg-[#E6FFFA]/16'
        }`}
      >
        {card.urgent ? '🚨 Acionar Agora' : 'Solicitar Avaliação →'}
      </a>
    </div>
  );
}

export default function Services() {
  const { ref: headerRef, visible: headerVisible } = useReveal();

  return (
    <section id="services" className="sentinel-section bg-[#002D62]" aria-labelledby="services-h">
      <div className="sentinel-container">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 max-w-[680px] transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-[.65rem] font-black uppercase tracking-[.22em] text-[#E6FFFA]/60">
            Excelência em cada atendimento
          </span>
          <h2 id="services-h" className="sentinel-heading-xl mt-3 text-white">
            Serviços de Elite.
          </h2>
          <p className="mt-4 max-w-[560px] text-[.95rem] leading-[1.8] text-white/55">
            Do imediato ao preventivo. Cada serviço é lacrado com o{' '}
            <span className="text-[#E6FFFA] font-semibold">Selo Sentinela</span>: data de aplicação + validade real do insumo.
          </p>
        </div>

        {/* Seal banner */}
        <div
          className={`mb-10 flex items-center gap-4 rounded-2xl border border-[#E6FFFA]/12 bg-[#E6FFFA]/[0.04] p-5 transition-all duration-700 delay-150 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Award className="h-7 w-7 shrink-0 text-[#E6FFFA]/80" aria-hidden />
          <div>
            <p className="text-[.68rem] font-black uppercase tracking-[.16em] text-[#E6FFFA]/80">O Selo Sentinela</p>
            <p className="mt-0.5 text-sm text-white/50">Você sabe exatamente a data e quando renovar. Transparência total.</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {CARDS.map((c, i) => (
            <ServiceCard key={c.id} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
