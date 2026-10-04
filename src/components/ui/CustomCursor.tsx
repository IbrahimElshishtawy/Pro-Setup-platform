import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, [role="button"], .cursor-pointer, .interactive-card');
        const customText = interactiveEl?.getAttribute('data-cursor-text');

        if (interactiveEl) {
          setIsHovered(true);
          setCursorText(customText || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth follower interpolation using requestAnimationFrame
    const renderLoop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00D2FF] will-change-transform"
      />

      {/* Smooth Ambient Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-6 -mt-6 rounded-full border border-cyan-400/40 bg-blue-500/[0.08] backdrop-blur-[1px] transition-[width,height,border-color,background-color] duration-300 flex items-center justify-center will-change-transform ${
          isHovered
            ? 'w-16 h-16 -ml-8 -mt-8 border-cyan-300/80 bg-blue-600/20 scale-110 shadow-[0_0_20px_rgba(0,210,255,0.3)]'
            : 'w-12 h-12'
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-bold text-white tracking-widest uppercase animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
