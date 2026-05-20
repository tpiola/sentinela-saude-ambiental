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

## Preview não abre? (401 / página em branco)

### URLs que funcionam agora

| Tipo | URL | Observação |
|------|-----|------------|
| **Produção (público)** | https://sentinelasaudeambiental.vercel.app | Abre sem login |
| **Preview da branch** | URL do PR na Vercel | Pode pedir **login Vercel** (proteção ativa) |
| **Local no Cursor Cloud** | http://localhost:3000 | Só dentro do workspace; veja abaixo |

### Preview de PR retorna 401

O projeto tem **Deployment Protection** (Vercel Authentication) nos previews. Isso é normal: a URL do PR **não abre no navegador comum** sem estar logado na Vercel.

**Opções:**

1. **Ver produção:** abra https://sentinelasaudeambiental.vercel.app (sempre público).
2. **Ver preview da branch:** faça login em [vercel.com](https://vercel.com) com a conta do projeto e abra o link do deploy no painel **Deployments** ou no PR #9.
3. **Desativar proteção (opcional):** Vercel → projeto `sentinelasaudeambiental` → **Settings → Deployment Protection** → permitir previews públicos ou desativar “Vercel Authentication” para Preview.

### `localhost:3000` não abre no seu PC

No **Cursor Cloud**, o servidor roda na máquina remota — `localhost` no seu browser aponta para **seu** computador, não para a nuvem.

**Como abrir o preview local:**

1. No Cursor, abra o painel **Ports** (ou **Forwarded Ports**).
2. Confirme a porta **3000** publicada.
3. Clique em **Open in Browser** / **Globe** ao lado da porta 3000.

Ou rode na sua máquina:

```bash
cd site && npm install && npm run dev
```

Depois abra http://localhost:3000 localmente.

## CI local (GitHub Actions)

O workflow `.github/workflows/site.yml` roda `lint` e `build` em cada push/PR.
