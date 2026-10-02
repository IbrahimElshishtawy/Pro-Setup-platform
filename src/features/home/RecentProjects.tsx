import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { ProjectItem } from '../../core/types/portfolio';
import { ActivePage } from '../../core/types/common';

export interface RecentProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAll: (page: ActivePage) => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onSelectProject, onViewAll }) => {
  // Grab the 5 featured projects matching the screenshot
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 5);

  return (
    <section id="portfolio" className="relative py-20 bg-dark-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Recent <span className="text-electric-cyan">Projects</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed pt-1">
              Take a look at some of our latest work across different fields.
            </p>
          </div>

          <button
            onClick={() => onViewAll('portfolio')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-electric-cyan transition-colors self-start md:self-end group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Project Cards Horizontal Grid (Matches Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer flex flex-col aspect-[4/5] sm:aspect-auto sm:h-72"
            >
              {/* Project Image */}
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2.5 py-1 rounded-md bg-dark-900/80 backdrop-blur-md text-[10px] font-bold text-electric-cyan border border-electric-cyan/30">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Bottom Project Name & Arrow (Exact Match with Reference Image) */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div className="pr-2">
                  <span className="text-xs font-bold text-white group-hover:text-electric-cyan transition-colors block line-clamp-1">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] text-slate-400 block line-clamp-1">
                    {project.client}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-dark-900/80 border border-white/15 flex items-center justify-center text-slate-300 group-hover:bg-electric-cyan group-hover:text-dark-900 group-hover:border-electric-cyan transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
