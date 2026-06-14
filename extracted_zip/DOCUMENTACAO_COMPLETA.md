# SENTINELA SAÚDE AMBIENTAL — DOCUMENTAÇÃO COMPLETA

## Índice
1. Visão Geral do Projeto
2. Design System
3. Estrutura do Site
4. Integrações Google
5. Automação n8n
6. SEO & GEO Estratégia
7. Fluxos WhatsApp
8. Automação Redes Sociais
9. Contratos
10. Deploy & Manutenção

---

## 1. VISÃO GERAL

**Empresa:** Sentinela Saúde Ambiental  
**Segmento:** Controle de Pragas Urbanas / Saúde Ambiental  
**Localização:** Franca SP + 50km ao redor  
**CNPJ:** CNAE 8122-2/00  
**WhatsApp:** (16) 99374-7147

### Pilhas Tecnológicas
- **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Hono + tRPC 11.x + Drizzle ORM + MySQL
- **Autenticação:** OAuth 2.0 (Kimi)
- **Hospedagem:** Portal Kimi (fullstack)
- **Analytics:** Google Analytics 4 + Google Tag Manager
- **Automação:** n8n (self-hosted)
- **SEO:** Schema.org JSON-LD, meta tags GEO, sitemap

---

## 2. DESIGN SYSTEM

### Paleta de Cores
```
Sentinel Forest    #1C4A2A  (primária — verde escuro)
Sentinel Sage      #2E7D32  (verde médio)
Sentinel Mint      #4CAF50  (verde claro)
Sentinel Glow      #6FCF7A  (destaque)
Sentinel Ice       #F0F8F2  (fundo claro)
Sentinel Stone     #F5F5F0  (fundo alternativo)
Sentinel Mist      #E8EDE9  (bordas)
Sentinel Ink       #111B14  (texto escuro)
Sentinel Amber     #D4680A  (CTA urgência)
Sentinel Red       #C0392B  (alertas)
WhatsApp Green     #25D366
```

### Tipografia
- **Display:** Fraunces (serif) — headlines
- **Body:** Inter (sans-serif) — texto corrido

### Componentes Principais
- Botão primário: `bg-sentinel-sage text-white rounded-full`
- Botão WhatsApp: `bg-[#25D366] text-white rounded-full shadow-wpp`
- Cards: `bg-white rounded-2xl border border-sentinel-mist`
- Badges: `rounded-full px-2.5 py-1 text-[.58rem] font-bold`

---

## 3. ESTRUTURA DO SITE

### Páginas
1. **Home** (`/`) — Landing page completa com 11 sections
2. **Login** (`/login`) — Autenticação OAuth
3. **404** (`*`) — Página não encontrada

### Sections da Home
1. TopBar — Alerta sazonal (fixo, fechável)
2. Navbar — Navegação fixa com scroll
3. Hero — Headline + painel de urgência
4. StatsStrip — Faixa de números (marquee)
5. AlertSection — Dados científicos escorpião
6. Services — 8 cards de serviços
7. DiagnosisFunnel — Formulário 3 passos → WhatsApp
8. Plans — 4 planos preventivos
9. Reviews — 3 depoimentos
10. Calendar — Calendário sazonal 12 meses
11. FAQ — 6 perguntas com Schema.org
12. CTAFinal — Fechamento com contatos
13. Footer — Links e badges
14. WhatsAppFloat — Botão flutuante

---

## 4. INTEGRAÇÕES GOOGLE

### Google Analytics 4
- Tracking ID: `GA_MEASUREMENT_ID` (substituir no SEOHead.tsx)
- Eventos customizados:
  - `lead_submitted` — quando preenche diagnóstico
  - `whatsapp_click` — quando clica em WhatsApp
  - `service_click` — quando clica em serviço
  - `plan_click` — quando clica em plano

### Google Tag Manager
- Container ID: `GTM-XXXXXXX` (substituir no SEOHead.tsx)
- Tags recomendadas:
  - GA4 Configuration
  - Google Ads Conversion
  - Facebook Pixel (opcional)

### Google Search Console
- Verificar propriedade com meta tag ou DNS
- Sitemap: `/sitemap.xml` (gerar após deploy)
- Estrutura de dados: FAQPage, LocalBusiness, Service

### Google Maps / Local SEO
- Cadastrar Google Business Profile
- Endereço: Franca, SP
- Telefone: +55 16 99374-7147
- Horário: Seg-Sáb 7h-19h, Dom 8h-17h

---

## 5. AUTOMAÇÃO n8n

