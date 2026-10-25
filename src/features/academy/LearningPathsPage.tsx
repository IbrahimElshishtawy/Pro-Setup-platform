import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Filter } from 'lucide-react';
import { ACADEMY_LEARNING_PATHS } from '../../data/academyData';
import { CourseCategoryId } from '../../core/types/academy';
import { LearningPathCard } from './components/LearningPathCard';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { AcademyCTA } from './components/AcademyCTA';

export interface LearningPathsPageProps {
  onNavigateToCourse: (courseSlug: string) => void;
  onEnrollPath: (pathSlug: string) => void;
  onBackToAcademyHome: () => void;
}

export const LearningPathsPage: React.FC<LearningPathsPageProps> = ({
  onNavigateToCourse,
  onEnrollPath,
  onBackToAcademyHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategoryId | 'all'>('all');

  const filteredPaths = ACADEMY_LEARNING_PATHS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.categoryId === selectedCategory;
  });

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
          <span className="text-cyan-400">المسارات المهنية والخرائط التدريبية</span>
        </div>

        {/* Section Title */}
        <SectionTitle
          chapterNumber="02"
          eyebrow="الخرائط التدريبية المنسقة"
          title="مسارات مهنية متسلسلة تأخذك من البداية حتى سوق العمل"
          highlightedWord="مسارات مهنية"
          description="خرائط تدريبية شاملة تجمع بين الكورسات النظرية، التطبيقات المعملية، ومشاريع التخرج لإعداد كوادر تقنية متكاملة في التخصصات السبعة المطلوبة."
          className="mb-12 text-center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-glow-sm'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
            }`}
          >
            جميع المسارات ({ACADEMY_LEARNING_PATHS.length})
          </button>

          {ACADEMY_LEARNING_PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => setSelectedCategory(path.categoryId)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === path.categoryId
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
              }`}
            >
              {path.targetRole.split('/')[0]}
            </button>
          ))}
        </div>

        {/* Learning Paths Cards Stack */}
        <div className="space-y-8 mb-16">
          {filteredPaths.map((path) => (
            <LearningPathCard
              key={path.id}
              path={path}
              onExploreCourse={onNavigateToCourse}
              onEnrollPath={onEnrollPath}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <AcademyCTA onRegisterClick={() => onEnrollPath('general-path')} />
      </div>
    </div>
  );
};
