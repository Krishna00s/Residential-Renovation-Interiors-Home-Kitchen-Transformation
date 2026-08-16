import React from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/company';

export const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /ABOUT
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#121212]">
          About {COMPANY_INFO.name}
        </h1>
        <p className="font-sans text-base text-[#8C8275] max-w-2xl leading-relaxed">
          {COMPANY_INFO.heroStatement}
        </p>
      </div>

      <div className="rounded-2xl border border-[#121212]/10 bg-[#EAE6E1]/40 p-8 space-y-6">
        <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
          OUR CORE PRINCIPLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-[#121212]">
          <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#121212]/5">
            <h3 className="font-serif text-lg font-medium text-[#121212]">Listen First</h3>
            <p className="mt-1 text-xs text-[#8C8275]">Understand how the client actually lives before designing.</p>
          </div>
          <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#121212]/5">
            <h3 className="font-serif text-lg font-medium text-[#121212]">Design With Purpose</h3>
            <p className="mt-1 text-xs text-[#8C8275]">Every decision solves a real spatial or living requirement.</p>
          </div>
          <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#121212]/5">
            <h3 className="font-serif text-lg font-medium text-[#121212]">Build With Care</h3>
            <p className="mt-1 text-xs text-[#8C8275]">Good design only matters if executed with precision.</p>
          </div>
          <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#121212]/5">
            <h3 className="font-serif text-lg font-medium text-[#121212]">Communicate Clearly</h3>
            <p className="mt-1 text-xs text-[#8C8275]">Complete transparency throughout the renovation journey.</p>
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
            <div key={t.id} className="p-6 rounded-2xl bg-[#121212] text-[#F9F8F6] space-y-4">
              <p className="font-serif text-lg font-light italic">“{t.quote}”</p>
              <div className="font-sans text-xs text-[#8C8275]">
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
