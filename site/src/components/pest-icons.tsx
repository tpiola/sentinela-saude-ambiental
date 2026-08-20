import type { SVGProps } from "react";

type PestIconName = "baratas" | "ratos" | "escorpiao" | "formigas" | "aranhas" | "mosquitos" | "moscas" | "cupins" | "caixa-dagua";

const paths: Record<PestIconName, React.ReactNode> = {
  baratas: (
    <>
      {/* Corpo oval alongado */}
      <ellipse cx="12" cy="15" rx="7" ry="4" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Cabeça */}
      <ellipse cx="12" cy="9" rx="3" ry="2.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Antenas */}
      <path d="M10 7.5Q7 4 5 5" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14 7.5Q17 4 19 5" strokeWidth="1.2" strokeLinecap="round" />
      {/* Patas */}
      <path d="M7 13L3 12M7 15L4 16M7 17L5 19" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17 13L21 12M17 15L20 16M17 17L19 19" strokeWidth="1.2" strokeLinecap="round" />
      {/* Linha dorsal */}
      <path d="M12 9v6" strokeWidth="1" strokeOpacity="0.4" />
    </>
  ),
  ratos: (
    <>
      {/* Corpo */}
      <ellipse cx="13" cy="15" rx="7" ry="4.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Cabeça */}
      <ellipse cx="13" cy="10" rx="3.5" ry="3" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Orelhas */}
      <circle cx="10" cy="8" r="2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="16" cy="8" r="2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      {/* Olho */}
      <circle cx="13" cy="9.5" r="0.6" strokeWidth="1.2" fill="currentColor" />
      {/* Focinho */}
      <path d="M13 7q0-2 1-3" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bigodes */}
      <path d="M10 9.5L6 8M10 10L6 11M10 10.5L7 13" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M16 9.5L20 8M16 10L20 11M16 10.5L19 13" strokeWidth="0.8" strokeLinecap="round" />
      {/* Cauda */}
      <path d="M20 15q4 0 3-4" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </>
  ),
  escorpiao: (
    <>
      {/* Corpo segmentado */}
      <ellipse cx="12" cy="15" rx="4" ry="6" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Segmentos do corpo */}
      <path d="M9 13h6M8 15h8M9 17h6" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Cabeça + quelíceras */}
      <ellipse cx="12" cy="8" rx="2.5" ry="2" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Olhos */}
      <circle cx="10.5" cy="7.5" r="0.5" strokeWidth="1" fill="currentColor" />
      <circle cx="13.5" cy="7.5" r="0.5" strokeWidth="1" fill="currentColor" />
      {/* Pinças (pedipalpos) */}
      <path d="M9 8Q4 6 3 9Q3 11 5 10Q7 9 9 8.5" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15 8Q20 6 21 9Q21 11 19 10Q17 9 15 8.5" strokeWidth="1.4" strokeLinecap="round" />
      {/* Metassoma (cauda) em arco */}
      <path d="M12 21q0 2 1 3q1 2 3 1.5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Telson (ferrão) */}
      <path d="M16 25.5q0.5 0 1-0.5" strokeWidth="1.8" strokeLinecap="round" />
      {/* Patas */}
      <path d="M8 13L5 11M8 15L4 16M8 17L5 20" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 13L19 11M16 15L20 16M16 17L19 20" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  formigas: (
    <>
      {/* Abdômen */}
      <ellipse cx="12" cy="17" rx="4" ry="3" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Tórax */}
      <circle cx="12" cy="11.5" r="2.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Cabeça */}
      <circle cx="12" cy="7" r="2.2" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Olhos */}
      <circle cx="11" cy="6.5" r="0.4" strokeWidth="0.8" fill="currentColor" />
      <circle cx="13" cy="6.5" r="0.4" strokeWidth="0.8" fill="currentColor" />
      {/* Antenas */}
      <path d="M11 5Q9 2 7 2.5" strokeWidth="1" strokeLinecap="round" />
      <path d="M13 5Q15 2 17 2.5" strokeWidth="1" strokeLinecap="round" />
      {/* Mandíbulas */}
      <path d="M10.5 8L10 10M13.5 8L14 10" strokeWidth="0.8" strokeLinecap="round" />
      {/* Patas */}
      <path d="M10 11L6 10M10 12L5 13M10 13L7 15" strokeWidth="1" strokeLinecap="round" />
      <path d="M14 11L18 10M14 12L19 13M14 13L17 15" strokeWidth="1" strokeLinecap="round" />
    </>
  ),
  aranhas: (
    <>
      {/* Cefalotórax */}
      <circle cx="12" cy="11" r="3.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Abdômen */}
      <ellipse cx="12" cy="17" rx="4.5" ry="4" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Olhos */}
      <circle cx="10" cy="10" r="0.5" strokeWidth="0.8" fill="currentColor" />
      <circle cx="12" cy="9.5" r="0.5" strokeWidth="0.8" fill="currentColor" />
      <circle cx="14" cy="10" r="0.5" strokeWidth="0.8" fill="currentColor" />
      {/* Quelíceras */}
      <path d="M11 12.5L10 14M13 12.5L14 14" strokeWidth="0.8" strokeLinecap="round" />
      {/* Patas — 4 de cada lado */}
      <path d="M9 10L4 7M9 11L3 10M9 12L4 14M9 13.5L5 17" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 10L20 7M15 11L21 10M15 12L20 14M15 13.5L19 17" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  mosquitos: (
    <>
      {/* Abdômen alongado */}
      <ellipse cx="12" cy="16" rx="2" ry="4" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Tórax */}
      <circle cx="12" cy="10" r="1.8" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Cabeça */}
      <circle cx="12" cy="7" r="1.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Probóscide (ferrão) */}
      <path d="M12 5.5L12 3" strokeWidth="1.2" strokeLinecap="round" />
      {/* Antenas plumosas */}
      <path d="M11 6Q8 5 9 3" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M13 6Q16 5 15 3" strokeWidth="0.8" strokeLinecap="round" />
      {/* Asas */}
      <ellipse cx="7" cy="11" rx="4" ry="1.5" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" transform="rotate(-20 7 11)" />
      <ellipse cx="17" cy="11" rx="4" ry="1.5" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" transform="rotate(20 17 11)" />
      {/* Patas */}
      <path d="M11 10L8 12M11 11L9 14M11 12L10 15" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M13 10L16 12M13 11L15 14M13 12L14 15" strokeWidth="0.8" strokeLinecap="round" />
    </>
  ),
  moscas: (
    <>
      {/* Abdômen */}
      <ellipse cx="12" cy="16" rx="3.5" ry="4" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Tórax */}
      <circle cx="12" cy="10" r="2.2" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Cabeça */}
      <circle cx="12" cy="7" r="1.8" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Olhos compostos */}
      <circle cx="10.5" cy="6.5" r="1" strokeWidth="0.8" fill="currentColor" fillOpacity="0.25" />
      <circle cx="13.5" cy="6.5" r="1" strokeWidth="0.8" fill="currentColor" fillOpacity="0.25" />
      {/* Asas superiores */}
      <ellipse cx="6" cy="10" rx="5" ry="1.8" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" transform="rotate(-15 6 10)" />
      <ellipse cx="18" cy="10" rx="5" ry="1.8" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" transform="rotate(15 18 10)" />
      {/* Asas inferiores (halteres) */}
      <ellipse cx="4" cy="12" rx="2" ry="0.8" strokeWidth="0.6" fill="currentColor" fillOpacity="0.05" transform="rotate(-25 4 12)" />
      <ellipse cx="20" cy="12" rx="2" ry="0.8" strokeWidth="0.6" fill="currentColor" fillOpacity="0.05" transform="rotate(25 20 12)" />
      {/* Patas */}
      <path d="M10.5 9L8 11M10.5 10L9 13M10.5 11L10 14" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M13.5 9L16 11M13.5 10L15 13M13.5 11L14 14" strokeWidth="0.8" strokeLinecap="round" />
    </>
  ),
  cupins: (
    <>
      {/* Abdômen */}
      <ellipse cx="12" cy="16" rx="3.5" ry="3" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Tórax */}
      <circle cx="12" cy="11" r="2" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Cabeça */}
      <circle cx="12" cy="7.5" r="2" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
      {/* Mandíbulas proeminentes */}
      <path d="M10 7.5L8 9M14 7.5L16 9" strokeWidth="1.2" strokeLinecap="round" />
      {/* Antenas retas em contas */}
      <path d="M10.5 6Q9 4 8 3" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M13.5 6Q15 4 16 3" strokeWidth="0.8" strokeLinecap="round" />
      {/* Asas (cupim alado) */}
      <ellipse cx="6" cy="11" rx="5" ry="1.5" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" transform="rotate(-10 6 11)" />
      <ellipse cx="18" cy="11" rx="5" ry="1.5" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" transform="rotate(10 18 11)" />
      {/* Patas */}
      <path d="M10 10.5L7 12M10 11.5L8 14M10 12.5L9 15" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M14 10.5L17 12M14 11.5L16 14M14 12.5L15 15" strokeWidth="0.8" strokeLinecap="round" />
    </>
  ),
  "caixa-dagua": (
    <>
      {/* Tampa */}
      <path d="M6 6l3-3h6l3 3z" strokeWidth="1.4" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
      {/* Corpo do reservatório */}
      <rect x="6" y="6" width="12" height="14" rx="1.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.1" />
      {/* Marcador de nível */}
      <path d="M16 10q2 0 2 2q0 2-2 2" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Tampa de inspeção */}
      <rect x="9" y="8" width="6" height="3" rx="1" strokeWidth="1" strokeOpacity="0.4" />
      {/* Gotas */}
      <path d="M7 20v2M12 20v3M17 20v1" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
};

export function PestIcon({
  name,
  size = 24,
  className,
  ...props
}: { name: PestIconName; size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
