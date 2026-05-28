"use client";

import { useState } from "react";
import { INTEGRATIONS } from "@/lib/integrations";

const STORAGE_KEY = "sentinela-cookie-consent";

function shouldShowBanner(): boolean {
  if (typeof window === "undefined") return false;
  const hasTracking =
    Boolean(INTEGRATIONS.gaMeasurementId) || Boolean(INTEGRATIONS.gtmId);
  if (!hasTracking) return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored !== "accepted" && stored !== "rejected";
}

export function CookieConsent() {
  const [visible, setVisible] = useState(shouldShowBanner);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Consentimento de cookies"
      className="fixed right-3 bottom-20 left-3 z-[55] mx-auto max-w-lg rounded-2xl border border-[color:var(--brand-border)] bg-white p-4 shadow-2xl sm:right-6 sm:bottom-24 sm:left-auto sm:p-5"
    >
      <p className="text-sm text-[color:var(--brand-muted)]">
        Usamos cookies e ferramentas de análise (Google) para melhorar o site.
        Ao aceitar, você concorda com o uso conforme a LGPD.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={accept}
          className="flex-1 rounded-full bg-[color:var(--brand-navy)] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] sm:flex-none"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={reject}
          className="flex-1 rounded-full border border-[color:var(--brand-border)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-muted)] transition hover:bg-[color:var(--brand-surface)] sm:flex-none"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
