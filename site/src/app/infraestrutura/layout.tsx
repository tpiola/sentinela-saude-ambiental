import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área restrita",
  robots: { index: false, follow: false },
};

export default function InfraestruturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
