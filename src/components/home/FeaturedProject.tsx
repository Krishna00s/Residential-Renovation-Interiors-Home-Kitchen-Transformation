import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export const FeaturedProject: React.FC = () => {
  const featured = PROJECTS[0]; // The Oak House

  return (
    <section className="bg-[#161D18] text-[#EDE8DF] py-24 px-6 md:px-12 border-b border-[#EDE8DF]/10">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EDE8DF]/10 pb-8">
          <div className="space-y-2">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              FEATURED CASE STUDY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
              Architectural Transformation
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold tracking-widest uppercase text-[#EDE8DF] hover:text-[#C5A880] transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Large Photography Spread */}
          <Link
            to={`/projects/${featured.slug}`}
            className="lg:col-span-7 group relative block overflow-hidden rounded-2xl bg-[#1F2721] h-[450px] md:h-[580px] border border-[#EDE8DF]/15 shadow-2xl"
            data-cursor="hover"
            data-cursor-text="CASE STUDY"
          >
            <img
              src={featured.heroImage.src}
              alt={featured.heroImage.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161D18]/85 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center justify-between text-[#EDE8DF]">
              <span className="rounded-full bg-[#161D18]/80 backdrop-blur-md px-4 py-1.5 font-sans text-xs font-bold tracking-widest uppercase border border-[#EDE8DF]/15">
                {featured.category}
              </span>
              <span className="font-sans text-xs text-[#8E877D] uppercase">{featured.location}</span>
            </div>
          </Link>

          {/* Right Project Brief & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs text-[#8E877D] uppercase tracking-wider">
                COMPLETED {featured.year} • {featured.duration}
              </span>
              <h3 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-[#EDE8DF]">
                {featured.title}
              </h3>
              <p className="font-sans text-base text-[#EDE8DF]/85 leading-relaxed font-light">
                {featured.description}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-b border-[#EDE8DF]/15 py-6">
              {featured.stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-sans text-[10px] text-[#8E877D] uppercase tracking-widest">{st.label}</span>
                  <p className="font-serif text-xl font-semibold text-[#EDE8DF]">{st.value}</p>
                </div>
              ))}
            </div>

            <div>
              <Link
                to={`/projects/${featured.slug}`}
                className="inline-flex items-center space-x-3 rounded-full bg-[#C5A880] px-7 py-4 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] shadow-lg"
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
