<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### Projeto

Landing page Next.js 16 (App Router + Turbopack) em `site/`. Não há banco de dados, Docker ou serviços externos obrigatórios. Todo o código fica em `site/`.

### Comandos (executar dentro de `site/`)

| Ação | Comando |
|------|---------|
| Instalar deps | `npm install` |
| Dev server | `npm run dev` (porta 3000) |
| Build produção | `npm run build` |
| Lint | `npm run lint` |
| Formatação | `npm run format` (write) / `npx prettier --check .` (verificar) |

### Env vars

Na primeira execução, crie `site/.env.local` a partir de `site/.env.example`. O site funciona localmente sem nenhuma chave preenchida (features como mapa e analytics degradam graciosamente).

### Notas não óbvias

- O build usa **Turbopack** por padrão (Next.js 16). Build e dev são rápidos (~3 s build, ~250 ms dev startup).
- Nenhum `prefers-reduced-motion` workaround é necessário para testes em CI — Three.js e animações carregam com lazy load.
- O projeto não possui testes automatizados (unitários/integração). Validação é feita via lint + build + verificação visual.
- Deploy Vercel usa **Root Directory = `site`**; ao criar PRs, considere que o root do deploy não é a raiz do repo.
