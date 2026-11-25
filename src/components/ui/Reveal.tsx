import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  variant?: 'text' | 'image';
  delayMs?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = 'text',
  delayMs = 0,
  className = '',
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const baseClass = variant === 'image' ? 'kp-image-reveal' : 'kp-reveal';

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`${baseClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
