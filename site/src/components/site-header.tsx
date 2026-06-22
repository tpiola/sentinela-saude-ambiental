"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoBrandCompact } from "@/components/logo-sentinel";
import {
  FacebookBrandIcon,
  InstagramBrandIcon,
} from "@/components/social-brand-icons";
import { BRAND, whatsappHref } from "@/lib/brand";

const pestDropdownItems = [
  { href: "/pragas/escorpiao", label: "Escorpiões", icon: "🦂" },
  { href: "/pragas/baratas", label: "Baratas", icon: "🪳" },
  { href: "/pragas/ratos", label: "Ratos", icon: "🐀" },
  { href: "/pragas/cupins", label: "Cupins", icon: "🪵" },
  { href: "/pragas/aranhas", label: "Aranhas", icon: "🕷️" },
  { href: "/pragas/formigas", label: "Formigas", icon: "🐜" },
  { href: "/pragas/mosquitos", label: "Mosquitos", icon: "🦟" },
];

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/condominio", label: "Condomínios" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "Dúvidas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pestsOpen, setPestsOpen] = useState(false);
  const [pestsMobileOpen, setPestsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[color:var(--brand-navy)]/95 py-2 shadow-lg backdrop-blur-md"
          : "bg-[color:var(--brand-navy)]/90 py-3 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="/#inicio"
          className="min-w-0 shrink"
          onClick={() => {
            setOpen(false);
            setPestsMobileOpen(false);
          }}
        >
          <LogoBrandCompact variant="dark" />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-4 text-sm font-semibold text-white/90 lg:flex"
          aria-label="Principal"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-[color:var(--brand-lime)]"
            >
              {l.label}
            </Link>
          ))}

          {/* Pragas dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPestsOpen(true)}
            onMouseLeave={() => setPestsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-[color:var(--brand-lime)]"
              aria-expanded={pestsOpen}
              aria-haspopup="true"
              onClick={() => setPestsOpen((v) => !v)}
            >
              Pragas
              <svg
                className={`h-3 w-3 transition-transform ${pestsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {pestsOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-[color:var(--brand-lime)]/20 bg-[color:var(--brand-navy)] shadow-2xl ring-1 ring-white/10">
                <div className="rounded-t-xl bg-[color:var(--brand-lime)]/10 px-4 py-2 text-xs font-bold tracking-wider text-[color:var(--brand-lime)] uppercase">
                  Controle de Pragas
                </div>
                <div className="py-1">
                  {pestDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setPestsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-[color:var(--brand-lime)]/10 hover:text-[color:var(--brand-lime)]"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${BRAND.phoneE164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[36px] items-center gap-1.5 rounded-full border border-[color:var(--brand-lime)]/40 px-3.5 py-1.5 text-xs font-bold text-[color:var(--brand-lime)] transition hover:bg-[color:var(--brand-lime)]/10 md:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.005a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {BRAND.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => {
              setOpen((v) => !v);
              if (!open) setPestsMobileOpen(false);
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[color:var(--brand-navy)] transition-all duration-300 lg:hidden ${
          open ? "max-h-[min(85vh,700px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile: Pragas accordion */}
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/10"
            onClick={() => setPestsMobileOpen((v) => !v)}
            aria-expanded={pestsMobileOpen}
          >
            <span>Pragas</span>
            <svg
              className={`h-4 w-4 transition-transform ${pestsMobileOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              pestsMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {pestDropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  setPestsMobileOpen(false);
                }}
                className="flex items-center gap-3 rounded-lg py-2.5 pr-3 pl-10 text-base font-semibold text-white/80 hover:bg-white/10"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-lime)] font-bold text-[color:var(--brand-navy)]"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.005a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
