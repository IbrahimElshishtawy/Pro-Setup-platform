import React from 'react';
import { Play, Sparkles, Film, ShieldCheck } from 'lucide-react';

export interface VideoShowcaseBannerProps {
  onPlay: () => void;
  title?: string;
  subtitle?: string;
}

export const VideoShowcaseBanner: React.FC<VideoShowcaseBannerProps> = ({
  onPlay,
  title = 'شاهد كيف نقود التجهيز المؤسسي الشامل للشركات',
  subtitle = 'فيديو تعريفي يستعرض منظومة العمل، هندسة البرمجيات، الأنظمة الأمنية، واستوديو الإنتاج السينمائي.',
}) => {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden select-none bg-[#050914] text-center">
      {/* Background Media with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ps_hero_backdrop.jpg"
          alt="PS International Video Showcase"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]" />
        <div className="absolute inset-0 bg-tech-grid opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs md:text-sm font-bold shadow-md">
          <Film className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>العرض السينمائي والتوثيقي • PS CINEMATIC SHOWCASE</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>

        {/* Dramatic Center Pulsating Play Button */}
        <div className="pt-4 flex justify-center items-center">
          <button
            onClick={onPlay}
            aria-label="تشغيل الفيديو التعريفي"
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#4A81D3] to-cyan-400 text-white shadow-[0_0_50px_rgba(74,129,211,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {/* Radar Pulsing Rings */}
            <span className="absolute inset-0 rounded-full bg-[#4A81D3] animate-ping opacity-35 pointer-events-none" />
            <span className="absolute -inset-2 rounded-full border border-cyan-400/40 pointer-events-none" />

            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-[-2px] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Duration / Quality Badges */}
        <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            دقة 4K UHD فائقة
          </span>
          <span>•</span>
          <span>إنتاج سينمائي حصري</span>
          <span>•</span>
          <span>صوت محيطي دولي</span>
        </div>

      </div>
    </section>
  );
};
