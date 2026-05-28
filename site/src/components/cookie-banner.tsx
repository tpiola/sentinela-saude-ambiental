"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "sentinela-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-[color:var(--brand-border)] bg-white shadow-2xl md:right-auto md:bottom-4 md:left-4 md:max-w-md md:rounded-2xl md:border"
    >
      <div className="p-5">
        <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
          🍪 Usamos cookies
        </p>
        <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
          Utilizamos cookies analíticos (Google Analytics) para melhorar o site.
          Ao aceitar, você concorda com o tratamento de dados conforme nossa{" "}
          <Link
            href="/privacidade"
            className="font-semibold text-[color:var(--brand-navy)] underline-offset-2 hover:underline"
          >
            Política de Privacidade
          </Link>{" "}
          (LGPD — Lei 13.709/2018).
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 rounded-full bg-[color:var(--brand-navy)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)]"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 rounded-full border border-[color:var(--brand-border)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-muted)] transition hover:border-[color:var(--brand-navy)] hover:text-[color:var(--brand-navy)]"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
