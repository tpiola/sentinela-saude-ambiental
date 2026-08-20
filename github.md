repo: tpiola/sentinela-saude-ambiental
branch: main
path: site

## Last sync
date: 2026-08-20T08:10:00Z

### Updated in this project
- Adendo obrigatório do cliente: GbpMap (coordenadas -20.4967359,-47.4182681 + JSON-LD), GoogleReviewBadge (SVG inline) e TrustCtaTrio, aplicados no UI kit em dois pontos.
- Tokens, guidelines e componentes extraídos de `site/src` (globals.css, brand.ts, field-media.ts, components/**, app/**).
- Assets de marca e 10 fotos de campo copiados de `site/public`.
- UI kit com Home, página de praga, Empresas/condomínios e formulário de avaliação.

## Screen map
| Tela / artefato | Arquivos de origem no repo |
| --- | --- |
| tokens/*.css | site/src/app/globals.css · site/src/app/layout.tsx |
| components/icons | site/src/components/pest-icons.tsx · site/src/components/social-brand-icons.tsx · SVGs inline de site-header.tsx e mobile-sticky-bar.tsx |
| components/buttons · badges · cards · content | site/src/components/sections/*.tsx |
| components/forms | site/src/app/agendar/page.tsx |
| components/layout | site/src/components/site-header.tsx · site-footer.tsx · logo-sentinel.tsx · whatsapp-float.tsx · mobile-sticky-bar.tsx |
| ui_kits/site/HomeScreen.jsx | site/src/app/page.tsx + sections/* |
| ui_kits/site/PestScreen.jsx | site/src/app/pragas/[slug]/page-client.tsx |
| ui_kits/site/B2BScreen.jsx | site/src/components/sections/b2b-section.tsx · site/src/app/condominio/page.tsx |
| ui_kits/site/ScheduleScreen.jsx | site/src/app/agendar/page.tsx |
| components/content/GbpMap.jsx · GoogleReviewBadge.jsx · components/buttons/TrustCta.jsx | Adendo do cliente (não existe no repo) — perfil Google Business "Dedetizadora Sentinela Saúde Ambiental" |
| assets/ | site/public/brand/* · site/public/media/sentinela/{campo,drive}/* · site/public/icon.svg · og.jpg |
