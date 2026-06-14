import { useState, useEffect } from 'react';
import { Menu, X, Phone, FileSearch } from 'lucide-react';

export default function TopBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-sentinel-red text-white text-center py-2.5 px-4 text-sm font-semibold relative z-50">
      🚨 <strong className="text-red-200">Alerta Outubro–Março:</strong> período crítico de escorpiões em Franca SP — proteção preventiva disponível agora.
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 text-lg px-2"
        aria-label="Fechar alerta"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStuck(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#plans', label: 'Programa' },
    { href: '#faq', label: 'Dúvidas' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        stuck
          ? 'bg-white/95 backdrop-blur-xl shadow-sentinel-sm py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ top: stuck ? 0 : 41 }}
    >
      <div className="sentinel-container flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5" aria-label="Sentinela Saúde Ambiental">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
            stuck ? 'bg-sentinel-forest' : 'bg-sentinel-forest'
          } shadow-sentinel-sm`}>
            <img src="/logo-sentinelatransparente.png" alt="Sentinela" className="w-7 h-7 object-contain" />
          </div>
          <div className="leading-tight">
            <b className="block text-sm font-extrabold tracking-tight text-sentinel-forest">SENTINELA</b>
            <span className="text-[.62rem] text-sentinel-ink-4 tracking-[.08em] uppercase">Saúde Ambiental</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-sentinel-ink-3 hover:text-sentinel-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="#funnel"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold border-[1.5px] border-sentinel-forest text-sentinel-forest hover:bg-sentinel-forest hover:text-white transition-all"
          >
            <FileSearch className="w-4 h-4" />
            Diagnóstico Gratuito
          </a>
          <a
            href="https://wa.me/5516993747147?text=Olá!%20Quero%20um%20diagnóstico%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold bg-sentinel-sage text-white hover:bg-sentinel-forest-2 transition-all shadow-sentinel-md hover:shadow-sentinel-lg"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden text-sentinel-ink p-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-sentinel-mist mt-3 py-4 px-6 space-y-3 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-semibold text-sentinel-ink-3 hover:text-sentinel-forest py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5516993747147?text=Olá!%20Quero%20um%20diagnóstico%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold bg-sentinel-sage text-white mt-2"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
