import { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, type GalleryItem } from '../../data/siteData';

interface ProjectModalProps {
  project: GalleryItem | null;
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

  const whatsappInquiry = buildWhatsAppLink(
    0,
    `أهلاً Kitchen Pro، عجبني تصميم "${project.title}" وحابب أستفسر عن تنفيذ تصميم مشابه لمساحتي.`,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-surface-white border border-border my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-surface-white border-b border-border px-5 sm:px-7 py-4 flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-graphite border border-border px-2.5 py-1 bg-surface">
            {project.categoryLabel}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق العرض"
            className="w-9 h-9 border border-border flex items-center justify-center text-charcoal hover:bg-surface-soft transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-charcoal border-b border-border flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[60vh] object-contain"
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 id="gallery-modal-title" className="text-xl font-semibold text-charcoal">
              {project.title}
            </h3>
            <p className="text-sm text-graphite leading-relaxed">{project.caption}</p>
          </div>

          <a
            href={whatsappInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-6 py-3 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>اسأل عن تصميم مشابه</span>
          </a>
        </div>
      </div>
    </div>
  );
}
