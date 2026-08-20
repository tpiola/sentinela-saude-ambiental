# Sentinela Saúde Ambiental — Design System

Sistema de design da **Sentinela Saúde Ambiental**, dedetizadora de Franca/SP (CNPJ 30.438.427/0001-37) especializada em controle de escorpião, baratas, cupins, roedores e limpeza de caixa d'água, atendendo residências, empresas, condomínios e órgãos públicos em Franca e municípios da região.

## Fontes usadas

| Fonte | O que foi extraído |
| --- | --- |
| `github.com/tpiola/sentinela-saude-ambiental` (branch `main`, pasta `site/`) — **fonte primária** | Tokens (`site/src/app/globals.css`), tipografia (`site/src/app/layout.tsx`), dados de marca e FAQ (`site/src/lib/brand.ts`), mídia de campo (`site/src/lib/field-media.ts`), todos os componentes e seções (`site/src/components/**`), páginas (`site/src/app/**`), assets (`site/public/brand`, `site/public/media`) |
| `https://www.sentinelasaudeambiental.com.br` (site publicado) | Confirmação de estrutura de navegação, oferta e microcópia em produção |

O site publicado tem uma variação de copy mais agressiva (“Praga em casa? A Sentinela chega primeiro.”, promessas de tempo, emoji no menu de pragas). **O repositório é a fonte de verdade deste design system** — ele traz a versão sóbria e tecnicamente defensável da mesma marca. Onde houve divergência, o repositório venceu; a diferença está registrada em “Divergências” no fim deste arquivo.

Repositórios relacionados na mesma organização: `sentinela-dedetizadora` (apenas README + robots.txt) e `sentinelasaudeambiental.com.br` (vazio). Nada aproveitável neles.

---

## Contexto de produto

Um único produto: o **site institucional de captação**. Next.js 16 (App Router), PT-BR, sem dark mode (decisão explícita no código: “site de negócio deve exibir sempre a paleta clara”).

Superfícies: home · `/servicos` e `/servicos/[slug]` · `/pragas/[slug]` (7 pragas) · `/condominio` · `/locais/[slug]` e `/mercados/[slug]` (páginas de SEO local) · `/sobre` · `/faq` · `/contato` · `/agendar` · `/blog` · `/privacidade`.

Toda a arquitetura serve a duas metas: **prova local verificável** (fotos reais de campo, atendimento à Câmara Municipal de Franca, bairros nomeados) e **conversão por WhatsApp** (todo CTA relevante termina em `wa.me` com mensagem pré-preenchida por contexto).

---

## Fundamentos de conteúdo

**Voz.** Técnica, direta, sem superlativo vazio. Terceira pessoa institucional (“A Sentinela inspeciona…”, “A equipe orienta…”), nunca “eu”. Imperativo apenas nos CTAs: “Chamar no WhatsApp”, “Solicitar avaliação”, “Confirmar meu bairro”.

**Honestidade como regra de copy.** É o traço mais forte da marca: o texto recusa promessa que o escopo não garante.

- “Quando aplicável, prazo, cobertura e condições são descritos na proposta… **Não existe uma garantia única para todas as pragas e ambientes.**”
- “laudo **quando o escopo exige**”, “documentação **conforme o escopo contratado**”
- “A ação e a necessidade de acompanhamento **variam** conforme a espécie, o produto e as condições do imóvel.”

**Padrão sintomas → resposta.** Cada serviço é escrito em dois tempos: onde a praga aparece (“Ocorrências dentro de casa, quintais, ralos”) e o que a equipe faz (“Inspeção do ambiente, orientação preventiva e definição do tratamento adequado”). Nunca lista de produtos químicos.

**Caixa.** Frase normal no corpo. `CAIXA ALTA + tracking 0.14–0.20em` em eyebrow, rótulo de `<dt>`, local de foto e lockup da marca. Numeração de serviço em mono (“01”).

**Geografia sempre explícita.** “Franca”, “Franca/SP”, “Franca e região”, bairros e municípios nomeados aparecem em título, alt de imagem, legenda e mensagem de WhatsApp. É simultaneamente SEO local e prova.

