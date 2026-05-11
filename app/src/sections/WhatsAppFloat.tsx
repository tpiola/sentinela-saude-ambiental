import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[500] flex flex-col items-end gap-2.5">
      <div className="bg-white border border-sentinel-mist rounded-2xl rounded-br-none p-3.5 shadow-sentinel-lg max-w-[200px] animate-slide-up">
        <strong className="block text-sm text-sentinel-ink mb-0.5">Oi! Posso ajudar? 👋</strong>
        <span className="text-[.72rem] text-sentinel-ink-4">Resposta em &lt;10 min</span>
      </div>
      <a
        href="https://wa.me/5516993747147?text=Olá!%20Vi%20o%20site%20e%20preciso%20de%20ajuda%20com%20pragas%20em%20Franca%20SP."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl shadow-wpp animate-wpp-pulse hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
