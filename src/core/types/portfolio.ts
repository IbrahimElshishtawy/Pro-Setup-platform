export type ProjectCategory = 
  | 'all'
  | 'marketing'
  | 'branding'
  | 'design'
  | 'software'
  | 'web'
  | 'mobile'
  | 'security'
  | 'photography'
  | 'video'
  | 'advertising';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags?: ProjectCategory[];
  client: string;
  industry: string;
  year: string;
  coverImage: string;
  summary: string;
  overview: string;
  challenge: string;
  strategy: string;
  solution: string;
  designPhase?: string;
  developmentPhase?: string;
  productionPhase?: string;
  servicesUsed: string[];
  techStack?: string[];
  results: {
    label: string;
    value: string;
    improvement?: string;
  }[];
  gallery: string[];
  finalOutcome?: string;
  videoUrl?: string;
  featured?: boolean;
}