**Aviso sanitário obrigatório.** “Em caso de picada, intoxicação ou sintomas, procure atendimento de saúde imediatamente. O controle de pragas não substitui atendimento médico.” Ele fica no rodapé de toda página e se repete em conteúdo sobre escorpião.

**Emoji.** No repositório: **nenhum**. (O site publicado usa 🦂🪳🐀🪵🕷️🐜🦟 no menu de pragas — não replique; para isso existe o `PestIcon`.) O único glifo unicode usado é o “✓” lima nas listas de fatos do hero.

**Microcópia sob CTA.** Sempre uma linha de contexto operacional: “WhatsApp (16) 99374-7147 · seg–sáb 07h–19h · dom 08h–17h”. No formulário: “o navegador monta a mensagem e abre o WhatsApp. O site não armazena esses campos nesta etapa.”

---

## Fundamentos visuais

**Paleta.** Navy institucional `#002347` (também `theme-color` do app) como cor de autoridade e fundo de metade das seções; verde-lima `#8fce2a` como cor de ação e sinalização (o mesmo verde de EPI/saúde ambiental), com `#4f7f12` para o mesmo papel sobre fundo claro (contraste). Azul `#1e6faf` aparece só no swoosh da marca. Verde WhatsApp em dois valores: `#128c4a` em botão sólido, `#25D366` exclusivamente no chrome flutuante. Superfície fria `#f0f4f8`, traço `#dde4ee`, corpo `#4a5568`. **Sem dark mode.**

**Tipografia.** Montserrat (500–900) em títulos, marca e valores de `<dd>`; DM Sans (400–700) em corpo e interface. Display com tracking negativo forte (`-0.045em` no h1, `-0.035em` no h2) e `line-height` 1.02–1.1 — títulos densos, quase cartazes. Corpo 16/1.75. Eyebrow 12px/700/caixa alta.

**Espaçamento.** Grade de 4px. Ritmo de seção `py-20` (80px) → `md:py-28` (112px). Container `.container-responsive`: 1200px, gutter 16 → 24 → 32px. Alvos de toque: CTA 56px, controles 44px.

**Fundos.** Alternância disciplinada de três superfícies: branco → navy → `#f0f4f8`. Sem gradiente decorativo, sem textura, sem orb, sem ilustração. O único gradiente do sistema é funcional: o véu `from-black/80 → transparent` que protege a legenda sobre foto (e a variante navy no hero).

**Imagem.** Fotografia documental real da equipe (`assets/campo/`), formato vertical 3:4 na maioria (origem: registro de celular em campo), `object-fit: cover`, recorte frequentemente `center 20–35%`. Cor natural, sem filtro, sem preto e branco, sem grão. Toda foto tem alt descritivo com serviço + local. **Nunca banco de imagem** — está escrito no próprio site: “Serviço real em Franca — não é banco de imagem.”

**Cantos.** 0 por padrão: CTA, cartões de seção, formulário, faixas. Arredondamento aparece pontualmente: 12px em tiles de praga e botões do chrome mobile, 16px em galeria e FAQ, 24px na foto de “Sobre”, pílula em badge, chip e botão flutuante. Nada acima de 24px, exceto pílula.

**Bordas e sombra.** A hierarquia é feita com traço de 1px (`#dde4ee` no claro, branco 15% no navy) e superfície — não com elevação. Sombra é quase ausente: `--shadow-card` nos cartões de FAQ, `--shadow-elevated` no dropdown, e o halo verde do botão flutuante. A régua lima de 2px (esquerda ou topo) é o marcador de destaque recorrente.

**Transparência e blur.** Só no chrome: header `rgba(0,35,71,0.9–0.95)` + `blur`, barra fixa mobile `0.95` + `blur(16px)`, cartões “glass” de processo em branco 5% sobre navy.

**Movimento.** Discreto e funcional. `200ms` em cor/borda, `300ms` no menu mobile, `500ms` no zoom `scale(1.03)` de foto no hover. Ponto pulsante (`ping`) no badge de prontidão; `active:scale(0.98)` no mobile. Entrada de conteúdo por fade+slide de 16px, e o CSS garante que **conteúdo nunca fica invisível esperando animação** (`.reveal-on-scroll{opacity:1}`) — decisão de SEO e acessibilidade. `prefers-reduced-motion` desliga tudo.

