export interface AboutStatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const ABOUT_STATS: AboutStatItem[] = [
  {
    id: 'years',
    value: 8,
    suffix: '+',
    label: 'سنوات من الخبرة والريادة',
    description: 'تحالف استراتيجي من نخبة المتخصصين والمهندسين.',
  },
  {
    id: 'projects',
    value: 140,
    suffix: '+',
    label: 'مشروع وموقع مجهز بالكامل',
    description: 'في البرمجيات، شبكات CCTV، والإنتاج السينمائي.',
  },
  {
    id: 'clients',
    value: 98,
    suffix: '%',
    label: 'نسبة رضا واستبقاء العملاء',
    description: 'شراكات تشغيلية طويلة الأمد وعقود رعاية مستمرة.',
  },
  {
    id: 'sectors',
    value: 6,
    suffix: '',
    label: 'قطاعات تخصصية كبرى',
    description: 'تغطي كافة متطلبات تأسيس الأعمال دون وسطاء.',
  },
];

export const ABOUT_MANIFESTO = {
  quote: 'نحن لا نقدم مجرد خدمات منفصلة... بل نهندس الكيان الرقمي والميداني المتكامل لشركتك.',
  author: 'تحالف القيادة والخبراء',
  authorRole: 'PS | PRO SETUP INTERNATIONAL',
  story: 'تأسست شركة PS International لإنهاء الإرهاق التجاري الأكثر شيوعاً بين رواد الأعمال: التشتت بين مبرمج لا يفهم التسويق، ومسوق يفتقر للإخراج السينمائي، ومركّب كاميرات يعمل بمعزل عن منظومة الشبكات. وحدنا هذه القوى الأربع الكبرى في كيان مؤسسي موحد يُنهي فوضى التنسيق ويضمن أعلى جودة تنفيذية متسقة.',
};
