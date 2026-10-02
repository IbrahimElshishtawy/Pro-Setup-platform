# PRO SETUP — Enterprise Digital Solutions Platform

> **"Your Vision. Our Setup."**  
> *All Your Business Needs in One Place*

PRO SETUP is a full-service, enterprise-grade digital solutions and creative agency website built with modern web technologies, dark futuristic aesthetics, electric blue glassmorphism, responsive architecture, and seamless Firebase Cloud Firestore integration for deployment on Firebase Hosting.

---

## 🚀 Key Highlights & Architectural Features

### 1. Visual & Interactive Aesthetics
- **Dark Futuristic Aesthetic**: Premium deep backgrounds (`#05080D` & `#080D14`), electric blue gradients (`#0066FF` & `#00D2FF`), subtle border glows, and glassmorphism.
- **Hero Perspective Visualizer**: 5 floating glass cards corresponding to the core pillars:
  - `</> Software & Tech`
  - `🛡️ Security & Surveillance`
  - `📷 Photography & Video`
  - `📈 Digital Marketing`
  - `✏️ Design & Branding`
  - Handcrafted script badge: *"Creative Ideas Real Results"*.
- **Custom Desktop Cursor**: Trailing electric blue glow ring with interactive hover states.
- **Top Scroll Progress Indicator**: Dynamic gradient bar showing page reading progress.
- **Floating WhatsApp Action**: Instant direct-chat launcher with radar pulse effect.

### 2. Comprehensive 13-Page / View Routing Architecture
1. **Home**: Cinematic Hero, 5-Pillar Floating Visual, "What We Do" Cards, "Why Choose Us" Split Studio Section with Animated Counters (10+ Services, 50+ Projects, 20+ Clients, 100% Commitment), Filterable "Recent Projects" Grid, "Trusted by Businesses" Testimonials Slider, and Bottom Contact Banner.
2. **Services Overview**: Master catalog with interactive category filters, sub-service breakdown, and deliverables.
3. **Digital Marketing**: Detailed service catalog + **Interactive Campaign Simulator Dashboard** (simulates ad reach, clicks, qualified leads, conversions, and ROAS across Meta, Google Ads, and TikTok with a live budget slider).
4. **Design & Branding**: Visual identity case studies, typography hierarchy, and interactive design token palette viewer.
5. **Software & Technology**: Technical offerings breakdown, interactive terminal code sandbox simulation, and full technology stack badges (Flutter, Dart, Firebase, Supabase, Cloud, Node.js, PostgreSQL, etc.).
6. **Security & Surveillance**: Commercial CCTV infrastructure breakdown + **Interactive 4-Channel Live Security Monitor** with scanline overlays, timecode clock, and animated network topology diagram (*Cameras → Network → NVR → 24/7 Monitoring*).
7. **Photography & Video Production**: High-end commercial media gallery with lightbox and cinematic agency showreel modal.
8. **Advertising**: 7-Step scroll-animated campaign pipeline (*01 Campaign Idea → 02 Creative Design → 03 Content Production → 04 Advertising → 05 Audience Targeting → 06 Analytics → 07 Scaled Results*).
9. **Portfolio**: Searchable and filterable case studies with **Project Details Modal** displaying challenge, solution, verified ROI metrics, tech stack, and visual gallery.
10. **About Us**: Company history, mission, vision, core operating principles, and leadership team.
11. **Our Process**: Interactive 5-phase delivery timeline (*01 Discover → 02 Strategy → 03 Create → 04 Launch → 05 Optimize*) with animated connecting track.
12. **Contact**: Full project inquiry form integrated with Firebase Cloud Firestore + direct WhatsApp, phone, email, and Cairo office coordinates.
13. **FAQ**: Searchable animated accordion answering all 10 core commercial and operational questions.

### 3. Firebase Backend & Hosting Ready
- **Firestore Collections**:
  - `inquiries`: Stores incoming project inquiries from the contact form.
  - `quotes`: Stores detailed quotes from the multi-step project builder modal.
  - `subscribers`: Captures newsletter email subscriptions.
- **Resilient Hybrid Fallback Engine**: If Firebase API keys are not yet provided in `.env.local`, the platform automatically operates in reliable offline/localStorage mode without errors, ready to switch to live Cloud Firestore the moment environment keys are populated.
- **Single-Page Application Rewrites**: Configured in `firebase.json` for Firebase Hosting (`dist/` directory, cache headers, zero 404s on refresh).

### 4. Bulletproof Security `.gitignore`
Strict `.gitignore` protecting:
- All environment files (`.env`, `.env.local`, `.env.*.local`)
- Firebase credentials, service accounts, and private keys (`*serviceAccount*.json`, `google-services.json`, `*.pem`, `*.key`)
- Build outputs (`dist/`, `build/`, `.cache/`, `.firebase/`)
- OS and editor cache files (`.vscode/`, `.DS_Store`, etc.)

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript (Strict Type Checking)
- **Bundler**: Vite 6 (Optimized Vendor Chunk Splitting)
- **Styling**: TailwindCSS 3 + Custom Futuristic Design System + PostCSS + Autoprefixer
- **Backend / Cloud**: Firebase 11 (Cloud Firestore & Firebase Hosting)
- **Icons**: Lucide React
- **Animations / Micro-Interactions**: Canvas Confetti, CSS Keyframe Glows, Custom Hooks (`useCounter`, `useInView`, `useScrollSpy`)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### 3. Build for Production
```bash
npm run build
```
Generates ultra-optimized, minified production assets into the `dist/` directory.

### 4. Deploy to Firebase Hosting
```bash
# 1. Login to Firebase CLI (one-time)
npx firebase login

# 2. Build and deploy
npm run deploy
```

---

## 📄 License
MIT License. © 2026 PRO SETUP. All Rights Reserved.