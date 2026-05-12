type MapEmbedProps = {
  title?: string;
};

// Incorporação oficial (Maps Embed API). Sem chave, exibimos instruções em vez de falhar o build.
export function MapEmbed({ title = "Como nos encontrar" }: MapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const query =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_QUERY ?? "Centro, Brasil";

  if (!apiKey) {
    return (
      <section className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Copie{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
            site/.env.example
          </code>{" "}
          para{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
            site/.env.local
          </code>{" "}
          e defina{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>
          .
        </p>
      </section>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(query)}`;

  return (
    <section className="overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
      <div className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
      </div>
      <iframe
        title="Mapa do estabelecimento"
        className="h-96 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      />
    </section>
  );
}
