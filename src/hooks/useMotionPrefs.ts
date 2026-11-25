import { useEffect, useState } from 'react';

interface MotionPreferences {
  prefersReducedMotion: boolean;
  isMobile: boolean;
}

export function useMotionPrefs(): MotionPreferences {
  const [prefs, setPrefs] = useState<MotionPreferences>(() => {
    if (typeof window === 'undefined') {
      return { prefersReducedMotion: false, isMobile: false };
    }
    return {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      isMobile: window.matchMedia('(max-width: 767px), (pointer: coarse)').matches,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileMq = window.matchMedia('(max-width: 767px), (pointer: coarse)');

    const update = () => {
      setPrefs({
        prefersReducedMotion: reducedMq.matches,
        isMobile: mobileMq.matches,
      });
    };

    update();
    reducedMq.addEventListener('change', update);
    mobileMq.addEventListener('change', update);

    return () => {
      reducedMq.removeEventListener('change', update);
      mobileMq.removeEventListener('change', update);
    };
  }, []);

  return prefs;
}
