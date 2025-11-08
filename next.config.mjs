/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['wagmi','viem','zustand']
  }
};
export default nextConfig;
