import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const HomeCta: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1F2721] via-[#1A221C] to-[#161D18] text-[#EDE8DF] py-24 md:py-32 px-6 md:px-12 border-b border-[#EDE8DF]/10">
      <div className="mx-auto max-w-7xl text-center space-y-8">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          BEGIN YOUR JOURNEY
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-[#EDE8DF] max-w-4xl mx-auto">
          Let’s create a space <br />
          <span className="italic text-[#C5A880]">you’ll love for years.</span>
        </h2>

        <p className="font-sans text-base md:text-lg text-[#8E877D] max-w-xl mx-auto leading-relaxed font-light">
          Whether you are planning a single-room transformation or rethinking the whole house, start with a conversation.
        </p>

        <div className="pt-6">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] shadow-2xl transition-all duration-300 hover:bg-[#EDE8DF] focus:outline-hidden"
            data-cursor="hover"
            data-cursor-text="CONTACT"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 text-xs font-sans text-[#8E877D]">
          <span>{COMPANY_INFO.location}</span> • <span>{COMPANY_INFO.phone}</span>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
