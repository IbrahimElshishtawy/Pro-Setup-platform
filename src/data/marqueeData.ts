export interface MarqueeItem {
  id: string;
  nameAr: string;
  nameEn: string;
  iconName: string;
  badge?: string;
}

export const INDUSTRIES_SERVED: MarqueeItem[] = [
  { id: 'tech', nameAr: 'التكنولوجيا والبرمجيات', nameEn: 'Technology & SaaS', iconName: 'Cpu', badge: 'Tech' },
  { id: 'realestate', nameAr: 'التطوير العقاري والمقاولات', nameEn: 'Real Estate & Living', iconName: 'Building2', badge: 'Property' },
  { id: 'healthcare', nameAr: 'الرعاية الصحية والمستشفيات', nameEn: 'Healthcare & Pharma', iconName: 'Activity', badge: 'Health' },
  { id: 'retail', nameAr: 'التجارة الإلكترونية والتجزئة', nameEn: 'E-Commerce & Retail', iconName: 'ShoppingBag', badge: 'Commerce' },
  { id: 'hospitality', nameAr: 'المطاعم والضيافة الفاخرة', nameEn: 'Hospitality & Dining', iconName: 'UtensilsCrossed', badge: 'Luxury' },
  { id: 'finance', nameAr: 'الشركات والاستثمار المؤسسي', nameEn: 'Corporate & Finance', iconName: 'Briefcase', badge: 'Enterprise' },
  { id: 'education', nameAr: 'التعليم والأكاديميات الحديثة', nameEn: 'Education & EdTech', iconName: 'GraduationCap', badge: 'EdTech' },
  { id: 'automotive', nameAr: 'السيارات ومراكز الخدمة', nameEn: 'Automotive & Logistics', iconName: 'Car', badge: 'Auto' },
  { id: 'startups', nameAr: 'الشركات الناشئة والمبتكرة', nameEn: 'Startups & Ventures', iconName: 'Rocket', badge: 'Scale' },
  { id: 'industry', nameAr: 'المصانع والمنشآت الصناعية', nameEn: 'Industrial & Security', iconName: 'ShieldCheck', badge: 'Industry' },
];
