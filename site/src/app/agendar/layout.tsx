import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agende seu serviço — Sentinela Saúde Ambiental Franca SP",
  description:
    "Preencha o formulário e receba o contato no WhatsApp. Agende agora sua dedetização em Franca SP.",
  alternates: { canonical: "/agendar" },
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
