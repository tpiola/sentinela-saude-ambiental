# Multi-stage build: sentinelasaudeambiental.com.br
# Stage 1: Build the Next.js site (inside site/ subdirectory)
FROM node:22-alpine AS builder
WORKDIR /app

# Copy site-specific files
COPY site/package.json site/package-lock.json* ./site/
COPY site/next.config.ts site/tsconfig.json site/postcss.config.mjs ./site/
COPY site/src/ ./site/src/
COPY site/public/ ./site/public/

# Install and build inside site/
WORKDIR /app/site
RUN npm ci 2>/dev/null || npm install --no-audit --no-fund
RUN npm run build

# Stage 2: Production runner
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/site/.next/standalone ./
COPY --from=builder /app/site/.next/static ./.next/static
COPY --from=builder /app/site/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
