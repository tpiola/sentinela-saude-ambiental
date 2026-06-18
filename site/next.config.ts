import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // All images are now local via /media/thiago/ — no remote patterns needed
    remotePatterns: [],
  },
};

export default nextConfig;
