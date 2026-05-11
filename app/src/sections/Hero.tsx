import { useState, useEffect, useRef } from 'react';
import { Shield, Zap, FileCheck, BadgeCheck, Award, ChevronRight, Bug, Phone, FileSearch } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(542); // 9:02 in seconds
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return Math.floor(Math.random() * 300) + 300;
        return prev - 1;
      });
    }, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const pests = [
    { icon: <Bug className="w-5 h-5" />, name: 'Escorpião em casa', sub: 'Alta urgência — atendemos hoje', color: 'bg-red-100 text-red-600', urgent: true },
    { icon: <Bug className="w-5 h-5" />, name: 'Infestação de baratas', sub: 'Baratas atraem escorpiões — prioridade', color: 'bg-amber-100 text-amber-600', urgent: false },
    { icon: <Bug className="w-5 h-5" />, name: 'Cupim na madeira', sub: 'Diagnóstico antes do dano estrutural', color: 'bg-orange-100 text-orange-600', urgent: false },
    { icon: <Bug className="w-5 h-5" />, name: 'Ratos e roedores', sub: 'Desratização com monitoramento', color: 'bg-gray-100 text-gray-600', urgent: false },
    { icon: <Bug className="w-5 h-5" />, name: "Caixa d'água", sub: 'Higienização com certificado — norma MS', color: 'bg-sky-100 text-sky-600', urgent: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-sentinel-forest"
      aria-labelledby="hero-h1"
    >
      {/* Background textures */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 75% 50%, rgba(0,0,0,.3) 0%, transparent 70%)'
        }}
      />
      <div className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 65% 70% at 72% 45%, rgba(76,175,80,.18) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(28,74,42,.6) 0%, transparent 50%)`
        }}
      />

      {/* Radar rings */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[min(600px,50vw)] aspect-square pointer-events-none hidden lg:block">
        {[0, 1.2, 2.4, 3.6].map((delay, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border border-sentinel-mint/15 animate-radar-expand"
            style={{
              width: `${40 + i * 25}%`,
              height: `${40 + i * 25}%`,
              animationDelay: `${delay}s`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-[60px] h-[60px] bg-sentinel-mint/15 rounded-full border border-sentinel-mint/30 flex items-center justify-center text-[28px] animate-dot-float"
          style={{ transform: 'translate(-50%, -50%)' }}>
          <Shield className="w-7 h-7 text-sentinel-glow" />
        </div>
      </div>

      <div className="sentinel-container relative z-10 grid lg:grid-cols-[1fr_440px] gap-14 items-center pt-32 pb-20">
        {/* Left Column */}
        <div>
          <div className={`flex items-center gap-2.5 mb-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sentinel-sage/10 text-sentinel-sage border border-sentinel-sage/20 text-[.7rem] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-sentinel-sage animate-pulse-dot" />
              Atendendo Franca agora
            </span>
            <div className="w-5 h-px bg-sentinel-glow/30" />
            <span className="text-[.68rem] font-bold tracking-[.14em] text-sentinel-glow uppercase">Desde 1984 · 41 anos</span>
          </div>

          <h1
            id="hero-h1"
            className={`font-display text-[clamp(3rem,6vw,5.4rem)] font-black leading-[.93] tracking-[-.03em] text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Proteção real<br />
            <em className="text-sentinel-glow not-italic font-black">contra pragas</em><br />
            <span className="text-white/80 text-[.52em] font-light tracking-[-.01em]">em Franca SP e região</span>
          </h1>

          <p className={`text-[1.05rem] leading-[1.75] text-white/72 max-w-[480px] mb-9 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Diagnóstico gratuito com resposta em <strong className="text-sentinel-glow">menos de 10 minutos</strong>.
            Escorpião, baratas, cupim, roedores e higienização de reservatórios.
            Documentação profissional em cada serviço.
          </p>

          <div className={`flex flex-wrap gap-3 mb-11 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="https://wa.me/5516993747147?text=Encontrei%20escorpião%20em%20casa%20em%20Franca%20SP%20—%20preciso%20de%20ajuda%20urgente!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-[1.05rem] font-bold bg-sentinel-amber text-white hover:bg-sentinel-amber-2 transition-all hover:-translate-y-0.5 shadow-sentinel-md"
            >
              <Bug className="w-5 h-5" />
              Escorpião? Atendemos hoje
            </a>
            <a
              href="#funnel"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-[1.05rem] font-bold bg-white/15 text-white border-[1.5px] border-white/25 backdrop-blur-sm hover:bg-white/25 transition-all hover:-translate-y-0.5"
            >
              <FileSearch className="w-5 h-5" />
              Diagnóstico Gratuito
            </a>
          </div>

          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {[
              { icon: <Zap className="w-3 h-3" />, text: 'Resposta', bold: 'em <10 min' },
              { icon: <FileCheck className="w-3 h-3" />, text: 'Certificado', bold: 'incluso' },
              { icon: <BadgeCheck className="w-3 h-3" />, text: 'Produtos', bold: 'ANVISA' },
              { icon: <Award className="w-3 h-3" />, text: 'Garantia', bold: 'no serviço' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-6 h-6 rounded bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
                  {item.icon}
                </div>
                {item.text}&nbsp;<strong className="text-sentinel-glow font-semibold">{item.bold}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Panel */}
        <div className={`transition-all duration-900 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-6 scale-[0.97]'}`}>
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sentinel-xl">
            <div className="bg-sentinel-forest-2 px-6 pt-5 pb-4 relative">
              <div className="absolute bottom-0 left-6 right-6 h-px bg-white/10" />
              <div className="font-display text-[1.1rem] font-bold text-white mb-1">Qual é o problema?</div>
              <div className="text-[.75rem] text-white/60">Clique para falar diretamente com um especialista</div>
              <div className="flex items-center gap-2.5 mt-3.5 px-3.5 py-2.5 bg-black/20 rounded-lg">
                <div className="font-mono text-[1.6rem] font-extrabold text-sentinel-glow leading-none min-w-[68px]">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-[.68rem] text-white/50 leading-[1.4]">
                  <strong className="block text-white/85 text-[.78rem]">Tempo médio de resposta</strong>
                  Aguardando seu contato
                </div>
              </div>
            </div>

            <div className="px-6 py-5">
              <div className="flex flex-col gap-2 mb-4">
                {pests.map((pest, i) => (
                  <a
                    key={i}
                    href={`https://wa.me/5516993747147?text=${encodeURIComponent(pest.name + ' em Franca SP')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3.5 py-2.5 bg-sentinel-stone border border-sentinel-mist rounded-xl hover:bg-sentinel-ice hover:border-sentinel-sage/25 transition-all group hover:translate-x-1"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base ${pest.color}`}>
                      {pest.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-sentinel-ink leading-tight">{pest.name}</span>
                      <span className="block text-[.68rem] text-sentinel-ink-4 mt-0.5">{pest.sub}</span>
                    </div>
                    {pest.urgent && (
                      <span className="px-2 py-0.5 rounded-full bg-sentinel-red-bg text-sentinel-red text-[.58rem] font-bold shrink-0">
                        Urgente
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-sentinel-sage opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>

              <div className="h-px bg-sentinel-mist mb-4" />
              <a
                href="https://wa.me/5516993747147?text=Olá!%20Preciso%20de%20um%20diagnóstico%20gratuito%20para%20minha%20casa%20em%20Franca%20SP."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full font-bold bg-[#25D366] text-white hover:bg-[#22c55e] transition-all hover:-translate-y-0.5 shadow-wpp"
              >
                <Phone className="w-4 h-4" />
                Falar com especialista agora
              </a>
              <p className="text-center text-[.7rem] text-sentinel-ink-5 mt-2">Resposta em menos de 10 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
