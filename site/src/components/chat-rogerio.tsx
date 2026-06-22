"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { BRAND, whatsappHref } from "@/lib/brand";

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

type Sender = "bot" | "user";

interface Message {
  id: number;
  sender: Sender;
  text: string;
  /** Se true, renderiza um botão de WhatsApp junto da mensagem */
  showCta?: boolean;
}

// ---------------------------------------------------------------------------
// Constantes / mensagens pré-definidas
// ---------------------------------------------------------------------------

const MENSAGEM_BOAS_VINDAS =
  "Olá! 👋 Eu sou o Rogério, assistente virtual da Sentinela Saúde Ambiental. " +
  "Pode me perguntar sobre controle de pragas, escorpião, dedetização, " +
  "prazos, segurança, áreas de atendimento... no que posso ajudar?";

const MSG_PRECO =
  "Cada caso é único — a gente prefere fazer um orçamento certinho durante " +
  "a visita técnica, sem surpresas. É mais ético e seguro pra você. " +
  "Quer agendar uma visita? 📋";

const MSG_ENCAMINHAR =
  "Vou te passar pro Rogério, que é o especialista! " +
  "Ele vai te atender pessoalmente 😊";

const MSG_FALLBACK =
  "Vou chamar o Rogério pra te explicar melhor! 📞";

const WA_CTA_MSG =
  "Olá, Rogério! Passei pelo chat do site e quero conversar com você.";

// ---------------------------------------------------------------------------
// Motor de palavras-chave → resposta
// ---------------------------------------------------------------------------

interface Regra {
  /** Palavras-chave (minúsculas, sem acentos) */
  chaves: string[];
  resposta: string;
  /** Se true, mostra o botão de WhatsApp junto */
  cta?: boolean;
}

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // remove acentos
}

