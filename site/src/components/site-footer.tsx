import type { ReactNode } from "react";
import Link from "next/link";
import {
  FacebookBrandIcon,
  InstagramBrandIcon,
} from "@/components/social-brand-icons";
import {
  BRAND,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  whatsappHref,
} from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

const quickLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Quem somos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#empresas", label: "Para empresas" },
  { href: "/#faq", label: "Dúvidas" },
];

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="scroll-mt-28 border-t border-white/5 bg-slate-950 text-slate-300"
    >
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-white">
                {BRAND.name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Controle de pragas profissional em Franca e região.
              </p>
              <div className="mt-4 flex gap-3">
                <SocialLink href={BRAND.facebookUrl} label="Facebook">
                  <FacebookBrandIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={BRAND.instagramUrl} label="Instagram">
                  <InstagramBrandIcon className="h-5 w-5" />
                </SocialLink>
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-white">
                Menu
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="transition hover:text-[color:var(--brand-lime)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-white">
                Atendimento
              </h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li>
                  <a
                    href={whatsappHref()}
                    className="font-semibold text-[color:var(--brand-lime)] hover:underline"
                  >
                    WhatsApp: {BRAND.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:+${BRAND.phoneE164}`}
                    className="hover:text-[color:var(--brand-lime)]"
                  >
                    Tel: {BRAND.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="break-all hover:text-[color:var(--brand-lime)]"
                  >
                    {BRAND.email}
                  </a>
                </li>
                <li className="text-xs text-slate-400">
                  {BRAND.openingHours.weekdays}
                  <br />
                  {BRAND.openingHours.sunday}
                </li>
                <li className="flex gap-2 pt-1">
                  <a
                    href={calendarBookingHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[color:var(--brand-lime)]/40 px-4 py-1.5 text-xs font-semibold text-[color:var(--brand-lime)] hover:bg-[color:var(--brand-lime)]/10"
                  >
                    Agendar
                  </a>
                  <a
                    href={mapsDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-300 hover:border-[color:var(--brand-lime)]"
                  >
                    GPS →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="mapa" className="scroll-mt-28">
            <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
              <iframe
                title={`Mapa — ${BRAND.name}`}
                className="h-48 w-full lg:h-full lg:min-h-[240px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src={mapsEmbedUrl()}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-xs text-slate-400">
          <p className="font-medium text-slate-300">{BRAND.addressFull}</p>
          <p className="mt-1">CNPJ {BRAND.cnpj} · CNAE 8122-2/00</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
              ✓ ANVISA RDC 622
            </span>
            <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
              ✓ Licenciada
            </span>
            <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
              ✓ Vig. Sanitária
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}
          </p>
          <Link
            href="/#inicio"
            className="font-medium text-[color:var(--brand-lime)] hover:underline"
          >
            ↑ Voltar ao topo
          </Link>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-300 transition hover:border-[color:var(--brand-lime)] hover:text-[color:var(--brand-lime)]"
    >
      {children}
    </a>
  );
}
