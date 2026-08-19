import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
  "frame-ancestors 'none'",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "img-src 'self' data: https://www.google-analytics.com https://www.facebook.com https://*.googletagmanager.com",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // As imagens de produção são locais; não há hosts externos autorizados.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sentinelasaudeambiental.com.br",
          },
        ],
        destination: "https://www.sentinelasaudeambiental.com.br/:path*",
        permanent: true,
      },
      {
        source: "/escorpiao",
        destination: "/pragas/escorpiao",
        permanent: true,
      },
      ...[
        ["barata", "baratas"],
        ["rato", "ratos"],
        ["cupim", "cupins"],
        ["formiga", "formigas"],
        ["aranha", "aranhas"],
        ["mosquito", "mosquitos"],
      ].map(([singular, plural]) => ({
        source: `/pragas/${singular}`,
        destination: `/pragas/${plural}`,
        permanent: true,
      })),
      ...[
        ["controle-de-escorpioes", "escorpiao"],
        ["controle-de-baratas", "baratas"],
        ["controle-de-formigas", "formigas"],
        ["desratizacao", "ratos"],
        ["descupinizacao", "cupins"],
      ].map(([service, pest]) => ({
        source: `/servicos/${service}`,
        destination: `/pragas/${pest}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
