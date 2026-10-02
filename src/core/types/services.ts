export interface SubServiceItem {
  name: string;
  description?: string;
  badge?: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  iconName: string;
  accentColor: string;
  heroImage: string;
  galleryImages: string[];
  subServices: SubServiceItem[];
  deliverables: string[];
  technologies?: string[];
  pipeline?: {
    step: string;
    title: string;
    desc: string;
  }[];
  metricsHighlight?: {
    label: string;
    value: string;
  }[];
}
