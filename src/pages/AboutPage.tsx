import React from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/company';

export const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 py-12 space-y-10 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-3 max-w-2xl">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ABOUT STUDIO
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
          About {COMPANY_INFO.name}
        </h1>
        <p className="font-sans text-sm md:text-base text-[#8E877D] font-light leading-relaxed">
          {COMPANY_INFO.heroStatement}
        </p>
      </div>

      <div className="rounded-xl border border-[#EDE8DF]/12 bg-[#1B231D] p-6 md:p-7 space-y-5 shadow-md">
        <h2 className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">
          OUR CORE PRINCIPLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs text-[#EDE8DF]">
          <div className="p-4 bg-[#161D18] rounded-lg border border-[#EDE8DF]/10 transition-all duration-300 hover:border-[#C5A880] hover:-translate-y-0.5 hover:scale-[1.02]">
            <h3 className="font-serif text-base font-medium text-[#EDE8DF]">Listen First</h3>
            <p className="mt-1 text-xs text-[#8E877D] font-light">Understand how the client lives before designing.</p>
          </div>
          <div className="p-4 bg-[#161D18] rounded-lg border border-[#EDE8DF]/10 transition-all duration-300 hover:border-[#C5A880] hover:-translate-y-0.5 hover:scale-[1.02]">
            <h3 className="font-serif text-base font-medium text-[#EDE8DF]">Design With Purpose</h3>
            <p className="mt-1 text-xs text-[#8E877D] font-light">Every decision solves a real spatial requirement.</p>
          </div>
          <div className="p-4 bg-[#161D18] rounded-lg border border-[#EDE8DF]/10 transition-all duration-300 hover:border-[#C5A880] hover:-translate-y-0.5 hover:scale-[1.02]">
            <h3 className="font-serif text-base font-medium text-[#EDE8DF]">Build With Care</h3>
            <p className="mt-1 text-xs text-[#8E877D] font-light">Good design only matters if executed with precision.</p>
          </div>
          <div className="p-4 bg-[#161D18] rounded-lg border border-[#EDE8DF]/10 transition-all duration-300 hover:border-[#C5A880] hover:-translate-y-0.5 hover:scale-[1.02]">
            <h3 className="font-serif text-base font-medium text-[#EDE8DF]">Communicate Clearly</h3>
            <p className="mt-1 text-xs text-[#8E877D] font-light">Complete transparency throughout the renovation journey.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        <h2 className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">
          CLIENT TESTIMONIALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-5 rounded-xl bg-[#1B231D] text-[#EDE8DF] space-y-3 border border-[#EDE8DF]/10 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-[#C5A880] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu">
              <p className="font-serif text-sm md:text-base font-light italic leading-relaxed">“{t.quote}”</p>
              <div className="font-sans text-[11px] text-[#8E877D]">
                <span className="font-bold text-[#C5A880]">{t.author}</span> • {t.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
