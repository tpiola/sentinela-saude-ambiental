import Link from "next/link";
import { BRAND, mapsEmbedUrl, mapsDirectionsUrl, mapsSearchUrl } from "@/lib/brand";

export function SiteFooter() {
  const ano = new Date().getFullYear();
  const embedSrc = mapsEmbedUrl();
  const directionsUrl = mapsDirectionsUrl();
  const searchUrl = mapsSearchUrl();

  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-navy)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        {/* Google Maps */}
        <div className="mb-10 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div className="border-b border-white/10 bg-white/5 px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Como chegar
                </h3>
                <p className="mt-0.5 text-sm text-white/50">
                  {BRAND.address.addressLocality} — {BRAND.address.addressRegion}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-4 py-2 text-sm font-bold text-[color:var(--brand-navy-heading)] transition hover:brightness-110"
                >
                  Abrir GPS / Rotas
                </a>
                <a
                  href={searchUrl}
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
            src={embedSrc}
          />
        </div>

        {/* Grid columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-black tracking-tight text-white">SENTINELA</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Controle integrado de pragas urbanas com laudo técnico ANVISA, garantia contratual e responsabilidade ambiental.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)] mb-4">Links</h4>
            <ul className="space-y-2.5">
              <li><a href="/" className="text-sm text-white/60 hover:text-white transition-colors">Início</a></li>
              <li><a href="/servicos" className="text-sm text-white/60 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="/sobre" className="text-sm text-white/60 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="/faq" className="text-sm text-white/60 hover:text-white transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          {/* Contato + Crédito */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)] mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`https://wa.me/${BRAND.phoneE164}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.005a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>16 {BRAND.phoneDisplay.replace("(", "").replace(") ", " ")}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="text-sm text-white/60 hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="text-sm text-white/40">{BRAND.addressFull}</li>
            </ul>
          </div>
        </div>

        {/* Divider + Créditos */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between">
          <p className="text-xs text-white/40">
            &copy; {ano} Sentinela Saúde Ambiental. CNPJ: {BRAND.cnpj}
          </p>
          <p className="text-xs text-white/40">
            Sistema criado por{" "}
            <a
              href="https://www.reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--brand-lime)] hover:brightness-110 underline underline-offset-2 transition-all"
            >
              Rei das Vendas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
