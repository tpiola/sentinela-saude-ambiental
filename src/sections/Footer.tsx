import { createWhatsAppUrl } from '@/lib/whatsapp';

const CITIES = ['Franca', 'Batatais', 'Cristais Paulista', 'Orlândia', 'Ituverava', 'Pedregulho'];

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/sentinelasaudeambiental',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/sentinelasaudeambiental',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Google Maps',
    href: 'https://maps.google.com/?q=Sentinela+Saude+Ambiental+Franca+SP',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: createWhatsAppUrl('Olá! Quero uma avaliação da Sentinela Saúde Ambiental em Franca SP.'),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

const NAV = [
  { href: '#inicio', label: 'Início' },
  { href: '#cuidado', label: 'O Cuidado' },
  { href: '#services', label: 'Serviços de Elite' },
  { href: '#protocolo', label: 'Protocolo de Prevenção' },
  { href: '#faq', label: 'Dúvidas' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000D1F] text-white">

      {/* Cities strip */}
      <div className="border-b border-white/[0.05] bg-[#000A18]">
        <div className="sentinel-container flex flex-wrap items-center justify-between gap-3 py-4">
          <p className="text-[.6rem] font-black uppercase tracking-[.2em] text-[#E6FFFA]/40">
            📍 Área de Atendimento
          </p>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span
                key={city}
                className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[.58rem] font-semibold text-white/35"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="sentinel-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">

          {/* Left */}
          <div>
            <img
              src="/logo-sentinelatransparente.png"
              alt="Sentinela Saúde Ambiental"
              className="mb-6 h-14 w-auto object-contain brightness-0 invert opacity-80"
            />
            <p className="max-w-[380px] text-sm leading-[1.85] text-white/40">
              Controle de pragas urbanas premium em Franca/SP e região.
              11 anos. Insumos certificados. Seguros para pets e crianças.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-all hover:border-[#E6FFFA]/30 hover:bg-[#E6FFFA]/8 hover:text-[#E6FFFA]"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8 grid gap-5 text-sm sm:grid-cols-2">
              <div>
                <span className="block text-[.58rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/40">Contato</span>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base font-bold text-white/80 transition-colors hover:text-[#E6FFFA]"
                >
                  (16) 99374-7147
                </a>
              </div>
              <div>
                <span className="block text-[.58rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/40">CNAE</span>
                <span className="mt-2 block text-white/50">8122-2/00</span>
              </div>
            </div>

            {/* Footer nav */}
            <nav className="mt-8 flex flex-wrap gap-4" aria-label="Rodapé — navegação">
              {NAV.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[.65rem] font-semibold uppercase tracking-[.1em] text-white/30 transition-colors hover:text-white/70"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right — Map */}
          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.02]">
            <div className="border-b border-white/[0.07] px-5 py-4">
              <span className="text-[.6rem] font-black uppercase tracking-[.18em] text-[#E6FFFA]/45">
                Área de Cobertura
              </span>
              <p className="mt-1 text-sm font-semibold text-white/70">Franca/SP e Região</p>
            </div>
            <iframe
              title="Mapa — Área de cobertura Sentinela Saúde Ambiental Franca SP"
              src="https://www.google.com/maps?q=Franca+SP+Brasil&output=embed"
              className="h-[300px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: 'saturate(0) brightness(0.55) contrast(1.15) invert(0.9)' }}
            />
            <div className="border-t border-white/[0.07] px-5 py-4">
              <a
                href="https://maps.google.com/?q=Sentinela+Saude+Ambiental+Franca+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[.65rem] font-bold uppercase tracking-[.1em] text-[#E6FFFA]/50 transition-colors hover:text-[#E6FFFA]/80"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.05] pt-6 text-[.62rem] text-white/20">
          <span>© 2026 Sentinela Saúde Ambiental. Todos os direitos reservados.</span>
          <span>Franca/SP · CNAE 8122-2/00</span>
        </div>
      </div>
    </footer>
  );
}
