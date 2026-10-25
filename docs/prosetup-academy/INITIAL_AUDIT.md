# ProSetup Academy Integration — Initial Audit

**Audit Date:** 2026-10-25  
**Platform:** ProSetup International (`pro-setup-platform`)  
**Auditor:** Senior UI/UX Designer & Senior Frontend Architect

---

## 1. Verified Framework & Versions

- **Core Framework:** React 19 (`^19.0.0`) with `react-dom` 19.
- **Build Tooling:** Vite 6 (`^6.2.0`), `@vitejs/plugin-react` (`^4.3.4`).
- **Language / Transpiler:** TypeScript 5.8 (`^5.8.2`) with strict mode (`tsconfig.json`).
- **Styling Architecture:** Tailwind CSS v3.4 (`^3.4.19`), PostCSS 8, Autoprefixer 10.
- **Utility Libraries:** `clsx` (`^2.1.1`), `tailwind-merge` (`^3.0.2`), `canvas-confetti` (`^1.9.4`).
- **Iconography:** `lucide-react` (`^1.16.0`).
- **Backend / Cloud Services:** Firebase SDK v11 (`^11.4.0`) with Cloud Firestore, Firebase Hosting configured via `firebase.json` and `.firebaserc` (target project: `pro-setup-platform`).
- **Deployment Target:** Firebase Hosting (`pro-setup-platform.web.app`).

---

## 2. Existing Design System & Visual Identity

- **Theme Palette:**
  - Dark Deep Navy Backgrounds: `dark-950` (`#020617`), `dark-900` (`#050816`), `dark-850` (`#07111F`), `dark-800` (`#0B1220`), `dark-750` (`#0F1A2E`).
  - Electric Blue Accents: `electric-600` (`#0066FF`), `electric-500` (`#0084FF`), `electric-cyan` (`#00D2FF`).
  - Surface Glass: `bg-[#080D1A]/80`, `backdrop-blur-xl`, `border-white/[0.08]`.
  - Gradients: `electric-gradient` (`linear-gradient(135deg, #0066FF 0%, #00D2FF 100%)`), `hero-glow`, `dark-card`.
- **Typography:**
  - Arabic Display & Headings: `Alexandria` & `Cairo` (Google Fonts preloaded).
  - Body Text: `Cairo`, `Plus Jakarta Sans`.
  - Monospace / Badges / Code: `JetBrains Mono`.
- **Direction & Localization:**
  - Native RTL (`dir="rtl"`, `lang="ar"` in `index.html`).
  - Arabic-first terminology with bilingual international accents.
- **Micro-Interactions & Aesthetics:**
  - `SpotlightCard` with dynamic mouse movement radial glow.
  - Custom cursor (`CustomCursor.tsx`).
  - Scroll progress bar (`ScrollProgress.tsx`).
  - High-impact animated background atmosphere (`BackgroundAtmosphere.tsx`).
  - Quick-action floating WhatsApp widget (`FloatingWhatsApp.tsx`).

---

## 3. Relevant Directories & File Structure

```
src/
├── App.tsx                     # Main router and page orchestration
├── main.tsx                    # React DOM entrypoint
├── index.html                  # Root template, fonts, meta tags
├── core/
│   ├── config/
│   │   ├── constants.ts        # Company metadata, NAV_LINKS, MEGA_MENU
│   │   └── env.ts              # Environment variables
│   ├── firebase/
│   │   ├── config.ts           # Firebase app & Firestore initialization
│   │   └── firestore.ts        # Data submission logic (inquiries, quotes, newsletter)
│   └── types/
│       ├── common.ts           # ActivePage type, shared models
│       ├── portfolio.ts        # Portfolio items
│       └── services.ts         # ServiceDetail data structures
├── components/
│   ├── common/                 # Atmosphere, scroll progress, floating widgets
│   ├── layout/                 # Navbar, Footer
│   ├── modals/                 # QuoteModal, VideoPlayerModal, ProjectDetailModal
│   ├── sections/               # Reusable homepage/landing sections
│   └── ui/                     # Button, SectionTitle, SpotlightCard, SectionDivider
├── data/                       # Structured mock data & service specs
└── features/                   # Feature-based pages (about, contact, faq, home, portfolio, process, services)
```

---

## 4. Existing Routes & Navigation

Current `ActivePage` enum in `src/core/types/common.ts`:
- `'home'`
- `'services'` (Overview)
- `'digital-marketing'`
- `'design-branding'`
- `'software-technology'`
- `'security-surveillance'`
- `'photography-video'`
- `'advertising'`
- `'portfolio'`
- `'about'`
- `'process'`
- `'contact'`
- `'faq'`

