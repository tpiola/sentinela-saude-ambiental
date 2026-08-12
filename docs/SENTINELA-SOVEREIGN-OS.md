# Sentinela Sovereign Business OS

## Verificação Google Business — 12/08/2026

**Status público: parcialmente conectado.**

- Existe Perfil da Empresa ativo: o link oficial de avaliação `https://g.page/r/CU-Yr9Fitwy3EAE/review` aparece em publicação pública da marca.
- O site aponta para Google Maps, rotas e incorpora mapa com as coordenadas `-20.5401,-47.4009`.
- O domínio contém `google-site-verification`, confirmando verificação no ecossistema Google/Search Console.
- O JSON-LD usa `PestControlService`, NAP e geocoordenadas coerentes, mas `sameAs` não inclui o perfil do Google.
- Os links de mapa usam busca/coordenadas e deixam `destination_place_id` vazio. Isso não cria vínculo inequívoco com o Perfil da Empresa.
- Não foi encontrado identificador público de GA4, Google Ads ou GTM no HTML/scripts carregados. Há apenas preconnect para Google Analytics.

**Conclusão:** a presença pública está ativa e o site referencia Maps, mas não é possível comprovar, por inspeção pública, que o domínio está cadastrado no campo “Website” do Perfil nem que GBP, GA4, Ads e Search Console estão vinculados na conta. Para fechar a conexão técnica: inserir a URL canônica no GBP, usar o `place_id` real nos links, adicionar o URL do perfil em `sameAs`, vincular GBP ↔ Google Ads e GA4 ↔ Search Console/Ads, e instalar GTM Web + Server-Side.

## 1. Fluxo de gamificação — do pânico à proteção

### Estado 0 — contenção imediata (0–5 s)

- Visual: fundo grafite, halo âmbar discreto e movimento lento; nunca usar insetos saltando ou contagem falsa.
- Título: **“Você viu uma praga. Agora vamos reduzir o risco.”**
- Subtítulo: **“Em 3 respostas, identificamos a prioridade e mostramos o próximo passo seguro.”**
- CTA primário: **“Iniciar diagnóstico — 3 cliques”**
- CTA emergência: **“Há criança, pet ou picada? Priorizar agora”**
- Microcopy: **“Sem compromisso. Seus dados só serão pedidos após o diagnóstico.”**

### Clique 1 — local do avistamento

Pergunta: **“Onde você encontrou o sinal?”**

- Cozinha/despensa
- Quarto/sala
- Banheiro/ralo
- Quintal/garagem
- Empresa/condomínio

Alívio após escolha: **“Certo. O local já reduz as possibilidades e ajuda a evitar aplicação desnecessária.”**

### Clique 2 — dimensão do ambiente

Pergunta: **“Qual área precisa ser protegida?”**

- Até 60 m²
- 61–120 m²
- 121–250 m²
- Acima de 250 m² / comercial

Alívio após escolha: **“Entendido. A dosagem e o protocolo serão dimensionados para o ambiente — com orientação específica para crianças e pets.”**

### Clique 3 — frequência/sinais

Pergunta: **“Qual destas situações descreve melhor o caso?”**

- Vi uma vez hoje
- Vi mais de uma vez na semana
- Encontrei ninho, fezes, trilhas ou danos
- Houve contato, picada ou alimento contaminado

Resultado:

- `monitorado`: **“Risco controlável. Podemos orientar e agendar uma vistoria preventiva.”**
- `prioritário`: **“Há sinais de atividade recorrente. Recomendamos atendimento prioritário.”**
- `crítico`: **“Isole o local e mantenha crianças e pets afastados. Vamos priorizar a triagem humana agora.”**
- Em suspeita de intoxicação/picada: não prometer tratamento; orientar emergência médica/CIATox e encaminhar atendimento técnico em paralelo.

### Oferta e contratação

- Mostrar faixa estimada, nunca preço definitivo sem regras comerciais validadas.
- Alternativas: **Atendimento Pontual** e **Plano Sentinela 90** (inspeção trimestral, prioridade, registro fotográfico e lembrete preventivo).
- Âncora: **“Resolver o foco de hoje”** versus **“manter o ambiente protegido nos próximos 90 dias”**.
- CTA: **“Reservar atendimento seguro”**
- Confiança: **“Produtos regularizados, protocolo Pet & Child Safe, laudo técnico e registro da execução.”**
- Transição visual: conforme respostas avançam, grafite → azul clínico → branco; progresso 1/3, 2/3, 3/3; reduzir a animação se `prefers-reduced-motion`.

### Pós-conversão — WhatsApp como despacho e prova

