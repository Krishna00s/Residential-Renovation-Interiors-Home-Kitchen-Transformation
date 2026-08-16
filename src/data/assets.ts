// Centralized Asset Registry for ARDAN Architecture & Renovation Studio
// All components and data models consume real photographic image files through this single source of truth.

import type { ImageAsset } from './types';

// Global Asset Registry consuming real photographic JPG assets
export const ASSETS = {
  hero: {
    main: {
      id: 'hero-main',
      src: '/assets/images/hero-main.jpg',
      alt: 'Contemporary architectural residence at dusk with warm interior lighting and glass facade',
      caption: 'Full-home architectural transformation in Dublin',
    } as ImageAsset,
    secondary: {
      id: 'hero-secondary',
      src: '/assets/images/service-interiors.jpg',
      alt: 'Bespoke joinery detail and natural lighting',
    } as ImageAsset,
  },

  projects: {
    oakHouse: {
      hero: {
        id: 'oak-house-hero',
        src: '/assets/images/project-oak-house.jpg',
        alt: 'The Oak House - Full interior renovation with bespoke joinery',
      } as ImageAsset,
      before: {
        id: 'oak-house-before',
        src: '/assets/images/before-oak-house.jpg',
        alt: 'Original cramped 1970s layout before renovation',
      } as ImageAsset,
      after: {
        id: 'oak-house-after',
        src: '/assets/images/after-oak-house.jpg',
        alt: 'Reconfigured open plan living space with continuous oak joinery',
      } as ImageAsset,
      gallery: [
        {
          id: 'oak-house-g1',
          src: '/assets/images/service-kitchens.jpg',
          alt: 'Custom quartz and oak kitchen island',
        },
        {
          id: 'oak-house-g2',
          src: '/assets/images/project-oak-house.jpg',
          alt: 'Integrated oak storage and hidden doors',
        },
        {
          id: 'oak-house-g3',
          src: '/assets/images/service-interiors.jpg',
          alt: 'Minimalist floating staircase detail',
        },
      ] as ImageAsset[],
    },

    clonskeaghKitchen: {
      hero: {
        id: 'clonskeagh-kitchen-hero',
        src: '/assets/images/project-clonskeagh-kitchen.jpg',
        alt: 'Clonskeagh Kitchen Transformation with marble countertop and custom cabinetry',
      } as ImageAsset,
      before: {
        id: 'clonskeagh-before',
        src: '/assets/images/before-oak-house.jpg',
        alt: 'Enclosed dark kitchen before redesign',
      } as ImageAsset,
      after: {
        id: 'clonskeagh-after',
        src: '/assets/images/service-kitchens.jpg',
        alt: 'Light-filled open plan kitchen with garden view',
      } as ImageAsset,
      gallery: [
        {
          id: 'clonskeagh-g1',
          src: '/assets/images/project-clonskeagh-kitchen.jpg',
          alt: 'Natural quartzite marble countertop detail',
        },
        {
          id: 'clonskeagh-g2',
          src: '/assets/images/service-interiors.jpg',
          alt: 'Walk-in pantry with concealed oak shelving',
        },
      ] as ImageAsset[],
    },

    glassExtension: {
      hero: {
        id: 'glass-extension-hero',
        src: '/assets/images/project-glass-extension.jpg',
        alt: 'Contemporary glass extension connecting home to rear garden',
      } as ImageAsset,
      before: {
        id: 'glass-ext-before',
        src: '/assets/images/before-oak-house.jpg',
        alt: 'Small rear windows and disconnected garden prior to build',
      } as ImageAsset,
      after: {
        id: 'glass-ext-after',
        src: '/assets/images/project-glass-extension.jpg',
        alt: 'Full height sliding glass doors opening onto stone patio',
      } as ImageAsset,
      gallery: [
        {
          id: 'glass-ext-g1',
          src: '/assets/images/service-extensions.jpg',
          alt: 'Frameless glass skylight bringing daylight into dining area',
        },
      ] as ImageAsset[],
    },

    aboveCityAttic: {
      hero: {
        id: 'above-city-hero',
        src: '/assets/images/project-above-city-attic.jpg',
        alt: 'Warm attic conversion with roof windows and bespoke timber bedroom suite',
      } as ImageAsset,
      before: {
        id: 'above-city-before',
        src: '/assets/images/before-oak-house.jpg',
        alt: 'Unfinished roof rafters before conversion',
      } as ImageAsset,
      after: {
        id: 'above-city-after',
        src: '/assets/images/project-above-city-attic.jpg',
        alt: 'Bright attic bedroom with ensuite and dormer glazing',
      } as ImageAsset,
      gallery: [] as ImageAsset[],
    },

    stoneBathroom: {
      hero: {
        id: 'stone-bathroom-hero',
        src: '/assets/images/project-stone-bathroom.jpg',
        alt: 'Minimalist bathroom crafted with large-format limestone and gunmetal fittings',
      } as ImageAsset,
      before: {
        id: 'stone-bath-before',
        src: '/assets/images/before-oak-house.jpg',
        alt: 'Dated acrylic bathtub and small tiles before upgrade',
      } as ImageAsset,
      after: {
        id: 'stone-bath-after',
        src: '/assets/images/project-stone-bathroom.jpg',
        alt: 'Walk-in wetroom with microcement walls and concealed linear drain',
      } as ImageAsset,
      gallery: [] as ImageAsset[],
    },
  },

  services: {
    kitchens: {
      id: 'service-kitchens',
      src: '/assets/images/service-kitchens.jpg',
      alt: 'Custom kitchen design and architectural joinery',
    } as ImageAsset,
    bathrooms: {
      id: 'service-bathrooms',
      src: '/assets/images/service-bathrooms.jpg',
      alt: 'Sanctuary bathroom design with natural stone',
    } as ImageAsset,
    extensions: {
      id: 'service-extensions',
      src: '/assets/images/service-extensions.jpg',
      alt: 'Modern glass and brick residential extensions',
    } as ImageAsset,
    attics: {
      id: 'service-attics',
      src: '/assets/images/service-attics.jpg',
      alt: 'Attic conversion with roof light architecture',
    } as ImageAsset,
    fullHome: {
      id: 'service-fullhome',
      src: '/assets/images/service-full-home.jpg',
      alt: 'Complete residential renovation and spatial redesign',
    } as ImageAsset,
    energy: {
      id: 'service-energy',
      src: '/assets/images/service-energy.jpg',
      alt: 'High performance insulation and sustainable home upgrades',
    } as ImageAsset,
    interiors: {
      id: 'service-interiors',
      src: '/assets/images/service-interiors.jpg',
      alt: 'Refined interior layout, lighting, and material design',
    } as ImageAsset,
  },

  journal: {
    kitchenLayout: {
      id: 'journal-kitchen-layout',
      src: '/assets/images/service-kitchens.jpg',
      alt: 'Architectural floorplan and kitchen layout guide',
    } as ImageAsset,
    extensionDecision: {
      id: 'journal-extension-decision',
      src: '/assets/images/service-extensions.jpg',
      alt: 'Modern residential extension spatial planning',
    } as ImageAsset,
    materialSelection: {
      id: 'journal-material-selection',
      src: '/assets/images/service-interiors.jpg',
      alt: 'Natural quartzite, oak joinery, and honed limestone material samples',
    } as ImageAsset,
    smallBathroom: {
      id: 'journal-small-bathroom',
      src: '/assets/images/service-bathrooms.jpg',
      alt: 'Sanctuary bathroom design with natural limestone and concealed lighting',
    } as ImageAsset,
  },
};
