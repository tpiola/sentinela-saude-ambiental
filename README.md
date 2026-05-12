# sentinela-saude-ambiental

Site para Serviços de Saúde Ambiental — Sentinela (Franca SP e região).

## Desenvolvimento local

O código da aplicação está na pasta **`app/`** (Vite + React + API Hono/tRPC).

```bash
cd app
npm ci
cp .env.example .env
# Edite .env com credenciais reais se for usar login/API e base de dados.
npm run dev
```

O servidor de desenvolvimento sobe em **http://localhost:3000** (o Vite está configurado para abrir o navegador automaticamente quando possível).

### Comandos úteis

| Comando           | Descrição                                             |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Desenvolvimento com hot reload                        |
| `npm run build`   | Build do cliente e bundle do servidor                 |
| `npm run preview` | Pré-visualização da build estática (`dist/public`)    |
| `npm run start`   | Servidor Node em modo produção (após `npm run build`) |
| `npm run check`   | Verificação TypeScript                                |
| `npm run lint`    | ESLint                                                |

### Variáveis opcionais de analytics

No `.env`, defina `VITE_GTM_ID` e/ou `VITE_GA_MEASUREMENT_ID` apenas quando tiver IDs reais. Sem isso, o site não carrega scripts de placeholder que geram erros na consola e pedidos falhados.

## Deploy

Requisitos: **Node.js 20.x** (ver `engines` em `app/package.json`), **MySQL** acessível pela `DATABASE_URL`, e credenciais da API OAuth Kimi.

### Variáveis por provedor (runtime vs build)

| Variável                 | Obrigatória em produção   | Momento                     | Onde configurar               |
| ------------------------ | ------------------------- | --------------------------- | ----------------------------- |
| `APP_ID`                 | Sim                       | Runtime (backend)           | Secret / env do host          |
| `APP_SECRET`             | Sim                       | Runtime (backend)           | Secret / env do host          |
| `DATABASE_URL`           | Sim                       | Runtime (backend + Drizzle) | Secret / env do host          |
| `KIMI_AUTH_URL`          | Sim                       | Runtime (backend)           | Variável de ambiente          |
| `KIMI_OPEN_URL`          | Sim                       | Runtime (backend)           | Variável de ambiente          |
| `OWNER_UNION_ID`         | Não                       | Runtime                     | Opcional (admin inicial)      |
| `PORT`                   | Não                       | Runtime                     | Opcional (padrão `3000`)      |
| `VITE_KIMI_AUTH_URL`     | Sim para login no cliente | **Build** (`npm run build`) | CI ou `--build-arg` no Docker |
| `VITE_APP_ID`            | Sim para login no cliente | **Build**                   | CI ou `--build-arg` no Docker |
| `VITE_GTM_ID`            | Não                       | **Build**                   | Opcional                      |
| `VITE_GA_MEASUREMENT_ID` | Não                       | **Build**                   | Opcional                      |

As variáveis `VITE_*` são injetadas no JavaScript do browser na hora do build; defini-las só no container em execução **não** atualiza o bundle.

### Banco de dados (Drizzle)

1. Com `DATABASE_URL` real apontando para o MySQL de destino: `cd app && npm run db:migrate` para aplicar migrações versionadas em `app/db/migrations/`.
2. Alternativa apenas em ambiente controlado: `npm run db:push` (sem histórico de migrações).

### Docker

Contexto de build: pasta **`app/`** (onde estão `Dockerfile`, `package.json` e `package-lock.json`).

```bash
cd app
docker build \
  --build-arg VITE_KIMI_AUTH_URL=https://... \
  --build-arg VITE_APP_ID=... \
  -t sentinela:latest .
docker run --rm -p 3000:3000 \
  -e NODE_ENV=production \
  -e APP_ID=... -e APP_SECRET=... \
  -e DATABASE_URL='mysql://...' \
  -e KIMI_AUTH_URL=... -e KIMI_OPEN_URL=... \
  sentinela:latest
```

Não é necessário copiar `.env` para a imagem; passe segredos por `-e` ou pelo orquestrador. O `.dockerignore` ignora `.env` no contexto.

### Sem Docker

```bash
cd app
npm ci
cp .env.example .env   # preencha runtime + VITE_* antes do build
npm run build
npm run start
```

## Estrutura

- `app/` — aplicação web (frontend + `api/` backend integrado ao Vite em dev)
- `LICENSE` — licença do repositório
