import type { NextConfig } from "next";

const isStandalone = process.env.BUILD_MODE === "standalone";

const nextConfig: NextConfig = {
  output: isStandalone ? "standalone" : "export",
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    ...(isStandalone ? { cpus: 1 } : {}),
  },
  images: {
    unoptimized: true,
  },
  ...(isStandalone
    ? {
        // Development-only UI resources are not used by the production server.
        // Excluding them also avoids Windows filesystem edge cases while tracing.
        outputFileTracingExcludes: {
          "/*": ["./node_modules/next/dist/next-devtools/**/*"],
        },
      }
    : {}),
};

export default nextConfig;

