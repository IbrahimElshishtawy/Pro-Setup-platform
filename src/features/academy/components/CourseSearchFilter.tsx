import React from 'react';
import { Search, X, RotateCcw } from 'lucide-react';
import { CourseCategoryId, CourseLevel, CourseAvailability } from '../../../core/types/academy';
import { ACADEMY_CATEGORIES } from '../../../data/academyData';

export interface CourseFilterState {
  searchQuery: string;
  selectedCategory: CourseCategoryId | 'all';
  selectedLevel: CourseLevel | 'all';
  selectedAvailability: CourseAvailability | 'all';
}

export interface CourseSearchFilterProps {
  filters: CourseFilterState;
  onChangeFilters: (newFilters: CourseFilterState) => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

export const CourseSearchFilter: React.FC<CourseSearchFilterProps> = ({
  filters,
  onChangeFilters,
  onResetFilters,
  totalFilteredCount,
}) => {
  const isFiltered =
    filters.searchQuery !== '' ||
    filters.selectedCategory !== 'all' ||
    filters.selectedLevel !== 'all' ||
    filters.selectedAvailability !== 'all';

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFilters({ ...filters, searchQuery: e.target.value });
  };

  const handleCategorySelect = (cat: CourseCategoryId | 'all') => {
    onChangeFilters({ ...filters, selectedCategory: cat });
  };

  const handleLevelSelect = (lvl: CourseLevel | 'all') => {
    onChangeFilters({ ...filters, selectedLevel: lvl });
  };

  const handleAvailabilitySelect = (avail: CourseAvailability | 'all') => {
    onChangeFilters({ ...filters, selectedAvailability: avail });
  };

  return (
    <div className="bg-[#080D1A]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 mb-10 shadow-xl">
      {/* Top Row: Search Input & Quick Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleSearchChange}
            placeholder="ابحث باسم الدورة أو الكلمة المفتاحية (مثال: React, صيانة, شبكات, Flutter)..."
            className="w-full ps-12 pe-10 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onChangeFilters({ ...filters, searchQuery: '' })}
              className="absolute end-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="مسح البحث"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Level Dropdown */}
        <div className="flex items-center gap-3">
          <select
            value={filters.selectedLevel}
            onChange={(e) => handleLevelSelect(e.target.value as CourseLevel | 'all')}
            className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-slate-200 text-sm focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="all" className="bg-[#080D1A] text-white">كافة المستويات</option>
            <option value="beginner" className="bg-[#080D1A] text-white">مستوى مبتدئ</option>
            <option value="intermediate" className="bg-[#080D1A] text-white">مستوى متوسط</option>
            <option value="advanced" className="bg-[#080D1A] text-white">مستوى متقدم</option>
          </select>

          {/* Availability Dropdown */}
          <select
            value={filters.selectedAvailability}
            onChange={(e) => handleAvailabilitySelect(e.target.value as CourseAvailability | 'all')}
            className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-slate-200 text-sm focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="all" className="bg-[#080D1A] text-white">كافة الحالات</option>
            <option value="open" className="bg-[#080D1A] text-white">متاح للتسجيل الآن</option>
            <option value="upcoming" className="bg-[#080D1A] text-white">قريباً</option>
          </select>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة ضبط</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Strip */}
      <div>
        <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
          <span className="font-bold">تصفية حسب المسار التعليمي:</span>
          <span className="font-mono text-cyan-400">
            {totalFilteredCount} دورة متاحة
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filters.selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-glow-sm border border-blue-400/40'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
            }`}
          >
            جميع المسارات (7)
          </button>

          {ACADEMY_CATEGORIES.map((cat) => {
            const isSelected = filters.selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm border border-cyan-400/50'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat.badge}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
