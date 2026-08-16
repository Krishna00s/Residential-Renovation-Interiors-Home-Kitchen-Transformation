import React from 'react';
import BeforeAfterSlider from '../components/interactive/BeforeAfterSlider';
import ScrollProcessTimeline from '../components/interactive/ScrollProcessTimeline';
import HorizontalGallery from '../components/interactive/HorizontalGallery';
import InteractiveServiceExplorer from '../components/interactive/InteractiveServiceExplorer';
import ProjectCard from '../components/cards/ProjectCard';
import { PROJECTS } from '../data/projects';
import { ASSETS } from '../data/assets';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      {/* Component Verification Harness Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-4">
        <div className="inline-block rounded-full bg-[#121212] px-4 py-1 font-sans text-xs font-bold tracking-widest text-[#C5A880] uppercase">
          PHASE 4 — INTERACTIVE PRIMITIVES VERIFICATION HARNESS
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#121212]">
          ARDAN Architectural Storytelling Systems
        </h1>
        <p className="font-sans text-base text-[#8C8275] max-w-xl">
          Verifying core interactive components: BeforeAfterSlider, ScrollProcessTimeline, HorizontalGallery, InteractiveServiceExplorer, and ProjectCard.
        </p>
      </div>

      {/* 1. Asymmetrical Editorial Project Cards Harness */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
            01. EDITORIAL PROJECT CARDS
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#121212]">Asymmetrical Portfolio Layout</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <ProjectCard project={PROJECTS[0]} aspectRatio="tall" />
          </div>
          <div className="md:col-span-5 space-y-8">
            <ProjectCard project={PROJECTS[1]} aspectRatio="square" />
            <ProjectCard project={PROJECTS[2]} aspectRatio="wide" />
          </div>
        </div>
      </section>

      {/* 2. Interactive Before/After Transformation Slider */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="space-y-2">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
            02. TRANSFORMATION SLIDER
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#121212]">Scroll &amp; Touch-Driven Masking</h2>
        </div>
        <BeforeAfterSlider
          beforeImage={ASSETS.projects.oakHouse.before}
          afterImage={ASSETS.projects.oakHouse.after}
          title="The Oak House Reconfiguration"
          subtitle="1970S STRUCTURE → OPEN PLAN OAK LIVING"
        />
      </section>

      {/* 3. Sticky Interactive Service Explorer */}
      <section className="space-y-8">
        <InteractiveServiceExplorer />
      </section>

      {/* 4. Pinned Scroll Process Timeline */}
      <section className="space-y-8">
        <ScrollProcessTimeline />
      </section>

      {/* 5. Desktop Horizontal Gallery (Vertical Scroll Scrub) */}
      <section className="space-y-8">
        <HorizontalGallery projects={PROJECTS} />
      </section>
    </div>
  );
};

export default HomePage;
