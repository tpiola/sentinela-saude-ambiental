# sentinela-saude-ambiental

Site para serviços de saúde ambiental — Rogério.

**Fluxo de trabalho (nuvem):** o projeto **permanece neste repositório**. Abra esta pasta no Cursor (Cloud Agent ou workspace fixo), edite, `git commit` e `git push` — a Vercel publica automaticamente. Não é necessário clonar de novo no dia a dia. Veja [`docs/configuracao-local.md`](docs/configuracao-local.md) e [`docs/deploy-vercel.md`](docs/deploy-vercel.md).

## Estrutura

- [`site/`](site/) — landing **Next.js** + **Tailwind** com **hero em vídeo**, scroll animado (Framer Motion), **Three.js** sob carregamento tardio, **mapa no rodapé**, botão flutuante **WhatsApp**, galeria ligada às redes e SEO/geo local (JSON-LD).
- [`docs/configuracao-local.md`](docs/configuracao-local.md) — GitHub no Cursor, atalho na área de trabalho, Git e lista de extensões.
- [`.vscode/extensions.json`](.vscode/extensions.json) — recomendações de extensões ao abrir o projeto no Cursor.

## Desenvolvimento

Na primeira vez:

```bash
cd site
npm install
cp .env.example .env.local   # NEXT_PUBLIC_SITE_URL, maps API key, consulta do lugar
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
