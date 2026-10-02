import React, { useState } from 'react';
import { Camera, Film, Play, Sparkles, ArrowLeft, Video, Scissors, Eye, HelpCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface PhotographyVideoPageProps {
  onOpenQuote: (serviceId: string) => void;
  onWatchVideo: () => void;
}

export const PhotographyVideoPage: React.FC<PhotographyVideoPageProps> = ({ onOpenQuote, onWatchVideo }) => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'all' | 'video' | 'photo'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const mediaSections = [
    { title: 'التصوير الفوتوغرافي الاحترافي', desc: 'جلسات تصوير استوديو وتصوير معماري بأحدث أنظمة الإضاءة الاحترافية وحساسات فائقة الحدة والوضوح.', icon: Camera },
    { title: 'تصوير المنتجات التجاري', desc: 'تجهيزات استوديو ماكرو متخصصة لإبراز انعكاسات المعادن، وخامات المنتجات الفاخرة، والتغليف بدقة فائقة.', icon: Eye },
    { title: 'التصوير التجاري والبورتريه', desc: 'جلسات تصوير واقعية للعلامات التجارية، وبورتريهات رسمية لقيادات وموظفي الشركات، وتوثيق مقرات العمل.', icon: Film },
    { title: 'الإنتاج السينمائي وتصوير الفيديو', desc: 'إنتاج إعلانات مرئية كاملة بكاميرات سينمائية متطورة، ورافعات حركية، وهندسة صوتية اتجاهية عازلة للضوضاء.', icon: Video },
    { title: 'الإعلانات التجارية التلفزيونية', desc: 'أفكار إعلانية مبتكرة وسيناريوهات مؤثرة مخصصة للبث التلفزيوني والحملات الرقمية الضخمة.', icon: Sparkles },
    { title: 'فيديوهات الريلز والمحتوى الرأسي', desc: 'مقاطع فيديو رأسية (9:16) سريعة ومثيرة للاهتمام، مع انتقالات بصرية جذابة ترفع التفاعل على إنستغرام وتيك توك.', icon: Play },
    { title: 'المونتاج والتلوين السينمائي', desc: 'مونتاج متقدم، وهندسة مؤثرات صوتية، وتلوين سينمائي معتمد عبر DaVinci Resolve ورسوم جرافيك متحركة.', icon: Scissors },
  ];

  const mediaItems = [
    { type: 'video', title: 'إعلان ماكينة قهوة Solis الذكية', cat: 'إعلان تجاري 4K', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80', duration: '0:45' },
    { type: 'photo', title: 'جلسة تصوير نادي Aura الفاخر', cat: 'تصوير تجاري وتسويقي', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80' },
    { type: 'video', title: 'ريلز إطلاق نظارات Velox الفاخرة', cat: 'فيديو ريلز تفاعلي (9:16)', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80', duration: '0:30' },
    { type: 'photo', title: 'جلسة تصوير Lumina للمساحات المعمارية', cat: 'تصوير معماري وديكور داخلي', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
    { type: 'video', title: 'فيلم وثائقي لشركة Nexus اللوجستية', cat: 'فيلم تعريفي مؤسسي', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', duration: '1:20' },
    { type: 'photo', title: 'كتالوج المنتجات الدقيقة Crafted', cat: 'تصوير استوديو ماكرو', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80' },
  ];

  const filteredMedia = activeMediaFilter === 'all'
    ? mediaItems
    : mediaItems.filter(m => m.type === activeMediaFilter);

  const productionProcess = [
    { step: '01', title: 'الفكرة ولوحة القصة (Storyboard)', desc: 'تصميم لوحة المزاج البصري، وكتابة السيناريو الإعلاني، واختيار المواقع وتجهيز الممثلين.' },
    { step: '02', title: 'تجهيز الاستوديو والإضاءة', desc: 'ضبط شبكات الإضاءة السينمائية الاحترافية، وتجهيز العدسات الفاخرة ومعايرة الألوان.' },
    { step: '03', title: 'التصوير السينمائي عالي الدقة', desc: 'التقاط زوايا متعددة بدقة 4K ProRes بمعدل 24 إطاراً وتصوير بطيء بمعدل 120 إطاراً في الثانية.' },
    { step: '04', title: 'المونتاج والتلوين والمؤثرات', desc: 'التحرير والمونتاج، وضبط الإيقاع، وهندسة الصوت والمؤثرات، وتلوين سينمائي عبر DaVinci Resolve.' },
    { step: '05', title: 'التصدير بالصيغ المعتمدة', desc: 'تسليم الفيديو بمقاسات الشاشات التلفزيونية 16:9، والمقاس الرأسي للسوشيال ميديا 9:16، وصور مطبوعة عالية الدقة.' },
  ];

  const productionFaqs = [
    {
      q: 'هل توفرون التصوير داخل استوديوهاتكم الخاصة أم في مواقع العمل الخارجية؟',
      a: 'نوفر الخيارين باحترافية كاملة. نمتلك استوديوهات مجهزة بالكامل مع إضاءات سينمائية وخلفيات تصوير متخصصة، كما ننقل فرق الإنتاج بمعداتها الكاملة لمقرات الشركات والمصانع والمواقع المفتوحة.',
    },
    {
      q: 'هل يمكن تسليم مقاطع الفيديو بصيغ مناسبة للإعلانات الرقمية والتلفزيون معاً؟',
      a: 'نعم بالتأكيد. نقوم بتصوير المشاريع بصيغ سينمائية خام (RAW) عالية الدقة، ثم نقوم بتصدير مقاسات متعددة: مقاسات مخصصة لإعلانات تيك توك وإنستغرام (9:16)، ويوتيوب والشاشات (16:9)، ومواصفات البث التلفزيوني المعتمدة.',
    },
    {
      q: 'كم يستغرق مونتاج وتلوين الفيديو وتسليم النسخة المعتمدة؟',
      a: 'تستغرق النسخة الأولية للمشاريع القياسية عادةً من 5 إلى 10 أيام عمل بعد انتهاء يوم التصوير. كما يتوفر خيار التسليم العاجل خلال 48 ساعة للمشاريع الإعلانية السريعة.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. CINEMATIC HERO SECTION */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-14 lg:p-20 bg-dark-950 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=80"
              alt="معدات الإنتاج السينمائي"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-dark-950 via-dark-950/80 to-dark-950/50" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/20 border border-electric-500/30 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>الإنتاج السينمائي والتصوير التجاري الاحترافي</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              محتوى سينمائي وبصري <span className="text-electric-gradient">يشعل الرغبة في الشراء</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              الصور عالية الوضوح والفيديوهات السينمائية هي سر ترسيخ مكانة علامتك التجارية في أذهان العملاء. بمعدات سينمائية متقدمة، ومخرجي إضاءة، وخبراء ألوان، نصنع محتوى بصرياً يحول المشاهدين إلى عملاء دائمين.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('photography-video')}
                icon={ArrowLeft}
              >
                احجز جلسة تصوير وإنتاج
              </Button>
              <Button
                variant="glass"
                size="md"
                icon={Play}
                iconPosition="left"
                onClick={onWatchVideo}
                className="text-white hover:bg-white/10"
              >
                شاهد الاستعراض المرئي للشركة (Showreel)
              </Button>
            </div>
          </div>
        </div>

        {/* 2. THE 7 MEDIA SECTIONS */}
        <div className="space-y-8">
          <SectionHeading
            badge="خدمات الإنتاج البصري"
            title="حلول الإنتاج السينمائي"
            highlight="والتصوير المتكامل"
            subtitle="كل ما يلزم لتصوير وإنتاج مواد إعلامية فائقة الجاذبية والتأثير."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaSections.map((item, idx) => {
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

        {/* 3. HORIZONTAL IMAGE & VIDEO GALLERY WITH PLAY BUTTONS */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                معرض الأعمال المرئية
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                نماذج من إنتاجنا البصري والسينمائي
              </h3>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-800 border border-white/10 self-start sm:self-auto">
              {(['all', 'video', 'photo'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveMediaFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeMediaFilter === filter
                      ? 'bg-electric-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter === 'all' ? 'كافة الوسائط' : filter === 'video' ? 'الفيديو والريلز' : 'التصوير الفوتوغرافي'}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((m, i) => (
              <div
                key={i}
                onClick={m.type === 'video' ? onWatchVideo : undefined}
                className="group relative rounded-3xl overflow-hidden bg-dark-900 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 aspect-video cursor-pointer shadow-xl"
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Video Play Button Badge */}
                {m.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-electric-600/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-glow-md group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Duration indicator */}
                {m.duration && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1.5" dir="ltr">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>{m.duration}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-right">
                  <span className="text-[10px] text-electric-cyan font-bold uppercase tracking-wider block font-mono">
                    {m.cat}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors mt-0.5">
                    {m.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PRODUCTION METHODOLOGY */}
        <div className="space-y-8">
          <SectionHeading
            badge="خط الإنتاج في الاستوديو"
            title="مراحل دورة الإنتاج"
            highlight="السينمائي والإعلاني"
            subtitle="من كتابة السيناريو الإبداعي وتجهيز مواقع التصوير حتى هندسة الألوان والتصدير النهائي."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {productionProcess.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-dark-800/70 border border-white/5 space-y-2">
                <span className="font-mono text-xs font-bold text-electric-cyan">{step.step}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="إيضاحات واستفسارات"
            title="الأسئلة الشائعة حول"
            highlight="التصوير والإنتاج"
            subtitle="إجابات دقيقة حول فترات التسليم، ومقاسات وصيغ الفيديو، والمعدات المعتمدة."
            align="center"
          />

          <div className="space-y-3">
            {productionFaqs.map((faq, i) => {
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
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل أنت مستعد لإنتاج إعلامي يبرز قوة علامتك؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            احجز استوديو الإنتاج والمخرجين وفرق الإضاءة المحترفة لحملتك الإعلانية القادمة.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('photography-video')} glow>
              احجز جلسة الإنتاج والتصوير
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
