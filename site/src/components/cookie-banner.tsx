"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sentinela-cookie-consent";
// Sempre há alguma mensuração candidata a carregar após o aceite: os IDs de
// terceiros (GTM/GA/Ads/Pixel) quando configurados, e a telemetria da
// própria Vercel (analytics + speed insights), que também respeita o
// consentimento. Por isso o banner é sempre oferecido, não só quando um
// ID de terceiro está presente.

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setVisible(!localStorage.getItem(STORAGE_KEY));
    });
  }, []);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event("sentinela:consent"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de privacidade"
      aria-describedby="cookie-description"
      className="fixed inset-x-3 bottom-20 z-[90] mx-auto max-w-3xl border border-[color:var(--brand-border)] bg-white p-4 shadow-2xl sm:bottom-5 sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <p id="cookie-description" className="flex-1 text-sm leading-6 text-[color:var(--brand-muted)]">
          Usamos cookies de medição para entender campanhas e melhorar o atendimento.
          Você pode recusar sem perder funcionalidades.{" "}
          <Link href="/privacidade" className="font-semibold text-[color:var(--brand-navy)] underline underline-offset-4">
            Política de privacidade
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="min-h-11 whitespace-nowrap border border-[color:var(--brand-border)] px-4 text-sm font-semibold text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-surface)] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="min-h-11 whitespace-nowrap bg-[color:var(--brand-navy)] px-5 text-sm font-bold text-white hover:bg-[color:var(--brand-navy-soft)] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Aceitar medição
          </button>
        </div>
      </div>
    </div>
  );
}
