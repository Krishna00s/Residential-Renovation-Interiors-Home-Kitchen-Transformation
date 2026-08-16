import React from 'react';
import Hero from '../components/hero/Hero';
import EditorialIntro from '../components/home/EditorialIntro';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import BeforeAfterSlider from '../components/interactive/BeforeAfterSlider';
import FeaturedProject from '../components/home/FeaturedProject';
import HorizontalGallery from '../components/interactive/HorizontalGallery';
import WhyArdan from '../components/home/WhyArdan';
import HomeCta from '../components/home/HomeCta';
import { PROJECTS } from '../data/projects';
import { ASSETS } from '../data/assets';

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#161D18] text-[#EDE8DF]">
      {/* 1. Cinematic Hero Frame */}
      <Hero />

      {/* 2. Editorial Philosophy Introduction */}
      <EditorialIntro />

      {/* 3. "What We Do" Tilted Infinite Service Carousel & Compact Process Section */}
      <WhatWeDoSection />

      {/* 4. Spatial Transformation Section */}
      <section className="bg-[#161D18] text-[#EDE8DF] py-24 px-6 md:px-12 border-b border-[#EDE8DF]/10">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="space-y-4">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
              SPATIAL RECONFIGURATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-[#EDE8DF]">
              The Transformation
            </h2>
            <p className="font-sans text-base text-[#EDE8DF]/80 max-w-xl leading-relaxed font-light">
              Drag or scroll to reveal how dark, enclosed structures are re-architected into light-filled, open living environments.
            </p>
          </div>

          {/* Interactive Before/After Component */}
          <BeforeAfterSlider
            beforeImage={ASSETS.projects.oakHouse.before}
            afterImage={ASSETS.projects.oakHouse.after}
            title="The Oak House Reconfiguration"
            subtitle="1970S STRUCTURE → OPEN PLAN OAK LIVING"
          />
        </div>
      </section>

      {/* 5. Featured Case Study Magazine Spread */}
      <FeaturedProject />

      {/* 6. Selected Transformations (Curated Horizontal Gallery) */}
      <HorizontalGallery
        projects={PROJECTS}
        title="Selected Transformations"
        subtitle="CURATED ARCHITECTURAL PORTFOLIO"
      />

      {/* 7. Why ARDAN Proof Section */}
      <WhyArdan />

      {/* 8. Final CTA & Footer Bridge */}
      <HomeCta />
    </div>
  );
};

export default HomePage;
