/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mkholis-portfolio.pages.dev",
      },
      {
        protocol: "https",
        hostname: "www.behance.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  transpilePackages: ["react-markdown"],
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_DISABLE_ESLINT === "1",
  },
  typescript: {
    ignoreBuildErrors: process.env.NEXT_DISABLE_TYPECHECK === "1",
  },
  experimental: {
    optimizePackageImports: [
      "@heroui/react",
      "lucide-react"
    ],
  },
};

export default nextConfig;

