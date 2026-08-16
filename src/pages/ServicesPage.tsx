import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /SERVICES
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#121212]">
          Services Explorer
        </h1>
        <p className="font-sans text-base text-[#8C8275] max-w-xl">
          One home. Many ways to transform it. Explore our 7 core residential service disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="group rounded-2xl border border-[#121212]/10 bg-[#F9F8F6] p-8 transition-all hover:border-[#121212] hover:shadow-md"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold tracking-widest text-[#C5A880] uppercase">
                {service.categoryGroup}
              </span>
              <ArrowUpRight className="h-4 w-4 text-[#8C8275] group-hover:text-[#121212]" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-medium text-[#121212] group-hover:text-[#8C8275] transition-colors">
              {service.title}
            </h2>
            <p className="mt-2 font-sans text-xs text-[#8C8275] leading-relaxed">
              {service.shortDesc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
