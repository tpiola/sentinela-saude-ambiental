import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND } from "@/lib/brand";
import { getPestBySlug, getAllPestSlugs } from "@/lib/pests";
import { getSiteUrl } from "@/lib/site";
import { PestPageClient } from "./page-client";

const siteUrl = getSiteUrl();

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

  const pestName = pest.name.toLowerCase();
  const title = `Controle de ${pestName} em Franca SP`;
  const description = `Controle profissional de ${pestName} em Franca e região, com inspeção do ambiente, orientação técnica e tratamento definido conforme a ocorrência.`;
  const canonical = `${siteUrl}/pragas/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description,
      url: canonical,
      locale: "pt_BR",
      siteName: BRAND.name,
      type: "website",
    },
    twitter: {
      title: `${title} | ${BRAND.name}`,
      description,
      card: "summary_large_image",
    },
  };
}

export default async function PestPage({ params }: PestPageProps) {
  const { slug } = await params;
  const pest = getPestBySlug(slug);

  if (!pest) notFound();

  return (
    <>
      <SiteHeader />
      <PestPageClient pest={pest} />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
