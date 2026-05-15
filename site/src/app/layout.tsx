import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { JsonLdLocalBusiness } from "@/components/json-ld";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sentinela Saúde Ambiental | Controle de pragas em Franca SP e região",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description:
    "Ambientes protegidos com segurança e responsabilidade. Controle integrado de pragas — residencial e empresarial. Orçamento rápido pelo WhatsApp em Franca SP.",
  keywords: [
    "dedetização Franca",
    "controle de pragas Franca SP",
    "dedetizadora Franca",
    "cupins Franca",
    "ratos insetos empresa",
    "Sentinela Saúde Ambiental",
  ],
  authors: [{ name: "Sentinela Saúde Ambiental" }],
  creator: "Sentinela Saúde Ambiental",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Sentinela Saúde Ambiental",
    title: "Sentinela Saúde Ambiental — Controle integrado de pragas",
    description:
      "Atendimento residencial e empresarial em Franca e região. Orçamento ágil pelo WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinela Saúde Ambiental",
    description:
      "Controle de pragas com método e transparência. Franca SP e região.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    ICBM: "-20.5386, -47.4008",
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
      <body className="flex min-h-full flex-col bg-white text-[color:var(--foreground)]">
        <JsonLdLocalBusiness />
        {children}
      </body>
    </html>
  );
}