**Hover / press.** Botão WhatsApp: `brightness(1.1)`. Lima: vai para `#b8e96b`. Navy: vai para `#003066`. Outline claro: preenche com branco 10% e a borda vira branca. Outline navy: inverte para fundo navy e texto branco. Link com régua lima: a régua troca de lima para navy. Cartão/tile: borda acende em `#4f7f12` e o fundo vira branco.

**Foco.** `outline: 3px solid var(--brand-navy); outline-offset: 3px` — global, nunca removido. Existe link “Pular para o conteúdo”.

**Elementos fixos.** Header (z 50), barra de conversão mobile de 56px (z 55), botão WhatsApp flutuante 64px (z 60, só ≥640px), banner de cookies. Nada mais é fixo.

---

## Iconografia

- **Set de pragas autoral** — nove glifos desenhados no próprio repositório (`components/pest-icons.tsx`): escorpião, barata, rato, formiga, aranha, mosquito, mosca, cupim, caixa d'água. viewBox 24×28, traço 1.5, preenchimento `currentColor` a 8–25%. Portados verbatim em `components/icons/PestIcon.jsx`. **É o ativo icônico mais característico da marca** — não substitua por emoji nem por biblioteca genérica.
- **Ícones de UI** — Heroicons outline (traço 2, 24×24) para telefone, menu, fechar, chevron, seta, pin, documento, agenda, escudo, em `components/icons/UiIcon.jsx`. Se o projeto consumidor já usa Heroicons, troque pela biblioteca.
- **Marca WhatsApp** — o glifo oficial, inline, em `components/icons/WhatsAppIcon.jsx`. Único ícone de marca do sistema.
- **Emoji** — não usar (ver Fundamentos de conteúdo). Unicode: apenas “✓”.
- **PNG** — apenas a marca: `assets/logo-brasao.png` (brasão oficial), `assets/logo-sentinela.png`, `assets/logo-sentinela-transparente.png`. **Não reconstrua o brasão em SVG.** O repositório traz um escudo vetorial (`LogoShieldMark`) que é apenas fallback de carregamento; ele não é a marca.

---

## Índice

- `styles.css` — entrada global (só `@import`).
- `tokens/` — `colors` · `typography` · `spacing` · `radii` · `shadows` · `motion` · `base`.
- `guidelines/` — 17 cards de fundamentos (Colors, Type, Spacing, Brand, Motion).
- `components/`
  - `icons/` — **PestIcon**, **UiIcon**, **WhatsAppIcon**
  - `buttons/` — **Button**
  - `badges/` — **Eyebrow**, **Badge**, **Chip**
  - `cards/` — **Card**, **FieldPhotoCard**, **ServiceRow**, **ProcessStep**, **TrustItem**, **AccentStat**, **NoteBar**
  - `content/` — **SectionHeading**, **FaqItem**, **PestTile**
  - `forms/` — **TextField**, **SelectField**, **RadioPillGroup**
  - `layout/` — **Logo** (+ **LogoSwoosh**), **SiteHeader**, **SiteFooter**, **WhatsAppFloat**, **MobileStickyBar**
- `ui_kits/site/` — recreação clicável do site: Home, página de praga (escorpião), Empresas e condomínios, Solicitar avaliação.
- `assets/` — marca (3 PNG + `icon.svg`), `og.jpg`, `avatar-rogerio.png` e 10 fotos de campo em WebP.
- `ds-preview-loader.js` — utilitário só de preview: monta os componentes a partir de `components/` quando `_ds_bundle.js` ainda não foi compilado. Não faz parte da API pública.
- `SKILL.md` — compatibilidade com Agent Skills / Claude Code.

### Adições intencionais

O repositório de origem não fatora primitivos: cada seção repete utilitários Tailwind. Os componentes acima foram extraídos **das seções reais**, sem inventar famílias novas — exceções declaradas:

- **Chip** e **AccentStat** existem como padrão repetido inline (pílulas de bairro/município; destaques com régua lima em `stats-marquee`), não como componente.
- **SectionHeading** consolida o par eyebrow + h2 + lead que se repete em nove seções.
- **UiIcon** agrupa os SVGs inline espalhados em header, barra mobile e cartões.
- Não foram criados Toast, Modal, Tabs, Avatar ou Tooltip: o site não tem esses padrões.

