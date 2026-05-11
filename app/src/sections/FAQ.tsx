import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'O que o escorpião come e por que isso importa para minha casa?',
    a: 'O escorpião-amarelo (Tityus serrulatus), espécie predominante em Franca SP, alimenta-se de baratas, grilos e insetos. Onde há baratas existe risco real de escorpiões. Eliminar baratas profissionalmente é o principal ato preventivo — uma informação que a maioria desconhece.',
  },
  {
    q: 'Qual é o período de escorpião em Franca SP?',
    a: 'Outubro a março, coincidindo com temperaturas altas e chuvas. São Paulo registrou 42.526 ocorrências em 2025 (SES-SP). A região de Franca foi identificada em estudo UNESP/SINAN como área de crescimento. A proteção preventiva deve começar em setembro.',
  },
  {
    q: 'Quanto custa a dedetização em Franca SP?',
    a: 'Residências: R$250 a R$500 conforme tamanho e praga. Empresas e condomínios sob orçamento. A Sentinela oferece diagnóstico gratuito sem compromisso, com resposta em menos de 10 minutos. Planos preventivos anuais têm custo inferior ao de atendimento emergencial.',
  },
  {
    q: 'A dedetização é segura para crianças e animais?',
    a: 'Sim, com produtos ANVISA seguindo a RDC 622/2022. A Sentinela informa o tempo de afastamento para cada produto. Crianças, animais e alimentos permanecem fora durante a aplicação e pelo período técnico indicado.',
  },
  {
    q: 'Com que frequência fazer dedetização preventiva?',
    a: 'Residências em Franca SP: a cada 3 meses, com reforço em setembro. Condomínios e empresas alimentícias: cronograma bimestral ou mensal. Caixa d\'água: a cada 6 meses, conforme Ministério da Saúde.',
  },
  {
    q: 'Quais cidades além de Franca SP são atendidas?',
    a: 'Franca SP e cidades num raio de até 50 km: Batatais, Cristais Paulista, Pedregulho, Restinga, Patrocínio Paulista, Orlândia, São Joaquim da Barra e Ituverava. Consulte disponibilidade para outras cidades.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={ref} id="faq" className="sentinel-section bg-white" aria-labelledby="faq-h" itemScope itemType="https://schema.org/FAQPage">
      <div className="sentinel-container max-w-[900px]">
        <header className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="sentinel-overline">Dúvidas frequentes</span>
          <h2 id="faq-h" className="sentinel-heading-xl text-sentinel-forest mt-3">
            Respostas diretas,<br />sem enrolação
          </h2>
        </header>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-sentinel-mist rounded-2xl overflow-hidden transition-all duration-300 hover:border-sentinel-sage/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-sentinel-ink pr-4" itemProp="name">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  openIndex === i ? 'bg-sentinel-sage border-sentinel-sage text-white' : 'border-sentinel-mist text-sentinel-ink-4'
                }`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[400px]' : 'max-h-0'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-6 pb-5">
                  <p className="text-[.85rem] text-sentinel-ink-3 leading-[1.75]" itemProp="text">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
