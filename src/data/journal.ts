import type { JournalArticle } from './types';
import { ASSETS } from './assets';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j1',
    slug: 'kitchen-renovation-layout-guide',
    title: 'Thinking About a Kitchen Renovation? Start With the Layout.',
    category: 'Kitchens',
    date: 'February 12, 2026',
    readTime: '4 Min Read',
    summary: 'Why spatial planning, traffic flow, and working zones should always happen before selecting cabinet doors or stone finishes.',
    heroImage: ASSETS.journal.kitchenLayout,
    content: [
      {
        sectionHeading: 'The Golden Triangle vs. Modern Living',
        paragraphs: [
          'For decades, kitchen design revolved strictly around the classic working triangle — connecting sink, fridge, and stove. While the physics of cooking remain unchanged, the way families use kitchens has evolved dramatically.',
          'Today, kitchens serve as remote offices, homework hubs, entertainment bars, and social living spaces. When planning a renovation, start by analyzing how many people occupy the room simultaneously.',
        ],
        quote: 'A beautiful kitchen finish cannot rescue an uncomfortable spatial flow.',
      },
      {
        sectionHeading: 'Zone Planning Over Cabinet Selecting',
        paragraphs: [
          'We recommend dividing the floorplan into four distinct functional zones: Preparation, Cooking, Cleaning, and Socializing.',
          'Ensure the social zone (island seating or dining table) never intersects the path between the prep sink and primary cooktop.',
        ],
      },
    ],
    relatedProjectSlug: 'clonskeagh-kitchen',
    relatedServiceSlug: 'kitchen-renovations',
  },
  {
    id: 'j2',
    slug: 'is-an-extension-right-for-your-home',
    title: 'Is an Extension the Right Way to Add Space?',
    category: 'Extensions',
    date: 'January 28, 2026',
    readTime: '6 Min Read',
    summary: 'Helpful guidance on whether extending or reorganizing your existing footprint delivers better light, value, and living quality.',
    heroImage: ASSETS.journal.extensionDecision,
    content: [
      {
        sectionHeading: 'Reorganizing vs. Extending',
        paragraphs: [
          'Before investing in major ground works and structural steel, evaluate whether your existing floorplan contains wasted square meters.',
          'Often, dark cellular rooms in period homes can be reconfigured by removing internal non-loadbearing walls, unlocking double the usable space without sacrificing garden area.',
        ],
        quote: 'More floor area does not automatically mean a better home. Light and proportion matter far more.',
      },
      {
        sectionHeading: 'Connecting Garden to Interior',
        paragraphs: [
          'If an extension is required, the primary goal should be bringing natural daylight deep into the original house while creating a seamless outdoor threshold.',
        ],
      },
    ],
    relatedProjectSlug: 'glass-extension',
    relatedServiceSlug: 'home-extensions',
  },
  {
    id: 'j3',
    slug: 'maximizing-small-bathrooms',
    title: 'Small Bathrooms, Better Spaces.',
    category: 'Bathrooms',
    date: 'January 14, 2026',
    readTime: '5 Min Read',
    summary: 'How proportion, continuous stone materials, concealed storage, and architectural lighting transform compact bathrooms.',
    heroImage: ASSETS.journal.smallBathroom,
    content: [
      {
        sectionHeading: 'Material Continuity',
        paragraphs: [
          'Visual fragmentation makes small rooms feel claustrophobic. By running the same large-format stone tile from floor up to ceiling without grout line breaks, boundaries recede.',
        ],
        quote: 'In compact spaces, every line must serve a purpose.',
      },
      {
        sectionHeading: 'Floating Fixtures & Niche Lighting',
        paragraphs: [
          'Wall-mounted vanities expose floor area beneath, tricking the eye into perceiving extra space.',
        ],
      },
    ],
    relatedProjectSlug: 'stone-bathroom',
    relatedServiceSlug: 'bathroom-renovations',
  },
];