## Adendo obrigatório do cliente — GBP + selo Google (permanente)

Regras fixas, válidas para **toda** página nova (bairros, serviços, municípios), sem exceção. Construir **mobile first a partir de 360px**.

1. **Mapa do Google Business Profile no rodapé de toda página** — `GbpMap` (`components/content/GbpMap.jsx`). Embed do perfil "Dedetizadora Sentinela Saúde Ambiental" com `loading="lazy"` (nunca atrasar o LCP), reveal por `clip-path` abrindo da esquerda em 600ms ao entrar no viewport, altura 260px no mobile e 320px no desktop, e os dois links-botão de 48px ("📍 Abrir GPS / Rotas" e "Ver perfil no Google") empilhados no mobile.
2. **Coordenadas corretas: `-20.4967359, -47.4182681`.** As antigas `-20.5401, -47.4009` (herdadas de `lib/brand.ts`) estão **erradas** e não devem aparecer em nenhum lugar. O JSON-LD sai de `gbpJsonLd()`, já com `geo` correto e `hasMap` apontando para o perfil.
3. **Selo "Avaliações Google · 5 estrelas"** — `GoogleReviewBadge`, SVG inline (~1KB, zero requisição, nítido em qualquer resolução). **Nunca PNG/JPG.** Herda `currentColor`; ajuste `rating` para a nota real do perfil.
4. **Trio de CTA com selo** — `TrustCtaTrio`: "Ver Soluções para Condomínio" · "Solicitar Avaliação" (WhatsApp, âmbar, primário do trio) · "Ver Controle de Escorpião". Layout de duas linhas (rótulo forte + selo a 70%), altura mínima 56px, mobile em largura total empilhado com gap 12px, hover escurece 8% e sobe 2px em 200ms (nunca escala mais que 2%), foco de teclado visível. Posicionar em **dois** lugares: depois de "Como funciona" e antes do rodapé, acima do mapa.

**Paleta do adendo.** O trio usa cores próprias, fora da paleta institucional: `--gbp-verde-sentinela #1E5C3F`, `--gbp-ambar #E8A020`, `--gbp-creme #F5F0E6`, `--gbp-tinta #1A1A18` (em `tokens/colors.css`). Elas convivem com navy + lima por decisão do cliente; o resto do sistema continua usando `--brand-*`. O emoji 📍 no botão de rotas também é exceção declarada à regra "sem emoji".

### Divergências entre repositório e site publicado

| Tema | Repositório (adotado) | Site publicado |
| --- | --- | --- |
| Promessa de tempo | “Resposta &lt; 30 min” como badge de prontidão | “Resolvemos em menos de 1h”, “Recordistas em agilidade” |
| Laudo | “laudo quando o escopo exige”, “conforme o escopo contratado” | “Laudo ANVISA incluso”, “100% laudo ANVISA” |
| Menu de pragas | rótulos em texto | rótulos com emoji |
| Números de prova | “11+ anos”, bairros e órgão público nomeados | “50+ condomínios atendidos”, “< 30 min garantido” |

Se o cliente quiser a linha mais agressiva, ela deve entrar como decisão consciente de copy — os componentes suportam as duas, mas as regras deste sistema seguem a versão do repositório.

---

## Ressalvas

- **Fontes**: Montserrat e DM Sans vêm do Google Fonts (CDN), como no original (`next/font/google`) — não há binário local em `assets/fonts/`.
- **Vídeos de campo** (`hero-pro.mp4`, aplicação perimetral, hospedagem) não foram copiados: são grandes e ficam no repositório de origem. O `FieldPhotoCard` cobre só imagem; para vídeo, use o padrão de `sections/gallery-section.tsx`.
- **Páginas não recriadas no UI kit**: `/servicos`, `/locais/[slug]`, `/mercados/[slug]`, `/blog`, `/contato`, `/privacidade`. Todas reutilizam os mesmos componentes; peça se quiser alguma delas como tela.
- **framer-motion**: o original animava FAQ, barra mobile e botão flutuante. Aqui os componentes trazem o estado de repouso e transições CSS equivalentes, sem dependência.
