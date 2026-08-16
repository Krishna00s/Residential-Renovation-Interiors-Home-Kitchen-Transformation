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
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /PROJECTS
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#EDE8DF]">
          Selected Work
        </h1>
        <p className="font-sans text-base text-[#8E877D] max-w-xl">
          Proof of quality across residential renovations, extensions, kitchens, and interior transformations in Dublin.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-[#EDE8DF]/15">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-5 py-2 font-sans text-xs font-semibold tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#C5A880] text-[#161D18]'
                : 'bg-[#1B231D] text-[#8E877D] border border-[#EDE8DF]/10 hover:bg-[#EDE8DF] hover:text-[#161D18]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group rounded-2xl border border-[#EDE8DF]/15 bg-[#1B231D] p-8 space-y-4 transition-all hover:border-[#C5A880]"
            data-cursor="hover"
            data-cursor-text="VIEW"
          >
            <div className="flex items-center justify-between text-xs font-sans text-[#8E877D]">
              <span className="font-bold text-[#C5A880] tracking-widest uppercase">{project.category}</span>
              <span>{project.location} • {project.year}</span>
            </div>
            <h2 className="font-serif text-3xl font-normal text-[#EDE8DF] group-hover:text-[#C5A880] transition-colors">
              {project.title}
            </h2>
            <p className="font-sans text-xs text-[#8E877D] leading-relaxed">
              {project.subtitle}
            </p>
            <div className="pt-4 flex items-center space-x-2 font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
