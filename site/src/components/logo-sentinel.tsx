"use client";

import { useId } from "react";

type LogoProps = {
  className?: string;
};

/** Escudo com gradiente lima → navy, check branco e borda metálica (ajuste fino ao logo oficial). */
export function LogoShieldMark({
  className,
  size = 52,
}: LogoProps & { size?: number }) {
  const id = useId().replace(/:/g, "");
  const gid = `g-${id}`;
  const fid = `f-${id}`;
  const sid = `s-${id}`;

  return (
    <svg
      width={size}
      height={(size * 115) / 100}
      viewBox="0 0 100 115"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={fid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--brand-lime)" />
          <stop offset="48%" stopColor="var(--brand-lime-deep)" />
          <stop offset="100%" stopColor="var(--brand-navy)" />
        </linearGradient>
        <linearGradient id={sid} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8eef4" />
          <stop offset="40%" stopColor="#a8b4c4" />
          <stop offset="100%" stopColor="#7a8799" />
        </linearGradient>
        <filter id={gid} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Brilho circular atrás do check */}
      <ellipse cx="50" cy="54" rx="22" ry="24" fill="#60a5fa" opacity="0.22" />
      <path
        d="M50 10 L84 28.5 L84 69 Q84 96 50 108 Q16 96 16 69 L16 28.5 Z"
        fill={`url(#${fid})`}
        stroke={`url(#${sid})`}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M30 56 L44 74 L74 42"
        fill="none"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${gid})`}
      />
    </svg>
  );
}

/** Linhas swoosh decorativas (lima em cima, azul médio em baixo). */
export function LogoSwoosh({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 280 14"
      className={`w-full max-w-[280px] ${className ?? ""}`}
      aria-hidden
    >
      <path
        d="M4 8 Q70 2 140 6 T276 6"
        fill="none"
        stroke="var(--brand-lime)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 11 Q76 7 142 10 T272 10"
        fill="none"
        stroke="var(--brand-accent-blue)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.95}
      />
    </svg>
  );
}

/** Header / navegação — escudo + duas linhas de marca. */
export function LogoBrandCompact({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoShieldMark
        size={48}
        className="shrink-0 drop-shadow-sm md:size-[52px]"
      />
      <div className="min-w-0 leading-none">
        <p className="font-[family-name:var(--font-heading)] text-[0.95rem] font-extrabold tracking-[0.12em] text-[color:var(--brand-navy-heading)] uppercase md:text-[1.05rem]">
          Sentinela
        </p>
        <p className="mt-1 font-[family-name:var(--font-heading)] text-[0.58rem] font-semibold tracking-[0.22em] text-[color:var(--brand-lime)] uppercase md:text-[0.62rem]">
          Saúde ambiental
        </p>
      </div>
    </div>
  );
}

/** Hero / rodapé — lockup completo com tagline e swoosh. */
export function LogoBrandFull({
  className,
  align = "center",
}: LogoProps & { align?: "left" | "center" }) {
  const a =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${a} ${className ?? ""}`}>
      <div
        className={
          align === "center"
            ? "flex justify-center drop-shadow-md"
            : "drop-shadow-md"
        }
      >
        <LogoShieldMark size={80} />
      </div>
      <div className={`flex flex-col gap-1 ${a}`}>
        <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-[0.14em] text-[color:var(--brand-navy-heading)] uppercase md:text-3xl">
          Sentinela
        </p>
        <p className="font-[family-name:var(--font-heading)] text-sm font-semibold tracking-[0.28em] text-[color:var(--brand-lime)] uppercase md:text-base">
          Saúde ambiental
        </p>
      </div>
      <div
        className={
          align === "center"
            ? "mx-auto w-full max-w-[280px]"
            : "w-full max-w-[280px]"
        }
      >
        <LogoSwoosh />
      </div>
      <p className="max-w-md font-[family-name:var(--font-heading)] text-[0.65rem] font-medium tracking-[0.18em] text-[color:var(--brand-tagline-grey)] uppercase md:text-xs">
        Controle integrado de pragas
      </p>
    </div>
  );
}
