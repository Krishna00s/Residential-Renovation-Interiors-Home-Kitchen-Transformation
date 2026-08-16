import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const InteractiveServiceExplorer: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default focus on first service
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle mobile scroll snap focus update
  const handleMobileScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.85;
    const newIndex = Math.min(
      SERVICES.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setMobileActiveIndex(newIndex);
  };

  return (
    <section className="relative w-full bg-[#161D18] text-[#EDE8DF] py-20 md:py-28 px-6 md:px-12 border-b border-[#EDE8DF]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EDE8DF]/15 pb-6">
          <div className="space-y-2">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              CAPABILITIES EXPLORER
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
              Residential Services
            </h2>
          </div>
          <p className="font-sans text-xs text-[#8E877D] max-w-md leading-relaxed hidden md:block">
            Hover over any architectural discipline below to focus details, scope, and spatial capabilities.
          </p>
        </div>

        {/* Desktop Architectural Diagonal-Card Composition (hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-3 items-stretch min-h-[540px] pt-4 pb-2">
          {SERVICES.map((service, idx) => {
            const isFocused = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;
            const isBlurred = isAnyHovered && !isFocused;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(idx)} // keep focused index active
                className={`relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${
                  isFocused
                    ? 'lg:col-span-3 z-30 scale-105 border-[#C5A880] shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                    : isBlurred
                    ? 'lg:col-span-1 z-10 scale-[0.97] opacity-60 filter blur-[1.5px] border-[#EDE8DF]/10'
                    : 'lg:col-span-1 z-20 opacity-85 border-[#EDE8DF]/15'
                }`}
                style={{
                  clipPath: prefersReducedMotion
                    ? 'none'
                    : 'polygon(0 0, 100% 0, 94% 100%, 0% 100%)',
                }}
              >
                {/* Background Architectural Imagery */}
                <img
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                    isFocused ? 'scale-110 filter brightness-[0.75] contrast-[1.1]' : 'scale-100 filter brightness-[0.5]'
                  }`}
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/60 to-transparent" />

                {/* Focused Card Expanded View */}
                {isFocused ? (
                  <div className="relative z-20 p-8 h-full flex flex-col justify-between text-[#EDE8DF] space-y-6">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-light text-[#C5A880]">
                        0{idx + 1}
                      </span>
                      <span className="rounded-full bg-[#C5A880] px-3 py-1 font-sans text-[10px] font-bold tracking-widest text-[#161D18] uppercase">
                        {service.categoryGroup}
                      </span>
                    </div>

                    {/* Middle Title & Description */}
                    <div className="space-y-3 my-auto">
                      <h3 className="font-serif text-3xl md:text-4xl font-normal text-[#EDE8DF]">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs text-[#EDE8DF]/90 leading-relaxed font-light line-clamp-3">
                        {service.longDesc}
                      </p>
                    </div>

                    {/* Bottom Scope & CTA */}
                    <div className="space-y-4 pt-4 border-t border-[#EDE8DF]/20">
                      <div className="space-y-1.5">
                        {service.scope.slice(0, 3).map((item, sIdx) => (
                          <div key={sIdx} className="flex items-center space-x-2 font-sans text-[11px] text-[#EDE8DF]/85">
                            <Check className="h-3.5 w-3.5 text-[#C5A880] flex-shrink-0" />
                            <span className="truncate font-light">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center space-x-2 rounded-full bg-[#C5A880] px-5 py-2.5 font-sans text-[11px] font-bold tracking-widest uppercase text-[#161D18] transition-all hover:bg-[#EDE8DF]"
                        >
                          <span>Explore Service</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Non-Focused Compact Strip View */
                  <div className="relative z-20 p-6 h-full flex flex-col justify-between text-[#EDE8DF]">
                    <span className="font-serif text-xl font-light text-[#C5A880]">
                      0{idx + 1}
                    </span>
                    <div className="rotate-0 lg:-rotate-90 origin-bottom-left whitespace-nowrap pt-8">
                      <h3 className="font-serif text-lg font-normal tracking-wide text-[#EDE8DF]/90">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Touch-Friendly Swipe Carousel (< 1024px) */}
        <div className="lg:hidden space-y-6">
          <div
            ref={scrollContainerRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none"
          >
            {SERVICES.map((service, idx) => {
              const isActive = mobileActiveIndex === idx;
              return (
                <div
                  key={service.id}
                  className={`snap-center flex-shrink-0 w-[85vw] max-w-[340px] rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? 'border-[#C5A880] shadow-xl bg-[#1B231D]'
                      : 'border-[#EDE8DF]/10 bg-[#161D18] opacity-75'
                  }`}
                >
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B231D] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 font-serif text-xl font-light text-[#C5A880] bg-[#161D18]/80 px-3 py-1 rounded-full text-xs">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="font-sans text-[10px] font-bold text-[#C5A880] uppercase tracking-widest">
                      {service.categoryGroup}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#EDE8DF]">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-[#8E877D] line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="pt-3 border-t border-[#EDE8DF]/10">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center space-x-2 font-sans text-xs font-bold text-[#C5A880] uppercase tracking-wider"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Step Indicator Dots */}
          <div className="flex justify-center items-center space-x-2 pt-2">
            {SERVICES.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  mobileActiveIndex === idx ? 'w-6 bg-[#C5A880]' : 'w-1.5 bg-[#EDE8DF]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServiceExplorer;
