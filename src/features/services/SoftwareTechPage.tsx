import React, { useState } from 'react';
import { Code2, Smartphone, Database, Cloud, CreditCard, Shield, Server, ArrowLeft, Terminal, Cpu, Layout, Globe, HelpCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { TECH_STACK } from '../../data/techStackData';

export interface SoftwareTechPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const SoftwareTechPage: React.FC<SoftwareTechPageProps> = ({ onOpenQuote }) => {
  const [activeArchNode, setActiveArchNode] = useState<string>('gateway');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const softwareCapabilities = [
    { title: 'المواقع وتطبيقات الويب السريعة', desc: 'منصات Next.js و React حديثة بزمن تحميل أقل من ثانية، وتهيئة تامة لمحركات البحث وتخزين كاش ديناميكي فائق السرعة.', icon: Globe },
    { title: 'تطبيقات الجوال (Flutter)', desc: 'تطبيقات هواتف ذكية عالية الأداء تعمل على iOS و Android بسلاسة 60 إطاراً في الثانية ودعم العمل دون اتصال بالإنترنت.', icon: Smartphone },
    { title: 'البرمجيات المخصصة وأنظمة ERP', desc: 'برمجيات مؤسسية مصممة خصيصاً لأتمتة عملياتك، وإدارة المخزون والطلبات وسير العمل بدلاً من الجداول اليدوية المعقدة.', icon: Server },
    { title: 'لوحات التحكم وتحليل البيانات', desc: 'لوحات بيانات تفاعلية ترصد الأداء الحي، مع رسوم بيانية فورية عبر WebSockets تسهل اتخاذ القرارات الإدارية السليمة.', icon: Layout },
    { title: 'الواجهات البرمجية (APIs)', desc: 'واجهات REST و GraphQL موثقة وآمنة ومصممة للتوسع الأفقي مع حماية صارمة لمنع تسرب البيانات.', icon: Cpu },
    { title: 'قواعد البيانات وهيكلة البيانات', desc: 'قواعد بيانات علائقية PostgreSQL وسحابية Firestore مع ذاكرة كاش Redis تضمن حفظ البيانات دون أي فقدان وسرعة استرجاع مذهلة.', icon: Database },
    { title: 'البنية السحابية وإدارة DevOps', desc: 'حاويات Docker على منصة Google Cloud وسيرفرات مدارة آلياً مع نشر تلقائي CI/CD يضمن استمرارية التشغيل دون توقف.', icon: Cloud },
    { title: 'بوابات الدفع والتجارة الإلكترونية', desc: 'ربط بوابات الدفع المعتمدة (Stripe، Paymob، فوري، Apple Pay، ومدى) مع كشف الاحتيال والمطابقة المالية الآلية.', icon: CreditCard },
  ];

  const architectureNodes = [
    { id: 'client', label: '01 • طبقة واجهات العميل', desc: 'منصات ويب Next.js وتطبيقات هواتف Flutter تعمل على iOS و Android مع دعم التخزين المحلي.', icon: Smartphone },
    { id: 'gateway', label: '02 • بوابة الواجهات البرمجية (Gateway)', desc: 'وكيل عكسي متطور، مصادقة عبر JWT، حماية ضد هجمات حجب الخدمة (DDoS)، وتشفير SSL آمن.', icon: Shield },
    { id: 'engine', label: '03 • محرك الخدمات والعمليات', desc: 'خدمات برمجية مصغرة تعتمد على الأحداث المباشرة (Event-Driven)، وقوائم مهام للمعالجة الخلفية الفورية.', icon: Cpu },
    { id: 'storage', label: '04 • السحابة وقواعد البيانات', desc: 'قواعد بيانات علائقية PostgreSQL، ومزامنة فورية، وتخزين سحابي مشفر لكافة الملفات الحساسة.', icon: Database },
    { id: 'payments', label: '05 • بوابات الدفع والتكاملات', desc: 'ربط آلي مع بوابات الدفع، وإشعارات Webhooks فورية لتحديث حالات الطلبات، والربط بالأنظمة الخارجية.', icon: CreditCard },
  ];

  const softwareFaqs = [
    {
      q: 'هل تطورون تطبيقات هواتف ذكية أصلية أم تطبيقات متعددة المنصات؟',
      a: 'نتخصص في Google Flutter لتطوير تطبيقات متوافقة مع iOS و Android في آن واحد. يترجم Flutter الكود مباشرة إلى تعليمات الآلة الأصلية (Native Machine Code)، مما يمنحك أداء 60 إطاراً في الثانية مع كود برمجي موحد يقلل تكلفة التطوير وزمن الإطلاق إلى النصف.',
    },
    {
      q: 'من يملك الكود البرمجي المصدري وقواعد البيانات بعد اكتمال المشروع؟',
      a: 'شركتك تملك 100% من الكود المصدري الأصلي ومخططات قواعد البيانات والتوثيق التقني. نقوم بتسليم مستودعات Git كاملة وننشر الأنظمة مباشرة على حساباتك السحابية الخاصة.',
    },
    {
      q: 'كيف تضمنون أمان الأنظمة البرمجية والنسخ الاحتياطي؟',
      a: 'تُبنى كل منصة وفق معمارية برمجية صارمة (Clean Architecture)، مع تشفير كامل للبيانات أثناء النقل والتخزين (TLS / AES-256)، ونسخ احتياطي يومي آلي لقواعد البيانات، وعزل الأنظمة داخل حاويات Docker السحابية.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>هندسة البرمجيات المتكاملة والبنية السحابية</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              تكنولوجيا مبنية حول <span className="text-electric-gradient">أهداف أعمالك</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              نصمم ونبني ونوسع منصات وتطبيقات رقمية قوية تؤتمت العمليات المعقدة، وتقدم تجربة استخدام لا تشوبها شائبة، وتمنح مشروعك ميزة تكنولوجية تنافسية غير مسبوقة.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('software-technology')}
                icon={ArrowLeft}
              >
                ناقش مشروعك التقني
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('tech-vis-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                معاينة معمارية النظام التفاعلية
              </Button>
            </div>
          </div>

          {/* Right: Technical Code Sandbox Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-dark-950 font-mono text-xs text-left" dir="ltr">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-dark-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Terminal className="w-3 h-3 text-electric-cyan" />
                  <span>pro_setup_core.dart</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">● Production Live</span>
              </div>

              {/* Code Contents */}
              <div className="p-5 space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <div><span className="text-pink-400">class</span> <span className="text-electric-cyan">ProSetupEngine</span> <span className="text-pink-400">implements</span> <span className="text-amber-300">ScalablePlatform</span> &#123;</div>
                <div className="pl-4"><span className="text-slate-500">// Enterprise Microservices Engine</span></div>
                <div className="pl-4"><span className="text-electric-cyan">final</span> CloudDatabase _db = <span className="text-amber-300">PostgreSQL</span>.pool;</div>
                <div className="pl-4"><span className="text-electric-cyan">final</span> PaymentGateway _pay = <span className="text-amber-300">StripePaymob</span>();</div>
                <div className="pl-4 mt-2"><span className="text-pink-400">Future</span>&lt;<span className="text-emerald-400">SetupResult</span>&gt; <span className="text-blue-400">buildBusinessSolution</span>() <span className="text-pink-400">async</span> &#123;</div>
                <div className="pl-8"><span className="text-pink-400">await</span> _db.secureBootstrap();</div>
                <div className="pl-8"><span className="text-pink-400">await</span> _pay.verifyWebhooks();</div>
                <div className="pl-8"><span className="text-pink-400">return</span> <span className="text-emerald-400">SetupResult</span>(status: <span className="text-emerald-400">Status</span>.productionReady, uptime: <span className="text-amber-300">0.9999</span>);</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Terminal Status Bar */}
              <div className="px-4 py-2.5 bg-dark-900/90 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Clean Architecture • Null-Safe Dart</span>
                <span className="text-electric-cyan font-bold">API Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE 8 SOFTWARE CAPABILITIES */}
        <div className="space-y-8">
          <SectionHeading
            badge="الطيف الهندسي البرمجي"
            title="الحلول البرمجية والتقنية"
            highlight="المتكاملة"
            subtitle="أنظمة مصممة لضمان استمرارية التشغيل، وتشفير فائق الأمان، وقابلية التوسع دون تعقيد."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareCapabilities.map((item, idx) => {
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

        {/* 3. INTERACTIVE TECHNOLOGY ARCHITECTURE VISUALIZATION */}
        <div id="tech-vis-section" className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                مخطط المعمارية التقنية التفاعلي
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ● معمارية مرنة عالية الموثوقية
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              هيكلية النظم وتدفق البيانات
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              انقر على أي طبقة من الطبقات الخمس أدناه لاستكشاف كيفية انتقال الطلبات بأمان من تطبيقات العميل إلى قواعد البيانات وبوابات الدفع المشفرة.
            </p>
          </div>

          {/* Interactive Topology Nodes Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {architectureNodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeArchNode === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveArchNode(node.id)}
                  className={`p-4 rounded-2xl border text-right transition-all duration-300 space-y-2.5 ${
                    isActive
                      ? 'bg-dark-900 border-electric-cyan shadow-glow-sm scale-[1.02]'
                      : 'bg-dark-950/70 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-electric-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{node.label}</span>
                    <span className="text-[11px] text-slate-400 line-clamp-2 mt-1">{node.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Deep-Dive Card */}
          {(() => {
            const current = architectureNodes.find(n => n.id === activeArchNode) || architectureNodes[0];
            return (
              <div className="p-6 rounded-2xl bg-dark-950 border border-white/10 space-y-3">
                <span className="text-xs font-mono text-electric-cyan uppercase tracking-wider block font-bold">
                  تفاصيل الطبقة: {current.label}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {current.desc} مصممة وفق بروتوكولات حماية متطورة، وتحقق استباقي من المدخلات لمنع الثغرات، وتسجيل لحظي لكافة العمليات لضمان أقصى درجات الاستقرار.
                </p>
              </div>
            );
          })()}
        </div>

        {/* 4. VISUAL MOCKUPS SHOWCASE */}
        <div className="space-y-8">
          <SectionHeading
            badge="هندسة الواجهات وتجربة المستخدم"
            title="نماذج الأنظمة عبر"
            highlight="مختلف المنصات"
            subtitle="واجهات أعمال رقمية متطورة وسريعة الاستجابة تعمل بكفاءة عبر المتصفحات، والهواتف، وشاشات المراقبة والتحكم."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Browser Mockup */}
            <div className="rounded-3xl overflow-hidden bg-dark-900 border border-white/10 p-5 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10" dir="ltr">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">https://app.prosetup.enterprise</span>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-950">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="منصة الويب السحابية"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">منصة ويب سحابية SaaS</h4>
                <p className="text-xs text-slate-400">تطبيق ويب فائق السرعة عبر Next.js مع مستويات صلاحيات متعددة للموظفين والمديرين.</p>
              </div>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="rounded-3xl overflow-hidden bg-dark-900 border border-white/10 p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono text-electric-cyan font-bold">تطبيق iOS و Android</span>
                <span className="text-[10px] text-slate-400 font-mono">Flutter 60fps</span>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-950">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="تطبيق الجوال الذكي"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">تطبيق جوال متعدد المنصات</h4>
                <p className="text-xs text-slate-400">تطبيق يدعم العمل دون اتصال بالإنترنت، مع إشعارات دفع فورية وتسجيل دخول بالبصمة.</p>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="rounded-3xl overflow-hidden bg-dark-900 border border-white/10 p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">لوحة تحكم تفاعلية</span>
                <span className="text-[10px] text-slate-400 font-mono">Live WebSockets</span>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-950">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="لوحة تحكم العمليات"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">مركز إدارة ومتابعة العمليات</h4>
                <p className="text-xs text-slate-400">مؤشرات أداء لحظية، وتتبع دقيق للمخزون والطلبات وتنبيهات فورية بالتحصيلات.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. TECHNOLOGY STACK GRID */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 backdrop-blur-2xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              حزمة التقنيات وأطر العمل الأساسية
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              تقنيات عالمية نتقنها ونعتمدها
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              نعتمد أحدث لغات البرمجة وأطر العمل العالمية لضمان بقاء بنيتك التكنولوجية قوية وسريعة وسهلة الصيانة والتطوير المستقبلي.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TECH_STACK.map((tech, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-dark-900/80 border border-white/[0.07] hover:border-electric-cyan/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {tech.categoryLabel || tech.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="استفسارات تقنية"
            title="الأسئلة الشائعة حول"
            highlight="البرمجة والتقنية"
            subtitle="إجابات دقيقة حول ملكية الكود، وأطر العمل، والاستضافة السحابية واتفاقيات مستوى الخدمة (SLAs)."
            align="center"
          />

          <div className="space-y-3">
            {softwareFaqs.map((faq, i) => {
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

        {/* 7. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل تحتاج إلى نظام برمجي مخصص لشركتك؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            مهندسونا مستعدون لدراسة متطلباتك التشغيلية ووضع مخطط معماري تقني متكامل يلبي طموح أعمالك.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('software-technology')} glow>
              ابدأ مشروعك البرمجي الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
