import { Shield, Instagram, Facebook, Music2, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sentinel-ink text-white py-16">
      <div className="sentinel-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-sentinel-forest flex items-center justify-center">
                <Shield className="w-5 h-5 text-sentinel-glow" />
              </div>
              <div className="leading-tight">
                <b className="block text-sm font-extrabold tracking-tight">SENTINELA</b>
                <span className="text-[.6rem] text-white/40 tracking-[.08em] uppercase">Saúde Ambiental</span>
              </div>
            </div>
            <p className="text-[.78rem] text-white/40 leading-[1.7] mb-5">
              Proteção técnica preventiva contra pragas urbanas em Franca SP e região.
              Diagnóstico gratuito, documentação profissional e planos preventivos desde 1984.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: '#' },
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', href: '#' },
                { icon: <Music2 className="w-4 h-4" />, label: 'TikTok', href: '#' },
                { icon: <MessageCircle className="w-4 h-4" />, label: 'WhatsApp', href: 'https://wa.me/5516993747147' },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.12] transition-all"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[.72rem] font-bold text-white/30 uppercase tracking-[.1em] mb-4">Serviços</h5>
            <ul className="space-y-2.5">
              {[
                'Controle de Escorpiões',
                'Dedetização',
                'Descupinização',
                'Desratização',
                "Caixa d'Água",
                'Sanitização',
              ].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-[.8rem] text-white/50 hover:text-sentinel-glow transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[.72rem] font-bold text-white/30 uppercase tracking-[.1em] mb-4">Cidades</h5>
            <ul className="space-y-2.5">
              {['Franca SP', 'Batatais', 'Orlândia', 'São Joaquim da Barra', 'Ituverava', 'Pedregulho'].map((item, i) => (
                <li key={i}>
                  <span className="text-[.8rem] text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[.72rem] font-bold text-white/30 uppercase tracking-[.1em] mb-4">Empresa</h5>
            <ul className="space-y-2.5">
              {['Quem Somos', 'Programa Sentinela', 'Blog', 'Dúvidas', 'Contato'].map((item, i) => (
                <li key={i}>
                  <a href={i === 4 ? '#contact' : i === 3 ? '#faq' : '#'} className="text-[.8rem] text-white/50 hover:text-sentinel-glow transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[.7rem] text-white/25">
            © 2026 Sentinela Saúde Ambiental. Franca SP — CNAE 8122-2/00. Todos os direitos reservados.
          </p>
          <div className="flex gap-2 flex-wrap">
            {['✅ ANVISA RDC 622/2022', '📋 CNAE 8122-2/00', '🌿 IBAMA IN 141/2006'].map((badge, i) => (
              <span key={i} className="text-[.58rem] font-bold tracking-[.06em] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/30">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
