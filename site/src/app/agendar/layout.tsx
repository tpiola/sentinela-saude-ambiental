import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Solicitar avaliação de controle de pragas em Franca",
  description:
    "Informe a ocorrência, o tipo de imóvel e o bairro para continuar a avaliação pelo WhatsApp.",
  path: "/agendar",
});

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
