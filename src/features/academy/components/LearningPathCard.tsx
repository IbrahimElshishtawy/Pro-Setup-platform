import React from 'react';
import { Target, Clock, Award, ArrowLeft, Briefcase, Check } from 'lucide-react';
import { LearningPathItem } from '../../../core/types/academy';
import { SpotlightCard } from '../../../components/ui/SpotlightCard';

export interface LearningPathCardProps {
  path: LearningPathItem;
  onExploreCourse?: (courseSlug: string) => void;
  onEnrollPath?: (pathSlug: string) => void;
}

export const LearningPathCard: React.FC<LearningPathCardProps> = ({
  path,
  onExploreCourse,
  onEnrollPath,
}) => {
  return (
    <SpotlightCard className="p-6 md:p-8 rounded-3xl bg-[#080D1A]/85 border border-white/[0.08]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              مسار مهني معتمد
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06]">
              {path.level}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            {path.title}
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {path.description}
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-300">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>المدة التقديرية: {path.estimatedDuration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Briefcase className="w-4 h-4 text-slate-500" />
            <span>المسمى المستهدف: {path.targetRole}</span>
          </div>
        </div>
      </div>

      {/* Sequential Milestones Grid */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
          <Target className="w-4 h-4 text-cyan-400" />
          <span>المراحل التدريبية المتسلسلة في المسار:</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {path.milestones.map((milestone) => (
            <div
              key={milestone.step}
              className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-300 font-mono font-bold text-xs border border-cyan-500/25">
                    {milestone.step}
                  </span>
                  {milestone.recommendedCourseSlug && onExploreCourse && (
                    <button
                      onClick={() => onExploreCourse(milestone.recommendedCourseSlug!)}
                      className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                    >
                      عرض المنهج
                    </button>
                  )}
                </div>

                <h5 className="text-sm font-bold text-white mb-2 line-clamp-1">
                  {milestone.title}
                </h5>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {milestone.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-white/[0.04]">
                {milestone.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.04] font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capstone Project & Career Outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-blue-600/[0.05] border border-blue-500/20 mb-6">
        <div>
          <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 mb-1.5">
            <Award className="w-4 h-4" />
            مشروع التخرج المعتمد (Capstone):
          </span>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
            {path.capstoneProject}
          </p>
        </div>

        <div>
          <span className="text-xs font-bold text-cyan-400 block mb-1.5">
            الفرص المهنية المتاحة بعد إتمام المسار:
          </span>
          <ul className="space-y-1 text-xs text-slate-300">
            {path.careerOutcomes.map((outcome, oIdx) => (
              <li key={oIdx} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      {onEnrollPath && (
        <div className="flex items-center justify-end">
          <button
            onClick={() => onEnrollPath(path.slug)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow-sm transition-all cursor-pointer"
          >
            <span>التسجيل في هذا المسار المهني</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      )}
    </SpotlightCard>
  );
};
