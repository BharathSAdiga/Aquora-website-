import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const standaloneDir = path.join(rootDir, ".next", "standalone");
const targetDir = path.join(rootDir, "hosting-package");

console.log("Preparing VPS Hosting Package...");

if (!fs.existsSync(standaloneDir)) {
  console.error("Error: .next/standalone not found. Please run 'npm run build' first.");
  process.exit(1);
}

// 1. Clean previous target directory
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 2. Copy standalone root files and folders
console.log("-> Copying standalone server and modules...");
copyDirSync(standaloneDir, targetDir);

// 3. Copy public directory to hosting-package/public
const publicSrc = path.join(rootDir, "public");
const publicDest = path.join(targetDir, "public");
if (fs.existsSync(publicSrc)) {
  console.log("-> Copying public assets...");
  copyDirSync(publicSrc, publicDest);
}

// 4. Copy .next/static to hosting-package/.next/static
const staticSrc = path.join(rootDir, ".next", "static");
const staticDest = path.join(targetDir, ".next", "static");
if (fs.existsSync(staticSrc)) {
  console.log("-> Copying static chunks into .next/static...");
  copyDirSync(staticSrc, staticDest);
}

// 5. Create PM2 ecosystem.config.cjs
const ecosystemConfig = `module.exports = {
  apps: [
    {
      name: "aquora-studio",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0"
      }
    }
  ]
};
`;
fs.writeFileSync(path.join(targetDir, "ecosystem.config.cjs"), ecosystemConfig);

// 6. Create sample nginx configuration
const nginxConfig = `# Nginx configuration for Aquora Dance & Yoga Studio
# Place in /etc/nginx/sites-available/aquora and symlink to /etc/nginx/sites-enabled/

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com; # Replace with your real domain

    # Gzip Compression
    gzip on;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    location /_next/static/ {
        alias /var/www/aquora/hosting-package/.next/static/;
        expires 365d;
        access_log off;
    }

    location /public/ {
        alias /var/www/aquora/hosting-package/public/;
        expires 30d;
        access_log off;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
`;
fs.writeFileSync(path.join(targetDir, "nginx-aquora.conf"), nginxConfig);

// 7. Create README for VPS deployment
const deployReadme = `# Ready-to-Host VPS Deployment Package

This folder contains the complete, self-contained, standalone production build of **AQUORA Yoga & Dance Studio**.

You do NOT need to run \`npm install\` or compile anything on your VPS.

---

## Quick Start on VPS (Ubuntu / Debian / CentOS)

### 1. Upload this folder to your server
Upload the \`hosting-package\` folder to your server (e.g., via SCP, SFTP, FileZilla, or Git):
\`\`\`bash
scp -r ./hosting-package user@YOUR_SERVER_IP:/var/www/aquora
\`\`\`

### 2. SSH into your server
\`\`\`bash
ssh user@YOUR_SERVER_IP
cd /var/www/aquora
\`\`\`

### 3. Run with PM2 (Recommended)
Make sure Node.js (version 18+ or 20+) and PM2 are installed:
\`\`\`bash
# If PM2 is not installed:
sudo npm install -g pm2

# Start the application using the included ecosystem file
pm2 start ecosystem.config.cjs

# Save PM2 process list so it automatically restarts on server reboot:
pm2 save
pm2 startup
\`\`\`

To test without PM2 directly:
\`\`\`bash
PORT=3000 HOSTNAME=0.0.0.0 node server.js
\`\`\`

---

## Domain & Nginx Setup (Reverse Proxy & SSL)

1. Copy the included \`nginx-aquora.conf\` to Nginx:
   \`\`\`bash
   sudo cp nginx-aquora.conf /etc/nginx/sites-available/aquora
   sudo ln -s /etc/nginx/sites-available/aquora /etc/nginx/sites-enabled/
   \`\`\`
2. Edit \`/etc/nginx/sites-available/aquora\` and replace \`yourdomain.com\` with your actual domain name.
3. Test and reload Nginx:
   \`\`\`bash
   sudo nginx -t
   sudo systemctl reload nginx
   \`\`\`
4. Install free SSL certificate using Certbot:
   \`\`\`bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   \`\`\`

Your website is now live on your domain with HTTPS!
`;
fs.writeFileSync(path.join(targetDir, "README.md"), deployReadme);

console.log("VPS Hosting Package created successfully in ./hosting-package");
