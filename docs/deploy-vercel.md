# Deploy na Vercel (Sentinela)

O app Next.js fica em [`site/`](../site/). No painel Vercel, defina **Root Directory = `site`**.

## Conectar o repositório

1. [vercel.com](https://vercel.com) → **Add New Project** → importe `sentinela-saude-ambiental`.
2. **Root Directory:** `site`
3. **Framework Preset:** Next.js (detectado automaticamente)
4. **Production Branch:** `main`

## Variáveis de ambiente

Copie de [`site/.env.example`](../site/.env.example) para **Settings → Environment Variables** (Production, Preview e Development):

| Variável | Obrigatória |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Sim — `https://www.sentinelasaudeambiental.com.br` |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` | Recomendada |
| `NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL` | Recomendada |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Opcional |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Recomendada |
| `NEXT_PUBLIC_GTM_ID` | Opcional |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Após Search Console |
| `NEXT_PUBLIC_N8N_WEBHOOK_LEAD` | Opcional |

Nunca commite `.env.local`.

## Domínio

1. **Settings → Domains:** adicione `www.sentinelasaudeambiental.com.br`.
2. Configure DNS no registrador (CNAME para `cname.vercel-dns.com` ou registros indicados pela Vercel).
3. Redirecione o domínio raiz (`sentinelasaudeambiental.com.br`) para `www`.

## Fluxo diário (nuvem)

1. Edite no Cursor (workspace permanente — sem clone recorrente).
2. `git add` → `git commit` → `git push`
3. A Vercel faz deploy automático; PRs geram **Preview URL**.

## Validar após deploy

- `https://www.sentinelasaudeambiental.com.br/sitemap.xml`
- `https://www.sentinelasaudeambiental.com.br/robots.txt`
- Rich Results Test (Google) na homepage
- Compartilhar URL no WhatsApp/Facebook e conferir preview OG

## CI local (GitHub Actions)

O workflow `.github/workflows/site.yml` roda `lint` e `build` em cada push/PR.
