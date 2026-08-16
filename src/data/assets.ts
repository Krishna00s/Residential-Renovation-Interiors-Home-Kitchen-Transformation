// Centralized Asset Registry for ARDAN Architecture & Renovation Studio
// All components and data models consume images through this single source of truth.

import type { ImageAsset } from './types';
import { createArchitecturalSvgDataUrl } from '../utils/assetGenerator';

// Local Asset Path Resolver with SVG Fallback Generation
export function getAssetUrl(path: string, fallbackTitle: string, theme: 'dark' | 'light' | 'stone' | 'olive' = 'dark'): string {
  // If local file exists in public directory, return relative path,
  // otherwise fallback to clean architectural SVG pattern.
  if (path && path.startsWith('/assets/')) {
    return path;
  }
  return createArchitecturalSvgDataUrl({
    title: fallbackTitle,
    theme: theme,
    subtitle: 'ARDAN ARCHITECTURAL ASSET',
  });
}

// Global Asset Registry
export const ASSETS = {
  hero: {
    main: {
      id: 'hero-main',
      src: createArchitecturalSvgDataUrl({
        title: 'Spaces Worth Coming Home To',
        subtitle: 'DUBLIN RESIDENTIAL RENOVATION & EXTENSIONS',
        theme: 'dark',
      }),
      alt: 'Architectural living space with warm timber and natural stone',
      caption: 'Full-home architectural transformation in Dublin',
    } as ImageAsset,
    secondary: {
      id: 'hero-secondary',
      src: createArchitecturalSvgDataUrl({
        title: 'Architectural Details & Craftsmanship',
        subtitle: 'MATERIAL SELECTION & SPATIAL FLOW',
        theme: 'stone',
      }),
      alt: 'Bespoke joinery detail and natural lighting',
    } as ImageAsset,
  },

  projects: {
    oakHouse: {
      hero: {
        id: 'oak-house-hero',
        src: createArchitecturalSvgDataUrl({
          title: 'The Oak House',
          subtitle: 'FULL HOME RENOVATION — DUBLIN',
          theme: 'dark',
        }),
        alt: 'The Oak House - Full interior renovation with bespoke joinery',
      } as ImageAsset,
      before: {
        id: 'oak-house-before',
        src: createArchitecturalSvgDataUrl({
          title: 'Original Space (1970s Structure)',
          subtitle: 'BEFORE TRANSFORMATION',
          theme: 'light',
        }),
        alt: 'Original cramped 1970s layout before renovation',
      } as ImageAsset,
      after: {
        id: 'oak-house-after',
        src: createArchitecturalSvgDataUrl({
          title: 'Completed Reconfigured Layout',
          subtitle: 'AFTER TRANSFORMATION',
          theme: 'dark',
        }),
        alt: 'Reconfigured open plan living space with continuous oak joinery',
      } as ImageAsset,
      gallery: [
        {
          id: 'oak-house-g1',
          src: createArchitecturalSvgDataUrl({ title: 'Kitchen & Island Detail', theme: 'stone' }),
          alt: 'Custom quartz and oak kitchen island',
        },
        {
          id: 'oak-house-g2',
          src: createArchitecturalSvgDataUrl({ title: 'Custom Storage Wall', theme: 'dark' }),
          alt: 'Integrated oak storage and hidden doors',
        },
        {
          id: 'oak-house-g3',
          src: createArchitecturalSvgDataUrl({ title: 'Architectural Staircase', theme: 'olive' }),
          alt: 'Minimalist floating staircase detail',
        },
      ] as ImageAsset[],
    },

    clonskeaghKitchen: {
      hero: {
        id: 'clonskeagh-kitchen-hero',
        src: createArchitecturalSvgDataUrl({
          title: 'Clonskeagh Kitchen',
          subtitle: 'KITCHEN RENOVATION — DUBLIN',
          theme: 'stone',
        }),
        alt: 'Clonskeagh Kitchen Transformation with marble countertop and custom cabinetry',
      } as ImageAsset,
      before: {
        id: 'clonskeagh-before',
        src: createArchitecturalSvgDataUrl({ title: 'Dated Enclosed Kitchen', theme: 'light' }),
        alt: 'Enclosed dark kitchen before redesign',
      } as ImageAsset,
      after: {
        id: 'clonskeagh-after',
        src: createArchitecturalSvgDataUrl({ title: 'Open Light-Filled Kitchen', theme: 'stone' }),
        alt: 'Light-filled open plan kitchen with garden view',
      } as ImageAsset,
      gallery: [
        {
          id: 'clonskeagh-g1',
          src: createArchitecturalSvgDataUrl({ title: 'Marble Countertop', theme: 'stone' }),
          alt: 'Natural quartzite marble countertop detail',
        },
        {
          id: 'clonskeagh-g2',
          src: createArchitecturalSvgDataUrl({ title: 'Pantry Joinery', theme: 'dark' }),
          alt: 'Walk-in pantry with concealed oak shelving',
        },
      ] as ImageAsset[],
    },

    glassExtension: {
      hero: {
        id: 'glass-extension-hero',
        src: createArchitecturalSvgDataUrl({
          title: 'The Glass Extension',
          subtitle: 'HOME EXTENSION — SOUTH DUBLIN',
          theme: 'olive',
        }),
        alt: 'Contemporary glass extension connecting home to rear garden',
      } as ImageAsset,
      before: {
        id: 'glass-ext-before',
        src: createArchitecturalSvgDataUrl({ title: 'Dark Rear Elevation', theme: 'light' }),
        alt: 'Small rear windows and disconnected garden prior to build',
      } as ImageAsset,
      after: {
        id: 'glass-ext-after',
        src: createArchitecturalSvgDataUrl({ title: 'Full-Height Structural Glazing', theme: 'olive' }),
        alt: 'Full height sliding glass doors opening onto stone patio',
      } as ImageAsset,
      gallery: [
        {
          id: 'glass-ext-g1',
          src: createArchitecturalSvgDataUrl({ title: 'Roof Light Daylight', theme: 'stone' }),
          alt: 'Frameless glass skylight bringing daylight into dining area',
        },
      ] as ImageAsset[],
    },

    aboveCityAttic: {
      hero: {
        id: 'above-city-hero',
        src: createArchitecturalSvgDataUrl({
          title: 'Above The City',
          subtitle: 'ATTIC & LOFT CONVERSION — DUBLIN',
          theme: 'dark',
        }),
        alt: 'Warm attic conversion with roof windows and bespoke timber bedroom suite',
      } as ImageAsset,
      before: {
        id: 'above-city-before',
        src: createArchitecturalSvgDataUrl({ title: 'Unused Roof Void', theme: 'light' }),
        alt: 'Unfinished roof rafters before conversion',
      } as ImageAsset,
      after: {
        id: 'above-city-after',
        src: createArchitecturalSvgDataUrl({ title: 'Master Bedroom Suite', theme: 'dark' }),
        alt: 'Bright attic bedroom with ensuite and dormer glazing',
      } as ImageAsset,
      gallery: [] as ImageAsset[],
    },

    stoneBathroom: {
      hero: {
        id: 'stone-bathroom-hero',
        src: createArchitecturalSvgDataUrl({
          title: 'The Stone Bathroom',
          subtitle: 'BATHROOM RENOVATION — DUBLIN',
          theme: 'stone',
        }),
        alt: 'Minimalist bathroom crafted with large-format limestone and gunmetal fittings',
      } as ImageAsset,
      before: {
        id: 'stone-bath-before',
        src: createArchitecturalSvgDataUrl({ title: 'Compromised Fixtures', theme: 'light' }),
        alt: 'Dated acrylic bathtub and small tiles before upgrade',
      } as ImageAsset,
      after: {
        id: 'stone-bath-after',
        src: createArchitecturalSvgDataUrl({ title: 'Monolithic Stone Sanctuary', theme: 'stone' }),
        alt: 'Walk-in wetroom with microcement walls and concealed linear drain',
      } as ImageAsset,
      gallery: [] as ImageAsset[],
    },
  },

  services: {
    kitchens: {
      id: 'service-kitchens',
      src: createArchitecturalSvgDataUrl({ title: 'Kitchen Renovations', theme: 'stone' }),
      alt: 'Custom kitchen design and architectural joinery',
    } as ImageAsset,
    bathrooms: {
      id: 'service-bathrooms',
      src: createArchitecturalSvgDataUrl({ title: 'Bathroom Renovations', theme: 'dark' }),
      alt: 'Sanctuary bathroom design with natural stone',
    } as ImageAsset,
    extensions: {
      id: 'service-extensions',
      src: createArchitecturalSvgDataUrl({ title: 'Home Extensions', theme: 'olive' }),
      alt: 'Modern glass and brick residential extensions',
    } as ImageAsset,
    attics: {
      id: 'service-attics',
      src: createArchitecturalSvgDataUrl({ title: 'Attic & Loft Conversions', theme: 'dark' }),
      alt: 'Attic conversion with roof light architecture',
    } as ImageAsset,
    fullHome: {
      id: 'service-fullhome',
      src: createArchitecturalSvgDataUrl({ title: 'Full Home Renovations', theme: 'dark' }),
      alt: 'Complete residential renovation and spatial redesign',
    } as ImageAsset,
    energy: {
      id: 'service-energy',
      src: createArchitecturalSvgDataUrl({ title: 'Energy Upgrades', theme: 'olive' }),
      alt: 'High performance insulation and sustainable home upgrades',
    } as ImageAsset,
    interiors: {
      id: 'service-interiors',
      src: createArchitecturalSvgDataUrl({ title: 'Interior Transformations', theme: 'stone' }),
      alt: 'Refined interior layout, lighting, and material design',
    } as ImageAsset,
  },

  journal: {
    kitchenLayout: {
      id: 'journal-kitchen-layout',
      src: createArchitecturalSvgDataUrl({ title: 'Kitchen Spatial Layout Guide', theme: 'stone' }),
      alt: 'Architectural drawing of kitchen working triangle and spatial flow',
    } as ImageAsset,
    extensionDecision: {
      id: 'journal-extension-decision',
      src: createArchitecturalSvgDataUrl({ title: 'Planning a Home Extension', theme: 'olive' }),
      alt: 'Exterior section drawing of rear extension',
    } as ImageAsset,
    smallBathroom: {
      id: 'journal-small-bathroom',
      src: createArchitecturalSvgDataUrl({ title: 'Maximizing Small Bathrooms', theme: 'dark' }),
      alt: 'Detail of compact bathroom storage and lighting',
    } as ImageAsset,
  },

  brand: {
    noisePattern: '/assets/patterns/noise.png',
    logo: createArchitecturalSvgDataUrl({ title: 'ARDAN', subtitle: 'RENOVATION & ARCHITECTURE', theme: 'dark' }),
  },
};
