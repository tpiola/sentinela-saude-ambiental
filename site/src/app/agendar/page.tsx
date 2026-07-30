"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BRAND } from "@/lib/brand";
import { sendLeadToN8n, type LeadPayload } from "@/lib/integrations";

const options = [
  "Escorpiões",
  "Baratas ou formigas",
  "Cupins",
  "Roedores",
  "Outro",
] as const;

const CONSENT_KEY = "sentinela-cookie-consent";

function attributionFromLocation() {
  const params = new URLSearchParams(window.location.search);

  return {
    pagePath: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || undefined,
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmContent: params.get("utm_content") || undefined,
    utmTerm: params.get("utm_term") || undefined,
  };
}

export default function AgendarPage() {
  const [form, setForm] = useState({
    problema: "",
    bairro: "",
    whatsapp: "",
    urgencia: "Hoje",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Campo-isca preenchido indica automação; não encaminha nem abre o WhatsApp.
    if (form.website) return;

    const nextErrors: Record<string, string> = {};
    if (!form.problema) nextErrors.problema = "Selecione o problema";
    if (!form.bairro.trim()) {
      nextErrors.bairro = "Informe o bairro ou a cidade";
    }
    if (form.whatsapp.replace(/\D/g, "").length < 10) {
      nextErrors.whatsapp = "Informe um WhatsApp válido";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const payload: LeadPayload = {
      leadId: crypto.randomUUID(),
      source: "site-diagnostico",
      phone: form.whatsapp,
      city: form.bairro.trim(),
      pestType: form.problema,
      urgency: form.urgencia,
      timestamp: new Date().toISOString(),
      website: form.website,
      ...attributionFromLocation(),
    };

    // keepalive permite concluir o envio mesmo quando o WhatsApp é aberto em seguida.
    void sendLeadToN8n(payload);

    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_form_completed",
        pest_type: form.problema,
        urgency: form.urgencia,
        page_path: window.location.pathname,
      });
    }

    const message = [
      "Olá, Sentinela. Gostaria de solicitar um diagnóstico.",
      `Problema: ${form.problema}`,
      `Bairro/cidade: ${form.bairro.trim()}`,
      `WhatsApp: ${form.whatsapp}`,
      `Urgência: ${form.urgencia}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[color:var(--brand-surface)] pt-20">
        <section className="bg-[color:var(--brand-navy)] py-14 text-white sm:py-20">
          <div className="container-responsive grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
                Diagnóstico inicial
              </p>
              <h1 className="mt-4 max-w-[12ch] font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
                Conte o que está acontecendo.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/70">
              Envie somente os dados essenciais. A equipe continua o atendimento
              no WhatsApp e solicita endereço completo apenas quando necessário.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container-responsive grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <form
              onSubmit={submit}
              className="relative border border-[color:var(--brand-border)] bg-white p-6 sm:p-8"
              noValidate
            >
              <div
                className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) => updateField("website", event.target.value)}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Qual é o problema?
                  </span>
                  <select
                    value={form.problema}
                    onChange={(event) =>
                      updateField("problema", event.target.value)
                    }
                    aria-invalid={Boolean(errors.problema)}
                    className="mt-2 min-h-12 w-full border border-[color:var(--brand-border)] bg-white px-3"
                  >
                    <option value="">Selecione</option>
                    {options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.problema && (
                    <span className="mt-1 block text-xs text-red-700">
                      {errors.problema}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Bairro ou cidade
                  </span>
                  <input
                    value={form.bairro}
                    onChange={(event) => updateField("bairro", event.target.value)}
                    placeholder="Ex.: Centro, Franca"
                    aria-invalid={Boolean(errors.bairro)}
                    autoComplete="address-level2"
                    className="mt-2 min-h-12 w-full border border-[color:var(--brand-border)] px-3"
                  />
                  {errors.bairro && (
                    <span className="mt-1 block text-xs text-red-700">
                      {errors.bairro}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Seu WhatsApp
                  </span>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={(event) =>
                      updateField("whatsapp", event.target.value)
                    }
                    placeholder="(16) 99999-9999"
                    aria-invalid={Boolean(errors.whatsapp)}
                    autoComplete="tel"
                    className="mt-2 min-h-12 w-full border border-[color:var(--brand-border)] px-3"
                  />
                  {errors.whatsapp && (
                    <span className="mt-1 block text-xs text-red-700">
                      {errors.whatsapp}
                    </span>
                  )}
                </label>

                <fieldset className="sm:col-span-2">
                  <legend className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Quando precisa do atendimento?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {["Hoje", "Nesta semana", "Quero orientação"].map(
                      (item) => (
                        <label
                          key={item}
                          className="flex min-h-11 items-center gap-2 border border-[color:var(--brand-border)] px-4"
                        >
                          <input
                            type="radio"
                            name="urgencia"
                            value={item}
                            checked={form.urgencia === item}
                            onChange={(event) =>
                              updateField("urgencia", event.target.value)
                            }
                          />
                          <span className="whitespace-nowrap text-sm">{item}</span>
                        </label>
                      ),
                    )}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex min-h-14 w-full items-center justify-center whitespace-nowrap bg-[color:var(--brand-lime)] px-7 font-bold text-[color:var(--brand-navy-heading)] hover:bg-[color:var(--brand-green-light)]"
              >
                Continuar no WhatsApp
              </button>
              <p className="mt-4 text-xs leading-5 text-[color:var(--brand-muted)]">
                Ao continuar, você envia esses dados à Sentinela para receber
                atendimento. Não solicitamos endereço completo nesta etapa.
              </p>
            </form>

            <aside className="border-t-2 border-[color:var(--brand-lime)] bg-[color:var(--brand-navy)] p-6 text-white">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                Antes da aplicação
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                A equipe orienta sobre preparação do local, afastamento de pessoas
                e animais e cuidados após o serviço.
              </p>
              <dl className="mt-6 space-y-5 border-t border-white/20 pt-5 text-sm">
                <div>
                  <dt className="text-white/50">Cobertura</dt>
                  <dd className="mt-1 font-semibold">{BRAND.region}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Horários</dt>
                  <dd className="mt-1 font-semibold">
                    {BRAND.openingHours.weekdays}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Contato</dt>
                  <dd className="mt-1 font-semibold">{BRAND.phoneDisplay}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
