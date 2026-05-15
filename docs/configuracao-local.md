# Configuração local: Cursor, GitHub, atalho e Git

Este guia complementa o repositório: execute estes passos **no seu computador**. O agente remoto não pode instalar o Cursor nem criar atalhos na sua máquina.

## Como você pode trabalhar (sem depender de clone)

O **projeto é este repositório**: o código “oficial” fica aqui no GitHub, e o fluxo natural é **abrir esta pasta no Cursor** (ou usar um workspace na nuvem que já aponta para ele) e **editar, commitar e dar push** sempre no mesmo lugar.

- **Não é obrigatório** usar `git clone` no dia a dia. Clone só faz sentido quando você precisa de uma **cópia nova** em outro disco ou máquina (por exemplo, primeiro uso num PC novo). Depois disso, você continua trabalhando **nessa mesma pasta**, puxando e enviando alterações com `git pull` e `git push`.
- **Salvar o trabalho no repositório remoto:** `git add` → `git commit` → `git push`. Assim o histórico e os arquivos ficam guardados no GitHub **neste** repo, sem duplicar o fluxo em outro clone.

Se o Cursor já abriu **esta** pasta como projeto, considere-a a sua base permanente de trabalho.

## 1. GitHub no Cursor

1. Abra o **Cursor**.
2. Vá em **Cursor → Settings → Cursor Settings** (ou **Accounts**, conforme a versão).
3. Conecte sua conta **GitHub** (útil para sincronização e integrações).
4. Opcional: habilite recursos que dependem de login, se aparecerem nas configurações.

## 2. Git (nome, e-mail e autenticação)

No terminal integrado do Cursor (ou terminal do sistema):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### SSH (recomendado)

1. Gere uma chave: `ssh-keygen -t ed25519 -C "seu-email@exemplo.com"`
2. Adicione a chave pública em **GitHub → Settings → SSH and GPG keys**.
3. Teste: `ssh -T git@github.com`

### HTTPS com token

1. **GitHub → Settings → Developer settings → Personal access tokens**: crie um token com escopo `repo`.
2. Ao fazer `git push` pela primeira vez via HTTPS (ou em máquina nova), use o token como senha (ou configure o gerenciador de credenciais do seu SO).

## 3. Repositório remoto (`origin`) e fluxo diário

Na maior parte do tempo o remoto **já está** configurado (`origin` apontando para o GitHub). O fluxo habitual é:

```bash
git pull origin <sua-branch>   # antes de começar, se outras pessoas ou agentes enviaram commits
# ... editar arquivos ...
git add -A
git commit -m "descreva a alteração"
git push -u origin <sua-branch>
```

**Só na primeira vez** que o repositório foi criado no GitHub (ou se `origin` não existir), configure:

```bash
git remote add origin git@github.com:USUARIO/REPO.git
# ou HTTPS:
# git remote add origin https://github.com/USUARIO/REPO.git

git push -u origin main
```

Substitua `USUARIO` e `REPO` pelos seus valores.

**`git clone`** use apenas quando precisar de uma **nova cópia** do zero em outro caminho ou máquina — não substitui trabalhar sempre na mesma pasta que você já usa no Cursor.

## 4. Atalho do Cursor na área de trabalho

### Windows

- Instale o Cursor pelo instalador oficial.
- Abra o **Menu Iniciar**, localize **Cursor**, arraste para a **Área de trabalho**, ou clique com o botão direito → **Abrir local do arquivo** → crie atalho apontando para o `.exe` do Cursor.

### macOS

- Arraste **Cursor.app** de **Aplicativos** para o **Dock**.
- Opcional: **Finder → Aplicativos → Cursor**, arraste com **⌥ Option + ⌘ Command** para a Área de trabalho para criar um alias.

### Linux

