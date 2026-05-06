import { useEffect, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export default function TopBar() {
  return null;
}

export function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#cuidado', label: 'O Cuidado' },
    { href: '#services', label: 'Serviços de Elite' },
    { href: '#protocolo', label: 'Protocolo de Prevenção' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        stuck
          ? 'bg-white/10 shadow-[0_8px_32px_rgba(0,45,98,.18)] backdrop-blur-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="sentinel-container flex h-[76px] items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="Sentinela Saúde Ambiental">
          <img
            src="/logo-sentinelatransparente.png"
            alt="Sentinela Saúde Ambiental"
            className="h-12 w-auto object-contain drop-shadow-lg"
          />
          <div className="leading-tight">
            <b className="block text-[.82rem] font-black tracking-[.1em] text-white drop-shadow">
              SENTINELA
            </b>
            <span className="text-[.58rem] uppercase tracking-[.2em] text-white/60">
              Saúde Ambiental
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[.73rem] font-semibold uppercase tracking-[.1em] text-white/80 transition-all duration-200 hover:text-white hover:drop-shadow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Gold - SOS Sentinela */}
        <div className="hidden items-center md:flex">
          <a
            href={createWhatsAppUrl('🚨 SOS! Preciso de atendimento URGENTE da Sentinela Saúde Ambiental em Franca SP.')}
            target="_blank"
            rel="noopener noreferrer"
            className="sos-button group relative inline-flex min-h-10 items-center overflow-hidden rounded-full px-6 text-[.72rem] font-black uppercase tracking-[.12em]"
            aria-label="SOS Sentinela - Atendimento emergencial"
          >
            {/* Gold shimmer background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_100%] animate-[band-shimmer_3s_linear_infinite]" />
            {/* Glow ring */}
            <span className="absolute inset-0 rounded-full ring-2 ring-[#F5C842]/60 animate-[wpp-pulse_2.5s_ease-in-out_infinite]" />
            <span className="relative flex items-center gap-2 text-[#002D62]">
              <span className="text-sm">🚨</span>
              SOS Sentinela
            </span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#002D62]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold uppercase tracking-[.1em] text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={createWhatsAppUrl('🚨 SOS! Preciso de atendimento URGENTE da Sentinela Saúde Ambiental.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F5C842] px-6 text-sm font-black uppercase tracking-[.1em] text-[#002D62]"
            >
              🚨 SOS Sentinela
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
