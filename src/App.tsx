import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { CraftsmanshipSection } from './components/sections/CraftsmanshipSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectModal } from './components/ui/ProjectModal';
import type { ProjectCategory, ProjectItem } from './data/siteData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-charcoal">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SolutionsSection onSelectCategory={setActiveCategory} />
        <PortfolioSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectProject={setSelectedProject}
        />
        <CraftsmanshipSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
