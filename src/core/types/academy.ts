export type CourseCategoryId = 
  | 'frontend'
  | 'backend'
  | 'mobile-apps'
  | 'cybersecurity'
  | 'networks'
  | 'hardware-maintenance'
  | 'software-troubleshooting';

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'all-levels';

export type CourseFormat = 'practical-lab' | 'in-person' | 'online-live' | 'hybrid';

export type CourseAvailability = 'open' | 'upcoming' | 'waitlist';

export interface CurriculumModule {
  id: string;
  moduleNumber: string;
  title: string;
  duration: string;
  topics: string[];
  handsOnProject?: string;
}

export interface CourseProject {
  title: string;
  description: string;
  technologies: string[];
}

export interface CourseInstructor {
  name: string;
  title: string;
  bio?: string;
  experienceYears?: number;
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  category: CourseCategoryId;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  level: CourseLevel;
  duration: string;
  totalHours?: number;
  format: CourseFormat;
  formatLabel: string;
  price?: number;
  currency?: string;
  pricingLabel?: string;
  thumbnail: string;
  objectives: string[];
  prerequisites: string[];
  curriculum: CurriculumModule[];
  projects: CourseProject[];
  instructor?: CourseInstructor;
  availability: CourseAvailability;
  featured?: boolean;
  registrationUrl?: string;
  faqs?: { question: string; answer: string }[];
}

export interface LearningPathMilestone {
  step: string;
  title: string;
  description: string;
  recommendedCourseSlug?: string;
  skills: string[];
}

export interface LearningPathItem {
  id: string;
  slug: string;
  categoryId: CourseCategoryId;
  title: string;
  subtitle: string;
  targetRole: string;
  estimatedDuration: string;
  level: string;
  description: string;
  milestones: LearningPathMilestone[];
  capstoneProject: string;
  careerOutcomes: string[];
}

export interface AcademyRegistrationPayload {
  fullName: string;
  phoneNumber: string;
  email?: string;
  courseSlug: string;
  courseTitle: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredFormat: 'in-person' | 'online-live' | 'flexible';
  preferredContact: 'whatsapp' | 'phone' | 'email';
  message?: string;
  timestamp?: string;
}
