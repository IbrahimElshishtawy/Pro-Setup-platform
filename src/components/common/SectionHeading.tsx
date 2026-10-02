import React from 'react';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/10 border border-electric-500/20 text-electric-cyan text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-electric-gradient relative inline-block">
            {highlight}
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-electric-600 to-electric-cyan rounded-full opacity-70" />
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
