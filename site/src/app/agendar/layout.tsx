import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Solicitar avaliação de controle de pragas em Franca",
  description:
    "Informe a ocorrência, o tipo de imóvel e o bairro para continuar a avaliação pelo WhatsApp.",
  alternates: { canonical: `${siteUrl}/agendar` },
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
