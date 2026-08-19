"use client";

import { useEffect, useState } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const CONSENT_KEY = "sentinela-cookie-consent";

/**
 * Mesma regra de consentimento da mensuração de terceiros (analytics.tsx):
 * só carrega depois do aceite, para manter o comportamento coerente com o
 * que o banner de cookies promete ao visitante.
 */
export function VercelTelemetry() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(localStorage.getItem(CONSENT_KEY) === "accepted");
    sync();
    window.addEventListener("sentinela:consent", sync);
    return () => window.removeEventListener("sentinela:consent", sync);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}
