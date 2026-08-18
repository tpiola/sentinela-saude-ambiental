import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // As imagens de produção são locais; não há hosts externos autorizados.
    remotePatterns: [],
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
