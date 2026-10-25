import React from 'react';
import { ShieldCheck, Target, Zap, Award, CheckCircle2, ArrowLeft, Building2, Sparkles, Compass, MapPin, ExternalLink, Globe, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  const values = [
    { title: 'التناغم المعماري المتكامل', desc: 'لا وجود لجزر منعزلة. مهندسو البرمجيات يعملون جنباً إلى جنب مع مديري التسويق وخبراء الأنظمة الأمنية والمصورين في خطة واحدة.', icon: Zap },
    { title: 'التركيز على العائد الاستثماري الحقيقي (ROI)', desc: 'لا نصنع مشاريع استعراضية فارغة. كل سطر كود، وتصميم إعلاني، وحساس كاميرا يُنشر لهدف تجاري واضح وملموس لزيادة أرباحك.', icon: Target },
    { title: 'النزاهة المؤسسية والأمان المطلق', desc: 'من التشفير السحابي وحوكمة البيانات إلى بوابات الدخول البيومترية، نضمن بقاء منشأتك وبياناتك مؤمنة بأعلى المعايير العالمية.', icon: ShieldCheck },
    { title: 'إنهاء فوضى تعدد الموردين', desc: 'شريك استراتيجي واحد، ومدير مشروع مخصص، وفاتورة موحدة — مما يوفر شهوراً من التنسيق المرهق وتبادل اللوم بين الشركات المنفصلة.', icon: Award },
  ];

  const teamMembers = [
    {
      name: 'أيمن وليد',
      roleAr: 'الرئيس التنفيذي (CEO)',
      position: 'Chief Executive Officer (CEO)',
      specialization: 'الرؤية الاستراتيجية وتطوير الأعمال والاستثمار المؤسسي',
      photo: '/images/ayman_walead.jpeg',
      link: 'https://www.facebook.com/share/19qbgkCLPP/',
      linkLabel: 'حساب Facebook',
      isWebsite: false,
    },
    {
      name: 'إبراهيم الششتاوي',
      roleAr: 'المدير التقني ومهندس البرمجيات (CTO)',
      position: 'Chief Technology Officer (CTO)',
      specialization: 'هندسة البرمجيات المتقدمة، المعمارية السحابية والأنظمة التقنية',
      photo: '/images/ibraham_elshishtawy.jpeg',
      link: 'https://ibrahimelshishtawy-bber6ghhv-covantage-sr.vercel.app/',
      linkLabel: 'الموقع الشخصي / Portfolio',
      isWebsite: true,
    },
    {
      name: 'أحمد حسن',
      roleAr: 'المدير المالي (CFO)',
      position: 'Chief Financial Officer (CFO)',
      specialization: 'الإدارة والتخطيط المالي، حوكمة الميزانيات وإدارة الاستثمارات والسيولة',
      photo: '/images/ahmad_hassen.jpeg',
      link: 'https://www.facebook.com/share/1FV5jZxC4G/',
      linkLabel: 'حساب Facebook',
      isWebsite: false,
    },
    {
      name: 'محمد أحمد',
      roleAr: 'المدير الإداري (COO)',
      position: 'Administrative Director (COO)',
      specialization: 'إدارة العمليات التشغيلية، حوكمة المشاريع والمتابعة الميدانية للمنشآت',
      photo: '/images/mahamed_ahmad.jpeg',
      link: 'https://www.facebook.com/mohammad.ahmad.310962?sfnsn=wa&mibextid=RUbZ1f',
      linkLabel: 'حساب Facebook',
      isWebsite: false,
    },
  ];

  return (
    <div className="py-8 md:py-12 space-y-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. SECTION: WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>من نحن</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              الشريك الموحد لكل ما <span className="text-electric-gradient">تحتاجه أعمالك</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              ليست PRO SETUP مجرد وكالة تسويق تقليدية أو شركة برمجيات منفصلة، بل نحن شركة حلول وتجهيز أعمال متكاملة تجمع التسويق الرقمي، وتصميم الهويات البصرية، والبرمجيات المتقدمة، وتركيب كاميرات المراقبة، والإنتاج السينمائي، وإدارة الحملات الإعلانية تحت مظلة واحدة متناسقة.
            </p>

            <div className="pt-2">
              <Button variant="primary" onClick={onOpenQuote} glow icon={ArrowLeft}>
                ابدأ شراكتك مع PRO SETUP
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl aspect-[4/3] bg-dark-900 relative group">
              <img
                src="/images/packground.jpeg"
                alt="شعار وهوية PRO SETUP الرسمية"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </div>

        {/* 2. SECTION: WHAT WE DO */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              القدرات والخدمات المتكاملة
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ما الذي نقوم به؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              نهندس كل ما يلزم لإطلاق وتشغيل وتوسيع وتأمين المنشآت والشركات التجارية الحديثة بكفاءة مطلقة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              { title: 'التسويق الرقمي وإدارة السوشيال ميديا', desc: 'استهداف دقيق للجمهور، ومسارات استقطاب عملاء محتملين، وإدارة المحتوى اليومي.' },
              { title: 'الهوية البصرية وتصميم UI/UX', desc: 'هويات أيقونية متكاملة، ونظم تصميم رقمية مريحة للمستخدمين، وتغليف فاخر.' },
              { title: 'تطوير البرمجيات والتطبيقات', desc: 'منصات ويب سريعة، وتطبيقات Flutter على iOS و Android، وأنظمة تخطيط موارد ERP.' },
              { title: 'كاميرات المراقبة والأنظمة الأمنية', desc: 'تركيب كاميرات 4K IP ذكية، ووحدات تخزين NVR، وبوابات تحكم بالبصمة.' },
              { title: 'التصوير والإنتاج السينمائي', desc: 'إعلانات سينمائية بدقة 4K، وتصوير استوديو للمنتجات، ومقاطع ريلز سريعة الانتشار.' },
              { title: 'الحملات الإعلانية الممولة', desc: 'شراء مساحات إعلانية مستند إلى البيانات ومضاعفة العائد الإعلاني على المنصات العالمية.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mb-1" />
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SECTION: OUR VISION & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">رؤيتنا</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              أن نكون المرجع الأول والشريك الأكثر موثوقية لرواد الأعمال والمؤسسات الكبرى في العالم العربي عند تأسيس وتطوير وتأمين مشاريعهم — حيث يدخل العميل برؤية طموحة ويخرج بكيان تجاري متكامل، مربح، متقدم تكنولوجياً، ومحصن أمنياً.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">رسالتنا</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              القضاء التام على الفوضى الناتجة عن التعامل مع وكالات وشركات منفصلة. من خلال توحيد التكنولوجيا، والتصميم الإبداعي، والتسويق، والأمان الميداني، والإنتاج البصري تحت سقف واحد، نمنح الشركات قوة دفع وانطلاقة تجارية لا يمكن إيقافها.
            </p>
          </div>
        </div>

        {/* 4. SECTION: OUR VALUES */}
        <div className="space-y-8">
          <SectionHeading
            badge="فلسفتنا الجوهرية"
            title="القيم التي تحكم"
            highlight="مسيرة عملنا"
            subtitle="المعايير الصارمة التي توجه كل سطر برمجي، وكل حملة إعلانية، وكل منظومة أمنية ننفذها."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-dark-800/70 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-md transition-all text-right space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. SECTION: OUR TEAM */}
        <div className="space-y-8">
          <SectionHeading
            badge="فريق التأسيس والقيادة"
            title="الفريق المؤسس خلف"
            highlight="شركة PRO SETUP"
            subtitle="القيادات التنفيذية، التقنية، المالية، والإدارية التي أسست الشركة وتقود نجاح وتكامل مشاريعها."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-dark-800/90 border border-white/10 hover:border-electric-cyan/50 transition-all p-5 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-950 border border-white/5">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white group-hover:text-electric-cyan transition-colors">
                        {member.name}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-electric-600/15 text-electric-cyan border border-electric-500/20 font-medium">
                        شريك مؤسس
                      </span>
                    </div>
                    <span className="text-xs text-electric-cyan font-bold block">
                      {member.roleAr}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono block" dir="ltr">
                      {member.position}
                    </span>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-mono text-slate-500">الملف الشخصي:</span>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-electric-cyan transition-colors"
                  >
                    {member.isWebsite ? (
                      <Globe className="w-3.5 h-3.5 text-electric-cyan" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5 text-electric-cyan" />
                    )}
                    <span>{member.linkLabel}</span>
                    <span dir="ltr">←</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SECTION: COMPANY LOCATION */}
        <div className="space-y-8">
          <SectionHeading
            badge="المقر الرئيسي والانتشار"
            title="مقر شركة"
            highlight="PRO SETUP الرسمية"
            subtitle="نستقبل عملاءنا وشركاء نجاحنا في مقرنا المجهز لتنسيق كافة المشاريع البرمجية والميدانية."
            align="center"
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>الموقع الجغرافي المعتمد</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    زورنا في مقرنا أو احصل على الاتجاهات مباشرة
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    يضم مقر PRO SETUP استوديوهات الإنتاج المرئي، ومختبرات هندسة وتطوير البرمجيات، ومركز العمليات والمراقبة الأمنية. متاحون يومياً لخدمتكم واستقبال متطلبات مشاريعكم التجارية.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 space-y-1">
                    <span className="text-[11px] text-slate-400 block font-semibold">العنوان والمقر:</span>
                    <span className="text-sm font-bold text-white block">{COMPANY_INFO.contact.address}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 space-y-1">
                    <span className="text-[11px] text-slate-400 block font-semibold">أوقات العمل الرسمية:</span>
                    <span className="text-xs font-bold text-white block">{COMPANY_INFO.contact.workingHours}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={COMPANY_INFO.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-electric-gradient text-dark-950 font-bold text-sm shadow-glow-sm hover:scale-105 active:scale-95 transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>فتح الموقع في خرائط Google</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMPANY_INFO.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-electric-cyan/40 transition-all"
                  >
                    <span>تنسيق موعد زيارة عبر واتساب</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <a
                  href={COMPANY_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative rounded-2xl overflow-hidden border border-electric-cyan/30 bg-dark-950 p-6 text-center space-y-4 shadow-xl hover:border-electric-cyan transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-electric-cyan/15 border border-electric-cyan/30 text-electric-cyan mx-auto flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow-sm transition-all">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-white block group-hover:text-electric-cyan transition-colors">
                      خرائط Google التفاعلية (Google Maps)
                    </span>
                    <p className="text-xs text-slate-400">
                      اضغط هنا للانتقال مباشرة إلى إحداثيات مقر PRO SETUP الدقيقة على خرائط Google
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-cyan group-hover:underline">
                      <span>عرض على الخريطة</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 7. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل أنت مستعد للشراكة مع فريق متكامل؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            اكتشف الفارق الحقيقي عندما تجتمع الدقة الهندسية، والإبداع البصري، والأمان التشغيلي تحت قيادة واحدة لمشروعك.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={onOpenQuote} glow>
              ابدأ رحلتك معنا الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
