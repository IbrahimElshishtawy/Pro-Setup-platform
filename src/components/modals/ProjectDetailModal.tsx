import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../../core/types/portfolio';
import { Button } from '../common/Button';

export interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Category & Title */}
        <div className="space-y-3 pr-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-600/20 text-electric-cyan border border-electric-500/30">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400">Client: {project.client} • {project.year}</span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-extrabold text-white">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-[420px] bg-dark-800">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
        </div>

        {/* Quantified Results Grid */}
        {project.results && project.results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-dark-800/80 border border-white/[0.08] backdrop-blur-md flex flex-col"
              >
                <span className="text-2xl sm:text-3xl font-black text-electric-cyan">
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
        )}

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              The Business Challenge
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-cyan" />
              The PRO SETUP Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Services & Tech Stack */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Services Delivered
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.servicesUsed.map((svc, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 text-xs text-slate-200 border border-white/10"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan" />
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {project.techStack && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Project Visual Showcase
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-dark-800"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Action Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Ready to achieve comparable results for your business?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex-1 sm:flex-initial"
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              glow
              onClick={() => {
                onClose();
                onStartSimilar(project.title);
              }}
              className="flex-1 sm:flex-initial"
            >
              Start Your Setup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
