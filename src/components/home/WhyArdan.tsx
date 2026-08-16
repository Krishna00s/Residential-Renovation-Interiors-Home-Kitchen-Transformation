import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { COMPANY_INFO } from '../../data/company';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const WhyArdan: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const proofPoints = [
    {
      number: '01',
      title: 'Design & Build Under One Roof',
      desc: 'We integrate architectural design thinking directly with construction management, eliminating miscommunication between architects and trades.',
    },
    {
      number: '02',
      title: 'Material Honesty & Tactility',
      desc: 'We specify natural stone, continuous timber joinery, and durable finishes that age gracefully with family living.',
    },
    {
      number: '03',
      title: 'Transparent Budgeting & Scope',
      desc: 'Every itemized milestone is agreed before construction starts, ensuring complete budget clarity from day one.',
    },
    {
      number: '04',
      title: 'Respect For Existing Architecture',
      desc: 'Whether working on Victorian period homes or modern structures, new additions are designed to feel connected to the original house.',
    },
  ];

  // GSAP ScrollTrigger Sequential Reveal Scrub
  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current || cardsRef.current.length === 0) return;

      const cards = cardsRef.current;

      const anim = gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.25,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        }
      );

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={containerRef} className="bg-[#1F2721] text-[#EDE8DF] py-24 px-6 md:px-12 border-b border-[#EDE8DF]/10">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-5 space-y-2">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              WHY CLIENTS CHOOSE US
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
              Thoughtful Execution. <br />
              <span className="italic text-[#8E877D]">Uncompromised Craft.</span>
            </h2>
          </div>
          <p className="lg:col-span-7 font-sans text-sm md:text-base text-[#8E877D] max-w-xl leading-relaxed font-light">
            Renovating a home is a major life decision. We structure our approach to bring calm confidence, architectural rigor, and clear communication to every project across {COMPANY_INFO.location}.
          </p>
        </div>

        {/* 4 Sequential Reveal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofPoints.map((point, idx) => (
            <div
              key={point.number}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="p-8 rounded-2xl bg-[#161D18] border border-[#EDE8DF]/10 space-y-4 shadow-xl transition-colors hover:border-[#C5A880]/40"
            >
              <span className="font-serif text-3xl font-semibold text-[#C5A880]">{point.number}</span>
              <h3 className="font-serif text-xl font-medium text-[#EDE8DF]">{point.title}</h3>
              <p className="font-sans text-xs text-[#8E877D] leading-relaxed font-light">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyArdan;
