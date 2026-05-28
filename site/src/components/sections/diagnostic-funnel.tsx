"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";
import {
  INTEGRATIONS,
  calendarBookingHref,
  sendLeadToN8n,
  type LeadPayload,
} from "@/lib/integrations";

const propertyTypes = [
  { id: "residencia", label: "Residência" },
  { id: "empresa", label: "Empresa" },
  { id: "condominio", label: "Condomínio" },
  { id: "outro", label: "Outro" },
];

const pestTypes = [
  { id: "escorpiao", label: "Escorpião (urgente)" },
  { id: "barata", label: "Baratas" },
  { id: "cupim", label: "Cupim" },
  { id: "rato", label: "Roedores" },
  { id: "formiga", label: "Formigas" },
  { id: "agua", label: "Caixa d'água" },
  { id: "outro", label: "Outro" },
];

type FormState = {
  propertyType: string;
  pestType: string;
  urgency: "baixa" | "media" | "alta";
  name: string;
  phone: string;
  city: string;
};

export function DiagnosticFunnel() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    propertyType: "",
    pestType: "",
    urgency: "media",
    name: "",
    phone: "",
    city: "Franca",
  });

  const canNext1 = !!form.propertyType;
  const canNext2 = !!form.pestType;

  async function submit() {
    const labels = {
      propertyType:
        propertyTypes.find((p) => p.id === form.propertyType)?.label ?? "—",
      pestType: pestTypes.find((p) => p.id === form.pestType)?.label ?? "—",
    };

    const payload: LeadPayload = {
      source: "site-diagnostico",
      name: form.name,
      phone: form.phone,
      city: form.city,
      propertyType: labels.propertyType,
      pestType: labels.pestType,
      urgency: form.urgency,
      timestamp: new Date().toISOString(),
    };

    void sendLeadToN8n(payload);

    const msg = `Olá, Sentinela! Fiz o diagnóstico no site.\n\n📍 Local: ${labels.propertyType}\n🦟 Problema: ${labels.pestType}\n⚠️ Urgência: ${form.urgency}\n👤 Nome: ${form.name || "—"}\n📱 Tel: ${form.phone || "—"}\n🏙️ Cidade: ${form.city || "—"}`;
    window.open(whatsappHref(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="diagnostico" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Diagnóstico gratuito
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Prioridade para empresas, laudos e compliance
          </h2>
          <p className="mt-4 text-[color:var(--brand-muted)]">
            Indústria, comércio e quem responde à Vigilância Sanitária: organize
            diagnóstico e documentação com critérios claros — sem promessa de
            tempo fixo; em horário comercial buscamos retorno rápido no
            WhatsApp. Três passos — no final você fala direto com a equipe.
            {INTEGRATIONS.n8nWebhookLead && (
              <span className="mt-2 block text-xs">
                Integração n8n ativa para automação de leads.
              </span>
            )}
          </p>
        </motion.div>

        <div className="mt-10 rounded-3xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-lg md:p-8">
          <div className="mb-8 flex gap-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className={`h-1.5 flex-1 rounded-full transition ${
                  step >= n
                    ? "bg-[color:var(--brand-lime)]"
                    : "bg-[color:var(--brand-border)]"
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <div>
              <p className="mb-4 font-semibold text-[color:var(--brand-navy)]">
                Qual é o tipo do local?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {propertyTypes.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() =>
                      setForm((f) => ({ ...f, propertyType: p.id }))
                    }
                    className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
                      form.propertyType === p.id
                        ? "border-[color:var(--brand-lime)] bg-white text-[color:var(--brand-navy)]"
                        : "border-transparent bg-white/80 text-[color:var(--brand-muted)] hover:border-[color:var(--brand-border)]"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={!canNext1}
                onClick={() => setStep(2)}
                className="mt-8 w-full rounded-full bg-[color:var(--brand-navy)] py-3 font-bold text-white disabled:opacity-40"
              >
                Continuar
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="mb-4 font-semibold text-[color:var(--brand-navy)]">
                O que você identificou?
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {pestTypes.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, pestType: p.id }))}
                    className={`rounded-xl border-2 px-3 py-3 text-sm font-semibold transition ${
                      form.pestType === p.id
                        ? "border-[color:var(--brand-lime)] bg-white"
                        : "border-transparent bg-white/80 hover:border-[color:var(--brand-border)]"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <p className="mt-6 mb-2 text-sm font-medium">Urgência</p>
              <div className="flex gap-2">
                {(["baixa", "media", "alta"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, urgency: u }))}
                    className={`flex-1 rounded-lg py-2 text-sm font-semibold capitalize ${
                      form.urgency === u
                        ? "bg-[color:var(--brand-lime)] text-[color:var(--brand-navy-heading)]"
                        : "bg-white text-[color:var(--brand-muted)]"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-full border-2 border-[color:var(--brand-navy)] py-3 font-bold text-[color:var(--brand-navy)]"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  disabled={!canNext2}
                  onClick={() => setStep(3)}
                  className="flex-[2] rounded-full bg-[color:var(--brand-navy)] py-3 font-bold text-white disabled:opacity-40"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="font-semibold text-[color:var(--brand-navy)]">
                Como podemos te contatar?
              </p>
              <div>
                <label
                  htmlFor="diag-name"
                  className="mb-1 block text-sm font-medium text-[color:var(--brand-navy)]"
                >
                  Nome
                </label>
                <input
                  id="diag-name"
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="diag-phone"
                  className="mb-1 block text-sm font-medium text-[color:var(--brand-navy)]"
                >
                  WhatsApp / telefone
                </label>
                <input
                  id="diag-phone"
                  type="tel"
                  placeholder="(16) 99999-9999"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="w-full rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="diag-city"
                  className="mb-1 block text-sm font-medium text-[color:var(--brand-navy)]"
                >
                  Cidade
                </label>
                <select
                  id="diag-city"
                  value={form.city}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, city: e.target.value }))
                  }
                  className="w-full rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                >
                  {BRAND.areaServed.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 rounded-full border-2 border-[color:var(--brand-navy)] py-3 font-bold"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={submit}
                  className="flex-[2] rounded-full bg-[#25D366] py-3 font-bold text-white"
                >
                  Enviar no WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm">
          <a
            href={calendarBookingHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[color:var(--brand-navy)] underline-offset-4 hover:underline"
          >
            Ou agende visita técnica no Google Agenda
          </a>
        </p>
      </div>
    </section>
  );
}
