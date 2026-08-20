import React, { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { ImageAsset } from '../../data/types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface BeforeAfterSliderProps {
  beforeImage: ImageAsset;
  afterImage: ImageAsset;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title = 'Space Transformation',
  subtitle = 'BEFORE & AFTER ARCHITECTURAL TRANSFORMATION',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // GSAP Scroll-Linked Scrub Animation
  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current || !maskRef.current || !handleRef.current) return;

      const mask = maskRef.current;
      const handle = handleRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.6,
          onUpdate: (self) => {
            if (!isDragging) {
              const progressPct = self.progress * 100;
              setSliderPosition(progressPct);
              gsap.set(mask, { clipPath: `inset(0 ${100 - progressPct}% 0 0)` });
              gsap.set(handle, { left: `${progressPct}%` });
            }
          },
        },
      });

      return () => {
        tl.kill();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion, isDragging] }
  );

  // Drag Interaction Handlers (Touch & Mouse)
  const updatePosFromEvent = useCallback((clientX: number) => {
    if (!containerRef.current || !maskRef.current || !handleRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = (x / rect.width) * 100;

    setSliderPosition(pct);
    gsap.set(maskRef.current, { clipPath: `inset(0 ${100 - pct}% 0 0)` });
    gsap.set(handleRef.current, { left: `${pct}%` });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosFromEvent(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) updatePosFromEvent(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosFromEvent(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) updatePosFromEvent(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl bg-[#161D18] select-none border border-[#EDE8DF]/15 shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      data-cursor="drag"
      data-cursor-text="SLIDE"
    >
      {/* Header Overlay Tag */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between pointer-events-none">
        <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-[#EDE8DF] uppercase bg-[#161D18]/80 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#EDE8DF]/15">
          {subtitle}
        </span>
        <span className="font-serif text-xs sm:text-sm font-medium text-[#EDE8DF] hidden md:inline bg-[#161D18]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#EDE8DF]/15">
          {title}
        </span>
      </div>

      {/* BEFORE Layer (Base Image) */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[350px] xl:h-[410px] min-h-[280px]">
        <img
          src={beforeImage.src}
          alt={beforeImage.alt}
          className="h-full w-full object-cover filter brightness-[0.85]"
          loading="lazy"
        />
        {/* BEFORE Badge */}
        <span className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 font-sans text-[10px] sm:text-xs font-bold tracking-widest text-[#EDE8DF] bg-[#161D18]/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#EDE8DF]/15 uppercase">
          BEFORE — ORIGINAL
        </span>
      </div>

      {/* AFTER Layer (Masked Top Image) */}
      <div
        ref={maskRef}
        className="absolute inset-0 z-20 w-full h-full"
        style={{
          clipPath: prefersReducedMotion
            ? 'none'
            : `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={afterImage.src}
          alt={afterImage.alt}
          className="h-full w-full object-cover filter brightness-[0.95]"
          loading="lazy"
        />
        {/* AFTER Badge */}
        <span className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10 font-sans text-[10px] sm:text-xs font-bold tracking-widest text-[#161D18] bg-[#C5A880] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold uppercase shadow-lg">
          AFTER — COMPLETED
        </span>
      </div>

      {/* Interactive Divider Handle & Line */}
      {!prefersReducedMotion && (
        <div
          ref={handleRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          aria-label="Before/After Image Comparison Slider"
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="absolute top-0 bottom-0 z-30 w-1 cursor-ew-resize bg-[#EDE8DF] shadow-[0_0_15px_rgba(0,0,0,0.5)] touch-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#EDE8DF] bg-[#161D18] text-[#EDE8DF] shadow-xl transition-transform hover:scale-110 active:scale-95">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 fill-current text-[#C5A880]"
              viewBox="0 0 24 24"
            >
              <path d="M8.5 6L3.5 12L8.5 18M15.5 6L20.5 12L15.5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
