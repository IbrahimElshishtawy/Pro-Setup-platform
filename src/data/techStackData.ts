export interface TechItem {
  name: string;
  category: 'mobile' | 'web' | 'cloud' | 'database' | 'security' | 'creative';
  description: string;
  iconName: string;
  highlight?: boolean;
}

export const TECH_STACK: TechItem[] = [
  { name: 'Flutter', category: 'mobile', description: 'Cross-platform native iOS & Android applications with 60fps performance', iconName: 'Smartphone', highlight: true },
  { name: 'Dart', category: 'mobile', description: 'Type-safe object-oriented language optimized for rapid client UI development', iconName: 'Terminal', highlight: true },
  { name: 'Firebase', category: 'cloud', description: 'Realtime Cloud Firestore, Firebase Hosting, Authentication & Cloud Functions', iconName: 'Flame', highlight: true },
  { name: 'Supabase', category: 'cloud', description: 'Open source Firebase alternative with enterprise PostgreSQL & instant APIs', iconName: 'Database', highlight: true },
  { name: 'REST & GraphQL APIs', category: 'web', description: 'Secure microservices, webhook pipelines & third-party SaaS integrations', iconName: 'Network', highlight: true },
  { name: 'React & Next.js', category: 'web', description: 'Server-side rendered web applications with instantaneous navigation & SEO', iconName: 'Code', highlight: true },
  { name: 'TypeScript', category: 'web', description: 'Strict static typing ensuring bulletproof reliability across enterprise codebases', iconName: 'FileCode', highlight: true },
  { name: 'PostgreSQL & Redis', category: 'database', description: 'ACID-compliant relational storage coupled with sub-millisecond memory caching', iconName: 'HardDrive', highlight: false },
  { name: 'Google Cloud (GCP)', category: 'cloud', description: 'Containerized Docker microservices, load balancing & global CDN distribution', iconName: 'Cloud', highlight: false },
  { name: 'Payment Gateways', category: 'web', description: 'Automated processing via Stripe, Paymob, Fawry, Apple Pay & PayPal', iconName: 'CreditCard', highlight: true },
  { name: 'UniFi & IP CCTV', category: 'security', description: 'Gigabit PoE networks, 4K AI surveillance & smart access control doors', iconName: 'Shield', highlight: true },
  { name: 'DaVinci & Cinema 4K', category: 'creative', description: 'Hollywood color science, high-speed Sony cinema sensors & motion design', iconName: 'Film', highlight: true },
];
