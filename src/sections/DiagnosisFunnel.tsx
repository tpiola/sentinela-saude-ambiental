import { useState, useRef, useEffect } from 'react';
import { trpc } from '@/providers/trpc';
import { createLeadDedupeKey, createWhatsAppUrl, normalizePhone } from '@/lib/whatsapp';

type PropertyType = 'residencia' | 'empresa' | 'condominio' | 'outro';
type Urgency = 'baixa' | 'media' | 'alta';

const LEAD_SOURCE = 'site_diagnostico';

const PROPERTY_OPTIONS = [
  { value: 'residencia', label: '🏠 Residência' },
  { value: 'empresa',    label: '🏢 Empresa' },
  { value: 'condominio', label: '🏗️ Condomínio' },
  { value: 'outro',      label: '📍 Outro' },
];

const PEST_OPTIONS = [
  { value: 'escorpiao', label: '🦂 Escorpião' },
  { value: 'barata',    label: '🪳 Barata' },
  { value: 'cupim',     label: '🪵 Cupim' },
  { value: 'rato',      label: '🐀 Rato' },
  { value: 'formiga',   label: '🐜 Formiga' },
  { value: 'pombo',     label: '🐦 Pombo' },
  { value: 'agua',      label: "💧 Caixa d'água" },
  { value: 'outro',     label: '❓ Outro' },
];

const URGENCY_OPTIONS = [
  { value: 'baixa', label: 'Baixa' },
  { value: 'media', label: 'Média' },
  { value: 'alta',  label: '🚨 Alta' },
];

const CITIES = ['Franca SP', 'Batatais', 'Cristais Paulista', 'Pedregulho', 'Orlândia', 'São Joaquim da Barra', 'Ituverava', 'Outra cidade'];

const STEPS = [
  { label: 'Passo 1 de 3', q: 'Tipo de local?' },
  { label: 'Passo 2 de 3', q: 'O que você identificou?' },
  { label: 'Passo 3 de 3', q: 'Como entrar em contato?' },
];

