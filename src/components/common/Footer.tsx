import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#121212] text-[#F9F8F6] pt-24 pb-12 overflow-hidden border-t border-[#121212]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1918] to-[#121212] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Upper Editorial Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[#F9F8F6]/10">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              START A CONVERSATION
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#F9F8F6]">
              Let’s create a space <br className="hidden md:inline" />
              <span className="italic text-[#C5A880]">you’ll love for years.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end space-y-6">
            <p className="font-sans text-sm text-[#8C8275] max-w-xs leading-relaxed">
              Whether you are planning a single-room transformation or rethinking the whole house, start with a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-7 py-4 font-sans text-xs font-bold tracking-widest uppercase text-[#121212] transition-all duration-300 hover:bg-[#F9F8F6] focus:outline-hidden"
              data-cursor="hover"
              data-cursor-text="CONTACT"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Middle Sitemap & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-wider text-[#F9F8F6]">
                {COMPANY_INFO.name}
              </span>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8C8275] mt-0.5">
                RENOVATION & ARCHITECTURE
              </p>
            </Link>
            <p className="font-sans text-xs text-[#8C8275] leading-relaxed max-w-xs">
              {COMPANY_INFO.subtitle}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 font-sans text-xs font-medium text-[#8C8275]">
              <li>
                <Link to="/" className="hover:text-[#F9F8F6] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F9F8F6] transition-colors">Services Explorer</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F9F8F6] transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#F9F8F6] transition-colors">Our Process</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F9F8F6] transition-colors">About Studio</Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-[#F9F8F6] transition-colors">Editorial Journal</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F9F8F6] transition-colors">Get a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
              SERVICES
            </h3>
            <ul className="space-y-2.5 font-sans text-xs font-medium text-[#8C8275]">
              <li>
                <Link to="/services/kitchen-renovations" className="hover:text-[#F9F8F6] transition-colors">Kitchen Renovations</Link>
              </li>
              <li>
                <Link to="/services/bathroom-renovations" className="hover:text-[#F9F8F6] transition-colors">Bathroom Renovations</Link>
              </li>
              <li>
                <Link to="/services/home-extensions" className="hover:text-[#F9F8F6] transition-colors">Home Extensions</Link>
              </li>
              <li>
                <Link to="/services/attic-loft-conversions" className="hover:text-[#F9F8F6] transition-colors">Attic & Loft Conversions</Link>
              </li>
              <li>
                <Link to="/services/full-home-renovations" className="hover:text-[#F9F8F6] transition-colors">Full Home Renovations</Link>
              </li>
              <li>
                <Link to="/services/energy-upgrades" className="hover:text-[#F9F8F6] transition-colors">Energy Upgrades</Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880]">
              STUDIO
            </h3>
            <div className="space-y-2.5 font-sans text-xs text-[#8C8275] leading-relaxed">
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.phone}</p>
              <p className="text-[#F9F8F6] underline decoration-[#C5A880]/50 underline-offset-4">{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-[#F9F8F6]/10 text-[11px] font-sans text-[#8C8275] space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} Renovations &amp; Architecture Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
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
