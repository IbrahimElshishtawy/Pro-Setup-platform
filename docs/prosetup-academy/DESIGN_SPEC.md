# ProSetup Academy — Design System Specification

**Version:** 1.0.0  
**Context:** Integrated extension of ProSetup International (`PS`)  
**Design Philosophy:** Ultra-modern dark technology aesthetic, high-contrast readability, cinematic glassmorphism, responsive tactile ergonomics, and full Arabic RTL support.

---

## 1. Color Palette & Design Tokens

### Background Surfaces
- **Canvas / Root:** `#020617` (`dark-950`) — Deepest oceanic navy
- **Primary Section Background:** `#050816` (`dark-900`)
- **Secondary Section Background:** `#07111F` (`dark-850`)
- **Card / Surface Default:** `#0B1220` (`dark-800` / `rgba(11, 18, 32, 0.75)`)
- **Card Hover / Elevated Surface:** `#0F1A2E` (`dark-750`)
- **Border Default:** `rgba(255, 255, 255, 0.08)`
- **Border Highlight / Active:** `rgba(0, 102, 255, 0.35)` or `rgba(0, 210, 255, 0.4)`

### Brand Accents
- **Electric Blue (Primary Brand):**
  - `electric-600`: `#0066FF`
  - `electric-500`: `#0084FF`
  - `electric-400`: `#38A2FF`
- **Cyan Highlight (Secondary / Technological):**
  - `electric-cyan`: `#00D2FF`
- **Emerald Accent (Success / Active Status):**
  - `#10B981` (badge background: `rgba(16, 185, 129, 0.15)`)
- **Amber Accent (Upcoming Status / Warning / VIP):**
  - `#F59E0B` (badge background: `rgba(245, 158, 11, 0.15)`)
- **Purple Accent (Cybersecurity / Advanced Topics):**
  - `#8B5CF6` (badge background: `rgba(139, 92, 246, 0.15)`)

### Text Hierarchy
- **Heading 1 / Display:** `#FFFFFF`, font-weight 800/900 (`Alexandria` or `Cairo`)
- **Heading 2 & 3:** `#F8FAFC`, font-weight 700
- **Body Text:** `#94A3B8` (`slate-400`), font-weight 400/500, line-height 1.7
- **Muted Text / Metadata:** `#64748B` (`slate-500`), font-weight 400
- **Code / Mono Tags:** `#7DD3FC` (`sky-300`), font-family `JetBrains Mono`

---

## 2. Typography Specifications

| Role | Font Family | Size (Mobile → Desktop) | Weight | Line Height |
|---|---|---|---|---|
| Section Eyebrow | `Alexandria`, `Cairo` | 11px - 12px (text-xs) | 700 | 1.2 |
| Page Hero Title | `Alexandria`, `Cairo` | 32px → 56px (text-3xl → 5xl) | 900 | 1.15 |
| Section Title | `Alexandria`, `Cairo` | 24px → 40px (text-2xl → 4xl) | 800 | 1.25 |
| Card Title | `Cairo`, `Alexandria` | 18px → 20px (text-lg → xl) | 700 | 1.35 |
| Body / Paragraphs | `Cairo`, `Plus Jakarta Sans` | 14px → 16px (text-sm → base) | 400/500 | 1.7 |
| Badges & Tags | `JetBrains Mono`, `Cairo` | 11px - 13px (text-xs) | 600 | 1.0 |

---

## 3. Spacing, Grids & Breakpoints

- **Spacing Scale:** Standard 4px-based Tailwind scale (`p-4`, `p-6`, `p-8`, `gap-4`, `gap-6`, `gap-8`).
- **Container Max-Width:** `max-w-7xl` (`1280px`) with dynamic padding `px-4 sm:px-6 lg:px-8`.
- **Section Vertical Rhythm:** `py-16 md:py-24` with background atmospheric glow dividers.
- **Breakpoints:**
  - `sm`: `640px` (Compact tablets & large phones)
  - `md`: `768px` (Tablets / split navigation)
  - `lg`: `1024px` (Desktop / multi-column grids)
  - `xl`: `1280px` (Wide desktop monitors)

---

## 4. UI Patterns & Card Architectures

### A. Spotlight Course Card
- Base container: `SpotlightCard` (`bg-[#080D1A]/80`, `border-white/[0.08]`, `backdrop-blur-xl`, `rounded-2xl`).
- Dynamic radial spotlight on mouse move (`rgba(0, 102, 255, 0.15)`).
- Top category pill with distinct color scheme per domain (e.g. Cyan for Front-End, Indigo for Back-End, Green for Mobile, Purple for Security, Amber for Hardware).
- Key metadata bar: Level (مبتدئ / متوسط / متقدم), Duration (أسابيع / ساعات), Format (حضوري / عن بعد / عملي تطبيقي).
- Clear CTA button with arrow leading in RTL (`ChevronLeft` / `ArrowLeft`).

### B. Filter Bar & Search Input
- Search input with search icon, clear button, and live debounced filtering.
- Category pills with active glow (`bg-blue-600 text-white shadow-glow-sm`).
- Level dropdown / button group.
- Active filters count and single-click "إعادة ضبط الفلاتر" (Reset).

### C. Curriculum Accordion
- Clean collapsible modules with module duration, chapter counts, and interactive toggle.
- Hands-on practical project milestone highlighted in each module.

### D. Registration Form
- Clean floating-label inputs with accessible error states and instant validation.
- Course selector populated dynamically from data.
- Experience level radio pills.
- Preferred contact method (WhatsApp, Phone call, Email).
- Direct submission to Firestore with local fallback and confirmation order voucher.

---

## 5. RTL & Cultural Localization Rules

- `dir="rtl"` enforced on all views.
- Text alignments default to `text-right` with appropriate start/end layout margins (`ms-*`, `me-*`, `ps-*`, `pe-*`).
- Icon indicators pointing forward in RTL use `ChevronLeft` or `ArrowLeft`.
- Numbers and technical keywords (e.g. React, Flutter, Python, CCTV, 4K) rendered clearly in inline LTR spans with `JetBrains Mono` or `Plus Jakarta Sans`.

---

## 6. Visual Consistency Constraints

1. **No Fake Marketing:** No counterfeit 5-star review widgets, no invented student count tickers, no arbitrary percentage claims.
2. **Honest Course Statuses:** Clearly distinguish courses open for registration ("متاح للتسجيل") from upcoming syllabus releases ("قريبًا - جاري إعداد المنهج").
3. **Cohesive Header & Footer:** The Academy inherits the global PS International header and footer, with active section indicators.
4. **Distinct Service Demarcation:** Educational courses teach technical skills to students; Technical Services repair devices and provide enterprise maintenance for business clients. Both share brand excellence without confusing the customer.
