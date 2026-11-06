# AQUORA Yoga & Dance Studio (Standalone Project & Deployment)

This folder contains the complete AQUORA standalone project and deployment package, structured according to the Next.js standalone specification.

## Configuration Details
- **package.json scripts:**
  ```json
  "scripts": {
    "build": "next build",
    "start": "node app.js"
  }
  ```
- **next.config.ts:** Configured with `output: "standalone"`
- **app.js:** Entry point script running the standalone server.

## Folder Structure
```
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
```

## How to Run Locally
```bash
cd AQUORA-STANDALONE
npm start
# or: node app.js
```
Then open [http://localhost:3000](http://localhost:3000)

## How to Rebuild
```bash
npm run build
```

## How to Deploy to cPanel / VPS / Hosting
Upload either:
1. The **contents of `.next/standalone/`** into your hosting application root.
2. Set the startup file in cPanel Node.js Application Manager to `app.js` (or `server.js`).
3. Start the application.
