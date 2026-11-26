import { useEffect, useState } from 'react';
import { ArrowDownLeft, ArrowUpLeft, ArrowDown } from 'lucide-react';
import { COMPANY_PILLARS, SITE_CONTACT } from '../../data/siteData';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';
import { StaggerContainer } from '../motion/StaggerContainer';
import { MOTION_CONFIG } from '../../lib/motion';

export function HeroSection() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="hero" className="bg-surface border-b border-border">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Orchestrated Copy Column */}
          <div className="lg:col-span-6 space-y-6 order-1">
            {/* Step 3: Kitchen Pro Logo / Brand Tag Opacity Entrance */}
            <Reveal variant="fade" delayMs={80} immediate={entered}>
              <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.14em] uppercase text-steel-muted">
                <img
                  src={SITE_CONTACT.brandLogo}
                  alt=""
                  aria-hidden="true"
                  className="w-6 h-6 object-contain border border-border bg-surface-white p-0.5"
                />
                <span className="inline-block w-6 h-[1px] bg-steel" aria-hidden="true" />
                <span dir="ltr">KITCHEN PRO</span>
              </div>
            </Reveal>

            {/* Step 4: Masked Heading Reveal */}
            <TextReveal
              as="h1"
              delayMs={150}
              immediate={entered}
              className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-charcoal leading-[1.22] tracking-tight"
            >
              كل تفصيلة في بيتك ليها حكاية
            </TextReveal>

            {/* Step 5: Description Fade + Subtle Rise */}
            <Reveal variant="paragraph" delayMs={280} immediate={entered}>
              <p className="text-base sm:text-lg text-graphite leading-relaxed max-w-xl">
                في Kitchen Pro بنصمم وننفذ المطابخ والشبابيك والأبواب والدريسنج
                ووحدات حوض الحمام بطريقة تجمع بين الشكل العصري والاستغلال العملي
                للمساحة، مع اهتمام بكل تفصيلة من أول التصميم لحد التركيب.
              </p>
            </Reveal>

            {/* Step 6: Clean CTA Buttons (No Bounce) */}
            <Reveal variant="button" delayMs={400} immediate={entered}>
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
            </Reveal>
          </div>

          {/* Step 1 & 2: Cinematic Hero Image with Slow Zoom Out */}
          <div className="lg:col-span-6 order-2">
            <div className="relative overflow-hidden border border-border bg-deep aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4]">
              <img
                src={SITE_CONTACT.heroImage}
                alt="معرض Kitchen Pro للمطابخ العصرية والشبابيك والدريسنج"
                className="w-full h-full object-cover object-center kp-hero-zoom-out"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Company Pillars Strip with Stagger */}
        <StaggerContainer
          staggerMs={MOTION_CONFIG.stagger.tight}
          className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-3 border border-border bg-surface-white divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border"
        >
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
        </StaggerContainer>

        {/* Step 7: Calm Architectural Scroll Indicator */}
        <Reveal variant="fade" delayMs={520} immediate={entered}>
          <div className="mt-8 flex justify-center">
            <a
              href="#about"
              aria-label="انزل للأسفل للتعرف على Kitchen Pro"
              className="inline-flex items-center gap-2 text-xs text-steel-muted hover:text-charcoal transition-colors py-1"
            >
              <span>اكتشف التفاصيل</span>
              <ArrowDown className="w-3.5 h-3.5 kp-scroll-cue" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
