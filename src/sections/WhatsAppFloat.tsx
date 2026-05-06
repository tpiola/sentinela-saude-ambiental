import { useEffect, useRef, useState } from 'react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const hasShownBubble = useRef(false);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Show bubble once, 4s after button appears — no loop
  useEffect(() => {
    if (!visible || hasShownBubble.current) return;
    hasShownBubble.current = true;
    const id = setTimeout(() => {
      setBubble(true);
      const hide = setTimeout(() => setBubble(false), 3500);
      return () => clearTimeout(hide);
    }, 4000);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-[500] flex flex-col items-end gap-2 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      {/* Bubble tooltip */}
      {bubble && (
        <div className="animate-[slide-up_.4s_cubic-bezier(.22,1,.36,1)_both] rounded-2xl rounded-br-sm border border-white/10 bg-[#002D62] px-4 py-3 shadow-xl backdrop-blur-xl">
          <p className="text-[.72rem] font-semibold text-white/90">👋 Respondemos em minutos</p>
          <p className="text-[.62rem] text-white/45">Franca/SP e região</p>
        </div>
      )}

      {/* WhatsApp icon button */}
      <a
        href={createWhatsAppUrl('Olá! Vi o site e preciso de ajuda com controle de pragas em Franca SP.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp — Sentinela Saúde Ambiental"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_28px_rgba(37,211,102,.5)] transition-transform duration-300 hover:scale-110 animate-[wpp-pulse_3.5s_ease-in-out_2s_infinite]"
      >
        {/* Notification badge */}
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F5C842] text-[8px] font-black text-[#001A3D]"
        >
          1
        </span>

        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
