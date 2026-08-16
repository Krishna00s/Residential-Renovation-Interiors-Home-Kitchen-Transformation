import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const InteractiveServiceExplorer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current || !stickyRef.current) return;

      const totalServices = SERVICES.length;

      // Responsive scroll scrub duration for fluid wheel progress
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalServices * 50}%`,
        pin: stickyRef.current,
        scrub: 0.4,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.min(
            totalServices - 1,
            Math.floor(self.progress * totalServices)
          );
          setActiveIndex(index);
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  const activeService = SERVICES[activeIndex];

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-8 bg-[#161D18] text-[#EDE8DF]">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">OUR CAPABILITIES</span>
          <h2 className="font-serif text-3xl font-medium text-[#EDE8DF]">Residential Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.id} className="p-6 rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/10 space-y-3">
              <span className="font-sans text-xs text-[#C5A880] font-bold uppercase">{s.categoryGroup}</span>
              <h3 className="font-serif text-2xl font-medium text-[#EDE8DF]">{s.title}</h3>
              <p className="font-sans text-xs text-[#8E877D]">{s.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full bg-[#161D18] text-[#EDE8DF]">
      {/* Sticky Main Frame with Top Clearance for Navbar */}
      <div
        ref={stickyRef}
        className="relative h-screen w-full flex flex-col justify-between p-6 md:p-10 pt-28 overflow-hidden"
      >
        {/* Header Label */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#EDE8DF]/15 pb-4">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              CAPABILITIES EXPLORER
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#EDE8DF]">
              Residential Services
            </h2>
          </div>
          <span className="font-sans text-xs text-[#8E877D] tracking-widest uppercase">
            0{activeIndex + 1} / 07
          </span>
        </div>

        {/* Center Split Screen Layout: Left Service Menu & Right Card Composition */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-stretch">
          {/* Left Service Menu List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
            {SERVICES.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left py-3.5 px-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1B231D] text-[#EDE8DF] border border-[#C5A880]/40 shadow-xl translate-x-2'
                      : 'hover:bg-[#1B231D]/50 text-[#8E877D]'
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-serif text-xs ${isActive ? 'text-[#C5A880]' : 'text-[#8E877D]'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-serif text-lg md:text-xl ${isActive ? 'font-medium text-[#EDE8DF]' : 'font-normal'}`}>
                      {service.title}
                    </span>
                  </div>
                  <span className={`font-sans text-[9px] font-bold tracking-widest uppercase ${isActive ? 'text-[#C5A880]' : 'opacity-0'}`}>
                    {service.categoryGroup}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Service Card Composition */}
          <div className="lg:col-span-7 relative min-h-[480px] rounded-2xl overflow-hidden border border-[#EDE8DF]/15 bg-[#1B231D] text-[#EDE8DF] shadow-2xl flex flex-col justify-between p-8 md:p-10">
            {/* Background Photography Crossfade */}
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  activeIndex === idx ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  className="h-full w-full object-cover filter brightness-[0.65] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161D18] via-[#161D18]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#161D18]/85 via-transparent to-transparent" />
              </div>
            ))}

            {/* TOP: Service Badge + Duration */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="rounded-full bg-[#C5A880] px-3.5 py-1 font-sans text-[10px] font-bold tracking-widest text-[#161D18] uppercase shadow-sm">
                {activeService.categoryGroup}
              </span>
              <span className="font-sans text-[11px] text-[#EDE8DF]/90 tracking-wider uppercase font-semibold bg-[#161D18]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#EDE8DF]/10">
                TYPICAL DURATION: {activeService.typicalDuration}
              </span>
            </div>

            {/* MIDDLE: Large Service Title + Explanatory Paragraph */}
            <div className="relative z-20 space-y-3 my-auto py-4">
              <h3 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF] drop-shadow-md">
                {activeService.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#EDE8DF]/90 leading-relaxed max-w-lg font-light drop-shadow-xs">
                {activeService.longDesc}
              </p>
            </div>

            {/* BOTTOM AREA (Two-Column Layout): Left Column (3 Benefits Stacked Vertically) | Right Column (CTA Button) */}
            <div className="relative z-20 pt-6 border-t border-[#EDE8DF]/20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: 3 Benefits Stacked Vertically */}
              <div className="md:col-span-7 space-y-2.5">
                {activeService.scope.slice(0, 3).map((sc, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2.5 font-sans text-xs text-[#EDE8DF]/90">
                    <Check className="h-4 w-4 text-[#C5A880] flex-shrink-0" />
                    <span className="truncate font-medium">{sc}</span>
                  </div>
                ))}
              </div>

              {/* Right Column: VIEW SERVICE DETAIL Button */}
              <div className="md:col-span-5 flex md:justify-end">
                <Link
                  to={`/services/${activeService.slug}`}
                  className="inline-flex items-center justify-center space-x-2 rounded-full bg-[#C5A880] px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] shadow-lg w-full md:w-auto"
                  data-cursor="hover"
                  data-cursor-text="VIEW"
                >
                  <span>View Service Detail</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="relative z-10 h-1 w-full bg-[#EDE8DF]/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C5A880] transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / SERVICES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveServiceExplorer;
