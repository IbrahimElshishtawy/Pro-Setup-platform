export interface AboutStatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const ABOUT_STATS: AboutStatItem[] = [
  {
    id: 'services',
    value: 6,
    suffix: '+',
    label: 'منظومات كبرى تحت مظلة واحدة',
    description: 'سوفت وير، أمن سيبراني، كاميرات، صيانة، وتسويق وإعلانات.',
  },
  {
    id: 'integration',
    value: 100,
    suffix: '%',
    label: 'مسؤولية تنفيذية وتجهيز متكامل',
    description: 'شريك استراتيجي موحد يُنهي فوضى التنسيق بين شركات منفصلة.',
  },
  {
    id: 'founders',
    value: 4,
    suffix: '',
    label: 'ركائز تخصصية يقودها الشركاء المؤسسون',
    description: 'هندسة البرمجيات، الأمن، الإدارة المالية، والتشغيل الميداني.',
  },
  {
    id: 'vendors',
    value: 0,
    suffix: '',
    label: 'تشتت بين الموردين والوسطاء',
    description: 'عقد موحد، مسؤولية واحدة، وجودة متسقة لكافة تفاصيل مشروعك.',
  },
];

export const ABOUT_MANIFESTO = {
  quote: 'نحن لا نقدم مجرد خدمات منفصلة... بل نهندس الكيان الرقمي والميداني المتكامل لشركتك.',
  author: 'تحالف القيادة والخبراء',
  authorRole: 'PS | PRO SETUP INTERNATIONAL',
  story: 'تأسست شركة PS International لإنهاء الإرهاق التجاري الأكثر شيوعاً بين رواد الأعمال: التشتت بين مبرمج لا يفهم التسويق، ومسوق يفتقر للإخراج السينمائي، ومركّب كاميرات يعمل بمعزل عن منظومة الشبكات. وحدنا هذه القوى الأربع الكبرى في كيان مؤسسي موحد يُنهي فوضى التنسيق ويضمن أعلى جودة تنفيذية متسقة.',
};
