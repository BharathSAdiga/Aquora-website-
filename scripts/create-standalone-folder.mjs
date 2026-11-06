import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const target = path.join(root, "AQUORA-STANDALONE");

console.log("Preparing AQUORA-STANDALONE folder at:", target);

if (fs.existsSync(target)) {
  fs.rmSync(target, { recursive: true, force: true });
}
fs.mkdirSync(target, { recursive: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log("-> Copying src...");
copyRecursive(path.join(root, "src"), path.join(target, "src"));

console.log("-> Copying public...");
copyRecursive(path.join(root, "public"), path.join(target, "public"));

for (const file of ["tsconfig.json", "postcss.config.mjs", "eslint.config.mjs", ".env.example"]) {
  const p = path.join(root, file);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(target, file));
  }
}

console.log("-> Creating package.json with scripts.build and scripts.start...");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
pkg.scripts = {
  "build": "next build",
  "start": "node app.js"
};
fs.writeFileSync(path.join(target, "package.json"), JSON.stringify(pkg, null, 2) + "\n");

console.log("-> Creating next.config.ts with output: 'standalone'...");
const nextConfigContent = `import type { NextConfig } from "next";

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
`;
fs.writeFileSync(path.join(target, "next.config.ts"), nextConfigContent);

console.log("-> Creating app.js...");
const appJsContent = `'use strict';

const fs = require('fs');
const path = require('path');

// Standalone entry point
const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');
const localServer = path.join(__dirname, 'server.js');

if (fs.existsSync(standaloneServer)) {
  process.chdir(path.join(__dirname, '.next', 'standalone'));
  require(standaloneServer);
} else if (fs.existsSync(localServer)) {
  require(localServer);
} else {
  console.error('Error: Standalone server not found. Please run "npm run build" first.');
  process.exit(1);
}
`;
fs.writeFileSync(path.join(target, "app.js"), appJsContent);

console.log("-> Copying .next build artifacts...");
copyRecursive(path.join(root, ".next"), path.join(target, ".next"));

// Ensure standalone has public and static for self-contained deployment
const standaloneDir = path.join(target, ".next", "standalone");
if (fs.existsSync(standaloneDir)) {
  console.log("-> Ensuring .next/standalone has static chunks and public assets...");
  copyRecursive(path.join(target, "public"), path.join(standaloneDir, "public"));
  copyRecursive(path.join(target, ".next", "static"), path.join(standaloneDir, ".next", "static"));

  const standaloneAppJs = `'use strict';\nrequire('./server.js');\n`;
  fs.writeFileSync(path.join(standaloneDir, "app.js"), standaloneAppJs);

  const standalonePkgPath = path.join(standaloneDir, "package.json");
  if (fs.existsSync(standalonePkgPath)) {
    const sPkg = JSON.parse(fs.readFileSync(standalonePkgPath, "utf8"));
    sPkg.scripts = {
      "build": "next build",
      "start": "node app.js"
    };
    fs.writeFileSync(standalonePkgPath, JSON.stringify(sPkg, null, 2) + "\n");
  }

  // Also make Windows build paths portable to Linux in standalone server.js
  const serverJsPath = path.join(standaloneDir, "server.js");
  if (fs.existsSync(serverJsPath)) {
    let serverContent = fs.readFileSync(serverJsPath, "utf8");
    // If not already patched with relative fallback
    if (!serverContent.includes("nextConfig.outputFileTracingRoot = __dirname")) {
      const patch = `
// Standalone builds made on Windows contain absolute build-machine paths.
// Resolve these runtime-only roots relative to this package instead.
nextConfig.outputFileTracingRoot = __dirname;
nextConfig.repoRoot = __dirname;
if (nextConfig.turbopack) nextConfig.turbopack.root = __dirname;
`;
      serverContent = serverContent.replace(
        "process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig)",
        patch + "\nprocess.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig)"
      );
      fs.writeFileSync(serverJsPath, serverContent);
    }
  }
}

console.log("-> Creating README.md in AQUORA-STANDALONE...");
const readmeContent = `# AQUORA Yoga & Dance Studio (Standalone Project & Deployment)

This folder contains the complete AQUORA standalone project and deployment package, structured according to the Next.js standalone specification.

## Configuration Details
- **package.json scripts:**
  \`\`\`json
  "scripts": {
    "build": "next build",
    "start": "node app.js"
  }
  \`\`\`
- **next.config.ts:** Configured with \`output: "standalone"\`
- **app.js:** Entry point script running the standalone server.

## Folder Structure
\`\`\`
AQUORA-STANDALONE/
├── .next/
│   ├── standalone/          <-- The deployment-ready package for hosting/cPanel/VPS
│   │   ├── server.js        <-- Next.js standalone server
│   │   ├── app.js           <-- cPanel/Passenger entry point
│   │   ├── package.json     <-- Production scripts & dependencies
│   │   ├── node_modules/    <-- Traced production runtime
│   │   ├── .next/static/    <-- Bundled CSS, JS, and font chunks
│   │   └── public/          <-- Images and public assets
│   └── static/              <-- Bundled static assets
├── src/                     <-- Complete source code
├── public/                  <-- Public assets
├── app.js                   <-- Root startup script
├── next.config.ts           <-- Standalone Next.js config
└── package.json             <-- Full package configuration
\`\`\`

## How to Run Locally
\`\`\`bash
cd AQUORA-STANDALONE
npm start
# or: node app.js
\`\`\`
Then open [http://localhost:3000](http://localhost:3000)

## How to Rebuild
\`\`\`bash
npm run build
\`\`\`

## How to Deploy to cPanel / VPS / Hosting
Upload either:
1. The **contents of \`.next/standalone/\`** into your hosting application root.
2. Set the startup file in cPanel Node.js Application Manager to \`app.js\` (or \`server.js\`).
3. Start the application.
`;
fs.writeFileSync(path.join(target, "README.md"), readmeContent);

console.log("AQUORA-STANDALONE created successfully!");

