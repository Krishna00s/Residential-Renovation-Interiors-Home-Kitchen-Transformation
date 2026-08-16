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
      className="relative h-screen min-h-[720px] w-full bg-[#161D18] text-[#EDE8DF] overflow-hidden flex flex-col justify-between p-6 md:p-12 -mt-24 pt-32"
    >
      {/* Edge-to-Edge Architectural Photography Background (Visually Dominant & Illuminated) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src={ASSETS.hero.main.src}
          alt={ASSETS.hero.main.alt}
          className="h-full w-full object-cover filter brightness-[0.95] contrast-[1.05] scale-100 transform-gpu"
          fetchPriority="high"
        />
        {/* Balanced Gradient Overlays (Text Contrast on Left, Glowing Villa Visible on Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161D18] via-[#161D18]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-transparent to-[#161D18]/50" />
      </div>

      {/* Main Layered Editorial Typography Composition (Scaled for Balance & Breathing Room) */}
      <div ref={contentRef} className="relative z-10 my-auto max-w-3xl space-y-6 pl-2 md:pl-6">
        <div className="space-y-4">
          {/* Main Display Headline (Slightly Reduced for Perfect Proportion) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-normal leading-[1.04] tracking-tight text-[#EDE8DF]">
            We don’t <br />
            <span className="italic text-[#C5A880] font-light">just</span> renovate <br />
            homes.
          </h1>

          {/* Sub-Headline Accent Statement */}
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-normal text-[#EDE8DF]">
            We <span className="italic text-[#C5A880] font-light">reshape</span> how you live.
          </h2>

          {/* Supporting Description */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#EDE8DF]/85 max-w-lg leading-relaxed font-light">
            Thoughtful renovations, extensions and interior architecture designed around the way you live.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-7 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] focus:outline-hidden shadow-xl"
            data-cursor="hover"
            data-cursor-text="START"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center space-x-3 rounded-full bg-[#161D18]/70 backdrop-blur-md border border-[#EDE8DF]/20 px-7 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase text-[#EDE8DF] transition-all duration-300 hover:bg-[#EDE8DF] hover:text-[#161D18]"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>
      </div>

      {/* Hero Bottom Scroll & Meta Indicator Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-[#EDE8DF]/15 pt-6 text-[10px] font-sans tracking-widest uppercase text-[#8E877D] pl-2 md:pl-6">
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
