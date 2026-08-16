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

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalServices * 70}%`,
        pin: stickyRef.current,
        scrub: 0.5,
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
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-8">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">OUR CAPABILITIES</span>
          <h2 className="font-serif text-3xl font-medium text-[#121212]">Residential Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.id} className="p-6 rounded-2xl bg-[#F9F8F6] border border-[#121212]/10 space-y-3">
              <span className="font-sans text-xs text-[#C5A880] font-bold uppercase">{s.categoryGroup}</span>
              <h3 className="font-serif text-2xl font-medium text-[#121212]">{s.title}</h3>
              <p className="font-sans text-xs text-[#8C8275]">{s.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full bg-[#F9F8F6]">
      {/* Sticky Main Frame */}
      <div
        ref={stickyRef}
        className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden"
      >
        {/* Header Label */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#121212]/10 pb-4">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              CAPABILITIES EXPLORER
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#121212]">
              Residential Services
            </h2>
          </div>
          <span className="font-sans text-xs text-[#8C8275] tracking-widest uppercase">
            0{activeIndex + 1} / 07
          </span>
        </div>

        {/* Center Split Screen Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto items-center">
          {/* Left Service Menu List */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#121212] text-[#F9F8F6] shadow-md translate-x-2'
                      : 'hover:bg-[#EAE6E1]/50 text-[#8C8275]'
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-serif text-sm ${isActive ? 'text-[#C5A880]' : 'text-[#8C8275]'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-serif text-xl ${isActive ? 'font-medium text-[#F9F8F6]' : 'font-normal'}`}>
                      {service.title}
                    </span>
                  </div>
                  <span className={`font-sans text-[10px] font-bold tracking-widest uppercase ${isActive ? 'text-[#C5A880]' : 'opacity-0'}`}>
                    {service.categoryGroup}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Service Display Card */}
          <div className="lg:col-span-7 relative h-[55vh] min-h-[400px] rounded-2xl overflow-hidden border border-[#121212]/10 bg-[#121212] text-[#F9F8F6] shadow-xl">
            {/* Background Image Environment with Crossfade */}
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  activeIndex === idx ? 'opacity-50 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  className="h-full w-full object-cover filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
              </div>
            ))}

            {/* Active Content Overlay */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#C5A880] px-3.5 py-1 font-sans text-[10px] font-bold tracking-widest text-[#121212] uppercase">
                  {activeService.categoryGroup}
                </span>
                <span className="font-sans text-xs text-[#8C8275] tracking-wider uppercase">
                  TYPICAL DURATION: {activeService.typicalDuration}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-[#F9F8F6]">
                  {activeService.title}
                </h3>
                <p className="font-sans text-sm text-[#F9F8F6]/80 leading-relaxed max-w-lg">
                  {activeService.longDesc}
                </p>

                {/* Key Scope Preview */}
                <div className="space-y-2 pt-2">
                  {activeService.scope.slice(0, 3).map((sc, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 font-sans text-xs text-[#8C8275]">
                      <Check className="h-3.5 w-3.5 text-[#C5A880]" />
                      <span>{sc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={`/services/${activeService.slug}`}
                    className="inline-flex items-center space-x-2 rounded-full bg-[#F9F8F6] px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-[#121212] transition-colors hover:bg-[#C5A880]"
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
        </div>

        {/* Bottom Progress Bar */}
        <div className="relative z-10 h-1 w-full bg-[#121212]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#121212] transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / SERVICES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveServiceExplorer;
