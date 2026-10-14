# AQUORA Yoga & Dance Studio

> An architectural sanctuary in JP Nagar, Bengaluru dedicated to mindful yoga, dynamic western dance, and classical Bharatanatyam heritage.

**GitHub Repository**: [https://github.com/BharathSAdiga/Aquoradancenyoga](https://github.com/BharathSAdiga/Aquoradancenyoga)

---

## ✦ Studio Disciplines & Offerings

- **Discipline 01 — Yoga**: Mindful asanas, breathwork (pranayama), and exclusive ladies batches.
- **Discipline 02 — Western Dance**: Contemporary movement, musicality, and stage choreography.
- **Discipline 03 — Bharatanatyam**: Classical Indian geometry, aramandi, mudras, and abhinaya heritage.

---

## ✦ Studio Location & Hours

- **Address**: No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078
- **Hours**: Monday – Saturday, 06:00 AM – 08:30 PM (Sundays reserved for workshops)
- **Instagram**: [@aquorastudio](https://instagram.com/aquorastudio)
- **Email**: aquorayogadancestudio@gmail.com

---

## ✦ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Standalone Output)
- **UI Library**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom architectural dark/light palette
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Process Manager**: [PM2](https://pm2.keymetrics.io/)

---

## ✦ Getting Started (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| :--- | :---: | :--- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional | Google Maps Embed API key for the contact map widget. Defaults to interactive card with Google Maps link if omitted. |

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production Locally
```bash
npm run build
npm run start
```

---

## ✦ VPS / Linux Server Deployment (Domain Hosting)

The project includes an automated packager that creates a **minimal, self-contained standalone server package** (~14.2 MB compressed, ~36 MB uncompressed). 

> **Important**: Never upload the raw developer `node_modules` (over 1 GB of build tools) to your server. Only upload the generated `hosting-package.zip`.

### 1. Generate the Hosting Package
Run this command on your machine:
```bash
npm run package:vps
```
This generates:
- `hosting-package/` — The ready-to-run folder.
- `hosting-package.zip` — The compressed archive ready for fast transfer.

### 2. Upload to Your Server
Upload `hosting-package.zip` to your VPS via SCP or SFTP:
```bash
scp ./hosting-package.zip user@YOUR_SERVER_IP:/var/www/
```

### 3. SSH into Server & Unzip
```bash
ssh user@YOUR_SERVER_IP
cd /var/www
unzip hosting-package.zip -d aquora
cd aquora
```

### 4. Run with PM2 (Auto-Restart & Zero Downtime)
```bash
# Install PM2 if not installed
sudo npm install -g pm2

# Start the application using the included ecosystem file
pm2 start ecosystem.config.cjs

# Save PM2 process list to auto-start on server reboot
pm2 save
pm2 startup
```

### 5. Configure Domain with Nginx & Free SSL

1. Copy the included Nginx config:
   ```bash
   sudo cp nginx-aquora.conf /etc/nginx/sites-available/aquora
   sudo ln -s /etc/nginx/sites-available/aquora /etc/nginx/sites-enabled/
   ```
2. Replace `yourdomain.com` with your real domain:
   ```bash
   sudo nano /etc/nginx/sites-available/aquora
   ```
3. Test and reload Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```
4. Install free SSL certificate using Certbot:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## ✦ Alternative: Deploy to Vercel

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel auto-detects Next.js settings and deploys automatically.
4. Add your custom domain under **Project Settings > Domains**.

---

## ✦ Project Structure

```text
├── hosting-package/             # Generated standalone package for VPS hosting
├── public/
│   └── assets/                  # High-resolution optimized studio photos & logo crest
├── scripts/
│   └── prepare-vps-package.mjs  # Automation script to assemble the VPS hosting bundle
├── src/
│   ├── app/                     # Next.js App Router (layout, page, icon, sitemap, manifest)
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, Mobile Drawer
│   │   ├── sections/            # Hero, About, Classes, Schedule, Storytelling, Studio, Contact
│   │   ├── theme/               # ThemeProvider & ThemeToggle (dark/light)
│   │   └── ui/                  # Floating WhatsApp button, buttons, modals
│   └── lib/                     # Utility functions (cn helper)
├── next.config.ts               # Standalone output configuration
├── package.json                 # Scripts and dependencies
└── tsconfig.json                # TypeScript compiler configuration
```

---

## ✦ License

Private property of **AQUORA Yoga & Dance Studio**. All rights reserved.
