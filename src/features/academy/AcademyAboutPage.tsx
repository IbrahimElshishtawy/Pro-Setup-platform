import React from 'react';
import { 
  ArrowRight, 
  Target, 
  Compass, 
  Microscope, 
  Award, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  HeartHandshake
} from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { AcademyCTA } from './components/AcademyCTA';

export interface AcademyAboutPageProps {
  onNavigateToCourses: () => void;
  onNavigateToRegister: () => void;
  onBackToAcademyHome: () => void;
}

export const AcademyAboutPage: React.FC<AcademyAboutPageProps> = ({
  onNavigateToCourses,
  onNavigateToRegister,
  onBackToAcademyHome,
}) => {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs font-semibold text-slate-400">
          <button
            onClick={onBackToAcademyHome}
            className="hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>الرئيسية للأكاديمية</span>
          </button>
          <span>/</span>
          <span className="text-cyan-400">عن ProSetup Academy</span>
        </div>

        {/* Section Title */}
        <SectionTitle
          chapterNumber="03"
          eyebrow="الرؤية والمنهجية التعليمية"
          title="تمكين الشباب والتقنيين بالمهارات العملية الأكثر طلباً"
          highlightedWord="المهارات العملية"
          description="نشأت ProSetup Academy كامتداد تعليمي طبيعي لمجموعة ProSetup International، لنقل خبراتنا الميدانية المباشرة إلى متدربينا دون حشو نظري أو وعود وهمية."
          className="mb-14 text-center"
        />

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <SpotlightCard className="p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              رسالتنا التعليمية
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              سد الفجوة الكبيرة بين المناهج الأكاديمية النظرية والاحتياجات الفعلية لسوق العمل التقني. نحن ندرّب طلابنا على نفس الأدوات، ومحطات الفحص، ولغات البرمجة، والمعدات التي نستخدمها في تنفيذ مشاريع عملائنا الكبرى.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08]">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              رؤيتنا المستقبلية
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              أن نكون المركز المرجعي الموثوق في مصر والشرق الأوسط للتعليم التقني والمهني عالي الكفاءة، حيث يتخرج المتدرب ومعه محفظة مشاريع حقيقية (Portfolio) وخبرة يد ملموسة تمكّنه من المنافسة باقتدار.
            </p>
          </SpotlightCard>
        </div>

        {/* Four Learning Standards Pillars */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              المعايير الأربعة التي تحكم برامجنا
            </h3>
            <p className="text-sm text-slate-400">
              مبادئ أساسية نلتزم بها مع كل متدرب يلتحق بالأكاديمية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
              <Microscope className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">التطبيق المعملي 100%</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                لكل ساعة شرح نظري، ما لا يقل عن ساعتين من التدريب العملي والتجربة المباشرة على الأجهزة والسيرفرات.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
              <Terminal className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">مناهج حديثة متجددة</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تحديث مستمر لمحتوى الدورات ليتوافق مع أحدث إصدارات الأطر البرمجية (React 19, Flutter, Node.js) ومعدات الفحص الحديثة.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
              <Layers className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">المشروع التخرجي المعتمد</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                لا يحصل المتدرب على شهادة إتمام المسار إلا بعد بناء واختبار مشروع تخرجي حقيقي يثبت استيعابه الكامل.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
              <HeartHandshake className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">الشفافية والأمانة الفنية</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                نحدد بوضوح متطلبات كل دورة ومستواها ولا نبيع وعوداً بالتوظيف الفوري دون جهد ومثابرة حقيقية من المتدرب.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Formats Comparison */}
        <section className="p-8 md:p-12 rounded-3xl bg-[#080D1A]/90 border border-white/[0.08] mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
              أنماط وبيئات التدريب
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white">
              خيارات تعليمية مرنة تناسب ظروفك
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 font-mono text-[11px] font-bold block w-fit mb-3">
                المختبرات المعملية الحية
              </span>
              <h4 className="text-base font-bold text-white mb-2">تدريب عملي ميداني</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                إلزامي لمسارات صيانة الهاردوير وهندسة الكابلات والشبكات لضمان التعامل المباشر مع المعدات الدقيقة واللوحات الأم.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 font-mono text-[11px] font-bold block w-fit mb-3">
                التعليم المدمج (Hybrid)
              </span>
              <h4 className="text-base font-bold text-white mb-2">جلسات برمجية تفاعلية</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                محاضرات تفاعلية عبر الإنترنت لكتابة الأكواد مع لقاءات أسبوعية لمراجعة المشاريع وحل المشكلات الفنية.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 font-mono text-[11px] font-bold block w-fit mb-3">
                الورش المكثفة (Bootcamps)
              </span>
              <h4 className="text-base font-bold text-white mb-2">معسكرات إتقان سريعة</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                برامج مكثفة في عطلات نهاية الأسبوع للمهندسين والفنيين الراغبين في ترقية مهاراتهم في تخصص تقني محدد.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <AcademyCTA onRegisterClick={onNavigateToRegister} />
      </div>
    </div>
  );
};
