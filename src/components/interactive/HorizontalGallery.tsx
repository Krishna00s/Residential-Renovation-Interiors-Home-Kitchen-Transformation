import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface HorizontalGalleryProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

const AUTO_SPEED = -0.75; // Constant auto-motion velocity (~45px/s)

// Mobile Interactive + Auto-Motion Seamless Infinite Stream Sub-Component (< 1024px)
const MobilePortfolioStream: React.FC<{ projects: Project[]; title: string; subtitle: string }> = ({
  projects,
  title,
  subtitle,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const posXRef = useRef<number>(0);
  const velocityRef = useRef<number>(AUTO_SPEED);
  const isDraggingRef = useRef<boolean>(false);
  const isGestureRef = useRef<boolean | null>(null);
  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const dragDeltaVelocityRef = useRef<number>(0);

  const singleSetWidthRef = useRef<number>(1480);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;

    const updateWidth = () => {
      const firstSet = track.children[0] as HTMLElement;
      if (firstSet) {
        singleSetWidthRef.current = firstSet.offsetWidth;
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);

    let animationFrameId: number;

    const render = () => {
      const singleWidth = singleSetWidthRef.current || 1480;

      if (!isDraggingRef.current) {
        // Smooth exponential velocity decay back to AUTO_SPEED after drag release
        if (Math.abs(velocityRef.current - AUTO_SPEED) > 0.05) {
          velocityRef.current += (AUTO_SPEED - velocityRef.current) * 0.05;
        } else {
          velocityRef.current = AUTO_SPEED;
        }

        posXRef.current += velocityRef.current;
      }

      // Math-perfect seamless infinite wrapping (0 visible reset, 0 jump, 0 gap)
      while (posXRef.current < -singleWidth) {
        posXRef.current += singleWidth;
      }
      while (posXRef.current > 0) {
        posXRef.current -= singleWidth;
      }

      if (track) {
        track.style.transform = `translate3d(${posXRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    isDraggingRef.current = true;
    isGestureRef.current = null;
    startXRef.current = touch.clientX;
    startYRef.current = touch.clientY;
    lastXRef.current = touch.clientX;
    lastTimeRef.current = performance.now();
    dragDeltaVelocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startXRef.current;
    const dy = touch.clientY - startYRef.current;

    if (isGestureRef.current === null) {
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
        isGestureRef.current = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (isGestureRef.current === true) {
      const stepDx = touch.clientX - lastXRef.current;
      const now = performance.now();
      const dt = Math.max(now - lastTimeRef.current, 8);

      posXRef.current += stepDx;
      dragDeltaVelocityRef.current = (stepDx / dt) * 16;

      lastXRef.current = touch.clientX;
      lastTimeRef.current = now;
    }
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (isGestureRef.current === true) {
      const maxVel = 18;
      const clampedVel = Math.max(-maxVel, Math.min(maxVel, dragDeltaVelocityRef.current));
      velocityRef.current = clampedVel;
    }
  };

  return (
    <div className="lg:hidden py-16 sm:py-20 space-y-8 bg-[#161D18] overflow-hidden">
      {/* Header Block with Editorial Breathing Room Above */}
      <div className="px-4 sm:px-6 space-y-1.5 sm:space-y-2">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A880] uppercase">
          {subtitle}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDE8DF] tracking-tight">
          {title}
        </h2>
      </div>

      {/* Touch Interactive + Auto-Motion Seamless Infinite Stream Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {/* Sub-Track 1 (5 Curated Projects) */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 flex-shrink-0">
            {projects.map((project, idx) => (
              <Link
                key={`${project.id}-sub1-${idx}`}
                to={`/projects/${project.slug}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-5 space-y-3.5 shadow-xl transition-all duration-300 active:scale-[0.98]"
              >
                <div className="h-44 sm:h-48 rounded-xl overflow-hidden relative bg-[#161D18]">
                  <img
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    className="h-full w-full object-cover filter brightness-[0.9] contrast-[1.05]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#EDE8DF] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#8E877D] line-clamp-2 leading-relaxed font-light">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Sub-Track 2 (1:1 Mirror Clone) */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 flex-shrink-0">
            {projects.map((project, idx) => (
              <Link
                key={`${project.id}-sub2-${idx}`}
                to={`/projects/${project.slug}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-5 space-y-3.5 shadow-xl transition-all duration-300 active:scale-[0.98]"
              >
                <div className="h-44 sm:h-48 rounded-xl overflow-hidden relative bg-[#161D18]">
                  <img
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    className="h-full w-full object-cover filter brightness-[0.9] contrast-[1.05]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#EDE8DF] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#8E877D] line-clamp-2 leading-relaxed font-light">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Sub-Track 3 (1:1 Mirror Clone for Drag Buffering) */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 flex-shrink-0">
            {projects.map((project, idx) => (
              <Link
                key={`${project.id}-sub3-${idx}`}
                to={`/projects/${project.slug}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-5 space-y-3.5 shadow-xl transition-all duration-300 active:scale-[0.98]"
              >
                <div className="h-44 sm:h-48 rounded-xl overflow-hidden relative bg-[#161D18]">
                  <img
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    className="h-full w-full object-cover filter brightness-[0.9] contrast-[1.05]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#EDE8DF] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#8E877D] line-clamp-2 leading-relaxed font-light">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  projects,
  title = 'Selected Transformations',
  subtitle = 'CURATED ARCHITECTURAL PORTFOLIO',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Desktop Horizontal Scroll Pinning with Settled Header Clearance (UNTOUCHED >= 1024px)
  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const scrollWidth = track.scrollWidth - window.innerWidth;

      if (scrollWidth <= 0) return;

      const anim = gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  // Mobile / Reduced Motion Fallback: Clean Vertical Stack
  if (prefersReducedMotion) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-12 sm:py-16 space-y-6 sm:space-y-8 bg-[#161D18] text-[#EDE8DF]">
        <div className="space-y-1.5 sm:space-y-2">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A880] uppercase">{subtitle}</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#EDE8DF]">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((proj) => (
            <Link key={proj.id} to={`/projects/${proj.slug}`} className="group p-6 rounded-2xl bg-[#1B231D] text-[#EDE8DF]">
              <span className="font-sans text-xs text-[#C5A880] uppercase">{proj.category}</span>
              <h3 className="font-serif text-2xl font-medium mt-2">{proj.title}</h3>
              <p className="font-sans text-xs text-[#8E877D] mt-1">{proj.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full bg-[#161D18] text-[#EDE8DF]">
      {/* Desktop Pinned Horizontal Container (UNTOUCHED >= 1024px) */}
      <div className="hidden lg:block h-screen w-full relative pt-28">
        {/* Settled Header with Ample Vertical Clearance Above Track */}
        <div ref={headingRef} className="absolute top-24 left-12 right-12 z-20 flex items-end justify-between pb-2 pointer-events-none">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              {subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#EDE8DF] mt-1">
              {title}
            </h2>
          </div>
          <Link
            to="/projects"
            className="pointer-events-auto inline-flex items-center space-x-2 font-sans text-xs font-bold tracking-widest uppercase text-[#C5A880] hover:text-[#EDE8DF] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={trackRef}
          className="flex gap-8 items-center h-full px-12 pt-16 w-max"
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group relative flex-shrink-0 w-[420px] md:w-[480px] rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-6 md:p-8 space-y-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A880]"
              data-cursor="hover"
              data-cursor-text="PROJECT"
            >
              <div className="h-72 md:h-80 w-full overflow-hidden rounded-xl bg-[#161D18] relative">
                <img
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9] contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B231D] via-transparent to-transparent opacity-60" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="font-sans text-xs text-[#8E877D] uppercase tracking-wider font-medium">
                    {project.location} • {project.year}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-normal text-[#EDE8DF] group-hover:text-[#C5A880] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#EDE8DF]/80 max-w-md line-clamp-2 leading-relaxed font-light">
                    {project.subtitle}
                  </p>

                  <div className="pt-2 flex items-center space-x-2 font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Interactive + Auto-Motion Seamless Infinite Stream (< 1024px) */}
      <MobilePortfolioStream projects={projects} title={title} subtitle={subtitle} />
    </div>
  );
};

export default HorizontalGallery;
