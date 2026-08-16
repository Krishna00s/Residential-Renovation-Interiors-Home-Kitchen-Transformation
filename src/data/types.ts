// TypeScript definitions for ARDAN Residential Renovation & Interior Architecture

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  category?: string;
}

export interface ProjectScopeItem {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Full Home Renovation' | 'Kitchen Renovation' | 'Home Extension' | 'Attic / Loft Conversion' | 'Bathroom Renovation' | 'Energy Upgrade' | 'Interior Transformation';
  categorySlug: string;
  location: string;
  year: string;
  duration: string;
  heroImage: ImageAsset;
  beforeImage: ImageAsset;
  afterImage: ImageAsset;
  gallery: ImageAsset[];
  description: string;
  challenge: string;
  solution: string;
  scope: string[];
  stats: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  categoryGroup: 'TRANSFORM' | 'EXTEND' | 'REFINE' | 'IMPROVE';
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  scope: string[];
  benefits: string[];
  typicalDuration: string;
  featured?: boolean;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  heroImage: ImageAsset;
  content: {
    sectionHeading?: string;
    paragraphs: string[];
    quote?: string;
  }[];
  relatedProjectSlug?: string;
  relatedServiceSlug?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: ImageAsset;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  projectType: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: ImageAsset;
}
