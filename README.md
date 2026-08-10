# Sentinela Saúde Ambiental

> **Site oficial:** [sentinelasaudeambiental.com.br](https://sentinelasaudeambiental.com.br) · Deploy: [sentinelasaudeambiental.vercel.app](https://sentinelasaudeambiental.vercel.app)
>
> Landing page profissional para a **Sentinela Saúde Ambiental** — controle integrado de pragas com laudo técnico em Franca/SP e região.
>
> ## Sobre o Negócio
>
> - **Empresa:** Sentinela Saúde Ambiental (CNPJ: 30.438.427/0001-37)
> - - **Endereço:** Av. Pedro Calandria Fernandes, 1300 — Franca/SP, CEP 14407-350
>   - - **Telefone/WhatsApp:** (16) 99374-7147
>     - - **E-mail:** sentinelasaudeambiental@gmail.com
>       - - **Horário:** Segunda a Sábado 07:00–19:00 · Domingo 08:00–17:00
>         - - **Atuação:** +11 anos em Franca, Batatais, Cristais Paulista, Orlândia e região
>          
>           - ## Tecnologias
>          
>           - | Tecnologia | Uso |
>           - |---|---|
>           - | Next.js 15 + App Router | Framework React |
> | Tailwind CSS v4 | Estilização |
> | Framer Motion | Animações |
> | TypeScript | Tipagem |
> | Vercel | Deploy e CDN |
> | Google Calendar | Agendamento online |
> | Make (ex-Integromat) | Automação de mensagens |
>
> ## Estrutura
>
> ```
> site/                     — Next.js + Tailwind (app principal)
> ├── src/
> │   ├── app/              — Rotas (page.tsx, layout.tsx, globals.css)
> │   ├── components/
> │   │   ├── sections/     — Seções da landing page
> │   │   └── ...           — Componentes globais (header, footer, etc.)
> │   └── lib/
> │       ├── brand.ts      — Dados da marca (nome, endereço, telefone...)
> │       └── integrations.ts — Integrações (Calendar, n8n/Make, GA)
> ├── public/               — Imagens, logos, vídeos
> └── ...
> docs/                     — Guias de configuração local
> ```
>
> ## Funcionalidades
>
> - ✅ Hero com vídeo de fundo e glassmorphism
> - - ✅ Seção Sobre com galeria de fotos do campo
>   - - ✅ Grid de Serviços (desinsetização, desratização, escorpiões...)
>     - - ✅ **Funil de Diagnóstico** — 3 passos interativos → WhatsApp
>       - - ✅ **Funil de Vendas** — 6 etapas do topo ao pós-venda
>         - - ✅ Seção B2B / Empresas
>           - - ✅ FAQ com as perguntas mais frequentes
>             - - ✅ **Agendamento Google Calendar** — layout redesenhado com benefícios
>               - - ✅ Captura de leads
>                 - - ✅ Footer com mapa, horários e contatos
>                   - - ✅ Botão flutuante WhatsApp
>                     - - ✅ SEO/JSON-LD geo local
>                       - - ✅ Totalmente responsivo (mobile, tablet, desktop)
>                        
>                         - ## Desenvolvimento
>                        
>                         - ```bash
>                           cd site
>                           npm install
>                           cp .env.example .env.local   # configure as variáveis de ambiente
>                           npm run dev                   # http://localhost:3000
>                           ```
>
> ### Variáveis de Ambiente (`.env.local`)
>
> ```env
> NEXT_PUBLIC_SITE_URL=https://sentinelasaudeambiental.com.br
> > > > > NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
> NEXT_PUBLIC_GTM_ID=
> NEXT_PUBLIC_HERO_VIDEO_URL=
> NEXT_PUBLIC_PROMO_VIDEO_URL=
> ```
>
> ## DNS — Domínio Próprio na Vercel
>
> Para conectar o domínio próprio (Hostinger) ao deploy na Vercel:
>
> 1. Acesse o **painel da Vercel** → Projeto → **Settings → Domains**
> 2. 2. Adicione `sentinelasaudeambiental.com.br` e `www.sentinelasaudeambiental.com.br`
>    3. 3. A Vercel fornecerá os registros DNS — anote os valores `A` e `CNAME`
>       4. 4. No **painel da Hostinger** → Domínios → DNS/Nameservers:
>          5.    - Tipo `A` → `@` → IP fornecido pela Vercel (ex: `76.76.21.21`)
>                -    - Tipo `CNAME` → `www` → `cname.vercel-dns.com`
>                     - 5. Aguarde propagação (15 min a 48h)
>                       6. 6. Atualize `NEXT_PUBLIC_SITE_URL` no `.env.local` e nas variáveis de ambiente da Vercel
>                         
>                          7. ## Automação Make (ex-Integromat)
>                         
>                          8. Quando o cliente envia mensagem pelo WhatsApp/formulário do site:
>                          9. 1. Make captura o webhook
>                             2. 2. Resposta automática profissional é enviada:
>    > *"Olá! Obrigado por entrar em contato com a Sentinela Saúde Ambiental. Recebemos sua mensagem e iremos retornar em breve. Nosso horário de atendimento é de segunda a sábado, das 07h às 19h. Até logo!"*
>    > 3. Lead é registrado na planilha Google Sheets
>    > 4. Notificação interna para a equipe
>    >
>    > ## Comandos Úteis
>    >
>    > ```bash
>    > npm run dev      # Servidor local
>    > npm run build    # Build de produção
>    > npm run lint     # ESLint
>    > npm run format   # Prettier
>    > ```
>    >
>    > ---
>    >
>    > © 2024–2025 Sentinela Saúde Ambiental — Todos os direitos reservados.