### Webhooks Configurados
1. `POST /webhook/lead-novo` — Recebe leads do site
2. `POST /webhook/whatsapp-resposta` — Respostas automáticas
3. `POST /webhook/agendamento` — Confirmação de visitas

### Variáveis de Ambiente n8n
```
N8N_HOST=https://n8n.seudominio.com
WEBHOOK_URL=https://n8n.seudominio.com/webhook/
WHATSAPP_API_KEY=...
```

---

## 6. SEO & GEO ESTRATÉGIA

### Keywords Principais
- dedetização Franca SP
- controle de pragas Franca
- escorpião Franca SP
- dedetização baratas Franca
- descupinização Franca
- desratização Franca
- higienização caixa d'água Franca
- sanitização Franca

### GEO-SEO
- Geo-coordinates: -20.5386, -47.4008
- Geo.region: BR-SP
- Geo.placename: Franca
- Cidades atendidas: Franca, Batatais, Orlândia, Cristais Paulista, Pedregulho, São Joaquim da Barra, Ituverava

### Schema.org Implementado
- LocalBusiness (com endereço, telefone, geo, horários)
- FAQPage (6 perguntas com respostas)
- Service (8 serviços)
- GeoCoordinates
- AreaServed (6 cidades)

---

## 7. FLUXOS WHATSAPP (n8n)

### Fluxo 1: Boas-vindas Automática
```
Trigger: Webhook lead-novo
→ Delay 30s
→ Enviar mensagem: "Olá {nome}! Recebemos seu diagnóstico para {praga} em {cidade}. Nosso especialista vai te retornar em breve."
→ Aguardar resposta
```

### Fluxo 2: Diagnóstico Urgente
```
Trigger: Urgência = alta
→ Delay 2min
→ Enviar mensagem: "🚨 {nome}, identificamos sua solicitação como ALTA URGÊNCIA. Nossa equipe está se preparando para atendimento hoje em {cidade}."
→ Notificar equipe no grupo interno
→ Criar card no CRM
```

### Fluxo 3: Follow-up 24h
```
Trigger: Lead criado há 24h sem contato
→ Enviar mensagem: "Oi {nome}! Passando para ver se conseguiu resolver sua situação com {praga}. Estamos à disposição para um orçamento sem compromisso."
```

### Fluxo 4: Pós-serviço
```
Trigger: Serviço finalizado (manual)
→ Delay 2 dias
→ Enviar mensagem: "{nome}, como foi a experiência com nossa equipe? Sua opinião ajuda muitos vizinhos em {cidade}."
→ Link Google Review
```

### Fluxo 5: Sazonalidade
```
Trigger: 1º dia de cada mês
→ Enviar broadcast (apenas contatos que optaram): "Alerta {mês}: {pragas do mês} em Franca SP. Agende sua visita preventiva."
```

### Fluxo 6: Orçamento Não Fechado
```
Trigger: Lead com status "orcamento" há 7 dias
→ Enviar mensagem: "{nome}, ainda está precisando de {servico}? Temos condições especiais para esta semana em {cidade}."
→ Oferecer desconto 10%
```

---

## 8. AUTOMAÇÃO REDES SOCIAIS

### Instagram / Facebook
- Post automático toda 2ª e 5ª-feira
- Conteúdo: Dicas sazonais, alertas pragas, antes/depois
- Hashtags: #dedetizacaofranca #controledepragas #escorpiao #saudambiental

### TikTok
- Vídeos curtos (15-30s) de técnicos em ação
- Conteúdo educativo sobre pragas
- Trending sounds + conteúdo informativo

### Calendário Editorial (Sugestão)
| Dia | Conteúdo |
|-----|----------|
| Seg | Dica preventiva |
| Qua | Caso de sucesso |
| Sex | Alerta sazonal |
| Dom | Depoimento cliente |

---

## 9. CONTRATOS

### Contrato 1: Prestação de Serviços
(Ver arquivo `contrato_prestacao_servicos.md`)

### Contrato 2: Proposta Comercial
(Ver arquivo `proposta_comercial.md`)

---

## 10. DEPLOY & MANUTENÇÃO

### Comandos
```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm run check    # Type check
npm run db:push  # Sync schema DB
```

### Banco de Dados
- Tabelas: users, leads, services, plans, contacts, posts, automationLogs
- Connection: MySQL via Drizzle ORM
- Migrations: `npm run db:generate`

### Variáveis de Ambiente
```
DATABASE_URL=mysql://...
VITE_KIMI_AUTH_URL=...
VITE_APP_ID=...
```

---

**Documento gerado em:** 2026-05-06  
**Versão:** 1.0  
**Responsável:** Desenvolvimento Sentinela
