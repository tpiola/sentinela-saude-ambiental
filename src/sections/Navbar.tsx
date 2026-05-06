import { useEffect, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

// TopBar exported but hidden — kept for Home.tsx compatibility
export default function TopBar() { return null; }

const NAV_LINKS = [
  { href: '#inicio',    label: 'Início' },
  { href: '#cuidado',   label: 'O Cuidado' },
  { href: '#services',  label: 'Serviços de Elite' },
  { href: '#protocolo', label: 'Protocolo de Prevenção' },
];

export function Navbar() {
  const [stuck, setStuck]       = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        stuck
          ? 'bg-[#002D62]/85 shadow-[0_4px_24px_rgba(0,29,62,.35)] backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="sentinel-container flex h-[72px] items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Sentinela Saúde Ambiental — Início">
          <img src="/logo-sentinelatransparente.png" alt="" aria-hidden="true" className="h-11 w-auto object-contain" />
          <div className="hidden sm:block leading-tight">
            <b className="block text-[.8rem] font-black tracking-[.1em] text-white">SENTINELA</b>
            <span className="text-[.56rem] uppercase tracking-[.2em] text-white/50">Saúde Ambiental</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[.72rem] font-semibold uppercase tracking-[.1em] text-white/75 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* SOS Button */}
        <a
          href={createWhatsAppUrl('🚨 SOS! Preciso de atendimento URGENTE da Sentinela Saúde Ambiental em Franca SP.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SOS Sentinela — atendimento urgente via WhatsApp"
          className="hidden md:inline-flex relative overflow-hidden min-h-10 items-center rounded-full px-5 text-[.7rem] font-black uppercase tracking-[.12em] shadow-md"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#C8900A] via-[#F5C842] to-[#C8900A] bg-[length:200%] animate-[band-shimmer_2.8s_linear_infinite]" />
          <span className="relative z-10 flex items-center gap-1.5 text-[#001A3D]">🚨 SOS Sentinela</span>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                open
                  ? i === 0 ? 'translate-y-[7px] rotate-45'
                  : i === 1 ? 'opacity-0 scale-x-0'
                  : '-translate-y-[7px] -rotate-45'
                  : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menu mobile"
        className={`overflow-hidden border-t border-white/10 bg-[#002D62]/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          open ? 'max-h-[400px] py-5' : 'max-h-0'
        }`}
      >
        <div className="sentinel-container flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-[.1em] text-white/75 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href={createWhatsAppUrl('🚨 SOS! Preciso de atendimento URGENTE da Sentinela Saúde Ambiental.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#C8900A] to-[#F5C842] px-6 text-sm font-black uppercase tracking-[.1em] text-[#001A3D]"
          >
            🚨 SOS Sentinela
          </a>
        </div>
      </div>
    </header>
  );
}
