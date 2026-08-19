import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { ASSETS } from '../../data/assets';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll-linked depth animation (restrained, architectural)
  useGSAP(
    () => {
      if (prefersReducedMotion || !heroRef.current || !bgImageRef.current || !contentRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Background image subtle scale & parallax
      tl.to(
        bgImageRef.current,
        {
          scale: 1.05,
          yPercent: 10,
          ease: 'none',
        },
        0
      );

      // Foreground typography translation
      tl.to(
        contentRef.current,
        {
          yPercent: -12,
          opacity: 0.6,
          ease: 'none',
        },
        0
      );

      return () => {
        tl.kill();
      };
    },
    { scope: heroRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[100svh] lg:min-h-[720px] w-full bg-[#161D18] text-[#EDE8DF] overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-12 -mt-24 pt-24 sm:pt-32"
    >
      {/* Edge-to-Edge Architectural Photography Background (Shifted Slightly Right on Mobile for Architectural Focus) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src={ASSETS.hero.main.src}
          alt={ASSETS.hero.main.alt}
          className="h-full w-full object-cover object-[78%_center] lg:object-center filter brightness-[0.98] contrast-[1.03] scale-100 transform-gpu"
          fetchPriority="high"
        />
        {/* Soft Organic Gradient Overlays: Dark Text-Safe Left Zone to Luminous Architectural Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161D18]/90 via-[#161D18]/65 via-50% to-transparent pointer-events-none lg:from-[#161D18] lg:via-[#161D18]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-transparent via-60% to-[#161D18]/40 pointer-events-none" />
      </div>

      {/* Art-Directed Editorial Typography Column */}
      <div ref={contentRef} className="relative z-10 my-auto w-full max-w-xl xl:max-w-2xl space-y-4 sm:space-y-6 pl-1 sm:pl-2 md:pl-6 pb-2 sm:pb-0">
        <div className="space-y-2 sm:space-y-4">
          {/* Main Editorial Display Headline (Elevated Mobile Magazine Scale) */}
          <h1 className="font-serif text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-normal leading-[1.05] tracking-tight text-[#EDE8DF]">
            We don’t <br />
            <span className="italic text-[#C5A880] font-light">just</span> renovate <br />
            homes.
          </h1>

          {/* Sub-Headline Accent Statement */}
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#EDE8DF]">
            We <span className="italic text-[#C5A880] font-light">reshape</span> how you live.
          </h2>

          {/* Quiet Supporting Description */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#EDE8DF]/85 max-w-md leading-relaxed font-light pt-1 sm:pt-1.5">
            Thoughtful renovations, extensions and interior architecture designed around the way you live.
          </p>
        </div>

        {/* Premium Action CTAs (Moved Lower in Mobile Viewport Directly Above Divider) */}
        <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-14 sm:pt-24 lg:pt-6 w-full max-w-md">
          <Link
            to="/contact"
            className="flex-1 inline-flex items-center justify-center space-x-1.5 sm:space-x-3 rounded-full bg-[#C5A880] px-3.5 py-3 sm:px-7 sm:py-4 font-sans text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] hover:shadow-2xl focus:outline-hidden shadow-xl text-center whitespace-nowrap"
            data-cursor="hover"
            data-cursor-text="START"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>

          <Link
            to="/projects"
            className="flex-1 inline-flex items-center justify-center space-x-1.5 sm:space-x-3 rounded-full bg-[#161D18]/80 backdrop-blur-md border border-[#EDE8DF]/20 px-3.5 py-3 sm:px-7 sm:py-4 font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#EDE8DF] transition-all duration-300 hover:bg-[#EDE8DF] hover:text-[#161D18] text-center whitespace-nowrap"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>
      </div>

      {/* Hero Bottom Scroll & Meta Indicator Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-[#EDE8DF]/15 pt-4 sm:pt-6 text-[9px] sm:text-[10px] font-sans tracking-widest uppercase text-[#8E877D] pl-1 sm:pl-2 md:pl-6">
        <div className="flex items-center space-x-2">
          <ArrowDown className="h-3.5 w-3.5 text-[#C5A880] animate-bounce" />
          <span>SCROLL TO DISCOVER</span>
        </div>
        <span className="hidden sm:inline">RESIDENTIAL ARCHITECTURE &amp; INTERIORS</span>
      </div>
    </section>
  );
};

export default Hero;
