export const COMPANY_INFO = {
  brandShort: "PS",
  name: "PS | PRO SETUP INTERNATIONAL",
  legalName: "PS الدولية لتجهيزات الأعمال والحلول المتكاملة (PRO SETUP)",
  tagline: "رؤيتك المستقبلية.. وتجهيزنا المؤسسي المتكامل",
  positioning: "The Elite Multi-Disciplinary Business Setup Enterprise",
  subDescription: "شركة PS (PRO SETUP) هي الكيان الدولي الشامل لتجهيز وتطوير الأعمال: نجمع تحت سقف واحد أحدث الحلول البرمجية والسحابية، شبكات المراقبة وكاميرات CCTV، الإنتاج المرئي والسينمائي، واستراتيجيات التسويق الرقمي وبناء الهويات المؤسسية.",
  detailedDescription: "كنا خبراء ورواداً مستقلين نتقن أعمالاً فريدة كل في مجاله التخصصي... فقررنا توحيد كل هذه القوى والخبرات المرموقة في كيان دولي واحد: PS. لنمنح الشركات والمشاريع شريكاً موحداً بمعايير دولية يُنهي تماماً كابوس التشتت بين الموردين.",
  collectiveManifesto: "تحالف النخبة: دمجنا تخصصات البرمجيات، الأمن، السينما، والتسويق الدولي لتقديم تجهيز أعمال متكامل بنسبة 100%.",
  contact: {
    phone: "YOUR_PHONE",
    phoneDisplay: "YOUR_PHONE",
    whatsapp: "YOUR_WHATSAPP_LINK",
    whatsappNumber: "YOUR_PHONE",
    email: "YOUR_EMAIL",
    address: "YOUR_LOCATION",
    workingHours: "الأحد – الخميس: 9:00 صباحاً – 6:00 مساءً (توقيت القاهرة/مكة)",
  },
  social: {
    facebook: "YOUR_FACEBOOK_LINK",
    instagram: "YOUR_INSTAGRAM_LINK",
    tiktok: "YOUR_TIKTOK_LINK",
    linkedin: "YOUR_LINKEDIN_LINK",
    youtube: "YOUR_YOUTUBE_LINK",
    whatsapp: "YOUR_WHATSAPP_LINK",
  },
  stats: [
    { value: 6, suffix: "+", label: "قطاعات دولية متكاملة", description: "كل ما تحتاجه تحت سقف مؤسسي واحد" },
    { value: 100, suffix: "%", label: "مسؤولية تنفيذ متكاملة", description: "شريك موثوق واحد واتفاقية مستوى خدمة موحدة" },
    { value: 24, suffix: "/7", label: "دعم واستجابة VIP فورية", description: "إدارة استباقية ومتابعة تقنية وميدانية مستمرة" },
    { value: 0, suffix: "", label: "تشتت بين الموردين", description: "عقد موحد ينهي إرهاق التنسيق بين شركات منفصلة" },
  ],
  pillars: [
    { title: "منظومة دولية شاملة", desc: "تجهيز أعمالك بالكامل من الصفر حتى الريادة دون الحاجة لأي طرف ثالث" },
    { title: "دقة تقنية وأمنية فائقة", desc: "أكواد برمجية نظيفة وبنية شبكات وكاميرات مراقبة مشفرة ومؤمنة بالكامل" },
    { title: "إنتاج سينمائي وهويات فاخرة", desc: "تصوير سينمائي 4K وهويات بصرية مخصصة تعكس فخامة ومكانة علامتك" },
    { title: "عائد تجاري واستثماري مقاس", desc: "حملات تسويقية مبنية على الأرقام والاستهداف الدقيق لمضاعفة مبيعاتك" },
  ],
};

export const NAV_LINKS = [
  { id: "home", label: "الرئيسية", href: "#home" },
  { id: "services", label: "خدماتنا", href: "#services" },
  { id: "portfolio", label: "معرض أعمالنا", href: "#portfolio" },
  { id: "about", label: "عن الشركة", href: "#about" },
  { id: "process", label: "خطة العمل", href: "#process" },
  { id: "contact", label: "تواصل معنا", href: "#contact" },
];

export const MEGA_MENU_CATEGORIES = [
  {
    id: "digital",
    title: "رقمي وتسويق",
    shortDesc: "نمو المبيعات، استقطاب العملاء وصناعة المحتوى الفعّال",
    icon: "TrendingUp",
    targetPage: "digital-marketing",
    services: [
      { name: "التسويق الرقمي", path: "digital-marketing" },
      { name: "إدارة السوشيال ميديا", path: "digital-marketing" },
      { name: "الإعلانات الممولة", path: "advertising" },
      { name: "صناعة المحتوى الإبداعي", path: "digital-marketing" },
    ],
  },
  {
    id: "creative",
    title: "إبداعي وهوية",
    shortDesc: "بناء هوية العلامة التجارية وتجربة المستخدم والإنتاج المرئي",
    icon: "Palette",
    targetPage: "design-branding",
    services: [
      { name: "تصميم الهوية والعلامات", path: "design-branding" },
      { name: "التصميم الجرافيكي الإعلاني", path: "design-branding" },
      { name: "تصميم واجهات وتجربة المستخدم UI/UX", path: "design-branding" },
      { name: "التصوير الفوتوغرافي التجاري", path: "photography-video" },
      { name: "الإنتاج المرئي والفيديو", path: "photography-video" },
    ],
  },
  {
    id: "technology",
    title: "تكنولوجيا وبرمجيات",
    shortDesc: "مواقع ويب متقدمة، تطبيقات جوال، وأنظمة سحابية مخصصة",
    icon: "Code2",
    targetPage: "software-technology",
    services: [
      { name: "تطوير مواقع الويب", path: "software-technology" },
      { name: "تطبيقات الهاتف المحمول", path: "software-technology" },
      { name: "البرمجيات المخصصة ولوحات التحكم", path: "software-technology" },
      { name: "الحلول السحابية والربط البرمجي APIs", path: "software-technology" },
    ],
  },
  {
    id: "security",
    title: "الأنظمة الأمنية والمراقبة",
    shortDesc: "كاميرات مراقبة CCTV، بوابات الدخول والشبكات المحمية",
    icon: "ShieldCheck",
    targetPage: "security-surveillance",
    services: [
      { name: "كاميرات المراقبة CCTV المتقدمة", path: "security-surveillance" },
      { name: "أنظمة الأمان والإنذار المتكاملة", path: "security-surveillance" },
      { name: "تجهيز البنية التحتية للشبكات", path: "security-surveillance" },
      { name: "أنظمة التحكم في الدخول Access Control", path: "security-surveillance" },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  { id: "digital-marketing", name: "التسويق الرقمي", shortDesc: "إدارة السوشيال ميديا، الإعلانات الممولة ونمو الجمهور" },
  { id: "design-branding", name: "التصميم وبناء الهوية", shortDesc: "الهوية البصرية، واجهات UI/UX، وتصميم التغليف" },
  { id: "software-technology", name: "البرمجيات والتكنولوجيا", shortDesc: "مواقع الويب، تطبيقات الجوال، والأنظمة السحابية" },
  { id: "security-surveillance", name: "الأمن والمراقبة الذكية", shortDesc: "كاميرات CCTV، أنظمة التحكم بالدخول، وشبكات NVR" },
  { id: "photography-video", name: "التصوير والإنتاج المرئي", shortDesc: "تصوير تجاري سينمائي، فيديوهات إعلانية، وريلز" },
  { id: "advertising", name: "الحملات الإعلانية", shortDesc: "استراتيجية إعلانية متكاملة وإدارة ميزانيات احترافية" },
];
