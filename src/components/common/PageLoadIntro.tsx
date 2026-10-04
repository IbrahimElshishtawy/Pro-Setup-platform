import React, { useEffect, useState } from 'react';

export const PageLoadIntro: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [phase, setPhase] = useState<'enter' | 'reveal' | 'leave'>('enter');

  useEffect(() => {
    // Immediate dismissal if user requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      return;
    }

    const t1 = setTimeout(() => setPhase('reveal'), 350);
    const t2 = setTimeout(() => setPhase('leave'), 750);
    const t3 = setTimeout(() => setIsDone(true), 1050);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#020617] transition-opacity duration-500 pointer-events-none ${
        phase === 'leave' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />

      {/* Center Cinematic Brand Monogram & Name */}
      <div className="relative flex flex-col items-center gap-4 text-center">
        {/* Monogram Box with Light Sweep */}
        <div
          className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#040813] border border-blue-500/30 p-0.5 shadow-[0_0_35px_rgba(0,102,255,0.3)] overflow-hidden transition-all duration-500 ${
            phase === 'enter' ? 'scale-90 blur-sm opacity-60' : 'scale-100 blur-0 opacity-100'
          }`}
        >
          {/* Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/30 to-transparent -translate-x-full animate-shimmer" />

          <div className="w-full h-full rounded-[14px] bg-[#050B16] flex items-center justify-center">
            <span className="font-display font-black text-3xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-amber-300 tracking-tight">
              PS
            </span>
          </div>
        </div>

        {/* Brand Text */}
        <div
          className={`transition-all duration-500 ${
            phase === 'enter' ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="text-white font-extrabold text-sm tracking-widest uppercase font-mono">
            PRO SETUP INTERNATIONAL
          </div>
          <div className="text-[11px] text-cyan-400 font-medium tracking-wide mt-0.5">
            The Elite Business Setup Enterprise
          </div>
        </div>
      </div>
    </div>
  );
};
