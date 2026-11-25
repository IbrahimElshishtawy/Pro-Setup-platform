import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { MOTION_CONFIG } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  variant?: 'paragraph' | 'button' | 'fade';
  delayMs?: number;
  immediate?: boolean;
  className?: string;
}

export function Reveal({
  children,
  variant = 'paragraph',
  delayMs = 0,
  immediate = false,
  className = '',
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(MOTION_CONFIG.observer.threshold);
  const { prefersReducedMotion, isMobile } = useMotionPrefs();

  const shown = immediate || isVisible || prefersReducedMotion;

  const duration =
    prefersReducedMotion
      ? 180
      : variant === 'button'
        ? MOTION_CONFIG.duration.fast + 120
        : isMobile
          ? MOTION_CONFIG.duration.standard - 80
          : MOTION_CONFIG.duration.standard;

  const offsetY =
    prefersReducedMotion || variant === 'fade'
      ? 0
      : variant === 'button'
        ? 10
        : isMobile
          ? 12
          : MOTION_CONFIG.distance.subtle;

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translate3d(0, 0, 0)' : `translate3d(0, ${offsetY}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: MOTION_CONFIG.easing,
        transitionDelay: prefersReducedMotion ? '0ms' : `${delayMs}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
