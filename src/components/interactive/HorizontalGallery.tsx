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
          start: 'top top',
          end: `+=${scrollWidth + 100}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    },
    { scope: containerRef, dependencies: [projects, prefersReducedMotion] }
  );

  // Mobile / Reduced Motion Fallback: Clean Vertical Stack
  if (prefersReducedMotion) {
    return (
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-8 bg-[#161D18] text-[#EDE8DF]">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">{subtitle}</span>
          <h2 className="font-serif text-3xl font-medium text-[#EDE8DF]">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
              {title}
            </h2>
          </div>
          <span className="font-sans text-xs text-[#8E877D] tracking-widest uppercase font-medium">
            SCROLL HORIZONTALLY →
          </span>
        </div>

        {/* Horizontal Moving Track with Ample Top Clearance */}
        <div
          ref={trackRef}
          className="absolute top-0 bottom-0 left-0 flex items-center gap-10 px-12 pt-44 pb-10 h-full w-max"
        >
          {projects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group relative flex-shrink-0 w-[580px] h-[64vh] rounded-2xl overflow-hidden bg-[#1B231D] border border-[#EDE8DF]/15 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
              data-cursor="hover"
              data-cursor-text="EXPLORE"
            >
              {/* Full-Bleed Architectural Image */}
              <img
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.78] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#161D18]/60 via-transparent to-transparent" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-[#C5A880] bg-[#161D18]/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#EDE8DF]/10">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full bg-[#161D18]/80 backdrop-blur-md px-3.5 py-1 font-sans text-[10px] font-bold tracking-widest text-[#EDE8DF] uppercase border border-[#EDE8DF]/15">
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
      <div className="lg:hidden px-6 py-16 space-y-8 bg-[#161D18]">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#EDE8DF]">
            {title}
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="snap-center flex-shrink-0 w-[85vw] max-w-[360px] rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-6 space-y-4 shadow-xl"
            >
              <div className="h-52 rounded-xl overflow-hidden relative">
                <img
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">{project.category}</span>
              <h3 className="font-serif text-2xl font-normal text-[#EDE8DF]">{project.title}</h3>
              <p className="font-sans text-xs text-[#8E877D] line-clamp-2">{project.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
