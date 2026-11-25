import { Children, type ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { MOTION_CONFIG } from '../../lib/motion';

interface StaggerContainerProps {
  children: ReactNode;
  staggerMs?: number;
  className?: string;
}

/**
 * Staggers direct children cleanly on scroll with architectural timing.
 * Caps stagger delay on mobile so content appears swiftly without lag.
 */
export function StaggerContainer({
  children,
  staggerMs = MOTION_CONFIG.stagger.standard,
  className = '',
}: StaggerContainerProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.1);
  const { prefersReducedMotion, isMobile } = useMotionPrefs();

  const shown = isVisible || prefersReducedMotion;
  const effectiveStagger = prefersReducedMotion ? 0 : isMobile ? Math.min(staggerMs, 65) : staggerMs;
  const duration = prefersReducedMotion
    ? 180
    : isMobile
      ? MOTION_CONFIG.duration.standard - 80
      : MOTION_CONFIG.duration.standard + 60;

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown
              ? 'translate3d(0, 0, 0)'
              : prefersReducedMotion
                ? 'translate3d(0, 0, 0)'
                : `translate3d(0, ${isMobile ? 12 : 18}px, 0)`,
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: MOTION_CONFIG.easing,
            transitionDelay: `${Math.min(index, 5) * effectiveStagger}ms`,
          }}
          className="h-full"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
