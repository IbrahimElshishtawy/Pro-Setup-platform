import { MATERIAL_SPECS, PROCESS_STAGES } from '../../data/siteData';
import { Reveal } from '../ui/Reveal';

export function CraftsmanshipSection() {
  return (
    <section
      id="craftsmanship"
      className="bg-charcoal text-surface border-b border-border-dark py-20 lg:py-28 kp-blueprint-grid"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* Top Precision Fabrication Band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 border-b border-border-dark">
          <Reveal className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel" dir="ltr">
              03 / PRECISION FABRICATION & MATERIALS
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-surface leading-snug">
              الدقة الهندسية تبدأ من الخامة وتظهر في كل تفصيلة
            </h2>
            <p className="text-sm sm:text-base text-surface/75 leading-relaxed">
              نعتمد في Kitchen Pro على ستانلس ستيل 304 المقاوم للصدأ والحرارة، مع
              قطاعات ألومنيوم معمارية وتقطيع CNC يضمن استقامة الخطوط وتماسك
              الوحدات لعقود من الاستخدام اليومي.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-border-dark bg-graphite/40 p-4">
                <p className="font-mono text-xl font-medium text-surface" dir="ltr">
                  304-SS
                </p>
                <p className="text-xs text-surface/70 mt-1">
                  ستانلس ستيل غذائي مقاوم للرطوبة والصدأ
                </p>
              </div>
              <div className="border border-border-dark bg-graphite/40 p-4">
                <p className="font-mono text-xl font-medium text-surface" dir="ltr">
                  80,000+
                </p>
                <p className="text-xs text-surface/70 mt-1">
                  دورة تشغيل للمفصلات والمجاري الأوروبية
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="image" className="lg:col-span-6">
            <div className="border border-border-dark bg-graphite overflow-hidden aspect-[4/3]">
              <img
                src="/images/craftsmanship-steel.jpg"
                alt="تفاصيل تصنيع وتشطيب ستانلس ستيل 304 بدقة CNC في Kitchen Pro"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-steel">
              <span dir="ltr">MITERED 45° BRUSHED STEEL JOINERY</span>
              <span dir="ltr">TOLERANCE ±0.5 MM</span>
            </div>
          </Reveal>
        </div>

        {/* Material Palette Swatches */}
        <Reveal className="py-16 border-b border-border-dark">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs tracking-[0.14em] uppercase text-steel" dir="ltr">
                MATERIAL SPECIFICATIONS
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-surface mt-2">
                مواصفات الخامات والتشطيبات الأساسية
              </h3>
            </div>
            <p className="text-xs text-surface/65">
              عينات حقيقية متوفرة للمعاينة قبل اعتماد التصميم
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MATERIAL_SPECS.map((mat) => (
              <div
                key={mat.code}
                className="border border-border-dark bg-graphite/35 p-5 flex flex-col justify-between gap-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="w-11 h-11 border border-surface/20 shrink-0"
                    style={{ backgroundColor: mat.swatch }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] text-steel" dir="ltr">
                    {mat.code}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-medium text-surface">{mat.name}</h4>
                  <p className="text-xs text-surface/70">{mat.origin}</p>
                </div>
                <div className="pt-3 border-t border-border-dark flex items-center justify-between text-xs text-surface/75 gap-2">
                  <span className="truncate">{mat.usage}</span>
                  <span className="font-mono text-[11px] text-steel shrink-0" dir="ltr">
                    {mat.thickness}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 4-Stage Manufacturing & Installation Workflow */}
        <Reveal className="pt-16">
          <div className="mb-10 space-y-2">
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-steel" dir="ltr">
              EXECUTION WORKFLOW
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-surface">
              منهجية التنفيذ من الرفع المساحي حتى التسليم
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border-dark divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-border-dark bg-graphite/25">
            {PROCESS_STAGES.map((stage) => (
              <div key={stage.step} className="p-6 flex flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-medium text-steel" dir="ltr">
                    {stage.step}
                  </span>
                  <span className="text-xs font-mono text-surface/70 border border-border-dark px-2.5 py-1">
                    {stage.duration}
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-surface">{stage.title}</h4>
                  <p className="text-sm text-surface/75 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
