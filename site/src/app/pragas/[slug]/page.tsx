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
const socialImage =
  "/media/sentinela/drive/dedetizacao-centro-franca-sp.webp";

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
  const title = `${pest.name} — Controle Profissional em Franca SP`;
  const description = `Controle profissional de ${pestName} em Franca e região, com inspeção do ambiente, orientação técnica e tratamento definido conforme a ocorrência.`;
  const canonical = `${siteUrl}/pragas/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description,
      url: canonical,
      locale: "pt_BR",
      siteName: BRAND.name,
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — controle de ${pestName} em Franca SP`,
        },
      ],
    },
    twitter: {
      title: `${title} | ${BRAND.name}`,
      description,
      card: "summary_large_image",
      images: [socialImage],
    },
    keywords: pest.seoKeywords,
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
