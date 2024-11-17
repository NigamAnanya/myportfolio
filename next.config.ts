import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['githubusercontent.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
