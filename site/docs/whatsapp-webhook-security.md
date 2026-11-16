# Autenticação do webhook WhatsApp

O POST exige `X-Hub-Signature-256` com HMAC-SHA256 dos bytes originais do corpo,
usando `META_APP_SECRET` (App Secret do aplicativo Meta, não o access token nem
o verify token). A comparação usa `timingSafeEqual`. Só depois a rota interpreta
o JSON e pode enviar respostas. Sem o segredo retorna 503; assinatura ausente ou
inválida retorna 403. JSON assinado inválido retorna 400. Não registrar corpo,
assinatura ou segredo em logs.

Antes de promover: configurar `META_APP_SECRET` como variável sensível no ambiente
que recebe os eventos. Usar app/credenciais de teste no preview; não copiar as de
produção. Sem configuração, a integração fica indisponível por segurança. O GET
de verificação continua usando `WHATSAPP_VERIFY_TOKEN` e não aceita token vazio.

Validação local (Node 24): `node --test tests/meta-webhook.test.mjs`.
Validar também um evento oficial assinado no ambiente de teste antes de promover.

Limite: a assinatura comprova autenticidade/integridade, não unicidade. Reentregas
legítimas podem gerar respostas duplicadas; deduplicação durável por ID de mensagem
e limite de volume precisam de armazenamento compartilhado em uma mudança própria.
Não usar cache em memória como garantia de proteção contra replay serverless.
Esta alteração também não adiciona limite próprio ao tamanho do corpo recebido;
os limites da plataforma não substituem uma política de volume da integração.

Documentação consultada em 16/11/2026:
- https://developers.facebook.com/docs/graph-api/webhooks/getting-started/
- https://nextjs.org/docs/app/api-reference/file-conventions/route
