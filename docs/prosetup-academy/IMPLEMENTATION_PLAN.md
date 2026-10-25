# ProSetup Academy — Implementation Plan

**Date:** 2026-10-25  
**Target:** ProSetup Web Platform (`pro-setup-platform`)

---

## 1. Architectural File Mapping

### Core Types & Models
- `src/core/types/academy.ts` (NEW)
  - `CourseCategory`: 7 official tracks (`frontend`, `backend`, `mobile-apps`, `cybersecurity`, `networks`, `hardware-maintenance`, `software-troubleshooting`)
  - `CourseLevel`: `'beginner' | 'intermediate' | 'advanced'`
  - `CourseFormat`: `'in-person' | 'online' | 'hybrid' | 'lab-practical'`
  - `CourseAvailability`: `'open' | 'upcoming' | 'waitlist'`
  - `CurriculumModule`, `CourseProject`, `CourseItem`, `LearningPathItem`, `AcademyRegistrationPayload`
- `src/core/types/common.ts` (UPDATE)
  - Add Academy and Technical Services pages to `ActivePage`:
    - `'academy'` (Landing page)
    - `'academy-courses'` (Catalog)
    - `'academy-course-detail'` (Course detail by slug)
    - `'academy-paths'` (Learning journeys)
    - `'academy-about'` (Academy philosophy & methodology)
    - `'academy-register'` (Registration & enrollment form)
    - `'technical-services'` (Hardware & Software Maintenance Services)

### Data Layer
- `src/data/academyData.ts` (NEW)
  - Full structured data for the 7 technical education tracks.
  - Curricula, practical projects, duration, prerequisites, outcomes, FAQs, honest statuses.
  - Learning paths with ordered milestone courses.
- `src/data/technicalServicesData.ts` (NEW)
  - Mobile phone hardware repair (screen replacement, micro-soldering, battery & power IC).
  - Mobile software & firmware repair (unbricking, bootloader/ROM flashing, OS debugging, baseband repair).
  - Business maintenance agreements (SLA) & service request process.

### Reusable Academy Components (`src/components/academy/` or `src/features/academy/components/`)
- `CourseCard.tsx`: Spotlight course card with level badge, duration, price/status, and details button.
- `CourseSearchFilter.tsx`: Search bar, category filter pills, difficulty filter, reset button.
- `CurriculumAccordion.tsx`: Module breakdown with objectives and project milestones.
- `LearningPathCard.tsx`: Visual roadmap card showing sequential courses and career role.
- `AcademyHero.tsx`: High-impact hero with dual CTA and track counters.
- `AcademyCTA.tsx`: Bottom conversion banner driving registration or inquiry.

### Pages to Implement (`src/features/academy/` & `src/features/services/`)
1. **Academy Landing Page:** `src/features/academy/AcademyLandingPage.tsx`
   - Hero section with clear headline & CTAs
   - 7 Tracks showcase
   - Featured courses grid
   - Learning philosophy (Project-based, practical labs)
   - Roadmap preview
   - Honest FAQ & Final CTA
2. **Course Catalog:** `src/features/academy/CourseCatalogPage.tsx`
   - Real-time search by keyword / title
   - Category filtering across all 7 tracks
   - Difficulty level filter (مبتدئ / متوسط / متقدم)
   - Status filtering (متاح للتسجيل / قريباً)
   - Empty state with reset trigger
3. **Course Details Page:** `src/features/academy/CourseDetailPage.tsx`
   - Dynamic route based on selected slug (or fallback to catalog if invalid)
   - Header with category, level, duration, format
   - Objectives, prerequisites, detailed syllabus modules
   - Real-world capstone projects
   - Direct enrollment CTA pre-selecting the course in registration form
   - Related courses recommendations
4. **Learning Paths Page:** `src/features/academy/LearningPathsPage.tsx`
   - Structured career journeys for the 7 technical tracks
   - Clear milestone steps from beginner to production-ready practitioner
5. **Academy About Page:** `src/features/academy/AcademyAboutPage.tsx`
   - Academy mission and hands-on lab approach
   - Instructors & industry standards
   - Learning formats (labs, mentoring, interactive exercises)
6. **Academy Registration:** `src/features/academy/AcademyRegisterPage.tsx`
   - Accessible form with real-time validation
   - Pre-selection of course if coming from course detail
   - Full name, phone, email, course, current level, contact preference
   - Integration with Firestore `academy_registrations` collection with resilient local fallback
7. **Technical Services Page:** `src/features/services/TechnicalServicesPage.tsx`
   - Distinct commercial engineering services page for smartphone hardware and firmware repair
   - Diagnostic workflows, supported manufacturers (Apple, Samsung, Xiaomi, Huawei, Google Pixel), service request CTA

### Navigation & Routing Integration
- `src/components/layout/Navbar.tsx`:
  - Add "أكاديمية ProSetup" link with an academy badge
  - Add "خدمات الصيانة والحلول الفنية" to services mega menu and mobile menu
- `src/components/layout/Footer.tsx`:
  - Add Academy tracks and direct links
- `src/App.tsx`:
  - Wire all new pages, URL hash/path synchronisation, meta title/description tags.
- `src/core/firebase/firestore.ts` & `firestore.rules`:
  - Add `submitAcademyRegistration` helper and Firestore security rule for `academy_registrations`.

---

## 2. Dependencies & Reused Components

- **Zero new external dependencies needed.** All requirements are fully achieved using existing React 19, TypeScript 5.8, Tailwind CSS, Lucide icons, and Firebase SDK.
- **Reused Components:** `Button`, `SectionTitle`, `SpotlightCard`, `BackgroundAtmosphere`, `ScrollProgress`, `Navbar`, `Footer`, `QuoteModal`, `FloatingWhatsApp`.

---

## 3. Testing & Verification Checklist

- [ ] `npm run build` (`tsc && vite build`) executes cleanly with 0 errors.
- [ ] Direct routing and hash synchronization (`#academy`, `#academy-courses`, `#academy-course-[slug]`, etc.).
- [ ] Course search and filter functionality with instant results and empty states.
- [ ] Course detail rendering for all 7 tracks and invalid slug fallback.
- [ ] Form validation and registration submission to Firestore.
- [ ] Responsive design across desktop, tablet, and mobile.
- [ ] Deployment to Firebase Hosting (`firebase deploy --only hosting`).
