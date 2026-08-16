import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/types';

export interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'square' | 'wide' | 'tall' | 'asymmetric';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectRatio = 'asymmetric',
  className = '',
}) => {
  let heightClass = 'h-[420px] md:h-[500px]';
  if (aspectRatio === 'square') heightClass = 'h-[360px] md:h-[400px]';
  if (aspectRatio === 'tall') heightClass = 'h-[500px] md:h-[620px]';
  if (aspectRatio === 'wide') heightClass = 'h-[320px] md:h-[380px]';

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-[#121212] text-[#F9F8F6] transition-all duration-500 hover:shadow-2xl ${heightClass} ${className}`}
      data-cursor="hover"
      data-cursor-text="VIEW"
    >
      {/* Edge-to-Edge Photography with Crop Scale on Hover */}
      <img
        src={project.heroImage.src}
        alt={project.heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-[0.95]"
        loading="lazy"
      />

      {/* Subtle Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

      {/* Asymmetrical Floating Header Badge */}
      <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between pointer-events-none">
        <span className="rounded-full bg-[#121212]/80 backdrop-blur-md px-3.5 py-1.5 font-sans text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase border border-[#F9F8F6]/10">
          {project.category}
        </span>
        <span className="font-sans text-xs text-[#F9F8F6]/70 uppercase tracking-widest font-medium">
          {project.year}
        </span>
      </div>

      {/* Asymmetrical Editorial Content Block */}
      <div className="absolute inset-0 z-10 p-8 md:p-10 flex flex-col justify-end">
        <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center space-x-2 font-sans text-xs text-[#8C8275] uppercase tracking-wider">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.duration}</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-normal leading-tight text-[#F9F8F6] group-hover:text-[#C5A880] transition-colors">
            {project.title}
          </h3>

          <p className="font-sans text-xs md:text-sm text-[#F9F8F6]/75 line-clamp-2 leading-relaxed max-w-lg">
            {project.subtitle}
          </p>

          <div className="pt-2 flex items-center space-x-2 font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
            <span>Explore Transformation</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
