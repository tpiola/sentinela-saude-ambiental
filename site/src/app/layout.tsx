import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { JsonLdLocalBusiness } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
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
      "Sentinela Saúde Ambiental | Controle de Pragas em Franca SP",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description:
    "Controle integrado de pragas em Franca SP com laudo técnico ANVISA e garantia. Dedetização, desinsetização, desratização e controle de escorpiões. Atendimento residencial e empresarial com mais de 11 anos de experiência.",
  keywords: [
    "dedetização Franca",
    "dedetizadora Franca SP",
    "controle de pragas Franca",
    "controle de pragas Franca SP",
    "escorpião Franca",
    "dedetização Franca SP",
    "desinsetização Franca",
    "desratização Franca",
    "descupinização Franca",
    "limpeza caixa d'água Franca",
    "laudo Vigilância Sanitária Franca",
    "controle de pragas Batatais",
    "controle de pragas Orlândia",
    "controle de pragas Ituverava",
    "controle de pragas Cristais Paulista",
    "laudo ANVISA Franca",
    "PMOC Franca",
    "contrato controle de pragas empresas Franca",
    "sentinela saúde ambiental",
    "empresa de dedetização Franca SP",
    "controle de escorpiões Franca",
    "dedetização Centro Franca",
    "dedetização Jardim Francano Franca",
    "dedetização City Petrópolis Franca",
    "dedetização Parque Progresso Franca",
    "controle de pragas Residencial Baldassari Franca",
    "dedetização Vila Santa Terezinha Franca",
    "dedetização Jardim Panorama Franca",
    "dedetização Vila Aparecida Franca",
    "escorpião Residencial Baldassari Franca",
    "controle de pragas residencial Franca",
    "dedetizadora perto de mim Franca SP",
  ],
  authors: [{ name: BRAND.name, url: siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "Saúde ambiental",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} — Controle de pragas em Franca SP com laudo ANVISA`,
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
      <body className="flex min-h-full flex-col bg-white text-[color:var(--foreground)]">
        <JsonLdLocalBusiness />
        <Analytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
