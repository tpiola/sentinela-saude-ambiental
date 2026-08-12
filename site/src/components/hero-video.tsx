"use client";

import Link from "next/link";
import { BRAND, whatsappHref } from "@/lib/brand";

const WHATSAPP_MESSAGE =
  "Olá, Sentinela. Gostaria de uma avaliação para controle de pragas em Franca e região.";

export function HeroVideo({ videoSrc }: { videoSrc?: string }) {
  const src =
    videoSrc ??
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL ??
    BRAND.heroVideoUrl;

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[680px] overflow-hidden bg-[color:var(--brand-navy)] pt-24 text-white sm:min-h-[720px] sm:pt-28"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={BRAND.heroVideoPosterUrl}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-[color:var(--brand-navy)]/82"
        aria-hidden="true"
      />

      <div className="container-responsive relative z-10 flex min-h-[580px] items-center py-12 sm:min-h-[610px]">
        <div className="max-w-[760px] min-w-0">
          <p className="mb-5 border-l-2 border-[color:var(--brand-lime)] pl-4 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            Controle profissional de pragas · Franca e região
          </p>

          <h1 className="max-w-[13ch] min-w-0 [overflow-wrap:anywhere] font-[family-name:var(--font-heading)] text-[clamp(2.5rem,6vw,4.9rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
            Segurança técnica para proteger o seu ambiente.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            Atendimento para residências, condomínios e empresas, com inspeção,
            orientação responsável e registro do serviço conforme o escopo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappHref(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_hero"
              className="inline-flex min-h-14 items-center justify-center whitespace-nowrap bg-[color:var(--brand-lime)] px-7 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Solicitar avaliação
            </a>
            <Link
              href="/servicos"
              data-track="servicos_hero"
              className="inline-flex min-h-14 items-center justify-center whitespace-nowrap border border-white/40 px-7 font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Conhecer os serviços
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/55">
                Método
              </dt>
              <dd className="mt-1 font-semibold text-white">
                Inspeção antes do tratamento
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/55">
                Cobertura
              </dt>
              <dd className="mt-1 font-semibold text-white">Franca e região</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/55">
                Atendimento
              </dt>
              <dd className="mt-1 font-semibold text-white">
                Residencial e empresarial
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
