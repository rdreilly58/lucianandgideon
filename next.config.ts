import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.supercoloring.com',
        port: '',
        pathname: '/sites/default/files/**',
      },
    ],
  },
};

export default nextConfig;
