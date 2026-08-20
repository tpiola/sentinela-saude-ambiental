import type { CSSProperties } from "react";

/**
 * Linha de serviço por diagnóstico (contexto → resposta técnica).
 * @startingPoint section="Blocos de conteúdo" subtitle="Linha numerada de serviço com prova visual" viewport="700x180"
 */
export interface ServiceRowProps {
  /** "01" … "05" — mono, lima escuro. */
  number: string;
  title: string;
  /** Onde a ocorrência aparece (sintoma). */
  context: string;
  /** O que a Sentinela faz — nunca promessa de prazo que o escopo não garante. */
  response: string;
  thumbSrc?: string;
  thumbAlt?: string;
  href: string;
  ctaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function ServiceRow(props: ServiceRowProps): JSX.Element;
