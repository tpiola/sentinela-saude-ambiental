import { BRAND, mapsEmbedUrl, mapsSearchUrl } from "@/lib/brand";

type MapEmbedProps = {
  title?: string;
  /** Rodapé / cartão: mapa baixo, área toda clicável para o link do Maps. */
  compact?: boolean;
  /** Destino do clique na variante compacta (padrão: `BRAND.mapsShortUrl`). */
  compactMapsLink?: string;
  className?: string;
};

export function MapEmbed({
  title = "Como chegar — mapa interativo",
  compact = false,
  compactMapsLink,
  className,
}: MapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const embedOrigin = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_ORIGIN?.trim();
  const placeQueryEnv = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_QUERY?.trim();
  const query =
    embedOrigin || placeQueryEnv || BRAND.mapsPlaceQuery;

  const embedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(query)}&language=pt-BR&zoom=16`
    : null;

  const mapsLink = compactMapsLink ?? BRAND.mapsShortUrl;
  const searchUrl = mapsSearchUrl();

  if (compact) {
    return (
      <div className={className}>
        <p
          id="footer-mapa-titulo"
          className="mb-3 font-[family-name:var(--font-heading)] text-sm font-bold text-white"
        >
          {title}
        </p>
        <div
          className="relative h-[180px] min-h-[180px] w-full overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-700/80 sm:h-[200px] sm:min-h-[200px] md:h-[210px]"
          aria-labelledby="footer-mapa-titulo"
        >
          {apiKey && embedSrc ? (
            <iframe
              src={embedSrc}
              title={`Mapa — ${BRAND.name}`}
              className="pointer-events-none h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <CompactMapFallback />
          )}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 rounded-2xl"
            aria-label="Abrir mapa da Sentinela no Google Maps"
          >
            <span className="sr-only">Abrir no Google Maps</span>
          </a>
        </div>
      </div>
    );
  }

  const fallbackEmbed = mapsEmbedUrl();

  return (
    <section
      className={`overflow-hidden rounded-2xl ring-1 ring-black/5 ${className ?? ""}`}
      aria-labelledby="mapa-titulo"
    >
      <div className="border-b border-[color:var(--brand-border)] bg-white px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="mapa-titulo"
              className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)] sm:text-xl"
            >
              {title}
            </h2>
            <p className="mt-1 text-sm text-[color:var(--brand-muted)]">
              {BRAND.address.addressLocality} — {BRAND.address.addressRegion} ·{" "}
              {BRAND.region}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-5 py-2.5 text-sm font-bold text-[color:var(--brand-navy-heading)] shadow-md transition hover:bg-[color:var(--brand-green-light)]"
            >
              <GpsIcon />
              Abrir no Google Maps
            </a>
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--brand-navy)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-surface)]"
            >
              Ver local
            </a>
          </div>
        </div>
      </div>

      <iframe
        title={`Mapa — ${BRAND.name}`}
        className="h-80 w-full sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src={apiKey && embedSrc ? embedSrc : fallbackEmbed}
      />

      {!apiKey && (
        <p className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-center text-xs text-[color:var(--brand-muted)]">
          Para mapa personalizado do Google Meu Negócio, defina{" "}
          <code className="rounded bg-white px-1">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>{" "}
          e opcionalmente{" "}
          <code className="rounded bg-white px-1">
            NEXT_PUBLIC_GOOGLE_MAPS_PLACE_QUERY
          </code>{" "}
          ou{" "}
          <code className="rounded bg-white px-1">
            NEXT_PUBLIC_GOOGLE_MAP_EMBED_ORIGIN
          </code>{" "}
          em <code className="rounded bg-white px-1">.env.local</code>.
        </p>
      )}
    </section>
  );
}

function CompactMapFallback() {
  return (
    <div className="flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-2 bg-slate-800 px-4 text-center ring-1 ring-slate-700/80">
      <MapsPinIcon className="h-9 w-9 text-[color:var(--brand-lime)]" />
      <span className="text-sm font-semibold text-white">
        Abrir no Google Maps
      </span>
      <span className="max-w-[14rem] text-xs text-slate-400">
        Toque em qualquer lugar desta área para abrir o ponto no app.
      </span>
    </div>
  );
}

function MapsPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function GpsIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
