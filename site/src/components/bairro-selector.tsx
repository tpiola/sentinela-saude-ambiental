"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND, whatsappHref } from "@/lib/brand";
import { insectsSeasonality } from "@/lib/insects";

export function BairroSelector() {
  const [bairro, setBairro] = useState("");

  const waHref = bairro
    ? whatsappHref(
        `Olá, Sentinela! Procurei por dedetizadora perto de mim. Meu bairro é ${bairro}, em Franca/SP.`,
      )
    : whatsappHref(
        "Olá, Sentinela! Procurei por dedetizadora perto de mim. Quero confirmar meu bairro em Franca/SP.",
      );

  return (
    <div>
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
        Selecione seu bairro
      </h3>
      <label className="sr-only" htmlFor="bairro-select">
        Escolha seu bairro em Franca
      </label>
      <select
        id="bairro-select"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        className="mt-3 w-full min-h-12 rounded-lg border border-[color:var(--brand-border)] bg-white px-4 text-sm font-semibold text-[color:var(--brand-navy)] focus:outline-2 focus:outline-[color:var(--brand-navy)]"
      >
        <option value="">Escolha um bairro…</option>
        {BRAND.servicedBairros.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      {bairro && (
        <div className="mt-4 rounded-lg border border-[color:var(--brand-border)] bg-white p-4">
          <p className="text-sm font-bold text-[color:var(--brand-navy)]">
            O que monitoramos em {bairro} e região:
          </p>
          <ul className="mt-3 space-y-2.5">
            {insectsSeasonality.map((insect) => (
              <li key={insect.slug} className="text-sm leading-5 text-[color:var(--brand-muted)]">
                <Link
                  href={insect.href}
                  className="font-semibold text-[color:var(--brand-navy)] underline decoration-[color:var(--brand-lime)] decoration-2 underline-offset-2 hover:text-[color:var(--brand-green-deep)]"
                >
                  {insect.nome}
                </Link>
                {" "}— {insect.sazonalidade}. Sinais:{" "}
                {insect.indicios.map((s, i) => (
                  <span key={s}>
                    {i > 0 && ", "}
                    {s.toLowerCase()}
                  </span>
                ))}
                .
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        data-track="bairro_whatsapp"
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center bg-[color:var(--brand-whatsapp)] px-6 font-bold text-white transition hover:brightness-110"
      >
        Confirmar {bairro || "meu bairro"} no WhatsApp
      </a>
    </div>
  );
}
