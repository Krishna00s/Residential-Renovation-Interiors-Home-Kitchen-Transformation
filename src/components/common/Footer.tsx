import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#161D18] text-[#EDE8DF] pt-16 pb-10 overflow-hidden border-t border-[#EDE8DF]/10">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Upper Statement & CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#EDE8DF]/10">
          <div className="space-y-2 max-w-2xl">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              START A CONVERSATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-[#EDE8DF]">
              Let’s create a space <span className="italic text-[#C5A880]">you’ll love for years.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] focus:outline-hidden shadow-lg"
            data-cursor="hover"
            data-cursor-text="CONTACT"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Middle Sitemap & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-wider text-[#EDE8DF]">
                {COMPANY_INFO.name}
              </span>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#8E877D] mt-0.5">
                RENOVATION & ARCHITECTURE
              </p>
            </Link>
            <p className="font-sans text-xs text-[#8E877D] leading-relaxed max-w-xs">
              {COMPANY_INFO.subtitle}
            </p>
          </div>

          {/* Mobile 2-Column Row for Navigation & Services / Desktop Columns */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:contents lg:col-span-6">
            {/* Navigation Links */}
            <div className="space-y-3">
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
                NAVIGATION
              </h3>
              <ul className="space-y-2 font-sans text-xs font-medium text-[#8E877D]">
                <li>
                  <Link to="/" className="hover:text-[#EDE8DF] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#EDE8DF] transition-colors">Services Explorer</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-[#EDE8DF] transition-colors">Selected Work</Link>
                </li>
                <li>
                  <Link to="/process" className="hover:text-[#EDE8DF] transition-colors">Our Process</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#EDE8DF] transition-colors">About Studio</Link>
                </li>
                <li>
                  <Link to="/journal" className="hover:text-[#EDE8DF] transition-colors">Editorial Journal</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
                SERVICES
              </h3>
              <ul className="space-y-2 font-sans text-xs font-medium text-[#8E877D]">
                <li>
                  <Link to="/services/kitchen-renovations" className="hover:text-[#EDE8DF] transition-colors">Kitchen Renovations</Link>
                </li>
                <li>
                  <Link to="/services/bathroom-renovations" className="hover:text-[#EDE8DF] transition-colors">Bathroom Renovations</Link>
                </li>
                <li>
                  <Link to="/services/home-extensions" className="hover:text-[#EDE8DF] transition-colors">Home Extensions</Link>
                </li>
                <li>
                  <Link to="/services/attic-loft-conversions" className="hover:text-[#EDE8DF] transition-colors">Attic & Loft Conversions</Link>
                </li>
                <li>
                  <Link to="/services/full-home-renovations" className="hover:text-[#EDE8DF] transition-colors">Full Home Renovations</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
              STUDIO
            </h3>
            <div className="space-y-2 font-sans text-xs text-[#8E877D] leading-relaxed">
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.phone}</p>
              <p className="text-[#EDE8DF] underline decoration-[#C5A880]/50 underline-offset-4">{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#EDE8DF]/10 text-[11px] font-sans text-[#8E877D] space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} Renovations &amp; Architecture Ltd.</p>
          <div className="flex items-center space-x-4">
            <span>Dublin, Ireland</span>
            <span>•</span>
            <span>Commercial Demo Concept</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
