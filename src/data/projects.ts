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
    title: 'منصة سحابية متطورة لإدارة الأساطيل والشحن',
    category: 'software',
    categoryLabel: 'البرمجيات والتكنولوجيا',
    client: 'قطاع النقل والخدمات اللوجستية',
    industry: 'النقل واللوجستيات',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'تطوير بنية سحابية متقدمة مع لوحات تتبع فورية عبر GPS ونظام آلي لإدارة العمليات اللوجستية.',
    highlights: ['معمارية Microservices فائقة السرعة', 'تطبيق ويب هجين متوافق مع الموبايل', 'لوحة تحكم تفاعلية فورية'],
    metrics: [
      { label: 'كفاءة التشغيل', value: 'عالية' },
      { label: 'زمن الاستجابة', value: '<120ms' },
    ],
    featured: true,
  },
  {
    id: 'proj-sec-1',
    slug: 'nexus-industrial-cctv',
    title: 'تجهيز المنظومة الأمنية وكاميرات 4K للمجمعات الصناعية',
    category: 'security',
    categoryLabel: 'الأمن و CCTV',
    client: 'قطاع المنشآت والمستودعات الصناعية',
    industry: 'الصناعة والمستودعات الكبرى',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    summary: 'توريد وتركيب كاميرات IP بدقة 4K مع شبكة معزولة وغرفة مراقبة مركزية تدعم التحليل الذكي للذكاء الاصطناعي.',
    highlights: ['تغطية 360 درجة بدون نقاط عمياء', 'غرفة تحكم ومراقبة 24/7', 'أنظمة تحكم في الدخول البيومترية'],
    metrics: [
      { label: 'دقة المراقبة', value: '4K Ultra HD' },
      { label: 'نسبة الحماية والاستقرار', value: '99.9%' },
    ],
    featured: true,
  },
  {
    id: 'proj-mkt-1',
    slug: 'aura-fitness-growth',
    title: 'استراتيجية النمو والتسويق الرقمي للنوادي الرياضية',
    category: 'marketing',
    categoryLabel: 'التسويق والنمو',
    client: 'قطاع المراكز الرياضية والنوادي الصحية',
    industry: 'الرياضة والنوادي الصحية',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    summary: 'حملات إعلانية متعددة القنوات مع أتمتة الرد والحجز عبر واتساب لتحقيق أعلى معدل تحويل.',
    highlights: ['إنتاج محتوى ريلز تسويقي احترافي', 'أتمتة الاستجابة للعملاء عبر WhatsApp', 'استهداف دقيق للفئات المهتمة'],
    metrics: [
      { label: 'معدل التحويل', value: 'مرتفع' },
      { label: 'أتمتة الاستجابة', value: '< 60 ثانية' },
    ],
    featured: true,
  },
  {
    id: 'proj-prod-1',
    slug: 'apex-hypercar-commercial',
    title: 'فيلم إعلاني سينمائي 4K للعلامات والسيارات الفارهة',
    category: 'production',
    categoryLabel: 'الإنتاج السينمائي 4K',
    client: 'قطاع السيارات الفارهة والإعلانات التجارية',
    industry: 'السيارات والرفاهية',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    summary: 'إنتاج إعلان سينمائي بأحدث كاميرات السينما وعدسات التصوير الاحترافي مع تلوين سينمائي يبرز فخامة العلامة.',
    highlights: ['تصوير 4K بنطاق ديناميكي واسع HDR', 'موسيقى وتصميم صوتي مخصص', 'مونتاج وتصحيح ألوان سينمائي'],
    metrics: [
      { label: 'جودة الإنتاج', value: 'Cinema 4K' },
      { label: 'معدل التفاعل', value: 'متميز' },
    ],
    featured: true,
  },
  {
    id: 'proj-brand-1',
    slug: 'lumina-architectural-identity',
    title: 'الهوية البصرية والنظام البصري للمكاتب الهندسية',
    category: 'branding',
    categoryLabel: 'الهوية والتصميم',
    client: 'قطاع المكاتب المعمارية والتصميم الراقي',
    industry: 'العمارة والتصميم الراقي',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'صياغة شعار أيقوني بنسب هندسية ذهبية، مع نظام مطبوعات بارزة فاخرة، ودليل إرشادي شامل للهوية المؤسسية.',
    highlights: ['تصميم مونوغرام هندسي خالد', 'دليل هوية مفصل للعلامة التجارية', 'مطبوعات وتغليف بلمسات فاخرة'],
    metrics: [
      { label: 'معايير التصميم', value: 'Golden Ratio' },
      { label: 'دليل الهوية', value: 'شامل ومتكامل' },
    ],
    featured: true,
  },
  {
    id: 'proj-soft-2',
    slug: 'telehealth-connect-suite',
    title: 'منصة استشارات الرعاية الصحية الرقمية والطبابة عن بعد',
    category: 'software',
    categoryLabel: 'البرمجيات والتكنولوجيا',
    client: 'قطاع الرعاية الصحية والمنصات الطبية الرقمية',
    industry: 'الصحة والطبابة عن بعد',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    summary: 'تطبيق ويب وهاتف متوافق مع معايير الأمان يتيح حجز المواعيد واستشارات الفيديو المشفرة وإدارة الملفات بسهولة.',
    highlights: ['اتصالات فيديو مشفرة WebRTC', 'تكامل مع بوابات الدفع الإلكتروني', 'نظام إدارة المواعيد والملفات'],
    metrics: [
      { label: 'بروتوكول الأمان', value: 'مشفر بالكامل' },
      { label: 'التوافق', value: 'Web & Mobile' },
    ],
    featured: false,
  },
];
