import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // All images are now local via /media/thiago/ — no remote patterns needed
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
