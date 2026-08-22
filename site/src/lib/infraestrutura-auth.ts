import { createHash, timingSafeEqual } from "node:crypto";

/**
 * Autenticação da área restrita /infraestrutura.
 * Credenciais fixas definidas pelo cliente. O token gravado no cookie é um
 * hash SHA-256 de `usuario:senha`, para não trafegar a senha em texto plano.
 */

export const INFRAESTRUTURA_USER = "sentinela";
export const INFRAESTRUTURA_PASSWORD = "SENTINELA_SENHA_REMOVIDA";

export const AUTH_COOKIE_NAME = "sentinela_auth";
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 dias

export function computeAuthToken(): string {
  return createHash("sha256")
    .update(`${INFRAESTRUTURA_USER}:${INFRAESTRUTURA_PASSWORD}`)
    .digest("hex");
}

export function isAuthTokenValid(token: string | undefined | null): boolean {
  if (!token) return false;

  const expected = computeAuthToken();
  const a = Buffer.from(token, "utf8");
  const b = Buffer.from(expected, "utf8");

  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
