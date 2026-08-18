import React from 'react';
import { COMPANY_INFO } from '../../data/company';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="relative bg-[#1F2721] text-[#EDE8DF] py-10 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-[#EDE8DF]/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end">
          {/* Left Sub-Header & Badge */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-4">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A880] uppercase">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-[#EDE8DF]">
              Good spaces start with good conversations.
            </h2>
          </div>

          {/* Right Large Editorial Paragraph */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <p className="font-serif text-lg sm:text-2xl lg:text-4xl font-light italic leading-snug text-[#C5A880]/95">
              "{COMPANY_INFO.heroStatement}"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pt-4 sm:pt-6 border-t border-[#EDE8DF]/10 font-sans text-xs md:text-sm text-[#8E877D] leading-relaxed font-light">
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
