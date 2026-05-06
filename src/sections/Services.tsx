import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';
import { Shield, Zap, Leaf, Award, Building2 } from 'lucide-react';

const eliteServices = [
  {
    id: 'cuidado',
    tag: 'Residências',
    headline: 'O Cuidado',
    title: 'Não é dedetização. É gestão de biossegurança.',
    body: 'São 11 anos selecionando o que há de melhor no mercado global para dentro da sua casa. Insumos premium, inodoros, sem mancha e com validade real rastreada. Sua família, seus pets e seus filhos protegidos.',
    icon: Leaf,
    detail: 'Escorpiões · Baratas · Formigas · Cupins · Roedores · Reservatórios',
    whatsapp: 'Quero atendimento residencial premium da Sentinela Saúde Ambiental em Franca SP',
    badge: 'Seguro para Pets & Crianças',
    accentColor: '#E6FFFA',
    urgent: false,
  },
  {
    id: 'urgencia',
    tag: 'Atendimento Imediato',
    headline: 'A Urgência',
    title: 'Sabemos que você tem pressa.',
    body: 'Nosso time de elite está pronto para agir agora. Protocolo de resposta rápida para situações críticas — escorpiões, ratos, baratas, cupins. Franca/SP e região, com deslocamento ágil e equipe uniformizada.',
    icon: Zap,
    detail: 'Emergência rápida · Deslocamento ágil · Técnicos certificados',
    whatsapp: '🚨 URGENTE! Preciso de atendimento imediato da Sentinela Saúde Ambiental em Franca SP',
    badge: 'Resposta Imediata',
    accentColor: '#F5C842',
    urgent: true,
  },
  {
    id: 'elite',
    tag: 'Escolas · Sítios · Condomínios',
    headline: 'Serviços de Elite',
    title: 'Proteção para quem não aceita riscos.',
    body: 'Escolas infantis, sítios e condomínios exigem um padrão diferente. Nossa equipe cria uma barreira molecular invisível que impede a entrada de doenças e pragas antes mesmo delas surgirem. Documentação completa para sua gestão.',
    icon: Building2,
    detail: 'Escolas · Sítios · Chácaras · Condomínios · Clínicas · Escritórios',
    whatsapp: 'Quero atendimento elite para empresa/condomínio da Sentinela Saúde Ambiental em Franca SP',
    badge: 'Nível Corporativo',
    accentColor: '#E6FFFA',
    urgent: false,
  },
  {
    id: 'protocolo',
    tag: 'Escudo Sentinela',
    headline: 'Protocolo de Prevenção',
    title: 'Uma barreira molecular invisível.',
    body: 'Criamos um escudo preventivo ao redor do seu ambiente. Ideal para quem não aceita risco: nossa tecnologia de barreira molecular impede a entrada de pragas antes delas surgirem. Renovação com data e validade real registradas.',
    icon: Shield,
    detail: 'Renovação programada · Lacre com validade · Relatório técnico',
    whatsapp: 'Quero o Protocolo de Prevenção Escudo Sentinela para meu imóvel em Franca SP',
    badge: 'Prevenção Total',
    accentColor: '#E6FFFA',
    urgent: false,
  },
];

type ServiceType = typeof eliteServices[0];

function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      id={service.id}
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-9 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.1] hover:border-white/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${service.urgent ? 'ring-1 ring-[#F5C842]/30' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Accent glow */}
      <div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[60px] opacity-20 transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: service.accentColor }}
      />

      {/* Tag + Badge */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <span
          className="text-[.62rem] font-black uppercase tracking-[.2em]"
          style={{ color: service.accentColor }}
        >
          {service.tag}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[.6rem] font-bold uppercase tracking-[.12em] text-white/60">
          {service.badge}
        </span>
      </div>

      {/* Icon */}
      <Icon
        className="h-9 w-9 stroke-[1.5] transition-transform duration-500 group-hover:scale-110"
        style={{ color: service.accentColor }}
        aria-hidden="true"
      />

      {/* Overline */}
      <p className="mt-6 text-[.68rem] font-black uppercase tracking-[.18em] text-white/40">
        {service.headline}
      </p>

      {/* Title */}
      <h3 className="mt-2 font-display text-[1.6rem] font-bold leading-[1.12] text-white">
        {service.title}
      </h3>

      {/* Body */}
      <p className="mt-5 text-[.93rem] leading-[1.82] text-white/65">{service.body}</p>

      {/* Detail */}
      <p className="mt-6 border-t border-white/10 pt-5 text-[.78rem] leading-[1.6] text-white/40">
        {service.detail}
      </p>

      {/* CTA */}
      <a
        href={createWhatsAppUrl(service.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex min-h-11 items-center rounded-full px-6 text-xs font-black uppercase tracking-[.1em] transition-all duration-300 ${
          service.urgent
            ? 'bg-gradient-to-r from-[#D4A017] to-[#F5C842] text-[#002D62] hover:shadow-[0_0_24px_rgba(245,200,66,.4)]'
            : 'bg-[#E6FFFA]/10 text-[#E6FFFA] hover:bg-[#E6FFFA]/20'
        }`}
      >
        {service.urgent ? '🚨 Acionar Agora' : 'Solicitar Avaliação →'}
      </a>
    </div>
  );
}

export default function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={headerRef}
      id="services"
      className="sentinel-section bg-[#002D62]"
      aria-labelledby="services-h"
    >
      <div className="sentinel-container">
        {/* Section Header */}
        <div
          className={`mb-16 max-w-[760px] transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[.68rem] font-black uppercase tracking-[.22em] text-[#E6FFFA]/70">
            Excelência em Cada Atendimento
          </span>
          <h2 id="services-h" className="sentinel-heading-xl mt-3 text-white">
            Serviços de Elite para cada tipo de ambiente.
          </h2>
          <p className="mt-5 max-w-[600px] text-[1rem] leading-[1.8] text-white/60">
            Cada serviço é selado com a data da aplicação e a validade real do insumo.
            Transparência total para sua próxima renovação preventiva.
          </p>
        </div>

        {/* Sentinela Seal Banner */}
        <div
          className={`mb-12 flex items-center gap-5 rounded-2xl border border-[#E6FFFA]/15 bg-[#E6FFFA]/5 p-6 backdrop-blur-sm transition-all duration-700 delay-200 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Award className="h-8 w-8 shrink-0 text-[#E6FFFA]" aria-hidden="true" />
          <div>
            <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#E6FFFA]">
              O Selo Sentinela
            </p>
            <p className="mt-1 text-sm text-white/60">
              Cada serviço é lacrado com data de aplicação + validade real do insumo. Você sabe exatamente quando renovar.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {eliteServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
