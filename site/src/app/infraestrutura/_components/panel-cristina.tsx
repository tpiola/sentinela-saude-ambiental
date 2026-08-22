"use client";

import { useState } from "react";
import { BRAND, whatsappHref } from "@/lib/brand";
import { Badge, Card, SectionTitle } from "./ui";

type Purpose = "qualificar" | "vender" | "agendar" | "confirmar";

interface CristinaTemplate {
  id: string;
  title: string;
  purpose: Purpose;
  purposeLabel: string;
  message: string;
}

const PURPOSE_TONES: Record<Purpose, "accent" | "lime" | "navy" | "amber"> = {
  qualificar: "accent",
  vender: "lime",
  agendar: "navy",
  confirmar: "amber",
};

const TEMPLATES: CristinaTemplate[] = [
  {
    id: "saudacao",
    title: "Saudação + qualificação",
    purpose: "qualificar",
    purposeLabel: "Qualificar",
    message:
      "Olá! Eu sou a Cristina, da Sentinela Saúde Ambiental 🌿\n\nPara eu te atender da melhor forma, pode me contar qual é a ocorrência (escorpião, barata, cupim, rato, limpeza de caixa d'água…) e em qual bairro você está?",
  },
  {
    id: "oferta-inspecao",
    title: "Oferta de inspeção técnica",
    purpose: "vender",
    purposeLabel: "Vender",
    message:
      "Entendi! A Sentinela faz uma inspeção completa do ambiente para identificar focos, acessos e abrigos — e só depois define o tratamento, com orientação técnica e comprovante do serviço.\n\nQuer agendar uma avaliação? Atendemos Franca e região.",
  },
  {
    id: "agendamento",
    title: "Agendamento da visita",
    purpose: "agendar",
    purposeLabel: "Agendar",
    message:
      "Perfeito! Vou organizar sua visita. Qual o melhor dia e período para você — manhã ou tarde? 📅\n\nVou confirmar a disponibilidade da equipe e já te retorno com o horário.",
  },
  {
    id: "confirmacao",
    title: "Confirmação do agendamento",
    purpose: "confirmar",
    purposeLabel: "Confirmar",
    message:
      "Agendamento confirmado! ✅\n\n📅 Data e horário combinados\n📍 Seu endereço em Franca/região\n\nAntes da visita a equipe orienta sobre a preparação do local. Qualquer mudança, é só me chamar por aqui!",
  },
  {
    id: "follow-up",
    title: "Follow-up de lead frio",
    purpose: "vender",
    purposeLabel: "Vender",
    message:
      "Oi! Passando para saber se você ainda precisa de apoio com a ocorrência de pragas. 🛡️\n\nPosso verificar a disponibilidade da equipe para uma avaliação sem compromisso?",
  },
];

const ROTEIRO = [
  {
    titulo: "Saudação",
    texto:
      "Cristina se apresenta como secretária virtual da Sentinela e inicia com tom acolhedor e objetivo.",
  },
  {
    titulo: "Qualificar praga + bairro",
    texto:
      "Pergunta qual é a ocorrência (escorpião, barata, cupim, rato, caixa d'água) e o bairro/cidade para confirmar cobertura.",
  },
  {
    titulo: "Agendar",
    texto:
      "Oferece a inspeção técnica, apresenta o valor do serviço conforme o caso e combina data e período.",
  },
  {
    titulo: "Confirmar",
    texto:
      "Fecha o agendamento com data/horário/endereço, reforça a preparação do local e permanece disponível para dúvidas.",
  },
];

