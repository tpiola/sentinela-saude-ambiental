import { createWhatsAppUrl } from '@/lib/whatsapp';

const mapSrc = 'https://www.google.com/maps?q=Franca+SP+Brasil&output=embed';

const footerLinks = [
  {
    label: 'Início',
    href: '#inicio',
  },
  {
    label: 'O Cuidado',
    href: '#cuidado',
  },
  {
    label: 'Serviços de Elite',
    href: '#services',
  },
  {
    label: 'Protocolo de Prevenção',
    href: '#protocolo',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#001A3D] text-white">
      {/* Heat map area strip */}
      <div className="border-b border-white/5 bg-[#001228]">
        <div className="sentinel-container py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[.68rem] font-black uppercase tracking-[.2em] text-[#E6FFFA]/60">
              📍 Área de Atendimento — Franca/SP e Região
            </p>
            <div className="flex flex-wrap gap-3">
              {['Franca', 'Ribeirão Preto', 'Batatais', 'Cristais Paulista', 'Restinga', 'Jeriquara'].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-[#E6FFFA]/10 bg-[#E6FFFA]/5 px-3 py-1 text-[.62rem] font-semibold text-[#E6FFFA]/50"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sentinel-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">

          {/* Left Column */}
          <div>
            <img
              src="/logo-sentinelatransparente.png"
              alt="Sentinela Saúde Ambiental"
              className="mb-7 h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="max-w-[400px] text-sm leading-[1.85] text-white/50">
              Sentinela Saúde Ambiental. 11 anos de autoridade em controle de pragas urbanas,
              higienização de reservatórios e orientação técnica em Franca/SP e região.
            </p>

            {/* Contact Grid */}
            <div className="mt-10 grid gap-6 text-sm sm:grid-cols-2">
              <div>
                <span className="block text-[.62rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/60">
                  Contato
                </span>
                <a
                  className="mt-2 block text-lg font-bold text-white transition-colors hover:text-[#E6FFFA]"
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (16) 99374-7147
                </a>
              </div>
              <div>
                <span className="block text-[.62rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/60">
                  Atendimento
                </span>
                <span className="mt-2 block text-white/80">Franca/SP e região</span>
              </div>
              <div>
                <span className="block text-[.62rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/60">
                  Empresa
                </span>
                <span className="mt-2 block text-white/80">Sentinela Saúde Ambiental</span>
              </div>
              <div>
                <span className="block text-[.62rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/60">
                  CNAE
                </span>
                <span className="mt-2 block text-white/80">8122-2/00</span>
              </div>
            </div>

            {/* Footer Nav */}
            <nav className="mt-10 flex flex-wrap gap-5" aria-label="Navegação do rodapé">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[.72rem] font-semibold uppercase tracking-[.1em] text-white/40 transition-colors hover:text-white/80"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <a
              href={createWhatsAppUrl('Olá! Quero uma avaliação para controle de pragas em Franca SP.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#25D366] px-7 text-sm font-bold text-white shadow-[0_8px_32px_rgba(37,211,102,.35)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(37,211,102,.55)] hover:scale-[1.02]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Avaliação
            </a>
          </div>

          {/* Right Column — Map */}
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 p-5">
              <span className="block text-[.64rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/60">
                Área de Cobertura
              </span>
              <p className="mt-1.5 text-sm font-semibold text-white">
                Franca/SP e Região
              </p>
              <p className="mt-1 text-xs text-white/40">
                Atendimento rápido · Deslocamento ágil
              </p>
            </div>
            <iframe
              title="Área de cobertura Sentinela Saúde Ambiental — Franca SP"
              src={mapSrc}
              className="h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: 'saturate(0) brightness(0.7) contrast(1.1) invert(0.85)' }}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-7 text-[.68rem] text-white/25">
          <span>© 2026 Sentinela Saúde Ambiental. Todos os direitos reservados.</span>
          <span>Franca/SP · CNAE 8122-2/00 · Controle de Pragas Urbanas</span>
        </div>
      </div>
    </footer>
  );
}