Navigation is currently managed through state (`activePage`) synchronized with URL hash changes (`window.location.hash`), plus dynamic `document.title` and meta description updates.

---

## 5. Reusable Components Available for Academy

1. `Button` (`src/components/ui/Button.tsx`): Variants for `primary`, `secondary`, `outline`, `ghost`, with icon support, shine effects, and loading states.
2. `SectionTitle` (`src/components/ui/SectionTitle.tsx`): Supports eyebrow badge, chapter number, highlighted gradient word, and description with RTL alignment.
3. `SpotlightCard` (`src/components/ui/SpotlightCard.tsx`): Interactive mouse-following radial lighting card container.
4. `SectionDivider` (`src/components/ui/SectionDivider.tsx`): Subtle glowing dividing borders.
5. `Navbar` & `Footer` (`src/components/layout/`): Global unified navigation, desktop mega menus, and mobile drawer.
6. `QuoteModal` (`src/components/modals/QuoteModal.tsx`): Contact/quote request modal.

---

## 6. Current Project Health & Baseline Test Results

- Command `npm run build` (`tsc && vite build`) executed:
  - TypeScript check passed with 0 errors.
  - Vite bundling generated production assets in `dist/` in 2.54s without warnings or errors.
- Firebase integration verified: Valid client configuration exists in `.env.local` for project `pro-setup-platform`.
- Firebase CLI is installed and active user credentials have direct deployment access to `pro-setup-platform`.

---

## 7. Potential Integration Risks & Mitigation

| Risk | Mitigation |
|---|---|
| Routing clash between hash-based SPA and direct URLs (`/academy`, `/academy/courses`) | Support dual-mode routing: detect pathname and hash (`window.location.pathname` and `window.location.hash`), update URL gracefully with `history.pushState` and hash sync so both direct links and in-page navigation work without 404s. Firebase rewrite `** -> /index.html` already enables client-side deep routing. |
| Overcrowding the main navigation header | Add "أكاديمية ProSetup" to the top Navbar with a distinguished badge/indicator and quick access dropdown, while keeping the core corporate links intact. |
| Confusion between training courses and repair/maintenance services | Clearly distinguish **ProSetup Academy** (practical training & vocational learning tracks) from **ProSetup Technical Services** (direct engineering repair, hardware maintenance, firmware flashing & smartphone diagnostics). Create dedicated landing pages for both. |
| Unverified Claims & Fake Data | Course data models will use explicit, truthful statuses ("قريبًا" / "متاح للتسجيل"), clear prerequisites, real curriculum modules, and verifiable practical objectives without fabricated student counts or fake testimonials. |
| Data persistence for registrations | Extend `src/core/firebase/firestore.ts` to add `submitAcademyRegistration` saving to the `academy_registrations` Firestore collection, with fallback to local client storage. Update `firestore.rules` accordingly. |

---

## 8. Proposed Implementation Plan

1. **Architecture & Types (`src/core/types/academy.ts`):** Define `Course`, `CourseCategory`, `LearningPath`, `CourseFilter`, `AcademyRegistrationPayload`.
2. **Data Layer (`src/data/academyData.ts`):** High-fidelity structured course data for all 7 required tracks:
   - Front-End Development
   - Back-End Development
   - Mobile Application Development (Flutter)
   - Cybersecurity & Ethical Hacking
   - Computer Networks & Infrastructure
   - Mobile Phone Hardware Maintenance
   - Mobile Software & Firmware Troubleshooting
3. **Academy Pages (`src/features/academy/`):**
   - `AcademyLandingPage.tsx`
   - `CourseCatalogPage.tsx`
   - `CourseDetailPage.tsx`
   - `LearningPathsPage.tsx`
   - `AcademyAboutPage.tsx`
   - `AcademyRegisterPage.tsx`
4. **Technical Services Dedicated Section (`src/features/services/TechnicalServicesPage.tsx`):**
   - Mobile Phone Hardware Repair & Diagnostics
   - Smartphone Software & Firmware Troubleshooting
   - Enterprise hardware maintenance & SLA contracts
5. **UI & Navigation Integration:**
   - Update `Navbar.tsx` and `Footer.tsx` with Academy links and Technical Services link.
   - Update `App.tsx` routing and metadata.
   - Add Firestore rules and submission service for Academy registrations.
6. **Testing & Verification:**
   - Type check, build, interactive checks, responsive review.
   - Deployment to Firebase Hosting as requested.
