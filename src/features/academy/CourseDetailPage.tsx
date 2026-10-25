import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  BarChart3, 
  Laptop, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Share2, 
  ArrowLeft, 
  Sparkles,
  Award,
  Layers,
  BookOpen
} from 'lucide-react';
import { ACADEMY_COURSES } from '../../data/academyData';
import { CourseItem } from '../../core/types/academy';
import { CurriculumAccordion } from './components/CurriculumAccordion';
import { CourseCard } from './components/CourseCard';
import { AcademyCTA } from './components/AcademyCTA';
import { SpotlightCard } from '../../components/ui/SpotlightCard';

export interface CourseDetailPageProps {
  courseSlug: string;
  onNavigateToCourse: (slug: string) => void;
  onNavigateToCatalog: () => void;
  onRegisterForCourse: (slug: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  courseSlug,
  onNavigateToCourse,
  onNavigateToCatalog,
  onRegisterForCourse,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const course = ACADEMY_COURSES.find((c) => c.slug === courseSlug);

  // If slug is invalid or not found, render a professional not-found view
  if (!course) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-5">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-white mb-3">الدورة المطلوبة غير موجودة</h2>
        <p className="text-sm text-slate-400 mb-6">
          يبدو أن الرابط غير صحيح أو تم نقل هذه الدورة ضمن تحديثات المناهج التعليمية.
        </p>
        <button
          onClick={onNavigateToCatalog}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-glow-sm cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لدليل الدورات المتاحة</span>
        </button>
      </div>
    );
  }

  // Related courses in the same category or adjacent
  const relatedCourses = ACADEMY_COURSES.filter(
    (c) => c.slug !== course.slug && (c.category === course.category || c.featured)
  ).slice(0, 3);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: course.title,
          text: course.shortDescription,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch {
      // User cancelled or clipboard denied
    }
  };

  const getLevelLabel = (lvl: string) => {
    switch (lvl) {
      case 'beginner': return 'مستوى مبتدئ';
      case 'intermediate': return 'مستوى متوسط';
      case 'advanced': return 'مستوى متقدم';
      default: return 'كافة المستويات';
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <button
              onClick={onNavigateToCatalog}
              className="hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>دليل الدورات</span>
            </button>
            <span>/</span>
            <span className="text-slate-500">{course.categoryLabel}</span>
            <span>/</span>
            <span className="text-cyan-400 line-clamp-1 max-w-[200px] sm:max-w-xs">{course.title}</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-300 transition-all cursor-pointer border border-white/[0.06]"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'تم نسخ الرابط!' : 'مشاركة'}</span>
          </button>
        </div>

        {/* Course Hero Card Header */}
        <div className="relative rounded-3xl bg-[#080D1A]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 md:p-12 mb-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Content Column (7 cols in LTR, Right in RTL) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {course.categoryLabel}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  {course.availability === 'open' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      متاح للتسجيل
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                      قريباً
                    </span>
                  )}
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {course.description}
              </p>

              {/* Course Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>المدة الإجمالية</span>
                  </div>
                  <span className="text-sm font-bold text-white font-mono">{course.duration}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <span>المستوى الفني</span>
                  </div>
                  <span className="text-sm font-bold text-white">{getLevelLabel(course.level)}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <Laptop className="w-4 h-4 text-cyan-400" />
                    <span>نظام التدريب</span>
                  </div>
                  <span className="text-xs font-bold text-white truncate block">{course.formatLabel}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onRegisterForCourse(course.slug)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow-md transition-all cursor-pointer"
                >
                  <span>التسجيل في هذه الدورة الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <span className="text-xs text-slate-400">
                  {course.pricingLabel || 'استشارة مسار مجانية وتأكيد المواعيد قبل الدفع'}
                </span>
              </div>
            </div>

            {/* Right/Visual Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 start-4 end-4 p-4 rounded-xl bg-[#080D1A]/90 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-bold text-cyan-400 block mb-1">
                    تدريب تطبيقي معتمد
                  </span>
                  <span className="text-xs text-slate-300">
                    مشاريع تخرج واختبارات قياس كفاءة عملية لتأهيلك لسوق العمل.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Body Grid (Content + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Learning Objectives */}
            <section className="p-6 md:p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>ماذا ستتعلم في هذه الدورة؟ (الأهداف التدريبية)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Detailed Curriculum Modules */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    المنهج الدراسي والوحدات التدريبية
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {course.curriculum.length} وحدات تدريبية متسلسلة تشمل الجوانب النظرية والتطبيق المعملي
                  </p>
                </div>
              </div>

              <CurriculumAccordion modules={course.curriculum} />
            </section>

            {/* 3. Practical Capstone Projects */}
            {course.projects && course.projects.length > 0 && (
              <section className="p-6 md:p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span>المشاريع العملية ونماذج معرض الأعمال</span>
                </h3>

                <div className="space-y-4">
                  {course.projects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all"
                    >
                      <h4 className="text-base font-bold text-white mb-2">{proj.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-cyan-300 border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Course FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <section className="p-6 md:p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <span>أسئلة شائعة حول هذه الدورة</span>
                </h3>

                <div className="space-y-3">
                  {course.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                          className="w-full flex items-center justify-between p-4 text-right cursor-pointer gap-3"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm font-bold text-white">{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isOpen ? 'rotate-180 text-cyan-400' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 border-t border-white/[0.04]">
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Prerequisites Card */}
            <SpotlightCard className="p-6 rounded-3xl bg-[#080D1A]/90 border border-white/[0.08]">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>المتطلبات المسبقة للدورة:</span>
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                {course.prerequisites.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>

            {/* Quick Registration Form Teaser Card */}
            <SpotlightCard className="p-6 rounded-3xl bg-gradient-to-b from-[#0B1528] to-[#040814] border border-blue-500/30 text-center">
              <span className="text-xs font-mono font-bold text-cyan-300 block mb-2">
                حجز مقعد في المجموعة القادمة
              </span>
              <h4 className="text-lg font-black text-white mb-3">
                سجل بياناتك للتواصل وتأكيد الحجز
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                احجز استشارتك الفنية لمعرفة المواعيد المتاحة ومطابقة مستواك مع متطلبات الدورة.
              </p>

              <button
                onClick={() => onRegisterForCourse(course.slug)}
                className="w-full py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow-sm transition-all cursor-pointer"
              >
                انتقل لاستمارة التسجيل
              </button>
            </SpotlightCard>
          </div>
        </div>

        {/* Related Courses Section */}
        {relatedCourses.length > 0 && (
          <section className="mb-16 border-t border-white/[0.06] pt-16">
            <h3 className="text-xl md:text-2xl font-black text-white mb-8">
              دورات ومسارات أخرى ذات صلة
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rel) => (
                <CourseCard
                  key={rel.id}
                  course={rel}
                  onSelectCourse={onNavigateToCourse}
                  onQuickRegister={onRegisterForCourse}
                />
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <AcademyCTA onRegisterClick={() => onRegisterForCourse(course.slug)} />
      </div>
    </div>
  );
};
