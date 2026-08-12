"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

function Icon({ type }: { type: "shield" | "alert" | "arrow" }) {
  const path = type === "shield"
    ? "M12 3 5 6v5c0 4.7 2.9 8.4 7 10 4.1-1.6 7-5.3 7-10V6l-7-3Zm-3 9 2 2 4-4"
    : type === "alert"
      ? "M12 9v4m0 4h.01M10.3 3.7 2.4 17.4A2 2 0 0 0 4.1 20h15.8a2 2 0 0 0 1.7-2.6L13.7 3.7a2 2 0 0 0-3.4 0Z"
      : "M5 12h14m-5-5 5 5-5 5";
  return <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>;
}

const steps = [
  {
    key: "place",
    question: "Onde você encontrou o sinal?",
    options: ["Cozinha", "Quarto ou sala", "Banheiro ou ralo", "Quintal ou garagem", "Empresa"],
    relief: "Certo. O local já reduz as possibilidades e evita aplicação desnecessária.",
  },
  {
    key: "size",
    question: "Qual área precisa ser protegida?",
    options: ["Até 60 m²", "61–120 m²", "121–250 m²", "Acima de 250 m²"],
    relief: "A dosagem será dimensionada para o ambiente, com cuidado específico para crianças e pets.",
  },
  {
    key: "level",
    question: "Qual situação descreve melhor o caso?",
    options: ["Vi uma vez hoje", "Apareceu mais de uma vez", "Há ninho, fezes ou danos", "Houve contato ou picada"],
    relief: "Triagem concluída. Agora mostramos o próximo passo mais seguro.",
  },
] as const;

type Answers = Partial<Record<(typeof steps)[number]["key"], string>>;

export function SovereignHero() {
  const reduceMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const complete = step >= steps.length;
  const progress = complete ? 100 : started ? ((step + 1) / steps.length) * 100 : 0;
  const risk = useMemo(() => {
    const level = answers.level ?? "";
    if (level.includes("contato") || level.includes("picada")) return "crítico";
    if (level.includes("ninho") || level.includes("mais de uma")) return "prioritário";
    return "monitorado";
  }, [answers.level]);

  function choose(value: string) {
    const current = steps[step];
    setAnswers((old) => ({ ...old, [current.key]: value }));
    window.dispatchEvent(new CustomEvent("sovereign:event", {
      detail: { event_name: "diagnosis_step_completed", step: step + 1, answer_code: value },
    }));
    setTimeout(() => setStep((value) => value + 1), reduceMotion ? 0 : 240);
  }

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#071019] text-white">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(245,158,11,.18),transparent_34%),linear-gradient(145deg,#071019_0%,#0b2030_58%,#eef8f5_100%)]"
        animate={{ opacity: complete ? 0.42 : 1, scale: complete ? 1.04 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.8 }}
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-100/10 px-3 py-2 text-xs font-semibold tracking-wide text-emerald-100">
            <Icon type="shield" /> Segurança sanitária em Franca e região
          </div>
          <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[.96] tracking-[-.035em] sm:text-7xl">
            Você viu uma praga. <span className="text-emerald-300">Agora vamos reduzir o risco.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-200 sm:text-lg">
            Em 3 respostas, identificamos a prioridade e mostramos o próximo passo seguro — sem compromisso.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => {
                setStarted(true);
                window.dispatchEvent(new CustomEvent("sovereign:event", { detail: { event_name: "diagnosis_started", entry_cta: "hero" } }));
              }}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 font-bold text-[#071019] shadow-[0_18px_50px_rgba(110,231,183,.22)] transition hover:bg-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-200/30"
            >
              Iniciar diagnóstico — 3 cliques <Icon type="arrow" />
            </button>
            <a
              href="https://wa.me/5516993747147?text=EMERG%C3%8ANCIA%3A%20h%C3%A1%20crian%C3%A7a%2C%20pet%2C%20contato%20ou%20picada.%20Preciso%20de%20triagem."
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-6 font-semibold text-amber-100 transition hover:bg-amber-300/20 focus:outline-none focus:ring-4 focus:ring-amber-200/20"
            >
              <Icon type="alert" /> Priorizar emergência
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400">Se houve picada ou intoxicação, procure atendimento médico imediatamente.</p>
        </div>

        <AnimatePresence mode="wait">
          {started && !complete && (
            <motion.div
              key={step}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              className="rounded-[2rem] border border-white/10 bg-[#0a1621]/85 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              <div className="mb-7">
                <div className="mb-2 flex justify-between text-xs text-slate-300"><span>Diagnóstico sanitário</span><span>{step + 1}/3</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} /></div>
              </div>
              <h2 className="text-balance text-2xl font-semibold">{steps[step].question}</h2>
              <div className="mt-5 grid gap-3">
                {steps[step].options.map((option) => (
                  <button key={option} onClick={() => choose(option)} className="min-h-14 rounded-2xl border border-white/10 bg-white/[.045] px-4 text-left font-medium transition hover:border-emerald-300/60 hover:bg-emerald-300/10 focus:outline-none focus:ring-4 focus:ring-emerald-200/20">
                    {option}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-emerald-100/80">{steps[step].relief}</p>
            </motion.div>
          )}

          {complete && (
            <motion.div key="result" initial={reduceMotion ? false : { opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[2rem] bg-[#f5fbf9] p-6 text-[#071019] shadow-2xl sm:p-8">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Icon type="shield" /></span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Prioridade {risk}</p>
              <h2 className="mt-2 text-3xl font-semibold">Seu próximo passo seguro está definido.</h2>
              <p className="mt-4 leading-7 text-slate-600">Isole o ponto observado, mantenha crianças e pets afastados e confirme a triagem com a equipe técnica.</p>
              <a href="https://wa.me/5516993747147?text=Conclu%C3%AD%20o%20diagn%C3%B3stico%20de%203%20cliques.%20Quero%20reservar%20um%20atendimento%20seguro." className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#071019] px-6 font-bold text-white">
                Reservar atendimento seguro <Icon type="arrow" />
              </a>
              <p className="mt-4 text-center text-xs text-slate-500">Produtos regularizados • Protocolo Pet & Child Safe • Laudo técnico</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SovereignHero;
