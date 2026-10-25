import React, { useState } from 'react';
import { SHOWCASE_PROJECTS, PORTFOLIO_CATEGORIES, ShowcaseProject } from '../../data/projects';
import { SectionTitle } from '../ui/SectionTitle';
import { SpotlightCard } from '../ui/SpotlightCard';
import { ArrowUpLeft, ExternalLink, Sparkles } from 'lucide-react';

export interface PortfolioSectionProps {
  onSelectProject?: (project: ShowcaseProject) => void;
  onViewAll?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onViewAll,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-10 md:py-14 overflow-hidden text-right">
      {/* Background Lighting Blobs */}
      <div className="absolute top-1/4 end-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 start-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          chapterNumber="04"
          eyebrow="سجل الإنجازات والتحف التنفيذية"
          title="معرض المشاريع وحالات النجاح الموثقة"
          highlightedWord="حالات النجاح"
          description="نماذج واقعية من منظومات برمجية، شبكات أمنية، هويات تجارية، وأفلام سينمائية أبدعناها لشركائنا التجاريين بمعايير دولية صارمة."
          align="center"
          className="mb-6 md:mb-8"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-white/20'
                    : 'text-slate-400 bg-white/[0.03] hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="ms-1.5 inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="group cursor-pointer flex flex-col justify-between overflow-hidden"
              spotlightColor="rgba(0, 210, 255, 0.18)"
              onClick={() => onSelectProject?.(project)}
            >
              {/* Media Visual Container */}
              <div className="relative h-64 w-full overflow-hidden bg-dark-950">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  loading="lazy"
                />

                {/* Dark Cinematic Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-black/30" />

                {/* Category Pill Over Image */}
                <div className="absolute top-4 end-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#070D1B]/80 text-cyan-300 border border-cyan-400/30 backdrop-blur-md shadow-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Industry Label Over Image */}
                <div className="absolute bottom-4 start-4">
                  <span className="text-[11px] text-slate-300 font-medium bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {project.industry}
                  </span>
                </div>

                {/* Interactive Arrow Button */}
                <div className="absolute top-4 start-4 w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-dark-950 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-dark-950">
                  <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs md:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-right">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                      <div className="font-mono text-sm font-black text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA for full portfolio */}
        {onViewAll && (
          <div className="mt-14 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-sm border border-white/10 transition-all hover:border-cyan-400/40 cursor-pointer"
            >
              <span>عرض سجل الأعمال ودراسات الحالة الكاملة</span>
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
