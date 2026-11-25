export type ProjectCategory = 'all' | 'kitchens' | 'windows' | 'dressing';

export interface SolutionItem {
  code: string;
  id: Exclude<ProjectCategory, 'all'>;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  material: string;
  finish: string;
  summary: string;
  details: string[];
  image: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface MaterialSpec {
  code: string;
  name: string;
  origin: string;
  swatch: string;
  thickness: string;
  usage: string;
}

export const SITE_CONTACT = {
  brandName: 'Kitchen Pro',
  brandTagline: 'Architectural Kitchens · Windows · Dressing Systems',
  phoneDisplay: '+20 10 0000 0000',
  phoneHref: 'tel:+201000000000',
  whatsappNumber: import.meta.env.VITE_CONTACT_WHATSAPP || '201000000000',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'info@kitchenpro.eg',
  location: import.meta.env.VITE_OFFICE_LOCATION || 'القاهرة الجديدة، مصر',
  workingHours: 'السبت – الخميس | 10:00 ص – 7:00 م',
};

export const NAV_LINKS = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'الحلول', href: '#solutions' },
  { label: 'الأعمال', href: '#portfolio' },
  { label: 'التصنيع والخامات', href: '#craftsmanship' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const HERO_SPECS = [
  { code: 'SUS-304', label: 'ستانلس ستيل غذائي مقاوم للصدأ' },
  { code: '±0.5 mm', label: 'دقة تقطيع وتجميع CNC' },
  { code: '10 YRS', label: 'ضمان هيكلي على التصنيع' },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    code: '01',
    id: 'kitchens',
    title: 'المطابخ العصرية',
    subtitle: 'Modern Stainless & Architectural Kitchens',
    description:
      'تصميم وتصنيع مطابخ حديثة بهياكل مقاومة للرطوبة والحرارة، تجمع بين الاستيل المصقول والأسطح المطفية الهادئة وتوزيع وظيفي مدروس لكل سنتيمتر.',
    specs: ['ستانلس ستيل 304 مصقول', 'مفصلات ومجاري Soft-Close أوروبية', 'تأسيس إضاءة مخفية مدروسة'],
    image: '/images/project-steel-kitchen.jpg',
  },
  {
    code: '02',
    id: 'windows',
    title: 'الشبابيك والواجهات',
    subtitle: 'Thermal-Break Aluminum & Glass Systems',
    description:
      'أنظمة شبابيك وأبواب منزلقة بقطاعات رفيعة تمنحك رؤية مفتوحة وعزلاً صوتياً وحرارياً عالياً، بتشطيبات فحمية مطفية تندمج مع العمارة المعاصرة.',
    specs: ['قطاعات ألومنيوم عازلة للحرارة', 'زجاج مزدوج عازل للصوت', 'إكسسوارات ألمانية عالية التحمل'],
    image: '/images/project-windows.jpg',
  },
  {
    code: '03',
    id: 'dressing',
    title: 'الدريسنج روم',
    subtitle: 'Modular Walk-In Wardrobe Systems',
    description:
      'وحدات تخزين ودريسنج روم بتقسيم هندسي مرن، أبواب زجاجية بإطارات معدنية دقيقة، وإضاءة داخلية هادئة تبرز التنظيم وسهولة الاستخدام اليومي.',
    specs: ['تقسيم معياري حسب المساحة', 'إطارات ألومنيوم مطفي وزجاج مدخن', 'وحدات أدراج وإكسسوارات مدمجة'],
    image: '/images/project-dressing.jpg',
  },
];

