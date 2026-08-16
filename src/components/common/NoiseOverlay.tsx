import React from 'react';

/**
 * Subtle Noise Overlay Component
 * Renders an ultra-light tactile grain overlay across the entire viewport.
 * Uses pointer-events-none to remain completely non-interactive.
 */
export const NoiseOverlay: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.035] mix-blend-overlay"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default NoiseOverlay;
