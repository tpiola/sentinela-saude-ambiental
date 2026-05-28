import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { JsonLdLocalBusiness } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
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
  "https://www.sentinelasaudeambiental.com.br";

const absoluteOgImageUrl = new URL(BRAND.ogImagePath, siteUrl).href;
const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sentinela Saúde Ambiental | Controle de pragas em Franca SP e região",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description:
    "Mais de 11 anos em Franca e região: controle integrado de pragas com laudo técnico e transparência. Orçamento gratuito pelo WhatsApp. Atendemos toda a região de Franca, mediante agendamento.",
  keywords: [
    "controle de pragas Franca",
    "dedetizadora Franca SP",
    "desinsetização Franca",
    "desratização Franca",
    "escorpião Franca",
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
        url: absoluteOgImageUrl,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — controle de pragas em Franca SP`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: BRAND.shortTagline,
    images: [absoluteOgImageUrl],
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
  verification: googleVerification ? { google: googleVerification } : undefined,
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
  viewportFit: "cover",
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
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white text-[color:var(--foreground)]">
        <JsonLdLocalBusiness />
        <Analytics />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
