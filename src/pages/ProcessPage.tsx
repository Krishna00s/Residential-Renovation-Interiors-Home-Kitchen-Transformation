import React from 'react';
import { PROCESS_STAGES } from '../data/company';

export const ProcessPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8 py-12 space-y-8 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-3 max-w-2xl">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          METHODOLOGY
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
          Our Process
        </h1>
        <p className="font-sans text-sm text-[#8E877D] font-light leading-relaxed">
          From first consultation to final handover, we bring clarity, transparency, and detailed craftsmanship to every stage of your renovation.
        </p>
      </div>

      <div className="space-y-5">
        {PROCESS_STAGES.map((stage) => (
          <div
            key={stage.number}
            className="group relative rounded-xl border border-[#EDE8DF]/12 bg-[#1B231D] p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-md transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:scale-[1.02] hover:border-[#C5A880] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu z-10 hover:z-20"
          >
            <div className="lg:col-span-2">
              <span className="font-serif text-4xl font-semibold text-[#C5A880]">
                {stage.number}
              </span>
            </div>
            <div className="lg:col-span-10 space-y-1.5">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#8E877D] uppercase">
                {stage.subtitle}
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-medium text-[#EDE8DF]">
                {stage.title}
              </h2>
              <p className="font-sans text-xs text-[#8E877D] font-light leading-relaxed">
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
