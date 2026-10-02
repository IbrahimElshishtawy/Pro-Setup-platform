import React, { useState } from 'react';
import { Search, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../../core/types/portfolio';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface PortfolioPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'branding', label: 'Branding' },
    { id: 'software', label: 'Software' },
    { id: 'security', label: 'Security' },
    { id: 'photography', label: 'Photo & Video' },
    { id: 'advertising', label: 'Advertising' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          badge="Verified Client Work"
          title="Ideas Transformed into"
          highlight="Real Results"
          subtitle="Explore our portfolio of cross-disciplinary setups spanning software architectures, brand identities, high-yield ad campaigns, and enterprise security."
          align="center"
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-dark-800/80 border border-white/10 backdrop-blur-xl">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? 'bg-electric-600 text-white shadow-glow-sm'
                    : 'bg-dark-900/60 text-slate-300 hover:text-white hover:bg-dark-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by keyword..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-dark-800/50 border border-white/5 space-y-3">
            <span className="text-slate-400 text-sm">No projects found matching your search query.</span>
            <div>
              <Button variant="outline" size="sm" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
                Clear Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-dark-800/90 border border-white/10 hover:border-electric-cyan/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer flex flex-col justify-between text-left"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-900">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-dark-900/80 backdrop-blur-md text-xs font-bold text-electric-cyan border border-electric-cyan/30">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-900/80 border border-white/15 flex items-center justify-center text-slate-300 group-hover:bg-electric-cyan group-hover:text-dark-900 group-hover:border-electric-cyan transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Client: {project.client} • {project.year}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Results highlight tag */}
                  {project.results && project.results[0] && (
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-slate-400 text-[11px]">{project.results[0].label}</span>
                      <span className="font-bold text-electric-cyan">{project.results[0].value} ({project.results[0].improvement})</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Have a unique project in mind?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Let's build a customized solution that positions your business at the forefront of your sector.
          </p>
          <Button variant="primary" onClick={onOpenQuote} glow>
            Start Your Setup
          </Button>
        </div>

      </div>
    </div>
  );
};
