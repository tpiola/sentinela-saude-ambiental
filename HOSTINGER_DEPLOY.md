# Deploy na Hostinger — Sentinela Saúde Ambiental

Este projeto roda como **container Docker** na Hostinger (ou qualquer VPS com Docker e Traefik).

## Pré-requisitos na Hostinger

1. VPS com Docker e Docker Compose instalados
2. Domínio `sentinelasaudeambiental.com.br` apontado para o IP da VPS
3. Portas 80 e 443 liberadas no firewall

## Passo a passo

### 1. Acessar a VPS via SSH

```bash
ssh usuario@ip-da-vps
```

### 2. Clonar o repositório

```bash
git clone https://github.com/tpiola/sentinela-saude-ambiental.git
cd sentinela-saude-ambiental
```

### 3. Configurar variáveis de ambiente

```bash
cp site/.env.example site/.env
# Editar site/.env com as credenciais reais:
nano site/.env
```

### 4. Subir com Docker Compose

```bash
docker compose up -d --build
```

O site estará disponível em:
- https://sentinelasaudeambiental.com.br
- https://www.sentinelasaudeambiental.com.br

### 5. Verificar logs

```bash
docker compose logs -f
```

## Manutenção

### Atualizar o site

```bash
git pull
docker compose up -d --build
```

### Parar o site

```bash
docker compose down
```

### Verificar status

```bash
docker compose ps
```

## Estrutura

```
sentinela-saude-ambiental/
├── Dockerfile          # Build do Next.js em modo standalone
├── docker-compose.yml  # Orquestração com Traefik + SSL
├── site/               # Código do Next.js
│   ├── src/            # Componentes e páginas
│   ├── public/         # Assets estáticos
│   └── .env.example    # Exemplo de variáveis
└── docs/               # Documentação
```
