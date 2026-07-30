export const DEFAULT_SITE_URL =
  "https://www.sentinelasaudeambiental.com.br";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (configured || DEFAULT_SITE_URL).replace(/\/$/, "");
}
