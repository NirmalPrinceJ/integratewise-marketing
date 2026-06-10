import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 30,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
    } = options;

    const children = el.children.length > 1 ? Array.from(el.children) : [el];

    gsap.set(children, { y, opacity });
    const triggers: ScrollTrigger[] = [];

    children.forEach((child, i) => {
      const anim = gsap.to(child, {
        y: 0,
        opacity: 1,
        duration,
        delay: delay + i * (options.stagger || 0.1),
        ease,
        scrollTrigger: {
          trigger: child,
          start,
          toggleActions: 'play none none none',
        },
      });
      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, [options.y, options.opacity, options.duration, options.delay, options.stagger, options.ease, options.start]);

  return ref;
}
