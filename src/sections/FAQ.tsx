import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'Como funciona a avaliação inicial?',
    a: 'O cliente informa tipo de local, cidade, praga observada e dados de contato. A partir disso é possível orientar o próximo passo e estimar o serviço necessário.',
  },
  {
    q: 'Quais imóveis podem ser atendidos?',
    a: 'Residências, empresas, condomínios, comércios, reservatórios de água e ambientes que precisam de controle ou rotina preventiva.',
  },
  {
    q: 'O orçamento é sempre igual?',
    a: 'Não. O valor depende do tamanho do local, praga identificada, nível do problema, acesso e necessidade de retorno.',
  },
  {
    q: 'Existe preparo antes da aplicação?',
    a: 'Sim. O preparo muda conforme o serviço e é informado antes da execução para evitar dúvidas no dia do atendimento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={ref} id="faq" className="sentinel-section bg-sentinel-stone" aria-labelledby="faq-h" itemScope itemType="https://schema.org/FAQPage">
      <div className="sentinel-container max-w-[920px]">
        <header className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="sentinel-overline">Dúvidas frequentes</span>
          <h2 id="faq-h" className="sentinel-heading-xl mt-3 text-sentinel-forest">
            Informações claras antes do contato.
          </h2>
        </header>

        <div className="divide-y divide-sentinel-mist border-y border-sentinel-mist">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-bold text-sentinel-ink" itemProp="name">{faq.q}</span>
                <span className="text-xl font-light text-sentinel-sage">{openIndex === i ? '-' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[240px]' : 'max-h-0'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="pb-6 text-sm leading-[1.8] text-sentinel-ink-3" itemProp="text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
