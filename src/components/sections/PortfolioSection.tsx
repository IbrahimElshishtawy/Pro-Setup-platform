import { ArrowUpLeft } from 'lucide-react';
import {
  CATEGORY_FILTERS,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../../data/siteData';
import { Reveal } from '../ui/Reveal';

interface PortfolioSectionProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function PortfolioSection({
  activeCategory,
  onSelectCategory,
  onSelectProject,
}: PortfolioSectionProps) {
  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="bg-surface border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-border">
            <div className="space-y-3 max-w-2xl">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                02 / SELECTED ARCHITECTURAL WORKS
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug">
                مختارات من أعمال Kitchen Pro
              </h2>
              <p className="text-sm sm:text-base text-graphite leading-relaxed">
                كل مشروع يُنفذ وفق مقاسات الموقع وخامات محددة بعناية لتوازن بين المتانة
                والبساطة البصرية.
              </p>
            </div>

            {/* Category Filter Bar */}
            <div
              role="tablist"
              aria-label="تصفية الأعمال حسب القسم"
              className="flex flex-wrap items-center gap-2"
            >
              {CATEGORY_FILTERS.map((filter) => {
                const isActive = activeCategory === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onSelectCategory(filter.id)}
                    className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent-blue text-white border-accent-blue'
                        : 'bg-surface-white text-graphite border-border hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Architectural Catalog Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} variant="image" delayMs={(idx % 3) * 70}>
              <article className="group border border-border bg-surface-white flex flex-col h-full transition-colors duration-300 hover:border-charcoal/60">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-right flex flex-col flex-1 focus-visible:outline-accent-blue"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden bg-surface-soft border-b border-border relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-architectural group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 right-3 bg-surface/95 border border-border px-2.5 py-1 text-[11px] font-medium text-charcoal">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5 w-full">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-steel-muted">
                        <span dir="ltr">{project.code}</span>
                        <span>{project.location} · {project.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-charcoal group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-graphite leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-steel-muted">
                      <span className="truncate max-w-[75%]">{project.material}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-charcoal group-hover:text-accent-blue shrink-0">
                        <span>التفاصيل</span>
                        <ArrowUpLeft className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
