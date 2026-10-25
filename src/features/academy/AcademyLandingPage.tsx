import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  Layout, 
  Server, 
  Smartphone, 
  ShieldCheck, 
  Network, 
  Wrench, 
  ChevronDown, 
  CheckCircle2, 
  Hammer, 
  Award, 
  Terminal, 
  Layers, 
  Microscope,
  Code2
} from 'lucide-react';
import { ACADEMY_COURSES, ACADEMY_CATEGORIES, ACADEMY_LEARNING_PATHS, ACADEMY_FAQS } from '../../data/academyData';
import { AcademyHero } from './components/AcademyHero';
import { CourseCard } from './components/CourseCard';
import { AcademyCTA } from './components/AcademyCTA';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { SpotlightCard } from '../../components/ui/SpotlightCard';

export interface AcademyLandingPageProps {
  onNavigateToCourses: (category?: string) => void;
  onNavigateToCourseDetail: (slug: string) => void;
  onNavigateToPaths: () => void;
  onNavigateToAbout: () => void;
  onNavigateToRegister: (courseSlug?: string) => void;
}

export const AcademyLandingPage: React.FC<AcademyLandingPageProps> = ({
  onNavigateToCourses,
  onNavigateToCourseDetail,
  onNavigateToPaths,
  onNavigateToAbout,
  onNavigateToRegister,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Smartphone': return Smartphone;
      case 'ShieldCheck': return ShieldCheck;
      case 'Network': return Network;
      case 'Wrench': return Wrench;
      case 'Cpu': return Cpu;
      default: return Code2;
    }
  };

  const featuredCourses = ACADEMY_COURSES.filter((c) => c.featured).slice(0, 4);

  return (
    <div className="relative">
      {/* 1. Academy Hero Section */}
      <AcademyHero
        onExploreCourses={() => onNavigateToCourses()}
        onRegisterNow={() => onNavigateToRegister()}
      />

      {/* 2. Educational Tracks Overview (The 7 Pillars) */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            chapterNumber="01"
            eyebrow="القطاعات التخصصية السبعة"
            title="منظومة متكاملة تغطي البرمجيات والشبكات وصيانة الأجهزة"
            highlightedWord="السبعة"
            description="صممت مسارات ProSetup Academy لتدمج بين هندسة البرمجيات المعاصرة، حماية البنى التحتية، والمهارات الحرفية المعملية في صيانة الأجهزة الذكية."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ACADEMY_CATEGORIES.map((cat) => {
              const IconComp = getCategoryIcon(cat.iconName);
              return (
                <SpotlightCard
                  key={cat.id}
                  spotlightColor={cat.bgGlow}
                  className="p-6 rounded-2xl flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-all"
                  onClick={() => onNavigateToCourses(cat.id)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all"
                        style={{
                          backgroundColor: `${cat.color}15`,
                          borderColor: `${cat.color}35`,
                          color: cat.color,
                        }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyan-400">
                    <span>استكشف الدورات</span>
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  </div>
                </SpotlightCard>
              );
            })}

            {/* Path Guide Promo Card */}
            <SpotlightCard
              spotlightColor="rgba(0, 102, 255, 0.25)"
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 via-[#0B1528] to-[#040814] border border-blue-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-cyan-300 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  لست متأكداً من أين تبدأ؟
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  استكشف خريطة المسارات المهنية المنسقة خطوة بخطوة من مستوى المبتدئ حتى الجاهزية لسوق العمل.
                </p>
              </div>

              <button
                onClick={onNavigateToPaths}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer shadow-glow-sm"
              >
                <span>دليل المسارات الكاملة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses Grid */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] bg-[#050816]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>برامج تدريبية مميزة</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                أبرز الدورات والورش المعملية المتاحة
              </h2>
            </div>

            <button
              onClick={() => onNavigateToCourses()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-bold border border-white/[0.1] transition-all cursor-pointer self-start md:self-auto"
            >
              <span>عرض كافة الدورات (7)</span>
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onNavigateToCourseDetail}
                onQuickRegister={onNavigateToRegister}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. The ProSetup Hands-on Methodology */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            chapterNumber="02"
            eyebrow="فلسفة التعليم العملي"
            title="لماذا يختار المتدربون ProSetup Academy؟"
            highlightedWord="ProSetup Academy"
            description="نرفض أسلوب التلقين النظري المجرد. بنينا مناهجنا على يد ممارسين ميدانيين يواجهون تحديات سوق العمل يومياً."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <Microscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                مختبرات وورش عمل حقيقية
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                تتدرب في ورش مجهزة بأحدث أجهزة الفحص الميكروسكوبي، ومحطات اللحام BGA، وسيرفرات الشبكات المدارة، بدلاً من الاقتصار على المشاهدة والشرح النظري.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>محطة عمل مجهزة لكل متدرب هاردوير</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>سيرفرات حقيقية وسويتشات Cisco وPoE</span>
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                مشاريع تخرج تملأ سيرتك الذاتية
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                في نهاية كل دورة، لا تكتفي بإنهاء الدروس، بل تبني مشروعاً كاملاً (متجر إلكتروني، خادم آمن، إصلاح لوحة أم، تأمين شبكة) ليكون دليلاً ملموساً على كفاءتك.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>أكواد برمجية نظيفة على GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>حالات دراسية فعلية ودراسات إصلاح موثقة</span>
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                توجيه ومتابعة فردية مستمرة
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                مجموعات تدريبية مركزة لضمان حصول كل متدرب على الوقت الكافي للإرشاد ومراجعة الأكواد البرمجية والتطبيق اليدوي الدقيق مع المدرب.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>مراجعة شخصية للأكواد والتمارين المعملية</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>إرشادات للتحضير لمقابلات التوظيف الفنية</span>
                </li>
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 5. Featured Learning Paths Snapshot */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] bg-[#050816]/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>المسارات المهنية المتسلسلة</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                خرائط تدريبية موجهة نحو التوظيف
              </h2>
            </div>

            <button
              onClick={onNavigateToPaths}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-bold border border-white/[0.1] transition-all cursor-pointer self-start md:self-auto"
            >
              <span>استكشف كافة المسارات (7)</span>
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMY_LEARNING_PATHS.slice(0, 2).map((path) => (
              <SpotlightCard
                key={path.id}
                className="p-6 md:p-8 rounded-3xl bg-[#080D1A]/85 border border-white/[0.08]"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {path.targetRole}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    المدة: {path.estimatedDuration}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {path.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                  {path.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {path.milestones.map((m) => (
                    <div key={m.step} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[10px] font-mono text-cyan-400 block mb-0.5">مرحلة {m.step}</span>
                      <span className="text-xs font-semibold text-slate-200 line-clamp-1">{m.title}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={onNavigateToPaths}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>تفاصيل المسار ومخرجاته المهنية</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigateToRegister(path.milestones[2]?.recommendedCourseSlug)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer"
                  >
                    سجل بالمسار
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Honest FAQs Section */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            chapterNumber="03"
            eyebrow="الأسئلة الشائعة"
            title="إجابات واضحة على استفسارات المتدربين"
            highlightedWord="إجابات واضحة"
            description="شفافية تامة حول طبيعة التدريب، المتطلبات المسبقة، الشهادات، وآلية التسجيل."
            className="mb-12"
          />

          <div className="space-y-3.5">
            {ACADEMY_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#080D1A]/80 border border-white/[0.08] backdrop-blur-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-right cursor-pointer select-none gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl bg-white/[0.04] text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-cyan-400 bg-cyan-500/10' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-white/[0.06] animate-in fade-in duration-200">
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Final Conversion Call To Action */}
      <AcademyCTA onRegisterClick={() => onNavigateToRegister()} />
    </div>
  );
};
