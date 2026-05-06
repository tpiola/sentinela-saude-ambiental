import { useEffect, useRef, useState } from 'react';

const FAQS = [
  {
    q: 'Quanto tempo leva o atendimento?',
    a: 'Residências em até 2h de deslocamento na região de Franca. Agendamentos em até 24h após o contato.',
  },
  {
    q: 'Os produtos são seguros para crianças e pets?',
    a: 'Sim. Utilizamos apenas insumos registrados na ANVISA e formulações de baixa toxicidade com alta eficiência — sem odor residual e sem mancha.',
  },
  {
    q: 'Vocês atendem escolas e condomínios?',
    a: 'Sim. Temos protocolo corporativo específico com documentação completa, laudo técnico e Selo Sentinela de validade.',
  },
  {
    q: 'O que é o Protocolo de Prevenção?',
    a: 'É uma barreira molecular aplicada periodicamente no perímetro do imóvel, impedindo a entrada de pragas antes delas aparecerem. Ideal para sítios, escolas e condomínios.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section
      ref={ref}
      id="faq"
      className="sentinel-section bg-[#002D62]"
      aria-labelledby="faq-h"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="sentinel-container max-w-[860px]">
        <header
          className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-[.65rem] font-black uppercase tracking-[.22em] text-[#E6FFFA]/55">
            Dúvidas Frequentes
          </span>
          <h2 id="faq-h" className="sentinel-heading-xl mt-3 text-white">
            Respostas diretas.
          </h2>
        </header>

        <div className="divide-y divide-white/[0.07]">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-[.95rem] font-bold text-white/90" itemProp="name">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 text-[1.2rem] font-light text-[#E6FFFA]/60 transition-transform duration-300 ${
                    open === i ? 'rotate-45' : 'rotate-0'
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-[200px] pb-6' : 'max-h-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-sm leading-[1.85] text-white/55" itemProp="text">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
