import { CourseItem, CourseCategoryId, LearningPathItem } from '../core/types/academy';

export interface CategoryMeta {
  id: CourseCategoryId;
  title: string;
  tagline: string;
  badge: string;
  iconName: string;
  color: string;
  bgGlow: string;
}

export const ACADEMY_CATEGORIES: CategoryMeta[] = [
  {
    id: 'frontend',
    title: 'تطوير واجهات الويب (Front-End)',
    tagline: 'بناء واجهات مستخدم فائقة السرعة والتفاعلية بأحدث معايير الويب',
    badge: 'برمجة الويب',
    iconName: 'Layout',
    color: '#00D2FF',
    bgGlow: 'rgba(0, 210, 255, 0.15)',
  },
  {
    id: 'backend',
    title: 'تطوير الواجهات الخلفية (Back-End)',
    tagline: 'هندسة الخوادم وقواعد البيانات والـ APIs السحابية المقاومة للأحمال',
    badge: 'الأنظمة السحابية',
    iconName: 'Server',
    color: '#0066FF',
    bgGlow: 'rgba(0, 102, 255, 0.15)',
  },
  {
    id: 'mobile-apps',
    title: 'تطوير تطبيقات الجوال (Flutter)',
    tagline: 'تطبيقات أصلية احترافية لنظامي Android و iOS بكود برمجي موحد',
    badge: 'الهواتف الذكية',
    iconName: 'Smartphone',
    color: '#10B981',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    id: 'cybersecurity',
    title: 'الأمن السيبراني (Cybersecurity)',
    tagline: 'حماية الأنظمة واكتشاف الثغرات وتأمين البنى الرقمية الحساسة',
    badge: 'الحماية والدفاع',
    iconName: 'ShieldCheck',
    color: '#8B5CF6',
    bgGlow: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 'networks',
    title: 'شبكات الحاسوب والبنية التحتية',
    tagline: 'تأسيس وإدارة شبكات الشركات وكابلات PoE وكاميرات المراقبة',
    badge: 'البنية التحتية',
    iconName: 'Network',
    color: '#38A2FF',
    bgGlow: 'rgba(56, 162, 255, 0.15)',
  },
  {
    id: 'hardware-maintenance',
    title: 'صيانة الهواتف الذكية (Hardware)',
    tagline: 'الفحص الميكروسكوبي، لحام المكونات الدقيقة، وإصلاح اللوحات الأم',
    badge: 'صيانة عتاد',
    iconName: 'Wrench',
    color: '#F59E0B',
    bgGlow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'software-troubleshooting',
    title: 'سوفت وير الهواتف وإصلاح الأنظمة',
    tagline: 'التفليش، فك الحماية، معالجة أخطاء الإقلاع، واستعادة البيانات',
    badge: 'سوفت وير وفيرموير',
    iconName: 'Cpu',
    color: '#EC4899',
    bgGlow: 'rgba(236, 72, 153, 0.15)',
  },
];

