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
                <a href={`https://wa.me/${BRAND.phoneE164}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  WhatsApp: ({BRAND.phoneDisplay})
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
