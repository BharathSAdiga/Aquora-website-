import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    cpus: 1,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    "/*": ["./node_modules/next/dist/next-devtools/**/*"],
  },
};

export default nextConfig;
