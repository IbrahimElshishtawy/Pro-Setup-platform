import React, { useState, useEffect } from 'react';
import { ShieldCheck, Video, Server, HardDrive, Wifi, Lock, Eye, ArrowLeft, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface SecuritySurveillancePageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const SecuritySurveillancePage: React.FC<SecuritySurveillancePageProps> = ({ onOpenQuote }) => {
  const [selectedCam, setSelectedCam] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(now.getMilliseconds() / 100));
    };
    updateTime();
    const interval = setInterval(updateTime, 200);
    return () => clearInterval(interval);
  }, []);

  const securityCapabilities = [
    { title: 'تركيب كاميرات المراقبة (CCTV)', desc: 'توزيع وتثبيت كاميرات المراقبة الداخلية والخارجية للمنشآت مع تغطية شاملة 100% وإلغاء النقاط العمياء تماماً.', icon: Video },
    { title: 'كاميرات شبكية 4K IP بالذكاء الاصطناعي', desc: 'حساسات بصرية فائقة الدقة تدعم الرؤية الليلية الملونة بالكامل والتعرف الذكي على الأشخاص والسيارات وقراءة لوحات المركبات.', icon: Eye },
    { title: 'أجهزة التسجيل الرقمية DVR', desc: 'أجهزة تسجيل موثوقة للأنظمة التناظرية والهجينة مع خوارزميات ضغط ذكية لتوفير مساحة التخزين دون تقليل جودة الفيديو.', icon: Server },
    { title: 'أنظمة NVR ومصفوفات RAID', desc: 'أجهزة تسجيل شبكية للمؤسسات تدعم مصفوفات أقراص RAID لحماية التسجيلات من التلف وتخزين مستمر حتى 120 يوماً.', icon: HardDrive },
    { title: 'تمديد الشبكات السلكية وتقنية PoE', desc: 'تمديدات كابلات نحاسية معزولة Cat6/Cat7، ومفاتيح شبكة مدارة تدعم الطاقة عبر الإيثرنت (PoE) وعزل شبكة الكاميرات.', icon: Wifi },
    { title: 'أنظمة التحكم في الدخول (Access Control)', desc: 'بوابات ذكية ببصمة الوجه والإصبع، وبطاقات RFID، وأقفال كهرومغناطيسية مع أجهزة حضور وانصراف آلية للموظفين.', icon: Lock },
    { title: 'المراقبة المستمرة 24/7 عبر الهاتف', desc: 'شاشات مركز تحكم متطورة وتطبيقات هواتف مشفرة تتيح البث المباشر والتنبيهات الفورية عند استشعار أي حركة مريبة.', icon: ShieldCheck },
  ];

  const architectureFlow = [
    { step: '01', title: 'الكاميرات الذكية', desc: 'كاميرات 4K IP تلتقط المشاهد بدقة فائقة مع رؤية ليلية حرارية وكشف ذكي.', icon: Video },
    { step: '02', title: 'الشبكة المعزولة', desc: 'خطوط PoE جيجابت معزولة تماماً تمنع أي محاولات اختراق أو تشويش خارجي.', icon: Wifi },
    { step: '03', title: 'أجهزة التخزين NVR', desc: 'تخزين مركزي مع حماية متطورة للبيانات تضمن استمرار الحفظ حتى لو تعطل قرص.', icon: HardDrive },
    { step: '04', title: 'غرفة المراقبة', desc: 'شاشات عرض حية متعددة وتطبيقات مشفرة تتيح المتابعة اللحظية من أي مكان.', icon: Eye },
    { step: '05', title: 'التنبيهات الفورية', desc: 'إشعارات سريعة في أجزاء من الثانية ترسل لهاتفك عند اختراق أي نطاق أمني.', icon: Bell },
  ];

  const cameras = [
    {
      id: 1,
      name: 'كاميرا 01 - المدخل الرئيسي والبوابة أ',
      status: 'متصلة • كشف لوحات المركبات LPR',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      location: 'السياج الشمالي الخارجي',
    },
    {
      id: 2,
      name: 'كاميرا 02 - غرفة الخوادم وقواعد البيانات',
      status: 'متصلة • حساس بيومتري معتمد',
      fps: '60 FPS',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      location: 'المنطقة الأمنية المحمية ب',
    },
    {
      id: 3,
      name: 'كاميرا 03 - رصيف تحميل البضائع 4',
      status: 'متصلة • رؤية ليلية فائقة الحساسية',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
      location: 'المستودع الصناعي الشرقي',
    },
    {
      id: 4,
      name: 'كاميرا 04 - السياج الحدودي للمنشأة',
      status: 'متصلة • كشف حراري للمحيط',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      location: 'القطاع الأمني الخارجي ج',
    },
  ];

  const securityFaqs = [
    {
      q: 'كم يوماً يمكن الاحتفاظ بتسجيلات كاميرات المراقبة 4K بجودة كاملة؟',
      a: 'بحسب متطلبات منشأتك وسعة أقراص أجهزة NVR المعدة بنظام RAID، نوفر فترات احتفاظ بالتسجيلات تتراوح من 30 يوماً وتصل حتى 180 يوماً من التسجيل المتواصل عالي الدقة قبل التدوير الآلي.',
    },
    {
      q: 'هل يمكن لإدارة الشركة مراقبة البث المباشر بأمان عبر الهواتف الذكية؟',
      a: 'نعم بالتأكيد. يتضمن كل نظام تطبيقاً مشفراً يدعم الدخول ببصمة الإصبع أو الوجه، مع بث مباشر متعدد القنوات بدقة عالية، وإمكانية التحكم في دوران الكاميرات (PTZ)، وتنبيهات فورية في حال حدوث أي حركة مريبة.',
    },
    {
      q: 'هل توفر PRO SETUP التمديدات السلكية والمواسير وتجهيز الكبائن بالكامل؟',
      a: 'نعم، نقدم حلولاً متكاملة "تسليم مفتاح" تشمل مد المواسير المعزولة ضد الحريق والعوامل الجوية، وكابلات الشبكات المعتمدة، وتثبيت الأعمدة وتركيب كبائن الخوادم ووحدات الطاقة غير المنقطعة (UPS).',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>أنظمة المراقبة التجارية والحماية الأمنية</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              أمّن ما <span className="text-electric-gradient">يهمك أكثر</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              اقضِ على النقاط العمياء تماماً مع أنظمة CCTV التجارية المتقدمة، وكاميرات IP بدقة 4K مدعومة بالذكاء الاصطناعي، ووحدات تخزين NVR آمنة، وبوابات تحكم بيومترية مصممة لأعلى المعايير.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('security-surveillance')}
                icon={ArrowLeft}
              >
                طلب معاينة وتأمين المنشأة
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('live-cctv-ops');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                معاينة مركز عمليات المراقبة
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                alt="كاميرا مراقبة احترافية"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE 7 SECURITY CAPABILITIES */}
        <div className="space-y-8">
          <SectionHeading
            badge="العتاد والتجهيز الميداني"
            title="الحلول المتكاملة لكاميرات"
            highlight="المراقبة والأنظمة الأمنية"
            subtitle="أنظمة أمنية تجارية وصناعية للمؤسسات والشركات تضمن أعلى مستويات الحماية والمراقبة دون انقطاع."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. ANIMATED SECURITY ARCHITECTURE FLOW */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              خارطة التدفق التقني للمنظومة
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              هيكلية شبكة المراقبة الشاملة
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              من التقاط المشاهد البصرية بدقة 4K إلى التخزين المشفر والتنبيهات اللحظية على هاتفك: تدفق بيانات آمن دون أي ضياع.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            {architectureFlow.map((flow) => {
              const Icon = flow.icon;
              return (
                <div
                  key={flow.step}
                  className="p-5 rounded-2xl bg-dark-900 border border-white/10 hover:border-electric-cyan/50 transition-all duration-300 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-electric-cyan">{flow.step}</span>
                    <div className="w-8 h-8 rounded-lg bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {flow.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. LIVE CCTV OPERATIONS CENTER SIMULATOR */}
        <div id="live-cctv-ops" className="p-6 sm:p-10 rounded-3xl bg-dark-950 border border-electric-500/35 shadow-glow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                مركز عمليات المراقبة الأمنية المباشرة [بث حي تجريبي]
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span dir="ltr">SYS TIME: <strong className="text-electric-cyan">{currentTime}</strong></span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold font-mono">
                ENCRYPTED TLS/AES-256
              </span>
            </div>
          </div>

          {/* 4 CCTV Camera Feeds Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cameras.map((cam) => {
              const isActive = selectedCam === cam.id;
              return (
                <div
                  key={cam.id}
                  onClick={() => setSelectedCam(cam.id)}
                  className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'border-electric-cyan shadow-glow-sm scale-[1.02]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="relative aspect-video bg-dark-900 overflow-hidden">
                    <img
                      src={cam.img}
                      alt={cam.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white bg-dark-950/70 backdrop-blur-sm px-2 py-1 rounded">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-bold">REC</span>
                      </div>
                      <span className="text-electric-cyan">{cam.fps}</span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 bg-dark-950/80 backdrop-blur-sm px-2 py-1 rounded text-right">
                      <span className="text-[11px] font-bold text-white block truncate">{cam.name}</span>
                      <span className="text-[9px] text-slate-400 block font-mono">{cam.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="إرشادات ومعايير أمنية"
            title="الأسئلة الشائعة حول"
            highlight="أنظمة المراقبة والحماية"
            subtitle="إجابات دقيقة حول فترات التخزين، والمشاهدة الآمنة عبر الهاتف، وخدمات المعاينة الميدانية."
            align="center"
          />

          <div className="space-y-3">
            {securityFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-dark-800/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-right"
                  >
                    <span className="text-sm font-bold text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-electric-cyan' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل تحتاج إلى معاينة أمنية ميدانية لمقر شركتك؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            يقوم مهندسونا المتخصصون بفحص المنشأة وتحديد النقاط العمياء وإعداد مخطط توزيع هندسي متكامل للمعدات والكاميرات.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('security-surveillance')} glow>
              طلب معاينة أمنية الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
