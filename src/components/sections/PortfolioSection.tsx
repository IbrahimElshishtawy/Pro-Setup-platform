import { Maximize2 } from 'lucide-react';
import {
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from '../../data/siteData';
import { Reveal } from '../ui/Reveal';

interface PortfolioSectionProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  onSelectProject: (item: GalleryItem) => void;
}

export function PortfolioSection({
  activeCategory,
  onSelectCategory,
  onSelectProject,
}: PortfolioSectionProps) {
  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-surface-white border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-border">
            <div className="space-y-3 max-w-2xl">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                03 / GALLERY
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug">
                شوف شغلنا على أرض الواقع
              </h2>
              <p className="text-sm sm:text-base text-graphite leading-relaxed">
                كل مشروع ليه تفاصيله، وكل مساحة ليها حل مناسب. اتفرج على مجموعة من
                أعمال Kitchen Pro واختار التصميم اللي قريب من ذوقك.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="تصفية معرض الأعمال حسب القسم"
              className="flex flex-wrap items-center gap-2"
            >
              {GALLERY_FILTERS.map((filter) => {
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
                        : 'bg-surface text-graphite border-border hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Extensible Architectural Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <Reveal key={item.id} variant="image" delayMs={(idx % 3) * 60}>
              <article className="group border border-border bg-surface flex flex-col h-full transition-colors duration-300 hover:border-charcoal/60">
                <button
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className="text-right flex flex-col flex-1 focus-visible:outline-accent-blue"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden bg-charcoal border-b border-border relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-architectural group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 right-3 bg-surface/95 border border-border px-2.5 py-1 text-[11px] font-medium text-charcoal">
                      {item.categoryLabel}
                    </span>
                    <span
                      className="absolute bottom-3 left-3 w-8 h-8 bg-charcoal/80 text-surface flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-3 w-full">
                    <h3 className="text-lg font-semibold text-charcoal group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-graphite leading-relaxed">
                      {item.caption}
                    </p>
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
