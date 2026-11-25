import { ArrowDownLeft } from 'lucide-react';
import { SOLUTIONS, type ProjectCategory } from '../../data/siteData';
import { Reveal } from '../ui/Reveal';

interface SolutionsSectionProps {
  onSelectCategory: (category: ProjectCategory) => void;
}

export function SolutionsSection({ onSelectCategory }: SolutionsSectionProps) {
  return (
    <section id="solutions" className="bg-surface-white border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 border-b border-border">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                01 / ARCHITECTURAL DIVISIONS
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug">
                ثلاثة تخصصات متكاملة بمعيار تصنيع واحد
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-graphite leading-relaxed">
              ننفذ المطابخ والشبابيك والدريسنج داخل منظومة هندسية موحدة تضمن تناسق
              الخامات، دقة المقاسات، وسلاسة الاستخدام اليومي.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((item, idx) => (
            <Reveal key={item.id} delayMs={idx * 90} className="h-full">
              <article className="h-full flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-charcoal/50">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-steel-muted" dir="ltr">
                    {item.code}
                  </span>
                  <span className="font-mono text-[11px] text-steel-muted truncate max-w-[200px]" dir="ltr">
                    {item.subtitle}
                  </span>
                </div>

                <div className="aspect-[4/3] overflow-hidden bg-surface-soft border-b border-border">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-architectural hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                    <p className="text-sm text-graphite leading-relaxed">{item.description}</p>
                    <ul className="space-y-2 pt-2 border-t border-border/70">
                      {item.specs.map((spec) => (
                        <li
                          key={spec}
                          className="text-xs text-graphite flex items-center gap-2.5"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-steel shrink-0"
                            aria-hidden="true"
                          />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#portfolio"
                    onClick={() => onSelectCategory(item.id)}
                    className="inline-flex items-center justify-between pt-4 border-t border-border text-sm font-medium text-charcoal hover:text-accent-blue transition-colors"
                  >
                    <span>استعرض أعمال {item.title}</span>
                    <ArrowDownLeft className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
