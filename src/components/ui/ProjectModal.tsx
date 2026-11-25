import { useEffect } from 'react';
import { X, ArrowUpLeft } from 'lucide-react';
import type { ProjectItem } from '../../data/siteData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/75 p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-surface-white border border-border my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-surface-white border-b border-border px-5 sm:px-7 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs text-steel-muted shrink-0" dir="ltr">
              {project.code}
            </span>
            <span className="text-border">|</span>
            <span className="text-xs font-medium text-graphite truncate">
              {project.categoryLabel}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق تفاصيل المشروع"
            className="w-9 h-9 border border-border flex items-center justify-center text-charcoal hover:bg-surface-soft transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="aspect-[16/10] bg-surface-soft border-b border-border overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 id="project-modal-title" className="text-2xl font-semibold text-charcoal">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-graphite leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 border border-border bg-surface divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-border">
            <div className="p-4">
              <p className="text-[11px] text-steel-muted">الموقع</p>
              <p className="text-sm font-medium text-charcoal mt-1">{project.location}</p>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-steel-muted">المساحة</p>
              <p className="text-sm font-medium text-charcoal mt-1">{project.area}</p>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-steel-muted">السنة</p>
              <p className="font-mono text-sm font-medium text-charcoal mt-1" dir="ltr">
                {project.year}
              </p>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-steel-muted">التشطيب</p>
              <p className="text-xs font-mono text-charcoal mt-1 truncate" dir="ltr">
                {project.finish}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.14em] text-steel-muted">
              المواصفات التنفيذية
            </h4>
            <ul className="space-y-2.5">
              {project.details.map((detail) => (
                <li
                  key={detail}
                  className="text-sm text-graphite flex items-start gap-3 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 bg-accent-blue mt-2 shrink-0" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-steel-muted">{project.material}</span>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-6 py-3 transition-colors"
            >
              <span>اطلب تصميماً مشابهاً</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
