/**
 * Kitchen Pro — Centralized Cinematic Architectural Motion Configuration
 * Adjust all timings, easing, stagger intervals, and parallax limits here.
 */
export const MOTION_CONFIG = {
  duration: {
    fast: 260,
    standard: 520,
    cinematic: 860,
  },
  stagger: {
    tight: 85,
    standard: 115,
    relaxed: 145,
  },
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  distance: {
    subtle: 14,
    standard: 22,
  },
  parallax: {
    maxOffsetPx: 20,
  },
  observer: {
    threshold: 0.14,
    rootMargin: '0px 0px -40px 0px',
  },
} as const;
