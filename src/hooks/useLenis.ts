import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface UseLenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
}

export function useLenis(options?: UseLenisOptions) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: options?.duration || 1.2,
      easing: options?.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      smoothWheel: options?.smoothWheel !== false,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Connect Lenis scroll to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Synchronize Lenis RAF with GSAP Ticker for smooth scrub
    const updateTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options?.duration, options?.easing, options?.smoothWheel]);

  const scrollTo = useCallback((target: string | number | HTMLElement, options?: Parameters<Lenis['scrollTo']>[1]) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  }, []);

  const getLenis = useCallback(() => lenisRef.current, []);

  return {
    getLenis,
    scrollTo,
  };
}
