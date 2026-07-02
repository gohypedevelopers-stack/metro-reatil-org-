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

// later we will remove that

export default nextConfig;
