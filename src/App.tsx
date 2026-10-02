import React, { useState, useEffect } from 'react';
import { ActivePage } from './core/types/common';
import { ProjectItem } from './core/types/portfolio';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { VideoPlayerModal } from './components/modals/VideoPlayerModal';
import { QuoteModal } from './components/modals/QuoteModal';

// Home Views
import { HeroSection } from './features/home/HeroSection';
import { ServicesOverview } from './features/home/ServicesOverview';
import { WhyChooseUs } from './features/home/WhyChooseUs';
import { RecentProjects } from './features/home/RecentProjects';
import { SocialMediaShowcase } from './features/home/SocialMediaShowcase';
import { TestimonialsSlider } from './features/home/TestimonialsSlider';
import { CtaBanner } from './features/home/CtaBanner';

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

export function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Sync with browser hash if present (e.g. #portfolio, #services)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home', 'services', 'digital-marketing', 'design-branding',
        'software-technology', 'security-surveillance', 'photography-video',
        'advertising', 'portfolio', 'about', 'process', 'contact', 'faq'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO Page Title & Meta Description update
  useEffect(() => {
    const titles: Record<ActivePage, { title: string; desc: string }> = {
      'home': {
        title: 'PRO SETUP | كل ما تحتاجه أعمالك في مكان واحد',
        desc: 'تقدم PRO SETUP حلول التسويق الرقمي، تطوير البرمجيات، الهوية البصرية، كاميرات المراقبة، التصوير والإنتاج السينمائي، والحملات الإعلانية تحت سقف واحد.'
      },
      'services': {
        title: 'الخدمات المتكاملة | PRO SETUP - كل ما تحتاجه أعمالك',
        desc: 'استكشف منظومة خدمات PRO SETUP: التسويق الرقمي، الهوية البصرية، تطوير البرمجيات والتطبيقات، كاميرات المراقبة، الإنتاج السينمائي، والإعلانات.'
      },
      'digital-marketing': {
        title: 'التسويق الرقمي وإدارة السوشيال ميديا | PRO SETUP',
        desc: 'حملات تسويقية مبنية على الأداء، استهداف الجماهير، إدارة منصات التواصل، صناعة المحتوى، ولوحات تحكم فورية لاستقطاب العملاء.'
      },
      'design-branding': {
        title: 'استوديو الهوية البصرية وتصميم UI/UX | PRO SETUP',
        desc: 'تصميم الشعارات، نظم الهوية البصرية للشركات، تصاميم السوشيال ميديا، التغليف الفاخر، وتصميم واجهات وتجربة المستخدم للمواقع والتطبيقات.'
      },
      'software-technology': {
        title: 'الحلول البرمجية والتقنية وتطوير المنصات | PRO SETUP',
        desc: 'تطوير مواقع الويب السريعة، وتطبيقات الجوال عبر Flutter، والبرمجيات المخصصة، ولوحات البيانات، والواجهات البرمجية، والبنية السحابية.'
      },
      'security-surveillance': {
        title: 'توريد وتركيب كاميرات المراقبة والأنظمة الأمنية | PRO SETUP',
        desc: 'أنظمة CCTV تجارية، كاميرات IP بدقة 4K، وحدات تخزين NVR/DVR، شبكات PoE معزولة، وبوابات التحكم في الدخول والمراقبة 24/7.'
      },
      'photography-video': {
        title: 'التصوير التجاري والإنتاج السينمائي | PRO SETUP',
        desc: 'إنتاج إعلامي فائق الدقة، إعلانات تجارية سينمائية 4K، تصوير المنتجات، فيديوهات الريلز السريعة، وهندسة تلوين سينمائية.'
      },
      'advertising': {
        title: 'الحملات الإعلانية وإدارة الميزانيات | PRO SETUP',
        desc: 'إدارة الحملات الإعلانية المتكاملة: الفكرة، الاستراتيجية، الابتكار، الإنتاج المرئي، الإطلاق الخوارزمي، والتحسين لمضاعفة العائد.'
      },
      'portfolio': {
        title: 'معرض الأعمال ودراسات الحالة | PRO SETUP',
        desc: 'استكشف نماذج مشاريعنا المتكاملة في البرمجيات، الهويات البصرية، الحملات الإعلانية، والأنظمة الأمنية والإنتاج السينمائي.'
      },
      'about': {
        title: 'عن PRO SETUP | رؤيتك. تجهيزنا المتكامل.',
        desc: 'تعرف على نموذج عملنا المتكامل، ورؤيتنا، ورسالتنا، وقيمنا الجوهرية، وفريق القيادة المتخصص في تجهيز الأعمال.'
      },
      'process': {
        title: 'منهجية العمل المكونة من 6 خطوات | PRO SETUP',
        desc: 'من الاستكشاف والتخطيط الاستراتيجي إلى التصميم والبرمجة والإطلاق الحي والدعم المستمر.'
      },
      'contact': {
        title: 'تواصل مع PRO SETUP | لنصنع شيئاً عظيماً معاً',
        desc: 'تواصل مباشرة مع فريقنا لمناقشة مشروعك، وطلب عروض الأسعار والاستشارات المخصصة.'
      },
      'faq': {
        title: 'الأسئلة الشائعة والإرشادات | PRO SETUP',
        desc: 'إجابات وافية على كافة الاستفسارات المتعلقة بخدماتنا المتكاملة، ومراحل العمل، والأنظمة التقنية والأمنية.'
      }
    };

    const currentMeta = titles[activePage] || titles['home'];
    document.title = currentMeta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.desc);
    }
  }, [activePage]);

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-dark-900 bg-tech-grid text-slate-100 flex flex-col justify-between selection:bg-electric-600 selection:text-white">
      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Futuristic Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Router */}
      <main className="flex-1 pt-20">
        {activePage === 'home' && (
          <>
            <HeroSection
              onExploreServices={() => navigateTo('services')}
              onWatchVideo={() => setIsVideoModalOpen(true)}
              onSelectVertical={(vert) => navigateTo(vert as ActivePage)}
            />
            <ServicesOverview onNavigate={navigateTo} />
            <WhyChooseUs />
            <RecentProjects
              onSelectProject={(p) => setSelectedProject(p)}
              onViewAll={() => navigateTo('portfolio')}
            />
            <SocialMediaShowcase />
            <TestimonialsSlider />
            <CtaBanner onContactClick={() => navigateTo('contact')} />
          </>
        )}

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

      {/* Global Footer */}
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
      />
    </div>
  );
}

export default App;
