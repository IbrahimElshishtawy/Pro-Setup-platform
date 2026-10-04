import React from 'react';

export interface SectionDividerProps {
  glowColor?: 'blue' | 'cyan' | 'purple' | 'amber';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  glowColor = 'blue',
  className = '',
}) => {
  const glowHex = {
    blue: 'rgba(0, 102, 255, 0.4)',
    cyan: 'rgba(0, 210, 255, 0.4)',
    purple: 'rgba(168, 85, 247, 0.4)',
    amber: 'rgba(245, 158, 11, 0.4)',
  }[glowColor];

  return (
    <div className={`relative w-full py-8 md:py-14 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Soft Horizontal Radial Line */}
      <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Center Atmospheric Glow Orb */}
      <div
        className="absolute w-48 h-8 rounded-full blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowHex} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      
      {/* Tiny Centered Diamond Tech Node */}
      <div className="absolute w-1.5 h-1.5 rotate-45 bg-blue-400 shadow-[0_0_8px_#00D2FF]" />
    </div>
  );
};