const REGRAS: Regra[] = [
  // --- Preço / orçamento / valores ---
  {
    chaves: [
      "preco", "preços", "valor", "valores", "custa", "custo",
      "quanto", "orcamento", "orçamento", "taxa", "cobram",
      "cobrado", "caro", "barato",
    ],
    resposta: MSG_PRECO,
    cta: true,
  },

  // --- Tempo de secagem ---
  {
    chaves: ["secar", "secagem", "secando", "seco", "quanto tempo pro veneno"],
    resposta:
      "O tempo de secagem varia conforme o produto e o ambiente, " +
      "mas em geral fica entre **2 e 4 horas**. A gente orienta certinho " +
      "no dia da aplicação, dependendo do local tratado. 😉",
  },

  // --- Precisa sair de casa ---
  {
    chaves: [
      "sair de casa", "precisa sair", "ausentar", "afastamento",
      "ficar fora", "quanto tempo fora", "tempo fora",
    ],
    resposta:
      "Sim, a gente recomenda um afastamento de **4 a 6 horas** " +
      "após a aplicação, por segurança. Depois disso o ambiente já " +
      "está liberado pra voltar tranquilo. 🏠✅",
  },

  // --- Condomínios / empresas ---
  {
    chaves: [
      "condominio", "condomínio", "empresa", "empresarial",
      "comercio", "comércio", "industria", "indústria",
      "clinica", "clínica",
    ],
    resposta:
      "Sim! Atendemos condomínios, empresas, indústrias, comércios " +
      "e clínicas com contratos preventivos, laudo técnico e certificado " +
      "válido para Vigilância Sanitária (ANVISA - RDC 622/2022). " +
      "Tudo documentado com cronograma e registro fotográfico. 🏢📋",
  },

  // --- Atende Franca / região ---
  {
    chaves: [
      "franca", "atende em", "regiao", "região",
      "batatais", "cristais", "orlandia", "orlândia",
      "ituverava", "sao joaquim", "pedregulho",
      "patrocinio", "restinga", "area", "área",
      "cidade", "cidades",
    ],
    resposta:
      "Atendemos **Franca/SP e região** num raio de até 40 km: " +
      "Franca, Batatais, Cristais Paulista, Orlândia, Ituverava, " +
      "São Joaquim da Barra, Pedregulho, Patrocínio Paulista, Restinga " +
      "e todos os bairros de Franca! 📍",
  },

  // --- Bairros de Franca ---
  {
    chaves: [
      "bairro", "bairros", "jardim francano", "city petropolis",
      "parque progresso", "residencial baldassari",
      "vila santa terezinha", "jardim panorama", "vila aparecida",
      "parque dos pinhais", "jardim consolacao", "jardim do eden",
    ],
    resposta:
      "Sim! Atendemos todos os bairros de Franca: Centro, " +
      "Jardim Francano, City Petrópolis, Parque Progresso, " +
      "Residencial Baldassari, Vila Santa Terezinha, Jardim Panorama, " +
      "Vila Aparecida, Parque dos Pinhais, Jardim Consolação, " +
      "Residencial Paraíso e Jardim do Éden. 🏘️",
  },

  // --- Duração do efeito / garantia ---
  {
    chaves: [
      "duracao", "duração", "dura", "efeito", "garantia",
      "protecao", "proteção", "validade", "quanto tempo dura",
      "trimestral", "preventiva",
    ],
    resposta:
      "O efeito imediato é em até 24h. A proteção residual dura de " +
      "**30 a 90 dias**, dependendo do produto e do ambiente. " +
      "A gente recomenda preventiva **trimestral** pra residências " +
      "e **bimestral** pra comércios. Assim sua proteção nunca para! 🛡️",
  },

  // --- Segurança / crianças / pets ---
  {
    chaves: [
      "seguro", "seguranca", "crianca", "criança", "criancas",
      "bebe", "bebê", "gestante", "pet", "pets", "animais",
      "cachorro", "gato", "toxicos", "toxico", "tóxico",
    ],
    resposta:
      "Sim, é seguro! Trabalhamos com produtos de **baixa toxicidade** " +
      "registrados na ANVISA (RDC 622/2022). Crianças, gestantes, pets " +
      "e alimentos são protegidos durante toda a aplicação. " +
      "A gente orienta o tempo de afastamento necessário pra cada ambiente. 🐶👶✅",
  },

  // --- Escorpião ---
  {
    chaves: [
      "escorpiao", "escorpião", "escorpioes", "escorpiões",
      "apareceu escorpiao", "picada", "escorpiao em casa",
    ],
    resposta:
      "Escorpião é caso de **atendimento prioritário**! Mantenha distância, " +
      "não tente capturar, e chame a gente imediatamente. O escorpião-amarelo " +
      "(" + "Tityus serrulatus" + ") é o mais comum em Franca — crianças e " +
      "idosos correm maior risco. Respondemos em minutos pelo WhatsApp! 🦂⚠️",
    cta: true,
  },

  // --- Baratas ---
  {
    chaves: ["barata", "baratas"],
    resposta:
      "Para baratas, usamos gel biologicamente formulado ou pulverização " +
      "profissional. O tratamento elimina a infestação de forma segura " +
      "e com garantia. Quer agendar uma visita técnica? 😊",
    cta: true,
  },

  // --- Cupins ---
  {
    chaves: ["cupim", "cupins", "descupinizacao"],
    resposta:
      "Cupim não dá trégua — a gente faz barreira química com garantia " +
      "contratual para proteger seu patrimônio. O tratamento é seguro e " +
      "definitivo. Quer uma avaliação? 🪵🔨",
    cta: true,
  },

  // --- Ratos / roedores ---
  {
    chaves: ["rato", "ratos", "roedor", "roedores", "desratizacao"],
    resposta:
      "Desratização com iscas seguras em porta-iscas blindados. " +
      "Monitoramento contínuo e relatório técnico. " +
      "Resolvemos o problema de forma definitiva! 🐀🚫",
    cta: true,
  },

  // --- Caixa d'água ---
  {
    chaves: ["caixa d'agua", "caixa dagua", "caixa de agua"],
    resposta:
      "Fazemos limpeza de caixas d'água conforme a Portaria GM/MS 888/2021. " +
      "Água limpa e segura pra sua família! 🚰✨",
    cta: true,
  },

  // --- Laudo ANVISA ---
  {
    chaves: ["laudo", "anvisa", "vigilancia", "vigilância", "certificado"],
    resposta:
      "Emitimos laudo técnico e certificado válido para Vigilância Sanitária " +
      "conforme RDC 622/2022. Tudo documentado com cronograma, registro " +
      "fotográfico e assinatura de responsável técnico. 📄✅",
  },

  // --- Horário de funcionamento ---
  {
    chaves: [
      "horario", "horário", "funciona", "aberto",
      "domingo", "sabado", "sábado", "hora",
    ],
    resposta:
      "Funcionamos de **segunda a sábado das 07:00 às 19:00**, " +
      "e **domingo das 08:00 às 17:00**. " +
      "Atendimento de verdade, quando você precisa! ⏰",
  },

  // --- Endereço ---
  {
    chaves: ["endereco", "endereço", "onde fica", "localizado", "fica"],
    resposta:
      "Estamos na **Av. Pedro Calandria Fernandes, 1300 — Franca/SP, " +
      "CEP 14407-350**. Atendemos em toda Franca e região! 🏢📍",
  },

  // --- Contato / WhatsApp / telefone ---
  {
    chaves: [
      "whatsapp", "whats", "zap", "telefone", "contato",
      "falar", "ligar", "ligacao", "número", "numero",
    ],
    resposta:
      "Você pode falar com a gente pelo WhatsApp: **(16) 99374-7147** " +
      "ou pelo e-mail sentinelasaudeambiental@gmail.com. " +
      "Resposta rápida, sempre! 📱💬",
    cta: true,
  },

  // --- Agendar / visita ---
  {
    chaves: [
      "agendar", "agendamento", "visita", "marcar",
      "quero", "gostaria", "quando", "disponivel",
    ],
    resposta:
      "Ótimo! 🎉 Pra agendar uma visita técnica é só chamar " +
      "no WhatsApp que a gente organiza o melhor horário pra você. " +
      "Atendimento rápido e sem enrolação!",
    cta: true,
  },
];

