import type { ReactNode } from "react";
import Link from "next/link";
import {
  FacebookBrandIcon,
  InstagramBrandIcon,
} from "@/components/social-brand-icons";
import { BRAND, mapsDirectionsUrl, whatsappHref } from "@/lib/brand";
import { MapEmbed } from "@/components/map-embed";
import { calendarBookingHref } from "@/lib/integrations";

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#faq", label: "Dúvidas" },
];

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="scroll-mt-28 border-t border-[color:var(--brand-border)] bg-slate-950 text-slate-300"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 md:px-6">
        <div id="mapa" className="scroll-mt-28">
          <MapEmbed title="Onde estamos — toque para abrir o GPS" />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
              {BRAND.name}
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              Controle de pragas profissional em Franca e região.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={BRAND.facebookUrl} label="Facebook">
                <FacebookBrandIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={BRAND.instagramUrl} label="Instagram">
                <InstagramBrandIcon className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
              Menu rápido
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition hover:text-[color:var(--brand-lime)]"
                  >
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <span className="block font-bold text-white">WhatsApp</span>
                <a
                  href={whatsappHref()}
                  className="text-lg text-[color:var(--brand-lime)] hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block font-bold text-white">E-mail</span>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all hover:text-[color:var(--brand-lime)]"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <span className="block font-bold text-white">Horário</span>
                <span className="text-slate-400">
                  {BRAND.openingHours.weekdays}
                </span>
                <br />
                <span className="text-slate-400">
                  {BRAND.openingHours.sunday}
                </span>
              </li>
              <li>
                <span className="block font-bold text-white">Telefone</span>
                <a
                  href={`tel:+${BRAND.phoneE164}`}
                  className="hover:text-[color:var(--brand-lime)]"
                >
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block font-bold text-white">Área</span>
                <span className="text-slate-400">
                  Atendimento em Franca e Região.
                </span>
              </li>
              <li>
                <a
                  href={calendarBookingHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-full border border-[color:var(--brand-lime)]/50 px-5 py-2 font-semibold text-[color:var(--brand-lime)] hover:bg-[color:var(--brand-lime)]/10"
                >
                  Agendar agora
                </a>
              </li>
              <li>
                <a
                  href={mapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[color:var(--brand-lime)] hover:underline"
                >
                  Traçar rota no GPS →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-xs text-slate-400">
          <p className="font-semibold text-slate-300">{BRAND.addressFull}</p>
          <p className="mt-1">CNPJ {BRAND.cnpj} · CNAE 8122-2/00</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-[11px] font-semibold text-slate-300">
              ✓ ANVISA RDC 622/2022
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-[11px] font-semibold text-slate-300">
              ✓ Empresa licenciada
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-[11px] font-semibold text-slate-300">
              ✓ Vigilância Sanitária
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>
          <p>Franca — SP</p>
        </div>

        <Link
          href="#inicio"
          className="mt-6 inline-block text-xs font-medium text-[color:var(--brand-lime)] hover:underline"
        >
          Voltar ao topo
        </Link>
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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-[color:var(--brand-lime)] hover:text-[color:var(--brand-lime)]"
    >
      {children}
    </a>
  );
}