export function PanelCristina() {
  const [copied, setCopied] = useState<string | null>(null);

  function openWhatsApp(message: string) {
    const url = whatsappHref(message);
    const win = window.open(url, "_blank");
    if (win) {
      win.opener = null;
    } else {
      window.location.assign(url);
    }
  }

  async function copyMessage(template: CristinaTemplate) {
    try {
      await navigator.clipboard.writeText(template.message);
      setCopied(template.id);
      window.setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard indisponível — ignora
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-lime font-display text-2xl font-extrabold text-brand-navy-heading">
            C
          </div>
          <div>
            <SectionTitle
              title="Cristina — secretária virtual"
              subtitle="Persona que entende tudo da empresa e conduz o atendimento para vender e agendar"
            />
            <p className="text-sm leading-6 text-brand-muted">
              A Cristina domina o portfólio completo da Sentinela:{" "}
              <strong className="text-brand-navy">
                escorpião, barata, cupim, rato, limpeza de caixa d&apos;água
              </strong>{" "}
              e os documentos do serviço (comprovante de execução e{" "}
              <strong className="text-brand-navy">
                certificado/laudo nos termos da ANVISA
              </strong>{" "}
              quando aplicáveis. Ela qualifica a ocorrência, tira dúvidas sobre
              segurança e prazos, e sempre conduz a conversa para{" "}
              <strong className="text-brand-navy">agendar a visita</strong>.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <SectionTitle
          title="Roteiro de atendimento"
          subtitle="Fluxo que a Cristina segue em cada conversa"
        />
        <ol className="space-y-4">
          {ROTEIRO.map((etapa, index) => (
            <li key={etapa.titulo} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy font-display text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="font-bold text-brand-navy">{etapa.titulo}</p>
                <p className="mt-0.5 text-sm leading-6 text-brand-muted">
                  {etapa.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <div>
        <SectionTitle
          title="Templates de mensagem"
          subtitle="Prontos para vender e agendar — clique para abrir o WhatsApp"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {TEMPLATES.map((template) => (
            <Card key={template.id} className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-base font-bold text-brand-navy">
                  {template.title}
                </h3>
                <Badge tone={PURPOSE_TONES[template.purpose]}>
                  {template.purposeLabel}
                </Badge>
              </div>
              <p className="mt-3 whitespace-pre-line rounded-lg bg-brand-surface p-3 font-mono text-xs leading-5 text-brand-navy">
                {template.message}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => openWhatsApp(template.message)}
                  className="inline-flex min-h-10 items-center justify-center bg-brand-whatsapp px-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Abrir no WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => copyMessage(template)}
                  className="inline-flex min-h-10 items-center justify-center border border-brand-border px-4 text-sm font-bold text-brand-muted transition-colors hover:border-brand-navy hover:text-brand-navy"
                >
                  {copied === template.id ? "Copiado ✓" : "Copiar"}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <SectionTitle
          title="Webhook de auto-resposta (WhatsApp Cloud API)"
          subtitle="Configuração para a Cristina responder automaticamente no WhatsApp"
        />
        <div className="space-y-3 text-sm leading-6 text-brand-muted">
          <p>
            A Cristina já tem o roteiro de vendas pronto. Para ela responder
            <strong className="text-brand-navy"> automaticamente</strong> às
            mensagens recebidas no WhatsApp, conecte o webhook abaixo na Meta
            (WhatsApp Business → Configurações → Webhooks).
          </p>
          <div className="rounded-lg bg-brand-surface p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">
              URL do webhook
            </p>
            <code className="mt-1 block break-all font-mono text-xs text-brand-navy">
              https://www.sentinelasaudeambiental.com.br/api/infraestrutura/whatsapp-webhook
            </code>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              { k: "WHATSAPP_VERIFY_TOKEN", d: "Token de verificação (você define)" },
              { k: "WHATSAPP_ACCESS_TOKEN", d: "Token de acesso da Meta" },
              { k: "WHATSAPP_PHONE_NUMBER_ID", d: "ID do número do WhatsApp" },
            ].map((env) => (
              <div key={env.k} className="rounded-lg border border-brand-border p-3">
                <code className="block break-all font-mono text-xs font-bold text-brand-navy">
                  {env.k}
                </code>
                <p className="mt-1 text-xs text-brand-muted">{env.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs">
            Essas 3 variáveis são adicionadas nas{" "}
            <strong className="text-brand-navy">Environment Variables</strong>{" "}
            do projeto na Vercel. Sem elas, o webhook responde apenas com os
            templates manuais abaixo.
          </p>
        </div>
      </Card>

      <Card>
        <SectionTitle title="Contato da Cristina" />
        <p className="text-sm text-brand-muted">
          Número de destino:{" "}
          <strong className="text-brand-navy">{BRAND.phoneDisplay}</strong> (
          {BRAND.phoneE164}). Todos os botões acima montam o link{" "}
          <code className="rounded bg-brand-surface px-1 font-mono text-xs">
            wa.me/{BRAND.phoneE164}
          </code>{" "}
          com a mensagem pré-preenchida.
        </p>
      </Card>
    </div>
  );
}
