# AUTOMAÇÃO N8N — SENTINELA SAÚDE AMBIENTAL
## Fluxos, Webhooks e Integrações

---

## RESUMO DOS FLUXOS

| # | Fluxo | Trigger | Ação Principal |
|---|-------|---------|----------------|
| 1 | Boas-vindas | Webhook lead-novo | WhatsApp automático + notificação equipe |
| 2 | Urgência Alta | Urgência = alta | Prioridade máxima + alerta interno |
| 3 | Follow-up 24h | Cron 24h | Reengajamento leads não contatados |
| 4 | Pós-serviço | Manual (serviço finalizado) | Solicitação avaliação Google |
| 5 | Alerta Sazonal | Cron mensal | Broadcast preventivo por temporada |
| 6 | Orçamento Pendente | Cron 7 dias | Desconto de retenção |
| 7 | Redes Sociais | Cron 2x/semana | Post automático Instagram/Facebook |
| 8 | Relatório Semanal | Cron semanal | Dashboard leads para gestão |

---

## FLUXO 1: BOAS-VINDAS AUTOMÁTICA

```json
{
  "name": "Sentinela - Boas-vindas Lead",
  "nodes": [
    {
      "type": "n8n-nodes-base.webhook",
      "name": "Webhook Lead Novo",
      "webhookId": "lead-novo",
      "path": "lead-novo",
      "responseMode": "responseNode",
      "httpMethod": "POST"
    },
    {
      "type": "n8n-nodes-base.set",
      "name": "Formatar Dados",
      "values": {
        "string": [
          {"name": "nome", "value": "={{ $json.body.name }}"},
          {"name": "telefone", "value": "={{ $json.body.phone }}"},
          {"name": "praga", "value": "={{ $json.body.pestType }}"},
          {"name": "cidade", "value": "={{ $json.body.city }}"},
          {"name": "urgencia", "value": "={{ $json.body.urgency }}"}
        ]
      }
    },
    {
      "type": "n8n-nodes-base.wait",
      "name": "Aguardar 30s",
      "waitTime": 30
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "name": "Enviar WhatsApp",
      "method": "POST",
      "url": "https://api.z-api.io/instances/INSTANCE/token/TOKEN/send-text",
      "body": {
        "phone": "={{ $('Formatar Dados').item.json.telefone }}",
        "message": "Olá {{ $('Formatar Dados').item.json.nome }}! 👋\n\nRecebemos seu diagnóstico para {{ $('Formatar Dados').item.json.praga }} em {{ $('Formatar Dados').item.json.cidade }}.\n\nNosso especialista vai te retornar em breve.\n\nSentinela Saúde Ambiental\n(16) 99374-7147"
      }
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "name": "Notificar Equipe",
      "method": "POST",
      "url": "https://api.z-api.io/instances/INSTANCE/token/TOKEN/send-text",
      "body": {
        "phone": "5516993747147",
        "message": "🚨 NOVO LEAD\n\nNome: {{ $('Formatar Dados').item.json.nome }}\nTel: {{ $('Formatar Dados').item.json.telefone }}\nPraga: {{ $('Formatar Dados').item.json.praga }}\nCidade: {{ $('Formatar Dados').item.json.cidade }}\nUrgência: {{ $('Formatar Dados').item.json.urgencia }}"
      }
    }
  ]
}
```

**Endpoint:** `POST https://n8n.seudominio.com/webhook/lead-novo`
**Payload esperado:**
```json
{
  "name": "Maria Aparecida",
  "phone": "5516999999999",
  "email": "maria@email.com",
  "city": "Franca SP",
  "pestType": "escorpiao",
  "propertyType": "residencia",
  "urgency": "alta",
  "message": "Encontrei escorpião em casa"
}
```

---

## FLUXO 2: URGÊNCIA ALTA

