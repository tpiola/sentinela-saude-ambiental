import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const socialTitle = title.includes(BRAND.name)
    ? title
    : `${title} | ${BRAND.name}`;

  return {
    title: absoluteTitle ? { absolute: socialTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: canonical,
      siteName: BRAND.name,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