- Crie um arquivo `~/.local/share/applications/cursor.desktop` com `Exec=` apontando ao binário do Cursor (ex.: `/usr/bin/cursor` ou caminho do AppImage).
- Marque como executável: `chmod +x ...`.
- Copie o `.desktop` para `~/Desktop` se sua sessão expuser a pasta Desktop.

## 5. Extensões recomendadas

Ao abrir esta pasta no Cursor, você deve ver sugestão para instalar extensões definidas em `.vscode/extensions.json`. Instale também manualmente pelo painel **Extensions** (`Ctrl+Shift+X`) se necessário:

- **ESLint** — análise de código JavaScript/TypeScript.
- **Prettier** — formatação (alinhado ao projeto).
- **Tailwind CSS IntelliSense** — se usar Tailwind.
- **EditorConfig** — consistência de indentação entre editores.
- **Thunder Client** ou **REST Client** — testar chamadas HTTP às APIs Google (Maps, Places).

Para **3D** (Three.js), use principalmente a documentação oficial e tipagem TypeScript; extensões de snippets são opcionais.

## 6. Site Sentinela (`site/`) — rodar localmente

O site está em **Next.js** na pasta `site/`. Se o Node.js do sistema não estiver no PATH, o projeto inclui Node portátil em `site/.node/` (gerado na primeira configuração).

```powershell
cd site
.\.node\npm.cmd install
.\.node\npm.cmd run dev
```

Abra **http://localhost:3000** no navegador.

Build de produção: `.\.node\npm.cmd run build` e `.\.node\npm.cmd start`.

### Logo e fotos das redes

- Coloque o logo oficial em `site/public/brand/logo-sentinela.png` (PNG com fundo transparente ou branco).
- Substitua as fotos em `site/public/brand/gallery/1.jpg` … `4.jpg` por imagens exportadas oficialmente pelo time ou baixadas de [Instagram](https://instagram.com/sentinelasaudeambiental) (use arquivos locais em `site/public/media/sentinela/` — URLs de redes não servem como hotlink estável).

## 7. Variáveis de ambiente (`.env.local`)

Na pasta `site/`:

```powershell
copy .env.example .env.local
```

Edite `site/.env.local` (nunca commite este arquivo):

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_SITE_URL` | URL canónica (SEO, Open Graph, JSON-LD) |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Mapa embed personalizado (opcional) |
| `NEXT_PUBLIC_GOOGLE_MAPS_PLACE_QUERY` | Busca do lugar (`q`) no embed |
| `NEXT_PUBLIC_GOOGLE_MAP_EMBED_ORIGIN` | Opcional: texto de lugar que sobrescreve o `PLACE_QUERY` no iframe |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` | Link de agendamento (Google Calendar Appointment Schedule) |
| `NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL` | Formulário Google incorporado (?embedded=true) |
| `NEXT_PUBLIC_GOOGLE_CONTACT_FORM_OPEN_URL` | Link para abrir o formulário na aba (fallback) |
| `NEXT_PUBLIC_N8N_WEBHOOK_LEAD` | Webhook n8n para leads do formulário diagnóstico |
| `NEXT_PUBLIC_N8N_WEBHOOK_WHATSAPP` | Webhook n8n para eventos WhatsApp (opcional) |
| `NEXT_PUBLIC_N8N_WEBHOOK_META` | Webhook n8n para redes (opcional) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_HERO_VIDEO_URL` | Vídeo MP4 do hero (royalty-free; default em `brand.ts`) |

Reinicie o `npm run dev` após alterar `.env.local`.

## 8. APIs Google (negócios locais)

1. Crie um projeto em [Google Cloud Console](https://console.cloud.google.com/).
2. Ative **Maps Embed API**, **Places API** e **Geocoding API** conforme necessidade.
3. Crie uma chave de API restrita (HTTP referrers para seu domínio em produção).
4. Preencha `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` em `site/.env.local`.

O perfil público do estabelecimento é configurado no **Google Business Profile**, fora do código. Mantenha nome, telefone e endereço alinhados entre o perfil e o site para SEO local consistente.