```json
{
  "name": "Sentinela - Urgência Alta",
  "trigger": {
    "type": "webhook",
    "path": "urgencia-alta",
    "condition": "body.urgency === 'alta'"
  },
  "actions": [
    {
      "name": "Delay 2min",
      "type": "wait",
      "time": 120
    },
    {
      "name": "WhatsApp Cliente",
      "type": "whatsapp",
      "message": "🚨 {{nome}}, identificamos sua solicitação como ALTA URGÊNCIA. Nossa equipe está se preparando para atendimento HOJE em {{cidade}}. Aguarde contato em minutos."
    },
    {
      "name": "Alerta Equipe",
      "type": "whatsapp",
      "to": "grupo_interno",
      "message": "🔴 URGENTE - Atendimento hoje\n{{nome}} - {{telefone}}\n{{praga}} em {{cidade}}"
    },
    {
      "name": "Criar Trello/Notion",
      "type": "http",
      "action": "create_card",
      "title": "URGENTE: {{nome}} - {{praga}}"
    }
  ]
}
```

---

## FLUXO 3: FOLLOW-UP 24H

```json
{
  "name": "Sentinela - Follow-up 24h",
  "trigger": {
    "type": "schedule",
    "cron": "0 10 * * *"
  },
  "actions": [
    {
      "name": "Query Leads 24h",
      "type": "mysql",
      "query": "SELECT * FROM leads WHERE created_at < NOW() - INTERVAL 24 HOUR AND status = 'novo'"
    },
    {
      "name": "Enviar Follow-up",
      "type": "whatsapp",
      "message": "Oi {{nome}}! Passando para ver se conseguiu resolver sua situação com {{praga}}. Estamos à disposição para um orçamento sem compromisso. Responda aqui ou ligue (16) 99374-7147."
    }
  ]
}
```

---

## FLUXO 4: PÓS-SERVIÇO (GOOGLE REVIEW)

```json
{
  "name": "Sentinela - Pós Serviço",
  "trigger": {
    "type": "webhook",
    "path": "pos-servico"
  },
  "actions": [
    {
      "name": "Delay 2 dias",
      "type": "wait",
      "time": 172800
    },
    {
      "name": "WhatsApp Avaliação",
      "type": "whatsapp",
      "message": "{{nome}}, como foi a experiência com nossa equipe? 🌟\n\nSua opinião ajuda muitos vizinhos em {{cidade}} a escolherem proteção de qualidade.\n\nDeixe sua avaliação:\nhttps://g.page/sentinelasaudeambiental/review"
    }
  ]
}
```

---

## FLUXO 5: ALERTA SAZONAL

```json
{
  "name": "Sentinela - Alerta Sazonal",
  "trigger": {
    "type": "schedule",
    "cron": "0 9 1 * *"
  },
  "actions": [
    {
      "name": "Determinar Mês",
      "type": "function",
      "code": "const month = new Date().getMonth(); const pests = ['Escorpião CRÍTICO','Escorpião CRÍTICO','Escorpião alto','Cupim médio','Cupim CRÍTICO','Roedores alto','Roedores alto','Pombos médio','Início escorpião','Escorpião alto','Escorpião CRÍTICO','Escorpião CRÍTICO']; return {monthPest: pests[month]};"
    },
    {
      "name": "Broadcast WhatsApp",
      "type": "whatsapp",
      "to": "lista_contatos",
      "message": "📅 Alerta {{mes_atual}}: {{praga_mes}} em Franca SP.\n\nNão espere o problema aparecer. Proteja sua família com o Programa Sentinela.\n\nAgende sua visita preventiva:\n(16) 99374-7147"
    }
  ]
}
```

---

## FLUXO 6: ORÇAMENTO PENDENTE

```json
{
  "name": "Sentinela - Orçamento Pendente",
  "trigger": {
    "type": "schedule",
    "cron": "0 11 * * *"
  },
  "actions": [
    {
      "name": "Query Leads Orçamento",
      "type": "mysql",
      "query": "SELECT * FROM leads WHERE status = 'orcamento' AND updated_at < NOW() - INTERVAL 7 DAY"
    },
    {
      "name": "Oferta Retenção",
      "type": "whatsapp",
      "message": "{{nome}}, ainda está precisando de {{servico}}?\n\nTemos condições especiais para esta semana em {{cidade}}: 10% de desconto no primeiro serviço.\n\nVálido até sexta-feira. Responda SIM para aproveitar."
    }
  ]
}
```

