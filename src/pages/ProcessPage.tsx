import React from 'react';
import { PROCESS_STAGES } from '../data/company';

export const ProcessPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /PROCESS
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#121212]">
          Our Process
        </h1>
        <p className="font-sans text-base text-[#8C8275] max-w-xl">
          From first consultation to final handover, we bring clarity, transparency, and detailed craftsmanship to every stage of your renovation.
        </p>
      </div>

      <div className="space-y-6">
        {PROCESS_STAGES.map((stage) => (
          <div
            key={stage.number}
            className="rounded-2xl border border-[#121212]/10 bg-[#F9F8F6] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-2">
              <span className="font-serif text-5xl font-semibold text-[#C5A880]">
                {stage.number}
              </span>
            </div>
            <div className="lg:col-span-10 space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#8C8275] uppercase">
                {stage.subtitle}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#121212]">
                {stage.title}
              </h2>
              <p className="font-sans text-sm text-[#8C8275]">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPage;
