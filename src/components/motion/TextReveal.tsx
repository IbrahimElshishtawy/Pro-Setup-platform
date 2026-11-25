import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { MOTION_CONFIG } from '../../lib/motion';

interface TextRevealProps {
  children: ReactNode;
  as?: ElementType;
  delayMs?: number;
  immediate?: boolean;
  className?: string;
}

/**
 * Architectural Masked Heading Reveal
 * Slides text cleanly upward from an overflow-hidden mask without layout shift.
 */
export function TextReveal({
  children,
  as: Component = 'div',
  delayMs = 0,
  immediate = false,
  className = '',
}: TextRevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(MOTION_CONFIG.observer.threshold);
  const { prefersReducedMotion, isMobile } = useMotionPrefs();

  const shown = immediate || isVisible || prefersReducedMotion;
  const duration = prefersReducedMotion
    ? 180
    : isMobile
      ? MOTION_CONFIG.duration.standard
      : MOTION_CONFIG.duration.cinematic - 120;

  return (
    <div ref={ref} className="overflow-hidden">
      <Component
        style={{
          opacity: shown ? 1 : 0,
          transform: shown
            ? 'translate3d(0, 0, 0)'
            : prefersReducedMotion
              ? 'translate3d(0, 0, 0)'
              : isMobile
                ? 'translate3d(0, 18px, 0)'
                : 'translate3d(0, 100%, 0)',
          transitionProperty: 'opacity, transform',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: MOTION_CONFIG.easing,
          transitionDelay: prefersReducedMotion ? '0ms' : `${delayMs}ms`,
        }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
}
