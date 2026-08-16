import type { ProcessStage, Testimonial, TeamMember } from './types';
import { ASSETS } from './assets';

export const COMPANY_INFO = {
  name: 'ARDAN',
  tagline: 'Spaces worth coming home to.',
  subtitle: 'Thoughtful renovations, extensions and interior architecture designed around the way you live.',
  heroStatement: "We don't just renovate homes. We rethink how they work, feel and belong to the people living in them.",
  location: 'Dublin, Ireland',
  serviceAreas: ['South Dublin', 'North Dublin', 'Dún Laoghaire-Rathdown', 'Fingal', 'Wicklow'],
  phone: '+353 1 496 0123',
  email: 'hello@ardanrenovations.ie',
  address: '14 Merrion Square East, Dublin 2, D02 X682',
  yearEstablished: '2016',
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Consultation',
    subtitle: 'UNDERSTANDING THE HOME & THE PEOPLE LIVING IN IT',
    description: 'Every project starts with understanding the home, the people living in it and what needs to change.',
    details: [
      'Site visit and spatial audit',
      'Discussion of lifestyle, routines, and pain points',
      'Feasibility and preliminary budget alignment',
    ],
    image: ASSETS.hero.main,
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'SPATIAL CONCEPTS, MATERIALS & LIGHTING',
    description: 'We develop the direction, materials and spatial ideas before construction begins.',
    details: [
      'Architectural layout options',
      'Material samples, stone, timber & joinery selections',
      'Lighting plans and 3D spatial visualization',
    ],
    image: ASSETS.projects.oakHouse.hero,
  },
  {
    number: '03',
    title: 'Planning',
    subtitle: 'SCOPE, SEQUENCING & BUDGET TRANSPARENCY',
    description: 'Scope, sequencing, budgets and practical details are resolved before work starts.',
    details: [
      'Comprehensive cost breakdown',
      'Construction timeline and milestone calendar',
      'Permits and structural engineer approvals',
    ],
    image: ASSETS.projects.glassExtension.hero,
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'CRAFTSMANSHIP & CAREFUL COORDINATION',
    description: 'Experienced trades and careful coordination turn the design into a finished space.',
    details: [
      'Dedicated project director on site',
      'Weekly progress updates and photos',
      'Precision installation of joinery, glazing & stone',
    ],
    image: ASSETS.projects.aboveCityAttic.hero,
  },
  {
    number: '05',
    title: 'Handover',
    subtitle: 'THE FINAL DETAILS CHECKED & READY TO LIVE IN',
    description: 'The final details are checked, the space is completed and you can finally start living in it.',
    details: [
      'Comprehensive snagging inspection',
      'Care guides for natural materials & fixtures',
      'Handover certificate and long-term guarantee',
    ],
    image: ASSETS.projects.stoneBathroom.hero,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'We finally have a home that works the way we always wanted it to.',
    author: 'Sarah & James',
    location: 'Dublin',
    projectType: 'Full Home Renovation',
  },
  {
    id: 't2',
    quote: 'The process felt considered from the first conversation to the final detail.',
    author: 'Emma',
    location: 'Dublin',
    projectType: 'Kitchen & Extension',
  },
  {
    id: 't3',
    quote: 'They brought an architectural sensibility to our renovation that completely transformed how light moves through the ground floor.',
    author: 'David',
    location: 'Dún Laoghaire',
    projectType: 'Home Extension',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Cormac O’Brien',
    role: 'Design Director & Founder',
    bio: 'Architectural background with 15 years experience directing residential transformations across Dublin.',
    image: ASSETS.hero.secondary,
  },
  {
    id: 'tm2',
    name: 'Aoife Kelly',
    role: 'Lead Interior Architect',
    bio: 'Specialist in custom joinery, natural stone specification, and lighting design.',
    image: ASSETS.projects.oakHouse.hero,
  },
  {
    id: 'tm3',
    name: 'Liam Walsh',
    role: 'Head of Construction & Craft',
    bio: 'Master carpenter and project manager ensuring precision execution across all trade disciplines.',
    image: ASSETS.projects.glassExtension.hero,
  },
];
