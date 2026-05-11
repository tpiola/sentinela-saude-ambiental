import { useState, useRef, useEffect } from 'react';
import { trpc } from '@/providers/trpc';
import { Home, Building2, Warehouse, MapPin, Bug, Sprout, Rat, Bird, Droplets, HelpCircle, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';

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

  const leadMutation = trpc.leads.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  const steps = [
    { label: 'Passo 1 de 3', q: 'Qual é o tipo do local?' },
    { label: 'Passo 2 de 3', q: 'O que você identificou?' },
    { label: 'Passo 3 de 3', q: 'Como podemos te contatar?' },
  ];

  const propertyOptions = [
    { value: 'residencia', icon: <Home className="w-5 h-5" />, label: 'Residência' },
    { value: 'empresa', icon: <Building2 className="w-5 h-5" />, label: 'Empresa' },
    { value: 'condominio', icon: <Warehouse className="w-5 h-5" />, label: 'Condomínio' },
    { value: 'outro', icon: <MapPin className="w-5 h-5" />, label: 'Outro' },
  ];

  const pestOptions = [
    { value: 'escorpiao', icon: <Bug className="w-5 h-5" />, label: 'Escorpião' },
    { value: 'barata', icon: <Bug className="w-5 h-5" />, label: 'Barata' },
    { value: 'cupim', icon: <Sprout className="w-5 h-5" />, label: 'Cupim' },
    { value: 'rato', icon: <Rat className="w-5 h-5" />, label: 'Rato' },
    { value: 'formiga', icon: <Bug className="w-5 h-5" />, label: 'Formiga' },
    { value: 'pombo', icon: <Bird className="w-5 h-5" />, label: 'Pombo' },
    { value: 'agua', icon: <Droplets className="w-5 h-5" />, label: 'Reserv.' },
    { value: 'outro', icon: <HelpCircle className="w-5 h-5" />, label: 'Outro' },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    const msg = `Diagnóstico Sentinela:%0A%0A• Nome: ${data.name}%0A• WhatsApp: ${data.tel}%0A• Cidade: ${data.cidade}%0A• Tipo: ${data.tipo}%0A• Praga: ${data.praga}%0A• Urgência: ${data.urg}%0A%0AAguardo contato!`;
    window.open(`https://wa.me/5516993747147?text=${msg}`, '_blank');
    leadMutation.mutate({
      name: data.name,
      phone: data.tel,
      city: data.cidade,
      pestType: data.praga,
      propertyType: data.tipo as any,
      urgency: data.urg as any,
      message: `Diagnóstico via site: ${data.praga} em ${data.tipo} em ${data.cidade}`,
      source: 'site_diagnostico',
    });
  };

  if (submitted) {
    return (
      <section id="funnel" className="sentinel-section bg-sentinel-forest" aria-labelledby="funnel-h">
        <div className="sentinel-container text-center py-10">
          <CheckCircle2 className="w-16 h-16 text-sentinel-glow mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-white mb-2">Diagnóstico enviado!</h2>
          <p className="text-white/70">Nossa equipe vai te contatar em menos de 10 minutos.</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="funnel" className="sentinel-section bg-sentinel-forest" aria-labelledby="funnel-h">
      <div className="sentinel-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <span className="text-[.7rem] font-bold tracking-[.14em] uppercase text-sentinel-glow block mb-3">Diagnóstico Inteligente</span>
            <h2 id="funnel-h" className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-[-.02em] text-white mb-5">
              Resposta em menos<br />de <span className="text-sentinel-glow">10 minutos</span>
            </h2>
            <p className="text-[1.05rem] text-white/65 leading-[1.75] mb-8 max-w-[460px]">
              Preencha o diagnóstico rápido e nossa equipe recebe um
              resumo completo do seu caso antes do primeiro contato.
              Atendimento mais rápido, orçamento mais preciso.
            </p>
            <div className="space-y-5">
              {[
                { num: '1', title: 'Tipo de local', desc: 'Residência, empresa ou condomínio' },
                { num: '2', title: 'Praga identificada', desc: 'O que você viu ou suspeita' },
                { num: '3', title: 'Contato e urgência', desc: 'Retornamos via WhatsApp em minutos' },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">{s.title}</strong>
                    <span className="text-white/55 text-sm">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sentinel-xl">
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
                        className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 text-sm font-bold transition-all ${
                          data.tipo === opt.value
                            ? 'border-sentinel-sage bg-sentinel-ice text-sentinel-forest'
                            : 'border-sentinel-mist bg-white text-sentinel-ink-3 hover:border-sentinel-sage/30'
                        }`}
                      >
                        {opt.icon}
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
                        className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border-2 text-[.7rem] font-bold transition-all ${
                          data.praga === opt.value
                            ? 'border-sentinel-sage bg-sentinel-ice text-sentinel-forest'
                            : 'border-sentinel-mist bg-white text-sentinel-ink-3 hover:border-sentinel-sage/30'
                        }`}
                      >
                        {opt.icon}
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
                        placeholder="Como quer ser chamado?"
                        className="w-full px-4 py-3 rounded-xl border-2 border-sentinel-mist bg-white text-sm focus:border-sentinel-sage focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sentinel-ink mb-1.5">WhatsApp</label>
                      <input
                        type="tel"
                        value={data.tel}
                        onChange={(e) => setData({ ...data, tel: e.target.value })}
                        placeholder="(16) 9 9999-9999"
                        className="w-full px-4 py-3 rounded-xl border-2 border-sentinel-mist bg-white text-sm focus:border-sentinel-sage focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sentinel-ink mb-1.5">Cidade</label>
                      <select
                        value={data.cidade}
                        onChange={(e) => setData({ ...data, cidade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-sentinel-mist bg-white text-sm focus:border-sentinel-sage focus:outline-none transition-colors"
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
                          { value: 'alta', label: '🔴 Alta' },
                        ].map((u) => (
                          <button
                            key={u.value}
                            onClick={() => setData({ ...data, urg: u.value })}
                            className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${
                              data.urg === u.value
                                ? 'border-sentinel-sage bg-sentinel-ice text-sentinel-forest'
                                : 'border-sentinel-mist bg-white text-sentinel-ink-4 hover:border-sentinel-sage/30'
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
                    className="w-full py-3.5 rounded-full font-bold bg-sentinel-sage text-white hover:bg-sentinel-forest-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próximo <ChevronRight className="w-4 h-4 inline" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!data.name || !data.tel}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold bg-[#25D366] text-white hover:bg-[#22c55e] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-wpp"
                  >
                    <Phone className="w-4 h-4" />
                    Enviar pelo WhatsApp
                  </button>
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
