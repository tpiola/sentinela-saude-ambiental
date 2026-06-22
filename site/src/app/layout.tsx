import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { JsonLdLocalBusiness } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { ChatRogerio } from "@/components/chat-rogerio";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { BRAND } from "@/lib/brand";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

const absoluteLogoUrl = new URL(BRAND.logoPath, siteUrl).href;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sentinela Saúde Ambiental | Dedetização em Franca SP — Escorpião, Barata, Cupim",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description:
    "Dedetização em Franca SP especializada em escorpião. Mais rápidos da cidade — resolvemos em menos de 1h. Barata, cupim, rato. Laudo ANVISA e garantia. Chama agora.",
  keywords: [
    "escorpião Franca",
    "dedetização Franca",
    "dedetizadora Franca SP",
    "controle de pragas Franca",
    "escorpião Franca SP",
    "dedetização Franca SP urgente",
    "desinsetização Franca",
    "desratização Franca",
    "descupinização Franca",
    "controle de escorpiões Franca",
    "laudo Vigilância Sanitária Franca",
    "dedetização residencial Franca",
    "dedetização empresarial Franca",
    "laudo ANVISA Franca",
    "empresa de dedetização Franca SP",
    "controle de pragas Batatais",
    "controle de pragas Orlândia",
    "controle de pragas Ituverava",
    "controle de pragas Cristais Paulista",
    "sentinela saúde ambiental",
    "dedetização Centro Franca",
    "dedetização Jardim Francano Franca",
    "dedetização City Petrópolis Franca",
    "dedetização Parque Progresso Franca",
    "dedetização perto de mim Franca SP",
  ],
  authors: [{ name: BRAND.name, url: siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "Saúde ambiental",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
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
    title: `${BRAND.name} — Dedetização em Franca SP — Escorpião resolvido em menos de 1h`,
    description: BRAND.tagline,
    images: [
      {
        url: "/media/sentinela/drive/dedetizacao-centro-franca-sp.webp",
        width: 1200,
        height: 630,
        alt: "Sentinela Saúde Ambiental — Controle profissional de pragas em Franca SP",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Controle de pragas Franca SP`,
    description: BRAND.shortTagline,
    images: ["/media/sentinela/drive/dedetizacao-centro-franca-sp.webp"],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    "geo.position": `${BRAND.geo.latitude};${BRAND.geo.longitude}`,
    ICBM: `${BRAND.geo.latitude}, ${BRAND.geo.longitude}`,
    "business:contact_data:locality": "Franca",
    "business:contact_data:region": "SP",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": BRAND.phoneDisplay,
    "business:contact_data:postal_code": BRAND.address.postalCode,
    "business:contact_data:street_address": BRAND.address.streetAddress,
    "twitter:domain": "sentinelasaudeambiental.com.br",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className="flex min-h-full flex-col bg-white text-[color:var(--foreground)] pb-16 sm:pb-0">
        <JsonLdLocalBusiness />
        <Analytics />
        {children}
        <CookieBanner />
        <ChatRogerio />
        <MobileStickyBar />
      </body>
    </html>
  );
}
