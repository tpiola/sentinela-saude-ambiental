import { Phone, FileSearch, MapPin, Clock, Smartphone } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28 bg-sentinel-forest" aria-labelledby="cta-h">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 65% 70% at 50% 50%, rgba(76,175,80,.15) 0%, transparent 55%)' }}
      />
      <div className="sentinel-container relative text-center">
        <span className="text-[.7rem] font-bold tracking-[.14em] uppercase text-sentinel-glow block mb-3">Proteção ambiental sob controle</span>
        <h2 id="cta-h" className="font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05] tracking-[-.02em] text-white mb-5">
          Comece com um<br />diagnóstico gratuito
        </h2>
        <p className="text-[1.05rem] text-white/65 leading-[1.75] max-w-[580px] mx-auto mb-8">
          Resposta em menos de 10 minutos. Documentação profissional.
          Atendemos Franca SP e 50 km ao redor — residências, empresas e condomínios.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="https://wa.me/5516993747147?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20para%20controle%20de%20pragas%20em%20Franca%20SP."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[1.05rem] font-bold bg-[#25D366] text-white hover:bg-[#22c55e] transition-all hover:-translate-y-0.5 shadow-wpp"
          >
            <Phone className="w-5 h-5" />
            WhatsApp — Resposta em 10 min
          </a>
          <a
            href="#funnel"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[1.05rem] font-bold bg-white/[0.12] text-white border-[1.5px] border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all hover:-translate-y-0.5"
          >
            <FileSearch className="w-5 h-5" />
            Formulário de Diagnóstico
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sentinel-glow" />
            <span><strong className="text-white">Franca SP</strong> e 50 km</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sentinel-glow" />
            <span>Seg–Sáb <strong className="text-white">7h–19h</strong> · Dom 8h–17h</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-sentinel-glow" />
            <span><strong className="text-white">(16) 99374-7147</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
