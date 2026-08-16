import React from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/company';

export const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /ABOUT
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#EDE8DF]">
          About {COMPANY_INFO.name}
        </h1>
        <p className="font-sans text-base text-[#8E877D] max-w-2xl leading-relaxed">
          {COMPANY_INFO.heroStatement}
        </p>
      </div>

      <div className="rounded-2xl border border-[#EDE8DF]/15 bg-[#1B231D] p-8 space-y-6">
        <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
          OUR CORE PRINCIPLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-[#EDE8DF]">
          <div className="p-4 bg-[#161D18] rounded-xl border border-[#EDE8DF]/10">
            <h3 className="font-serif text-lg font-medium text-[#EDE8DF]">Listen First</h3>
            <p className="mt-1 text-xs text-[#8E877D]">Understand how the client actually lives before designing.</p>
          </div>
          <div className="p-4 bg-[#161D18] rounded-xl border border-[#EDE8DF]/10">
            <h3 className="font-serif text-lg font-medium text-[#EDE8DF]">Design With Purpose</h3>
            <p className="mt-1 text-xs text-[#8E877D]">Every decision solves a real spatial or living requirement.</p>
          </div>
          <div className="p-4 bg-[#161D18] rounded-xl border border-[#EDE8DF]/10">
            <h3 className="font-serif text-lg font-medium text-[#EDE8DF]">Build With Care</h3>
            <p className="mt-1 text-xs text-[#8E877D]">Good design only matters if executed with precision.</p>
          </div>
          <div className="p-4 bg-[#161D18] rounded-xl border border-[#EDE8DF]/10">
            <h3 className="font-serif text-lg font-medium text-[#EDE8DF]">Communicate Clearly</h3>
            <p className="mt-1 text-xs text-[#8E877D]">Complete transparency throughout the renovation journey.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
          CLIENT TESTIMONIALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl bg-[#1B231D] text-[#EDE8DF] space-y-4 border border-[#EDE8DF]/10">
              <p className="font-serif text-lg font-light italic">“{t.quote}”</p>
              <div className="font-sans text-xs text-[#8E877D]">
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
