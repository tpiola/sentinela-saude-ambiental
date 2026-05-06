import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

const points = [
  'Avaliação do ambiente antes de indicar o serviço.',
  'Orientação de preparo e retorno conforme produto e protocolo.',
  'Cuidados comunicados com foco em crianças, pets e rotina do imóvel.',
];

export default function Plans() {
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
    <section ref={ref} id="plans" className="sentinel-section bg-white" aria-labelledby="plans-h">
      <div className="sentinel-container">
        <div className={`grid gap-10 rounded-[36px] bg-sentinel-stone p-7 transition-all duration-700 md:p-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <span className="text-[.7rem] font-bold uppercase tracking-[.18em] text-sentinel-forest">Eco-Health</span>
            <h2 id="plans-h" className="sentinel-heading-xl mt-4 text-sentinel-forest">
              Controle pensado para a rotina real da família e da empresa.
            </h2>
            <p className="sentinel-body mt-5">
              A Sentinela Saúde Ambiental trata o controle de pragas como saúde ambiental:
              menos improviso, mais orientação e decisões compatíveis com o uso do espaço.
            </p>
            <a
              href={createWhatsAppUrl('Quero entender o protocolo Eco-Health da Sentinela Saúde Ambiental')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-sentinel-forest px-7 text-sm font-bold text-white transition-colors hover:bg-sentinel-forest-2"
            >
              Falar com a Sentinela
            </a>
          </div>

          <div className="grid gap-3">
            {points.map((point, i) => (
              <div key={point} className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[.16em] text-sentinel-ink-5">
                  0{i + 1}
                </span>
                <p className="mt-3 text-[1rem] leading-[1.7] text-sentinel-ink">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
