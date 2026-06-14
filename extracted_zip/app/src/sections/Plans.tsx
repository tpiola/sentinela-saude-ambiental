import { useRef, useState, useEffect } from 'react';
import { Home, Building2, Warehouse, Factory, Check, Star } from 'lucide-react';

const plans = [
  {
    icon: <Home className="w-6 h-6" />,
    name: 'Residencial',
    sub: 'Para casas e apartamentos',
    price: 'Sob consulta',
    priceSub: 'por visita preventiva',
    features: [
      'Visitas preventivas trimestrais',
      'Lembrete automático 7 dias antes',
      'Checklist pós-visita incluso',
      'Prioridade em urgências',
      "Caixa d'água no ciclo de 6 meses",
    ],
    link: 'https://wa.me/5516993747147?text=Quero%20o%20Plano%20Residencial%20Sentinela',
    featured: false,
  },
  {
    icon: <Warehouse className="w-6 h-6" />,
    name: 'Condomínio',
    sub: 'Áreas comuns + unidades',
    price: 'Sob consulta',
    priceSub: 'plano anual',
    features: [
      'Cronograma de áreas comuns',
      'Relatório para assembleia',
      "Gestão caixa d'água do prédio",
      'Certificado por visita',
      'Atendimento emergencial prioritário',
      'Desconto no contrato anual',
    ],
    link: 'https://wa.me/5516993747147?text=Quero%20o%20Plano%20Condomínio%20Sentinela',
    featured: true,
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    name: 'Comércio Alimentício',
    sub: 'Restaurantes, padarias, mercados',
    price: 'Sob consulta',
    priceSub: 'contrato mensal',
    features: [
      'Monitoramento preventivo mensal',
      'Documentação para Vigilância Sanit.',
      'Agenda para auditorias',
      'Conformidade RDC 216/ANVISA',
    ],
    link: 'https://wa.me/5516993747147?text=Quero%20o%20Plano%20Comercial%20Sentinela',
    featured: false,
  },
  {
    icon: <Factory className="w-6 h-6" />,
    name: 'Empresarial',
    sub: 'Empresas, clínicas, escolas',
    price: 'Sob consulta',
    priceSub: 'plano customizado',
    features: [
      'Plano customizado por unidade',
      'Relatório gerencial mensal',
      'NF e documentação completa',
      'Conformidade ANVISA / IBAMA',
    ],
    link: 'https://wa.me/5516993747147?text=Quero%20o%20Plano%20Empresarial%20Sentinela',
    featured: false,
  },
];

export default function Plans() {
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
    <section ref={ref} id="plans" className="sentinel-section bg-white" aria-labelledby="plans-h">
      <div className="sentinel-container">
        <header className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="sentinel-overline">Programa Sentinela</span>
          <h2 id="plans-h" className="sentinel-heading-xl text-sentinel-forest mt-3">
            Proteção contínua,<br />não emergencial
          </h2>
          <p className="sentinel-body max-w-[560px] mx-auto mt-3">
            Planos com visitas programadas, lembretes automáticos e relatório em cada serviço. Mais inteligente que esperar o problema aparecer.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-500 hover:-translate-y-1 ${
                plan.featured
                  ? 'border-sentinel-sage shadow-sentinel-lg'
                  : 'border-sentinel-mist hover:border-sentinel-sage/20 hover:shadow-sentinel-md'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sentinel-forest text-white text-[.62rem] font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Mais contratado
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                plan.featured ? 'bg-sentinel-forest text-sentinel-glow' : 'bg-sentinel-stone text-sentinel-sage'
              }`}>
                {plan.icon}
              </div>
              <h3 className="font-display text-[1.1rem] font-bold text-sentinel-ink">{plan.name}</h3>
              <p className="text-[.75rem] text-sentinel-ink-4 mb-3">{plan.sub}</p>
              <div className="font-display text-[1.3rem] font-bold text-sentinel-forest mb-1">{plan.price}</div>
              <div className="text-[.68rem] text-sentinel-ink-4 mb-5">{plan.priceSub}</div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-[.83rem] text-sentinel-ink-3">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? 'text-sentinel-sage' : 'text-sentinel-ink-4'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-3 rounded-full text-sm font-bold transition-all ${
                  plan.featured
                    ? 'bg-sentinel-sage text-white hover:bg-sentinel-forest-2 shadow-sentinel-sm hover:shadow-sentinel-md'
                    : 'border-2 border-sentinel-forest text-sentinel-forest hover:bg-sentinel-forest hover:text-white'
                }`}
              >
                {plan.featured ? 'Solicitar proposta' : 'Solicitar proposta'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
