import { SITE_CONTACT } from '../../data/siteData';
import { CinematicSection } from '../motion/CinematicSection';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';
import { ImageReveal } from '../motion/ImageReveal';
import { StaggerContainer } from '../motion/StaggerContainer';
import { MOTION_CONFIG } from '../../lib/motion';

export function AboutSection() {
  return (
    <CinematicSection id="about" className="bg-surface-white border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="fade">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                01 / ABOUT KITCHEN PRO
              </p>
            </Reveal>

            <TextReveal
              as="h2"
              delayMs={80}
              className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug"
            >
              بنحوّل أفكارك لمساحات تعيش معاها كل يوم
            </TextReveal>

            <Reveal variant="paragraph" delayMs={160}>
              <div className="space-y-4 text-base text-graphite leading-relaxed">
                <p>
                  عارفين إن المطبخ والدريسنج والشبابيك مش مجرد أجزاء في البيت، دي
                  تفاصيل بتفرق في راحتك وشكل المكان.
                </p>
                <p>
                  علشان كده في Kitchen Pro بنهتم إن كل تصميم يكون مناسب لمساحتك
                  واحتياجاتك، ويجمع بين الشكل الجميل والاستخدام العملي.
                </p>
              </div>
            </Reveal>

            <StaggerContainer
              staggerMs={MOTION_CONFIG.stagger.standard}
              className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border"
            >
              <div className="h-full border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-charcoal">تصميم عملي</p>
                <p className="text-xs text-graphite mt-1.5 leading-relaxed">
                  حلول مصممة حسب مساحة بيتك واحتياجك اليومي.
                </p>
              </div>
              <div className="h-full border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-charcoal">متابعة بعد التسليم</p>
                <p className="text-xs text-graphite mt-1.5 leading-relaxed">
                  خدمة ما بعد البيع وضمان مدى الحياة وفقاً لشروط الشركة.
                </p>
              </div>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              direction="left"
              delayMs={120}
              className="border border-border bg-charcoal aspect-square sm:aspect-[4/3]"
            >
              <img
                src={SITE_CONTACT.aboutImage}
                alt="تصميم وتنفيذ المطابخ الحديثة في Kitchen Pro"
                loading="lazy"
                className="w-full h-full object-contain bg-charcoal"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
