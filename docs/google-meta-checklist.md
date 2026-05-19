# Checklist Google e Meta (Sentinela)

Use este checklist após cada deploy em produção. O site já expõe JSON-LD, sitemap, robots e meta geo — os painéis externos exigem configuração manual.

## Google

### Search Console

1. [search.google.com/search-console](https://search.google.com/search-console)
2. Propriedade: `https://www.sentinelasaudeambiental.com.br`
3. Verificação: meta tag → valor em `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` na Vercel
4. Enviar sitemap: `/sitemap.xml`

### Google Meu Negócio

- Nome: **Sentinela Saúde Ambiental**
- Telefone: `(16) 99374-7147` (igual ao site)
- Site: URL canónica com `www`
- Categorias: controle de pragas / dedetização
- Horários: alinhados a `BRAND.openingHours` no código

### Maps Platform

1. [console.cloud.google.com](https://console.cloud.google.com) → APIs: Maps Embed, Places
2. Chave restrita por HTTP referrer (`*.sentinelasaudeambiental.com.br`)
3. `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` na Vercel

### Calendar

- Criar **Appointment Schedule** no Google Calendar
- URL pública → `NEXT_PUBLIC_GOOGLE_CALENDAR_URL`

### Forms

- Formulário com destino em planilha
- Embed: `https://docs.google.com/forms/.../viewform?embedded=true`
- `NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL`

### Analytics

- GA4: criar propriedade → `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Opcional GTM: `NEXT_PUBLIC_GTM_ID`

## Meta (Facebook / Instagram)

### Página e perfil

- Facebook: [Better Controle de Pragas](https://www.facebook.com/Bettercontroledepragas)
- Instagram: [@sentinelasaudeambiental](https://www.instagram.com/sentinelasaudeambiental/)

### Domínio e compartilhamento

1. Meta Business Suite → **Configurações do negócio** → verificar domínio
2. Testar preview: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
3. Imagem OG: 1200×630 (capa em `/media/sentinela/facebook/images/`)

### Pixel / anúncios (opcional)

- Preferir instalação via GTM
- Se usar Pixel direto: incluir banner de cookies (LGPD) antes de disparar eventos

## GEO (SEO generativo)

- FAQ visível na página (`#faq`)
- NAP consistente no rodapé e JSON-LD
- Texto factual: cidades atendidas, ANVISA RDC 622, laudo técnico

## n8n (automação)

- `NEXT_PUBLIC_N8N_WEBHOOK_LEAD` para leads do site
- Webhooks WhatsApp/Meta conforme fluxos em `site/src/lib/integrations.ts`