export const ACADEMY_COURSES: CourseItem[] = [
  // 1. Front-End Development
  {
    id: 'course-frontend-pro',
    slug: 'modern-frontend-development',
    title: 'هندسة واجهات الويب الاحترافية (React & TypeScript)',
    category: 'frontend',
    categoryLabel: 'تطوير واجهات الويب',
    shortDescription: 'برنامج تطبيقي مكثف لإتقان بناء منصات الويب السريعة والتفاعلية باستخدام React 19، TypeScript، Tailwind CSS وأفضل ممارسات الأداء.',
    description: 'يغطي هذا المسار العملي أسس تطوير الواجهات الأمامية الحديثة من الصفر حتى المعمارية المتقدمة للشركات. يتعلم المتدرب كيفية كتابة كود نظيف وقابل للصيانة، وبناء نظم تصميم متكاملة (Design Systems)، وإدارة الحالة المعقدة، مع التركيز على سرعة التحميل وتجربة المستخدم السلسة.',
    level: 'intermediate',
    duration: '10 أسابيع (60 ساعة تدريبية)',
    totalHours: 60,
    format: 'hybrid',
    formatLabel: 'مختبرات عملية + جلسات تفاعلية',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'إتقان JavaScript Modern (ESNext) والبرمجة غير المتزامنة (Async/Await)',
      'التحكم الكامل بأنماط TypeScript وأنظمة الأنواع الصارمة في التطبيقات الكبيرة',
      'بناء واجهات تفاعلية متقدمة عبر React 19 وHooks المخصصة',
      'تطبيق استراتيجيات تحسين الأداء (Web Vitals) وأمان الواجهات الأمامية',
      'تطوير مشاريع حقيقية متوافقة مع متطلبات شركات التكنولوجيا وسوق العمل'
    ],
    prerequisites: [
      'معرفة أساسية بأساسيات الحاسوب واستخدام برامج التحرير مثل VS Code',
      'فهم مبدئي لهيكلية الويب (HTML / CSS)'
    ],
    curriculum: [
      {
        id: 'mod-fe-1',
        moduleNumber: '01',
        title: 'الأساس المتين: هندسة الويب الحديثة و Modern JavaScript',
        duration: 'أسبوعان',
        topics: ['Semantic HTML & Accessibility (A11y)', 'CSS Architecture & Flexbox/Grid Mastery', 'ES6+ Features, Closures & Event Loop', 'DOM Manipulation & Fetch API'],
        handsOnProject: 'بناء واجهة لوحة تحكم سريعة الاستجابة بدون أطر عمل خارجية.'
      },
      {
        id: 'mod-fe-2',
        moduleNumber: '02',
        title: 'إتقان TypeScript في بيئات الإنتاج',
        duration: 'أسبوعان',
        topics: ['Interfaces vs Types', 'Generics & Utility Types', 'Narrowing & Type Guards', 'تكامل TypeScript مع بيئات Vite الحديثة'],
        handsOnProject: 'بناء مكتبة أدوات معالجة بيانات مكتوبة بالكامل بـ TypeScript Type-Safe.'
      },
      {
        id: 'mod-fe-3',
        moduleNumber: '03',
        title: 'منظومة React 19 والتحكم بالحالة',
        duration: '3 أسابيع',
        topics: ['React Component Lifecycle & Re-render Optimization', 'Custom Hooks & State Machines', 'Context API & Scalable Store Architecture', 'Tailwind CSS Component System'],
        handsOnProject: 'منصة متجر إلكتروني تفاعلية كاملة مع سلة مشتريات وفلاتر بحث لحظية.'
      },
      {
        id: 'mod-fe-4',
        moduleNumber: '04',
        title: 'المشروع التخرجي والجاهزية لسوق العمل',
        duration: '3 أسابيع',
        topics: ['API Integration & Caching', 'Authentication & Protected Routes', 'Core Web Vitals Optimization', 'إعداد الـ Portfolio وورشة مقابلات العمل الفنية'],
        handsOnProject: 'مشروع تخرج متكامل جاهز للنشر على السحابة مع اختبارات الجودة.'
      }
    ],
    projects: [
      {
        title: 'لوحة تحكم وتحليلات مالية تفاعلية',
        description: 'داشبورد متكامل للشركات يدعم الوضعين الداكن والفاتح، ورسوم بيانية حية، وتصفية بيانات متقدمة.',
        technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts']
      },
      {
        title: 'منصة حجز واستشارات تقنية متكاملة',
        description: 'تطبيق ويب كامل مع نظام تقويم للمواعيد، ونماذج إدخال مؤمنة، وإشعارات فورية للمستخدمين.',
        technologies: ['React', 'TypeScript', 'Zod', 'Vite']
      }
    ],
    faqs: [
      {
        question: 'هل يؤهلني هذا الكورس للعمل كـ Junior Front-End Developer؟',
        answer: 'نعم، صُمم المنهج بالكامل ليركز على المهارات التي تطلبها الشركات في المقابلات الفنية: TypeScript الصارم، كتابة كود منظم، وتنفيذ مشاريع فعلية من الصفر.'
      },
      {
        question: 'هل أحتاج لجهاز حاسوب ذي مواصفات خارقة؟',
        answer: 'لا، أي جهاز حاسوب متوسط بذاكرة عشوائية (RAM) لا تقل عن 8GB ومعالج Core i3 أو أعلى يكفي تماماً لبدء التدريب.'
      }
    ]
  },

  // 2. Back-End Development
  {
    id: 'course-backend-engineering',
    slug: 'backend-engineering-apis',
    title: 'هندسة الباك إند وقواعد البيانات (Node.js & PostgreSQL)',
    category: 'backend',
    categoryLabel: 'تطوير الواجهات الخلفية',
    shortDescription: 'بناء واجهات برمجية RESTful وGraphQL سريعة وقواعد بيانات علائقية مشفرة ومصممة للتعامل مع آلاف الطلبات المتزامنة.',
    description: 'دورة عملية شاملة تركز على البنية التحتية الخلفية للتطبيقات والمواقع. يتعلم الطالب كيفية تصميم المخططات العلائقية، وحماية الأنظمة من هجمات الحقن، وتوثيق APIs وفق معايير OpenAPI، وإدارة العمليات غير المتزامنة ومزامنة الذاكرة عبر Redis.',
    level: 'intermediate',
    duration: '10 أسابيع (60 ساعة تدريبية)',
    totalHours: 60,
    format: 'hybrid',
    formatLabel: 'مختبرات برمجية وسيرفرات تجريبية',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'فهم عميق لبنية Node.js Event Loop والعمليات غير المتزامنة',
      'تصميم قواعد بيانات PostgreSQL علائقية متقدمة مع تحسين الفهارس واستعلامات SQL',
      'بناء أنظمة مصادقة متعددة المستويات (JWT, Refresh Tokens, RBAC)',
      'تطبيق هندسة معمارية متعددة الطبقات (Controller - Service - Repository)',
      'نشر وتأمين الخدمات السحابية عبر Docker وCI/CD'
    ],
    prerequisites: [
      'إلمام جيد بأساسيات لغة JavaScript وهياكل البيانات الأساسية',
      'فهم مبادئ عمل شبكة الإنترنت وبروتوكول HTTP'
    ],
    curriculum: [
      {
        id: 'mod-be-1',
        moduleNumber: '01',
        title: 'أساسيات الخوادم وبيئة تشغيل Node.js',
        duration: 'أسبوعان',
        topics: ['Node.js Runtime & Modules', 'Streams & Buffer Internals', 'Building HTTP Server from scratch', 'Express.js Framework & Middleware Pipeline'],
        handsOnProject: 'خادم API مصغر يدعم رفع الملفات وتسجيل السجلات وتحديد معدل الطلبات Rate Limiting.'
      },
      {
        id: 'mod-be-2',
        moduleNumber: '02',
        title: 'قواعد البيانات العلائقية ومحرك PostgreSQL',
        duration: '3 أسابيع',
        topics: ['Relational Database Modeling (ERD)', 'Complex SQL Queries & Joins', 'Indexes, Constraints & Transactions (ACID)', 'Database Migrations & Prisma ORM'],
        handsOnProject: 'مخطط قاعدة بيانات بنكية يدعم التحويلات المالية الآمنة بنظام Transactions المعزولة.'
      },
      {
        id: 'mod-be-3',
        moduleNumber: '03',
        title: 'الأمان المتقدم والمصادقة والذاكرة المؤقتة',
        duration: '3 أسابيع',
        topics: ['JWT Authentication & Two-Factor Auth', 'Role-Based Access Control (RBAC)', 'Redis Caching & Session Management', 'Security Best Practices (OWASP API Top 10)'],
        handsOnProject: 'بوابة تسجيل ومصادقة مشفرة مزودة بالـ 2FA ومحمية ضد Brute-force attacks.'
      },
      {
        id: 'mod-be-4',
        moduleNumber: '04',
        title: 'الحاويات والنشر السحابي والمراقبة',
        duration: 'أسبوعان',
        topics: ['Dockerizing Microservices & Multi-stage builds', 'Cloud Deployment on VPS / Cloud Providers', 'Logging & Monitoring with Winston & Prometheus', 'API Documentation with Swagger'],
        handsOnProject: 'نشر حزمة API كاملة باستخدام Docker Compose مع قاعدة البيانات ومراقبة الأداء.'
      }
    ],
    projects: [
      {
        title: 'نظام إدارة اشتراكات وفواتير مؤسسي',
        description: 'خادم كامل لمعالجة المدفوعات والاشتراكات الدورية مع إصدار الفواتير الآلي وتوليد تقارير PDF.',
        technologies: ['Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker']
      }
    ],
    faqs: [
      {
        question: 'هل يتناول الكورس لغات أخرى مثل Python أو Go؟',
        answer: 'يركز المسار الأساسي على Node.js وTypeScript نظراً لانتشارهما الواسع وسهولة دمجهما مع الواجهات الأمامية، مع توضيح المفاهيم المعمارية العامة التي تنطبق على جميع لغات الباك إند.'
      }
    ]
  },

  // 3. Mobile Application Development
  {
    id: 'course-mobile-flutter',
    slug: 'flutter-mobile-app-development',
    title: 'تطوير تطبيقات الجوال الشاملة (Flutter & Dart)',
    category: 'mobile-apps',
    categoryLabel: 'تطوير تطبيقات الجوال',
    shortDescription: 'برنامج تدريبي لبناء تطبيقات هواتف ذكية متطورة وسريعة لنظامي Android و iOS بكود برمجي واحد وقواعد بيانات محلية وسحابية.',
    description: 'يأخذك هذا المسار في رحلة عملية لإتقان إطار العمل الرائد Flutter. من تصميم واجهات المستخدم التفاعلية المتوافقة مع إرشادات Material Design وCupertino، إلى إدارة الحالة المتقدمة عبر Bloc/Cubit والعمل دون اتصال بالإنترنت، حتى نشر التطبيق في المتاجر الرسمية.',
    level: 'beginner',
    duration: '10 أسابيع (60 ساعة تدريبية)',
    totalHours: 60,
    format: 'hybrid',
    formatLabel: 'مختبرات برمجة تطبيقات + محاكاة حقيقية',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'فهم لغة Dart ومفاهيم البرمجة كائنية التوجه (OOP) والبرمجة الوظيفية',
      'بناء واجهات هاتف مستجيبة وسلسة تعمل بمعدل 60 إطاراً في الثانية',
      'إتقان إدارة الحالة (State Management) المتقدمة باستخدام Bloc & Cubit',
      'الربط بالخوادم عبر REST APIs والتعامل مع الكاش المحلي عبر Hive/SQLite',
      'إعداد التطبيق للنشر على متجري Google Play وApple App Store'
    ],
    prerequisites: [
      'فهم أولي لمفاهيم البرمجة الأساسية (المتغيرات، الدوال، الشروط)',
      'جهاز حاسوب يدعم تشغيل محاكي Android أو توصيل هاتف ذكي حقيقي للاختبار'
    ],
    curriculum: [
      {
        id: 'mod-fl-1',
        moduleNumber: '01',
        title: 'لغة Dart وأساسيات بناء واجهات Flutter',
        duration: 'أسبوعان',
        topics: ['Dart Syntax, Null Safety & Collections', 'OOP in Dart: Classes, Inheritance & Mixins', 'Flutter Widget Tree: Stateless vs Stateful', 'Layouts, Rows, Columns & Scrollable Views'],
        handsOnProject: 'تطبيق محفظة أعمال شخصية وبطاقة هوية تفاعلية على الجوال.'
      },
      {
        id: 'mod-fl-2',
        moduleNumber: '02',
        title: 'الواجهات المتقدمة وتجربة المستخدم السلسة',
        duration: 'أسبوعان',
        topics: ['Custom Painters & Animations', 'Material 3 & Cupertino Theming', 'Responsive Screen Adaptations', 'Form Validation & User Input Handling'],
        handsOnProject: 'واجهة تطبيق حجز رحلات سياحية مع أنيميشن انتقال الشاشات التفاعلية.'
      },
      {
        id: 'mod-fl-3',
        moduleNumber: '03',
        title: 'المعمارية النظيفة وإدارة الحالة بـ Bloc',
        duration: '3 أسابيع',
        topics: ['Clean Architecture Layers (Data, Domain, Presentation)', 'Bloc & Cubit Deep Dive', 'Dependency Injection using GetIt', 'REST API Integration using Dio & Error Handling'],
        handsOnProject: 'تطبيق أخبار وتقارير تقنية يقرأ من API خارجي مع معالجة حالات عدم الاتصال.'
      },
      {
        id: 'mod-fl-4',
        moduleNumber: '04',
        title: 'التخزين المحلي والإشعارات والنشر النهائي',
        duration: '3 أسابيع',
        topics: ['Local Storage using Hive / Isar / SQLite', 'Push Notifications with Firebase Cloud Messaging', 'App Signing, Obfuscation & Security', 'Play Store & App Store Deployment Steps'],
        handsOnProject: 'تطبيق تجارة إلكترونية كامل يدعم تصفح المنتجات والسلة والإشعارات اللحظية.'
      }
    ],
    projects: [
      {
        title: 'تطبيق خدمات وتوصيل ذكي',
        description: 'تطبيق جوال كامل بمزامنة موقع المستخدم عبر الخرائط، وإدارة الطلبات، ولوحة سجل المشتريات.',
        technologies: ['Flutter', 'Dart', 'Bloc', 'Google Maps API', 'Firebase']
      }
    ],
    faqs: [
      {
        question: 'هل يمكنني برمجة تطبيقات iPhone دون امتلاك جهاز Mac؟',
        answer: 'يمكنك كتابة الكود واختباره على محاكي Android أو هواتف Android بالكامل، ولإنشاء حزمة iOS وبنائها يتم تدريبك على استخدام السيرفرات السحابية ومصادر البناء السحابي المعتمدة.'
      }
    ]
  },

  // 4. Cybersecurity
  {
    id: 'course-cybersecurity-fundamentals',
    slug: 'practical-cybersecurity-defense',
    title: 'الأمن السيبراني والدفاع الرقمي العملي',
    category: 'cybersecurity',
    categoryLabel: 'الأمن السيبراني',
    shortDescription: 'منهج تطبيقي في حماية الأنظمة الرقمية، تقييم الثغرات الأمنية، واكتشاف محاولات الاختراق، وتأمين الخوادم والشبكات.',
    description: 'صُمم هذا البرنامج لإعداد كوادر واعية بأساليب التهديدات السيبرانية الحديثة وطرق التحصين الفعالة. يتعامل المتدرب مع بيئات افتراضية معزولة لمحاكاة الهجمات وتحليل الثغرات، وتأمين البنى التحتية والتطبيقات وفق أطر الأمان العالمية.',
    level: 'intermediate',
    duration: '8 أسابيع (48 ساعة تدريبية)',
    totalHours: 48,
    format: 'practical-lab',
    formatLabel: 'مختبرات اختراق وفحص دفاعي معزولة',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'فهم ركائز الأمان السيبراني الأساسية (Confidentiality, Integrity, Availability)',
      'إتقان الفحص الأمني للشبكات والمنافذ واستخدام أدوات مثل Nmap وWireshark',
      'اكتشاف ومعالجة ثغرات تطبيقات الويب طبقاً لتصنيف OWASP Top 10',
      'تطبيق ممارسات التشفير وحماية كلمات المرور وإدارة الشهادات الرقمية SSL/TLS',
      'إعداد سياسات الاستجابة للحوادث الأمنية والنسخ الاحتياطي المقاوم للفدية'
    ],
    prerequisites: [
      'معرفة جيدة بمبادئ أنظمة التشغيل (Linux & Windows)',
      'فهم أساسي لبروتوكولات الشبكات (TCP/IP, DNS, HTTP)'
    ],
    curriculum: [
      {
        id: 'mod-sec-1',
        moduleNumber: '01',
        title: 'أساسيات الأمن الرقمي وبيئات نظام Linux',
        duration: 'أسبوعان',
        topics: ['Linux Terminal Mastery & Permissions', 'Threat Landscape & Attack Vectors', 'Cryptography Basics (Symmetric vs Asymmetric, Hashing)', 'Virtual Lab Setup with Kali Linux'],
        handsOnProject: 'تهيئة وتأمين خادم Linux مع تعطيل المنافذ الحساسة وإعداد جدار الحماية UFW.'
      },
      {
        id: 'mod-sec-2',
        moduleNumber: '02',
        title: 'أمن الشبكات واستكشاف المنافذ واعتراض الحزم',
        duration: 'أسبوعان',
        topics: ['Network Scanning with Nmap', 'Packet Analysis using Wireshark', 'Man-in-the-Middle (MITM) Mechanics & Defense', 'Securing Wi-Fi & VPN Tunnels'],
        handsOnProject: 'فحص شبكة داخلية واكتشاف الأجهزة المتصلة وتحليل حركة المرور غير المشفرة.'
      },
      {
        id: 'mod-sec-3',
        moduleNumber: '03',
        title: 'أمن تطبيقات الويب (OWASP Top 10)',
        duration: 'أسبوعان',
        topics: ['SQL Injection (SQLi) Detection & Mitigation', 'Cross-Site Scripting (XSS) & CSRF', 'Broken Authentication & Session Hijacking', 'Security Headers & Content Security Policy (CSP)'],
        handsOnProject: 'اختبار موقع ويب تجريبي واستخراج 5 ثغرات أمنية مع كتابة تقرير الإصلاح الفني.'
      },
      {
        id: 'mod-sec-4',
        moduleNumber: '04',
        title: 'الدفاع السيبراني والاستجابة للحوادث',
        duration: 'أسبوعان',
        topics: ['Endpoint Protection & EDR Fundamentals', 'Incident Response Lifecycle', 'Log Analysis & SIEM Introduction', 'Ransomware Protection Strategies'],
        handsOnProject: 'محاكاة سيناريو اختراق واكتشاف مسار المهاجم وتطهير النظام وإعداد تقرير الحادث.'
      }
    ],
    projects: [
      {
        title: 'تقرير فحص أمني شامل لبيئة افتراضية',
        description: 'إجراء تقييم ثغرات كامل على شبكة وموقع ويب افتراضيين وإعداد تقرير تدقيق أمني احترافي.',
        technologies: ['Kali Linux', 'Nmap', 'Burp Suite', 'Wireshark', 'Metasploitable']
      }
    ],
    faqs: [
      {
        question: 'هل التدريب قانوني وأخلاقي؟',
        answer: 'بالتأكيد، يتم التدريب حصرياً على مختبرات افتراضية معزولة ومرخصة لأغراض التدريس الأكاديمي، ونلتزم بأعلى معايير القرصنة الأخلاقية والدفاع السيبراني لحماية المنشآت.'
      }
    ]
  },

  // 5. Computer Networks
  {
    id: 'course-networks-infrastructure',
    slug: 'computer-networks-infrastructure',
    title: 'هندسة شبكات الحاسوب والبنى التحتية للمنشآت',
    category: 'networks',
    categoryLabel: 'شبكات الحاسوب والبنية التحتية',
    shortDescription: 'تصميم وتنفيذ وإدارة شبكات الشركات، السويتشات المدارة، عزل VLANs، شبكات كاميرات المراقبة، وربط الفروع عن بُعد.',
    description: 'مسار عملي هندسي موجه لمن يريد احتراف تأسيس وإدارة الشبكات السلكية واللاسلكية للشركات والمصانع والمنشآت التجارية. يغطي الكورس معايير الكابلات الهيكلية، سويتشات PoE لتشغيل كاميرات المراقبة، وتكوين أجهزة التوجيه وجدران الحماية وضمان استقرار الاتصال 24/7.',
    level: 'beginner',
    duration: '8 أسابيع (48 ساعة تدريبية)',
    totalHours: 48,
    format: 'practical-lab',
    formatLabel: 'أجهزة شبكية حقيقية + محاكاة Cisco Packet Tracer',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'فهم نموذج OSI ذي الطبقات السبع ونموذج بروتوكول TCP/IP',
      'تخطيط وعنونة الشبكات باستخدام IPv4 Subnetting و IPv6',
      'تكوين سويتشات الشبكة، وتقسيم الـ VLANs، وبروتوكول STP',
      'تأسيس شبكات PoE المخصصة لأنظمة المراقبة CCTV ومنع تداخل البيانات',
      'إعداد أجهزة الراوتر وجدران الحماية، والـ DHCP، و NAT، والـ VPN'
    ],
    prerequisites: [
      'فهم عام لمكونات الحاسوب وأنظمة التشغيل',
      'الرغبة في التدريب على معدات سلكية وأجهزة شبكية حقيقية'
    ],
    curriculum: [
      {
        id: 'mod-net-1',
        moduleNumber: '01',
        title: 'أسس الشبكات والتأريض والكابلات الهيكلية',
        duration: 'أسبوعان',
        topics: ['Network Topologies & Standards', 'Copper Cabling (Cat6/Cat7), Crimping & Patch Panels', 'Fiber Optic Fundamentals', 'Testing Cable Integrity with Network Testers'],
        handsOnProject: 'تأريج وتركيب كابلات Cat6 واختبارها على Patch Panel داخل كابينة Rack حقيقية.'
      },
      {
        id: 'mod-net-2',
        moduleNumber: '02',
        title: 'عنونة الشبكات IP Subnetting والتوجيه',
        duration: 'أسبوعان',
        topics: ['IPv4 Addressing & VLSM Subnetting Mastery', 'IPv6 Concepts', 'Routing Fundamentals (Static Routing vs Dynamic)', 'Default Gateway & NAT Mechanisms'],
        handsOnProject: 'تقسيم شبكة مؤسسية إلى 4 شبكات فرعية تلبي احتياجات الإدارة والموظفين والضيوف.'
      },
      {
        id: 'mod-net-3',
        moduleNumber: '03',
        title: 'التبديل المتقدم (Switching) وشبكات المراقبة PoE',
        duration: 'أسبوعان',
        topics: ['Managed Switches Configuration', 'VLANs Creation & Inter-VLAN Routing', 'Power over Ethernet (PoE) Budgets for Cameras', 'Quality of Service (QoS) for Video Streams'],
        handsOnProject: 'عزل شبكة كاميرات المراقبة في VLAN مستقلة لضمان أمان البث ومنع الاختراق.'
      },
      {
        id: 'mod-net-4',
        moduleNumber: '04',
        title: 'الأمان الشبكي والشبكات اللاسلكية والـ VPN',
        duration: 'أسبوعان',
        topics: ['Enterprise Wi-Fi Design & Access Points (APs)', 'Firewall Rules & Access Control Lists (ACLs)', 'Site-to-Site & Remote Access VPNs', 'Troubleshooting with Ping, Traceroute, Netstat'],
        handsOnProject: 'بناء نفق VPN آمن يربط بين فرعين للشركة مع تفعيل جدار الحماية ضد التطفل.'
      }
    ],
    projects: [
      {
        title: 'مخطط وتنفيذ شبكة متكاملة لمقر شركة ومبنى تجاري',
        description: 'تصميم شبكة كاملة تشمل 40 نقطة اتصال، شبكة كاميرات IP معزولة، ونظام واي فاي للموظفين والزوار.',
        technologies: ['Cisco Packet Tracer', 'Managed Switches', 'Ubiquiti UniFi APs', 'MikroTik / pfSense']
      }
    ],
    faqs: [
      {
        question: 'هل يؤهل هذا الكورس لامتحانات مثل Cisco CCNA؟',
        answer: 'يغطي المنهج نسبة كبيرة جداً من موضوعات امتحان CCNA الأساسية مع التركيز الإضافي على التطبيق الميداني الفعلي للشبكات والبنى التحتية للشركات.'
      }
    ]
  },

  // 6. Mobile Phone Hardware Maintenance
  {
    id: 'course-mobile-hardware-maintenance',
    slug: 'mobile-phone-hardware-repair',
    title: 'صيانة الهواتف الذكية المتقدمة (Hardware & Micro-Soldering)',
    category: 'hardware-maintenance',
    categoryLabel: 'صيانة الهواتف الذكية (عتاد)',
    shortDescription: 'دورة تطبيقية معملية في الفحص الميكروسكوبي، قياس مسارات الدوائر بالميلتيميتر، لحام المكونات الدقيقة، وإصلاح اللوحات الأم للهواتف الذكية.',
    description: 'يقدم هذا المسار تدريباً عملياً مباشراً في ورش ومختبرات ProSetup المجهزة بأحدث أجهزة الفحص واللحام. يتعلم المتدرب فك وتركيب الشاشات والبطاريات بأمان، وتشخيص أعطال الشحن والباور، وقراءة المخططات الإلكترونية (Schematics)، واستبدال الآيسيهات والدوائر المتكاملة (IC Reballing).',
    level: 'all-levels',
    duration: '8 أسابيع (50 ساعة تدريبية عملية)',
    totalHours: 50,
    format: 'practical-lab',
    formatLabel: 'تدريب معملي يدوي 100% في ورش مجهزة',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'استخدام أدوات الصيانة الاحترافية (الهوت إير، الكاوية الميكروسكوبية، الباور سبلاي، الملتيميتر)',
      'الفحص والتشخيص الاحترافي لأعطال الإقلاع (No Power) والشحن والشبكة والصوت',
      'قراءة المخططات الهندسية ومخططات اللوحات (Schematics & Boardview) عبر برامج مثل ZXW وBorneo',
      'إتقان تقنيات اللحام الدقيق (Micro-Soldering) وصب أرجل الآيسيهات (Reballing)',
      'استبدال المكونات السطحية (المقاومات، المكثفات، الملفات) دون إتلاف البوردة'
    ],
    prerequisites: [
      'دقة الملاحظة وثبات اليدين أثناء العمل على المكونات الدقيقة',
      'لا يُشترط وجود خبرة سابقة؛ يبدأ التدريب من أساسيات الفك والتركيب حتى المستويات الاحترافية'
    ],
    curriculum: [
      {
        id: 'mod-hw-1',
        moduleNumber: '01',
        title: 'أدوات الورشة وفك وتركيب الأجهزة الذكية بأمان',
        duration: 'أسبوعان',
        topics: ['Workshop Safety & ESD Protection', 'Disassembly of Modern Curved & Flat Screens', 'Battery Replacement without Thermal Damage', 'Housing & Flex Cables Handling'],
        handsOnProject: 'فك وتركيب هاتفين ذكيين (آيفون وأندرويد) بشكل كامل واختبار كافة المستشعرات.'
      },
      {
        id: 'mod-hw-2',
        moduleNumber: '02',
        title: 'القياسات الإلكترونية وتشخيص الدوائر الكهربائية',
        duration: 'أسبوعان',
        topics: ['Multimeter Mastery (Diode mode, Voltage, Resistance)', 'DC Power Supply Fault Diagnosis (Boot sequences)', 'Short Circuit Detection with Thermal Camera / Rosin', 'Charging Circuit Architecture & Tracing'],
        handsOnProject: 'اكتشاف وتحديد شورت صريح في خط الشحن VBUS واستبدال المكثف التالف بنجاح.'
      },
      {
        id: 'mod-hw-3',
        moduleNumber: '03',
        title: 'قراءة المخططات الهندسية (Borneo & ZXW)',
        duration: 'أسبوعان',
        topics: ['Reading Schematics & Boardview', 'Signal Lines & Power Rails Tracing', 'Diagnosing Audio & Touch & Display Faults', 'Network Baseband Signal Flow'],
        handsOnProject: 'تتبع مسار شاشة مقطوع على البوردة وتعويضه بسلك توصيل ميكروسكوبي (Jumper Wire).'
      },
      {
        id: 'mod-hw-4',
        moduleNumber: '04',
        title: 'اللحام الميكروسكوبي وصب الآيسيهات (Micro-Soldering)',
        duration: 'أسبوعان',
        topics: ['Microscope Ergonomics & Lens Calibration', 'Hot Air Temperature & Airflow Management', 'SMD Components Removal & Replacement', 'BGA IC Cleaning, Stenciling & Reballing'],
        handsOnProject: 'رفع وتنظيف وإعادة صب وتركيب آيسي شحن (Charging IC) بنجاح واختبار استجابة الهاتف.'
      }
    ],
    projects: [
      {
        title: 'إصلاح لوحة أم تالفة (دراسة حالة حقيقية)',
        description: 'استلام جهاز متوقف عن العمل تماماً بعد تعرضه لسائل، تتبع الشورت، تنظيف البوردة، واستبدال القطع التالفة وتشغيل الجهاز.',
        technologies: ['Trinocular Microscope', 'Micro Soldering Station', 'Borneo Schematics', 'Thermal Imager']
      }
    ],
    faqs: [
      {
        question: 'هل يتم توفير الأدوات والأجهزة أثناء التدريب؟',
        answer: 'نعم، نوفر لكل متدرب محطة عمل مجهزة بميكروسكوب، ومحطة لحام، وباور سبلاي، وهواتف تدريبية مخصصة للتمارين المعملية.'
      }
    ]
  },

  // 7. Mobile Software and Firmware Troubleshooting
  {
    id: 'course-mobile-software-repair',
    slug: 'smartphone-software-firmware-repair',
    title: 'سوفت وير الهواتف الذكية وحلول الفيرموير (Software & Flashing)',
    category: 'software-troubleshooting',
    categoryLabel: 'سوفت وير الهواتف وإصلاح الأنظمة',
    shortDescription: 'احتراف تفليش الرومات الرسمية والمعدلة، فك حماية FRP، إصلاح مناطق التمهيد (Bootloader)، واستعادة الهواتف المتوقفة عن العمل (Unbricking).',
    description: 'دورة تخصصية لمعالجة كافة مشكلات البرمجيات وأنظمة التشغيل لأجهزة Android وiOS. يتعلم المتدرب كيفية التعامل مع أوضاع الطوارئ (EDL, Fastboot, Recovery, DFU)، واستخدام البوكسات والدونجلات المعتمدة، ومعالجة مشكلات الشبكة ورقم السيريال (IMEI / Baseband)، واستخراج البيانات من الأجهزة المعطوبة.',
    level: 'all-levels',
    duration: '6 أسابيع (36 ساعة تدريبية)',
    totalHours: 36,
    format: 'practical-lab',
    formatLabel: 'ورش وتطبيقات برمجية على أجهزة حقيقية',
    pricingLabel: 'يُحدد عند فتح التسجيل',
    availability: 'open',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80',
    objectives: [
      'فهم بنية نظام Android ومسارات التقسيم (Partition Tables: boot, system, vendor, userdata)',
      'إتقان تفليش هواتف Samsung ببرنامج Odin، وهواتف Xiaomi عبر Mi Flash، وأجهزة MTK وQualcomm',
      'التعامل مع أوضاع الطوارئ مثل Qualcomm EDL 9008 و MTK BROM',
      'إصلاح مشكلات الوقوف على الشعار (Bootloop) وتلف البوت (Brick Recovery)',
      'استخدام الدونجلات والبوكسات الرائدة في الصيانة (UnlockTool, Chimera, Octoplus)'
    ],
    prerequisites: [
      'إجادة التعامل مع أنظمة تشغيل الكمبيوتر Windows وتثبيت التعريفات (Drivers)',
      'فهم المصطلحات التقنية الأساسية للهواتف الذكية'
    ],
    curriculum: [
      {
        id: 'mod-sw-1',
        moduleNumber: '01',
        title: 'بنية أنظمة الهواتف وتثبيت التعريفات وأوضاع التشغيل',
        duration: 'أسبوع',
        topics: ['Android Architecture & Partitions', 'ADB & Fastboot Commands in Practice', 'Driver Installation (Qualcomm, MTK, Unisoc, Samsung)', 'Boot Modes: Download, Recovery, EDL, DFU'],
        handsOnProject: 'تهيئة بيئة الصيانة الحاسوبية، وتثبيت التعريفات النظيفة، والتحكم بالهاتف عبر أوامر Fastboot.'
      },
      {
        id: 'mod-sw-2',
        moduleNumber: '02',
        title: 'تفليش الرومات الرسمية وتحديث الأنظمة',
        duration: 'أسبوعان',
        topics: ['Samsung Firmware Types (4-Files vs 1-File) & Odin', 'Xiaomi Fastboot ROMs & Mi Flash Tool', 'MediaTek SP Flash Tool & Scatter Files', 'Qualcomm QFIL & QPST Tools'],
        handsOnProject: 'تفليش هاتفين معلقين على الشعار بنجاح وإعادتهما إلى وضع المصنع الرسمي بأمان.'
      },
      {
        id: 'mod-sw-3',
        moduleNumber: '03',
        title: 'معالجة مشكلات الإقلاع والحماية المتقدمة',
        duration: 'أسبوعان',
        topics: ['Fixing Hard Brick & Soft Brick', 'FRP Bypass Standards & Security Patches', 'Mi Account / Huawei ID Diagnostic Workflows', 'Bootloader Unlocking: Risks & Methods'],
        handsOnProject: 'استعادة هاتف واقع في وضع Qualcomm EDL 9008 عن طريق ملفات الـ Firehose المناسبة.'
      },
      {
        id: 'mod-sw-4',
        moduleNumber: '04',
        title: 'الشبكة ورقم السيريال (Baseband & IMEI) واستعادة البيانات',
        duration: 'أسبوع',
        topics: ['Baseband Unknown & IMEI Null Diagnostics', 'EFS Partition Backup & Restore', 'Data Extraction from Screen-Broken Devices', 'Legal & Ethical Considerations in Device Software Repair'],
        handsOnProject: 'أخذ نسخة احتياطية لمنطقة EFS لهاتف سليم، ومحاكاة استعادتها بعد حدوث تلف برمجي.'
      }
    ],
    projects: [
      {
        title: 'إحياء هاتف ذكي مغلق في وضع الطوارئ EDL',
        description: 'تشخيص هاتف لا يستجيب لأي أزرار، إدخاله عبر نقاط Test Point في وضع EDL 9008، وتمرير الفيرموير المعتمد وإعادته للعمل.',
        technologies: ['UnlockTool', 'Odin', 'SP Flash Tool', 'QFIL', 'ADB & Fastboot']
      }
    ],
    faqs: [
      {
        question: 'هل يشمل الكورس التعامل مع هواتف iPhone؟',
        answer: 'نعم، يشمل الكورس التعامل مع رومات iOS الرسمية عبر iTunes و3uTools، وأوضاع DFU / Recovery، واستعادة وتحديث أجهزة Apple مع حل أخطاء (Error 4013, Error 9) البرمجية.'
      }
    ]
  }
];

