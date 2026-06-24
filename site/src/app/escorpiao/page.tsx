import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND } from "@/lib/brand";
import { EscorpiaoHero, EscorpiaoPerigo, EscorpiaoPreventivo, EscorpiaoCobertura, EscorpiaoFaq, EscorpiaoCtaFinal } from "./page-client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

export const metadata: Metadata = {
  title: "Controle de Escorpiões em Franca SP | Sentinela Saúde Ambiental",
  description:
    "Proteja sua família contra escorpiões em Franca SP. 777 acidentes em 2024. Plano preventivo out-mar, laudo técnico ANVISA e atendimento rápido no WhatsApp.",
  alternates: {
    canonical: `${siteUrl}/escorpiao`,
  },
  openGraph: {
    title: "Controle de Escorpiões em Franca SP | Sentinela Saúde Ambiental",
    description:
      "Proteja sua família contra escorpiões em Franca SP. 777 acidentes em 2024. Plano preventivo out-mar, laudo técnico ANVISA e atendimento rápido no WhatsApp.",
    url: `${siteUrl}/escorpiao`,
    locale: "pt_BR",
    siteName: BRAND.name,
    type: "website",
  },
  twitter: {
    title: "Controle de Escorpiões em Franca SP | Sentinela Saúde Ambiental",
    description:
      "Proteja sua família contra escorpiões em Franca SP. 777 acidentes em 2024. Plano preventivo out-mar, laudo técnico ANVISA e atendimento rápido no WhatsApp.",
    card: "summary_large_image",
  },
  keywords: [
    "escorpião Franca",
    "controle de escorpiões Franca",
    "dedetizadora escorpião Franca SP",
    "acidente escorpião Franca 2024",
    "plano preventivo escorpião",
    "escorpião amarelo Franca",
    "Sentinela Saúde Ambiental escorpião",
  ],
};

export default function EscorpiaoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <EscorpiaoHero />
        <EscorpiaoPerigo />
        <EscorpiaoPreventivo />
        <EscorpiaoCobertura />
        <EscorpiaoFaq />
        <EscorpiaoCtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
