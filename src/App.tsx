import React, { useState, useEffect } from 'react';
import { ActivePage } from './core/types/common';
import { ProjectItem } from './core/types/portfolio';
import { CourseCategoryId } from './core/types/academy';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { PageLoadIntro } from './components/common/PageLoadIntro';
import { BackgroundAtmosphere } from './components/common/BackgroundAtmosphere';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { VideoPlayerModal } from './components/modals/VideoPlayerModal';
import { QuoteModal } from './components/modals/QuoteModal';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';

// Home Views & Cinematic Sections
import { HeroSection } from './features/home/HeroSection';
import { TrustMarquee } from './components/sections/TrustMarquee';
import { TheCollectiveStory } from './features/home/TheCollectiveStory';
import { VipClientOffer } from './features/home/VipClientOffer';
import { ServicesOverview } from './features/home/ServicesOverview';
import { InteractiveMediaShowcase } from './features/home/InteractiveMediaShowcase';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { WhyChooseUs } from './features/home/WhyChooseUs';
import { SocialMediaShowcase } from './features/home/SocialMediaShowcase';
import { CtaBanner } from './components/sections/CtaBanner';

// Dedicated Sub-Pages
import { ServicesPage } from './features/services/ServicesPage';
import { DigitalMarketingPage } from './features/services/DigitalMarketingPage';
import { DesignBrandingPage } from './features/services/DesignBrandingPage';
import { SoftwareTechPage } from './features/services/SoftwareTechPage';
import { SecuritySurveillancePage } from './features/services/SecuritySurveillancePage';
import { PhotographyVideoPage } from './features/services/PhotographyVideoPage';
import { AdvertisingPage } from './features/services/AdvertisingPage';
import { PortfolioPage } from './features/portfolio/PortfolioPage';
import { AboutPage } from './features/about/AboutPage';
import { ProcessPage } from './features/process/ProcessPage';
import { ContactPage } from './features/contact/ContactPage';
import { FaqPage } from './features/faq/FaqPage';

// Academy & Technical Services Pages
import { AcademyLandingPage } from './features/academy/AcademyLandingPage';
import { CourseCatalogPage } from './features/academy/CourseCatalogPage';
import { CourseDetailPage } from './features/academy/CourseDetailPage';
import { LearningPathsPage } from './features/academy/LearningPathsPage';
import { AcademyAboutPage } from './features/academy/AcademyAboutPage';
import { AcademyRegisterPage } from './features/academy/AcademyRegisterPage';
import { TechnicalServicesPage } from './features/services/TechnicalServicesPage';

