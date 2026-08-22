"use client";

import { Badge, Card, SectionTitle } from "./ui";

interface ColorToken {
  name: string;
  cssVar: string;
  hex: string;
  light: boolean;
}

const COLORS: ColorToken[] = [
  { name: "Navy", cssVar: "--brand-navy", hex: "#002347", light: false },
  { name: "Navy Soft", cssVar: "--brand-navy-soft", hex: "#003066", light: false },
  { name: "Lime", cssVar: "--brand-lime", hex: "#8fce2a", light: true },
  { name: "Accent Blue", cssVar: "--brand-accent-blue", hex: "#1e6faf", light: false },
  { name: "Muted", cssVar: "--brand-muted", hex: "#4a5568", light: false },
  { name: "Border", cssVar: "--brand-border", hex: "#dde4ee", light: true },
  { name: "Surface", cssVar: "--brand-surface", hex: "#f0f4f8", light: true },
];

const SPACING = [
  { token: "1", px: 4 },
  { token: "2", px: 8 },
  { token: "3", px: 12 },
  { token: "4", px: 16 },
  { token: "6", px: 24 },
  { token: "8", px: 32 },
  { token: "12", px: 48 },
  { token: "16", px: 64 },
];

export function PanelDesignSystem() {
  return (
    <div className="space-y-6">
      <Card>
        <SectionTitle
          title="Cores da marca"
          subtitle="Valores lidos diretamente dos tokens de globals.css"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {COLORS.map((color) => (
            <div key={color.name}>
              <div
                className="flex h-20 items-end rounded-lg border border-brand-border p-2"
                style={{ background: `var(${color.cssVar})` }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: color.light ? "#002347" : "#ffffff" }}
                >
                  {color.hex}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-bold text-brand-navy">{color.name}</p>
              <p className="font-mono text-[10px] text-brand-muted">{color.cssVar}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Tipografia" />
          <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
            Títulos — Montserrat
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Protegendo o seu ambiente
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-brand-navy-soft">
            Heading 2 — peso 600
          </p>
          <p className="mt-1 font-display text-base font-medium text-brand-muted">
            Heading 3 — peso 500
          </p>

          <div className="mt-6 border-t border-brand-border pt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Texto — DM Sans
            </p>
            <p className="mt-2 text-base leading-7 text-foreground">
              Controle profissional de pragas em Franca e região, com orientação
              técnica e documentação do serviço.
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Body small — usado em legendas, rodapés e textos de apoio.
            </p>
          </div>
        </Card>

        <Card>
          <SectionTitle title="Espaçamento" subtitle="Escala base de 4px" />
          <ul className="space-y-2">
            {SPACING.map((item) => (
              <li key={item.token} className="flex items-center gap-3">
                <span className="w-10 shrink-0 font-mono text-xs text-brand-muted">
                  {item.token}
                </span>
                <span
                  className="h-4 shrink-0 rounded-sm bg-brand-lime"
                  style={{ width: `${item.px * 2}px` }}
                />
                <span className="text-xs text-brand-muted">{item.px}px</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Componentes" subtitle="Preview dos elementos base" />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Botões
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center bg-brand-navy px-5 font-bold text-white transition-colors hover:bg-brand-navy-soft"
              >
                Primário
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center bg-brand-lime px-5 font-bold text-brand-navy-heading transition-colors hover:bg-brand-green-light"
              >
                Secundário
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center border border-brand-navy px-5 font-bold text-brand-navy transition-colors hover:bg-brand-surface"
              >
                Outline
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Badges
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="lime">Agendado</Badge>
              <Badge tone="navy">Concluído</Badge>
              <Badge tone="accent">Novo</Badge>
              <Badge tone="amber">Contatado</Badge>
              <Badge tone="muted">Inativo</Badge>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Campo de entrada
            </p>
            <input
              className="mt-3 min-h-12 w-full border border-brand-border bg-white px-3 text-brand-navy outline-none focus:border-brand-accent"
              placeholder="Ex.: Bairro ou cidade"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Card
            </p>
            <div className="mt-3 rounded-xl border border-brand-border bg-white p-4 shadow-sm">
              <p className="font-display text-base font-bold text-brand-navy">
                Título do card
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                Conteúdo de apoio dentro de um card padrão.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
