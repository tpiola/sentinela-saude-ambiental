import type { SVGProps } from "react";

type PestIconName = "baratas" | "ratos" | "escorpiao" | "formigas" | "aranhas" | "mosquitos" | "moscas" | "cupins" | "caixa-dagua";

const paths: Record<PestIconName, React.ReactNode> = {
  baratas: (
    <ellipse cx="12" cy="14" rx="8" ry="5" strokeWidth="1.5" />
  ),
  ratos: (
    <>
      <ellipse cx="14" cy="15" rx="7" ry="4" strokeWidth="1.5" />
      <circle cx="14" cy="12" r="2.5" strokeWidth="1.5" />
      <path d="M16.5 13.5l2-3M11.5 13.5l-2-3" strokeWidth="1.2" />
    </>
  ),
  escorpiao: (
    <>
      <path d="M12 20l-3-8 3-2 3 2-3 8z" strokeWidth="1.5" />
      <path d="M12 10l-1-4M12 10l1-4" strokeWidth="1.5" />
      <path d="M9 8l-3-1M15 8l3-1" strokeWidth="1.2" />
      <path d="M12 14l2.5 1.5" strokeWidth="1.5" />
      <circle cx="14.5" cy="16" r="0.8" strokeWidth="1" />
    </>
  ),
  formigas: (
    <>
      <ellipse cx="12" cy="15" rx="4" ry="3" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2" strokeWidth="1.5" />
      <path d="M12 8l-2-3M12 8l2-3" strokeWidth="1.2" />
      <path d="M8 14l-3 1M16 14l3 1" strokeWidth="1.2" />
    </>
  ),
  aranhas: (
    <>
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <path d="M9 10l-4-3M15 10l4-3M9 14l-4 3M15 14l4 3" strokeWidth="1.2" />
      <path d="M10 9l-2-4M14 9l2-4M10 15l-2 4M14 15l2 4" strokeWidth="1" />
    </>
  ),
  mosquitos: (
    <>
      <ellipse cx="12" cy="14" rx="3" ry="4" strokeWidth="1.5" />
      <path d="M12 10l-1-4M12 10l1-4" strokeWidth="1.2" />
      <line x1="9" y1="15" x2="5" y2="16" strokeWidth="1.2" />
      <line x1="15" y1="15" x2="19" y2="16" strokeWidth="1.2" />
    </>
  ),
  moscas: (
    <>
      <circle cx="12" cy="14" r="4" strokeWidth="1.5" />
      <circle cx="10" cy="13" r="0.6" strokeWidth="1" />
      <circle cx="14" cy="13" r="0.6" strokeWidth="1" />
      <path d="M8 11l-3-2M16 11l3-2" strokeWidth="1" />
    </>
  ),
  cupins: (
    <>
      <path d="M12 18l-2-6 2-2 2 2-2 6z" strokeWidth="1.5" />
      <path d="M12 10l-1-3M12 10l1-3" strokeWidth="1.2" />
      <path d="M10 12l-3-1M14 12l3-1" strokeWidth="1" />
    </>
  ),
  "caixa-dagua": (
    <>
      <rect x="6" y="8" width="12" height="12" rx="2" strokeWidth="1.5" />
      <path d="M12 4l-3 4h6l-3-4z" strokeWidth="1.5" />
      <path d="M10 14l1 2 3-3" strokeWidth="1.5" />
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
      viewBox="0 0 24 24"
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
