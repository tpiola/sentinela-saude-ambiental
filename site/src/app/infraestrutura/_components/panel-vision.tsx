"use client";

import { useEffect, useRef, useState } from "react";
import { BRAND, whatsappHref } from "@/lib/brand";
import { Badge, Card, SectionTitle } from "./ui";

interface GuideItem {
  slug: string;
  nome: string;
  icone: string;
  identificacao: string;
  cuidados: string[];
}

const GUIDE: GuideItem[] = [
  {
    slug: "escorpiao",
    nome: "Escorpião",
    icone: "🦂",
    identificacao:
      "Corpo alongado, pinças (pedipalpos) e cauda com ferrão. Em Franca, as espécies costumam ser pequenas e de coloração clara.",
    cuidados: [
      "Não toque nem tente capturar com as mãos",
      "Em caso de picada, procure atendimento de saúde imediatamente",
      "Afaste crianças e animais do local",
      "Vede ralos e elimine entulho (abrigos)",
    ],
  },
  {
    slug: "barata",
    nome: "Barata",
    icone: "🪳",
    identificacao:
      "Corpo achatado, antenas longas e hábito noturno. Fezes, odor característico e cascas indicam infestação.",
    cuidados: [
      "Não deixe louça suja nem restos de alimento à noite",
      "Armazene alimentos em recipientes bem fechados",
      "Corrija vazamentos e fontes de umidade",
      "Retire o lixo regularmente e mantenha lixeiras tampadas",
    ],
  },
  {
    slug: "cupim",
    nome: "Cupim",
    icone: "🪵",
    identificacao:
      "Asas caídas, túneis na madeira e pó fino perto de móveis indicam atividade. A espécie define o tratamento.",
    cuidados: [
      "Não quebre nem remova a madeira antes da inspeção",
      "Evite contato de madeira com solo e umidade",
      "Observe asas e grânulos próximos a móveis",
      "Solicite diagnóstico (madeira seca vs. subterrâneo)",
    ],
  },
  {
    slug: "rato",
    nome: "Rato",
    icone: "🐀",
    identificacao:
      "Fezes, roeduras em embalagens, ruídos à noite e trilhas de gordura são os principais sinais.",
    cuidados: [
      "Não varra fezes a seco (evita levantar poeira)",
      "Feche alimentos e ração em recipientes resistentes",
      "Vede aberturas em telhados, portas e tubulações",
      "Não manipule iscas ou dispositivos instalados",
    ],
  },
];

const CATEGORIAS = [
  "Escorpião",
  "Barata",
  "Cupim",
  "Rato",
  "Outro / não sei identificar",
];

export function PanelVision() {
  const [preview, setPreview] = useState<string | null>(null);
  const [categoria, setCategoria] = useState<string>(CATEGORIAS[0]);
  const [observacao, setObservacao] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
  }

  function openTriage() {
    const guide = GUIDE.find((item) => item.nome === categoria);
    const cuidados = guide
      ? `\n\n⚠️ Cuidados imediatos:\n${guide.cuidados.map((c) => `• ${c}`).join("\n")}`
      : "";

    const message = [
      "📸 Triagem por imagem — Sentinela Saúde Ambiental",
      `Categoria informada: ${categoria}`,
      observacao.trim() ? `Observação: ${observacao.trim()}` : "",
      "Anexe a foto do animal/ambiente para a equipe identificar e orientar o atendimento.",
      cuidados.trim() ? cuidados.trim() : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappHref(message);
    const win = window.open(url, "_blank");
    if (win) {
      win.opener = null;
    } else {
      window.location.assign(url);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <SectionTitle
          title="Visão por imagem"
          subtitle="Fluxo: cliente manda foto → identifica animal/ambiente → orienta cuidados"
        />
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", t: "Recebe a foto", d: "O cliente envia foto do animal peçonhento ou do ambiente pelo WhatsApp." },
            { n: "2", t: "Identifica", d: "A equipe reconhece a praga (escorpião, barata, cupim, rato) ou o risco do ambiente." },
            { n: "3", t: "Orienta e agenda", d: "Passa os cuidados imediatos, qualifica bairro e agenda a inspeção técnica." },
          ].map((step) => (
            <li key={step.n} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy font-display text-sm font-bold text-white">
                {step.n}
              </span>
              <div>
                <p className="font-bold text-brand-navy">{step.t}</p>
                <p className="mt-0.5 text-sm leading-6 text-brand-muted">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionTitle
            title="Triagem por foto"
            subtitle="Envie a legenda de triagem pronta para o WhatsApp"
          />
          <div
            className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-brand-border bg-brand-surface p-6 text-center"
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview}
                alt="Prévia da foto enviada"
                className="max-h-56 rounded-lg object-contain"
              />
            ) : (
              <>
                <span className="text-3xl">🖼️</span>
                <p className="mt-2 text-sm font-bold text-brand-navy">
                  Clique para enviar uma foto
                </p>
                <p className="mt-1 text-xs text-brand-muted">
                  A imagem é processada apenas no navegador (sem upload).
                </p>
              </>
            )}
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-bold text-brand-navy">Categoria</span>
            <select
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              className="mt-2 min-h-12 w-full border border-brand-border bg-white px-3 outline-none focus:border-brand-accent"
            >
              {CATEGORIAS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-bold text-brand-navy">
              Observação (opcional)
            </span>
            <textarea
              value={observacao}
              onChange={(event) => setObservacao(event.target.value)}
              rows={2}
              className="mt-2 w-full border border-brand-border bg-white px-3 py-2 outline-none focus:border-brand-accent"
              placeholder="Ex.: encontrei no quintal, perto do ralo..."
            />
          </label>

          <button
            type="button"
            onClick={openTriage}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center bg-brand-whatsapp font-bold text-white transition-opacity hover:opacity-90"
          >
            Gerar legenda e abrir WhatsApp
          </button>
          <p className="mt-3 text-xs leading-5 text-brand-muted">
            O link do WhatsApp não anexa arquivos automaticamente — a legenda
            orienta a anexar a foto manualmente na conversa. Sem backend de visão,
            a identificação é feita pela equipe.
          </p>
        </Card>

        <div>
          <SectionTitle
            title="Guia de identificação rápida"
            subtitle="Pragas mais comuns e cuidados de cada uma"
          />
          <div className="space-y-4">
            {GUIDE.map((item) => (
              <Card key={item.slug}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-surface text-2xl">
                    {item.icone}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-navy">
                      {item.nome}
                    </h3>
                    <p className="text-xs text-brand-muted">{item.identificacao}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1 border-t border-brand-border pt-3">
                  {item.cuidados.map((cuidado) => (
                    <li key={cuidado} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="mt-0.5 text-brand-lime">•</span>
                      {cuidado}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Badge tone="lime">Próxima etapa</Badge>
          <p className="text-sm text-brand-muted">
            Evoluir para um backend de visão (IA) que classifica a praga pela foto
            automaticamente antes de abrir o WhatsApp.
          </p>
        </div>
        <span className="text-sm font-bold text-brand-navy">{BRAND.phoneDisplay}</span>
      </Card>
    </div>
  );
}
