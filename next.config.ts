import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.metroretailsolutions.in',
      },
      {
        protocol: 'https',
        hostname: 'halo.ae',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

// later we will remove that

export default nextConfig;
