import Image from "next/image";
import Link from "next/link";
import { BRAND, mapsEmbedUrl, mapsDirectionsUrl, mapsSearchUrl } from "@/lib/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-navy)] text-white">
      <div className="relative flex justify-center pt-2">
        <div className="relative -mt-10 h-24 w-24">
          <div className="absolute inset-0 rounded-full bg-[color:var(--brand-navy)] ring-2 ring-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={BRAND.logoPath}
              alt={`Marca ${BRAND.name}`}
              width={96}
              height={96}
              className="h-full w-full scale-[0.85] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <div className="mb-10 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div className="border-b border-white/10 bg-white/5 px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-base font-bold text-white sm:text-lg">
                  Localização
                </h2>
                <p className="mt-0.5 text-sm text-white/50">
                  {BRAND.address.addressLocality} — {BRAND.address.addressRegion}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={mapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-4 py-2 text-sm font-bold text-[color:var(--brand-navy-heading)]"
                >
                  Abrir rotas
                </a>
                <a
                  href={mapsSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
          <iframe
            title={`Mapa — ${BRAND.name}`}
            className="h-64 w-full sm:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            src={mapsEmbedUrl()}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-black tracking-tight text-white">SENTINELA</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
              Controle de pragas com inspeção, orientação preventiva e registro do
              serviço conforme o escopo contratado.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
              Links
            </h2>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-white/60 hover:text-white">Início</Link></li>
              <li><Link href="/servicos" className="text-sm text-white/60 hover:text-white">Serviços</Link></li>
              <li><Link href="/sobre" className="text-sm text-white/60 hover:text-white">Sobre</Link></li>
              <li><Link href="/faq" className="text-sm text-white/60 hover:text-white">Dúvidas</Link></li>
              <li><Link href="/privacidade" className="text-sm text-white/60 hover:text-white">Privacidade</Link></li>
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-white">Conteúdos</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
              Contato
            </h2>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:+${BRAND.phoneE164}`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all text-sm text-white/60 hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="text-sm leading-6 text-white/40">{BRAND.addressFull}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:justify-between">
          <p className="text-xs text-white/40">
            © {year} {BRAND.name}. CNPJ: {BRAND.cnpj}
          </p>
          <p className="text-xs text-white/40">
            Sistema criado por{" "}
            <a
              href="https://www.reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--brand-lime)] underline underline-offset-2"
            >
              Rei das Vendas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
