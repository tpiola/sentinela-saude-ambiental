"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { BRAND } from "@/lib/brand";

type LogoProps = {
  className?: string;
};

/** Escudo com gradiente lima → navy (fallback quando o PNG oficial não carrega). */
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

type LogoImageMarkProps = LogoProps & {
  alt?: string;
  priority?: boolean;
  sizes?: string;
  /** Tamanho do escudo SVG se a imagem falhar ao carregar */
  fallbackShieldSize?: number;
};

/**
 * Marca oficial (PNG em `BRAND.logoPath`).
 * Em caso de erro no carregamento, exibe o escudo vetorial como fallback.
 */
export function LogoImageMark({
  className,
  alt = BRAND.name,
  priority,
  sizes = "200px",
  fallbackShieldSize = 52,
}: LogoImageMarkProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <LogoShieldMark size={fallbackShieldSize} className={className} />;
  }

  return (
    <Image
      src={BRAND.logoPath}
      alt={alt}
      width={1024}
      height={1024}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}

/** Header — apenas o PNG oficial, responsivo. */
export function LogoBrandCompact({ className }: LogoProps) {
  return (
    <div className={className ?? ""}>
      <LogoImageMark
        className="h-10 w-auto object-contain sm:h-12"
        alt={BRAND.name}
        priority
        fallbackShieldSize={44}
        sizes="(max-width: 640px) 120px, 144px"
      />
    </div>
  );
}

/** Hero / rodapé — PNG oficial + tipografia complementar + swoosh. */
export function LogoBrandFull({
  className,
  align = "center",
  markClassName = "max-h-28 w-auto object-contain md:max-h-32 lg:max-h-36",
  markPriority,
}: LogoProps & {
  align?: "left" | "center";
  /** Classes Tailwind só no `<Image>` da marca (ex.: altura máxima maior no hero). */
  markClassName?: string;
  /** Só o hero usa `false`; header compacto usa marca via `LogoBrandCompact` com priority. */
  markPriority?: boolean;
}) {
  const a =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const imageWrap =
    align === "center"
      ? "flex justify-center drop-shadow-md"
      : "drop-shadow-md";

  return (
    <div className={`flex flex-col gap-3 ${a} ${className ?? ""}`}>
      <div className={imageWrap}>
        <LogoImageMark
          className={markClassName}
          alt={BRAND.name}
          sizes="(max-width: 768px) 200px, 240px"
          fallbackShieldSize={72}
          priority={markPriority}
        />
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
