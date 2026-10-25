export interface MarqueeItem {
  id: string;
  nameAr: string;
  nameEn: string;
  iconName: string;
  badge?: string;
}

export const INDUSTRIES_SERVED: MarqueeItem[] = [
  {
    id: 'software',
    nameAr: 'تطوير البرمجيات وتطبيقات الويب والموبايل',
    nameEn: 'Software & App Engineering',
    iconName: 'Code2',
    badge: 'Software',
  },
  {
    id: 'cybersecurity',
    nameAr: 'الأمن السيبراني وحماية المنظومات',
    nameEn: 'Cybersecurity & Protection',
    iconName: 'ShieldAlert',
    badge: 'CyberSec',
  },
  {
    id: 'phone-repair',
    nameAr: 'صيانة الهواتف والأجهزة الذكية',
    nameEn: 'Mobile & Hardware Maintenance',
    iconName: 'Smartphone',
    badge: 'Hardware',
  },
  {
    id: 'cctv',
    nameAr: 'تركيب كاميرات المراقبة والأنظمة الأمنية',
    nameEn: 'CCTV & Surveillance Networks',
    iconName: 'Camera',
    badge: 'CCTV',
  },
  {
    id: 'advertising',
    nameAr: 'الحملات الإعلانية الممولة والموجهة',
    nameEn: 'Targeted Advertising & Media',
    iconName: 'Megaphone',
    badge: 'Ads',
  },
  {
    id: 'marketing',
    nameAr: 'التسويق الرقمي وإدارة السوشيال ميديا',
    nameEn: 'Digital Marketing & Growth',
    iconName: 'TrendingUp',
    badge: 'Marketing',
  },
  {
    id: 'cinematic',
    nameAr: 'التصوير والإنتاج السينمائي 4K',
    nameEn: 'Cinematography & 4K Media',
    iconName: 'Film',
    badge: 'Production',
  },
  {
    id: 'branding',
    nameAr: 'تصميم الهويات المؤسسية وUI/UX',
    nameEn: 'Corporate Branding & Design',
    iconName: 'Palette',
    badge: 'Branding',
  },
];
