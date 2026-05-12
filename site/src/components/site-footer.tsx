import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { MapEmbed } from "@/components/map-embed";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-white pt-16 pb-12">
      <div id="mapa" className="mx-auto max-w-6xl scroll-mt-24 px-4 md:px-6">
        <MapEmbed title="Como chegar — mapa interativo" />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide text-[color:var(--brand-navy)] uppercase">
              Sentinela
            </p>
            <p className="mt-1 text-sm font-medium text-[color:var(--brand-muted)]">
              Saúde ambiental
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-[color:var(--brand-muted)]">
              {BRAND.tagline}
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold text-[color:var(--brand-navy)]">
                WhatsApp:{" "}
              </span>
              <a
                className="text-[color:var(--brand-green-deep)] hover:underline"
                href={`tel:+${BRAND.phoneE164}`}
              >
                {BRAND.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-[color:var(--brand-navy)]">
                Email:{" "}
              </span>
              <a
                className="break-all hover:underline"
                href={`mailto:${BRAND.email}`}
              >
                {BRAND.email}
              </a>
            </p>
            <p className="text-[color:var(--brand-muted)]">{BRAND.region}</p>
            <div className="flex gap-4 pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[color:var(--brand-navy)] hover:text-[color:var(--brand-green-deep)]"
              >
                Instagram
              </a>
              <a
                href={BRAND.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[color:var(--brand-navy)] hover:text-[color:var(--brand-green-deep)]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--brand-border)] pt-8 text-xs text-[color:var(--brand-muted)] md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-center md:text-right">
            Desenvolvimento focado em performance e SEO local — experiência
            responsiva.
          </p>
        </div>

        <Link
          href="#inicio"
          className="mt-6 inline-block text-xs font-medium text-[color:var(--brand-green-deep)] hover:underline"
        >
          Voltar ao topo
        </Link>
      </div>
    </footer>
  );
}
