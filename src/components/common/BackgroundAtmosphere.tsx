import React from 'react';

/**
 * High-tech cinematic background atmosphere with glowing mesh orbs,
 * cyber grid lines, and subtle micro-light effects.
 * Optimized with pointer-events-none and hardware-accelerated transforms.
 */
export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Deep Void Ambient Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05080D] via-[#070D18] to-[#04060A]" />

      {/* 2. Top-Center Primary Electric Aurora Orb */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-electric-600/18 via-electric-cyan/12 to-indigo-600/10 blur-[130px] opacity-75 animate-pulse"
        style={{ animationDuration: '8s' }}
      />

      {/* 3. Floating Left Accent Cyan Glow */}
      <div 
        className="absolute top-1/4 -left-48 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-gradient-to-br from-electric-cyan/14 via-blue-700/8 to-transparent blur-[120px] opacity-60"
      />

      {/* 4. Floating Right Indigo/Purple Luxury Glow */}
      <div 
        className="absolute top-1/2 -right-48 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-gradient-to-bl from-indigo-600/12 via-blue-600/10 to-transparent blur-[140px] opacity-65"
      />

      {/* 5. Bottom Deep Base Glow */}
      <div 
        className="absolute -bottom-48 left-1/3 w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full bg-electric-600/10 blur-[150px] opacity-50"
      />

      {/* 6. Subtle Cybernetic Isometric Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* 7. Subtle Radiant Light Beams */}
      <div className="absolute top-0 left-1/4 w-[1px] h-96 bg-gradient-to-b from-transparent via-electric-cyan/25 to-transparent opacity-40 blur-[1px]" />
      <div className="absolute top-20 right-1/4 w-[1px] h-80 bg-gradient-to-b from-transparent via-electric-600/20 to-transparent opacity-30 blur-[1px]" />
    </div>
  );
};
