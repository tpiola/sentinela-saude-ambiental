"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "sentinela-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[color:var(--brand-border)] bg-white shadow-2xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:px-6">
        <p className="flex-1 text-center text-sm text-[color:var(--brand-muted)] sm:text-left">
          Usamos cookies para melhorar sua experiência. Ao continuar, você
          concorda com nossa{" "}
          <Link
            href="/privacidade"
            className="font-semibold text-[color:var(--brand-navy)] underline underline-offset-2 hover:text-[color:var(--brand-lime-deep)]"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/privacidade"
            className="text-xs font-semibold text-[color:var(--brand-muted)] underline underline-offset-2 hover:text-[color:var(--brand-navy)]"
          >
            Saiba mais
          </Link>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-[color:var(--brand-navy)] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
