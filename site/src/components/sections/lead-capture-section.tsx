"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";
import {
  INTEGRATIONS,
  sendContactLeadToN8n,
  type ContactLeadPayload,
} from "@/lib/integrations";

type Audience = "residencial" | "empresa";

export function LeadCaptureSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [audience, setAudience] = useState<Audience>("residencial");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const embedUrl = INTEGRATIONS.googleFormEmbedUrl.trim();
  const openFormUrl = INTEGRATIONS.googleContactFormOpenUrl.trim();

  async function submitLocal(e: React.FormEvent) {
    e.preventDefault();
    const payload: ContactLeadPayload = {
      source: "site-contato",
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      audience,
      message: message.trim() || undefined,
      timestamp: new Date().toISOString(),
    };
    void sendContactLeadToN8n(payload);

    const audLabel = audience === "empresa" ? "Empresa" : "Residencial";
    const msg =
      `Olá, Sentinela! Cadastro pelo site.\n\n` +
      `👤 ${name || "—"}\n📧 ${email || "—"}\n📱 ${phone || "—"}\n🏷️ ${audLabel}` +
      (message.trim() ? `\n📝 ${message.trim()}` : "");

    window.open(whatsappHref(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato-lead" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Contato
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Fale com a Sentinela
          </h2>
          <p className="mt-4 text-[color:var(--brand-muted)]">
            Preencha seus dados e nossa equipe retorna em breve pelo WhatsApp.
          </p>
        </motion.div>

        {embedUrl ? (
          <>
            <p className="mt-6 text-center text-sm text-[color:var(--brand-muted)]">
              Depois do envio, a equipe entra em contato conforme a fila e o
              horário comercial.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] shadow-lg">
              <iframe
                title="Formulário de contato Sentinela"
                src={embedUrl}
                className="min-h-[640px] w-full border-0 sm:min-h-[720px]"
              />
            </div>
          </>
        ) : (
          <div className="mt-10 space-y-6 rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-lg md:p-8">
            {openFormUrl ? (
              <p className="text-center text-sm text-[color:var(--brand-muted)]">
                <a
                  href={openFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[color:var(--brand-navy)] underline-offset-4 hover:underline"
                >
                  Abrir formulário oficial (Google)
                </a>{" "}
                — o mesmo fluxo pode estar ligado à sua planilha.
              </p>
            ) : null}
            <form onSubmit={submitLocal} className="space-y-4">
              <div>
                <label
                  htmlFor="lead-name"
                  className="mb-1 block text-sm font-semibold text-[color:var(--brand-navy)]"
                >
                  Nome
                </label>
                <input
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-email"
                  className="mb-1 block text-sm font-semibold text-[color:var(--brand-navy)]"
                >
                  E-mail
                </label>
                <input
                  id="lead-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                  placeholder="nome@exemplo.com"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-phone"
                  className="mb-1 block text-sm font-semibold text-[color:var(--brand-navy)]"
                >
                  WhatsApp / celular
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                  placeholder="(16) 99999-9999"
                />
              </div>
              <fieldset>
                <legend className="mb-2 block text-sm font-semibold text-[color:var(--brand-navy)]">
                  Tipo
                </legend>
                <div className="flex gap-3" role="radiogroup">
                  {(
                    [
                      ["residencial", "Residencial"],
                      ["empresa", "Empresa"],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setAudience(id)}
                      aria-pressed={audience === id}
                      className={`flex-1 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
                        audience === id
                          ? "border-[color:var(--brand-lime)] bg-white text-[color:var(--brand-navy)]"
                          : "border-transparent bg-white/80 text-[color:var(--brand-muted)] hover:border-[color:var(--brand-border)]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <label
                  htmlFor="lead-msg"
                  className="mb-1 block text-sm font-semibold text-[color:var(--brand-navy)]"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="lead-msg"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                  placeholder="Descreva a necessidade (pragas, laudo, urgência…)"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="lead-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 cursor-pointer accent-[color:var(--brand-lime)]"
                />
                <label
                  htmlFor="lead-consent"
                  className="text-xs text-[color:var(--brand-muted)]"
                >
                  Concordo com o tratamento dos meus dados pessoais conforme a{" "}
                  <a
                    href="/privacidade"
                    className="underline hover:text-[color:var(--brand-navy)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de Privacidade
                  </a>{" "}
                  da Sentinela Saúde Ambiental (LGPD — Lei 13.709/2018).
                </label>
              </div>
              <button
                type="submit"
                disabled={!consent}
                className="w-full rounded-full bg-[#25D366] py-3.5 font-bold text-white shadow-md disabled:opacity-50"
              >
                Enviar e falar no WhatsApp
              </button>
            </form>
            <p className="text-center text-xs text-[color:var(--brand-muted)]">
              Área: {BRAND.coverageSummary}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
