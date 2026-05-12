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

### Scripts em `site/`

| Comando          | Descrição        |
| ---------------- | ---------------- |
| `npm run dev`    | Servidor local   |
| `npm run build`  | Build produção   |
| `npm run lint`   | ESLint           |
| `npm run format` | Prettier (write) |
