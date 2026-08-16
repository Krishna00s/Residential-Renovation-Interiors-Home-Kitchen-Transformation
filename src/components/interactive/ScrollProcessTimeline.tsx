import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROCESS_STAGES } from '../../data/company';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ScrollProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [progressPct, setProgressPct] = useState<number>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current || !pinRef.current) return;

      const totalStages = PROCESS_STAGES.length;

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalStages * 80}%`,
        pin: pinRef.current,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setProgressPct(progress * 100);
          const index = Math.min(
            totalStages - 1,
            Math.floor(progress * totalStages)
          );
          setActiveStageIndex(index);
        },
      });

      return () => {
        st.kill();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  const activeStage = PROCESS_STAGES[activeStageIndex];

  // Mobile / Reduced Motion Alternative: Clean Stacked Flow
  if (prefersReducedMotion) {
    return (
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-8">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
            OUR METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#121212]">Five-Stage Renovation Journey</h2>
        </div>
        <div className="space-y-6">
          {PROCESS_STAGES.map((stg) => (
            <div key={stg.number} className="p-8 rounded-2xl bg-[#121212] text-[#F9F8F6] space-y-4">
              <span className="font-serif text-4xl text-[#C5A880]">{stg.number}</span>
              <h3 className="font-serif text-2xl font-medium">{stg.title}</h3>
              <p className="font-sans text-xs text-[#8C8275]">{stg.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="relative h-screen w-full bg-[#121212] text-[#F9F8F6] overflow-hidden flex flex-col justify-between p-6 md:p-12"
      >
        {/* Background Image Environment with Crossfade */}
        <div className="absolute inset-0 z-0">
          {PROCESS_STAGES.map((stg, idx) => (
            <div
              key={stg.number}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                activeStageIndex === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <img
                src={stg.image.src}
                alt={stg.image.alt}
                className="h-full w-full object-cover filter brightness-[0.7] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#F9F8F6]/15 pb-6">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              THE ARDAN PROCESS
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-normal text-[#F9F8F6]">
              From Concept to Handover
            </h2>
          </div>

          {/* Active Step Indicator */}
          <div className="flex items-center space-x-4">
            <span className="font-serif text-3xl font-semibold text-[#C5A880]">
              {activeStage.number}
            </span>
            <span className="font-sans text-xs text-[#8C8275] tracking-widest uppercase">
              / 05
            </span>
          </div>
        </div>

        {/* Center Story Content Area */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block rounded-full bg-[#C5A880]/20 px-3.5 py-1 font-sans text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase border border-[#C5A880]/30">
              STAGE {activeStage.number} — {activeStage.subtitle}
            </span>

            <h3 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-[#F9F8F6]">
              {activeStage.title}
            </h3>

            <p className="font-sans text-base md:text-xl text-[#F9F8F6]/80 max-w-xl leading-relaxed">
              {activeStage.description}
            </p>

            {/* Stage Detail Checklist */}
            <div className="space-y-3 pt-4">
              {activeStage.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-3 font-sans text-xs md:text-sm text-[#8C8275]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage List Navigation Bar */}
          <div className="lg:col-span-5 hidden lg:flex flex-col space-y-4 border-l border-[#F9F8F6]/15 pl-8">
            {PROCESS_STAGES.map((stg, idx) => (
              <div
                key={stg.number}
                className={`transition-all duration-300 ${
                  activeStageIndex === idx
                    ? 'text-[#F9F8F6] translate-x-2'
                    : 'text-[#8C8275]/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-serif text-sm font-semibold">{stg.number}</span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider">{stg.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Timeline Progress Bar */}
        <div className="relative z-10 pt-6">
          <div className="h-1 w-full bg-[#F9F8F6]/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C5A880] transition-all duration-150 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-3 text-[10px] font-sans text-[#8C8275] uppercase tracking-widest">
            <span>SCROLL TO PROGRESS THROUGH STAGES</span>
            <span>STAGE {activeStageIndex + 1} OF 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProcessTimeline;
