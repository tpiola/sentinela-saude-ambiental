# Thiago Piola Design System

A design system for the personal brand and product portfolio of **Thiago Biasoli Garcia Piola** — Farmacêutico CRF/SP 58.519, technical-commercial specialist in the Brazilian pharmaceutical sector, founder of Rei das Vendas / SaúdeGPT / Thiago Lab.

The system is extracted from the live production site at [thiagopiola.com.br](https://www.thiagopiola.com.br) and its Next.js 16 codebase:

- **Source repo:** [github.com/tpiola/thiagopiola](https://github.com/tpiola/thiagopiola) — read the full source there for the framer-motion animations, Lenis smooth-scroll wiring, and the many small ambience utilities that don't ship here (they belong in a runtime, not a design system).
- Related product repos in the same GitHub org (private): `reidasvendas`, `saudegpt`, `thiagolab`, `saudegpt-fisioterapia`, `saudegpt-nutricao`, `saudegpt-psicologia`. This design system covers the portfolio only — the SaúdeGPT verticals share the brand palette but have their own product surfaces.

---

## Product context

The portfolio is one page: hero → provas de entrega → atuação → competências → trajetória → projetos → newsletter → footer. Its stated purpose in the codebase's own agent instructions is **conversion + authority** ("ser A ÚNICA OPÇÃO LÓGICA"). Every design decision — the LinkedIn-blue palette, the CRF/SP number in a live-pulsing pill, the mono uppercase eyebrows, the sharp-cornered timeline panels — reinforces "verifiable pharmacist with technical-commercial and AI credentials."

Two locales (PT-BR default, EN) share the same layout; the SSOT for copy is `lib/content.ts` in the source repo.

---

## Content fundamentals

**Voice.** Factual, direct, credential-first. Third-person institutional (not "eu") for the manifesto sections; second-person imperative ("Conecte-se", "Fale com Thiago") for CTAs. Portuguese uses the formal register but not archaic — mixes technical vocabulary ("compliance regulatório", "vendas consultivas", "rotina técnica") with plain results-oriented phrases ("triagem automática, zero retrabalho").

**Casing.** Sentence case in body. `UPPERCASE + mono + wide tracking` for eyebrows, section labels, meta rows, and small CTAs — this is the signature move. Section titles use `text-gradient-brand` (brand→accent linear gradient) applied to plain Inter Semibold.

**Emoji.** Sparse and intentional. `🎉` after newsletter success and `✦` as a decorative marker on the "Farmacêutico Notável 2025" badge — used once each per page. Never in nav, buttons, headlines, or copy.

**Signature phrasings.**

- Credentials always cite the CRF/SP number: **"Farmacêutico CRF/SP 58.519"** — appears in the hero badge, header, footer, meta tags, and JSON-LD.
- Result claims are always short + verifiable: **"12+ anos como RT em grande rede"**, **"1/14.000 Farmacêutico Notável RD Saúde 2025"**, **"360° visão integrada do negócio"**.
- Project cards phrase problem/result as **"Desafio → Resultado"** with a checkmark.

**Micro-copy.** Below every major CTA, one mono-cased line of reassurance in muted color: `CRF/SP 58.519 · Resposta em até 2h`. That's the whole trick.

---

## Visual foundations

**Palette.** LinkedIn-adjacent blue `#0A66C2` as brand (authority in both pharma retail and tech-professional networks), warm orange `#F97316` as accent (used sparingly — small dots, the "05" index digit, a gradient stop for the display headings). Light-mode surface is `#F0F4F8` (cool near-white) with pure-white elevated cards; dark-mode surface is deep navy `#071A3C` with `#0C2048` cards.

**Type.** `Inter` (400–900) for everything, `JetBrains Mono` for eyebrows, indexes and micro-copy. Display sizes are fluid `clamp(3rem, 9vw, 6.5rem)` with `letter-spacing: -0.04em` and `line-height: 0.96`. No display-face — Clash Display was referenced in the source with a self-hosted `.woff2` that isn't in the public folder; we omit it and use Inter for display too. **Flag:** if you have the Clash Display variable woff2, drop it in `assets/fonts/` and add a `@font-face` block — the token layer already reserves `--font-display`.

**Spacing.** Tailwind 4px baseline. Section rhythm is `padding: clamp(3rem, 8vw, 6rem)` (or the `-lg` variant `clamp(4rem, 10vw, 9rem)` for the two hero-adjacent sections). Page container is `max-width: 72rem` (`--container-xl`), gutters `20px` mobile / `32px` desktop.

**Backgrounds.** Never plain white/black. Every full-bleed section has one of: a radial brand-tint at 2–3% opacity, two blurred `.orb` divs (500–600px, `filter: blur(80px)`), or a `linear-gradient(160deg, #0a1628 → #071541 → #0a66c2)` deep-navy `.surface-hero`. Grain overlay `.grain` (a base64 SVG turbulence) sits above everything at 2.5% opacity on the marketing hero. No hand-drawn illustrations, no patterns.

**Imagery.** One real photo: `assets/profile.jpg` — the studio portrait. Otherwise, only the PNG mark `assets/logo.png` (a caduceus emblem on a dark plate, blended via `mix-blend-mode: multiply`/`screen` per theme). Cool, neutral color grading, no filters. Stock imagery lives under `public/stock/` in the source repo but isn't currently rendered on the portfolio page.

**Animation.** Quiet-luxury only. Cubic-bezier `(0.16, 1, 0.3, 1)` almost everywhere, durations 350–900ms. Hover states lift `-2px` (buttons) or `-4px + scale(1.01)` (premium cards), with a brand-tinted shadow ring appearing. Text and cards fade+slide in on scroll using CSS `animation-timeline: view()` in the newest browsers and `framer-motion` `whileInView` as fallback. `dot-pulse`, `pulse-glow`, and `glow-subtle` are three named keyframes used for the credential badge, floating WhatsApp CTA, and shield icon respectively. **No bounces, no spins, no confetti.**

**Hover / press.** Buttons brighten (`filter: brightness(1.08)`), lift `-1px`, and gain a stronger shadow. Cards lift 2–4px with a brand-tinted glow. Ghost links animate a `scale-x` underline from the left, plus color shift to brand. Press states reset to `translateY(0)`; some elements go `scale(0.97)`.

**Borders.** Everywhere. 1px, `color: color-mix(in srgb, var(--brand) 8%, transparent)` — an almost-invisible brand tint. On hover, most cards ramp this up to 20–35% brand tint. The single exception: the two Trajetória panels use `border-radius: 0` (sharp corners) with the same 1px border — this is intentional and marks them as "primary documents", not "cards".

**Shadows.** Three named tiers (`--shadow-subtle / -medium / -strong`) plus two brand-tinted variants (`--shadow-brand-sm / -lg`). Cards rest at `subtle`, hover to `medium` or `brand-lg`. No hard drop shadows.

**Transparency + blur.** Sticky header at `background: color-mix(in srgb, var(--surface) 85%, transparent)` with `backdrop-filter: blur(20px)` once scrolled. Mobile menu overlay uses `blur(32px)` at 97% surface. `.glass` and `.glass-light` utilities exist for occasional light-mode glassmorphism (cards on the marketing hero band).

**Radii.** 10px for controls, 12px for icon tiles, 16px for cards (`--radius-2xl`), 20px for hero containers, `999px` (`--radius-pill`) for badges and the floating CTA, **0px** for Trajetória panels. Never larger than 20px — the site is confident, not friendly-round.

**Fixed elements.** Sticky header (translucent scrolled state), floating WhatsApp CTA bottom-right, scroll-progress bar top edge, cookie consent bottom, theme toggle in header. Nothing else pins.

**Cards.** All share a body of `background: var(--surface-elevated); border: 1px solid var(--border); border-radius: 16px; padding: 24–32px; box-shadow: var(--shadow-subtle);` and a hover that adds `translateY(-2px)` + medium shadow + `color-mix(--brand @ 20%)` border. The "premium" variant adds a 3D tilt via `perspective(600px) rotateX/rotateY` on mousemove and a brand-glow ring shadow on hover.

---

## Iconography

**No custom icon font, no proprietary sprite.** The source uses **Lucide React** for functional glyphs (Store, ShieldCheck, Cpu, GraduationCap, TrendingUp, MessageCircle, Mail, MapPin, ArrowUpRight, Sparkles, Menu, X, Sun, Moon, ArrowRight, Calendar, Clock, Tag). This design system references Lucide inline as SVG snippets in the components — copy from Lucide's site (or the [Lucide CDN](https://lucide.dev/icons/)) rather than approximating.

**Brand social icons** are hand-authored one-off SVGs living in `components/SocialIcons.tsx` in the source: LinkedIn (used as the primary CTA icon), X, GitHub, Instagram, Facebook, TikTok, Telegram, Reddit, Notion, Google Developers. **All ten are read into your prompt as needed from the source repo** — they are original path definitions (not Simple Icons) and can be inlined verbatim.

Icons are always ~16–20px, `stroke: currentColor`, `stroke-width: 2`. On feature cards they sit in a 44×44 tile with `background: color-mix(--brand @ 10%)` and `color: var(--brand)` — on hover the tile fills to solid brand + white icon. On credential cards the tile is smaller (40×40, radius 10) with a `glow-subtle` animation.

**Unicode / emoji as icons.** Only `✦` (used once as decorative marker on "Farmacêutico Notável 2025") and `🎉` (used once on newsletter success). Never as functional glyphs.

**PNG icons.** Only the logo (`logo.png` / `logo-transparente.png`) and PWA app icons. Copied into `assets/logo.png` for use here.

---

## Assets

`assets/logo.png` (the PNG mark — do not reconstruct in SVG) · `assets/profile.jpg` (studio portrait). Full source `public/` copies of stock imagery and OG cards are available in the source repo — copy in on demand.

---

## Components

Every component below is a `Name.jsx` + `Name.d.ts` pair. Load the bundle with `<script src="_ds_bundle.js">` and read as `const { X } = window.ThiagoPiolaDesignSystem_5bdcb0`.

**Primitives** — `components/buttons/`

- **Button** — `primary` (LinkedIn-blue solid with glow shadow), `secondary` (tinted fill + tinted border), `ghost` (mono-uppercase, transparent — nav links). Renders `<a>` when `href` is set.

**Badges & eyebrows** — `components/badges/`

- **Badge** — pill eyebrow with optional pulsing dot, used for credentials.
- **SectionLabel** — mono uppercase `<accent>NN</accent> / SECTION NAME`.

**Surfaces** — `components/cards/`

- **Card** — the elevated surface. `hover="subtle"` (default) is the standard lift; `hover="premium"` is the 3D tilt with brand-glow shadow used on Provas de Entrega.

**Content blocks** — `components/content/`

- **StatBlock** — big numeric value with brand-bar accent + mono uppercase label.
- **TimelineItem** — one row on the Trajetória left-rule timeline (dot, company, period, role, description, impacts list).
- **ProjectCard** — Resultados/Projetos card: `NN` index, title, `Desafio → Resultado` body, stack chips, "Ver projeto" link.
- **ProvaCard** — Provas de Entrega tile: centered big number, bold label, muted detail.
- **TrustCard** — credential row: brand-tinted shield + label + detail, anchor variant with hover arrow.
- **Divider** — the signature gradient horizontal rule; `neutral` or `brand`.

**Layout** — `components/layout/`

- **Logo** — the PNG mark, optionally with the credential lockup ("THIAGO PIOLA" + `Farmacêutico CRF/SP 58.519`).
- **Header** — sticky top nav: logo + mono-uppercase links + right-side CTA + `scrolled` translucent state.
- **Footer** — 3-column grid: brand block, nav list, contact cards, copyright.

**Forms & chrome** — `components/forms/`

- **NewsletterForm** — email + submit with success/error states, wired via `onSubmit`.
- **ThemeToggle** — 44×44 icon button toggling `<html class="dark">` and persisting to `localStorage.theme`.
- **FloatingCta** — fixed bottom-right round button with `pulse-glow` — the persistent WhatsApp CTA.

---

## UI kit

- **`ui_kits/portfolio/index.html`** — the full portfolio home recreated from the components above. Sections: Header · Hero · Provas de Entrega · Atuação · Trajetória · Projetos · Newsletter · Footer · Floating CTA. Registered as a `@dsCard` in group "Portfolio".

The blog page from the source repo (`app/blog/page.tsx`) shares 100% of these components — build it by swapping the middle sections for a `<PostCard>` grid; the blog card uses the category-tint pills documented in `guidelines/colors-tints.card.html`.

---

## Repo index

```
styles.css                 root entry — @imports only
tokens/                    colors · typography · spacing · radii · shadows · motion · effects · base
guidelines/                foundation specimen cards (@dsCard tagged)
components/                buttons · badges · cards · content · layout · forms
ui_kits/portfolio/         full-page recreation
assets/                    logo.png · profile.jpg
SKILL.md                   Claude Code / Agent Skills compat
```

---

## Caveats + open questions

- **Clash Display** was declared in the source's `globals.css` (`@font-face { src: url('/fonts/ClashDisplay-Variable.woff2') }`) but the woff2 file is not in the source `public/` folder — we fall back to Inter for display. Drop the variable woff2 in `assets/fonts/` and add a `@font-face` block to `tokens/typography.css` if you want the display-face back.
- Framer-motion parallax, magnetic-link cursor tracking, and Lenis smooth-scroll are runtime behaviors — the design system captures their *rest state* visuals (shadow, transform, border) but not the entrance choreography. The components render fine without those runtimes.
- Icons are inlined as bare SVG in each component to keep the bundle dependency-free. If a consuming project already ships Lucide, replace them.
