import { ArrowUpLeft } from 'lucide-react';
import { SITE_CONTACT, STORYTELLING_STEPS } from '../../data/siteData';
import { CinematicSection } from '../motion/CinematicSection';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';
import { ParallaxImage } from '../motion/ParallaxImage';
import { MOTION_CONFIG } from '../../lib/motion';

/**
 * Scroll-Based Storytelling Showcase
 * Natural browser scrolling (no scroll hijacking):
 * On desktop, the architectural showcase image stays calmly framed with subtle parallax
 * while the story steps reveal progressively alongside it.
 */
export function ProjectShowcaseSection() {
  return (
    <CinematicSection
      id="showcase"
      className="bg-surface border-b border-border py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Parallax Architectural Visual (Desktop) / Clean Frame (Mobile) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-4">
            <ParallaxImage
              src={SITE_CONTACT.heroImage}
              alt="تفاصيل تصميم وتنفيذ المطابخ العصرية في Kitchen Pro"
              intensity={18}
              className="border border-border bg-deep aspect-[4/3]"
            />
            <div className="flex items-center justify-between text-xs text-steel-muted px-1">
              <span>معرض وتصميمات Kitchen Pro</span>
              <span className="font-mono" dir="ltr">
                ARCHITECTURAL STORY
              </span>
            </div>
          </div>

          {/* Progressive Scroll Storytelling Steps */}
          <div className="lg:col-span-6 space-y-8 lg:pt-2">
            <div className="space-y-4 pb-6 border-b border-border">
              <Reveal variant="fade">
                <p
                  className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted"
                  dir="ltr"
                >
                  04 / DESIGN TO DELIVERY
                </p>
              </Reveal>
              <TextReveal
                as="h2"
                delayMs={80}
                className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug"
              >
                من أول فكرة لحد ما تستلم مساحتك جاهزة
              </TextReveal>
              <Reveal variant="paragraph" delayMs={150}>
                <p className="text-sm sm:text-base text-graphite leading-relaxed">
                  كل تفصيلة في المطبخ أو الشبابيك أو الدريسنج بتمشي بخطوات واضحة
                  ومنظمة علشان النتيجة تطلع زي ما تخيلتها وأريح في الاستخدام.
                </p>
              </Reveal>
            </div>

            <div className="space-y-5">
              {STORYTELLING_STEPS.map((item, index) => (
                <Reveal
                  key={item.step}
                  variant="paragraph"
                  delayMs={index * MOTION_CONFIG.stagger.tight}
                >
                  <div className="border border-border bg-surface-white p-6 sm:p-7 space-y-3 transition-colors duration-300 hover:border-charcoal/50">
                    <div className="flex items-center justify-between pb-3 border-b border-border/80">
                      <h3 className="text-lg sm:text-xl font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <span
                        className="font-mono text-xs font-medium text-steel-muted shrink-0"
                        dir="ltr"
                      >
                        {item.step}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-graphite leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="button" delayMs={120}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-surface text-sm font-medium px-6 py-3.5 transition-colors duration-200"
              >
                <span>احكيلنا عن مساحتك</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
