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

| Comando | Descrição |
|--------|-----------|
| `npm run dev` | Desenvolvimento com hot reload |
| `npm run build` | Build do cliente e bundle do servidor |
| `npm run preview` | Pré-visualização da build estática (`dist/public`) |
| `npm run start` | Servidor Node em modo produção (após `npm run build`) |
| `npm run check` | Verificação TypeScript |
| `npm run lint` | ESLint |

### Variáveis opcionais de analytics

No `.env`, defina `VITE_GTM_ID` e/ou `VITE_GA_MEASUREMENT_ID` apenas quando tiver IDs reais. Sem isso, o site não carrega scripts de placeholder que geram erros na consola e pedidos falhados.

## Estrutura

- `app/` — aplicação web (frontend + `api/` backend integrado ao Vite em dev)
- `LICENSE` — licença do repositório
