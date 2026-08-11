"use client";

import { useMemo, useState } from "react";
import { BRAND, whatsappHref } from "@/lib/brand";

type Step = "closed" | "pest" | "urgency" | "location" | "ready";
type Answers = { pest?: string; urgency?: string; location?: string };

const pests = ["Escorpião", "Baratas ou formigas", "Cupim", "Roedores", "Outro"];
const urgencies = ["Agora / hoje", "Nesta semana", "Quero orientação"];

function track(event: string, details: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details, page_path: window.location.pathname });
}

export function GuidedServiceAssistant() {
  const [step, setStep] = useState<Step>("closed");
  const [answers, setAnswers] = useState<Answers>({});
  const [location, setLocation] = useState("");

  const message = useMemo(
    () =>
      [
        "Olá, Sentinela. Fiz o diagnóstico inicial no site.",
        answers.pest && `Ocorrência: ${answers.pest}`,
        answers.urgency && `Urgência: ${answers.urgency}`,
        answers.location && `Bairro/cidade: ${answers.location}`,
        "Gostaria de confirmar a disponibilidade para atendimento.",
      ]
        .filter(Boolean)
        .join("\n"),
    [answers],
  );

  function open() {
    setStep("pest");
    track("assistant_started");
  }

  function choosePest(pest: string) {
    setAnswers({ pest });
    setStep("urgency");
    track("assistant_pest_selected", { pest_type: pest });
  }

  function chooseUrgency(urgency: string) {
    setAnswers((current) => ({ ...current, urgency }));
    setStep("location");
    track("assistant_urgency_selected", { urgency });
  }

  function finish() {
    const clean = location.trim();
    if (clean.length < 2) return;
    setAnswers((current) => ({ ...current, location: clean }));
    setStep("ready");
    track("assistant_qualified_lead", {
      pest_type: answers.pest ?? "",
      urgency: answers.urgency ?? "",
      location: clean,
    });
  }

  if (step === "closed") {
    return (
      <button
        type="button"
        onClick={open}
        className="fixed right-4 bottom-20 z-[70] hidden min-h-12 items-center gap-3 border border-[color:var(--brand-lime)] bg-[color:var(--brand-navy)] px-5 font-bold text-white shadow-md transition-colors hover:bg-[color:var(--brand-navy-soft)] sm:flex md:right-8 md:bottom-28"
        aria-label="Iniciar diagnóstico guiado"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-lime)]" aria-hidden />
        Orientação inicial
      </button>
    );
  }

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-label="Diagnóstico guiado Sentinela"
      className="fixed right-3 bottom-3 z-[100] w-[min(390px,calc(100vw-24px))] border border-[color:var(--brand-border)] bg-white shadow-lg sm:right-6 sm:bottom-6"
    >
      <header className="flex items-start justify-between bg-[color:var(--brand-navy)] p-5 text-white">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-lime)]">
            Atendimento Sentinela
          </p>
          <h2 className="mt-1 text-lg font-bold">Informe o que aconteceu</h2>
          <p className="mt-1 text-xs leading-5 text-white/65">
            Responda três perguntas antes de continuar no WhatsApp.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStep("closed")}
          className="ml-3 h-11 w-11 shrink-0 border border-white/20 text-xl"
          aria-label="Fechar diagnóstico"
        >
          ×
        </button>
      </header>

      <div className="p-5">
        {step === "pest" && (
          <Question title="Qual ocorrência você identificou?">
            {pests.map((item) => (
              <Choice key={item} onClick={() => choosePest(item)}>{item}</Choice>
            ))}
          </Question>
        )}

        {step === "urgency" && (
          <Question title="Qual é o nível de urgência?">
            {urgencies.map((item) => (
              <Choice key={item} onClick={() => chooseUrgency(item)}>{item}</Choice>
            ))}
          </Question>
        )}

        {step === "location" && (
          <div>
            <h3 className="font-bold text-[color:var(--brand-navy)]">Em qual bairro ou cidade?</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--brand-muted)]">
              Usamos essa informação apenas para confirmar a área de atendimento.
            </p>
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && finish()}
              autoFocus
              autoComplete="address-level2"
              placeholder="Ex.: Centro, Franca"
              className="mt-4 min-h-12 w-full border border-[color:var(--brand-border)] px-3"
            />
            <button
              type="button"
              onClick={finish}
              disabled={location.trim().length < 2}
              className="mt-3 min-h-12 w-full bg-[color:var(--brand-lime)] px-5 font-bold text-[color:var(--brand-navy-heading)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Confirmar localização
            </button>
          </div>
        )}

        {step === "ready" && (
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Informações organizadas
            </p>
            <h3 className="mt-2 text-xl font-bold text-[color:var(--brand-navy)]">
              Sua mensagem está pronta.
            </h3>
            <dl className="mt-4 border-y border-[color:var(--brand-border)] py-3 text-sm">
              <div className="flex justify-between gap-4 py-1"><dt>Ocorrência</dt><dd className="font-semibold">{answers.pest}</dd></div>
              <div className="flex justify-between gap-4 py-1"><dt>Urgência</dt><dd className="font-semibold">{answers.urgency}</dd></div>
              <div className="flex justify-between gap-4 py-1"><dt>Região</dt><dd className="font-semibold">{answers.location}</dd></div>
            </dl>
            <a
              href={whatsappHref(message)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="assistant_whatsapp_qualified"
              className="mt-5 flex min-h-14 items-center justify-center bg-[color:var(--brand-whatsapp)] px-5 font-bold text-white"
            >
              Continuar com a equipe
            </a>
            <p className="mt-3 text-xs leading-5 text-[color:var(--brand-muted)]">
              Em caso de picada ou reação, procure atendimento de saúde imediatamente.
            </p>
          </div>
        )}
      </div>

      <footer className="border-t border-[color:var(--brand-border)] px-5 py-3 text-xs text-[color:var(--brand-muted)]">
        Atendimento humano: {BRAND.phoneDisplay}
      </footer>
    </aside>
  );
}

function Question({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-bold text-[color:var(--brand-navy)]">{title}</h3>
      <div className="mt-4 grid gap-2">{children}</div>
    </div>
  );
}

function Choice({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-12 border border-[color:var(--brand-border)] px-4 text-left font-semibold text-[color:var(--brand-navy)] transition hover:border-[color:var(--brand-lime)] hover:bg-[color:var(--brand-surface)]"
    >
      {children}
    </button>
  );
}
