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
  const prefersReducedMotion = useReducedMotion();

  // Desktop Horizontal Scroll Pinning
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
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 0.6,
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
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-8">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">{subtitle}</span>
          <h2 className="font-serif text-3xl font-medium text-[#121212]">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <Link key={proj.id} to={`/projects/${proj.slug}`} className="group p-6 rounded-2xl bg-[#121212] text-[#F9F8F6]">
              <span className="font-sans text-xs text-[#C5A880] uppercase">{proj.category}</span>
              <h3 className="font-serif text-2xl font-medium mt-2">{proj.title}</h3>
              <p className="font-sans text-xs text-[#8C8275] mt-1">{proj.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#121212] text-[#F9F8F6]">
      {/* Desktop Pinned Horizontal Container */}
      <div className="hidden lg:block h-screen w-full relative">
        {/* Fixed Header */}
        <div className="absolute top-12 left-12 right-12 z-20 flex items-center justify-between pointer-events-none">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              {subtitle}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#F9F8F6]">
              {title}
            </h2>
          </div>
          <span className="font-sans text-xs text-[#8C8275] tracking-widest uppercase">
            SCROLL HORIZONTALLY →
          </span>
        </div>

        {/* Horizontal Moving Track */}
        <div
          ref={trackRef}
          className="absolute top-0 bottom-0 left-0 flex items-center gap-12 px-12 pt-28 pb-16 h-full w-max"
        >
          {projects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group relative flex-shrink-0 w-[600px] h-[75vh] rounded-2xl overflow-hidden bg-[#1A1918] border border-[#F9F8F6]/10 transition-transform duration-500 hover:scale-[1.01]"
              data-cursor="hover"
              data-cursor-text="EXPLORE"
            >
              {/* Image Background */}
              <img
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-[#C5A880]">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full bg-[#121212]/80 backdrop-blur-md px-3.5 py-1 font-sans text-[10px] font-bold tracking-widest text-[#F9F8F6] uppercase border border-[#F9F8F6]/10">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="font-sans text-xs text-[#8C8275] uppercase tracking-wider">
                    {project.location} • {project.year}
                  </span>
                  <h3 className="font-serif text-4xl font-normal text-[#F9F8F6] group-hover:text-[#C5A880] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#8C8275] max-w-md line-clamp-2 leading-relaxed">
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
      <div className="lg:hidden px-6 py-16 space-y-8">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#F9F8F6]">
            {title}
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="snap-center flex-shrink-0 w-[85vw] max-w-[360px] rounded-2xl bg-[#1A1918] border border-[#F9F8F6]/10 p-6 space-y-4"
            >
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">{project.category}</span>
              <h3 className="font-serif text-2xl font-normal text-[#F9F8F6]">{project.title}</h3>
              <p className="font-sans text-xs text-[#8C8275] line-clamp-2">{project.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
