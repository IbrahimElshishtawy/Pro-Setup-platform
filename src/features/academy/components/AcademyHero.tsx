import React from 'react';
import { Sparkles, ArrowLeft, BookOpen, Laptop, Cpu, ShieldCheck } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export interface AcademyHeroProps {
  onExploreCourses: () => void;
  onRegisterNow: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const AcademyHero: React.FC<AcademyHeroProps> = ({
  onExploreCourses,
  onRegisterNow,
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden text-center">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-400/30 backdrop-blur-md mb-8 animate-in fade-in duration-500">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs md:text-sm font-bold text-cyan-300 font-mono tracking-wide">
            PROSETUP ACADEMY • المنظومة التدريبية التقنية المتكاملة
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.2] tracking-tight mb-6">
          ابدأ رحلتك في عالم التكنولوجيا مع{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-400 to-blue-500">
            ProSetup Academy
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
          تعلّم البرمجة، والشبكات، والأمن السيبراني، وصيانة الهواتف الذكية (هاردوير وسوفت وير) من خلال مسارات تعليمية عملية مصممة لتطوير مهاراتك التقنية وربطك بسوق العمل الحقيقي.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={onExploreCourses}
            icon={ArrowLeft}
            className="w-full sm:w-auto shadow-glow-md"
          >
            استكشف الدورات والمسارات
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onRegisterNow}
            icon={BookOpen}
            className="w-full sm:w-auto"
          >
            التسجيل المباشر واستشارة المسار
          </Button>
        </div>

        {/* Educational Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-right">
          <div className="p-4 rounded-2xl bg-[#080D1A]/80 border border-white/[0.06] backdrop-blur-md flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">7 مسارات تخصصية</h4>
              <p className="text-xs text-slate-400">تغطي البرمجة، الشبكات، الأمن، وصيانة الأجهزة الذكية.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#080D1A]/80 border border-white/[0.06] backdrop-blur-md flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">مختبرات وورش معملية</h4>
              <p className="text-xs text-slate-400">أجهزة ومعدات ميكروسكوبية حقيقية وسيرفرات اختبار معزولة.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#080D1A]/80 border border-white/[0.06] backdrop-blur-md flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">مشاريع تخرج حقيقية</h4>
              <p className="text-xs text-slate-400">بناء بورتفوليو عملي متين يؤهلك للوظائف والمقابلات الفنية.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#080D1A]/80 border border-white/[0.06] backdrop-blur-md flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">إشراف وتوجيه مباشر</h4>
              <p className="text-xs text-slate-400">توجيه فني فردي ومتابعة مستمرة لكل متدرب خطوة بخطوة.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
