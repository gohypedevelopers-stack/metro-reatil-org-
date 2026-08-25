/** @type {import('next').NextConfig} */
const nextConfig = {
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
