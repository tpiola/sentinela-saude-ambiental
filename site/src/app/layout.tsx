import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { ScrollTopButton } from "@/components/scroll-top-button";
import { VercelTelemetry } from "@/components/vercel-telemetry";
import { BRAND } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site";

const heading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Dedetização em Franca SP | Sentinela Saúde Ambiental",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description:
    "Controle profissional de pragas em Franca e região para residências, condomínios e empresas. Solicite orientação e diagnóstico inicial pelo WhatsApp.",
  authors: [{ name: BRAND.name, url: siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "Saúde ambiental",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} — Controle de pragas em Franca SP`,
    description: BRAND.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Controle de pragas Franca SP`,
    description: BRAND.shortTagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "p3n-lwsrdeseDPAh7K57nFTjRL30nbn6UVhyX_VhZdU",
  },
};

export const viewport: Viewport = {
  themeColor: "#002347",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${heading.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[color:var(--foreground)] pb-16 sm:pb-0">
        <a
          href="#conteudo"
          className="sr-only fixed left-4 top-4 z-[100] bg-white px-4 py-3 font-bold text-[color:var(--brand-navy)] shadow-lg focus:not-sr-only"
        >
          Pular para o conteúdo
        </a>
        <Analytics />
        {children}
        <CookieBanner />
        <MobileStickyBar />
        <ScrollTopButton />
        <VercelTelemetry />
      </body>
    </html>
  );
}
