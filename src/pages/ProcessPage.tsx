import React from 'react';
import { PROCESS_STAGES } from '../data/company';

export const ProcessPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /PROCESS
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#EDE8DF]">
          Our Process
        </h1>
        <p className="font-sans text-base text-[#8E877D] max-w-xl">
          From first consultation to final handover, we bring clarity, transparency, and detailed craftsmanship to every stage of your renovation.
        </p>
      </div>

      <div className="space-y-6">
        {PROCESS_STAGES.map((stage) => (
          <div
            key={stage.number}
            className="rounded-2xl border border-[#EDE8DF]/15 bg-[#1B231D] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-2">
              <span className="font-serif text-5xl font-semibold text-[#C5A880]">
                {stage.number}
              </span>
            </div>
            <div className="lg:col-span-10 space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#8E877D] uppercase">
                {stage.subtitle}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#EDE8DF]">
                {stage.title}
              </h2>
              <p className="font-sans text-sm text-[#8E877D]">
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
