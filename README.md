# Sentinela Saúde Ambiental

Landing **Sentinela Saúde Ambiental** — controle integrado de pragas em Franca e região (SP).

O código-fonte principal está em **`site/`** (**Next.js 16**, **Tailwind CSS 4**, **Framer Motion**, JSON-LD).

## Clone e primeira execução

```powershell
git clone https://github.com/<sua-org>/sentinela-saude-ambiental.git
cd sentinela-saude-ambiental\site
npm install
copy .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Se usar o shim do projeto (quando existir): `..\site\.node\npm.cmd run dev`.

## Variáveis de ambiente (`.env.local`)

Veja **`site/.env.example`**. Principais:

| Variável | Uso |
| -------- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica (SEO, Open Graph). |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Embed do mapa Google (opcional). |
| `NEXT_PUBLIC_GOOGLE_MAPS_PLACE_QUERY` | Busca/lugar para o embed (`q`). |
| `NEXT_PUBLIC_GOOGLE_MAP_EMBED_ORIGIN` | Opcional: substitui o `q` do embed quando precisar igualar ao link curto. |
| `NEXT_PUBLIC_HERO_VIDEO_URL` | Vídeo MP4 do hero (default Pexels em `src/lib/brand.ts`). |
| `NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL` | Formulário Google embutido (apenas **um** `<form>` no documento; o iframe é outro documento). |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` | Link de agendamento para os CTAs “Agendar agora”. |
| `NEXT_PUBLIC_N8N_WEBHOOK_*` | Webhooks de automação (leads, etc.). |

## Marca e redes

- **WhatsApp / e-mail / CNPJ:** `site/src/lib/brand.ts`
- **Google Maps (link curto):** `BRAND.mapsShortUrl`
- **Instagram público:** [instagram.com/sentinelasaudeambiental](https://instagram.com/sentinelasaudeambiental) — no site: “acompanhe publicações”; galeria opcional via `instagramGalleryImages` + arquivos em `site/public/media/sentinela/instagram/images/` (ver README da pasta).

## Scripts em `site/`

| Comando | Descrição |
| ------- | --------- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (write) |

## Deploy (Vercel / CI)

- Diretório raiz do projeto na Vercel: **`site`** (ou monorepo com root `site`).
- Defina as variáveis `NEXT_PUBLIC_*` no painel da Vercel para produção e preview.
- Build: `npm run build` (output Next.js padrão).

## Documentação extra

- [`docs/configuracao-local.md`](docs/configuracao-local.md) — Git no Cursor, atalhos, extensões.
- [`site/AGENTS.md`](site/AGENTS.md) — notas Next.js (versão do projeto).
