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
  "https://www.sentinelasaudeambiental.com.br";

const absoluteLogoUrl = new URL(BRAND.logoPath, siteUrl).href;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Dedetizadora em Franca SP | Sentinela Saude Ambiental — 11 anos, ANVISA",
    template: "%s | Sentinela Saude Ambiental",
  },
  description:
    "Dedetizadora em Franca SP com mais de 11 anos. Desinsetizacao, desratizacao, escorpioes e limpeza de caixa d'agua com laudo tecnico ANVISA. Orcamento gratis no WhatsApp: (16) 99374-7147.",
  keywords: [
    "dedetizadora Franca SP",
    "controle de pragas Franca",
    "desinsetizacao Franca",
    "desratizacao Franca",
    "descupinizacao Franca",
    "escorpiao Franca SP",
    "limpeza caixa dagua Franca",
    "laudo Vigilancia Sanitaria Franca",
    "dedetizadora Batatais",
    "dedetizadora Orlandia",
    "contrato empresa controle de pragas Franca",
    "sentinela saude ambiental",
    "dedetizacao residencial Franca",
    "dedetizacao empresarial Franca",
  ],
  authors: [{ name: BRAND.name, url: siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "Saude ambiental",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: BRAND.name,
    title: "Dedetizadora em Franca SP | Sentinela Saude Ambiental",
    description:
      "Desinsetizacao, desratizacao, escorpioes, cupins e limpeza de caixa d'agua em Franca SP. Laudo tecnico ANVISA. Orcamento gratis.",
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
    title: "Dedetizadora em Franca SP | Sentinela Saude Ambiental",
    description:
      "Controle de pragas profissional em Franca SP. Laudo ANVISA. Orcamento gratis no WhatsApp.",
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
    // google: "cole-o-codigo-do-search-console",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    "geo.position": "-20.5401;-47.4009",
    ICBM: "-20.5401, -47.4009",
    "business:contact_data:street_address": BRAND.address.streetAddress,
    "business:contact_data:locality": "Franca",
    "business:contact_data:region": "SP",
    "business:contact_data:postal_code": BRAND.address.postalCode,
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": BRAND.phoneDisplay,
    "business:contact_data:email": BRAND.email,
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
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="icon" href="/brand/logo-brasao.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/logo-brasao.png" />
        <link rel="shortcut icon" href="/brand/logo-brasao.png" />
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
