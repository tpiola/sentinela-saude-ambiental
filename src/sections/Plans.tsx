import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

const POINTS = [
  { n: '01', title: 'Diagnóstico real', desc: 'Avaliamos o ambiente antes de qualquer indicação.' },
  { n: '02', title: 'Insumo certo', desc: 'Produto premium adequado ao local, praga e rotina.' },
  { n: '03', title: 'Retorno garantido', desc: 'Orientação pós-serviço e renovação com Selo Sentinela.' },
];

export default function Plans() {
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
    <section ref={ref} id="plans" className="sentinel-section bg-[#001228]" aria-labelledby="plans-h">
      <div className="sentinel-container">
        <div
          className={`grid gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-700 backdrop-blur-sm md:p-12 lg:grid-cols-[1fr_1fr] lg:items-center ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <span className="text-[.65rem] font-black uppercase tracking-[.2em] text-[#E6FFFA]/60">
              Eco-Health Protocol
            </span>
            <h2 id="plans-h" className="sentinel-heading-xl mt-3 text-white">
              Saúde ambiental real. Não improviso.
            </h2>
            <p className="mt-4 text-[.95rem] leading-[1.8] text-white/55 max-w-[440px]">
              Tratamos controle de pragas como medicina preventiva: protocolo, produto certo e orientação clara.
            </p>
            <a
              href={createWhatsAppUrl('Quero entender o Protocolo Eco-Health da Sentinela em Franca SP')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center rounded-full border border-[#E6FFFA]/30 bg-[#E6FFFA]/8 px-7 text-sm font-bold text-[#E6FFFA] transition-all hover:bg-[#E6FFFA]/16"
            >
              Saber mais
            </a>
          </div>

          <div className="grid gap-3">
            {POINTS.map((p) => (
              <div key={p.n} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <span className="mt-0.5 text-[.6rem] font-black uppercase tracking-[.16em] text-[#E6FFFA]/40 shrink-0">
                  {p.n}
                </span>
                <div>
                  <strong className="block text-sm font-bold text-white/90">{p.title}</strong>
                  <span className="mt-0.5 block text-[.82rem] text-white/45">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
