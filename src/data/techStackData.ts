export interface TechItem {
  name: string;
  category: 'mobile' | 'web' | 'cloud' | 'database' | 'security' | 'creative';
  categoryLabel?: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export const TECH_STACK: TechItem[] = [
  { name: 'Flutter', category: 'mobile', categoryLabel: 'تطبيقات الجوال', description: 'تطبيقات أصلية فائقة السرعة تعمل على iOS و Android بأداء 60 إطاراً في الثانية بكود موحد', iconName: 'Smartphone', highlight: true },
  { name: 'Dart', category: 'mobile', categoryLabel: 'لغة البرمجة', description: 'لغة كائنية حديثة وآمنة تماماً تدعم معايير Null-Safety لضمان استقرار التطبيقات دون أخطاء برمجية', iconName: 'Terminal', highlight: true },
  { name: 'Firebase', category: 'cloud', categoryLabel: 'الحلول السحابية', description: 'قواعد بيانات فورية، مصادقة مستخدمين آمنة، وإشعارات دفع سريعة من جوجل', iconName: 'Flame', highlight: true },
  { name: 'Supabase', category: 'cloud', categoryLabel: 'الخوادم وقواعد البيانات', description: 'قواعد بيانات PostgreSQL متقدمة مع واجهات برمجية فورية ومصادقة مستخدمين عالية الكفاءة', iconName: 'Database', highlight: true },
  { name: 'REST & GraphQL APIs', category: 'web', categoryLabel: 'الواجهات البرمجية', description: 'معمارية خدمات برمجية دقيقة (Microservices) وربط آمن بين الأنظمة وبوابات الدفع', iconName: 'Network', highlight: true },
  { name: 'React & Next.js', category: 'web', categoryLabel: 'تطوير الويب', description: 'منصات ويب فائقة السرعة مع تهيئة كاملة لمحركات البحث (SEO) وتجربة تصفح فورية', iconName: 'Code', highlight: true },
  { name: 'TypeScript', category: 'web', categoryLabel: 'البرمجة القياسية', description: 'كتابة شيفرات برمجية صارمة وموثوقة تمنع الأخطاء غير المتوقعة في بيئات العمل الضخمة', iconName: 'FileCode', highlight: true },
  { name: 'PostgreSQL & Redis', category: 'database', categoryLabel: 'قواعد البيانات', description: 'تخزين بيانات علائقي فائق الموثوقية مدمج مع ذاكرة كاش مؤقتة فائقة السرعة بأجزاء من الثانية', iconName: 'HardDrive', highlight: false },
  { name: 'Google Cloud (GCP)', category: 'cloud', categoryLabel: 'البنية السحابية', description: 'حاويات Docker السحابية، توزيع الأحمال الذكي، وشبكات توزيع محتوى عالمية CDN', iconName: 'Cloud', highlight: false },
  { name: 'بوابات الدفع الإلكتروني', category: 'web', categoryLabel: 'التجارة الإلكترونية', description: 'ربط بوابات الدفع المعتمدة: Stripe، Paymob، فوري، Apple Pay، وبطاقات مدى والمحافظ الإلكترونية', iconName: 'CreditCard', highlight: true },
  { name: 'UniFi & شبكات IP الذكية', category: 'security', categoryLabel: 'الأنظمة الأمنية', description: 'شبكات PoE جيجابت، كاميرات مراقبة 4K بالذكاء الاصطناعي، وبوابات دخول ذكية', iconName: 'Shield', highlight: true },
  { name: 'كاميرات Cinema 4K & DaVinci', category: 'creative', categoryLabel: 'الإنتاج البصري', description: 'حساسات تصوير سينمائي 4K، وهندسة تلوين سينمائية، ومؤثرات بصرية متقدمة', iconName: 'Film', highlight: true },
];
