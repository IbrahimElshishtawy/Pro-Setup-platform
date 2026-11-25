import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { MOTION_CONFIG } from '../../lib/motion';

interface CinematicSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

/**
 * Architectural section transition wrapper with subtle hairline rule reveal
 * and smooth opacity entry that never blocks user scrolling or interaction.
 */
export function CinematicSection({
  id,
  children,
  className = '',
  dark = false,
}: CinematicSectionProps) {
  const { ref, isVisible } = useReveal<HTMLElement>(0.05);
  const { prefersReducedMotion } = useMotionPrefs();

  const shown = isVisible || prefersReducedMotion;

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${className}`}
    >
      {/* Subtle architectural top hairline wipe */}
      <div
        aria-hidden="true"
        style={{
          transform: shown ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'right center',
          transitionProperty: 'transform',
          transitionDuration: prefersReducedMotion
            ? '0ms'
            : `${MOTION_CONFIG.duration.cinematic}ms`,
          transitionTimingFunction: MOTION_CONFIG.easing,
        }}
        className={`pointer-events-none absolute top-0 inset-x-0 h-[1px] ${
          dark ? 'bg-steel/35' : 'bg-charcoal/20'
        }`}
      />
      {children}
    </section>
  );
}
