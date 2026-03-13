// ─────────────────────────────────────────────
//  Hook: useCountUp
//  Animates a number from 0 to `target`
//  when the element enters the viewport
// ─────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react';

/**
 * @param {number} target   - Final number to count to
 * @param {number} duration - Animation duration in ms (default 1800)
 * @returns {{ ref: React.RefObject, count: number }}
 */
export function useCountUp(target, duration = 1800) {
  const [count, setCount]   = useState(0);
  const elementRef          = useRef(null);
  const animationRef        = useRef(null);
  const hasAnimated         = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = timestamp => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (progress < 1) {
              animationRef.current = requestAnimationFrame(step);
            }
          };

          animationRef.current = requestAnimationFrame(step);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [target, duration]);

  return { ref: elementRef, count };
}
