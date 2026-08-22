"use client";

import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-brand-border bg-white p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-lg font-bold text-brand-navy">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-brand-muted">{subtitle}</p>
      )}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon,
  accent = "lime",
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon?: string;
  accent?: "lime" | "navy" | "accent" | "muted";
}) {
  const accentClasses: Record<string, string> = {
    lime: "bg-brand-lime text-brand-navy-heading",
    navy: "bg-brand-navy text-white",
    accent: "bg-brand-accent text-white",
    muted: "bg-brand-silver text-brand-navy-heading",
  };

  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
          {label}
        </p>
        <p className="mt-2 font-display text-3xl font-bold text-brand-navy">
          {value}
        </p>
        {hint && <p className="mt-1 text-xs text-brand-muted">{hint}</p>}
      </div>
      {icon && (
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg ${accentClasses[accent]}`}
        >
          {icon}
        </span>
      )}
    </Card>
  );
}

export function Badge({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "lime" | "navy" | "accent" | "amber" | "muted";
}) {
  const tones: Record<string, string> = {
    lime: "bg-brand-lime/20 text-brand-lime-deep",
    navy: "bg-brand-navy/10 text-brand-navy",
    accent: "bg-brand-accent/10 text-brand-accent",
    amber: "bg-amber-100 text-amber-800",
    muted: "bg-brand-silver/30 text-brand-muted",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
