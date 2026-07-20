import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND } from "@/lib/brand";
import { getPestBySlug, getAllPestSlugs, type PestData } from "@/lib/pests";
import { PestPageClient } from "./page-client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sentinelasaudeambiental.com.br";

interface PestPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPestSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PestPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPestBySlug(slug);
  if (!pest) return {};

  const title = `${pest.name} — Controle Profissional em Franca SP | ${BRAND.name}`;
  const description =
    `${pest.description.substring(0, 155).replace(/\.$/, "")}. ` +
    `Controle profissional com orientação técnica e documentação do serviço em Franca e região.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/pragas/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/pragas/${slug}`,
      locale: "pt_BR",
      siteName: BRAND.name,
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
    },
    keywords: pest.seoKeywords,
  };
}

export default async function PestPage({ params }: PestPageProps) {
  const { slug } = await params;
  const pest = getPestBySlug(slug);

  if (!pest) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <PestPageClient pest={pest} />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
