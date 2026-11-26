import { ArrowDownLeft, ArrowUpLeft } from 'lucide-react';
import { SERVICES, type GalleryCategory } from '../../data/siteData';
import { CinematicSection } from '../motion/CinematicSection';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';
import { StaggerContainer } from '../motion/StaggerContainer';
import { MOTION_CONFIG } from '../../lib/motion';

interface SolutionsSectionProps {
  onSelectCategory: (category: GalleryCategory) => void;
}

export function SolutionsSection({ onSelectCategory }: SolutionsSectionProps) {
  return (
    <CinematicSection id="services" className="bg-surface border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 border-b border-border">
          <div className="lg:col-span-7 space-y-3">
            <Reveal variant="fade">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                02 / SERVICES
              </p>
            </Reveal>
            <TextReveal
              as="h2"
              delayMs={80}
              className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug"
            >
              خدمات Kitchen Pro
            </TextReveal>
          </div>
          <Reveal variant="paragraph" delayMs={140} className="lg:col-span-5">
            <p className="text-sm sm:text-base text-graphite leading-relaxed">
              بنشتغل في جميع أعمال المطابخ والشبابيك والأبواب والدريسنج ووحدات
              حوض الحمام مع اهتمام بجودة التصميم والتنفيذ وخدمة ما بعد البيع.
            </p>
          </Reveal>
        </div>

        <StaggerContainer
          staggerMs={MOTION_CONFIG.stagger.standard}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 md:[&>*:last-child]:col-span-2"
        >
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group h-full border border-border bg-surface-white flex flex-col justify-between transition-all duration-300 ease-architectural hover:border-charcoal/60 md:hover:-translate-y-0.5"
            >
              <div>
                {service.image && (
                  <div
                    className={`overflow-hidden border-b border-border bg-deep ${
                      !service.linkToGallery ? 'aspect-[16/9] md:aspect-[21/7]' : 'aspect-[16/9]'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-architectural md:group-hover:scale-[1.035]"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between pb-3.5 border-b border-border">
                    <h3 className="text-xl sm:text-2xl font-semibold text-charcoal transition-transform duration-300 ease-architectural md:group-hover:-translate-x-1">
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
              </div>

              <div className="px-6 sm:px-7 pb-6">
                {service.linkToGallery ? (
                  <a
                    href="#portfolio"
                    onClick={() => onSelectCategory(service.linkToGallery!)}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-border text-sm font-medium text-charcoal hover:text-accent-blue transition-colors"
                  >
                    <span>شوف نماذج {service.title}</span>
                    <ArrowDownLeft className="w-4 h-4 shrink-0 transition-transform duration-300 md:group-hover:-translate-x-0.5" />
                  </a>
                ) : (
                  <a
                    href="#guarantee"
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-border text-sm font-medium text-charcoal hover:text-accent-blue transition-colors"
                  >
                    <span>اعرف أكتر عن الضمان والمتابعة</span>
                    <ArrowUpLeft className="w-4 h-4 shrink-0 transition-transform duration-300 md:group-hover:-translate-x-0.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </StaggerContainer>
      </div>
    </CinematicSection>
  );
}
