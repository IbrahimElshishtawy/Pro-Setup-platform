import React from 'react';

export interface SectionTitleProps {
  eyebrow?: string;
  chapterNumber?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: 'center' | 'start' | 'end';
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'purple' | 'amber';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  chapterNumber,
  title,
  highlightedWord,
  description,
  align = 'center',
  className = '',
  glowColor = 'blue',
}) => {
  const alignClasses = {
    center: 'text-center items-center mx-auto',
    start: 'text-right items-start ms-0',
    end: 'text-left items-end me-0',
  }[align];

  const glowStyles = {
    blue: 'from-blue-500/20 to-transparent text-blue-400 border-blue-500/30',
    cyan: 'from-cyan-500/20 to-transparent text-cyan-400 border-cyan-500/30',
    purple: 'from-purple-500/20 to-transparent text-purple-400 border-purple-500/30',
    amber: 'from-amber-500/20 to-transparent text-amber-400 border-amber-500/30',
  }[glowColor];

  // Helper to split title and highlight the specified word/phrase
  const renderTitle = () => {
    if (!highlightedWord || !title.includes(highlightedWord)) {
      return title;
    }
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-500 to-indigo-400 font-black">
          {highlightedWord}
        </span>
        {parts.slice(1).join(highlightedWord)}
      </>
    );
  };

  return (
    <div className={`relative flex flex-col ${alignClasses} max-w-3xl ${className}`}>
      {/* Optional Large Cinematic Background Chapter Indicator */}
      {chapterNumber && (
        <span
          className="absolute -top-8 -start-6 select-none font-mono text-7xl md:text-9xl font-black text-white/[0.03] tracking-tighter pointer-events-none -z-10"
          aria-hidden="true"
        >
          {chapterNumber}
        </span>
      )}

      {/* Eyebrow Pill */}
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-xs font-bold tracking-wide">
          <span className={`w-1.5 h-1.5 rounded-full bg-current ${glowStyles.split(' ')[2]}`} />
          <span className="text-slate-300">{eyebrow}</span>
        </div>
      )}

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight">
        {renderTitle()}
      </h2>

      {/* Narrative Description */}
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 font-normal leading-[1.75] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
