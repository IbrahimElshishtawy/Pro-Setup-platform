import { ShieldCheck, ArrowUpLeft } from 'lucide-react';
import { buildWhatsAppLink } from '../../data/siteData';
import { CinematicSection } from '../motion/CinematicSection';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';

export function GuaranteeSection() {
  const warrantyWhatsappHref = buildWhatsAppLink(
    0,
    'أهلاً Kitchen Pro، حابب أسأل عن تفاصيل الضمان وخدمة ما بعد البيع.',
  );

  return (
    <CinematicSection
      id="guarantee"
      dark
      className="bg-charcoal text-surface border-b border-border-dark py-20 lg:py-24 kp-blueprint-grid"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="border border-border-dark bg-graphite/35 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-5">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.16em] uppercase text-steel">
                <ShieldCheck className="w-4 h-4 text-steel" />
                <span dir="ltr">05 / GUARANTEE & AFTER-SALES</span>
              </div>
            </Reveal>

            <TextReveal
              as="h2"
              delayMs={80}
              className="text-2xl sm:text-4xl font-semibold text-surface leading-snug"
            >
              إحنا معاك حتى بعد ما الشغل يخلص
            </TextReveal>

            <Reveal variant="paragraph" delayMs={160}>
              <p className="text-base sm:text-lg text-surface/80 leading-relaxed max-w-2xl">
                بنؤمن إن جودة الشغل بتبان مع الوقت، وعلشان كده بنهتم بخدمة ما بعد
                البيع، وبنوفر ضمان مدى الحياة وفقاً لشروط الشركة.
              </p>
            </Reveal>
          </div>

          <Reveal variant="button" delayMs={220} className="lg:col-span-4 flex lg:justify-end">
            <a
              href={warrantyWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-7 py-4 transition-colors duration-200 w-full sm:w-auto"
            >
              <span>اسألنا عن الضمان</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </CinematicSection>
  );
}
