import {
  BRAND,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  mapsSearchUrl,
} from "@/lib/brand";

type MapEmbedProps = {
  title?: string;
  compact?: boolean;
};

export function MapEmbed({
  title = "Como chegar — mapa interativo",
  compact = false,
}: MapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const query =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_QUERY ?? BRAND.mapsPlaceQuery;

  const embedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(query)}&language=pt-BR&zoom=16`
    : mapsEmbedUrl();

  const directionsUrl = mapsDirectionsUrl();

  if (compact) {
    return (
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir localização da ${BRAND.name} no GPS`}
        className="group relative block overflow-hidden rounded-xl ring-1 ring-white/20"
      >
        <iframe
          title={`Mapa — ${BRAND.name}`}
          className="pointer-events-none h-36 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen={false}
          src={embedSrc}
          tabIndex={-1}
        />
        <span className="pointer-events-none absolute inset-0 bg-[color:var(--brand-navy)]/0 transition group-hover:bg-[color:var(--brand-navy)]/10" />
      </a>
    );
  }

  const searchUrl = mapsSearchUrl();

  return (
    <section
      className="overflow-hidden rounded-2xl ring-1 ring-black/5"
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
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-5 py-2.5 text-sm font-bold text-[color:var(--brand-navy-heading)] shadow-md transition hover:bg-[color:var(--brand-green-light)]"
            >
              <GpsIcon />
              Abrir GPS / Rotas
            </a>
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[color:var(--brand-navy)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-surface)]"
            >
              Ver no Google Maps
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
        src={embedSrc}
      />

      {!apiKey && (
        <p className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-center text-xs text-[color:var(--brand-muted)]">
          Para mapa personalizado do Google Meu Negócio, defina{" "}
          <code className="rounded bg-white px-1">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>{" "}
          em <code className="rounded bg-white px-1">.env.local</code>.
        </p>
      )}
    </section>
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
