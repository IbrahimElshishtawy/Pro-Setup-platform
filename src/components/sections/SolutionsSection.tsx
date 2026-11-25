import { ArrowDownLeft, ArrowUpLeft } from 'lucide-react';
import { SERVICES, type GalleryCategory } from '../../data/siteData';
import { Reveal } from '../ui/Reveal';

interface SolutionsSectionProps {
  onSelectCategory: (category: GalleryCategory) => void;
}

export function SolutionsSection({ onSelectCategory }: SolutionsSectionProps) {
  return (
    <section id="services" className="bg-surface border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 border-b border-border">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                02 / SERVICES
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug">
                خدمات Kitchen Pro
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-graphite leading-relaxed">
              بنشتغل في جميع أعمال المطابخ والشبابيك والدريسنج مع اهتمام بجودة
              التصميم والتنفيذ وخدمة ما بعد البيع.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.id} delayMs={idx * 70} className="h-full">
              <article className="h-full border border-border bg-surface-white p-6 sm:p-8 flex flex-col justify-between gap-8 transition-colors duration-300 hover:border-charcoal/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <h3 className="text-xl sm:text-2xl font-semibold text-charcoal">
                      {service.title}
                    </h3>
                    <span className="font-mono text-xs font-medium text-steel-muted" dir="ltr">
                      {service.code}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-graphite leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.linkToGallery ? (
                  <a
                    href="#portfolio"
                    onClick={() => onSelectCategory(service.linkToGallery!)}
                    className="inline-flex items-center justify-between pt-4 border-t border-border text-sm font-medium text-charcoal hover:text-accent-blue transition-colors"
                  >
                    <span>شوف نماذج {service.title}</span>
                    <ArrowDownLeft className="w-4 h-4 shrink-0" />
                  </a>
                ) : (
                  <a
                    href="#guarantee"
                    className="inline-flex items-center justify-between pt-4 border-t border-border text-sm font-medium text-charcoal hover:text-accent-blue transition-colors"
                  >
                    <span>اعرف أكتر عن الضمان والمتابعة</span>
                    <ArrowUpLeft className="w-4 h-4 shrink-0" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
