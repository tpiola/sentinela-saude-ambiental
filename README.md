# 🛡️ Sentinela Saúde Ambiental

**Landing page de alta conversão para a Sentinela Saúde Ambiental — Franca/SP**

> 11 anos de autoridade máxima em controle de pragas. Insumos premium, inodoros e com segurança absoluta para crianças e pets.

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 🎯 Sobre o Projeto

Site institucional e landing page de alta conversão para a **Sentinela Saúde Ambiental**, empresa de controle de pragas urbanas com 11 anos de experiência em Franca/SP e região.

### Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 19 + TypeScript |
| Build | Vite 7 |
| Estilo | TailwindCSS 3.4 + Glassmorphism |
| Backend | Hono + tRPC |
| ORM | Drizzle ORM + MySQL |
| Auth | Jose (JWT) |

---

## ✨ Funcionalidades

- **Menu Glassmorphism** — Sticky floating menu transparente com efeito de vidro ao rolar
- **Hero Cinematográfico** — Vídeo background com animação de entrada suave
- **Botão SOS Sentinela** — CTA gold com shimmer pulsante para urgência
- **4 Seções de Serviços** — O Cuidado · A Urgência · Serviços de Elite · Protocolo de Prevenção
- **Selo Sentinela** — Lacre visual com data de aplicação + validade do insumo
- **WhatsApp Animado** — Ícone pulsante no canto inferior direito com notificação
- **Footer Dark Mode** — Mapa de cobertura + cidades atendidas
- **SEO Geo-Otimizado** — Tags para "Melhor dedetizadora de Franca" e variações locais

---

## 🎨 Design System

### Paleta de Cores

```
Deep Navy Blue:  #002D62  (cor primária)
Pure White:      #FFFFFF  (fundo e textos)
Mint Health:     #E6FFFA  (acentos e destaques)
Gold SOS:        #F5C842  (urgência e CTA)
Dark Navy:       #001228  (footer)
```

### Tipografia
- **Inter** — Display e corpo (Google Fonts)
- Pesos: 400 · 500 · 600 · 700 · 800 · 900

---

## 🚀 Executar Localmente

```bash
# Clonar o repositório
git clone https://github.com/tpiola/sentinela-saude-ambiental.git
cd sentinela-saude-ambiental

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações

# Iniciar em desenvolvimento
npm run dev
```

O servidor iniciará em `http://localhost:5173`

---

## 📂 Estrutura do Projeto

```
app/
├── src/
│   ├── sections/
│   │   ├── Navbar.tsx          # Menu glassmorphism + SOS Sentinela
│   │   ├── Hero.tsx            # Hero cinematográfico
│   │   ├── AlertSection.tsx    # Faixa de trust badges
│   │   ├── Services.tsx        # 4 cards de serviços de elite
│   │   ├── DiagnosisFunnel.tsx # Funil de diagnóstico interativo
│   │   ├── Plans.tsx           # Planos e preços
│   │   ├── FAQ.tsx             # Perguntas frequentes
│   │   ├── CTAFinal.tsx        # CTA final gold
│   │   ├── Footer.tsx          # Footer dark mode
│   │   └── WhatsAppFloat.tsx   # Botão WhatsApp flutuante
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   └── whatsapp.ts         # Utilitário WhatsApp
│   └── index.css               # Design system global
├── index.html                  # SEO + Schema.org + GEO tags
└── tailwind.config.js          # Design tokens Sentinela
```

---

## 🔍 SEO & GEO

Tags otimizadas para Franca/SP:

- `Melhor dedetizadora de Franca`
- `Controle de pragas em escolas Franca`
- `Proteção para pets Franca SP`
- `Dedetização condomínios Franca`
- `Controle escorpiões Franca SP`

Schema.org `LocalBusiness` configurado com geo-coordinates de Franca/SP.

---

## 📞 Contato

**Sentinela Saúde Ambiental**  
📍 Franca/SP e Região  
📱 (16) 99374-7147  
🌐 [sentinelasambiental.com.br](https://sentinelasambiental.com.br)

---

## 📄 Licença

Todos os direitos reservados © 2026 Sentinela Saúde Ambiental.
