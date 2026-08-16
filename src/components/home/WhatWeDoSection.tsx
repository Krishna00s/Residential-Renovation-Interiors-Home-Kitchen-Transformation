import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const WhatWeDoSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  // Active focus index for metadata display
  const activeFocusIndex = hoveredIndex !== null ? hoveredIndex : centerIndex;

  // Compact Process steps for lower section
  const compactProcessSteps = [
    { number: '01', title: 'Consultation', desc: 'Initial brief & spatial assessment' },
    { number: '02', title: 'Design', desc: 'Architectural plans & material selection' },
    { number: '03', title: 'Build', desc: 'Craftsmanship & project management' },
    { number: '04', title: 'Handover', desc: 'Quality inspection & final walk-through' },
  ];

  return (
    <section className="relative w-full bg-[#161D18] text-[#EDE8DF] py-20 md:py-24 px-6 md:px-12 border-b border-[#EDE8DF]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* 1. UPPER SECTION HEADER: WHAT WE DO */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="inline-block font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
            WHAT WE DO
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-[#EDE8DF]">
            Tailored renovation <br />
            solutions for every <br />
            <span className="italic text-[#C5A880]">home and lifestyle.</span>
          </h2>
        </div>

        {/* 2. PHYSICAL TILTED & SCALED INFINITE SERVICE-CARD CAROUSEL */}
        <div
          className="relative w-full py-6 flex justify-center items-center select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop 7 Persistent Service Cards positioned around centerIndex */}
          <div className="hidden lg:flex items-center justify-center min-h-[500px] w-full relative overflow-visible">
            {SERVICES.map((service, sIndex) => {
              // Calculate shortest signed distance/offset from centerIndex (-3 to +3)
              let offset = sIndex - centerIndex;
              if (offset > 3) offset -= totalServices;
              if (offset < -3) offset += totalServices;

              const isCenter = offset === 0;
              const isHovered = hoveredIndex === sIndex;
              const isFocused = isHovered || (hoveredIndex === null && isCenter);

              // Calculate 3D transforms based on relative offset from centerIndex
              let translateX: number;
              let rotate: number;
              let scale: number;
              let zIndex = 10;
              let opacity: number;
              let blurPx = 0;
              let borderColor = 'border-[#EDE8DF]/15';
              let shadowClass = 'shadow-xl';

              if (prefersReducedMotion) {
                translateX = offset * 340;
                rotate = 0;
                scale = isCenter ? 1.05 : 0.95;
                opacity = Math.abs(offset) <= 2 ? 1 : 0;
              } else if (offset === 0) {
                // CENTER CARD
                translateX = 0;
                rotate = 0;
                scale = 1.05;
                zIndex = 30;
                opacity = 1;
                blurPx = 0;
                borderColor = 'border-[#C5A880]/60';
                shadowClass = 'shadow-[0_25px_60px_rgba(0,0,0,0.7)]';
              } else if (offset === 1) {
                // IMMEDIATE RIGHT CARD
                translateX = 340;
                rotate = 4;
                scale = 0.93;
                zIndex = 20;
                opacity = 0.75;
                blurPx = 0.5;
              } else if (offset === -1) {
                // IMMEDIATE LEFT CARD
                translateX = -340;
                rotate = -4;
                scale = 0.93;
                zIndex = 20;
                opacity = 0.75;
                blurPx = 0.5;
              } else if (offset === 2) {
                // FAR RIGHT CARD
                translateX = 640;
                rotate = 8;
                scale = 0.82;
                zIndex = 10;
                opacity = 0.35;
                blurPx = 2;
              } else if (offset === -2) {
                // FAR LEFT CARD
                translateX = -640;
                rotate = -8;
                scale = 0.82;
                zIndex = 10;
                opacity = 0.35;
                blurPx = 2;
              } else {
                // HIDDEN OFF-SCREEN CARDS (offset >= 3 or <= -3)
                translateX = offset > 0 ? 940 : -940;
                rotate = offset > 0 ? 12 : -12;
                scale = 0.7;
                zIndex = 0;
                opacity = 0;
                blurPx = 4;
              }

              // Hover focus override on specific card
              if (isHovered) {
                rotate = 0;
                scale = 1.08;
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
                  className={`absolute w-[320px] h-[460px] rounded-2xl overflow-hidden cursor-pointer bg-[#1B231D] border ${borderColor} ${shadowClass} transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu`}
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
                  <div className="relative z-20 p-8 h-full flex flex-col justify-between text-[#EDE8DF]">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-light text-[#C5A880]">
                        0{sIndex + 1}
                      </span>
                      <span className="rounded-full bg-[#161D18]/80 backdrop-blur-md px-3 py-1 font-sans text-[10px] font-bold tracking-widest text-[#EDE8DF] uppercase border border-[#EDE8DF]/15">
                        {service.categoryGroup}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#EDE8DF]">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs text-[#EDE8DF]/85 line-clamp-2 leading-relaxed font-light">
                        {service.shortDesc}
                      </p>

                      {isFocused && (
                        <div className="pt-3 border-t border-[#EDE8DF]/20 flex items-center justify-between transition-opacity duration-500">
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

          {/* Mobile Single-Card Swipe Layout (< 1024px) */}
          <div className="lg:hidden w-full flex flex-col items-center">
            {(() => {
              const activeService = SERVICES[centerIndex];
              return (
                <div className="relative w-full max-w-[340px] h-[440px] rounded-2xl overflow-hidden border border-[#C5A880]/60 bg-[#1B231D] shadow-2xl transition-all duration-500 ease-out">
                  <img
                    src={activeService.heroImage.src}
                    alt={activeService.heroImage.alt}
                    className="absolute inset-0 h-full w-full object-cover filter brightness-[0.65]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/50 to-transparent" />
                  <div className="relative z-20 p-8 h-full flex flex-col justify-between text-[#EDE8DF]">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-light text-[#C5A880]">
                        0{centerIndex + 1}
                      </span>
                      <span className="rounded-full bg-[#C5A880] px-3 py-1 font-sans text-[10px] font-bold tracking-widest text-[#161D18] uppercase">
                        {activeService.categoryGroup}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-3xl font-normal text-[#EDE8DF]">
                        {activeService.title}
                      </h3>
                      <p className="font-sans text-xs text-[#EDE8DF]/90 leading-relaxed font-light">
                        {activeService.longDesc}
                      </p>
                      <div className="pt-3 border-t border-[#EDE8DF]/20 flex items-center justify-between">
                        <span className="font-sans text-[10px] text-[#C5A880] uppercase tracking-widest font-semibold">
                          {activeService.typicalDuration}
                        </span>
                        <Link
                          to={`/services/${activeService.slug}`}
                          className="inline-flex items-center space-x-1 rounded-full bg-[#C5A880] px-4 py-2 font-sans text-xs font-bold uppercase text-[#161D18]"
                        >
                          <span>Explore</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* 3. CAROUSEL ARROW CONTROLS */}
        <div className="relative z-50 flex items-center justify-center space-x-6 pt-2">
          <button
            type="button"
            onClick={handlePrev}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#EDE8DF]/20 bg-[#161D18] text-[#EDE8DF] transition-all duration-300 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#161D18] active:scale-95 focus:outline-hidden shadow-md cursor-pointer"
            aria-label="Previous Service"
            data-cursor="hover"
          >
            <ArrowLeft className="h-5 w-5 pointer-events-none" />
          </button>

          <span className="font-sans text-xs font-semibold tracking-widest text-[#8E877D] uppercase select-none">
            0{activeFocusIndex + 1} / 0{totalServices}
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#EDE8DF]/20 bg-[#161D18] text-[#EDE8DF] transition-all duration-300 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#161D18] active:scale-95 focus:outline-hidden shadow-md cursor-pointer"
            aria-label="Next Service"
            data-cursor="hover"
          >
            <ArrowRight className="h-5 w-5 pointer-events-none" />
          </button>
        </div>

        {/* 4. COMPACT LOWER INTEGRATED "HOW WE DO" SECTION */}
        <div className="pt-16 border-t border-[#EDE8DF]/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                HOW WE DO
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#EDE8DF]">
                A clear process. Beautiful results.
              </h3>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center space-x-2 font-sans text-xs font-bold tracking-widest uppercase text-[#C5A880] hover:text-[#EDE8DF] transition-colors"
            >
              <span>Explore Full 5-Stage Process</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Compact 4-Stage Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compactProcessSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/10 space-y-2 hover:border-[#C5A880]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-semibold text-[#C5A880]">{step.number}</span>
                  <Check className="h-4 w-4 text-[#8E877D]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#EDE8DF]">{step.title}</h4>
                <p className="font-sans text-xs text-[#8E877D] leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
