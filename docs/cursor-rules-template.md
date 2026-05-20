# Modelo de regras Cursor (copiar para outros repos)

Crie `.cursor/rules/projeto.mdc` no repositório de destino:

```markdown
---
description: Padrões do projeto web
globs: ["**/*.{ts,tsx,js,jsx,css,md}"]
alwaysApply: true
---

# Regras do projeto

- Comentários em português do Brasil.
- Formatar com Prettier antes de commitar.
- Nunca commitar `.env.local` nem segredos.
- SEO: metadata, JSON-LD local, sitemap, robots, OG 1200×630.
- Deploy: Vercel com root directory correto se monorepo.
- Acessibilidade: contraste, labels, `prefers-reduced-motion`.
- LGPD: tracking (GA/GTM/Pixel) só com consentimento explícito.
```

Ajuste `globs` e o nome do arquivo conforme o stack (PHP, WordPress, etc.).

## MCP Magnific (opcional — imagens e ícones)

Copie para `.cursor/mcp.json` na raiz do projeto (ou mescle com servidores existentes):

```json
{
  "mcpServers": {
    "magnific": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.magnific.com/mcp",
        "--header",
        "x-magnific-api-key:${MAGNIFIC_API_KEY}"
      ],
      "env": {
        "MAGNIFIC_API_KEY": ""
      }
    }
  }
}
```

Preencha a chave em **Cursor → Settings → MCP** (nunca no Git). Detalhes: [`docs/mcp-magnific.md`](mcp-magnific.md).