---

## FLUXO 7: REDES SOCIAIS (AUTOMAÇÃO)

```json
{
  "name": "Sentinela - Post Automático",
  "trigger": {
    "type": "schedule",
    "cron": "0 14 * * 1,5"
  },
  "actions": [
    {
      "name": "Gerar Conteúdo",
      "type": "openai",
      "prompt": "Crie um post para Instagram de uma empresa de controle de pragas em Franca SP. Tema: dica preventiva sobre pragas urbanas. Tom: profissional mas acessível. Inclua 5 hashtags relevantes. Máximo 150 caracteres."
    },
    {
      "name": "Postar Instagram",
      "type": "http",
      "url": "https://graph.facebook.com/v18.0/INSTAGRAM_ID/media",
      "method": "POST"
    }
  ]
}
```

---

## FLUXO 8: RELATÓRIO SEMANAL

```json
{
  "name": "Sentinela - Relatório Semanal",
  "trigger": {
    "type": "schedule",
    "cron": "0 8 * * 1"
  },
  "actions": [
    {
      "name": "Query Stats",
      "type": "mysql",
      "query": "SELECT status, COUNT(*) as total FROM leads WHERE created_at > NOW() - INTERVAL 7 DAY GROUP BY status"
    },
    {
      "name": "Enviar Relatório",
      "type": "whatsapp",
      "to": "gestor",
      "message": "📊 Relatório Semanal Sentinela\n\nLeads novos: {{total_novos}}\nContatados: {{total_contatados}}\nOrçamentos: {{total_orcamentos}}\nFechados: {{total_fechados}}\n\nTaxa de conversão: {{taxa}}%"
    }
  ]
}
```

---

## INTEGRAÇÃO COM SITE (tRPC → n8n)

### No backend (api/leads-router.ts):
```typescript
// Após criar lead, notificar n8n
const notifyN8N = async (lead: any) => {
  await fetch('https://n8n.seudominio.com/webhook/lead-novo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
};
```

### Variáveis de ambiente (adicione ao .env):
```
N8N_WEBHOOK_URL=https://n8n.seudominio.com/webhook/
WHATSAPP_INSTANCE=...
WHATSAPP_TOKEN=...
```

---

## CONFIGURAÇÃO Z-API (WHATSAPP)

1. Criar conta em https://z-api.io/
2. Conectar número de telefone (16) 99374-7147
3. Copiar Instance ID e Token
4. Configurar webhooks no n8n
5. Testar envio com curl:

```bash
curl -X POST https://api.z-api.io/instances/INSTANCE/token/TOKEN/send-text \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "5516999999999",
    "message": "Teste automação Sentinela"
  }'
```

---

## MONITORAMENTO

### Métricas Principais:
- Leads por dia/semana/mês
- Taxa de conversão (lead → orçamento → venda)
- Tempo médio de resposta
- Custos por aquisição (CPA)
- ROI por canal (WhatsApp, site, indicação)

### Dashboard sugerido (Metabase/Grafana):
```sql
SELECT 
  DATE(created_at) as dia,
  COUNT(*) as leads,
  SUM(CASE WHEN status = 'fechado' THEN 1 ELSE 0 END) as vendas,
  ROUND(SUM(CASE WHEN status = 'fechado' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as taxa_conversao
FROM leads 
WHERE created_at > NOW() - INTERVAL 30 DAY
GROUP BY DATE(created_at)
ORDER BY dia DESC;
```

---

**Documento gerado em:** 2026-05-06  
**Ferramenta:** n8n Community Edition (self-hosted)  
**WhatsApp Provider:** Z-API
