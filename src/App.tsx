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
