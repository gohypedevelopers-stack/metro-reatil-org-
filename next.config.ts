import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'halo.ae',
      },
    ],
  },
};

export default nextConfig;
