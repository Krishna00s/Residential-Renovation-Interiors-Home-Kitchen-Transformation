import React from 'react';
import { COMPANY_INFO } from '../../data/company';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="relative bg-[#1F2721] text-[#EDE8DF] py-24 md:py-32 px-6 md:px-12 border-b border-[#EDE8DF]/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left Sub-Header & Badge */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug text-[#EDE8DF]">
              Good spaces start with good conversations.
            </h2>
          </div>

          {/* Right Large Editorial Paragraph */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-serif text-2xl md:text-4xl font-light leading-relaxed text-[#EDE8DF]">
              {COMPANY_INFO.heroStatement}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#EDE8DF]/10 font-sans text-xs md:text-sm text-[#8E877D] leading-relaxed">
              <p>
                From considered kitchen transformations to complete home renovations and carefully planned extensions, we bring architectural design and construction together under one roof.
              </p>
              <p>
                We prioritize proportion, natural daylight, continuous materials, and practical flow—creating homes that feel calm, cohesive, and built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
