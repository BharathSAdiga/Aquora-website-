# AQUORA Yoga & Dance Studio — Production Deployment Guide

This guide provides step-by-step instructions for deploying and running the **AQUORA Yoga & Dance Studio** web application in a production environment on **Vercel**.

---

## 1. Install Dependencies

Ensure you have **Node.js 18.17+** or **Node.js 20+** installed on your system.

```bash
# Clone the repository (if on a new machine)
git clone <repository-url>
cd "aquora-studio"

# Install production dependencies
npm install
```

---

## 2. Run Locally

To verify the application locally:

```bash
# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production build locally:

```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

---

## 3. Configure Environment Variables

The project includes an `.env.example` file. 

Create a local `.env.local` file for local development or set environment variables in your hosting dashboard:

```bash
cp .env.example .env.local
```

### Supported Environment Variables:

| Variable | Required | Description |
| :--- | :---: | :--- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional | Google Maps Embed API key for the interactive map widget in the Contact section. |

> **Graceful Fallback:** If `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is not provided, the website will automatically display an elegant Studio Location card with a direct link to open the exact coordinates in Google Maps. No runtime errors or broken layouts will occur.

---

## 4. Deploy to Vercel

Vercel is the recommended hosting platform for Next.js applications.

### Option A: Via Vercel Web Dashboard (Recommended)

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** > **"Project"**.
4. Import your Aquora repository.
5. In **Build and Output Settings**:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. In **Environment Variables**:
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (if you have one).
7. Click **"Deploy"**.

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy preview build
vercel

# Deploy to production
vercel --prod
```

---

## 5. Add Custom Domain

1. In the Vercel Dashboard, navigate to your Project > **Settings** > **Domains**.
2. Enter your custom domain (e.g. `aquora.studio`).
3. Configure your DNS provider with the records provided by Vercel:
   - **A Record**: Point `@` to `76.76.21.21`
   - **CNAME Record**: Point `www` to `cname.vercel-dns.com`
4. Wait for DNS propagation and automatic SSL certificate issuance by Vercel.

---

## 6. Configure Google Maps API

To enable the live interactive map in the Contact section:

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a Google Cloud Project.
3. Navigate to **APIs & Services** > **Library** and enable **Maps Embed API**.
4. Navigate to **APIs & Services** > **Credentials** and click **Create Credentials** > **API Key**.
5. **Restrict the API key** for production security:
   - Under **Application restrictions**, select **Websites (HTTP referrers)**.
   - Add your production domains:
     - `https://your-domain.com/*`
     - `https://*.vercel.app/*`
   - Under **API restrictions**, select **Restrict key** and check only **Maps Embed API**.
6. Copy the key and set it in Vercel under **Settings** > **Environment Variables** as:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_restricted_api_key_here
   ```
7. Trigger a redeploy on Vercel for the environment variable to take effect.

---

## 7. Test WhatsApp Integration

Verify that the direct WhatsApp links work across mobile and desktop:

1. Click any WhatsApp CTA:
   - Header / Mobile drawer WhatsApp action
   - Contact section "WHATSAPP US" button
   - Footer WhatsApp link
   - Trial Enquiry Form submit button
2. The URL opens WhatsApp with the studio inquiry message.
3. In the Trial Enquiry Form, verify that the submitted name, phone number, chosen program, and preferred batch are pre-filled in the WhatsApp message text without falsely claiming a confirmed booking.

---

## 8. Test Google Maps

1. Scroll to the **Visit Aquora** section (`#contact`).
2. If the API key is configured, verify that the Google Map iframe loads showing the studio location:
   `No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar, Bengaluru - 560078`
3. Click **"Get Directions"** or **"Open in Google Maps"** to confirm that the directions URL opens Google Maps with the destination pre-filled.

---

## 9. Verify Mobile Version

Test the site on mobile viewports (e.g. 375px, 390px, 430px) using Chrome DevTools or a physical device:

- [ ] Sticky header height is compact with the Aquora logo and hamburger toggle.
- [ ] Mobile navigation drawer opens smoothly, locks body scroll, and auto-closes on link click.
- [ ] No horizontal scrolling or content cutoff occurs (`overflow-x: hidden`).
- [ ] Tap targets for buttons and form fields are comfortable (minimum 44px height).
- [ ] Architectural gallery thumbnails in "The Aquora Space" respond to touch.
- [ ] Contact details and inquiry buttons trigger direct studio communication correctly.

---

## 10. Final Production Checklist

Before public launch:

- [x] Run `npm run lint` — 0 errors.
- [x] Run `npm run build` — Turbopack compiles all pages as static content with 0 errors.
- [x] Favicon and apple-touch-icon generated dynamically via Next.js `ImageResponse` (`/icon`).
- [x] Web app manifest accessible at `/manifest.webmanifest`.
- [x] Search engine crawler instructions configured at `/robots.txt`.
- [x] XML Sitemap configured at `/sitemap.xml`.
- [x] Open Graph and Twitter Card metadata configured with title, description, and images.
- [x] No secrets or private environment variables committed in git history.
- [x] `.env.example` committed with blank placeholder.
- [x] All images optimized using Next.js `next/image` with responsive `sizes` and proper `priority` loading.