export const CATEGORY_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'كل الأعمال' },
  { id: 'kitchens', label: 'المطابخ' },
  { id: 'windows', label: 'الشبابيك' },
  { id: 'dressing', label: 'الدريسنج' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kp-01',
    code: 'KP-2026-01',
    title: 'مطبخ جزيرة استيل معماري',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    location: 'القاهرة الجديدة',
    year: '2026',
    area: '28 م²',
    material: 'ستانلس ستيل 304 + جرافيت مطفي',
    finish: 'Brushed Hairline Steel',
    summary:
      'مطبخ مفتوح بجزيرة مركزية من الاستيل المصقول بالكامل مع وحدات طويلة بدون مقابض بتشطيب فحمي مطفي، لتجربة استخدام عملية وسهلة التنظيف.',
    details: [
      'سطح عمل وحوض مدمج بدون فواصل من ستانلس ستيل 304 بسُمك 1.5 مم',
      'وحدات تخزين رأسية بآليات فتح Push-to-Open وإغلاق هادئ',
      'توزيع هندسي لمثلث الحركة يراعي الإضاءة الطبيعية والتهوية',
    ],
    image: '/images/hero-kitchen.jpg',
  },
  {
    id: 'kp-02',
    code: 'KP-2026-02',
    title: 'وحدة مطبخ ستانلس متصلة',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    location: 'الشيخ زايد',
    year: '2026',
    area: '19 م²',
    material: 'ستانلس ستيل 304 + رمادي ناعم',
    finish: 'Matte Soft Gray / Brushed Steel',
    summary:
      'تصميم خطي هادئ يجمع بين مقاومة الاستيل في منطقة التحضير والغسيل مع وحدات علوية باللون الرمادي الناعم وإضاءة خطية مخفية.',
    details: [
      'تقطيع ليزر دقيق لضمان استقامة الفواصل بنسبة 2 مم فقط',
      'إضاءة LED محايدة 4000K مدمجة داخل الهيكل العلوي',
      'عزل داخلي لتقليل صوت الماء والارتطام على سطح الاستيل',
    ],
    image: '/images/project-steel-kitchen.jpg',
  },
  {
    id: 'kp-03',
    code: 'KP-2026-03',
    title: 'مطبخ جرافيت وحجر طبيعي',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    location: 'العاصمة الإدارية',
    year: '2025',
    area: '24 م²',
    material: 'جرافيت مطفي مضاد للبصمات + حجر رمادي',
    finish: 'Anti-Fingerprint Matte Graphite',
    summary:
      'تكوين معماري متوازن يعتمد على واجهات جرافيت مطفية مقاومة للبصمات والخدوش مع جزيرة حجرية وتفاصيل استيل دقيقة في المقابض والحوض.',
    details: [
      'واجهات مقاومة للبصمات والحرارة مع حواف ليزر غير مرئية',
      'نظام تنظيم داخلي للأدراج من الألومنيوم المؤكسد',
      'تكامل كامل مع الأجهزة المدمجة Built-In',
    ],
    image: '/images/project-graphite-kitchen.jpg',
  },
  {
    id: 'kp-04',
    code: 'KP-2026-04',
    title: 'واجهات وشبابيك منزلقة عازلة',
    category: 'windows',
    categoryLabel: 'الشبابيك',
    location: 'الساحل الشمالي',
    year: '2026',
    area: '42 م² واجهات',
    material: 'ألومنيوم Thermal-Break + زجاج مزدوج',
    finish: 'Powder-Coated Charcoal Matte',
    summary:
      'شبابيك وأبواب منزلقة بارتفاع كامل من الأرضية للسقف بقطاعات نحيفة تزيد من دخول الإضاءة الطبيعية مع عزل حراري وصوتي فعّال.',
    details: [
      'زجاج مزدوج 24 مم محقون بغاز الأرجون للعزل الحراري',
      'مجاري تصريف مياه مخفية ومقاومة لظروف الرطوبة الساحلية',
      'مفصلات وعجلات تتحمل أوزان الضلف الكبيرة بسلاسة تامة',
    ],
    image: '/images/project-windows.jpg',
  },
  {
    id: 'kp-05',
    code: 'KP-2026-05',
    title: 'دريسنج روم بإطارات زجاجية',
    category: 'dressing',
    categoryLabel: 'الدريسنج',
    location: 'التجمع الخامس',
    year: '2026',
    area: '16 م²',
    material: 'ألومنيوم فحمي + زجاج مدخن + رمادي معماري',
    finish: 'Anodized Charcoal & Smoked Glass',
    summary:
      'غرفة ملابس منظمة بأبواب زجاجية مدخنة وإطارات معدنية دقيقة، مع أرفف قابلة للتعديل وإضاءة خطية تشتغل تلقائياً عند الفتح.',
    details: [
      'وحدات تعليق من الاستيل المصقول وأدراج مبطنة للإكسسوارات',
      'حساسات حركة هادئة لإضاءة الأرفف الداخلية',
      'استغلال كامل للارتفاع حتى السقف بدون مساحات مهدرة',
    ],
    image: '/images/project-dressing.jpg',
  },
  {
    id: 'kp-06',
    code: 'KP-2025-06',
    title: 'تفاصيل تجميع وحواف ستيل CNC',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    location: 'ورشة Kitchen Pro',
    year: '2026',
    area: 'تفاصيل هندسية',
    material: 'ستانلس ستيل 304 مقوى',
    finish: 'Precision Mitered Edge',
    summary:
      'نموذج يوضح دقة التقاء الزوايا 45 درجة، تشطيب الحواف المصقولة، وانسيابية المجاري المخفية التي تمنح كل وحدة عمراً افتراضياً طويلاً.',
    details: [
      'تشكيل وتثنية على ماكينات CNC بدقة ±0.5 مم',
      'لحام وتنعيم غير مرئي للزوايا والأسطح المتصلة',
      'اختبار تحمل الحركة لـ 80,000 دورة فتح وإغلاق',
    ],
    image: '/images/craftsmanship-steel.jpg',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'المعاينة والرفع المساحي',
    duration: '1 – 2 يوم',
    description:
      'رفع المقاسات بالليزر في الموقع بدقة مليمترية ودراسة نقاط الكهرباء والسباكة والإضاءة الطبيعية.',
  },
  {
    step: '02',
    title: 'التصميم الهندسي واعتماد الخامات',
    duration: '3 – 5 أيام',
    description:
      'إعداد رسومات تنفيذية وتصور ثلاثي الأبعاد واضح، مع اختيار عينات الاستيل والقطاعات والإكسسوارات.',
  },
  {
    step: '03',
    title: 'التصنيع الدقيق في المصنع',
    duration: '14 – 21 يوماً',
    description:
      'التقطيع والتشكيل على خطوط CNC مع فحص جودة لكل مفصلة وحافة وتشطيب قبل خروج المشروع.',
  },
  {
    step: '04',
    title: 'التركيب والضبط والتسليم',
    duration: '2 – 4 أيام',
    description:
      'تركيب احترافي بواسطة فريق فني متخصص، وزن جميع الضلف والأدراج، وتسليم شهادة الضمان.',
  },
];

export const MATERIAL_SPECS: MaterialSpec[] = [
  {
    code: 'MAT-01',
    name: 'ستانلس ستيل 304 مصقول',
    origin: 'مقاوم للصدأ والحرارة',
    swatch: '#8C9298',
    thickness: '1.2 – 1.5 mm',
    usage: 'الأسطح، الأحواض المدمجة، وهياكل المطابخ',
  },
  {
    code: 'MAT-02',
    name: 'فحمي مطفي مقاوم للبصمات',
    origin: 'تشطيب معماري هادئ',
    swatch: '#25292D',
    thickness: '18 mm',
    usage: 'واجهات المطابخ وإطارات الشبابيك',
  },
  {
    code: 'MAT-03',
    name: 'جرافيت معماري عميق',
    origin: 'مقاوم للخدش والرطوبة',
    swatch: '#343A40',
    thickness: '18 – 22 mm',
    usage: 'وحدات التخزين والدريسنج روم',
  },
  {
    code: 'MAT-04',
    name: 'رمادي ناعم مطفي',
    origin: 'توازن بصري وإضاءة',
    swatch: '#E5E7E8',
    thickness: '18 mm',
    usage: 'الوحدات العلوية والأرفف الداخلية',
  },
];
