import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { GuaranteeSection } from './components/sections/GuaranteeSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectModal } from './components/ui/ProjectModal';
import type { GalleryCategory, GalleryItem } from './data/siteData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-charcoal">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SolutionsSection onSelectCategory={setActiveCategory} />
        <PortfolioSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectProject={setSelectedItem}
        />
        <GuaranteeSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal
        project={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
