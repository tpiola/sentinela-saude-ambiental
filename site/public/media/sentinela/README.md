# Mídia Sentinela Saúde Ambiental (`public/media/sentinela`)

Pasta oficial para cópias **locais** de fotos e vídeos usados no site (**Sentinela Saúde Ambiental**).

## Layout

| Caminho             | Conteúdo                                                                |
| ------------------- | ----------------------------------------------------------------------- |
| `facebook/images/`  | Fotos referenciadas no código (paths fixos — galeria e poster do hero). |
| `facebook/videos/`  | Reservado para MP4 baixáveis (Reels costumam exigir login/Meta).        |
| `instagram/images/` | Miniaturas ou exportações do Instagram (@sentinelasaudeambiental).      |
| `instagram/videos/` | Reels em MP4, se obtidos com licença e download estável.                |

## Nome dos arquivos (Facebook)

- `01-capa-sentinel.jpg` — capa / identidade (também usada como poster do vídeo do hero).
- `02-trabalho-campo.jpg` … `06-controle-integrado.jpg` — demais fotos da grade, em ordem.
- `poster-hero.jpg` — cópia da capa para referência (o site usa `01-capa-sentinel.jpg` no `brand.ts`).

Use nomes somente em **ASCII**, sem acentos, para evitar problema em ferramentas e em servidores.

## Como atualizar as fotos do Facebook quando o CDN “quebrar”

As URLs do `fbcdn.net` são **assinadas e temporárias**. O fluxo recomendado:

1. Abra **Meta Business Suite** ou a página pública da empresa e localize a foto original.
2. Baixe a imagem em boa resolução (ou use “Transferir”) e sobrescreva o arquivo correspondente em `facebook/images/` (mantendo o nome).
3. Alternativa rápida no repositório: edite `site/scripts/fb-gallery-urls.json` com URLs novas copiadas do HTML público da página (`view-source:` ou ferramentas de desenvolvedor → Network → imagens `.jpg`) e rode:

   ```bash
   node scripts/download-fb-gallery.mjs
   ```

4. Verifique no site (`/`) a seção de galeria e o poster do vídeo.

## Instagram

O perfil público não oferece API sem autenticação; automatizar o grid costuma encontrar **mural de login** ou URLs que expiram.

- Preferência: exportar pelo app (Arquivados / suas atividades / download de dados) ou salvar arte aprovada manualmente para `instagram/images/` (`01-grid-....jpg`).
- Liste os caminhos em `instagramGalleryImages` em `src/lib/brand.ts`; qualquer futura linha da galeria no site lerá esse array quando houver itens.

## Vídeo (Facebook / Reels)

Muitos Reels não têm MP4 público estável para hotlink ou download automatizado neste projeto. Coloque apenas arquivos **explicitamente autorizados** em `facebook/videos/` ou `instagram/videos/` e referencie no código ou nas variáveis de ambiente, conforme a implementação atual do hero ou de players.
