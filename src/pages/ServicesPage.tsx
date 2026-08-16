import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8 py-12 space-y-10 bg-[#161D18] text-[#EDE8DF]">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          DISCIPLINES
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
          Services Explorer
        </h1>
        <p className="font-sans text-sm text-[#8E877D] leading-relaxed font-light">
          One home. Many ways to transform it. Explore our 7 core residential service disciplines.
        </p>
      </div>

      {/* Services Cards Grid — Dedicated Internal Page Cards with Smooth Hover Pop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="group relative rounded-xl border border-[#EDE8DF]/12 bg-[#1B231D] p-6 space-y-4 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-[#C5A880] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu z-10 hover:z-20"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-[10px] font-bold tracking-widest text-[#C5A880] uppercase">
                {service.categoryGroup}
              </span>
              <ArrowUpRight className="h-4 w-4 text-[#8E877D] group-hover:text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-medium text-[#EDE8DF] group-hover:text-[#C5A880] transition-colors">
              {service.title}
            </h2>
            <p className="font-sans text-xs text-[#8E877D] leading-relaxed font-light line-clamp-3">
              {service.shortDesc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