function OptionBtn({
  active,
  onClick,
  disabled,
  children,
}: {
  active: boolean;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex min-h-12 items-center justify-center rounded-xl border text-sm font-bold transition-all duration-200 ${
        active
          ? 'border-[#002D62] bg-[#E6FFFA] text-[#002D62]'
          : 'border-[#dce6ef] bg-white text-[#334B66] hover:border-[#002D62]/30'
      } disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

export default function DiagnosisFunnel() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ tipo: '', praga: '', urg: 'media', name: '', tel: '', cidade: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLockRef = useRef(false);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const leadMutation = trpc.leads.create.useMutation();

  const validate = () => {
    if (!data.tipo) return 'Escolha o tipo do local.';
    if (!data.praga) return 'Escolha a praga identificada.';
    if (!data.name.trim()) return 'Informe seu nome.';
    if (normalizePhone(data.tel).length < 10) return 'WhatsApp com DDD, ex: (16) 99999-9999';
    if (!data.cidade) return 'Selecione a cidade.';
    return '';
  };

  const handleNext = () => {
    setSubmitError('');
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleSubmit = async () => {
    if (submitLockRef.current) return;
    const err = validate();
    if (err) { setSubmitError(err); return; }

    submitLockRef.current = true;
    setIsSubmitting(true);
    setSubmitError('');

    const msg = `Diagnóstico Sentinela:\n\nNome: ${data.name.trim()}\nWhatsApp: ${data.tel}\nCidade: ${data.cidade}\nLocal: ${data.tipo}\nProblema: ${data.praga}\nUrgência: ${data.urg}\n\nAguardo contato!`;
    window.open(createWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');

    try {
      await leadMutation.mutateAsync({
        name: data.name.trim(),
        phone: data.tel,
        city: data.cidade,
        pestType: data.praga,
        propertyType: data.tipo as PropertyType,
        urgency: data.urg as Urgency,
        message: `Diagnóstico via site: ${data.praga} em ${data.tipo} — ${data.cidade}`,
        source: LEAD_SOURCE,
        dedupeKey: createLeadDedupeKey({ phone: data.tel, propertyType: data.tipo, pestType: data.praga, source: LEAD_SOURCE }),
      });
      setSubmitted(true);
    } catch {
      setSubmitError('WhatsApp aberto! Se não recebermos resposta, tente novamente em instantes.');
      submitLockRef.current = false;
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="funnel" className="sentinel-section bg-[#002D62]" aria-label="Diagnóstico enviado">
        <div className="sentinel-container py-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E6FFFA] text-2xl text-[#002D62]">
            ✓
          </div>
          <h2 className="font-display text-2xl font-bold text-white">Diagnóstico enviado!</h2>
          <p className="mt-2 text-white/60">Nossa equipe retornará pelo WhatsApp em breve.</p>
        </div>
      </section>
    );
  }

  const canNext1 = step === 1 && !data.tipo;
  const canNext2 = step === 2 && !data.praga;
  const canSubmit = !data.name || !data.tel || !data.cidade;

  return (
    <section ref={ref} id="funnel" className="sentinel-section bg-[#002D62]" aria-labelledby="funnel-h">
      <div className="sentinel-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — copy */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
          >
            <span className="text-[.65rem] font-black uppercase tracking-[.22em] text-[#E6FFFA]/55">
              Diagnóstico inicial
            </span>
            <h2 id="funnel-h" className="sentinel-heading-xl mt-3 text-white">
              Diga o problema.
              <br />
              <span className="text-[#E6FFFA]">A gente resolve.</span>
            </h2>
            <p className="mt-4 max-w-[420px] text-[.95rem] leading-[1.8] text-white/55">
              3 perguntas. Direto pelo WhatsApp. Sem formulário lento, sem espera.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { n: '1', t: 'Tipo de local', d: 'Residência, empresa ou condomínio' },
                { n: '2', t: 'Praga identificada', d: 'O que você viu ou suspeita' },
                { n: '3', t: 'Contato', d: 'Nome, WhatsApp e cidade' },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-bold text-white">
                    {n}
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white/85">{t}</strong>
                    <span className="text-[.8rem] text-white/45">{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div
            className={`transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
          >
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,29,62,.35)]">

              {/* Progress */}
              <div className="flex gap-1.5 px-7 pt-6 pb-3">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      s <= step ? 'bg-[#002D62]' : 'bg-[#dce6ef]'
                    }`}
                  />
                ))}
              </div>

              <div className="px-7 pb-2 pt-1">
                <div className="text-[.62rem] font-black uppercase tracking-[.1em] text-[#9CADBF]">
                  {STEPS[step - 1].label}
                </div>
                <div className="mt-1 text-[1.1rem] font-bold text-[#07192F]">{STEPS[step - 1].q}</div>
              </div>

              <div className="px-7 pb-7 pt-4">
                {step === 1 && (
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {PROPERTY_OPTIONS.map((o) => (
                      <OptionBtn
                        key={o.value}
                        active={data.tipo === o.value}
                        onClick={() => setData({ ...data, tipo: o.value })}
                        disabled={isSubmitting}
                      >
                        {o.label}
                      </OptionBtn>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="mb-4 grid grid-cols-4 gap-2">
                    {PEST_OPTIONS.map((o) => (
                      <OptionBtn
                        key={o.value}
                        active={data.praga === o.value}
                        onClick={() => setData({ ...data, praga: o.value })}
                        disabled={isSubmitting}
                      >
                        <span className="text-center text-[.72rem] leading-tight">{o.label}</span>
                      </OptionBtn>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="mb-4 space-y-3">
                    {[
                      { field: 'name', label: 'Seu nome', type: 'text', placeholder: 'Como quer ser chamado?' },
                      { field: 'tel', label: 'WhatsApp', type: 'tel', placeholder: '(16) 9 9999-9999' },
                    ].map(({ field, label, type, placeholder }) => (
                      <div key={field}>
                        <label className="mb-1.5 block text-sm font-semibold text-[#142B45]">{label}</label>
                        <input
                          type={type}
                          value={(data as Record<string, string>)[field]}
                          onChange={(e) => setData({ ...data, [field]: e.target.value })}
                          disabled={isSubmitting}
                          placeholder={placeholder}
                          className="w-full rounded-xl border border-[#dce6ef] bg-white px-4 py-3 text-sm text-[#07192F] placeholder:text-[#9CADBF] focus:border-[#002D62] focus:outline-none transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-[#142B45]">Cidade</label>
                      <select
                        value={data.cidade}
                        onChange={(e) => setData({ ...data, cidade: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full rounded-xl border border-[#dce6ef] bg-white px-4 py-3 text-sm text-[#07192F] focus:border-[#002D62] focus:outline-none transition-colors"
                      >
                        <option value="">Selecione...</option>
                        {CITIES.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-[.65rem] font-black uppercase tracking-[.1em] text-[#9CADBF]">
                        Urgência
                      </label>
                      <div className="flex gap-2">
                        {URGENCY_OPTIONS.map((u) => (
                          <button
                            key={u.value}
                            type="button"
                            onClick={() => setData({ ...data, urg: u.value })}
                            disabled={isSubmitting}
                            className={`flex-1 rounded-xl border py-2.5 text-sm font-bold transition-all ${
                              data.urg === u.value
                                ? 'border-[#002D62] bg-[#E6FFFA] text-[#002D62]'
                                : 'border-[#dce6ef] text-[#9CADBF] hover:border-[#002D62]/30'
                            }`}
                          >
                            {u.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={canNext1 || canNext2}
                    className="w-full rounded-full bg-[#002D62] py-3.5 text-sm font-black text-white transition-all hover:bg-[#053B7A] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Próximo →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || canSubmit}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-black text-white transition-all hover:bg-[#1eb858] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isSubmitting ? 'Enviando...' : '📲 Enviar pelo WhatsApp'}
                  </button>
                )}

                {submitError && (
                  <p role="alert" className="mt-3 text-center text-[.72rem] font-semibold text-red-600">
                    {submitError}
                  </p>
                )}
                <p className="mt-2 text-center text-[.62rem] text-[#9CADBF]">
                  Seus dados vão direto para nossa equipe. Sem spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
