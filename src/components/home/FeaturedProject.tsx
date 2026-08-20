import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export const FeaturedProject: React.FC = () => {
  const featured = PROJECTS[0]; // The Oak House

  return (
    <section className="bg-[#161D18] text-[#EDE8DF] py-8 sm:py-16 lg:py-8 xl:py-10 px-4 sm:px-6 lg:px-12 border-b border-[#EDE8DF]/10 scroll-mt-24">
      <div className="mx-auto max-w-7xl space-y-4 sm:space-y-8 lg:space-y-5">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-6 border-b border-[#EDE8DF]/10 pb-3 sm:pb-5">
          <div className="space-y-1 sm:space-y-1.5">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A880] uppercase">
              FEATURED CASE STUDY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] font-normal text-[#EDE8DF]">
              Architectural Transformation
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold tracking-widest uppercase text-[#C5A880] hover:text-[#EDE8DF] transition-colors pb-0.5"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Large Photography Spread */}
          <Link
            to={`/projects/${featured.slug}`}
            className="lg:col-span-7 group relative block overflow-hidden rounded-2xl bg-[#1F2721] h-[280px] sm:h-[380px] lg:h-[350px] xl:h-[410px] border border-[#EDE8DF]/15 shadow-2xl"
            data-cursor="hover"
            data-cursor-text="CASE STUDY"
          >
            <img
              src={featured.heroImage.src}
              alt={featured.heroImage.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161D18]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 flex items-center justify-between text-[#EDE8DF]">
              <span className="rounded-full bg-[#161D18]/80 backdrop-blur-md px-3 sm:px-4 py-1 font-sans text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-[#EDE8DF]/15">
                {featured.category}
              </span>
              <span className="font-sans text-[10px] sm:text-xs text-[#8E877D] uppercase">{featured.location}</span>
            </div>
          </Link>

          {/* Right Project Brief & Specs (Deliberate Editorial Rhythm) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 pt-1 sm:pt-0">
            <div className="space-y-1.5 sm:space-y-3">
              <span className="font-sans text-[10px] sm:text-xs text-[#8E877D] uppercase tracking-widest">
                COMPLETED {featured.year} • {featured.duration}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-normal leading-tight text-[#EDE8DF] tracking-tight">
                {featured.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm xl:text-base text-[#EDE8DF]/85 leading-relaxed font-light pt-0.5 line-clamp-3 xl:line-clamp-none">
                {featured.description}
              </p>
            </div>

            {/* Architectural Project Specifications */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-b border-[#EDE8DF]/15 py-4 my-1 sm:my-2">
              {featured.stats.map((st, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="font-sans text-[9px] sm:text-[10px] text-[#8E877D] uppercase tracking-[0.2em] font-semibold">{st.label}</span>
                  <p className="font-serif text-base sm:text-xl xl:text-2xl font-medium text-[#C5A880]">{st.value}</p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-1 sm:pt-2">
              <Link
                to={`/projects/${featured.slug}`}
                className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-6 py-3.5 sm:px-7 sm:py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] shadow-lg"
                data-cursor="hover"
                data-cursor-text="READ"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
