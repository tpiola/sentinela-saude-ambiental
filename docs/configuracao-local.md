# Configuração local: Cursor, GitHub, atalho e Git

Este guia complementa o repositório: execute estes passos **no seu computador**. O agente remoto não pode instalar o Cursor nem criar atalhos na sua máquina.

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
2. Ao fazer `git push` ou clone via HTTPS, use o token como senha (ou configure o gerenciador de credenciais do seu SO).

## 3. Repositório remoto (origin)

Após criar o repositório vazio no GitHub:

```bash
git remote add origin git@github.com:USUARIO/REPO.git
# ou HTTPS:
# git remote add origin https://github.com/USUARIO/REPO.git

git push -u origin main
```

Substitua `USUARIO` e `REPO` pelos seus valores.

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

## 6. APIs Google (negócios locais)

1. Crie um projeto em [Google Cloud Console](https://console.cloud.google.com/).
2. Ative **Maps JavaScript API**, **Places API**, **Geocoding API** conforme necessidade.
3. Crie uma chave de API restrita (HTTP referrers para seu domínio em produção).
4. Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (veja README na raiz do projeto).

O perfil público do estabelecimento é configurado no **Google Business Profile**, fora do código.
