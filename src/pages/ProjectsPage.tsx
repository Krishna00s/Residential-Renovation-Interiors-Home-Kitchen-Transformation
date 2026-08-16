import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Home Renovation', 'Kitchen Renovation', 'Home Extension', 'Attic / Loft Conversion', 'Bathroom Renovation'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8 py-12 space-y-10 bg-[#161D18] text-[#EDE8DF]">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          PORTFOLIO
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
          Selected Work
        </h1>
        <p className="font-sans text-sm text-[#8E877D] font-light leading-relaxed">
          Proof of quality across residential renovations, extensions, kitchens, and interior transformations in Dublin.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 pt-2 border-t border-[#EDE8DF]/15">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-1.5 font-sans text-[11px] font-semibold tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#C5A880] text-[#161D18]'
                : 'bg-[#1B231D] text-[#8E877D] border border-[#EDE8DF]/10 hover:bg-[#EDE8DF] hover:text-[#161D18]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid Container — Internal Cards with Smooth Hover Pop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group relative rounded-xl border border-[#EDE8DF]/12 bg-[#1B231D] p-6 md:p-7 space-y-3.5 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-[#C5A880] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu z-10 hover:z-20"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <div className="flex items-center justify-between text-[11px] font-sans text-[#8E877D]">
              <span className="font-bold text-[#C5A880] tracking-widest uppercase">{project.category}</span>
              <span>{project.location} • {project.year}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#EDE8DF] group-hover:text-[#C5A880] transition-colors">
              {project.title}
            </h2>
            <p className="font-sans text-xs text-[#8E877D] leading-relaxed font-light line-clamp-2">
              {project.subtitle}
            </p>
            <div className="pt-2 flex items-center space-x-2 font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
