import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { ASSETS } from '../../data/assets';
import { COMPANY_INFO } from '../../data/company';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll-linked depth animation
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

      // Background image scale & subtle parallax
      tl.to(bgImageRef.current, {
        scale: 1.0,
        yPercent: 12,
        ease: 'none',
      }, 0);

      // Foreground typography translation
      tl.to(contentRef.current, {
        yPercent: -15,
        opacity: 0.5,
        ease: 'none',
      }, 0);

      return () => {
        tl.kill();
      };
    },
    { scope: heroRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[720px] w-full bg-[#161D18] text-[#EDE8DF] overflow-hidden flex flex-col justify-between p-6 md:p-12 -mt-24 pt-32"
    >
      {/* Edge-to-Edge Architectural Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src={ASSETS.hero.main.src}
          alt={ASSETS.hero.main.alt}
          className="h-full w-full object-cover filter brightness-[0.7] contrast-[1.1] scale-110 transform-gpu"
          fetchPriority="high"
        />
        {/* Warm Dark Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161D18]/85 via-[#161D18]/30 to-transparent" />
      </div>

      {/* Hero Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#EDE8DF]/15 pb-6">
        <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase bg-[#161D18]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#EDE8DF]/10">
          ARDAN ARCHITECTURAL STUDIO — DUBLIN
        </span>
        <span className="font-sans text-xs text-[#8E877D] tracking-widest uppercase hidden sm:inline">
          EST. {COMPANY_INFO.yearEstablished}
        </span>
      </div>

      {/* Main Layered Editorial Typography */}
      <div ref={contentRef} className="relative z-10 my-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-[#EDE8DF]">
            We don’t just <br className="hidden sm:inline" />
            renovate homes. <br />
            <span className="italic text-[#C5A880] font-light">We reshape how you live.</span>
          </h1>

          <p className="font-sans text-base md:text-xl text-[#EDE8DF]/85 max-w-2xl leading-relaxed font-light">
            {COMPANY_INFO.subtitle}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-7 py-4 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] focus:outline-hidden shadow-lg"
            data-cursor="hover"
            data-cursor-text="START"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center space-x-3 rounded-full bg-[#161D18]/80 backdrop-blur-md border border-[#EDE8DF]/20 px-7 py-4 font-sans text-xs font-semibold tracking-widest uppercase text-[#EDE8DF] transition-all duration-300 hover:bg-[#EDE8DF] hover:text-[#161D18]"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>
      </div>

      {/* Hero Bottom Scroll Indicator Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-[#EDE8DF]/15 pt-6 text-[10px] font-sans tracking-widest uppercase text-[#8E877D]">
        <div className="flex items-center space-x-2">
          <ArrowDown className="h-3.5 w-3.5 text-[#C5A880] animate-bounce" />
          <span>SCROLL TO DISCOVER</span>
        </div>
        <span>RESIDENTIAL ARCHITECTURE &amp; INTERIORS</span>
      </div>
    </section>
  );
};

export default Hero;
