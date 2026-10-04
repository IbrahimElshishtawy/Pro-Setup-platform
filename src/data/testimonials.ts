export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  serviceCategory: string;
  projectHighlight: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'م. طارق العريان',
    role: 'الرئيس التنفيذي والشريك المؤسس',
    company: 'مجموعة أورا الرياضية الدولية',
    quote: 'نقلتنا شركة PS من مرحلة التشتت بين 4 وكالات مختلفة إلى نموذج الشريك الدولي الواحد. تولوا الهوية البصرية، وأنتجوا إعلانات سينمائية مذهلة، وأداروا الحملات التسويقية بنظام أوتوماتيكي رفع اشتراكاتنا بنسبة 340%. الاحترافية هنا فوق الممتازة.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    serviceCategory: 'تسويق رقمي وإنتاج سينمائي',
    projectHighlight: 'زيادة الاشتراكات بنسبة 340%',
  },
  {
    id: 'test-2',
    name: 'د. سارة المنصور',
    role: 'مديرة العمليات والتحول الرقمي',
    company: 'شبكة كير لينك الطبية',
    quote: 'تجهيز المنظومة البرمجية والأمنية لمراكزنا الطبية كان تحدياً هائلاً، لكن فريق PS أنجز المنصة في وقت قياسي وبأعلى معايير التشفير والخصوصية. ميزة الشريك المتكامل وفرت علينا مئات الساعات وميزانيات ضخمة.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    serviceCategory: 'برمجيات وأنظمة سحابية',
    projectHighlight: 'منصة آمنة تخدم 28 ألف مستفيد',
  },
  {
    id: 'test-3',
    name: 'أ. خالد بن فهد',
    role: 'المدير العام للاستثمار والتطوير',
    company: 'مجمع نكسوس الصناعي المتطور',
    quote: 'أنظمة كاميرات المراقبة IP بدقة 4K التي ركبتها PS في مجمعنا الصناعي جعلت غرف التحكم تعمل بأعلى كفاءة رصد ذكية. الدعم الميداني مستمر والالتزام بالمواعيد صارم. أنصح كل شركة جادة بالتعامل معهم.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    serviceCategory: 'شبكات مراقبة CCTV وأمن صناعي',
    projectHighlight: 'تركيب 120+ كاميرا بنسبة استقرار 99.9%',
  },
  {
    id: 'test-4',
    name: 'م. ياسمين الصالح',
    role: 'المؤسسة والمديرة الإبداعية',
    company: 'استوديو لومينا للهندسة المعمارية',
    quote: 'الهوية البصرية والموقع الإلكتروني والمطبوعات الفاخرة التي أبدعتها PS عكست تماماً روح الفخامة والبساطة التي نستهدفها في مشاريعنا المعمارية. زبائننا النخبة يلاحظون الفرق في أول انطباع.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    serviceCategory: 'هوية بصرية وتصميم راقٍ',
    projectHighlight: 'تصميم هوية أيقونية بنسب معمارية',
  },
];