/**
 * Retorna [resposta, mostrarCta] com base nas palavras do usuário.
 * Prioriza regras com mais acertos de palavras-chave.
 */
function encontrarResposta(textoUsuario: string): [string, boolean] {
  const normalizado = normalizar(textoUsuario);

  // Detecta intenção de fechar / dúvida / hesitação
  const hesitacao = [
    "nao sei", "duvida", "dúvida", "pensar", "depois",
    "obrigado", "obrigada", "valeu", "encerrar", "fechar",
    "conversar com rogerio", "falar com rogerio",
    "humano", "atendente", "pessoa",
  ];
  if (hesitacao.some((h) => normalizado.includes(h))) {
    return [MSG_ENCAMINHAR, true];
  }

  // Saudação inicial
  const saudacoes = ["oi", "ola", "olá", "hey", "bom dia", "boa tarde", "boa noite"];
  if (
    saudacoes.some((s) => normalizado === s || normalizado.startsWith(s)) &&
    normalizado.length < 20
  ) {
    return [MENSAGEM_BOAS_VINDAS, false];
  }

  // Varre as regras e escolhe a com maior pontuação
  let melhorPontuacao = 0;
  let melhorResposta = MSG_FALLBACK;
  let melhorCta = true; // fallback mostra CTA também

  for (const regra of REGRAS) {
    let pontos = 0;
    for (const chave of regra.chaves) {
      if (normalizado.includes(chave)) {
        // Palavras mais longas valem mais
        pontos += chave.length;
      }
    }
    if (pontos > melhorPontuacao) {
      melhorPontuacao = pontos;
      melhorResposta = regra.resposta;
      melhorCta = regra.cta ?? false;
    }
  }

  return [melhorResposta, melhorCta];
}

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------

