# sentinela-saude-ambiental

Site para serviços de saúde ambiental — Rogério.

**Fluxo de trabalho:** o projeto **permanece neste repositório**. Abra esta pasta no Cursor e desenvolva aqui; para guardar no GitHub use `git commit` e `git push`. Não é necessário clonar de novo no dia a dia — clone só para criar uma cópia nova em outro lugar ou computador (veja [`docs/configuracao-local.md`](docs/configuracao-local.md)).

## Estrutura

- [`site/`](site/) — aplicação **Next.js** com **Tailwind**, demonstrações de **parallax** (Framer Motion), **Three.js / React Three Fiber** e embed **Google Maps** (com fallback quando não há chave).
- [`docs/configuracao-local.md`](docs/configuracao-local.md) — GitHub no Cursor, atalho na área de trabalho, Git e lista de extensões.
- [`.vscode/extensions.json`](.vscode/extensions.json) — recomendações de extensões ao abrir o projeto no Cursor.

## Desenvolvimento

Na primeira vez:

```bash
cd site
npm install
cp .env.example .env.local   # opcional: preencher NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Deploy na Vercel

1. Conecte este repositório em [vercel.com/new](https://vercel.com/new) (import Git).
2. Em **Root Directory**, defina **`site`** (o Next.js está dentro dessa pasta).
3. Framework **Next.js** é detectado automaticamente; Node **20+** (ver `engines` em [`site/package.json`](site/package.json)).
4. Em **Environment Variables**, replique as do [`site/.env.example`](site/.env.example) (`NEXT_PUBLIC_*`). Nas URLs restritas da chave Google Maps, inclua o domínio `*.vercel.app` e seu domínio final.

CLI (opcional), já dentro de `site/` com [`vercel`](https://vercel.com/docs/cli) instalado pelo projeto:

```bash
cd site
npx vercel login
npx vercel link
npm run deploy:preview
npm run deploy:prod
```

Arquivo [`site/vercel.json`](site/vercel.json): framework Next.js e região **gru1** (São Paulo).

### Scripts em `site/`

| Comando              | Descrição                              |
| -------------------- | -------------------------------------- |
| `npm run dev`        | Servidor local                         |
| `npm run build`      | Build produção                         |
| `npm run lint`       | ESLint                                 |
| `npm run format`     | Prettier (write)                       |
| `npm run format:check` | Prettier (somente verificação)       |
| `npm run test` / `test:ci` | Lint + Prettier check + build (CI local) |
| `npm run deploy:preview` | Preview na Vercel (CLI)           |
| `npm run deploy:prod`    | Produção na Vercel (CLI)          |
