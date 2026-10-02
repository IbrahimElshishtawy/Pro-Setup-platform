export type ActivePage = 
  | 'home'
  | 'services'
  | 'digital-marketing'
  | 'design-branding'
  | 'software-technology'
  | 'security-surveillance'
  | 'photography-video'
  | 'advertising'
  | 'portfolio'
  | 'about'
  | 'process'
  | 'contact'
  | 'faq';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'technical' | 'pricing';
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  deliverables: string[];
}
