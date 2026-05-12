import { LocalShowcase3D } from "@/components/local-showcase-3d";
import { MapEmbed } from "@/components/map-embed";
import { ParallaxHero } from "@/components/parallax-hero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <ParallaxHero />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-blue-700 uppercase dark:text-blue-400">
              sentinela-saude-ambiental
            </p>
            <h2 className="mt-2 text-3xl leading-tight font-semibold">
              Serviços de saúde ambiental com foco na sua região
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
              Esta página é um ponto de partida: parallax no topo, bloco 3D
              interativo e mapa embutido quando você configurar a chave pública
              do Google Maps.
            </p>
          </div>
          <LocalShowcase3D />
        </section>

        <MapEmbed title="Localização" />

        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
          <h3 className="text-xl font-semibold">Próximos passos</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
            <li>
              Siga{" "}
              <a
                className="font-medium text-blue-700 underline-offset-4 hover:underline dark:text-blue-400"
                href="https://console.cloud.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Google Cloud Console
              </a>{" "}
              para habilitar as APIs Maps Embed e Places e restringir a chave ao
              seu domínio.
            </li>
            <li>
              Consulte{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">
                docs/configuracao-local.md
              </code>{" "}
              para GitHub no Cursor, atalhos e extensões.
            </li>
            <li>
              Rode o projeto:{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">
                cd site && npm run dev
              </code>
              .
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
