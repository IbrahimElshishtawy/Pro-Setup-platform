export interface RepairServiceItem {
  id: string;
  title: string;
  category: 'hardware' | 'software' | 'enterprise';
  shortDesc: string;
  description: string;
  typicalTime: string;
  warranty: string;
  devicesCovered: string[];
  deliverables: string[];
  iconName: string;
}

export const TECHNICAL_REPAIR_SERVICES: RepairServiceItem[] = [
  {
    id: 'screen-display-repair',
    title: 'تغيير الشاشات والزجاج المكسور بدقة أصلية',
    category: 'hardware',
    shortDesc: 'استبدال شاشات OLED وAMOLED وتجديد الباغة بتقنية الضغط الحراري OCA.',
    description: 'نوفر خدمات استبدال وتجديد الشاشات التالفة باستخدام شاشات أصلية معتمدة ومطابقة لتردد الشاشة (120Hz) ومستشعرات البصمة المدمجة والـ True Tone لأجهزة Apple وSamsung وغيرها.',
    typicalTime: 'من 60 إلى 120 دقيقة',
    warranty: 'ضمان معتمد حتى 6 أشهر',
    devicesCovered: ['Apple iPhone / iPad', 'Samsung Galaxy S / Z / A', 'Xiaomi / Poco', 'Google Pixel', 'OnePlus'],
    deliverables: [
      'فحص حساسية اللمس ومعدل السطوع الأصلي',
      'برمجة ونقل بيانات True Tone والشاشة',
      'تركيب عازل مائي أصلي لمقاومة الغبار والسوائل (Water Resistance Seal)'
    ],
    iconName: 'Smartphone'
  },
  {
    id: 'motherboard-microsoldering',
    title: 'إصلاح اللوحات الأم واللحام الميكروسكوبي الدقيق',
    category: 'hardware',
    shortDesc: 'معالجة مشكلات عدم الإقلاع، الشورت الصريح، تلف آيسي الشحن والباور.',
    description: 'فحص ميكروسكوبي متطور للوحات الأم لتحديد الخطوط المعطوبة واستبدال شرائح BGA التالفة (PMIC, Audio IC, Charging IC, Baseband) بأحدث معدات اللحام الدقيق وغرف الفحص الحراري.',
    typicalTime: 'من 24 إلى 48 ساعة حسب العطل',
    warranty: 'ضمان تجربة واختبار معتمد 90 يوماً',
    devicesCovered: ['كافة هواتف Apple', 'أجهزة أندرويد Flagship والمتوسطة', 'الأجهزة اللوحية'],
    deliverables: [
      'تقرير فحص حراري دقيق بالصور قبل وبعد الإصلاح',
      'استبدال المكونات التالفة بقطع أصلية مجربة',
      'اختبار كافة وظائف الجهاز والشبكة والصوت والشحن'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'battery-power-repair',
    title: 'استبدال البطاريات وإصلاح منظومة الطاقة',
    category: 'hardware',
    shortDesc: 'تغيير البطاريات المنتفخة وضعيفة الكفاءة ببطاريات أصلية آمنة.',
    description: 'استبدال بطاريات الهواتف بأخرى أصلية ذات كفاءة 100% ودورات شحن كاملة مع نقل شرائح الحماية الأصلية لمنع ظهور رسائل التنبيه غير المعتمدة في أجهزة الآيفون.',
    typicalTime: 'من 30 إلى 60 دقيقة',
    warranty: 'ضمان 6 أشهر ضد الانتفاخ أو الهبوط المفاجئ',
    devicesCovered: ['Apple iPhone', 'Samsung', 'Xiaomi', 'Huawei', 'Oppo', 'Realme'],
    deliverables: [
      'معايرة البطارية واختبار استهلاك الطاقة الفعلي',
      'التخلص الآمن والصديق للبيئة من البطاريات القديمة',
      'إعادة إحكام إغلاق الجهاز بعوازل أصلية'
    ],
    iconName: 'BatteryCharging'
  },
  {
    id: 'flashing-unbrick-recovery',
    title: 'التفليش الرسمي وإصلاح مشاكل الإقلاع (Unbrick)',
    category: 'software',
    shortDesc: 'إعادة إحياء الهواتف المعلقة على الشعار أو المتوقفة في وضع الطوارئ EDL.',
    description: 'تثبيت وتحديث الرومات الرسمية لأجهزة Android وiOS عبر كابلات وأجهزة التفليش المعتمدة، ومعالجة أخطاء النظام، وإصلاح مناطق الـ Bootloader دون الإضرار بسلامة العتاد.',
    typicalTime: 'من 45 دقيقة إلى ساعتين',
    warranty: 'استقرار برمجي تام ونسخ احتياطي للبيانات عند الإمكان',
    devicesCovered: ['Samsung (Odin)', 'Xiaomi (Fastboot / EDL)', 'Qualcomm Devices', 'MediaTek Devices', 'Apple iOS'],
    deliverables: [
      'تحديث الجهاز لآخر إصدار مستقر من الشركة المصنعة',
      'إصلاح تلف ملفات النظام واستعادة سرعة الاستجابة',
      'فحص أمان النظام وخلوه من التطبيقات الضارة'
    ],
    iconName: 'Terminal'
  },
  {
    id: 'baseband-imei-network-fix',
    title: 'إصلاح مشكلات الشبكة ورقم السيريال (Baseband / IMEI)',
    category: 'software',
    shortDesc: 'معالجة فقدان إشارة الشبكة، السيريال المجهول، وتهيئة ملفات EFS.',
    description: 'تشخيص دقيق لمشكلات انعدام الخدمة وفقدان رقم السيريال بعد التحديثات الخاطئة، وإعادة برمجة مناطق الترددات والشبكات الرسمية واستعادة الاتصال الآمن بالأبراج.',
    typicalTime: 'نفس اليوم',
    warranty: 'ضمان استقرار الشبكة والاتصال 4G/5G',
    devicesCovered: ['Samsung Galaxy', 'Xiaomi', 'Oppo / Vivo', 'هواتف Qualcomm & MTK'],
    deliverables: [
      'استعادة قراءة بطاقات SIM بكفاءة تامة',
      'نسخ احتياطي لملفات المودم والـ EFS للمستقبل',
      'اختبار سرعة الإنترنت واستقرار المكالمات الصوتية'
    ],
    iconName: 'Radio'
  },
  {
    id: 'corporate-device-maintenance-sla',
    title: 'عقود الصيانة الدورية للأجهزة المؤسسية (Corporate SLA)',
    category: 'enterprise',
    shortDesc: 'إدارة وصيانة هواتف وأجهزة فرق العمل والشركات بزيارات دورية وضمان شامل.',
    description: 'خدمة مخصصة للمؤسسات والشركات التي تمتلك أسطولاً من الأجهزة الذكية لموظفي المبيعات والتشغيل الميداني. تشمل الصيانة الدورية، والاستبدال السريع للأجهزة المتعطلة، وحماية بيانات الشركة.',
    typicalTime: 'عقود سنوية ونصف سنوية مخصصة',
    warranty: 'اتفاقية مستوى خدمة موحدة (SLA) واستجابة فورية',
    devicesCovered: ['أسطول أجهزة الشركات', 'أجهزة نقاط البيع POS', 'أجهزة التابلت اللوحية'],
    deliverables: [
      'فحص وقائي شهري لبطاريات وأداء الأجهزة',
      'جهاز بديل فوري أثناء فترة الإصلاح لضمان استمرار العمل',
      'فواتير ضريبية رسمية وتقارير فنية دورية'
    ],
    iconName: 'ShieldCheck'
  }
];

export const TECHNICAL_SERVICES_WORKFLOW = [
  {
    step: '01',
    title: 'الاستلام والفحص المبدئي',
    desc: 'فحص الجهاز أمام العميل، تسجيل الرقم التسلسلي، وتدوين كافة الملاحظات الظاهرة وتحديد العطل بدقة.'
  },
  {
    step: '02',
    title: 'التشخيص المعملي المتخصص',
    desc: 'فحص المسارات الكهربائية واستهلاك الباور سبلاي واختبار البرمجيات بأحدث أدوات القياس.'
  },
  {
    step: '03',
    title: 'إبلاغ العميل والتأكيد',
    desc: 'تقديم تقرير شفاف يشمل تكلفة القطع، وقت الإصلاح المتوقع، والضمان قبل بدء أي إجراء تنفيذي.'
  },
  {
    step: '04',
    title: 'الإصلاح واختبار الجودة QA',
    desc: 'تنفيذ الإصلاح بأيدٍ هندسية متخصصة وإجراء اختبار كامل لكافة وظائف الجهاز قبل التسليم.'
  }
];
