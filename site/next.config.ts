import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.VERCEL ? undefined : "standalone",
  poweredByHeader: false,
  images: {
    // As imagens de produção são locais; não há hosts externos autorizados.
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/escorpiao",
        destination: "/pragas/escorpiao",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
