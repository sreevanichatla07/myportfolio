import { useEffect, useRef, useState } from 'react';

/**
 * Observes the viewport position of all section elements matching the given ids
 * and reports the id of the section currently in view. Used for active nav highlighting.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handle = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [sectionIds, offset]);

  return activeId;
}

/**
 * Returns a ref + boolean that flips to true once the element enters the viewport.
 */
export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
