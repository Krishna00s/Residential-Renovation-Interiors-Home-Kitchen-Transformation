import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigationType, Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CustomCursor from '../components/common/CustomCursor';
import NoiseOverlay from '../components/common/NoiseOverlay';

gsap.registerPlugin(ScrollTrigger);

export const RootLayout: React.FC = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll Engine & Sync with GSAP Ticker
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Connect Lenis scroll to ScrollTrigger and store current scroll position
    lenis.on('scroll', (e: { scroll: number }) => {
      ScrollTrigger.update();
      sessionStorage.setItem(`scroll_pos_${window.location.pathname}`, Math.round(e.scroll).toString());
    });

    // Frame-synchronized ticker
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
  }, []);

  // Listen for raw scroll events to ensure scroll position is saved
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll_pos_${location.pathname}`, Math.round(window.scrollY).toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle scroll behavior on route transitions: restore scroll on POP (Back/Forward), top on PUSH
  useEffect(() => {
    if (navigationType === 'POP') {
      const savedPos = sessionStorage.getItem(`scroll_pos_${location.pathname}`);
      const targetY = savedPos ? parseInt(savedPos, 10) : 0;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetY, { immediate: true });
      } else {
        window.scrollTo(0, targetY);
      }
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, navigationType]);

  return (
    <div className="relative min-h-screen bg-[#161D18] text-[#EDE8DF] font-sans antialiased selection:bg-[#C5A880] selection:text-[#161D18]">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <main className="relative z-10 pt-24 min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
