"use client";

import { useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BRAND } from "@/lib/brand";
import { emitConversion } from "@/lib/conversion-events";

const options = [
  "Escorpiões",
  "Baratas ou formigas",
  "Cupins",
  "Roedores",
  "Outro",
] as const;

export default function AgendarPage() {
  const [form, setForm] = useState({
    problema: "",
    imovel: "Residência",
    bairro: "",
    urgencia: "Hoje",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const hasStarted = useRef(false);

  function markFormStart() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    emitConversion("form_start", { form_name: "diagnostico_inicial" });
  }

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

    const nextErrors: Record<string, string> = {};
    if (!form.problema) nextErrors.problema = "Selecione o problema";
    if (!form.bairro.trim()) {
      nextErrors.bairro = "Informe o bairro ou a cidade";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      emitConversion("form_validation_error", {
        form_name: "diagnostico_inicial",
        error_count: Object.keys(nextErrors).length,
      });
      return;
    }

    emitConversion("form_submit", {
      form_name: "diagnostico_inicial",
      problem: form.problema,
      property_type: form.imovel,
      urgency: form.urgencia,
    });

    const message = [
      "Olá, Sentinela. Vim pelo site e gostaria de solicitar uma avaliação.",
      `Ocorrência: ${form.problema}`,
      `Tipo de imóvel: ${form.imovel}`,
      `Bairro/cidade: ${form.bairro.trim()}`,
      `Quando preciso: ${form.urgencia}`,
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
      <main id="conteudo" className="min-h-screen bg-[color:var(--brand-surface)] pt-20">
        <section className="bg-[color:var(--brand-navy)] py-14 text-white sm:py-20">
          <div className="container-responsive grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
                Avaliação inicial
              </p>
              <h1 className="mt-4 max-w-[12ch] font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
                Conte o que está acontecendo.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/70">
              Informe somente o necessário para a equipe confirmar a cobertura e
              continuar o atendimento no WhatsApp.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container-responsive grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <form
              onSubmit={submit}
              onFocusCapture={markFormStart}
              onChangeCapture={markFormStart}
              className="relative border border-[color:var(--brand-border)] bg-white p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label htmlFor="problema" className="block sm:col-span-2">
                  <span className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Qual é o problema?
                  </span>
                  <select
                    id="problema"
                    name="problema"
                    required
                    value={form.problema}
                    onChange={(event) =>
                      updateField("problema", event.target.value)
                    }
                    aria-invalid={Boolean(errors.problema)}
                    aria-describedby={errors.problema ? "problema-erro" : undefined}
                    className="mt-2 min-h-12 w-full border border-[color:var(--brand-border)] bg-white px-3"
                  >
                    <option value="">Selecione</option>
                    {options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.problema && (
                    <span id="problema-erro" className="mt-1 block text-xs text-red-700">
                      {errors.problema}
                    </span>
                  )}
                </label>

                <label htmlFor="imovel" className="block">
                  <span className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Tipo de imóvel
                  </span>
                  <select
                    id="imovel"
                    name="imovel"
                    value={form.imovel}
                    onChange={(event) => updateField("imovel", event.target.value)}
                    className="mt-2 min-h-12 w-full border border-[color:var(--brand-border)] bg-white px-3"
                  >
                    {['Residência', 'Empresa', 'Condomínio', 'Outro'].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label htmlFor="bairro" className="block">
                  <span className="text-sm font-bold text-[color:var(--brand-navy)]">
                    Bairro ou cidade
                  </span>
                  <input
                    id="bairro"
                    name="bairro"
                    required
                    value={form.bairro}
                    onChange={(event) => updateField("bairro", event.target.value)}
                    placeholder="Ex.: Centro, Franca"
                    aria-invalid={Boolean(errors.bairro)}
                    aria-describedby={errors.bairro ? "bairro-erro" : undefined}
                    autoComplete="address-level2"
                    className="mt-2 min-h-12 w-full border border-[color:var(--brand-border)] px-3"
                  />
                  {errors.bairro && (
                    <span id="bairro-erro" className="mt-1 block text-xs text-red-700">
                      {errors.bairro}
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
                Ao continuar, o navegador monta a mensagem e abre o WhatsApp. O
                site não armazena esses campos nesta etapa.
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
