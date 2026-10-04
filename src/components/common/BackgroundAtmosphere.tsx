import React from 'react';

/**
 * Premium Dark Cinematic Atmosphere
 * Composed of:
 * - 3 large slowly moving blurred mesh blobs (deep blue, cyan, violet/purple)
 * - Large technical grid with radial mask fading toward the edges
 * - Soft cinematic vignette
 * - Subtle noise texture & light beams
 */
export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Deep Navy / Near-Black Layered Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050816] to-[#02040A]" />

      {/* 2. Blob 1: Deep Blue Mesh (Top-Center / Slowly Drifting) */}
      <div
        className="absolute -top-48 start-1/2 -translate-x-1/2 w-[650px] sm:w-[1100px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[#0066FF]/20 via-[#0052CC]/15 to-transparent blur-[140px] opacity-75 animate-pulse"
        style={{ animationDuration: '10s' }}
      />

      {/* 3. Blob 2: Vibrant Electric Cyan Mesh (Left/Start) */}
      <div
        className="absolute top-1/3 -start-48 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-gradient-to-br from-[#00D2FF]/15 via-[#0066FF]/10 to-transparent blur-[130px] opacity-60 animate-float-slow"
      />

      {/* 4. Blob 3: Deep Violet / Indigo Mesh (Right/End) */}
      <div
        className="absolute top-2/3 -end-48 w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] rounded-full bg-gradient-to-bl from-[#7C3AED]/12 via-[#4F46E5]/10 to-transparent blur-[140px] opacity-55 animate-float-delayed"
      />

      {/* 5. Deep Base Ambient Glow */}
      <div
        className="absolute -bottom-48 start-1/3 w-[500px] sm:w-[850px] h-[400px] sm:h-[600px] rounded-full bg-[#0066FF]/10 blur-[160px] opacity-50"
      />

      {/* 6. Technical Grid with Smooth Radial Edge Fade */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black_40%,transparent_100%)]"
      />

      {/* 7. Soft Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.7)_100%)]" />

      {/* 8. Fine Atmospheric Light Dust Beams */}
      <div className="absolute top-0 start-1/4 w-px h-96 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-40 blur-[0.5px]" />
      <div className="absolute top-32 end-1/4 w-px h-80 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent opacity-30 blur-[0.5px]" />
    </div>
  );
};
