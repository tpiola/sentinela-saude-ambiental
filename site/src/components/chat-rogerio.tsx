"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

// ============================================================
// TIPOS
// ============================================================
type LeadData = {
  nome: string;
  email: string;
  whatsapp: string;
  tipo: string;
};

type Message = {
  id: number;
  from: "rogerio" | "user";
  text: string;
};

// ============================================================
// CONSTANTES
// ============================================================
const TIPOS = [
  { id: "residencial", label: "Residencial", emoji: "🏠" },
  { id: "empresa", label: "Empresa", emoji: "🏢" },
  { id: "condominio", label: "Condomínio", emoji: "🏘️" },
  { id: "outros", label: "Outros", emoji: "📋" },
];

const SAUDACAO =
  "Olá! Eu sou o Rogério, especialista em controle de pragas da Sentinela. Antes de conversarmos, me conta rapidinho seus dados que eu já preparo o melhor atendimento pra você:";

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function ChatRogerio() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"lead" | "chat">("lead");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [sending, setSending] = useState(false);

  // Lead form
  const [lead, setLead] = useState<LeadData>({
    nome: "",
    email: "",
    whatsapp: "",
    tipo: "",
  });
  const [leadErrors, setLeadErrors] = useState<Partial<LeadData>>({});
  const [leadStep, setLeadStep] = useState<"nome" | "email" | "whatsapp" | "tipo" | "done">("nome");

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Salvar estado na sessão
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("sentinela-chat-state");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.open !== undefined) setOpen(data.open);
        if (data.messages) setMessages(data.messages);
        if (data.lead && data.lead.nome) {
          setLead(data.lead);
          setStep("chat");
        }
      }
    } catch {}
  }, []);

  // Salvar mudanças
  useEffect(() => {
    try {
      sessionStorage.setItem(
        "sentinela-chat-state",
        JSON.stringify({ open, messages, lead })
      );
    } catch {}
  }, [open, messages, lead]);

  // Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Foco no input
  useEffect(() => {
    if (open && step === "chat") inputRef.current?.focus();
  }, [open, step, messages]);

  // ============================================================
  // ENVIAR LEAD PARA GOOGLE SHEETS + WHATSAPP
  // ============================================================
  const enviarLead = useCallback(async (leadData: LeadData) => {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: leadData.nome,
          email: leadData.email,
          whatsapp: leadData.whatsapp,
          tipo: leadData.tipo,
          origem: "chat-rogerio",
          data: new Date().toISOString(),
        }),
      });
    } catch {
      // Silencioso - o WhatsApp é o principal
    }

    // Abrir WhatsApp com mensagem formatada
    const tipoLabel =
      TIPOS.find((t) => t.id === leadData.tipo)?.label || leadData.tipo;
    const texto = encodeURIComponent(
      `Olá, quero agendar um horário!\n\n` +
        `Nome: ${leadData.nome}\n` +
        `Email: ${leadData.email}\n` +
        `WhatsApp: ${leadData.whatsapp}\n` +
        `Tipo: ${tipoLabel}\n\n` +
        `Vim pelo chat do site.`
    );
    window.open(`https://wa.me/${BRAND.phoneE164}?text=${texto}`, "_blank");
  }, []);

  // ============================================================
  // VALIDAÇÃO DOS CAMPOS
  // ============================================================
  const validarNome = (v: string) => {
    const limpo = v.trim();
    if (!limpo) return "Preencha seu nome completo";
    if (limpo.length < 3) return "Nome muito curto";
    if (!limpo.includes(" ")) return "Coloque nome e sobrenome";
    return "";
  };

  const validarEmail = (v: string) => {
    const limpo = v.trim().toLowerCase();
    if (!limpo) return "Preencha seu email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(limpo)) return "Email inválido. Ex: nome@email.com";
    if (limpo.includes("gmail.con") || limpo.includes("hotmail.con"))
      return 'Você escreveu ".con" — é ".com"?';
    return "";
  };

  const validarWhatsapp = (v: string) => {
    const nums = v.replace(/\D/g, "");
    if (!nums) return "Preencha seu WhatsApp";
    if (nums.length < 10) return "Número muito curto. Coloque DDD + número";
    if (nums.length > 12) return "Número muito longo. Confira o DDD";
    return "";
  };

  // ============================================================
  // ENVIAR LEAD
  // ============================================================
  const finalizarLead = async () => {
    const tipoSelecionado = TIPOS.find((t) => t.id === lead.tipo);
    if (!tipoSelecionado) return;

    setSending(true);
    await enviarLead(lead);

    // Mensagem do Rogério
    const msgs: Message[] = [
      {
        id: Date.now(),
        from: "rogerio",
        text: `Perfeito, ${lead.nome.split(" ")[0]}! Seus dados estão registrados. A equipe da Sentinela já vai te atender no WhatsApp com prioridade. 🚀`,
      },
      {
        id: Date.now() + 1,
        from: "rogerio",
        text: "Enquanto isso, posso tirar qualquer dúvida sobre escorpiões, baratas, cupins, ratos... O que você precisar saber sobre controle de pragas, é só perguntar! 😊",
      },
    ];

    setMessages(msgs);
    setStep("chat");
    setSending(false);
  };

  // ============================================================
  // RESPOSTAS DO ROBO (humanizado, sem markdown)
  // ============================================================
  const responder = (msg: string) => {
    const texto = msg.toLowerCase().trim();

    // Simular digitação
    setTyping(true);

    const delay = 1000 + Math.random() * 2000; // 1-3 segundos
    let resposta = "";

    // Preço / orçamento
    if (
      texto.includes("preço") ||
      texto.includes("valor") ||
      texto.includes("custa") ||
      texto.includes("orçamento") ||
      texto.includes("quanto")
    ) {
      resposta =
        "Cada caso é único, e a gente prefere não dar valor por telefone pra não errar. É mais honesto com você. O orçamento exato a gente faz na visita técnica, avaliando o ambiente e o tipo de praga. Mas fica tranquilo: somos uma das empresas mais justas de Franca. Se quiser, já podemos agendar essa visita sem compromisso, inclusive para hoje ainda. O que acha?";
    }
    // Tempo de secagem
    else if (texto.includes("secar") || texto.includes("secagem") || texto.includes("seco")) {
      resposta =
        "O veneno profissional que usamos seca em cerca de 2 a 4 horas, dependendo do ambiente e da ventilação. A gente sempre orienta o tempo exato na hora do serviço, e você recebe um papelzinho com todas as recomendações. Crianças, pets e alimentos ficam protegidos durante todo o processo.";
    }
    // Sair de casa / afastamento
    else if (texto.includes("sair") || texto.includes("afastamento") || texto.includes("ficar fora")) {
      resposta =
        "Recomendamos que pessoas e animais fiquem fora do ambiente por umas 4 a 6 horas depois da aplicação. Mas isso varia conforme o produto usado. O técnico te explica tudo direitinho antes de começar. Se for caso de escorpião ou emergência, temos protocolos especiais com tempo reduzido.";
    }
    // Condomínio / empresa
    else if (texto.includes("condomínio") || texto.includes("condominio") || texto.includes("empresa") || texto.includes("empresarial")) {
      resposta =
        "Atendemos muitos condomínios e empresas aqui em Franca e região! Temos contrato preventivo com cronograma, laudo ANVISA (RDC 622/2022) e relatório fotográfico de cada visita. O serviço é programado para não atrapalhar a rotina do seu negócio. Quer que eu peça para o Rogério preparar uma proposta personalizada pra você?";
    }
    // Franca / região
    else if (texto.includes("franca") || texto.includes("região") || texto.includes("bairro")) {
      resposta =
        "Sim! Atendemos Franca inteira e região num raio de até 40 km: Batatais, Cristais Paulista, Orlândia, Ituverava, São Joaquim da Barra, Pedregulho, Patrocínio Paulista, Restinga... Praticamente todo o entorno! E o melhor: resposta em menos de 30 minutos. Somos recordistas em agilidade aqui na cidade.";
    }
    // Duração / garantia
    else if (texto.includes("dura") || texto.includes("garantia") || texto.includes("efeito") || texto.includes("volta")) {
      resposta =
        "O efeito começa em até 24 horas e a proteção residual dura de 30 a 90 dias, dependendo do ambiente. A gente recomenda manutenção preventiva trimestral pra residências e bimestral pra comércios. E o melhor: todo serviço tem garantia. Se a praga voltar dentro do prazo acordado, a gente retorna sem custo nenhum.";
    }
    // Segurança
    else if (texto.includes("seguro") || texto.includes("criança") || texto.includes("pet") || texto.includes("animal") || texto.includes("tóxico")) {
      resposta =
        "Super seguro! Usamos produtos registrados na ANVISA e de baixa toxicidade pra pessoas e animais. Antes de aplicar, a gente orienta exatamente o que fazer: afastar crianças, proteger alimentos, cobrir gaiolas e aquários. Seguimos um protocolo rigoroso de segurança. Pode ficar tranquilo — a gente pensa na sua família primeiro.";
    }
    // Escorpião
    else if (texto.includes("escorpião") || texto.includes("escorpiao")) {
      resposta =
        "Escorpião é caso de prioridade máxima pra gente. O amarelo (Tityus serrulatus) é o mais perigoso e comum aqui em Franca, especialmente nos bairros Baldassari, City Petrópolis e Jardim Francano. Crianças e idosos correm mais risco. Se você viu um, não tente pegar! A gente vai até você o mais rápido possível. Quer agendar agora?";
    }
    // Barata
    else if (texto.includes("barata")) {
      resposta =
        "Barata alemã e barata de esgoto são as campeãs aqui na região. Elas transmitem doenças, contaminam alimentos e se reproduzem muito rápido. Nosso tratamento combina gel inseticida, pulverização em frestas e monitoramento. Em 24 horas você já vê resultado. Dependendo do grau de infestação, fazemos 2 visitas com intervalo de 15 dias.";
    }
    // Cupim
    else if (texto.includes("cupim")) {
      resposta =
        "Cupim é silencioso e perigoso pro seu patrimônio. Quando você percebe, já comprometeu estrutura de madeira, rodapés e móveis. A gente faz barreira química no solo, injeção em pontos estratégicos e monitoramento contínuo. O serviço inclui garantia contratual de 5 anos na área tratada. Quer proteger sua casa?";
    }
    // Rato
    else if (texto.includes("rato") || texto.includes("rato")) {
      resposta =
        "Ratos transmitem leptospirose e outras doenças sérias. Usamos iscas em porta-iscas blindados (totalmente seguros) e fazemos a desratização completa: identificação de tocas, pontos de entrada, vedação e monitoramento. Você recebe relatório técnico com fotos de cada ponto tratado.";
    }
    // Agendar
    else if (texto.includes("agendar") || texto.includes("visita") || texto.includes("hoje") || texto.includes("amanhã") || texto.includes("semana")) {
      resposta = `Perfeito, ${lead.nome ? lead.nome.split(" ")[0] : "vamos agendar"}! Vou te passar para o Rogério agora mesmo no WhatsApp. Ele vai confirmar o melhor horário pra você ainda hoje. É rapidinho! 📅`;
      // Delay extra e abrir WhatsApp
      setTimeout(() => {
        const tipoLabel = TIPOS.find((t) => t.id === lead.tipo)?.label || "Não informado";
        const texto = encodeURIComponent(
          `Olá, quero agendar um horário!\n\nNome: ${lead.nome}\nWhatsApp: ${lead.whatsapp}\nTipo: ${tipoLabel}\n\nVim pelo chat do site.`
        );
        window.open(`https://wa.me/${BRAND.phoneE164}?text=${texto}`, "_blank");
      }, 3000);
    }
    // Dúvida / hesitação
    else if (
      texto.includes("dúvida") ||
      texto.includes("duvida") ||
      texto.includes("obrigado") ||
      texto.includes("humano") ||
      texto.includes("atendente") ||
      texto.includes("pessoa")
    ) {
      resposta =
        "Claro! Vou te passar pro Rogério agora. Ele é o especialista e vai te atender pessoalmente com toda atenção. Pode ficar à vontade pra perguntar tudo. Já estou enviando seus dados pra ele. 😊";
    }
    // Default
    else {
      resposta =
        "Entendi! A gente resolve isso sim. Somos especialistas em controle de pragas aqui em Franca, com mais de 11 anos de experiência. Atendimento rápido, laudo ANVISA e garantia em tudo que fazemos. Se quiser, posso pedir pro Rogério entrar em contato agora mesmo pra agendar uma visita sem compromisso. O que acha?";
    }

    // Simular digitação e responder
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), from: "rogerio", text: resposta },
      ]);
    }, delay);
  };

  // ============================================================
  // ENVIAR MENSAGEM DO USUÁRIO
  // ============================================================
  const enviarMensagem = () => {
    const txt = input.trim();
    if (!txt || sending) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: txt },
    ]);
    setInput("");
    responder(txt);
  };

  // ============================================================
  // AVANÇAR NO LEAD FORM
  // ============================================================
  const avancarLead = () => {
    const errors: Partial<LeadData> = {};

    if (leadStep === "nome") {
      const err = validarNome(lead.nome);
      if (err) {
        errors.nome = err;
        setLeadErrors(errors);
        return;
      }
      setLeadErrors({});
      setLeadStep("email");
    } else if (leadStep === "email") {
      const err = validarEmail(lead.email);
      if (err) {
        errors.email = err;
        setLeadErrors(errors);
        return;
      }
      setLeadErrors({});
      setLeadStep("whatsapp");
    } else if (leadStep === "whatsapp") {
      const err = validarWhatsapp(lead.whatsapp);
      if (err) {
        errors.whatsapp = err;
        setLeadErrors(errors);
        return;
      }
      setLeadErrors({});
      setLeadStep("tipo");
    }
  };

  const selecionarTipo = (tipo: string) => {
    setLead((prev) => ({ ...prev, tipo }));
  };

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <>
      {/* Botão flutuante */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="fixed right-4 bottom-20 z-[70] flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-4 ring-[#8fce2a]/30 md:right-8 md:bottom-28"
            style={{ background: "#075e54" }}
            aria-label="Abrir chat com Rogério"
          >
            <img
              src="/avatar-rogerio.png"
              alt="Rogério"
              className="h-10 w-10 rounded-full object-cover"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Janela do chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 right-0 z-[80] flex h-[90vh] w-full flex-col overflow-hidden bg-[#e5ddd5] shadow-2xl sm:bottom-20 sm:right-4 sm:h-[550px] sm:w-[380px] sm:rounded-2xl md:bottom-28 md:right-8"
            style={{
              backgroundImage:
                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBRwB0YwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEISURBVGiB7doxCsJAEAbgWcRCxNoLeAMfwRewF+zEO/gAG0E7ixRWFhZiYWPjA8TGQiSFX5AQQgzZ3Zn5YHdndv5ZWBaoVCqVSqVS/S9E3Tn4m4n4cPyJiN0ds9C1JHrFu3+/4I4sQy3mkxK5o8SYY42OqkGkLXRTj9kC7VjbxDNK5B01aEZbcqwTkXj9R7aLs2INEPkQx4Vl5jUDZGsm9G0qMB9k2aRTybnVDPC85muoEzAGpMoMW5u1Bl1SB5l1orwG/r0Wj3NEdKBep+SOfFoizjEkJK40dmd8W5M/HXIXV+i6cVK/nx7I9mQFeFZzVIGFVcC/w9qAEb1Gbg+0BlUXcO3H8yD9hVoh9YISqRyR3FEet8oF8gVAuSEbO3O5UAAAAABJRU5ErkJggg==')",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
              <img
                src="/avatar-rogerio.png"
                alt="Rogério"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Rogério</p>
                <p className="text-xs text-green-200">Atendimento Sentinela</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10"
                aria-label="Fechar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* ============ LEAD FORM ============ */}
              {step === "lead" && (
                <div className="space-y-3">
                  {/* Saudação */}
                  <div className="flex items-start gap-2">
                    <div className="chat-bubble-rogerio">{SAUDACAO}</div>
                  </div>

                  {/* Campo Nome */}
                  {leadStep === "nome" && (
                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Nome completo
                      </label>
                      <input
                        autoFocus
                        type="text"
                        value={lead.nome}
                        onChange={(e) => setLead((p) => ({ ...p, nome: e.target.value }))}
                        onKeyDown={(e) => e.key === "Enter" && avancarLead()}
                        placeholder="Seu nome e sobrenome"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-[#075e54] focus:ring-1 focus:ring-[#075e54]"
                      />
                      {leadErrors.nome && (
                        <p className="text-xs text-red-500">{leadErrors.nome}</p>
                      )}
                      <button
                        onClick={avancarLead}
                        className="w-full rounded-lg bg-[#075e54] py-2.5 text-xs font-bold text-white transition hover:bg-[#05473e]"
                      >
                        Continuar
                      </button>
                    </div>
                  )}

                  {/* Campo Email */}
                  {leadStep === "email" && (
                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs text-gray-400">
                        Ok, {lead.nome.split(" ")[0]}! Qual seu melhor email?
                      </p>
                      <input
                        autoFocus
                        type="email"
                        value={lead.email}
                        onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                        onKeyDown={(e) => e.key === "Enter" && avancarLead()}
                        placeholder="nome@email.com"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-[#075e54] focus:ring-1 focus:ring-[#075e54]"
                      />
                      {leadErrors.email && (
                        <p className="text-xs text-red-500">{leadErrors.email}</p>
                      )}
                      <button
                        onClick={avancarLead}
                        className="w-full rounded-lg bg-[#075e54] py-2.5 text-xs font-bold text-white transition hover:bg-[#05473e]"
                      >
                        Continuar
                      </button>
                    </div>
                  )}

                  {/* Campo WhatsApp */}
                  {leadStep === "whatsapp" && (
                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs text-gray-400">
                        E seu WhatsApp com DDD?
                      </p>
                      <input
                        autoFocus
                        type="tel"
                        value={lead.whatsapp}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, "");
                          if (val.length > 11) val = val.slice(0, 11);
                          if (val.length > 2)
                            val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
                          setLead((p) => ({ ...p, whatsapp: val }));
                        }}
                        onKeyDown={(e) => e.key === "Enter" && avancarLead()}
                        placeholder="(16) 99999-9999"
                        maxLength={16}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-[#075e54] focus:ring-1 focus:ring-[#075e54]"
                      />
                      {leadErrors.whatsapp && (
                        <p className="text-xs text-red-500">{leadErrors.whatsapp}</p>
                      )}
                      <button
                        onClick={avancarLead}
                        className="w-full rounded-lg bg-[#075e54] py-2.5 text-xs font-bold text-white transition hover:bg-[#05473e]"
                      >
                        Continuar
                      </button>
                    </div>
                  )}

                  {/* Seleção de Tipo */}
                  {leadStep === "tipo" && (
                    <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-xs text-gray-500">
                        Qual tipo de atendimento, {lead.nome.split(" ")[0]}?
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {TIPOS.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => selecionarTipo(t.id)}
                            className={`flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-3 text-sm font-semibold transition ${
                              lead.tipo === t.id
                                ? "border-[#075e54] bg-[#075e54]/10 text-[#075e54]"
                                : "border-gray-200 bg-white text-gray-600 hover:border-[#075e54]/40"
                            }`}
                          >
                            <span className="text-lg">{t.emoji}</span>
                            {t.label}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={finalizarLead}
                        disabled={!lead.tipo || sending}
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-bold text-white transition hover:bg-[#1ea952] disabled:opacity-50"
                      >
                        {sending ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Salvando...
                          </>
                        ) : (
                          <>
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            Iniciar Atendimento
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* ============ CHAT ============ */}
              {step === "chat" &&
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-3 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from === "rogerio" && (
                      <img
                        src="/avatar-rogerio.png"
                        alt="Rogério"
                        className="mr-2 h-7 w-7 flex-shrink-0 self-end rounded-full object-cover"
                      />
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                        msg.from === "user"
                          ? "rounded-br-md bg-[#dcf8c6] text-gray-900"
                          : "rounded-bl-md bg-white text-gray-800"
                      }`}
                      style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

              {/* Indicador de digitação */}
              {typing && (
                <div className="mb-3 flex items-start gap-2">
                  <img
                    src="/avatar-rogerio.png"
                    alt="Rogério"
                    className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                    <span className="text-xs text-gray-400">Digitando</span>
                    <span className="flex gap-0.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            {step === "chat" && (
              <div className="flex items-center gap-2 border-t border-gray-200 bg-[#f0f0f0] px-3 py-2.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
                  placeholder="Digite sua mensagem..."
                  disabled={typing}
                  className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#075e54] disabled:opacity-50"
                />
                <button
                  onClick={enviarMensagem}
                  disabled={!input.trim() || typing}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#075e54] text-white transition hover:bg-[#05473e] disabled:opacity-40"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            )}

            {/* Footer do lead form */}
            {step === "lead" && (
              <div className="border-t border-gray-200 bg-[#f0f0f0] px-4 py-2.5 text-center">
                <p className="text-[10px] text-gray-400">
                  Seus dados estão seguros. Não compartilhamos com ninguém.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