1. Consentimento e confirmação de endereço/janela.
2. Ordem de serviço com ID e protocolo de segurança.
3. Mensagem “técnico designado” com primeiro nome, ETA e botão “acompanhar status”.
4. Check-in geográfico e início do serviço.
5. Checklist técnico, fotos/vídeo com consentimento e produtos/lotes aplicados.
6. Entrega do laudo, vídeo e cuidados pós-serviço.
7. Pedido de avaliação somente após confirmação de satisfação.
8. Oferta do Plano Sentinela 90 e lembrete da próxima inspeção.

## 2. Eventos GTM Server-Side → BigQuery

Contrato comum obrigatório: `event_id`, `event_name`, `event_ts`, `client_id`, `session_id`, `lead_id_hash`, `service_order_id`, `consent_state`, `utm_source`, `utm_medium`, `utm_campaign`, `gclid`, `gbraid`, `wbraid`, `landing_page`, `city`, `diagnosis_version`, `value`, `currency`, `source_system`.

| Evento | Disparo | Propriedades específicas | KPI |
|---|---|---|---|
| `diagnosis_started` | primeiro clique | `entry_cta`, `threat_context` | taxa de início |
| `diagnosis_step_completed` | cada resposta | `step`, `answer_code`, `elapsed_ms` | abandono por etapa |
| `risk_classified` | cálculo concluído | `pest_guess`, `risk_level`, `confidence`, `child_pet_flag` | mix de urgência |
| `estimate_viewed` | faixa exibida | `estimate_min`, `estimate_max`, `recommended_plan` | intenção comercial |
| `whatsapp_handoff` | abertura do Flow | `flow_id`, `risk_level`, `prefill_version` | handoff |
| `lead_qualified` | IA conclui triagem | `qualification_score`, `service_type`, `service_radius_km` | MQL |
| `appointment_slot_viewed` | agenda consultada | `slots_count`, `first_slot_minutes` | capacidade |
| `appointment_booked` | evento criado | `calendar_event_id_hash`, `scheduled_at`, `technician_team` | conversão |
| `dispatch_confirmed` | técnico designado | `eta_minutes`, `dispatch_id` | SLA despacho |
| `technician_arrived` | check-in | `delay_minutes`, `geo_match` | pontualidade |
| `service_started` | checklist aberto | `protocol_id` | operação |
| `service_completed` | OS encerrada | `pest_confirmed`, `products_count`, `proof_assets_count` | execução |
| `revenue_recorded` | pagamento confirmado | `gross_revenue`, `discount`, `payment_method`, `plan_type` | receita |
| `plan_subscribed` | Sentinela 90 ativo | `plan_id`, `billing_cycle`, `contract_value` | LTV |
| `repeat_service` | nova OS do mesmo cliente | `days_since_last`, `covered_by_plan` | recorrência/retrabalho |
| `review_requested` | pós-satisfação | `gbp_location_id_hash` | reputação |
| `review_clicked` | clique em g.page | `review_url_version` | conversão em review |

### Métricas

- `CAC = spend atribuível / novos clientes pagos`.
- `Receita incremental = receita do grupo exposto ao Plano 90 − receita esperada do grupo controle/coorte equivalente`.
- `LTV 12m = receita líquida acumulada por cliente em 12 meses`.
- `Payback = CAC / margem de contribuição mensal média`.
- Deduplicação por `event_id`; PII não entra no BigQuery em texto claro; telefone/e-mail ficam no sistema operacional e só hashes salteados são usados para união autorizada.

## 3. Agente Gemini/Vertex AI + n8n + Google Calendar

1. Webhook Meta valida assinatura, normaliza mensagem e gera `event_id` idempotente.
2. Consentimento e aviso: IA auxilia a triagem, não realiza diagnóstico médico.
3. Gemini retorna JSON estruturado: praga provável, confiança, evidências, risco, flags de criança/pet/picada e próxima pergunta.
4. Regras determinísticas sobrepõem a IA: picada/intoxicação → orientação de saúde e atendimento humano; baixa confiança → pedir foto/descrição ou escalar.
5. Consulta de cobertura por CEP/coordenada e política de horário.
6. Calendar FreeBusy busca janelas; n8n aplica duração, deslocamento e habilidade da equipe.
7. Cliente escolhe a janela; criação do evento usa chave idempotente `lead_id + slot + service_type`.
8. Reserva só é confirmada após retorno da Calendar API; falha aciona fila/retry e atendimento humano.
9. Evento recebe apenas dados operacionais mínimos; dados sensíveis ficam no banco com acesso por função.
10. Atualizações de despacho e prova são enviadas pelo WhatsApp; logs de auditoria registram autor, horário e transição de estado.

## Plano de implementação

- Semana 1: corrigir Place ID/GBP, GTM Web + sGTM, consentimento, taxonomia e BigQuery.
- Semana 2: diagnóstico 3 cliques, precificação por regras e WhatsApp Flow.
- Semana 3: n8n, Gemini com saída estruturada, FreeBusy/Calendar e despacho.
- Semana 4: prova de execução, plano trimestral, dashboards CAC/LTV e testes ponta a ponta.

