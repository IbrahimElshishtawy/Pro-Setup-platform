export type ProjectCategory = 
  | 'all'
  | 'marketing'
  | 'branding'
  | 'software'
  | 'websites'
  | 'mobile-apps'
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
  client: string;
  year: string;
  coverImage: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  servicesUsed: string[];
  techStack?: string[];
  results: {
    label: string;
    value: string;
    improvement?: string;
  }[];
  gallery: string[];
  videoUrl?: string;
  featured?: boolean;
}