export const ACADEMY_LEARNING_PATHS: LearningPathItem[] = [
  {
    id: 'path-frontend-engineer',
    slug: 'frontend-engineer-path',
    categoryId: 'frontend',
    title: 'مسار مهندس واجهات الويب (Front-End Engineer)',
    subtitle: 'من الصفر حتى بناء المنصات التفاعلية السريعة واحتراف React وTypeScript',
    targetRole: 'مهندس واجهات أمامية / React Front-End Developer',
    estimatedDuration: '3 - 4 أشهر',
    level: 'من البداية حتى الاحتراف',
    description: 'مسار متكامل مصمم لنقلك من المعرفة الأساسية بالويب إلى مستوى متقدم يؤهلك للعمل في كبرى شركات التقنية، مع التركيز على الكود النظيف، ونظم التصميم، وأداء الويب الفائق.',
    milestones: [
      {
        step: '01',
        title: 'إتقان الأساسيات الهندسية',
        description: 'بناء هياكل ويب بمعايير الوصول العالمية A11y، وتخطيطات CSS المتقدمة، وإتقان JavaScript الحديثة.',
        skills: ['HTML5 Semantic', 'CSS Flexbox & Grid', 'Modern JavaScript (ES6+)', 'DOM & Web APIs']
      },
      {
        step: '02',
        title: 'البرمجة الصارمة بـ TypeScript',
        description: 'كتابة شفرات خالية من الأخطاء النوعية، وتصميم واجهات البيانات المعقدة.',
        skills: ['TypeScript Generics', 'Strict Typing', 'Type Narrowing', 'Vite Bundler']
      },
      {
        step: '03',
        title: 'معمارية وتطوير React 19',
        description: 'بناء مكونات تفاعلية، إدارة الحالة المعقدة، والتحكم بالأداء.',
        recommendedCourseSlug: 'modern-frontend-development',
        skills: ['React 19 Components', 'Custom Hooks', 'Tailwind CSS', 'State Management']
      },
      {
        step: '04',
        title: 'الجاهزية للإنتاج وسوق العمل',
        description: 'تكامل الـ APIs، تحسين سرعة التحميل Core Web Vitals، ونشر المشاريع التخرجية على السحابة.',
        skills: ['Web Performance', 'SEO Integration', 'CI/CD Deployment', 'Technical Interview Prep']
      }
    ],
    capstoneProject: 'تطوير منصة وتطبيق ويب لإدارة المشاريع وفرق العمل مع داشبورد تحليلات فوري.',
    careerOutcomes: [
      'العمل كـ Junior/Mid Front-End Developer في شركات البرمجة',
      'تطوير مشاريع مستقلة Freelancing عالية الجودة على المنصات العالمية',
      'بناء واجهات الشركات والمتاجر الإلكترونية المتطورة'
    ]
  },
  {
    id: 'path-backend-engineer',
    slug: 'backend-engineer-path',
    categoryId: 'backend',
    title: 'مسار مهندس الأنظمة الخلفية (Back-End Engineer)',
    subtitle: 'تصميم البنى التحتية السحابية وقواعد البيانات والـ APIs المتزامنة',
    targetRole: 'مهندس باك إند / Node.js & Database Engineer',
    estimatedDuration: '3 - 4 أشهر',
    level: 'متوسط إلى متقدم',
    description: 'مسار هندسي عميق يركز على كفاءة الخوادم، أمان واجهات البرمجة، هندسة قواعد البيانات المليونية، واستخدام التقنيات الحديثة مثل Docker وRedis.',
    milestones: [
      {
        step: '01',
        title: 'بيئة تشغيل Node.js وبناء الخوادم',
        description: 'فهم الـ Event Loop، بناء خوادم RESTful نظيفة، وتصميم خطوط المعالجة Middleware.',
        skills: ['Node.js Architecture', 'Express Framework', 'HTTP Protocols', 'Asynchronous Programming']
      },
      {
        step: '02',
        title: 'هندسة قواعد البيانات PostgreSQL',
        description: 'تصميم المخططات المترابطة، كتابة استعلامات SQL متقدمة، وضمان سلامة المعاملات ACID.',
        skills: ['PostgreSQL Schema Design', 'Complex SQL & Joins', 'Prisma ORM', 'Database Indexes']
      },
      {
        step: '03',
        title: 'الأمان، المصادقة والذاكرة المؤقتة',
        description: 'تطبيق أمان الـ APIs، المصادقة بـ JWT والـ 2FA، وتسريع الاستجابة عبر Redis.',
        recommendedCourseSlug: 'backend-engineering-apis',
        skills: ['OAuth & JWT', 'Redis Caching', 'OWASP API Security', 'Rate Limiting']
      },
      {
        step: '04',
        title: 'الحاويات والنشر السحابي',
        description: 'تغليف التطبيقات في حاويات Docker ونشرها على السحابة مع المراقبة المستمرة.',
        skills: ['Docker & Compose', 'Cloud Deployment', 'Monitoring & Logging', 'API Documentation']
      }
    ],
    capstoneProject: 'بناء بنية خلفية لنظام مدفوعات وفواتير إلكترونية متعدد المستأجرين (Multi-tenant SaaS).',
    careerOutcomes: [
      'مهندس نظم خلفية Node.js في شركات تقنية ناشئة ومؤسسات كبرى',
      'تصميم وبناء البنى التحتية للأنظمة والتطبيقات',
      'تأمين وتطوير واجهات الربط البرمجي للشركات'
    ]
  },
  {
    id: 'path-mobile-developer',
    slug: 'mobile-app-developer-path',
    categoryId: 'mobile-apps',
    title: 'مسار مطور تطبيقات الجوال (Flutter Specialist)',
    subtitle: 'بناء تطبيقات فائقة الأداء لنظامي Android و iOS من قاعدة كود واحدة',
    targetRole: 'مطور تطبيقات جوال / Flutter Mobile Developer',
    estimatedDuration: '3 أشهر',
    level: 'من البداية حتى الاحتراف',
    description: 'مسار عملي سريع التوظيف يركز على إتقان إطار العمل Flutter وممارسات المعمارية النظيفة Clean Architecture لبناء تطبيقات هواتف سلسة ومطلوبة بشدة في السوق العربي والدولي.',
    milestones: [
      {
        step: '01',
        title: 'أساسيات لغة Dart وواجهات Flutter',
        description: 'البرمجة الكائنية OOP وتصميم الشاشات المتوافقة مع أجهزة الهواتف المختلفة.',
        skills: ['Dart OOP', 'Widget Hierarchy', 'Material & Cupertino', 'Responsive UI']
      },
      {
        step: '02',
        title: 'إدارة الحالة المتقدمة بـ Bloc',
        description: 'فصل طبقات التطبيق، والتحكم بالحالات المعقدة، وبناء تجارب استخدام احترافية.',
        recommendedCourseSlug: 'flutter-mobile-app-development',
        skills: ['Flutter Bloc & Cubit', 'Dependency Injection', 'Clean Architecture', 'Unit Testing']
      },
      {
        step: '03',
        title: 'الربط السحابي والبيانات المحلية',
        description: 'الربط بـ REST APIs، التخزين المحلي Offline-first، ومزامنة الإشعارات عبر Firebase.',
        skills: ['Dio Client', 'Hive / SQLite', 'Firebase FCM', 'Real-time Sync']
      },
      {
        step: '04',
        title: 'النشر في المتاجر وإدارة الإصدارات',
        description: 'تجهيز أيقونات التطبيق، وتوليد مفاتيح التوقيع، والنشر في Google Play وApp Store.',
        skills: ['App Signing', 'Google Play Console', 'App Store Connect', 'Performance Profiling']
      }
    ],
    capstoneProject: 'تطوير تطبيق متجر إلكتروني متكامل مع خدمات الخرائط والدفع والإشعارات الفورية.',
    careerOutcomes: [
      'مطور تطبيقات Flutter للشركات المحلية والدولية',
      'العمل الحر وبناء تطبيقات الهاتف للمتاجر والشركات',
      'إطلاق تطبيقاتك وتوسيعها على متاجر الهواتف الذكية'
    ]
  },
  {
    id: 'path-cybersecurity-specialist',
    slug: 'cybersecurity-analyst-path',
    categoryId: 'cybersecurity',
    title: 'مسار خبير الأمن السيبراني والدفاع الرقمي',
    subtitle: 'حماية المنظومات واكتشاف الثغرات وتأمين أصول المؤسسات',
    targetRole: 'أخصائي أمن سيبراني / SOC Analyst / Penetration Tester',
    estimatedDuration: '3 أشهر',
    level: 'متوسط',
    description: 'مسار يجمع بين المبادئ الدفاعية والهجومية لحماية الأنظمة والتطبيقات والشبكات المؤسسية من التهديدات السيبرانية المعاصرة وفق أطر الأمان العالمية.',
    milestones: [
      {
        step: '01',
        title: 'بيئات Linux والأمان الأساسي',
        description: 'إتقان سطر الأوامر وأساسيات التشفير وتحليل التهديدات الرقمية.',
        skills: ['Linux Security', 'Cryptography', 'Access Control', 'Lab Setup']
      },
      {
        step: '02',
        title: 'أمن الشبكات واعتراض الحزم',
        description: 'استخدام أدوات الفحص المتقدمة واكتشاف المنافذ والبروتوكولات المعطوبة.',
        skills: ['Nmap', 'Wireshark', 'Network Defense', 'Packet Analysis']
      },
      {
        step: '03',
        title: 'أمن تطبيقات الويب (OWASP)',
        description: 'تقييم ثغرات مواقع الويب مثل SQLi وXSS وتأمين جلسات العمل.',
        recommendedCourseSlug: 'practical-cybersecurity-defense',
        skills: ['Burp Suite', 'Web Vulnerabilities', 'Input Validation', 'Security Headers']
      },
      {
        step: '04',
        title: 'الاستجابة للحوادث والتحليل الجنائي',
        description: 'متابعة سجلات الأنظمة وكتابة تقارير التدقيق الأمني الفنية.',
        skills: ['Incident Response', 'Log Analysis', 'Threat Hunting', 'Audit Reporting']
      }
    ],
    capstoneProject: 'تدقيق أمني شامل لمنظومة افتراضية وتقديم تقرير تدقيق وحماية معتمد.',
    careerOutcomes: [
      'محلل أمني في مراكز العمليات الأمنية (SOC Analyst)',
      'فاحص أمني ومختبر ثغرات لتطبيقات الويب والشبكات',
      'مستشار أمان رقمي وحماية بيانات للشركات'
    ]
  },
  {
    id: 'path-networks-engineer',
    slug: 'networks-infrastructure-path',
    categoryId: 'networks',
    title: 'مسار مهندس الشبكات والبنى التحتية',
    subtitle: 'تأسيس وتشغيل شبكات المنشآت والأنظمة السلكية واللاسلكية وكاميرات المراقبة',
    targetRole: 'مهندس شبكات / Network Administrator',
    estimatedDuration: '2.5 شهر',
    level: 'من البداية حتى الاحتراف',
    description: 'تأهيل عملي متكامل لتصميم وتنفيذ شبكات الشركات، السويتشات المدارة، شبكات كاميرات المراقبة CCTV المعزولة، والربط الميداني الآمن بين الفروع.',
    milestones: [
      {
        step: '01',
        title: 'الكابلات الهيكلية والأجهزة الأساسية',
        description: 'معايير الكابلات Cat6/Cat7، وتجهيز الكبائن وسويتشات الشبكة.',
        skills: ['Structured Cabling', 'Patch Panels', 'Rack Mounting', 'Cable Testing']
      },
      {
        step: '02',
        title: 'عنونة الشبكات IP Subnetting',
        description: 'تقسيم الشبكات الفرعية وتوزيع عناوين IP بطريقة منظمة وآمنة.',
        skills: ['IPv4 Subnetting', 'VLSM', 'DHCP Configuration', 'NAT Protocols']
      },
      {
        step: '03',
        title: 'السويتشات وتقسيم الـ VLANs وشبكات PoE',
        description: 'تكوين سويتشات المراقبة وعزل حركة البيانات الحساسة.',
        recommendedCourseSlug: 'computer-networks-infrastructure',
        skills: ['Managed Switches', 'VLANs', 'PoE Budgets', 'Spanning Tree Protocol']
      },
      {
        step: '04',
        title: 'الراوتر وجدران الحماية والـ VPN',
        description: 'تأمين الشبكات اللاسلكية والربط الخارجي الآمن بين الفروع.',
        skills: ['Enterprise Wi-Fi', 'Firewalls', 'IPsec & OpenVPN', 'Network Troubleshooting']
      }
    ],
    capstoneProject: 'تصميم وتنفيذ شبكة متكاملة لمقر شركة ومبنى إداري مع شبكة كاميرات IP معزولة.',
    careerOutcomes: [
      'مدير ومسؤول شبكات بالشركات والمؤسسات',
      'مهندس بنية تحتية لشبكات كاميرات المراقبة والأنظمة الذكية',
      'فني شبكات معتمد لتجهيز مقرات العمل والشركات'
    ]
  },
  {
    id: 'path-mobile-hardware-technician',
    slug: 'mobile-hardware-repair-path',
    categoryId: 'hardware-maintenance',
    title: 'مسار فني صيانة الهواتف المتقدم (Hardware & Micro-Soldering)',
    subtitle: 'الفحص الميكروسكوبي، اللحام الدقيق، قراءة المخططات وإصلاح اللوحات الأم',
    targetRole: 'فني صيانة هاردوير محترف / Motherboard Repair Specialist',
    estimatedDuration: '2.5 شهر',
    level: 'تدريب معملي شامل',
    description: 'تأهيل مهني وحرفي عالي المستوى داخل مختبرات مجهزة بالكامل لتعلم فحص وتشخيص أعطال الهواتف الذكية ولحام المكونات الميكروسكوبية وإصلاح اللوحات الأم.',
    milestones: [
      {
        step: '01',
        title: 'الفك والتركيب الاحترافي وحماية الأجهزة',
        description: 'فك الشاشات الحديثة والبطاريات دون أضرار ميكانيكية أو حرارية.',
        skills: ['Device Teardown', 'Screen Separation', 'ESD Safety', 'Tools Mastery']
      },
      {
        step: '02',
        title: 'القياسات وتشخيص دوائر الباور والشحن',
        description: 'استخدام الملتيميتر والباور سبلاي وكاميرا الفحص الحراري لاكتشاف الشورت.',
        skills: ['Multimeter Diode Mode', 'DC Power Supply Curves', 'Short Detection', 'Charging Tracing']
      },
      {
        step: '03',
        title: 'قراءة المخططات الإلكترونية Borneo & ZXW',
        description: 'تتبع خطوط الإشارات وفحص أعطال الصوت واللمس والشبكة.',
        recommendedCourseSlug: 'mobile-phone-hardware-repair',
        skills: ['Schematics Reading', 'Boardview Software', 'Jumper Wire Crafting', 'Signal Flow']
      },
      {
        step: '04',
        title: 'اللحام الميكروسكوبي وصب الآيسيهات',
        description: 'رفع وصب وتركيب شرائح BGA IC وإصلاح اللوحات الأم التالفة.',
        skills: ['Microscope Soldering', 'BGA Reballing', 'Hot Air Techniques', 'Motherboard Restoration']
      }
    ],
    capstoneProject: 'تشخيص وإصلاح 3 هواتف ذكية بأعطال متنوعة (باور، شحن، شاشة) وتسليمها تعمل بكفاءة.',
    careerOutcomes: [
      'تأسيس وإدارة مركز صيانة هواتف ذكية مستقل ومربح',
      'العمل كفني صيانة لوحات أم متخصص في كبرى مراكز الصيانة والتوكيلات',
      'تقديم خدمات الصيانة الدقيقة لشركات الأجهزة الذكية'
    ]
  },
  {
    id: 'path-mobile-software-technician',
    slug: 'mobile-software-troubleshooter-path',
    categoryId: 'software-troubleshooting',
    title: 'مسار أخصائي سوفت وير الهواتف وإصلاح الأنظمة',
    subtitle: 'التفليش، معالجة أوضاع الطوارئ EDL، فك الحماية، واستعادة الأنظمة التالفة',
    targetRole: 'أخصائي سوفت وير هواتف / Mobile Firmware Specialist',
    estimatedDuration: '2 شهر',
    level: 'شامل وتطبيقي',
    description: 'مسار احترافي لمعالجة المشكلات البرمجية لجميع أجهزة الهواتف الذكية (Android و iOS)، وإتقان استخدام برامج وبوكسات التفليش ومعالجة مشكلات الإقلاع وفقدان السيريال.',
    milestones: [
      {
        step: '01',
        title: 'بنية الأنظمة والتعريفات وأوامر ADB',
        description: 'تجهيز بيئة العمل، وفهم أوضاع التشغيل Fastboot، Recovery، وDownload.',
        skills: ['Android Partitions', 'Clean Drivers Setup', 'ADB & Fastboot', 'Boot Modes']
      },
      {
        step: '02',
        title: 'تفليش الرومات الرسمية لمختلف المعالجات',
        description: 'إتقان تفليش هواتف Samsung، Xiaomi، ومعالجات MTK وQualcomm.',
        skills: ['Odin Flashing', 'Mi Flash Tool', 'SP Flash Tool', 'QFIL / QPST']
      },
      {
        step: '03',
        title: 'أوضاع الطوارئ EDL ومعالجة الهواتف الميتة',
        description: 'استعادة الهواتف المتوقفة عن العمل (Hard Brick) والتخطي الشرعي للحماية.',
        recommendedCourseSlug: 'smartphone-software-firmware-repair',
        skills: ['Qualcomm EDL 9008', 'Test Points', 'FRP Diagnostics', 'Firehose Loaders']
      },
      {
        step: '04',
        title: 'معالجة مشكلات Baseband / IMEI واستعادة البيانات',
        description: 'إصلاح فقدان الشبكة واستخراج بيانات الأجهزة المكسورة وتوثيق الصيانة.',
        skills: ['Baseband Repair', 'EFS Restoration', 'Data Recovery', 'Safety & Legal Guidelines']
      }
    ],
    capstoneProject: 'إصلاح وتفليش 4 أجهزة ذكية واقعة في مشكلات برمجية معقدة (EDL, Bootloop, IMEI Null).',
    careerOutcomes: [
      'أخصائي سوفت وير هواتف في مراكز الصيانة والخدمة المعتمدة',
      'تقديم خدمات الدعم البرمجي السريع وفك المشكلات عن بُعد',
      'إدارة قسم البرمجيات في مراكز صيانة الهواتف الكبرى'
    ]
  }
];

