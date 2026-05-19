"use client";

import { useState } from "react";
import { INTEGRATIONS } from "@/lib/integrations";

const STORAGE_KEY = "sentinela-cookie-consent";

function shouldShowBanner(): boolean {
  if (typeof window === "undefined") return false;
  const hasTracking =
    Boolean(INTEGRATIONS.gaMeasurementId) || Boolean(INTEGRATIONS.gtmId);
  if (!hasTracking) return false;
  return localStorage.getItem(STORAGE_KEY) !== "accepted";
}

export function CookieConsent() {
  const [visible, setVisible] = useState(shouldShowBanner);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed right-3 bottom-20 left-3 z-[55] mx-auto max-w-lg rounded-2xl border border-[color:var(--brand-border)] bg-white p-4 shadow-2xl sm:right-6 sm:bottom-24 sm:left-auto sm:p-5"
    >
      <p className="text-sm text-[color:var(--brand-muted)]">
        Usamos cookies e ferramentas de análise (Google) para melhorar o site.
        Ao continuar, você concorda com o uso conforme a LGPD.
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-3 w-full rounded-full bg-[color:var(--brand-navy)] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)] sm:w-auto"
      >
        Aceitar
      </button>
    </div>
  );
}
