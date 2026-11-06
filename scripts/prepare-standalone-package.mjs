import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const standaloneProject = path.join(root, "AQUORA-STANDALONE");
const standaloneDir = path.join(standaloneProject, ".next", "standalone");

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

console.log("Copying public assets into standalone...");
copyRecursive(path.join(standaloneProject, "public"), path.join(standaloneDir, "public"));

console.log("Copying .next/static into standalone/.next/static...");
copyRecursive(path.join(standaloneProject, ".next", "static"), path.join(standaloneDir, ".next", "static"));

console.log("Creating app.js in standalone...");
fs.writeFileSync(path.join(standaloneDir, "app.js"), "'use strict';\nrequire('./server.js');\n");

// Update package.json in standalone
const pkgPath = path.join(standaloneDir, "package.json");
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.scripts = {
    "build": "next build",
    "start": "node app.js"
  };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

// Make Windows paths portable to Linux in standalone server.js
const serverJsPath = path.join(standaloneDir, "server.js");
if (fs.existsSync(serverJsPath)) {
  let serverContent = fs.readFileSync(serverJsPath, "utf8");
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

console.log("Creating ZIP archive of the deployment package...");