export function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [activePromoCode, setActivePromoCode] = useState<string>('PS-FOUNDER-25');

  // Academy routing state
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>('modern-frontend-development');
  const [catalogInitialCategory, setCatalogInitialCategory] = useState<CourseCategoryId | 'all'>('all');
  const [registerInitialCourseSlug, setRegisterInitialCourseSlug] = useState<string | undefined>(undefined);

  // Sync with browser URL / hash (support both direct pathnames and #hash)
  useEffect(() => {
    const handleUrlChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const rawPath = window.location.pathname.replace(/^\//, '');

      // Check course detail pattern e.g. #academy-course-modern-frontend-development or /academy/courses/xyz
      if (rawHash.startsWith('academy-course-')) {
        const slug = rawHash.replace('academy-course-', '');
        setSelectedCourseSlug(slug);
        setActivePage('academy-course-detail');
        return;
      }

      if (rawPath.startsWith('academy/courses/')) {
        const slug = rawPath.replace('academy/courses/', '');
        if (slug) {
          setSelectedCourseSlug(slug);
          setActivePage('academy-course-detail');
          return;
        }
      }

      // Check direct path mapping
      const pathMap: Record<string, ActivePage> = {
        'academy': 'academy',
        'academy/courses': 'academy-courses',
        'academy/paths': 'academy-paths',
        'academy/about': 'academy-about',
        'academy/register': 'academy-register',
        'technical-services': 'technical-services',
      };

      if (pathMap[rawPath]) {
        setActivePage(pathMap[rawPath]);
        return;
      }

      const validPages: ActivePage[] = [
        'home', 'services', 'digital-marketing', 'design-branding',
        'software-technology', 'security-surveillance', 'photography-video',
        'advertising', 'portfolio', 'about', 'process', 'contact', 'faq',
        'academy', 'academy-courses', 'academy-course-detail', 'academy-paths',
        'academy-about', 'academy-register', 'technical-services'
      ];

      if (validPages.includes(rawHash as ActivePage)) {
        setActivePage(rawHash as ActivePage);
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Dynamic SEO Page Title & Meta Description update
  useEffect(() => {
    const titles: Record<ActivePage, { title: string; desc: string }> = {
      'home': {
        title: 'PS | PRO SETUP INTERNATIONAL — التجهيزات المتكاملة والحلول الرقمية للشركات',
        desc: 'شركة PS (PRO SETUP INTERNATIONAL) الكيان الدولي الشامل لتجهيز وتطوير الأعمال: هندسة البرمجيات، شبكات المراقبة وكاميرات CCTV، الإنتاج السينمائي، وحملات النمو والتسويق الدولي.'
      },
      'services': {
        title: 'الخدمات المتكاملة | PS INTERNATIONAL - كل ما تحتاجه أعمالك في مكان واحد',
        desc: 'استكشف منظومة خدمات PS: التسويق الرقمي، الهوية البصرية، تطوير البرمجيات والتطبيقات، كاميرات المراقبة، والإنتاج السينمائي.'
      },
      'digital-marketing': {
        title: 'التسويق الرقمي وإدارة السوشيال ميديا | PS INTERNATIONAL',
        desc: 'حملات تسويقية مبنية على الأداء، استهداف الجماهير، إدارة منصات التواصل، صناعة المحتوى، ولوحات تحكم فورية لاستقطاب العملاء.'
      },
      'design-branding': {
        title: 'استوديو الهوية البصرية وتصميم UI/UX | PS INTERNATIONAL',
        desc: 'تصميم الشعارات، نظم الهوية البصرية للشركات، تصاميم السوشيال ميديا، التغليف الفاخر، وتصميم واجهات وتجربة المستخدم للمواقع والتطبيقات.'
      },
      'software-technology': {
        title: 'الحلول البرمجية والتقنية وتطوير المنصات | PS INTERNATIONAL',
        desc: 'تطوير مواقع الويب السريعة، وتطبيقات الجوال عبر Flutter، والبرمجيات المخصصة، ولوحات البيانات، والواجهات البرمجية، والبنية السحابية.'
      },
      'security-surveillance': {
        title: 'توريد وتركيب كاميرات المراقبة والأنظمة الأمنية | PS INTERNATIONAL',
        desc: 'أنظمة CCTV تجارية، كاميرات IP بدقة 4K، وحدات تخزين NVR/DVR، شبكات PoE معزولة، وبوابات التحكم في الدخول والمراقبة 24/7.'
      },
      'photography-video': {
        title: 'التصوير التجاري والإنتاج السينمائي | PS INTERNATIONAL',
        desc: 'إنتاج إعلامي فائق الدقة، إعلانات تجارية سينمائية 4K، تصوير المنتجات، فيديوهات الريلز السريعة، وهندسة تلوين سينمائية.'
      },
      'advertising': {
        title: 'الحملات الإعلانية وإدارة الميزانيات | PS INTERNATIONAL',
        desc: 'إدارة الحملات الإعلانية المتكاملة: الفكرة، الاستراتيجية، الابتكار، الإنتاج المرئي، الإطلاق الخوارزمي، والتحسين لمضاعفة العائد.'
      },
      'portfolio': {
        title: 'معرض الأعمال ودراسات الحالة | PS INTERNATIONAL',
        desc: 'استكشف نماذج مشاريعنا المتكاملة في البرمجيات، الهويات البصرية، الحملات الإعلانية، والأنظمة الأمنية والإنتاج السينمائي.'
      },
      'about': {
        title: 'عن شركة PS INTERNATIONAL | تحالف النخبة لتجهيز الأعمال',
        desc: 'تعرف على نموذج عملنا المتكامل، ورؤيتنا، ورسالتنا، وقيمنا الجوهرية، وفريق القيادة المتخصص في تجهيز الأعمال.'
      },
      'process': {
        title: 'منهجية العمل المكونة من 6 خطوات | PS INTERNATIONAL',
        desc: 'من الاستكشاف والتخطيط الاستراتيجي إلى التصميم والبرمجة والإطلاق الحي والدعم المستمر.'
      },
      'contact': {
        title: 'تواصل مع PS INTERNATIONAL | لنصنع شيئاً عظيماً معاً',
        desc: 'تواصل مباشرة مع فريقنا لمناقشة مشروعك، وطلب عروض الأسعار والاستشارات المخصصة.'
      },
      'faq': {
        title: 'الأسئلة الشائعة والإرشادات | PS INTERNATIONAL',
        desc: 'إجابات وافية على كافة الاستفسارات المتعلقة بخدماتنا المتكاملة، ومراحل العمل، والأنظمة التقنية والأمنية.'
      },
      'academy': {
        title: 'أكاديمية ProSetup للتدريب التقني المتقدم | مسارات البرمجة والشبكات وصيانة الهواتف',
        desc: 'انضم إلى ProSetup Academy: برامج تدريبية وتطبيقية معملية في هندسة الويب، تطبيقات Flutter، الأمن السيبراني، شبكات الحاسوب، وصيانة الهواتف الذكية.'
      },
      'academy-courses': {
        title: 'دليل الدورات التدريبية والمختبرات التقنية | ProSetup Academy',
        desc: 'استكشف كافة دورات البرمجة والشبكات والأمن السيبراني وصيانة الهواتف الذكية المعتمدة على التدريب العملي والمشاريع الحقيقية.'
      },
      'academy-course-detail': {
        title: 'تفاصيل المنهج التدريبي والمشاريع | ProSetup Academy',
        desc: 'تعرف على محاور الدورة، الوحدات التدريبية، المشاريع العملية، والمتطلبات المسبقة في أكاديمية ProSetup.'
      },
      'academy-paths': {
        title: 'المسارات والخرائط المهنية المنسقة | ProSetup Academy',
        desc: 'مسارات تعليمية متسلسلة تأخذك من الصفر حتى الاحتراف والجاهزية لسوق العمل في مجالات التكنولوجيا وصيانة الأجهزة الذكية.'
      },
      'academy-about': {
        title: 'عن ProSetup Academy | رؤيتنا وفلسفة التعليم المعملي التطبيقي',
        desc: 'تعرف على فلسفة التعليم العملي، ورسالتنا في سد الفجوة بين التعليم النظري وسوق العمل، وتجهيزات مختبراتنا الفنية.'
      },
      'academy-register': {
        title: 'التسجيل في دورات ProSetup Academy | استشارة المسار وحجز المقعد',
        desc: 'سجل بياناتك للالتحاق ببرامجنا التدريبية أو حجز استشارة مجانية مع المستشارين الفنيين لتحديد المسار الأنسب لمستواك.'
      },
      'technical-services': {
        title: 'صيانة الهواتف الذكية والحلول الفنية المؤسسية | PS INTERNATIONAL',
        desc: 'خدمات معملية لإصلاح أعطال اللوحات الأم، الشاشات، استبدال البطاريات، التفليش، وعقود الصيانة الدورية للأجهزة المؤسسية.'
      }
    };

    const currentMeta = titles[activePage] || titles['home'];
    document.title = currentMeta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.desc);
    }
  }, [activePage]);

  const navigateTo = (
    page: ActivePage,
    meta?: { courseSlug?: string; category?: CourseCategoryId | 'all' }
  ) => {
    if (meta?.courseSlug) {
      setSelectedCourseSlug(meta.courseSlug);
      setRegisterInitialCourseSlug(meta.courseSlug);
    }
    if (meta?.category) {
      setCatalogInitialCategory(meta.category);
    }

    setActivePage(page);

    if (page === 'academy-course-detail' && meta?.courseSlug) {
      window.location.hash = `academy-course-${meta.courseSlug}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceId?: string, promoCode?: string) => {
    setPreselectedService(serviceId);
    if (promoCode) {
      setActivePromoCode(promoCode);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white overflow-hidden">
      {/* 1. Page Load Intro Animation (<1s) */}
      <PageLoadIntro />

      {/* 2. Dynamic Animated Luxury Tech Atmosphere Background */}
      <BackgroundAtmosphere />

      {/* 3. Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* 4. Global Navigation Header */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote(undefined, 'PS-FOUNDER-25')}
      />

      {/* 7. Main Content Router */}
      <main className="relative z-10 flex-1 pt-16">
        {activePage === 'home' && (
          <>
            {/* Cinematic Full-screen Hero Section */}
            <HeroSection
              onExploreServices={() => navigateTo('services')}
              onWatchVideo={() => setIsVideoModalOpen(true)}
              onSelectVertical={(vert) => navigateTo(vert as ActivePage)}
              onOpenQuote={() => handleOpenQuote(undefined, 'PS-FOUNDER-25')}
            />

            {/* Trust Marquee: Sectors & Industries Served */}
            <TrustMarquee />

            {/* The Collective Story: فلسفة تحالف النخبة تحت مظلة PS */}
            <TheCollectiveStory
              onExploreServices={() => navigateTo('services')}
              onOpenQuote={() => handleOpenQuote(undefined, 'PS-FOUNDER-25')}
            />

            {/* VIP Grand Opening Commercial Offer */}
            <VipClientOffer onClaimOffer={() => handleOpenQuote(undefined, 'PS-FOUNDER-25')} />

            {/* Cinematic Services Storytelling: Chapter-by-Chapter Scenes */}
            <ServicesOverview
              onNavigate={navigateTo}
              onOpenQuote={(service) => handleOpenQuote(service, 'PS-FOUNDER-25')}
            />

            {/* Interactive Media & Image Showcase Gallery */}
            <InteractiveMediaShowcase
              onSelectProject={(p) => setSelectedProject(p)}
              onOpenQuote={(service) => handleOpenQuote(service, 'PS-FOUNDER-25')}
            />

            {/* Split Cinematic About Section with Counters & Manifesto */}
            <AboutSection
              onExploreMore={() => navigateTo('about')}
              onOpenQuote={() => handleOpenQuote(undefined, 'PS-FOUNDER-25')}
            />

            {/* Categorized Portfolio Section with Interactive Filters */}
            <PortfolioSection
              onSelectProject={(p) => {
                const match = PORTFOLIO_PROJECTS.find(item => item.id === p.id || item.slug === p.slug) || PORTFOLIO_PROJECTS[0];
                setSelectedProject(match);
              }}
              onViewAll={() => navigateTo('portfolio')}
            />

            {/* Why Choose Us Enterprise Pillars */}
            <WhyChooseUs />

            {/* Social Media Showcase */}
            <SocialMediaShowcase />

            {/* Dramatic CTA Banner */}
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenQuote={() => handleOpenQuote(undefined, 'PS-FOUNDER-25')}
            />
          </>
        )}

        {/* Existing Technical & Business Services */}
        {activePage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'digital-marketing' && (
          <DigitalMarketingPage onOpenQuote={handleOpenQuote} />
        )}

        {activePage === 'design-branding' && (
          <DesignBrandingPage onOpenQuote={handleOpenQuote} />
        )}

        {activePage === 'software-technology' && (
          <SoftwareTechPage onOpenQuote={handleOpenQuote} />
        )}

        {activePage === 'security-surveillance' && (
          <SecuritySurveillancePage onOpenQuote={handleOpenQuote} />
        )}

        {activePage === 'photography-video' && (
          <PhotographyVideoPage
            onOpenQuote={handleOpenQuote}
            onWatchVideo={() => setIsVideoModalOpen(true)}
          />
        )}

        {activePage === 'advertising' && (
          <AdvertisingPage onOpenQuote={handleOpenQuote} />
        )}

        {/* Dedicated Technical Repair Services Page */}
        {activePage === 'technical-services' && (
          <TechnicalServicesPage
            onOpenQuote={handleOpenQuote}
            onNavigateToAcademy={() => navigateTo('academy')}
          />
        )}

        {/* ProSetup Academy Sub-Pages */}
        {activePage === 'academy' && (
          <AcademyLandingPage
            onNavigateToCourses={(cat) => navigateTo('academy-courses', { category: cat as CourseCategoryId })}
            onNavigateToCourseDetail={(slug) => navigateTo('academy-course-detail', { courseSlug: slug })}
            onNavigateToPaths={() => navigateTo('academy-paths')}
            onNavigateToAbout={() => navigateTo('academy-about')}
            onNavigateToRegister={(slug) => {
              if (slug) setRegisterInitialCourseSlug(slug);
              navigateTo('academy-register');
            }}
          />
        )}

        {activePage === 'academy-courses' && (
          <CourseCatalogPage
            initialCategory={catalogInitialCategory}
            onNavigateToCourseDetail={(slug) => navigateTo('academy-course-detail', { courseSlug: slug })}
            onNavigateToRegister={(slug) => {
              if (slug) setRegisterInitialCourseSlug(slug);
              navigateTo('academy-register');
            }}
            onBackToAcademyHome={() => navigateTo('academy')}
          />
        )}

        {activePage === 'academy-course-detail' && (
          <CourseDetailPage
            courseSlug={selectedCourseSlug}
            onNavigateToCourse={(slug) => navigateTo('academy-course-detail', { courseSlug: slug })}
            onNavigateToCatalog={() => navigateTo('academy-courses')}
            onRegisterForCourse={(slug) => {
              setRegisterInitialCourseSlug(slug);
              navigateTo('academy-register');
            }}
          />
        )}

        {activePage === 'academy-paths' && (
          <LearningPathsPage
            onNavigateToCourse={(slug) => navigateTo('academy-course-detail', { courseSlug: slug })}
            onEnrollPath={(pathSlug) => {
              navigateTo('academy-register');
            }}
            onBackToAcademyHome={() => navigateTo('academy')}
          />
        )}

        {activePage === 'academy-about' && (
          <AcademyAboutPage
            onNavigateToCourses={() => navigateTo('academy-courses')}
            onNavigateToRegister={() => navigateTo('academy-register')}
            onBackToAcademyHome={() => navigateTo('academy')}
          />
        )}

        {activePage === 'academy-register' && (
          <AcademyRegisterPage
            initialCourseSlug={registerInitialCourseSlug}
            onNavigateToCatalog={() => navigateTo('academy-courses')}
            onBackToAcademyHome={() => navigateTo('academy')}
          />
        )}

        {/* General Brand Pages */}
        {activePage === 'portfolio' && (
          <PortfolioPage
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenQuote={() => handleOpenQuote()} />
        )}

        {activePage === 'process' && (
          <ProcessPage onOpenQuote={() => handleOpenQuote()} />
        )}

        {activePage === 'contact' && <ContactPage />}

        {activePage === 'faq' && (
          <FaqPage onOpenQuote={() => handleOpenQuote()} />
        )}
      </main>

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp />

      {/* Global Cinematic Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Global Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={(title) => {
          setSelectedProject(null);
          handleOpenQuote(title);
        }}
      />

      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedService}
        initialPromoCode={activePromoCode}
      />
    </div>
  );
}

export default App;
