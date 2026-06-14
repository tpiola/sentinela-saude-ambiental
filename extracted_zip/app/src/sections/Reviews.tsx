import { useRef, useState, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';

const reviews = [
  {
    text: '"Encontrei um escorpião com meu filho de 4 anos em casa. A Sentinela respondeu em menos de 10 minutos e veio no mesmo dia. Profissionalismo total — explicaram cada passo e deixaram o laudo."',
    name: 'Maria Aparecida',
    loc: 'Residencial · Centro, Franca SP',
    avatar: 'M',
    avatarColor: 'bg-sentinel-sage',
  },
  {
    text: '"Síndico há 3 anos, sempre difícil encontrar empresa que entregue documentação adequada. A Sentinela entregou cronograma, relatório e certificado em todas as visitas. Padrão profissional diferenciado."',
    name: 'Roberto Mendes',
    loc: 'Síndico · Condomínio, Franca SP',
    avatar: 'R',
    avatarColor: 'bg-sentinel-forest',
  },
  {
    text: '"Restaurante no centro de Franca. A Vigilância pediu documentação de controle de pragas. A Sentinela forneceu tudo — laudo, certificado e orientação completa para a auditoria. Recomendo sem hesitar."',
    name: 'Carlos Santos',
    loc: 'Restaurante · Franca SP',
    avatar: 'C',
    avatarColor: 'bg-sentinel-amber',
  },
];

export default function Reviews() {
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
    <section ref={ref} className="sentinel-section bg-sentinel-stone" aria-labelledby="rev-h">
      <div className="sentinel-container">
        <header className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="sentinel-overline">O que dizem nossos clientes</span>
          <h2 id="rev-h" className="sentinel-heading-xl text-sentinel-forest mt-3">
            Avaliações reais,<br />resultados reais
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <article
              key={i}
              className={`bg-white rounded-2xl border border-sentinel-mist p-7 hover:shadow-sentinel-md transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[.88rem] text-sentinel-ink-2 leading-[1.7] mb-6 font-medium">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-sentinel-ink">{review.name}</div>
                  <div className="text-[.68rem] text-sentinel-ink-4">{review.loc}</div>
                  <div className="flex items-center gap-1 text-[.62rem] text-blue-600 mt-0.5">
                    <MapPin className="w-3 h-3" /> Google Maps
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
