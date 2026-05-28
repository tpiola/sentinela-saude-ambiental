"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoBrandCompact } from "@/components/logo-sentinel";
import {
  FacebookBrandIcon,
  InstagramBrandIcon,
} from "@/components/social-brand-icons";
import { BRAND, whatsappHref } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#diagnostico", label: "Diagnóstico" },
  { href: "/#empresas", label: "Empresas" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/#mapa", label: "Como chegar" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const agendaHref = calendarBookingHref();

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
          onClick={() => setOpen(false)}
        >
          <LogoBrandCompact variant="dark" />
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-semibold text-white/90 lg:flex"
          aria-label="Principal"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-[color:var(--brand-lime)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-white/60 hover:text-[color:var(--brand-lime)] md:inline-flex"
            aria-label="Instagram"
          >
            <InstagramBrandIcon className="h-5 w-5" />
          </a>
          <a
            href={BRAND.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-white/60 hover:text-[color:var(--brand-lime)] md:inline-flex"
            aria-label="Facebook"
          >
            <FacebookBrandIcon className="h-5 w-5" />
          </a>
          <a
            href={agendaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[color:var(--brand-lime)] px-4 py-2 text-sm font-bold text-[color:var(--brand-navy-heading)] shadow-md transition hover:bg-[color:var(--brand-green-light)] sm:inline-flex"
          >
            Agendar agora
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[color:var(--brand-navy)] transition-all duration-300 lg:hidden ${
          open ? "max-h-[min(85vh,520px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href={agendaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-[48px] items-center justify-center rounded-xl bg-[color:var(--brand-lime)] font-bold text-[color:var(--brand-navy-heading)]"
            onClick={() => setOpen(false)}
          >
            Agendar agora
          </a>
          <a
            href={whatsappHref()}
            className="flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[color:var(--brand-lime)]/50 font-semibold text-[color:var(--brand-lime)]"
            onClick={() => setOpen(false)}
          >
            WhatsApp — diagnóstico gratuito
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
