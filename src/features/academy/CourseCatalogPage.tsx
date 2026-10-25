import React, { useState, useMemo } from 'react';
import { Sparkles, BookOpen, RotateCcw, ArrowRight } from 'lucide-react';
import { ACADEMY_COURSES } from '../../data/academyData';
import { CourseItem, CourseCategoryId, CourseLevel, CourseAvailability } from '../../core/types/academy';
import { CourseCard } from './components/CourseCard';
import { CourseSearchFilter, CourseFilterState } from './components/CourseSearchFilter';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { AcademyCTA } from './components/AcademyCTA';

export interface CourseCatalogPageProps {
  initialCategory?: CourseCategoryId | 'all';
  onNavigateToCourseDetail: (slug: string) => void;
  onNavigateToRegister: (courseSlug?: string) => void;
  onBackToAcademyHome: () => void;
}

export const CourseCatalogPage: React.FC<CourseCatalogPageProps> = ({
  initialCategory = 'all',
  onNavigateToCourseDetail,
  onNavigateToRegister,
  onBackToAcademyHome,
}) => {
  const [filters, setFilters] = useState<CourseFilterState>({
    searchQuery: '',
    selectedCategory: initialCategory,
    selectedLevel: 'all',
    selectedAvailability: 'all',
  });

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      selectedCategory: 'all',
      selectedLevel: 'all',
      selectedAvailability: 'all',
    });
  };

  const filteredCourses = useMemo(() => {
    return ACADEMY_COURSES.filter((course: CourseItem) => {
      // Category filter
      if (filters.selectedCategory !== 'all' && course.category !== filters.selectedCategory) {
        return false;
      }

      // Level filter
      if (filters.selectedLevel !== 'all' && course.level !== filters.selectedLevel && course.level !== 'all-levels') {
        return false;
      }

      // Availability filter
      if (filters.selectedAvailability !== 'all' && course.availability !== filters.selectedAvailability) {
        return false;
      }

      // Search Query filter (matches title, shortDescription, curriculum topics, or keywords)
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.shortDescription.toLowerCase().includes(query);
        const matchesCategory = course.categoryLabel.toLowerCase().includes(query);
        const matchesCurriculum = course.curriculum.some((m) =>
          m.title.toLowerCase().includes(query) || m.topics.some((t) => t.toLowerCase().includes(query))
        );

        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesCurriculum) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

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
          <span className="text-cyan-400">دليل الدورات التدريبية</span>
        </div>

        {/* Section Title */}
        <SectionTitle
          chapterNumber="01"
          eyebrow="دليل الدورات والمختبرات"
          title="استكشف جميع المسارات والدورات التدريبية المتاحة"
          highlightedWord="جميع المسارات"
          description="برامج متخصصة في هندسة البرمجيات، شبكات الحاسوب، الأمن السيبراني، وصيانة الهواتف الذكية معتمدة على التطبيق المعملي المباشر."
          className="mb-10 text-center"
        />

        {/* Search & Filter Toolbar */}
        <CourseSearchFilter
          filters={filters}
          onChangeFilters={setFilters}
          onResetFilters={handleResetFilters}
          totalFilteredCount={filteredCourses.length}
        />

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onNavigateToCourseDetail}
                onQuickRegister={onNavigateToRegister}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="p-12 md:p-16 rounded-3xl bg-[#080D1A]/80 border border-white/[0.08] backdrop-blur-xl text-center max-w-xl mx-auto mb-16 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-400 flex items-center justify-center mx-auto mb-5">
              <BookOpen className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              لم نعثر على دورات تطابق معايير البحث
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              جرّب تغيير كلمات البحث أو إعادة ضبط خيارات التصفية لعرض جميع المسارات التعليمية المتاحة.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold shadow-glow-sm transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة ضبط جميع الفلاتر</span>
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <AcademyCTA onRegisterClick={() => onNavigateToRegister()} />
      </div>
    </div>
  );
};
