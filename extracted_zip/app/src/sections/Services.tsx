import { useState, useEffect, useRef } from 'react';
import { Shield, Bug, Sprout, Rat, Droplets, Bird, FlaskConical, ArrowUpRight, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: <Bug className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-sentinel-red text-[.58rem] font-bold"><AlertTriangle className="w-3 h-3" /> Urgência máxima</span>,
    name: 'Controle de Escorpiões em Franca SP',
    desc: 'Diagnóstico, eliminação e prevenção do Tityus serrulatus (escorpião-amarelo). Atendimento emergencial em até 2 horas. SP registrou 42.526 casos em 2025 — a crise é real.',
    cta: 'Solicitar agora',
    ctaColor: 'text-sentinel-red',
    iconBg: 'bg-red-100 text-red-500',
    link: 'https://wa.me/5516993747147?text=Preciso%20de%20controle%20de%20escorpiões%20urgente%20em%20Franca%20SP',
    wide: true,
    danger: true,
  },
  {
    icon: <Bug className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[.58rem] font-bold">Alta prioridade</span>,
    name: 'Dedetização — Baratas e Insetos',
    desc: 'Baratas atraem escorpiões. Eliminar a praga-base é prevenir a emergência. Produtos ANVISA, certificado pós-serviço.',
    cta: 'Orçamento',
    ctaColor: 'text-amber-600',
    iconBg: 'bg-amber-100 text-amber-500',
    link: 'https://wa.me/5516993747147?text=Preciso%20de%20dedetização%20para%20baratas%20em%20Franca%20SP',
    wide: false,
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-[.58rem] font-bold">Set–Nov: revoada</span>,
    name: 'Descupinização',
    desc: 'Madeira seca e subterrâneo. Laudo técnico, certificado e garantia. Diagnóstico antes do dano estrutural irreversível.',
    cta: 'Diagnóstico',
    ctaColor: 'text-sentinel-ink-2',
    iconBg: 'bg-orange-100 text-orange-600',
    link: 'https://wa.me/5516993747147?text=Suspeito%20de%20cupim%20na%20madeira%20em%20Franca%20SP',
    wide: false,
  },
  {
    icon: <Rat className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-[.58rem] font-bold">Pico: jun–ago</span>,
    name: 'Desratização',
    desc: 'Iscas monitoradas, vedação e relatório. Ratos buscam abrigo interno no inverno.',
    cta: 'Orçamento',
    ctaColor: 'text-sentinel-ink-2',
    iconBg: 'bg-gray-100 text-gray-500',
    link: 'https://wa.me/5516993747147?text=Preciso%20de%20desratização%20em%20Franca%20SP',
    wide: false,
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sentinel-ice text-sentinel-sage text-[.58rem] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-sentinel-sage animate-pulse-dot" /> Norma MS — 6 meses</span>,
    name: "Higienização de Caixa d'Água",
    desc: 'Limpeza técnica com laudo e certificado conforme Ministério da Saúde. Obrigatório a cada 6 meses.',
    cta: 'Agendar',
    ctaColor: 'text-sentinel-sage',
    iconBg: 'bg-sky-100 text-sky-500',
    link: 'https://wa.me/5516993747147?text=Preciso%20de%20higienização%20de%20caixa%20de%20água%20em%20Franca%20SP',
    wide: false,
    feature: true,
  },
  {
    icon: <Bird className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-[.58rem] font-bold">Regulamentado IBAMA</span>,
    name: 'Pombos e Morcegos',
    desc: 'Manejo ambiental responsável conforme IBAMA IN 141/2006. Condomínios, galpões e empresas.',
    cta: 'Consultar',
    ctaColor: 'text-sentinel-ink-2',
    iconBg: 'bg-violet-100 text-violet-500',
    link: 'https://wa.me/5516993747147?text=Preciso%20de%20controle%20de%20pombos%20em%20Franca%20SP',
    wide: false,
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sentinel-ice text-sentinel-sage text-[.58rem] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-sentinel-sage animate-pulse-dot" /> ANVISA aprovado</span>,
    name: 'Sanitização',
    desc: 'Desinfecção de ambientes para empresas alimentícias, clínicas e condomínios. Laudo técnico incluso.',
    cta: 'Orçamento',
    ctaColor: 'text-sentinel-sage',
    iconBg: 'bg-emerald-100 text-emerald-500',
    link: 'https://wa.me/5516993747147?text=Preciso%20de%20sanitização%20de%20ambiente%20em%20Franca%20SP',
    wide: false,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    tag: <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sentinel-forest text-white text-[.58rem] font-bold">⭐ Mais contratado</span>,
    name: 'Programa Sentinela Preventivo',
    desc: 'Visitas programadas, agenda automática, relatório pós-serviço e prioridade em emergências. Residências, condomínios e empresas.',
    cta: 'Ver planos',
    ctaColor: 'text-sentinel-sage',
    iconBg: 'bg-sentinel-forest text-sentinel-glow',
    link: '#plans',
    wide: false,
    feature: true,
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="services" className="sentinel-section bg-sentinel-stone" aria-labelledby="services-h">
      <div className="sentinel-container">
        <header className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="sentinel-overline">Nossos Serviços</span>
          <h2 id="services-h" className="sentinel-heading-xl text-sentinel-forest mt-3">
            Controle completo em<br />Franca SP e região
          </h2>
          <p className="sentinel-body max-w-[560px] mx-auto mt-3">
            Do diagnóstico ao certificado. Residências, empresas e condomínios atendidos com técnica e documentação profissional.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((svc, i) => (
            <a
              key={i}
              href={svc.link}
              target={svc.link.startsWith('http') ? '_blank' : undefined}
              rel={svc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              data-reveal
              className={`group relative block bg-white rounded-2xl p-6 border border-sentinel-mist hover:border-sentinel-sage/25 hover:shadow-sentinel-md transition-all duration-300 hover:-translate-y-1 ${
                svc.wide ? 'md:col-span-2' : ''
              } ${svc.danger ? 'border-red-200 hover:border-red-300 hover:shadow-red-100' : ''} ${
                svc.feature ? 'border-sentinel-sage/20' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {svc.danger && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/30 to-transparent pointer-events-none" />
              )}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${svc.iconBg}`}>
                  {svc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-2">{svc.tag}</div>
                  <h3 className="font-display text-[1.15rem] font-bold text-sentinel-ink mb-2 leading-tight">
                    {svc.name}
                  </h3>
                  <p className="text-[.82rem] text-sentinel-ink-4 leading-[1.65] mb-4">{svc.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${svc.ctaColor} group-hover:underline`}>
                      {svc.cta} →
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${svc.ctaColor} opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all`} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
