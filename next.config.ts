import type { NextConfig } from "next";

const isStandalone = process.env.BUILD_MODE === "standalone";

const nextConfig: NextConfig = {
  output: isStandalone ? "standalone" : "export",
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

