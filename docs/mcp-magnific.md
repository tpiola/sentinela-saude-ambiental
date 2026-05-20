# Magnific MCP — Cursor (todos os projetos)

Integração oficial para buscar, gerar e baixar imagens/ícones via [Magnific API](https://docs.magnific.com/modelcontextprotocol) dentro do Cursor.

## Instalação neste repositório

O arquivo [`.cursor/mcp.json`](../.cursor/mcp.json) já declara o servidor **magnific**. Ao abrir a pasta no Cursor:

1. **Cursor → Settings → MCP** — confirme que `magnific` aparece (projeto + global são mesclados).
2. Clique em **Refresh** ao lado do servidor se não conectar na primeira vez.
3. Preencha a chave de API (veja abaixo).
4. Reinicie o Cursor se as ferramentas não aparecerem.

## Chave de API

1. Obtenha em [Magnific / Freepik API](https://docs.magnific.com/).
2. **Nunca commite** a chave no Git.

Opções seguras:

| Onde | Como |
|------|------|
| **Cursor (recomendado)** | Settings → MCP → servidor `magnific` → editar `MAGNIFIC_API_KEY` no bloco `env` |
| **Global** | `~/.cursor/mcp.json` com o mesmo bloco `magnific` e sua chave |
| **Variável de ambiente** | `export MAGNIFIC_API_KEY=...` no shell antes de abrir o Cursor |

Modelo copiável: [`.cursor/mcp.example.json`](../.cursor/mcp.example.json).

## Reutilizar em outros repositórios

Copie para a raiz de qualquer projeto:

```bash
mkdir -p .cursor
cp /caminho/para/sentinela-saude-ambiental/.cursor/mcp.json .cursor/
cp /caminho/para/sentinela-saude-ambiental/.cursor/mcp.example.json .cursor/
```

Ou use o bloco em [`docs/cursor-rules-template.md`](cursor-rules-template.md).

## O que o agente pode fazer

- Buscar stock images e ícones
- Gerar imagens com IA
- Baixar recursos para `site/public/`
- Classificar conteúdo visual

## Uso no Sentinela

- Hero, OG 1200×630, galeria e redes: preferir assets em `site/public/media/sentinela/`.
- Após download via MCP, atualize `site/src/lib/brand.ts` (`galleryImages`, `ogImagePath`).
- Formatar com Prettier; não commitar chaves.

## Solução de problemas

- **Servidor offline:** `npx -y mcp-remote` precisa de Node/npm; teste no terminal.
- **401 / unauthorized:** confira `MAGNIFIC_API_KEY`.
- **Conflito global vs projeto:** config do projeto tem prioridade sobre `~/.cursor/mcp.json`.

Documentação: https://docs.magnific.com/modelcontextprotocol
