import { useEffect } from 'react';

/**
 * High-performance IntersectionObserver hook for luxury mobile scroll reveal animations.
 * Provides smooth 60fps/120fps hardware-accelerated transitions with Apple-grade easing.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If user has system accessibility for reduced motion, reveal everything immediately
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed to maintain optimal mobile performance
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px', // trigger slightly before hitting viewport center
        threshold: 0.08,
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(
        '.reveal:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-check for dynamic elements
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
