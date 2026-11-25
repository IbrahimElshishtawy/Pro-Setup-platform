import { ArrowDownLeft, ArrowUpLeft } from 'lucide-react';
import { COMPANY_PILLARS, SITE_CONTACT } from '../../data/siteData';

export function HeroSection() {
  return (
    <section id="hero" className="bg-surface border-b border-border">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6 order-1">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.14em] uppercase text-steel-muted">
              <span className="inline-block w-8 h-[1px] bg-steel" aria-hidden="true" />
              <span dir="ltr">KITCHEN PRO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-charcoal leading-[1.22] tracking-tight">
              كل تفصيلة في بيتك ليها حكاية
            </h1>

            <p className="text-base sm:text-lg text-graphite leading-relaxed max-w-xl">
              في Kitchen Pro بنصمم وننفذ المطابخ والشبابيك والدريسنج بطريقة تجمع بين
              الشكل العصري والاستغلال العملي للمساحة، مع اهتمام بكل تفصيلة من أول
              التصميم لحد التركيب.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-6 py-3.5 transition-colors duration-200 min-w-[155px]"
              >
                <span>شوف شغلنا</span>
                <ArrowDownLeft className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-surface text-sm font-medium px-6 py-3.5 transition-colors duration-200 min-w-[175px]"
              >
                <span>كلمنا وابدأ مشروعك</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cinematic Real Showroom Frame */}
          <div className="lg:col-span-6 order-2">
            <div className="relative overflow-hidden border border-border bg-charcoal aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4]">
              <img
                src={SITE_CONTACT.heroImage}
                alt="معرض Kitchen Pro للمطابخ العصرية والشبابيك والدريسنج"
                className="w-full h-full object-cover object-center sm:animate-subtle-zoom"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Minimal Company Pillars Strip */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-3 border border-border bg-surface-white divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border">
          {COMPANY_PILLARS.map((pillar) => (
            <div
              key={pillar.code}
              className="px-5 py-4 sm:px-6 sm:py-5 flex items-baseline justify-between gap-4"
            >
              <span className="text-sm font-medium text-charcoal leading-relaxed">
                {pillar.label}
              </span>
              <span
                className="font-mono text-xs font-medium tracking-wider text-steel-muted shrink-0"
                dir="ltr"
              >
                {pillar.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
