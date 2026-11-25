import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { MOTION_CONFIG } from '../../lib/motion';

interface ImageRevealProps {
  children: ReactNode;
  direction?: 'right' | 'left' | 'bottom';
  delayMs?: number;
  className?: string;
}

const CLIP_HIDDEN: Record<'right' | 'left' | 'bottom', string> = {
  right: 'inset(0 0 0 12%)',
  left: 'inset(0 12% 0 0)',
  bottom: 'inset(10% 0 0 0)',
};

/**
 * Cinematic Architectural Image Reveal
 * Uses directional clip-path mask + subtle inner image scale settle on desktop,
 * gracefully degrading to lightweight opacity/slide on mobile and reduced-motion.
 */
export function ImageReveal({
  children,
  direction = 'bottom',
  delayMs = 0,
  className = '',
}: ImageRevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.12);
  const { prefersReducedMotion, isMobile } = useMotionPrefs();

  const shown = isVisible || prefersReducedMotion;
  const duration = prefersReducedMotion
    ? 200
    : isMobile
      ? MOTION_CONFIG.duration.standard
      : MOTION_CONFIG.duration.cinematic;

  const useMask = !prefersReducedMotion && !isMobile;

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        clipPath: useMask ? (shown ? 'inset(0 0 0 0)' : CLIP_HIDDEN[direction]) : undefined,
        transform:
          !useMask && !prefersReducedMotion
            ? shown
              ? 'translate3d(0, 0, 0)'
              : 'translate3d(0, 14px, 0)'
            : undefined,
        transitionProperty: useMask ? 'opacity, clip-path' : 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: MOTION_CONFIG.easing,
        transitionDelay: prefersReducedMotion ? '0ms' : `${delayMs}ms`,
      }}
      className={`overflow-hidden ${className}`}
    >
      <div
        style={{
          transform:
            useMask
              ? shown
                ? 'scale(1)'
                : 'scale(1.06)'
              : 'scale(1)',
          transitionProperty: 'transform',
          transitionDuration: `${duration + 140}ms`,
          transitionTimingFunction: MOTION_CONFIG.easing,
          transitionDelay: prefersReducedMotion ? '0ms' : `${delayMs}ms`,
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}
