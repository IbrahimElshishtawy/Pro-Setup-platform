import React from 'react';
import { ShieldCheck, Target, Zap, Award, CheckCircle2, ArrowLeft, Building2, Sparkles, Compass } from 'lucide-react';
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
      name: '[الرئيس التنفيذي]',
      position: 'Chief Executive Officer',
      specialization: 'تطوير الأعمال الاستراتيجي والنمو المؤسسي',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: '[رئيس قطاع البرمجيات والأنظمة]',
      position: 'Head of Software & Cloud Systems',
      specialization: 'تطوير Flutter، المعمارية السحابية وقواعد البيانات',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: '[المدير الإبداعي والفني]',
      position: 'Head of Brand Design & UI/UX',
      specialization: 'الهوية البصرية، تصميم المنتجات وتجارب المستخدم',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: '[مسؤول الأنظمة الأمنية والمراقبة]',
      position: 'Director of Hardware & Surveillance',
      specialization: 'شبكات كاميرات المراقبة، وتجهيز غرف السيرفرات والبوابات',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
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
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="مركز عمليات وتجهيزات PRO SETUP"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
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
            badge="القيادة والإشراف"
            title="الفريق المتخصص خلف"
            highlight="نجاحات PRO SETUP"
            subtitle="مهندسو برمجيات معتمدون، ومخرجون إبداعيون، وخبراء أمن وشبكات يقودون كل تفصيلة في مشروعك."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-dark-800/90 border border-white/10 hover:border-electric-cyan/50 transition-all p-5 space-y-4 shadow-xl"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-950">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {member.name}
                  </h4>
                  <span className="text-xs text-electric-cyan font-semibold block font-mono" dir="ltr">
                    {member.position}
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                    {member.specialization}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">القناة الرسمية:</span>
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-400 hover:text-electric-cyan transition-colors"
                  >
                    حساب LinkedIn ←
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CTA SECTION */}
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
