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
  "https://sentinelasaudeambiental.vercel.app";

const absoluteLogoUrl = new URL(BRAND.logoPath, siteUrl).href;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sentinela Saúde Ambiental | Controle de pragas em Franca SP e região",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description:
    "Mais de 11 anos de experiência em Franca e região: controle integrado de pragas com laudo técnico e transparência para exigências da Vigilância Sanitária. Desinsetização, desratização e prevenção de escorpiões — resposta rápida no WhatsApp.",
  keywords: [
    "controle de pragas Franca",
    "controle de pragas região Franca",
    "dedetizadora Franca SP",
    "desinsetização Franca",
    "desratização Franca",
    "descupinização Franca",
    "escorpião Franca",
    "limpeza caixa d'água Franca",
    "laudo Vigilância Sanitária Franca",
    "contrato empresa controle de pragas",
    "Batatais",
    "Orlândia",
    "sentinela saúde ambiental",
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
    title: `${BRAND.name} — Controle integrado de pragas`,
    description: BRAND.tagline,
    images: [
      {
        url: absoluteLogoUrl,
        width: 1024,
        height: 1024,
        alt: BRAND.name,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: BRAND.shortTagline,
    images: [absoluteLogoUrl],
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
  },
};

export const viewport: Viewport = {
  themeColor: "#002d5b",
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