export const ACADEMY_FAQS = [
  {
    question: 'ما الذي يميز ProSetup Academy عن الدورات النظرية التقليدية؟',
    answer: 'تركيزنا الأساسي هو التدريب التطبيقي على أجهزة ومشاريع حقيقية في بيئات عمل فعلية. لا نكتفي بشرح المفاهيم النظرية، بل يخرج المتدرب بمشاريع عملية وخبرة فنية تؤهله مباشرة لسوق العمل أو فتح مشروعه الخاص.'
  },
  {
    question: 'هل يمكن للمبتدئين بدون خلفية تقنية الالتحاق بالمسارات؟',
    answer: 'نعم، المسارات مثل صيانة الهاردوير، وشبكات الحاسوب، وتطبيقات الجوال، وتطوير الواجهات تبدأ من المفاهيم الأساسية وتتدرج خطوة بخطوة حتى الوصول للمستوى الاحترافي.'
  },
  {
    question: 'أين تُقام التدريبات العملية والمختبرات؟',
    answer: 'تُقام المختبرات العملية وورش الصيانة الميدانية في مقرات ومختبرات ProSetup بالقاهرة، مع إمكانية متابعة المحاضرات التفاعلية والبرمجية عبر الإنترنت للمتدربين من خارج القاهرة أو المحافظات الأخرى.'
  },
  {
    question: 'ما هي طبيعة الشهادة المُقدمة بعد انتهاء الدورة؟',
    answer: 'يحصل المتدرب على شهادة إتمام تدريب صادرة من ProSetup International وموثقة بالمشاريع العملية المنجزة وعدد الساعات الفعلية بعد اجتياز متطلبات المشروع التخرجي بنجاح.'
  },
  {
    question: 'كيف يمكنني التسجيل وحجز مقعد في المسار المطلوب؟',
    answer: 'يمكنك اختيار الدورة أو المسار ثم الضغط على "تسجيل في الأكاديمية" وملء استمارة التسجيل. سيتواصل معك أحد المستشارين الفنيين لدينا لتحديد موعد الجلسة الاستكشافية وتأكيد حجزك.'
  }
];
