import React, { useRef } from 'react';
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

export const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  projects,
  title = 'Selected Transformations',
  subtitle = 'CURATED ARCHITECTURAL PORTFOLIO',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Desktop Horizontal Scroll Pinning with Settled Header Clearance
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
      {/* Desktop Pinned Horizontal Container */}
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

      {/* Mobile Touch-Friendly Vertical Swipe Alternative (< 1024px) */}
      <div className="lg:hidden px-4 sm:px-6 py-12 sm:py-16 space-y-6 sm:space-y-8 bg-[#161D18]">
        <div className="space-y-1.5 sm:space-y-2">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A880] uppercase">
            {subtitle}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#EDE8DF]">
            {title}
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-6 scrollbar-none">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="snap-center flex-shrink-0 w-[82vw] max-w-[340px] rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-5 sm:p-6 space-y-3.5 sm:space-y-4 shadow-xl"
            >
              <div className="h-48 sm:h-52 rounded-xl overflow-hidden relative">
                <img
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">{project.category}</span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDE8DF]">{project.title}</h3>
              <p className="font-sans text-xs text-[#8E877D] line-clamp-2">{project.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
