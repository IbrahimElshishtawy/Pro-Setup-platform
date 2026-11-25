import { SITE_CONTACT } from '../../data/siteData';
import { Reveal } from '../ui/Reveal';

export function AboutSection() {
  return (
    <section id="about" className="bg-surface-white border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
              01 / ABOUT KITCHEN PRO
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug">
              بنحوّل أفكارك لمساحات تعيش معاها كل يوم
            </h2>
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

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-border">
              <div className="border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-charcoal">تصميم عملي</p>
                <p className="text-xs text-graphite mt-1.5 leading-relaxed">
                  حلول مصممة حسب مساحة بيتك واحتياجك اليومي.
                </p>
              </div>
              <div className="border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-charcoal">متابعة بعد التسليم</p>
                <p className="text-xs text-graphite mt-1.5 leading-relaxed">
                  خدمة ما بعد البيع وضمان مدى الحياة وفقاً لشروط الشركة.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="image" className="lg:col-span-6">
            <div className="border border-border bg-charcoal overflow-hidden aspect-square sm:aspect-[4/3]">
              <img
                src={SITE_CONTACT.aboutImage}
                alt="تصميم وتنفيذ المطابخ الحديثة في Kitchen Pro"
                loading="lazy"
                className="w-full h-full object-contain bg-charcoal"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
