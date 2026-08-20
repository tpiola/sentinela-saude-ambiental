# UI kit — Site institucional Sentinela

Recriação das telas reais de **sentinelasaudeambiental.com.br** (fonte: `tpiola/sentinela-saude-ambiental`, `site/src`).

| Tela | Arquivo | Origem no repo |
| --- | --- | --- |
| Home | `HomeScreen.jsx` | `app/page.tsx` + `components/sovereign-hero`, `sections/trust-strip`, `sections/escorpiao-urgency`, `sections/pain-solution`, `sections/process-timeline`, `sections/gallery-section`, `sections/b2b-section`, `sections/area-atendimento-section`, `sections/faq-section`, `sections/cta-final` |
| Praga (escorpião) | `PestScreen.jsx` | `app/pragas/[slug]/page-client.tsx` (estrutura problema → protocolo → prova → FAQ) |
| Empresas e condomínios | `B2BScreen.jsx` | `sections/b2b-section` + `app/condominio/page.tsx` |
| Solicitar avaliação | `ScheduleScreen.jsx` | `app/agendar/page.tsx` |

`index.html` monta as quatro telas com navegação clicável pelo header e o formulário funcional (monta a mensagem do WhatsApp, como no site).

Todas as telas compõem os primitivos de `components/` — nada de estilo inventado. As fotos vêm de `assets/campo/`.
