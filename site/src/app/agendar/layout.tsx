import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

export const metadata: Metadata = {
  title: "Agende seu serviço — Sentinela Saúde Ambiental Franca SP",
  description:
    "Preencha o formulário e receba o contato no WhatsApp. Agende agora sua dedetização em Franca SP.",
  alternates: { canonical: `${siteUrl}/agendar` },
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
