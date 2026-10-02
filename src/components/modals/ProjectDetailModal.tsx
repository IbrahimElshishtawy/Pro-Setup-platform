import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowLeft, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ProjectItem } from '../../core/types/portfolio';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { Button } from '../common/Button';

export interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartSimilar,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project && onSelectProject) {
        handlePrev();
      }
      if (e.key === 'ArrowLeft' && project && onSelectProject) {
        handleNext();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = PORTFOLIO_PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? PORTFOLIO_PROJECTS[currentIndex - 1] : PORTFOLIO_PROJECTS[PORTFOLIO_PROJECTS.length - 1];
  const nextProject = currentIndex < PORTFOLIO_PROJECTS.length - 1 ? PORTFOLIO_PROJECTS[currentIndex + 1] : PORTFOLIO_PROJECTS[0];

  const handlePrev = () => {
    if (onSelectProject && prevProject) {
      onSelectProject(prevProject);
    }
  };

  const handleNext = () => {
    if (onSelectProject && nextProject) {
      onSelectProject(nextProject);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8 animate-in zoom-in-95 duration-200 text-right"
      >
        {/* Top Control Bar: Prev, Next, Close */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          {/* Previous / Next Project Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-dark-750 border border-white/10 transition-all"
              aria-label="المشروع السابق"
            >
              <ChevronRight className="w-4 h-4" />
              <span className="hidden sm:inline">دراسة الحالة السابقة</span>
            </button>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-dark-750 border border-white/10 transition-all"
              aria-label="المشروع التالي"
            >
              <span className="hidden sm:inline">دراسة الحالة التالية</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="p-2 rounded-xl bg-dark-800 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. PROJECT HERO */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-electric-600/20 text-electric-cyan border border-electric-500/30">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400">
              سنة التنفيذ: {project.year}
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Hero Cover Visual */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-[420px] bg-dark-950">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-70" />
        </div>

        {/* 2. CLIENT & INDUSTRY METADATA BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-dark-950/70 border border-white/[0.08]">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-500 block">العميل / الشريك</span>
            <span className="text-xs font-bold text-white block mt-0.5 truncate">{project.client}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-500 block">قطاع الأعمال</span>
            <span className="text-xs font-bold text-electric-cyan block mt-0.5">{project.industry}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-500 block">نطاق التجهيز</span>
            <span className="text-xs font-bold text-white block mt-0.5">حلول متكاملة للمؤسسات</span>
          </div>
        </div>

        {/* 3. SERVICES DELIVERED */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            الخدمات المنفذة في المشروع
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.servicesUsed.map((svc, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 text-xs font-medium text-slate-200 border border-white/10"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan" />
                {svc}
              </span>
            ))}
          </div>
        </div>

        {/* 4. OVERVIEW */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            نظرة عامة على المشروع
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {project.overview}
          </p>
        </div>

        {/* 5. CHALLENGE & STRATEGY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              التحدي التجاري
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <h4 className="text-xs font-bold text-electric-cyan uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-cyan" />
              النهج الاستراتيجي
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.strategy}
            </p>
          </div>
        </div>

        {/* 6. PRO SETUP SOLUTION */}
        <div className="p-5 rounded-2xl bg-dark-800/80 border border-electric-500/30 space-y-2">
          <h4 className="text-xs font-bold text-electric-cyan uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            حلول وتجهيزات PRO SETUP المتكاملة
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* 7. THREE-PHASE EXECUTION BREAKDOWN */}
        {(project.designPhase || project.developmentPhase || project.productionPhase) && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              مراحل التنفيذ متعددة التخصصات
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.designPhase && (
                <div className="p-4 rounded-xl bg-dark-950 border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-pink-400 font-bold uppercase block">المرحلة 01 • التصميم</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.designPhase}</p>
                </div>
              )}
              {project.developmentPhase && (
                <div className="p-4 rounded-xl bg-dark-950 border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-electric-cyan font-bold uppercase block">المرحلة 02 • التطوير الهندسي</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.developmentPhase}</p>
                </div>
              )}
              {project.productionPhase && (
                <div className="p-4 rounded-xl bg-dark-950 border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">المرحلة 03 • الإنتاج والتجهيز</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.productionPhase}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 8. RESULTS */}
        {project.results && project.results.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                الأثر والنتائج التجارية المحققة
              </h4>
              <span className="text-[10px] text-slate-500 font-mono">(نماذج قياسية توضيحية)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-dark-800/80 border border-white/[0.08] backdrop-blur-md flex flex-col"
                >
                  <span className="text-2xl sm:text-3xl font-black text-electric-cyan font-mono" dir="ltr">
                    {res.value}
                  </span>
                  <span className="text-xs font-semibold text-white mt-1">
                    {res.label}
                  </span>
                  {res.improvement && (
                    <span className="text-[11px] text-emerald-400 mt-0.5">
                      {res.improvement}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              معرض المخرجات والصور
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-dark-950 group"
                >
                  <img
                    src={img}
                    alt={`${project.title} معاينة ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 10. TECHNOLOGY STACK */}
        {project.techStack && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              التقنيات والمنصات والأدوات المستخدمة
            </h4>
            <div className="flex flex-wrap gap-2" dir="ltr">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-electric-600/10 text-electric-300 text-xs font-mono border border-electric-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 11. FINAL OUTCOME */}
        {project.finalOutcome && (
          <div className="p-4 rounded-xl bg-dark-950 border border-emerald-500/20 space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">النتيجة والمحصلة التجارية النهائية</span>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">{project.finalOutcome}</p>
          </div>
        )}

        {/* 12. BOTTOM ACTION & PREV/NEXT BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-xl bg-dark-800 text-xs text-slate-300 hover:text-white border border-white/10"
            >
              السابق →
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-xl bg-dark-800 text-xs text-slate-300 hover:text-white border border-white/10"
            >
              ← التالي
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex-1 sm:flex-initial"
            >
              إغلاق
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={ArrowLeft}
              glow
              onClick={() => {
                onClose();
                onStartSimilar(project.title);
              }}
              className="flex-1 sm:flex-initial"
            >
              طلب مشروع وتجهيز مماثل
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
