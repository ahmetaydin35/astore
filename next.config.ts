import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'astore-red.vercel.app',
        port: '',
      },
    ],
  },
};

export default nextConfig;
