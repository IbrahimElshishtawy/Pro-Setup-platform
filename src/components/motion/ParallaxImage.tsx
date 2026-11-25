import { useEffect, useRef, useState } from 'react';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { MOTION_CONFIG } from '../../lib/motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  intensity?: number;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Subtle GPU-accelerated scroll parallax image.
 * Active on desktop only; automatically disabled on mobile and reduced-motion.
 */
export function ParallaxImage({
  src,
  alt,
  intensity = MOTION_CONFIG.parallax.maxOffsetPx,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const { prefersReducedMotion, isMobile } = useMotionPrefs();

  const enabled = !prefersReducedMotion && !isMobile;

  useEffect(() => {
    if (!enabled) {
      setOffsetY(0);
      return;
    }

    let rafId = 0;

    const updatePosition = () => {
      rafId = 0;
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      if (rect.bottom < -100 || rect.top > vh + 100) return;

      // Normalized progress from -1 (below center) to +1 (above center)
      const centerOffset = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
      const clamped = Math.max(-1, Math.min(1, centerOffset));
      setOffsetY(clamped * intensity);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updatePosition);
      }
    };

    updatePosition();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled, intensity]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={
          enabled
            ? {
                transform: `translate3d(0, ${offsetY.toFixed(1)}px, 0) scale(1.07)`,
                willChange: 'transform',
              }
            : undefined
        }
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
