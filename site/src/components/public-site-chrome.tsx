"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Esconde os widgets públicos (banner de cookies, barra fixa mobile, botão de
 * voltar ao topo) dentro da área restrita /infraestrutura, que possui layout
 * próprio.
 */
export function PublicSiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/infraestrutura")) return null;

  return <>{children}</>;
}
