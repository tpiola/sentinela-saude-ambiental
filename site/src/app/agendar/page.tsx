"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND } from "@/lib/brand";
import { useState } from "react";

export default function AgendarPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    endereco: "",
    descricao: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.nome.trim()) errs.nome = "Nome é obrigatório";
    if (!form.whatsapp.trim()) errs.whatsapp = "WhatsApp é obrigatório";
    else if (!form.whatsapp.match(/^[\d\s\(\)\-]+$/))
      errs.whatsapp = "Informe apenas números";
    if (!form.endereco.trim()) errs.endereco = "Endereço é obrigatório";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg =
      `Olá, Sentinela! Agendei pelo site:%0A%0A` +
      `*Nome:* ${form.nome}%0A` +
      `*E-mail:* ${form.email || "Não informado"}%0A` +
      `*WhatsApp:* ${form.whatsapp}%0A` +
      `*Endereço:* ${form.endereco}%0A` +
      `*O que precisa:* ${form.descricao || "Não informado"}`;

    window.open(
      `https://wa.me/${BRAND.phoneE164}?text=${msg}`,
      "_blank",
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-[color:var(--brand-navy)] py-16 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
              Agendamento online
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
              Agende seu serviço
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Preencha e receba o contato no WhatsApp
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {[
                "✅ Diagnóstico sem compromisso",
                "✅ Resposta em minutos",
                "✅ Laudo ANVISA",
                "✅ 11+ anos em Franca",
              ].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-[color:var(--brand-surface)] py-16 md:py-20">
          <div className="mx-auto max-w-2xl px-4 md:px-6">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white shadow-xl">
              <div className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-navy)] px-6 py-5 text-white">
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">
                  Preencha seus dados
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Todos os campos marcados com * são obrigatórios
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-bold text-[color:var(--brand-navy)]"
                  >
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[color:var(--brand-navy)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-lime)] ${
                      errors.nome
                        ? "border-red-400 ring-1 ring-red-400"
                        : "border-[color:var(--brand-border)]"
                    }`}
                  />
                  {errors.nome && (
                    <p className="mt-1 text-xs text-red-500">{errors.nome}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[color:var(--brand-navy)]"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="mt-1.5 block w-full rounded-xl border border-[color:var(--brand-border)] px-4 py-3 text-sm text-[color:var(--brand-navy)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-lime)]"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-bold text-[color:var(--brand-navy)]"
                  >
                    WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="(16) 99999-9999"
                    className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[color:var(--brand-navy)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-lime)] ${
                      errors.whatsapp
                        ? "border-red-400 ring-1 ring-red-400"
                        : "border-[color:var(--brand-border)]"
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Endereço */}
                <div>
                  <label
                    htmlFor="endereco"
                    className="block text-sm font-bold text-[color:var(--brand-navy)]"
                  >
                    Endereço do serviço <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="endereco"
                    name="endereco"
                    type="text"
                    value={form.endereco}
                    onChange={handleChange}
                    placeholder="Rua, número, bairro, Franca/SP"
                    className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[color:var(--brand-navy)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-lime)] ${
                      errors.endereco
                        ? "border-red-400 ring-1 ring-red-400"
                        : "border-[color:var(--brand-border)]"
                    }`}
                  />
                  {errors.endereco && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.endereco}
                    </p>
                  )}
                </div>

                {/* Descrição */}
                <div>
                  <label
                    htmlFor="descricao"
                    className="block text-sm font-bold text-[color:var(--brand-navy)]"
                  >
                    O que precisa ser feito?
                  </label>
                  <textarea
                    id="descricao"
                    name="descricao"
                    rows={4}
                    value={form.descricao}
                    onChange={handleChange}
                    placeholder="Ex: Escorpião apareceu na cozinha, baratas no armário, cupim no rodapé..."
                    className="mt-1.5 block w-full resize-y rounded-xl border border-[color:var(--brand-border)] px-4 py-3 text-sm text-[color:var(--brand-navy)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-lime)]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-8 py-4 font-[family-name:var(--font-heading)] text-base font-bold text-[color:var(--brand-navy-heading)] shadow-[0_0_20px_rgba(132,255,0,0.4)] transition hover:brightness-110 active:scale-95"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  Agendar agora → WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <div className="rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-sm text-[color:var(--brand-muted)]">
              <p className="font-semibold text-[color:var(--brand-navy)]">
                📍 Área de cobertura
              </p>
              <p className="mt-2">{BRAND.coverageSummary}</p>
              <p className="mt-3">
                <strong className="text-[color:var(--brand-navy)]">
                  Horário de atendimento:
                </strong>{" "}
                {BRAND.openingHours.weekdays} · {BRAND.openingHours.sunday}
              </p>
              <p className="mt-2">
                <strong className="text-[color:var(--brand-navy)]">
                  Retorno:
                </strong>{" "}
                Respondemos em minutos pelo WhatsApp
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
