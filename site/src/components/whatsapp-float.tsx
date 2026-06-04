"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { whatsappHref } from "@/lib/brand";

const WA_MSG =
  "Olá, Sentinela! Vi o site e gostaria de solicitar um orçamento para dedetização. Meu nome é [seu nome].";

/** Botão flutuante redondo (desktop e mobile quando nao ha barra). */
function FloatingButton({ showTooltip, onDismiss }: { showTooltip: boolean; onDismiss: () => void }) {
  return (
    <div className="fixed right-4 bottom-20 z-[60] flex items-end gap-3 md:right-8 md:bottom-8 sm:bottom-8">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="relative rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[color:var(--brand-navy)] shadow-xl ring-1 ring-black/5"
          >
            <p className="text-xs text-[color:var(--brand-muted)]">Precisa de ajuda?</p>
            <p className="mt-0.5 font-bold">Fale no WhatsApp →</p>
            <button
              type="button"
              onClick={onDismiss}
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] text-slate-600"
              aria-label="Fechar"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappHref(WA_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 shadow-black/30 ring-[#25D366]/30 md:h-16 md:w-16"
        aria-label="Abrir conversa no WhatsApp"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onDismiss}
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white ring-2 ring-white">
          1
        </span>
        <WhatsAppIcon />
      </motion.a>
    </div>
  );
}

/** Barra sticky full-width apenas em mobile (sm e menor). */
function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] sm:hidden">
      <a
        href={whatsappHref(WA_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] w-full items-center justify-center gap-3 bg-[#25D366] px-4 py-3 font-[family-name:var(--font-heading)] text-base font-bold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.18)]"
        aria-label="Agendar agora e obter orçamento grátis pelo WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0" />
        <span>AGENDAR AGORA — ORÇAMENTO GRÁTIS</span>
      </a>
    </div>
  );
}

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <MobileStickyBar />
      <FloatingButton showTooltip={showTooltip} onDismiss={() => setShowTooltip(false)} />
    </>
  );
}

function WhatsAppIcon({ className = "h-7 w-7 md:h-8 md:w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
