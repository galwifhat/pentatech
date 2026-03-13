// ─────────────────────────────────────────────
//  Hook: useScrollReveal
//  Adds 'visible' class to elements as they
//  enter the viewport via IntersectionObserver
// ─────────────────────────────────────────────

import { useEffect, useRef } from 'react';

/**
 * @param {Object} options
 * @param {number} options.threshold - 0–1 visibility threshold (default 0.12)
 * @param {string} options.rootMargin
 * @returns {React.RefObject} ref - attach to a container element
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = '0px' } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return containerRef;
}
