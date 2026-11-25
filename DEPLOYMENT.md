# Kitchen Pro — Firebase Hosting Deployment Guide

## 1. Architecture Choice: Classic Firebase Hosting (Static)

This project is built with **Vite + React + TypeScript** and compiles into pure static files in `dist/`.

- **Why Classic Firebase Hosting (not App Hosting)?**
  - Kitchen Pro is a corporate architectural showcase & portfolio website that does **not** require Next.js SSR or a backend server runtime.
  - Classic Firebase Hosting serves the pre-built `dist/` bundle directly from global CDN edges with zero cold starts, automatic SSL, minimal cost, and fast TTFB.
  - Firebase Authentication is intentionally omitted.
  - Firestore is **optional**: the consultation form automatically submits to Firestore (`consultations` collection) only when `VITE_FIREBASE_API_KEY` and `VITE_FIREBASE_PROJECT_ID` are provided in `.env.local`. Otherwise, the site runs completely static with zero backend dependencies.

---

## 2. Prerequisites

1. **Node.js 20+** and **npm**
2. **Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   firebase --version
   ```
3. A Firebase project created in the [Firebase Console](https://console.firebase.google.com/).

---

## 3. Initial Project Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Sign in to Firebase:
   ```bash
   firebase login
   ```
3. Link your Firebase project ID (updates `.firebaserc`):
   ```bash
   firebase use --add
   ```
   Select your Kitchen Pro Firebase project and set the alias as `default`.

4. *(Optional)* Configure public contact details or optional Firestore connection by copying `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   > **Security Notice:** Never commit `.env.local` or any service account keys. `.gitignore` already excludes all `.env*` and credential files.

---

## 4. Local Build & Emulator Verification

1. Run TypeScript check and production build:
   ```bash
   npm run build
   ```
2. Test the production build locally using the Firebase Hosting emulator:
   ```bash
   npm run firebase:emulate
   ```
   This serves `dist/` at `http://localhost:5000` with the exact `firebase.json` rewrites and caching headers.

---

## 5. Preview Channel Deployment (Recommended Before Production)

Deploy a temporary preview URL (valid for 7 days) to review changes on mobile and desktop:

```bash
npm run firebase:preview
```

---

## 6. Production Deployment

Deploy directly to Firebase Hosting:

```bash
npm run deploy
```

This runs `tsc --noEmit && vite build` followed by `firebase deploy --only hosting`.

---

## 7. Updating Design Tokens & Media

- **Design Tokens (Colors):** Edit the CSS custom properties in `src/styles/index.css` (`:root`) to adjust brand colors across the entire site.
- **Photos / Videos:** Place optimized images in `public/images/` and reference them from `src/data/siteData.ts`. For large workshop/installation videos, upload them to **Firebase Storage** or a dedicated CDN and link the URL rather than bundling large `.mp4` files inside `public/`.
