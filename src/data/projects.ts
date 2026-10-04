export interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  category: 'all' | 'software' | 'security' | 'marketing' | 'production' | 'branding';
  categoryLabel: string;
  client: string;
  industry: string;
  year: string;
  coverImage: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'كافة المشاريع' },
  { id: 'software', label: 'البرمجيات والمنصات' },
  { id: 'security', label: 'الأمن و CCTV' },
  { id: 'marketing', label: 'التسويق والنمو' },
  { id: 'production', label: 'الإنتاج السينمائي 4K' },
  { id: 'branding', label: 'الهوية والتصميم' },
] as const;

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-soft-1',
    slug: 'cloud-logistics-erp',
    title: 'منصة فليكس لوجيستيكس السحابية لإدارة الأساطيل',
    category: 'software',
    categoryLabel: 'البرمجيات والتكنولوجيا',
    client: 'مجموعة فليكس الدولية للشحن',
    industry: 'النقل واللوجستيات',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'تطوير بنية سحابية متقدمة مع لوحات تتبع فورية عبر GPS ونظام آلي لإدارة الفواتير والعمليات اللوجستية.',
    highlights: ['معمارية Microservices فائقة السرعة', 'تطبيق ويب هجين متوافق مع الموبايل', 'لوحة تحكم تفاعلية فورية'],
    metrics: [
      { label: 'كفاءة التشغيل', value: '+68%' },
      { label: 'زمن الاستجابة', value: '<120ms' },
    ],
    featured: true,
  },
  {
    id: 'proj-sec-1',
    slug: 'nexus-industrial-cctv',
    title: 'تجهيز المنظومة الأمنية لمجمع نكسوس الصناعي',
    category: 'security',
    categoryLabel: 'الأمن و CCTV',
    client: 'مجمع نكسوس للتصنيع المتطور',
    industry: 'الصناعة والمستودعات الكبرى',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    summary: 'توريد وتركيب 120 كاميرا IP بدقة 4K مع شبكة ألياف ضوئية معزولة وغرفة مراقبة مركزية تدعم التحليل الذكي للذكاء الاصطناعي.',
    highlights: ['تغطية 360 درجة بدون نقاط عمياء', 'غرفة تحكم ومراقبة 24/7', 'أنظمة تحكم في الدخول البيومترية'],
    metrics: [
      { label: 'كاميرات 4K نشطة', value: '120+' },
      { label: 'نسبة الحماية والاستقرار', value: '99.9%' },
    ],
    featured: true,
  },
  {
    id: 'proj-mkt-1',
    slug: 'aura-fitness-growth',
    title: 'استراتيجية النمو والتسويق الرقمي لسلسلة أورا',
    category: 'marketing',
    categoryLabel: 'التسويق والنمو',
    client: 'مجموعة أورا للياقة ونمط الحياة',
    industry: 'الرياضة والنوادي الصحية',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    summary: 'حملات إعلانية متعددة القنوات مع أتمتة حجز الاشتراكات عبر واتساب حققت قفزة قياسية في المبيعات.',
    highlights: ['أكثر من 45 فيديو ريلز تسويقي', 'أتمتة الاستجابة للعملاء خلال 60 ثانية', 'استهداف دقيق للمهتمين بالصحة'],
    metrics: [
      { label: 'مشتركون جدد', value: '+1,420' },
      { label: 'العائد الإعلاني ROAS', value: '5.2x' },
    ],
    featured: true,
  },
  {
    id: 'proj-prod-1',
    slug: 'apex-hypercar-commercial',
    title: 'فيلم إعلاني سينمائي 4K لسيارات آبيكس الفارهة',
    category: 'production',
    categoryLabel: 'الإنتاج السينمائي 4K',
    client: 'وكالة آبيكس للسيارات الفاخرة',
    industry: 'السيارات والرفاهية',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    summary: 'إنتاج إعلان سينمائي بأحدث كاميرات RED وARRI مع لقطات درون جوية متقدمة وتلوين سينمائي احترافي يبرز فخامة المركبات.',
    highlights: ['تصوير 4K بنطاق ديناميكي واسع', 'موسيقى وتصميم صوتي مخصص', 'مونتاج سريع خاطف للأنظار'],
    metrics: [
      { label: 'مشاهدات الإعلان', value: '2.4M' },
      { label: 'معدل إكمال الفيديو', value: '74%' },
    ],
    featured: true,
  },
  {
    id: 'proj-brand-1',
    slug: 'lumina-architectural-identity',
    title: 'الهوية البصرية والنظام البصري لاستوديو لومينا المعماري',
    category: 'branding',
    categoryLabel: 'الهوية والتصميم',
    client: 'استوديو لومينا للهندسة والتصميم',
    industry: 'العمارة والتصميم الراقي',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'صياغة شعار أيقوني بنسب معمارية ذهبية، مع نظام مطبوعات بارزة فاخرة، ودليل إرشادي شامل للهوية المؤسسية.',
    highlights: ['تصميم مونوغرام هندسي خالد', 'دليل هوية مفصل 80+ صفحة', 'مطبوعات ذات لمسات ذهبية بارزة'],
    metrics: [
      { label: 'تقييم فخامة الهوية', value: 'أعلى 5%' },
      { label: 'عناصر الهوية المنجزة', value: '45+' },
    ],
    featured: true,
  },
  {
    id: 'proj-soft-2',
    slug: 'telehealth-connect-suite',
    title: 'منصة استشارات الرعاية الصحية الرقمية',
    category: 'software',
    categoryLabel: 'البرمجيات والتكنولوجيا',
    client: 'شبكة كير لينك الطبية',
    industry: 'الصحة والطبابة عن بعد',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    summary: 'تطبيق ويب وهاتف متوافق مع معايير الأمان الطبية يتيح حجز المواعيد واستشارات الفيديو المشفرة وإدارة الملفات المرضية.',
    highlights: ['اتصالات فيديو مشفرة WebRTC', 'تكامل مع بوابات الدفع الإلكتروني', 'نظام إدارة الوصفات الطبية'],
    metrics: [
      { label: 'استشارات منجزة', value: '+28K' },
      { label: 'تقييم رضا المرضى', value: '4.9/5' },
    ],
    featured: false,
  },
];
