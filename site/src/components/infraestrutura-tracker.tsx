"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordPageView } from "@/lib/infraestrutura/tracker";

/**
 * Rastreador leve de pageviews (localStorage) que alimenta a aba Analytics do
 * dashboard /infraestrutura. Não envia nada para fora — grava apenas no
 * navegador do visitante.
 */
export function InfraestruturaTracker() {
  const pathname = usePathname();

  useEffect(() => {
    recordPageView(pathname);
  }, [pathname]);

  return null;
}
