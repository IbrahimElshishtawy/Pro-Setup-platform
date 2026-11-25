import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.14) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -32px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
