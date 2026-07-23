import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bytegrad.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'api.maptiler.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.geoapify.com',
      },
    ],
    qualities: [50, 75],
  },
  cacheComponents: true,
};

export default nextConfig;
