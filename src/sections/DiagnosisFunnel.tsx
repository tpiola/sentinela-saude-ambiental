import { useState, useRef, useEffect } from 'react';
import { trpc } from '@/providers/trpc';
import { createLeadDedupeKey, createWhatsAppUrl, normalizePhone } from '@/lib/whatsapp';

type PropertyType = 'residencia' | 'empresa' | 'condominio' | 'outro';
type Urgency = 'baixa' | 'media' | 'alta';

const LEAD_SOURCE = 'site_diagnostico';

export default function DiagnosisFunnel() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    tipo: '',
    praga: '',
    urg: 'media',
    name: '',
    tel: '',
    cidade: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLockRef = useRef(false);
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const leadMutation = trpc.leads.create.useMutation();

  const steps = [
    { label: 'Passo 1 de 3', q: 'Qual é o tipo do local?' },
    { label: 'Passo 2 de 3', q: 'O que você identificou?' },
    { label: 'Passo 3 de 3', q: 'Como podemos te contatar?' },
  ];

  const propertyOptions = [
    { value: 'residencia', label: 'Residência' },
    { value: 'empresa', label: 'Empresa' },
    { value: 'condominio', label: 'Condomínio' },
    { value: 'outro', label: 'Outro' },
  ];

  const pestOptions = [
    { value: 'escorpiao', label: 'Escorpião' },
    { value: 'barata', label: 'Barata' },
    { value: 'cupim', label: 'Cupim' },
    { value: 'rato', label: 'Rato' },
    { value: 'formiga', label: 'Formiga' },
    { value: 'pombo', label: 'Pombo' },
    { value: 'agua', label: "Caixa d'água" },
    { value: 'outro', label: 'Outro' },
  ];

  const validateLead = () => {
    if (!data.tipo) return 'Escolha o tipo do local.';
    if (!data.praga) return 'Escolha a praga ou serviço identificado.';
    if (!data.name.trim()) return 'Informe seu nome.';
    if (normalizePhone(data.tel).length < 10) return 'Informe um WhatsApp válido com DDD.';
    if (!data.cidade) return 'Selecione a cidade.';
    if (!data.urg) return 'Escolha a urgência.';
    return '';
  };

  const handleNext = () => {
    setSubmitError('');
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (submitLockRef.current) return;

    const error = validateLead();
    if (error) {
      setSubmitError(error);
      return;
    }

    submitLockRef.current = true;
    setIsSubmitting(true);
    setSubmitError('');

    const message = `Diagnóstico Sentinela:

Nome: ${data.name.trim()}
WhatsApp: ${data.tel}
Cidade: ${data.cidade}
Tipo: ${data.tipo}
Praga: ${data.praga}
Urgência: ${data.urg}

Aguardo contato!`;
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');

    try {
      await leadMutation.mutateAsync({
        name: data.name.trim(),
        phone: data.tel,
        city: data.cidade,
        pestType: data.praga,
        propertyType: data.tipo as PropertyType,
        urgency: data.urg as Urgency,
        message: `Diagnóstico via site: ${data.praga} em ${data.tipo} em ${data.cidade}`,
        source: LEAD_SOURCE,
        dedupeKey: createLeadDedupeKey({
          phone: data.tel,
          propertyType: data.tipo,
          pestType: data.praga,
          source: LEAD_SOURCE,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitError('O WhatsApp foi aberto, mas não conseguimos confirmar o cadastro automático. Tente novamente em instantes se a equipe não responder.');
      submitLockRef.current = false;
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="funnel" className="sentinel-section bg-sentinel-forest" aria-labelledby="funnel-h">
        <div className="sentinel-container text-center py-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sentinel-glow text-xl font-semibold text-sentinel-forest">
            OK
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">Diagnóstico enviado!</h2>
          <p className="text-white/70">As informações foram enviadas para contato pelo WhatsApp.</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="funnel" className="sentinel-section bg-sentinel-forest" aria-labelledby="funnel-h">
      <div className="sentinel-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <span className="text-[.7rem] font-bold tracking-[.14em] uppercase text-sentinel-glow block mb-3">Diagnóstico inicial</span>
            <h2 id="funnel-h" className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] text-white mb-5">
              Envie os dados do <span className="text-sentinel-glow">problema</span>
            </h2>
            <p className="text-[1.05rem] text-white/70 leading-[1.75] mb-8 max-w-[460px]">
              Preencha o formulário para organizar as informações básicas
              antes do contato: tipo de local, praga observada, cidade e
              dados de retorno.
            </p>
            <div className="space-y-5">
              {[
                { num: '1', title: 'Tipo de local', desc: 'Residência, empresa ou condomínio' },
                { num: '2', title: 'Praga identificada', desc: 'O que você viu ou suspeita' },
                { num: '3', title: 'Contato e urgência', desc: 'Dados para retorno pelo WhatsApp' },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">{s.title}</strong>
                    <span className="text-white/60 text-sm">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="bg-white rounded-[28px] overflow-hidden shadow-sentinel-xl">
              {/* Progress */}
              <div className="flex items-center gap-2 px-8 pt-6 pb-3">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${s <= step ? 'bg-sentinel-sage' : 'bg-sentinel-mist'}`}
                  />
                ))}
              </div>
              <div className="px-8 pb-2">
                <div className="text-[.7rem] font-bold text-sentinel-ink-5 tracking-[.06em] uppercase">{steps[step - 1].label}</div>
                <div className="text-[1.15rem] font-bold text-sentinel-ink mt-1">{steps[step - 1].q}</div>
              </div>

              <div className="px-8 pb-8 pt-4">
                {step === 1 && (
                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {propertyOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setData({ ...data, tipo: opt.value })}
                        disabled={isSubmitting}
                        className={`flex items-center justify-center px-4 py-4 rounded-2xl border text-sm font-bold transition-all ${
                          data.tipo === opt.value
                            ? 'border-sentinel-forest bg-sentinel-ice text-sentinel-forest'
                            : 'border-sentinel-mist bg-white text-sentinel-ink-3 hover:border-sentinel-forest/30'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-4 gap-2.5 mb-4">
                    {pestOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setData({ ...data, praga: opt.value })}
                        disabled={isSubmitting}
                        className={`flex min-h-14 items-center justify-center px-2 py-3 rounded-2xl border text-[.72rem] font-bold transition-all ${
                          data.praga === opt.value
                            ? 'border-sentinel-forest bg-sentinel-ice text-sentinel-forest'
                            : 'border-sentinel-mist bg-white text-sentinel-ink-3 hover:border-sentinel-forest/30'
                        }`}
                      >
                        <span className="text-center leading-tight">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-sentinel-ink mb-1.5">Seu nome</label>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        disabled={isSubmitting}
                        placeholder="Como quer ser chamado?"
                        className="w-full px-4 py-3 rounded-2xl border border-sentinel-mist bg-white text-sm focus:border-sentinel-forest focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sentinel-ink mb-1.5">WhatsApp</label>
                      <input
                        type="tel"
                        value={data.tel}
                        onChange={(e) => setData({ ...data, tel: e.target.value })}
                        disabled={isSubmitting}
                        placeholder="(16) 9 9999-9999"
                        className="w-full px-4 py-3 rounded-2xl border border-sentinel-mist bg-white text-sm focus:border-sentinel-forest focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sentinel-ink mb-1.5">Cidade</label>
                      <select
                        value={data.cidade}
                        onChange={(e) => setData({ ...data, cidade: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-2xl border border-sentinel-mist bg-white text-sm focus:border-sentinel-forest focus:outline-none transition-colors"
                      >
                        <option value="">Selecione...</option>
                        <option>Franca SP</option>
                        <option>Batatais</option>
                        <option>Cristais Paulista</option>
                        <option>Pedregulho</option>
                        <option>Orlândia</option>
                        <option>São Joaquim da Barra</option>
                        <option>Ituverava</option>
                        <option>Outra cidade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[.7rem] font-bold text-sentinel-ink-4 tracking-[.08em] uppercase mb-2">Urgência</label>
                      <div className="flex gap-2">
                        {[
                          { value: 'baixa', label: 'Baixa' },
                          { value: 'media', label: 'Média' },
                          { value: 'alta', label: 'Alta' },
                        ].map((u) => (
                          <button
                            key={u.value}
                            onClick={() => setData({ ...data, urg: u.value })}
                            disabled={isSubmitting}
                            className={`flex-1 py-2.5 rounded-2xl text-sm font-bold border transition-all ${
                              data.urg === u.value
                                ? 'border-sentinel-forest bg-sentinel-ice text-sentinel-forest'
                                : 'border-sentinel-mist bg-white text-sentinel-ink-4 hover:border-sentinel-forest/30'
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
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !data.tipo) ||
                      (step === 2 && !data.praga)
                    }
                    className="w-full py-3.5 rounded-full font-bold bg-sentinel-forest text-white hover:bg-sentinel-forest-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próximo
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !data.name || !data.tel || !data.cidade}
                    className="flex items-center justify-center w-full py-3.5 rounded-full font-bold bg-sentinel-glow text-sentinel-forest hover:bg-sentinel-mint transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar pelo WhatsApp'}
                  </button>
                )}

                {submitError && (
                  <p className="text-center text-[.75rem] font-semibold text-sentinel-red mt-3" role="alert">
                    {submitError}
                  </p>
                )}
                <p className="text-center text-[.68rem] text-sentinel-ink-5 mt-2">
                  Dados vão direto para nossa equipe. Sem spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
