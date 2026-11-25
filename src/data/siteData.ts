export type GalleryCategory = 'all' | 'kitchens' | 'windows' | 'dressing';

export interface PhoneContact {
  label: string;
  display: string;
  telHref: string;
  whatsappHref: string;
}

export interface ServiceItem {
  code: string;
  id: GalleryCategory | 'after-sales';
  title: string;
  description: string;
  image?: string;
  linkToGallery?: GalleryCategory;
}

export interface StorytellingStep {
  step: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  caption: string;
  image: string;
}

export const SITE_CONTACT = {
  brandName: 'Kitchen Pro',
  brandLogo: '/images/logo.png',
  heroImage: '/images/ktichen_pro.png',
  aboutImage: '/images/imagekitchen.png',
  phones: [
    {
      label: 'الرقم الأول',
      display: '01095671416',
      telHref: 'tel:01095671416',
      whatsappHref: 'https://wa.me/201095671416',
    },
    {
      label: 'الرقم الثاني',
      display: '01044991391',
      telHref: 'tel:01044991391',
      whatsappHref: 'https://wa.me/201044991391',
    },
  ] as PhoneContact[],
  googleMapsUrl: 'https://maps.app.goo.gl/75fKbNpSz46uQyc19?g_st=aw',
  instagramUrl: 'https://www.instagram.com/kitchenpro210?hvrq=MXd2ODl4Y3hoMjdvbA==',
  facebookUrl: 'https://www.facebook.com/share/19ijqL6xDb/',
};

export function buildWhatsAppLink(phoneIndex: 0 | 1, message: string): string {
  const base = SITE_CONTACT.phones[phoneIndex].whatsappHref;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الشركة', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'الضمان', href: '#guarantee' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const COMPANY_PILLARS = [
  { code: '01', label: 'الاهتمام بجودة التصميم والتنفيذ' },
  { code: '02', label: 'حلول مناسبة لمساحتك واحتياجاتك' },
  { code: '03', label: 'خدمة ما بعد البيع وضمان مدى الحياة وفقاً لشروط الشركة' },
];

export const SERVICES: ServiceItem[] = [
  {
    code: '01',
    id: 'kitchens',
    title: 'المطابخ',
    description:
      'بنساعدك تختار تصميم مطبخ يناسب مساحة بيتك وطريقة استخدامك، مع الاهتمام بتقسيم الوحدات والتفاصيل اللي بتسهّل عليك كل يوم.',
    image: '/images/project-steel-kitchen.jpg',
    linkToGallery: 'kitchens',
  },
  {
    code: '02',
    id: 'windows',
    title: 'الشبابيك',
    description:
      'بنقدم حلول للشبابيك بتصميمات عصرية تناسب شكل المكان واحتياجاتك، مع الاهتمام بالتفاصيل وجودة التنفيذ.',
    image: '/images/project-windows.jpg',
    linkToGallery: 'windows',
  },
  {
    code: '03',
    id: 'dressing',
    title: 'الدريسنج',
    description:
      'بنصمم وحدات دريسنج تساعدك تستغل المساحة بشكل أفضل، وتنظم هدومك ومستلزماتك بطريقة عملية وشكل مرتب.',
    image: '/images/project-dressing.jpg',
    linkToGallery: 'dressing',
  },
  {
    code: '04',
    id: 'after-sales',
    title: 'خدمة ما بعد البيع',
    description:
      'علاقتنا بيك مش بتنتهي بعد التركيب. بنهتم بمتابعة الخدمة والتواصل معاك بعد التسليم.',
    image: '/images/ktichen_pro.png',
  },
];

export const STORYTELLING_STEPS: StorytellingStep[] = [
  {
    step: '01',
    title: 'تصميم يبدأ من مساحتك الحقيقية',
    description:
      'قبل أي خطوة، بنفهم مساحة بيتك وطريقة استخدامك اليومي علشان كل وحدة وممر وإضاءة تكون في مكانها الصح.',
  },
  {
    step: '02',
    title: 'اهتمام بالتفاصيل وجودة التنفيذ',
    description:
      'سواء في المطبخ أو الشبابيك أو الدريسنج، بنركز على دقة التشطيب والتقفيل علشان الشكل العصري يعيش معاك بنفس الجودة.',
  },
  {
    step: '03',
    title: 'تسليم مريح ومتابعة بعد البيع',
    description:
      'شغلنا مش بيخلص يوم التركيب — بنفضل معاك بخدمة ما بعد البيع وضمان مدى الحياة وفقاً لشروط الشركة.',
  },
];

export const GALLERY_FILTERS: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'kitchens', label: 'المطابخ' },
  { id: 'windows', label: 'الشبابيك' },
  { id: 'dressing', label: 'الدريسنج' },
];

/**
 * معرض أعمال Kitchen Pro — لإضافة صورة جديدة، أضف الصورة داخل public/images/
 * ثم أضف عنصراً جديداً في هذه القائمة فقط.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'kp-showroom-kitchen',
    title: 'معرض Kitchen Pro للمطابخ العصرية',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    caption: 'تصميم مطبخ عصري يجمع بين الخطوط البسيطة والاستغلال العملي للمساحة.',
    image: '/images/ktichen_pro.png',
  },
  {
    id: 'kp-modern-kitchen-design',
    title: 'تصميم وتنفيذ المطابخ الحديثة',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    caption: 'توزيع متوازن لوحدات المطبخ والإضاءة بما يناسب الاستخدام اليومي.',
    image: '/images/imagekitchen.png',
  },
  {
    id: 'kp-steel-kitchen',
    title: 'مطبخ بتفاصيل استيل هادئة',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    caption: 'تقسيم عملي للوحدات مع أسطح سهلة التنظيف وتصميم حديث.',
    image: '/images/project-steel-kitchen.jpg',
  },
  {
    id: 'kp-graphite-kitchen',
    title: 'مطبخ بألوان محايدة وتصميم مفتوح',
    category: 'kitchens',
    categoryLabel: 'المطابخ',
    caption: 'تناسق بين درجات الرمادي والفحمي لراحة بصرية ومساحة حركة مريحة.',
    image: '/images/project-graphite-kitchen.jpg',
  },
  {
    id: 'kp-windows',
    title: 'حلول الشبابيك العصرية',
    category: 'windows',
    categoryLabel: 'الشبابيك',
    caption: 'تصميمات شبابيك تتماشى مع شكل المكان وتوفر إضاءة طبيعية واضحة.',
    image: '/images/project-windows.jpg',
  },
  {
    id: 'kp-dressing',
    title: 'وحدات دريسنج وتنظيم المساحة',
    category: 'dressing',
    categoryLabel: 'الدريسنج',
    caption: 'تقسيم منظم لوحدات التخزين يساعدك تستغل كل مساحة بشكل عملي.',
    image: '/images/project-dressing.jpg',
  },
];
