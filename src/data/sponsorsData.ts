export interface TechnologyPartner {
  id: string;
  name: string;
  category: 'cloud' | 'security' | 'media' | 'marketing' | 'enterprise';
  logoText: string;
  badge: string;
  description: string;
}

export interface FeaturedCommercialAd {
  id: string;
  clientName: string;
  clientType: string;
  badge: string; // e.g. "الشريك الماسي لهذا الشهر"
  adTitle: string;
  adSubtitle: string;
  description: string;
  bannerImage: string;
  offerText?: string;
  ctaText: string;
  ctaUrl: string;
  whatsappMessage: string;
  isActive: boolean;
}

export const TECHNOLOGY_PARTNERS: TechnologyPartner[] = [
  {
    id: 'p-1',
    name: 'Amazon Web Services (AWS)',
    category: 'cloud',
    logoText: 'AWS Cloud',
    badge: 'شريك سحابي معتمد',
    description: 'بنية تحتية سحابية فائقة السرعة مع ضمان تشغيل 99.99%'
  },
  {
    id: 'p-2',
    name: 'Hikvision Enterprise',
    category: 'security',
    logoText: 'HIKVISION',
    badge: 'شريك أمني معتمد',
    description: 'توريد معتمد لكاميرات المراقبة بدقة 4K وأنظمة الذكاء الاصطناعي الأمني'
  },
  {
    id: 'p-3',
    name: 'Sony Cinema Line',
    category: 'media',
    logoText: 'SONY CINE',
    badge: 'عتاد الإنتاج السينمائي',
    description: 'كاميرات سينمائية FX3 وFX6 وعدسات G-Master لتصوير الإعلانات التجارية'
  },
  {
    id: 'p-4',
    name: 'Meta Business Partner',
    category: 'marketing',
    logoText: 'META BUSINESS',
    badge: 'شريك إعلاني رسمي',
    description: 'إدارة متقدمة للحملات الإعلانية ومسارات استقطاب العملاء عبر إنستغرام وفيسبوك'
  },
  {
    id: 'p-5',
    name: 'Google Cloud Platform',
    category: 'cloud',
    logoText: 'GOOGLE CLOUD',
    badge: 'استضافة وشبكات',
    description: 'خوادم سريعة وشبكات توصيل محتوى CDN عالمية فائقة الأداء'
  },
  {
    id: 'p-6',
    name: 'Cisco Systems',
    category: 'enterprise',
    logoText: 'CISCO',
    badge: 'بنية شبكات آمنة',
    description: 'سويتشات PoE وتجهيزات شبكات معزولة لمنظومات المراقبة والأعمال'
  }
];

export const FEATURED_COMMERCIAL_AD: FeaturedCommercialAd = {
  id: 'ad-spotlight-1',
  clientName: 'مجموعة أورا العالمية للياقة البدنية',
  clientType: 'سلسلة نوادي ومراكز فاخرة',
  badge: 'العميل المميّز والراعي الذهبي لـ PS',
  adTitle: 'أطلقنا فرع النخبة الجديد بالتعاون الكامل مع PS',
  adSubtitle: 'تجهيز رقمي وبرمجي شامل + 32 كاميرا مراقبة ذكية + حملة إطلاق سينمائية كبرى',
  description: 'فخورون في PS باختيار مجموعة أورا لنا كشريك التجهيز الموحد لكافة فروعهم. قمنا بتطوير المنظومة البرمجية، وتركيب شبكات المراقبة، وتصميم الهوية، وإدارة الحملات التي استقطبت أكثر من 1,400 مشترك في شهر الافتتاح!',
  bannerImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  offerText: 'عرض خاص لعملاء وزوار PS: خصم 20% على عضويات النخبة السنوية',
  ctaText: 'تعرف على قصة النجاح واطلب تجهيزاً مماثلاً',
  ctaUrl: '#portfolio',
  whatsappMessage: 'مرحباً فريق PS، شاهدت إعلان وقصة نجاح مجموعة أورا وأرغب في استشارة تجهيز مماثلة لفرعي أو مشروعي.',
  isActive: true
};
