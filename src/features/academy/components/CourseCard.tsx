import React from 'react';
import { Clock, BarChart3, ChevronLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { CourseItem } from '../../../core/types/academy';
import { SpotlightCard } from '../../../components/ui/SpotlightCard';

export interface CourseCardProps {
  course: CourseItem;
  onSelectCourse: (slug: string) => void;
  onQuickRegister?: (slug: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onSelectCourse,
  onQuickRegister,
}) => {
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'frontend':
        return { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', glow: 'rgba(0, 210, 255, 0.15)' };
      case 'backend':
        return { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'rgba(0, 102, 255, 0.15)' };
      case 'mobile-apps':
        return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'rgba(16, 185, 129, 0.15)' };
      case 'cybersecurity':
        return { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', glow: 'rgba(139, 92, 246, 0.15)' };
      case 'networks':
        return { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', glow: 'rgba(56, 162, 255, 0.15)' };
      case 'hardware-maintenance':
        return { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'rgba(245, 158, 11, 0.15)' };
      case 'software-troubleshooting':
        return { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20', glow: 'rgba(236, 72, 153, 0.15)' };
      default:
        return { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'rgba(0, 102, 255, 0.15)' };
    }
  };

  const getLevelLabel = (lvl: string) => {
    switch (lvl) {
      case 'beginner': return 'مبتدئ';
      case 'intermediate': return 'متوسط';
      case 'advanced': return 'متقدم';
      default: return 'كافة المستويات';
    }
  };

  const theme = getCategoryTheme(course.category);

  return (
    <SpotlightCard
      spotlightColor={theme.glow}
      className="flex flex-col justify-between h-full group/card p-6"
    >
      <div>
        {/* Top Badges & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono ${theme.bg} ${theme.text} ${theme.border} border`}>
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

        {/* Thumbnail Image */}
        <div className="relative aspect-[16/9] w-full mb-5 rounded-xl overflow-hidden bg-slate-900 border border-white/5">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-80" />
          
          {course.featured && (
            <div className="absolute top-3 end-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/90 text-white text-[11px] font-bold backdrop-blur-md shadow-md">
              <Sparkles className="w-3 h-3 text-cyan-300" />
              <span>مسار مميز</span>
            </div>
          )}
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-black text-white group-hover/card:text-cyan-300 transition-colors line-clamp-2 mb-3 leading-snug">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {course.shortDescription}
        </p>

        {/* Key Attributes Bar */}
        <div className="grid grid-cols-2 gap-2 py-3 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">المستوى: {getLevelLabel(course.level)}</span>
          </div>
        </div>

        {/* Objectives Highlights (2 items) */}
        <div className="space-y-1.5 mb-6">
          {course.objectives.slice(0, 2).map((obj, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectCourse(course.slug)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-white/[0.06] hover:bg-white/[0.12] text-white hover:text-cyan-300 border border-white/[0.1] transition-all cursor-pointer"
        >
          <span>تفاصيل المنهج</span>
          <ChevronLeft className="w-4 h-4 text-cyan-400 transition-transform group-hover/card:-translate-x-1" />
        </button>

        {onQuickRegister && (
          <button
            onClick={() => onQuickRegister(course.slug)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            سجل الآن
          </button>
        )}
      </div>
    </SpotlightCard>
  );
};
