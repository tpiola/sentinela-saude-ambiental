FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline --no-audit

FROM deps AS build
COPY . .
# Variáveis embutidas no bundle do Vite — passe no build: --build-arg VITE_KIMI_AUTH_URL=...
ARG VITE_KIMI_AUTH_URL=
ARG VITE_APP_ID=
ARG VITE_GTM_ID=
ARG VITE_GA_MEASUREMENT_ID=
ENV VITE_KIMI_AUTH_URL=$VITE_KIMI_AUTH_URL \
    VITE_APP_ID=$VITE_APP_ID \
    VITE_GTM_ID=$VITE_GTM_ID \
    VITE_GA_MEASUREMENT_ID=$VITE_GA_MEASUREMENT_ID
RUN npm run build

FROM base AS production
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --prefer-offline --no-audit
COPY --from=build /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/boot.js"]
