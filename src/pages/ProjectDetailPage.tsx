import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import NotFoundPage from './NotFoundPage';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return <NotFoundPage message={`Project case study "${slug}" not found.`} />;
  }

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#8C8275] hover:text-[#121212]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Projects</span>
        </Link>
        <span className="inline-block rounded-full bg-[#EAE6E1] px-3 py-1 font-sans text-xs font-bold text-[#121212] tracking-widest uppercase">
          ROUTE: /PROJECTS/{slug}
        </span>
      </div>

      {/* Case Study Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4 font-sans text-xs text-[#8C8275]">
          <span className="font-bold text-[#C5A880] tracking-widest uppercase">{project.category}</span>
          <span>•</span>
          <span>{project.location}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-[#121212]">
          {project.title}
        </h1>
        <p className="font-sans text-lg text-[#8C8275] max-w-2xl leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Statistics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#EAE6E1]/50 border border-[#121212]/10">
        {project.stats.map((st, idx) => (
          <div key={idx} className="space-y-1">
            <span className="font-sans text-xs text-[#8C8275] uppercase tracking-wider">{st.label}</span>
            <p className="font-serif text-2xl font-semibold text-[#121212]">{st.value}</p>
          </div>
        ))}
      </div>

      {/* Next Project Link */}
      <div className="pt-12 border-t border-[#121212]/10">
        <Link
          to={`/projects/${nextProject.slug}`}
          className="group block p-8 rounded-2xl bg-[#121212] text-[#F9F8F6] transition-all hover:bg-[#1A1918]"
          data-cursor="hover"
          data-cursor-text="NEXT"
        >
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              NEXT PROJECT
            </span>
            <ArrowUpRight className="h-5 w-5 text-[#C5A880] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-normal text-[#F9F8F6]">
            {nextProject.title}
          </h2>
          <p className="mt-1 font-sans text-xs text-[#8C8275]">{nextProject.category} • {nextProject.location}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
