# sentinela-saude-ambiental

Site para serviços de saúde ambiental — Rogério.

**Fluxo de trabalho:** o projeto **permanece neste repositório**. Abra esta pasta no Cursor e desenvolva aqui; para guardar no GitHub use `git commit` e `git push`. Não é necessário clonar de novo no dia a dia — clone só para criar uma cópia nova em outro lugar ou computador (veja [`docs/configuracao-local.md`](docs/configuracao-local.md)).

## Estrutura

- [`site/`](site/) — aplicação **Next.js** com **Tailwind**, **parallax** (Framer Motion), **Three.js / React Three Fiber** e mapa **Google Maps** incorporado (mensagem amigável quando não há chave).
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

### Implantação na Vercel

1. Conecte este repositório em [vercel.com/new](https://vercel.com/new) (importar do Git).
2. Em **Root Directory** (diretório raiz do projeto), defina **`site`** — é lá que está o Next.js.
3. O **Next.js** é detectado automaticamente; use **Node 20+** (veja `engines` em [`site/package.json`](site/package.json)).
4. Em **Environment Variables** (variáveis de ambiente), replique as de [`site/.env.example`](site/.env.example) (`NEXT_PUBLIC_*`). Nas restrições da chave do Google Maps, inclua `*.vercel.app` e o seu domínio definitivo.

Linha de comando (opcional), na pasta `site/`, com a CLI [`vercel`](https://vercel.com/docs/cli) já no projeto:

```bash
cd site
npx vercel login
npx vercel link
npm run deploy:preview
npm run deploy:prod
```

O arquivo [`site/vercel.json`](site/vercel.json) define o framework Next.js e a região **gru1** (São Paulo).

### Scripts em `site/`

| Comando                  | Descrição                                          |
| ------------------------ | -------------------------------------------------- |
| `npm run dev`            | Servidor de desenvolvimento                        |
| `npm run build`          | Compilação de produção                             |
| `npm run lint`           | ESLint                                             |
| `npm run format`         | Prettier (aplica formatação)                       |
| `npm run format:check`   | Prettier (só verifica, sem alterar arquivos)       |
| `npm run test` / `test:ci` | Lint + verificação Prettier + compilação (como no CI) |
| `npm run deploy:preview` | Ambiente de pré-visualização na Vercel (CLI)     |
| `npm run deploy:prod`    | Produção na Vercel (CLI)                           |
