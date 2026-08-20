import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const WhatWeDoSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const totalServices = SERVICES.length;
  const touchStartXRef = useRef<number | null>(null);

  // Helper to wrap index infinitely within [0, totalServices - 1]
  const wrapIndex = useCallback(
    (idx: number) => {
      return (idx % totalServices + totalServices) % totalServices;
    },
    [totalServices]
  );

  // Navigation handlers: Clear hover focus and advance centerIndex cleanly
  const handlePrev = useCallback(() => {
    setHoveredIndex(null);
    setCenterIndex((prev) => wrapIndex(prev - 1));
  }, [wrapIndex]);

  const handleNext = useCallback(() => {
    setHoveredIndex(null);
    setCenterIndex((prev) => wrapIndex(prev + 1));
  }, [wrapIndex]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diffX) > 40) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard Arrow Navigation when section is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // IntersectionObserver to pause/resume auto motion on scroll visibility
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  // Automatic Sequential 3D Carousel Motion for Desktop & Mobile (Hold ~1.8s -> 3D Transition -> Hold)
  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;
    // Pause auto motion on desktop when user is hovering over a card
    if (hoveredIndex !== null) return;

    // 2200ms loop = ~1.6s hold + 600ms smooth 3D transform easing
    const interval = setInterval(() => {
      handleNext();
    }, 2200);

    return () => clearInterval(interval);
  }, [isInView, centerIndex, hoveredIndex, prefersReducedMotion, handleNext]);

  // Active focus index for metadata display
  const activeFocusIndex = hoveredIndex !== null ? hoveredIndex : centerIndex;

  // Rich Process steps for lower section across desktop and mobile
  const compactProcessSteps = [
    {
      number: '01',
      title: 'Consultation',
      desc: 'Initial brief & spatial assessment',
      details: 'Lifestyle brief, property assessment, budget expectations & defining scope priorities.',
    },
    {
      number: '02',
      title: 'Design',
      desc: 'Architectural plans & material selection',
      details: 'Spatial planning, architectural layouts, natural light flow, material finishes & construction prep.',
    },
    {
      number: '03',
      title: 'Build',
      desc: 'Craftsmanship & project management',
      details: 'Structural execution, coordinating trades, precision joinery installation & continuous quality control.',
    },
    {
      number: '04',
      title: 'Handover',
      desc: 'Quality inspection & final walk-through',
      details: 'Final inspections, snagging resolution, architectural review & handing over your transformed home.',
    },
  ];

  return (
    <section id="what-we-do" ref={sectionRef} className="relative w-full bg-[#161D18] text-[#EDE8DF] py-6 sm:py-12 lg:py-7 xl:py-10 px-4 sm:px-6 lg:px-12 border-b border-[#EDE8DF]/10 overflow-hidden mb-12 sm:mb-16 lg:mb-0 scroll-mt-24">
      <div className="mx-auto max-w-7xl space-y-4 sm:space-y-8 lg:space-y-5">
        {/* 1. Dedicated WHAT WE DO Viewport Screen Container */}
        <div className="flex flex-col items-center justify-start h-auto space-y-2 sm:space-y-3 lg:space-y-3">
          {/* 1A. DESKTOP HEADER (100% Below Navbar Clearance, Refined Proportional Scale for Laptops >= 1024px) */}
          <div className="hidden lg:block text-center space-y-1 lg:space-y-1.5 max-w-3xl mx-auto pt-1 lg:pt-2">
            <span className="inline-block font-sans text-[11px] lg:text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-0.5">
              WHAT WE DO
            </span>

            <h2 className="font-serif text-3xl lg:text-[2.15rem] xl:text-[2.65rem] font-normal leading-[1.08] text-[#EDE8DF]">
              Tailored renovation <br />
              solutions for every <br />
              <span className="italic text-[#C5A880]">home and lifestyle.</span>
            </h2>
          </div>

          {/* 1B. MOBILE ART-DIRECTED EDITORIAL TYPOGRAPHIC COMPOSITION (< 1024px UNTOUCHED) */}
          <div className="lg:hidden flex flex-col items-center max-w-md mx-auto space-y-1 sm:space-y-1.5 text-center pt-1">
            {/* Micro Section Marker */}
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#C5A880] uppercase opacity-95">
              WHAT WE DO
            </span>

            {/* Art-Directed Multi-Tier Editorial Typographic Statement */}
            <h2 className="font-serif text-[#EDE8DF] flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-normal tracking-tight leading-[1.1] text-[#EDE8DF]">
                Tailored renovation
              </span>
              <span className="text-lg sm:text-xl font-light italic tracking-wide text-[#EDE8DF]/85 leading-relaxed pt-0.5">
                solutions for every
              </span>
              <span className="text-xl sm:text-2xl font-normal italic text-[#C5A880] leading-tight pt-0.5">
                home and lifestyle.
              </span>
            </h2>
          </div>

          {/* 2. PHYSICAL TILTED & SCALED INFINITE SERVICE-CARD CAROUSEL */}
          <div
            className="relative w-full py-1 sm:py-2 lg:py-1.5 my-0.5 flex justify-center items-center select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop 7 Persistent Service Cards positioned around centerIndex */}
            <div className="hidden lg:flex items-center justify-center min-h-[340px] lg:min-h-[355px] xl:min-h-[400px] w-full relative overflow-visible">
              {SERVICES.map((service, sIndex) => {
                let offset = sIndex - centerIndex;
                if (offset > 3) offset -= totalServices;
                if (offset < -3) offset += totalServices;

                const isCenter = offset === 0;
                const isHovered = hoveredIndex === sIndex;
                const isFocused = isHovered || (hoveredIndex === null && isCenter);

                let translateX: number;
                let rotate: number;
                let scale: number;
                let zIndex = 10;
                let opacity: number;
                let blurPx = 0;
                let borderColor = 'border-[#EDE8DF]/15';
                let shadowClass = 'shadow-xl';

                if (prefersReducedMotion) {
                  translateX = offset * 285;
                  rotate = 0;
                  scale = isCenter ? 1.03 : 0.94;
                  opacity = Math.abs(offset) <= 2 ? 1 : 0;
                } else if (offset === 0) {
                  // CENTER CARD
                  translateX = 0;
                  rotate = 0;
                  scale = 1.03;
                  zIndex = 30;
                  opacity = 1;
                  blurPx = 0;
                  borderColor = 'border-[#C5A880]/60';
                  shadowClass = 'shadow-[0_25px_60px_rgba(0,0,0,0.7)]';
                } else if (offset === 1) {
                  // IMMEDIATE RIGHT CARD
                  translateX = 280;
                  rotate = 4;
                  scale = 0.92;
                  zIndex = 20;
                  opacity = 0.75;
                  blurPx = 0.5;
                } else if (offset === -1) {
                  // IMMEDIATE LEFT CARD
                  translateX = -280;
                  rotate = -4;
                  scale = 0.92;
                  zIndex = 20;
                  opacity = 0.75;
                  blurPx = 0.5;
                } else if (offset === 2) {
                  // FAR RIGHT CARD
                  translateX = 520;
                  rotate = 8;
                  scale = 0.81;
                  zIndex = 10;
                  opacity = 0.35;
                  blurPx = 2;
                } else if (offset === -2) {
                  // FAR LEFT CARD
                  translateX = -520;
                  rotate = -8;
                  scale = 0.81;
                  zIndex = 10;
                  opacity = 0.35;
                  blurPx = 2;
                } else {
                  // HIDDEN OFF-SCREEN CARDS
                  translateX = offset > 0 ? 760 : -760;
                  rotate = offset > 0 ? 12 : -12;
                  scale = 0.7;
                  zIndex = 0;
                  opacity = 0;
                  blurPx = 4;
                }

                if (isHovered) {
                  rotate = 0;
                  scale = 1.05;
                  zIndex = 40;
                  opacity = 1;
                  blurPx = 0;
                  borderColor = 'border-[#C5A880]';
                  shadowClass = 'shadow-[0_30px_70px_rgba(0,0,0,0.85)]';
                }

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredIndex(sIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      setHoveredIndex(null);
                      setCenterIndex(sIndex);
                    }}
                    className={`absolute w-[265px] lg:w-[280px] xl:w-[305px] h-[330px] lg:h-[350px] xl:h-[395px] rounded-2xl overflow-hidden cursor-pointer bg-[#1B231D] border ${borderColor} ${shadowClass} transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu`}
                    style={{
                      transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex,
                      opacity,
                      filter: blurPx > 0 ? `blur(${blurPx}px)` : 'none',
                      pointerEvents: Math.abs(offset) <= 2 ? 'auto' : 'none',
                      transformOrigin: 'center center',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    {/* Background Architectural Image */}
                    <img
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
                        isFocused ? 'scale-110 filter brightness-[0.7] contrast-[1.1]' : 'scale-100 filter brightness-[0.5]'
                      }`}
                      loading="lazy"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/50 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="relative z-20 p-5 xl:p-7 h-full flex flex-col justify-between text-[#EDE8DF]">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl xl:text-2xl font-light text-[#C5A880]">
                          0{sIndex + 1}
                        </span>
                        <span className="rounded-full bg-[#161D18]/80 backdrop-blur-md px-2.5 py-0.5 font-sans text-[9px] xl:text-[10px] font-bold tracking-widest text-[#EDE8DF] uppercase border border-[#EDE8DF]/15">
                          {service.categoryGroup}
                        </span>
                      </div>

                      <div className="space-y-1.5 xl:space-y-2.5">
                        <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl font-normal text-[#EDE8DF]">
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs text-[#EDE8DF]/85 leading-relaxed font-light line-clamp-2 xl:line-clamp-none">
                          {service.shortDesc}
                        </p>

                        {isFocused && (
                          <div className="pt-2 border-t border-[#EDE8DF]/20 flex items-center justify-between transition-opacity duration-500">
                            <span className="font-sans text-[10px] text-[#C5A880] uppercase tracking-widest font-semibold">
                              {service.typicalDuration}
                            </span>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center space-x-1 font-sans text-[11px] font-bold tracking-wider uppercase text-[#C5A880] hover:text-[#EDE8DF]"
                            >
                              <span>Explore</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile 3D Depth Tunnel Carousel (< 1024px UNTOUCHED) */}
            <div className="lg:hidden relative w-full h-[285px] sm:h-[335px] flex items-center justify-center overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
              {SERVICES.map((service, sIndex) => {
                let offset = sIndex - centerIndex;
                if (offset > 3) offset -= totalServices;
                if (offset < -3) offset += totalServices;

                const isCenter = offset === 0;

                let translateX: number;
                let translateZ: number;
                let rotateY: number;
                let scale: number;
                let opacity: number;
                let blurPx = 0;
                let zIndex = 10;
                let borderColor = 'border-[#EDE8DF]/15';

                if (prefersReducedMotion) {
                  translateX = offset * 240;
                  translateZ = 0;
                  rotateY = 0;
                  scale = isCenter ? 1 : 0.85;
                  opacity = Math.abs(offset) <= 1 ? 1 : 0;
                } else if (offset === 0) {
                  translateX = 0;
                  translateZ = 0;
                  rotateY = 0;
                  scale = 1;
                  opacity = 1;
                  blurPx = 0;
                  zIndex = 30;
                  borderColor = 'border-[#C5A880]/70';
                } else if (offset === 1) {
                  translateX = 155;
                  translateZ = -120;
                  rotateY = -18;
                  scale = 0.88;
                  opacity = 0.82;
                  blurPx = 0.5;
                  zIndex = 20;
                } else if (offset === -1) {
                  translateX = -155;
                  translateZ = -120;
                  rotateY = 18;
                  scale = 0.88;
                  opacity = 0.82;
                  blurPx = 0.5;
                  zIndex = 20;
                } else if (offset === 2) {
                  translateX = 260;
                  translateZ = -260;
                  rotateY = -30;
                  scale = 0.74;
                  opacity = 0.45;
                  blurPx = 2;
                  zIndex = 10;
                } else if (offset === -2) {
                  translateX = -260;
                  translateZ = -260;
                  rotateY = 30;
                  scale = 0.74;
                  opacity = 0.45;
                  blurPx = 2;
                  zIndex = 10;
                } else {
                  translateX = offset > 0 ? 350 : -350;
                  translateZ = -400;
                  rotateY = offset > 0 ? -38 : 38;
                  scale = 0.6;
                  opacity = 0;
                  blurPx = 4;
                  zIndex = 0;
                }

                return (
                  <div
                    key={service.id}
                    onClick={() => setCenterIndex(sIndex)}
                    className={`absolute w-[220px] sm:w-[260px] h-[280px] sm:h-[330px] rounded-2xl overflow-hidden cursor-pointer bg-[#1B231D] border ${borderColor} shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu`}
                    style={{
                      transform: `translate3d(${translateX}px, 0px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      zIndex,
                      opacity,
                      filter: blurPx > 0 ? `blur(${blurPx}px)` : 'none',
                      pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none',
                      transformOrigin: 'center center',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    {/* Background Architectural Image */}
                    <img
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
                        isCenter ? 'scale-105 filter brightness-[0.7] contrast-[1.08]' : 'scale-100 filter brightness-[0.5]'
                      }`}
                      loading="lazy"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/50 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="relative z-20 p-5 sm:p-6 h-full flex flex-col justify-between text-[#EDE8DF]">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-light text-[#C5A880]">
                          0{sIndex + 1}
                        </span>
                        <span className="rounded-full bg-[#161D18]/80 backdrop-blur-md px-2 py-0.5 font-sans text-[8px] font-bold tracking-widest text-[#EDE8DF] uppercase border border-[#EDE8DF]/15">
                          {service.categoryGroup}
                        </span>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2.5">
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDE8DF]">
                          {service.title}
                        </h3>
                        <p className="font-sans text-[11px] text-[#EDE8DF]/85 leading-relaxed font-light">
                          {service.shortDesc}
                        </p>
                        {isCenter && (
                          <div className="pt-2 border-t border-[#EDE8DF]/20 flex items-center justify-between">
                            <span className="font-sans text-[9px] text-[#C5A880] uppercase tracking-widest font-semibold">
                              {service.typicalDuration}
                            </span>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center space-x-1 font-sans text-[9px] font-bold tracking-wider uppercase text-[#C5A880] hover:text-[#EDE8DF]"
                            >
                              <span>Explore</span>
                              <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. CAROUSEL ARROW CONTROLS */}
          <div className="relative z-50 flex items-center justify-center space-x-6 pb-1 pt-1 lg:pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="relative z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#EDE8DF]/20 bg-[#161D18] text-[#EDE8DF] transition-all duration-300 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#161D18] active:scale-95 focus:outline-hidden shadow-md cursor-pointer"
              aria-label="Previous Service"
              data-cursor="hover"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 pointer-events-none" />
            </button>

            <span className="font-sans text-xs font-semibold tracking-widest text-[#8E877D] uppercase select-none">
              0{activeFocusIndex + 1} / 0{totalServices}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="relative z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#EDE8DF]/20 bg-[#161D18] text-[#EDE8DF] transition-all duration-300 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#161D18] active:scale-95 focus:outline-hidden shadow-md cursor-pointer"
              aria-label="Next Service"
              data-cursor="hover"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 pointer-events-none" />
            </button>
          </div>
        </div>

        {/* 2. HOW WE DO Process Section (Deliberate External Section Breathing Gap) */}
        <div className="pt-16 sm:pt-20 lg:pt-16 border-t border-[#EDE8DF]/15 mt-16 sm:mt-20 lg:mt-16 space-y-6 lg:space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="font-sans text-[10px] lg:text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                HOW WE DO
              </span>
              <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#EDE8DF] leading-tight">
                A clear process. Beautiful results.
              </h3>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center space-x-2 font-sans text-xs lg:text-xs font-bold tracking-widest uppercase text-[#C5A880] hover:text-[#EDE8DF] transition-colors pb-0.5"
            >
              <span>Explore Full 5-Stage Process</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Process Strip Grid: 2x2 Mobile / 4-Col Desktop Editorial Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {compactProcessSteps.map((step) => (
              <div
                key={step.number}
                className="group relative p-4 sm:p-6 lg:p-7 rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/10 space-y-2 sm:space-y-3 lg:space-y-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hover:-translate-y-1.5 lg:hover:scale-[1.015] lg:hover:border-[#C5A880]/50 lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:hover:bg-[#1E2721] flex flex-col justify-between transform-gpu"
              >
                <div className="space-y-2 lg:space-y-3">
                  {/* Header Row: Index Marker + Title + Subtle Checkmark */}
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#EDE8DF]/10 lg:border-b-0 pb-2 sm:pb-2.5 lg:pb-0">
                    <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-3">
                      {/* Index Marker */}
                      <span className="font-sans text-xs lg:text-sm font-bold tracking-[0.2em] text-[#C5A880] uppercase opacity-90">
                        {step.number}
                      </span>
                      {/* Stage Title */}
                      <h4 className="font-serif text-base sm:text-xl lg:text-3xl font-normal text-[#EDE8DF] tracking-tight group-hover:text-[#EDE8DF] transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C5A880]/70 flex-shrink-0 self-start lg:self-center transition-opacity opacity-75 group-hover:opacity-100" />
                  </div>

                  {/* Primary Short Overview */}
                  <p className="font-sans text-[11px] sm:text-xs lg:text-sm text-[#8E877D] lg:text-[#C5A880]/90 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Supporting Architectural Scope Details */}
                <p className="font-sans text-[10px] sm:text-[11px] lg:text-xs text-[#EDE8DF]/80 lg:text-[#EDE8DF]/70 leading-relaxed font-light pt-1.5 sm:pt-2 lg:pt-0 border-t border-[#EDE8DF]/10 lg:border-t-0">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
