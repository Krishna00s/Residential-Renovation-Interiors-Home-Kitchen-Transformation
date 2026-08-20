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
          Proof of quality across residential renovations, extensions, kitchens, and interior transformations in Bengaluru.
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group relative rounded-2xl bg-[#1B231D] border border-[#EDE8DF]/15 p-6 md:p-8 space-y-6 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C5A880]"
          >
            <div className="h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-[#161D18] relative">
              <img
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B231D] via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="font-sans text-xs text-[#8E877D] font-medium">
                  {project.year}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#EDE8DF] group-hover:text-[#C5A880] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-[#8E877D] line-clamp-2 leading-relaxed font-light">
                  {project.subtitle}
                </p>
                <p className="font-sans text-[11px] text-[#C5A880] pt-1 font-medium">
                  {project.location}
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-2 font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                <span>View Project Case Study</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