const STORAGE_KEY = "sentinela-chat-rogerio";

function carregarHistorico(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Message[];
  } catch {
    /* ignora */
  }
  return [];
}

function salvarHistorico(msgs: Message[]) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {
    /* ignora */
  }
}

/** Ícone SVG de escudo verde-limão */
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
      <path
        d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z"
        fill="#8fce2a"
        stroke="#6db01a"
        strokeWidth="1.5"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatRogerio() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [inicializado, setInicializado] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounter = useRef(0);

  // Inicializa com boas-vindas (uma vez)
  useEffect(() => {
    if (inicializado) return;
    const historico = carregarHistorico();
    if (historico.length > 0) {
      idCounter.current =
        historico.reduce((max, m) => Math.max(max, m.id), 0) + 1;
      setMensagens(historico);
    } else {
      const msg: Message = {
        id: 0,
        sender: "bot",
        text: MENSAGEM_BOAS_VINDAS,
      };
      idCounter.current = 1;
      setMensagens([msg]);
      salvarHistorico([msg]);
    }
    setInicializado(true);
  }, [inicializado]);

  // Salva sempre que mensagens mudam
  useEffect(() => {
    if (mensagens.length > 0) salvarHistorico(mensagens);
  }, [mensagens]);

  // Scroll automático
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [mensagens]);

  // Foca input quando abre
  useEffect(() => {
    if (aberto && inputRef.current) {
      inputRef.current.focus();
    }
  }, [aberto]);

  const adicionarMensagem = useCallback(
    (sender: Sender, text: string, showCta = false) => {
      const id = idCounter.current++;
      setMensagens((prev) => [...prev, { id, sender, text, showCta }]);
    },
    [],
  );

  const processarEnvio = useCallback(() => {
    const texto = input.trim();
    if (!texto) return;
    adicionarMensagem("user", texto);
    setInput("");

    // Pequeno delay pra simular digitação natural
    setTimeout(() => {
      const [resposta, cta] = encontrarResposta(texto);
      adicionarMensagem("bot", resposta, cta);
    }, 600);
  }, [input, adicionarMensagem]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      processarEnvio();
    }
  };

  const waCtaUrl = whatsappHref(WA_CTA_MSG);

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        onClick={() => setAberto((v) => !v)}
        className="fixed right-4 bottom-20 z-[70] flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-4 ring-[#8fce2a]/30 md:right-8 md:bottom-28"
        style={{ background: "#8fce2a" }}
        aria-label={aberto ? "Fechar chat" : "Abrir chat com Rogério"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {aberto ? (
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <ShieldIcon className="h-8 w-8" />
        )}
      </motion.button>

      {/* Janela de chat */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            className="fixed bottom-20 right-4 z-[70] flex w-[90vw] max-w-[360px] flex-col overflow-hidden rounded-2xl bg-[#efeae2] shadow-2xl md:bottom-28 md:right-8"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
              <ShieldIcon className="h-10 w-10 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold leading-tight">
                  Rogério
                </div>
                <div className="truncate text-xs text-white/70">
                  Atendimento Sentinela
                </div>
              </div>
              <button
                onClick={() => setAberto(false)}
                className="shrink-0 rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Fechar chat"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mensagens */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-3 py-3"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cfc4' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            >
              {mensagens.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[85%]">
                    <div
                      className={`whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "rounded-br-sm bg-[#dcf8c6] text-[#303030]"
                          : "rounded-bl-sm bg-white text-[#303030]"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.showCta && (
                      <a
                        href={waCtaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#1ebe57]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Falar com Rogério no WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-gray-200 bg-[#f0f0f0] px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="min-w-0 flex-1 rounded-full border-none bg-white px-4 py-2 text-sm text-gray-800 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#8fce2a]"
              />
              <button
                onClick={processarEnvio}
                disabled={!input.trim()}
                className="shrink-0 rounded-full p-2 text-[#075e54] transition hover:bg-gray-200 disabled:opacity-40"
                aria-label="Enviar"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
