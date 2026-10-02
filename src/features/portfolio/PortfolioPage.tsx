import React, { useState } from 'react';
import { Search, ArrowUpLeft, ArrowLeft, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../../core/types/portfolio';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface PortfolioPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'الكل' },
    { id: 'marketing', label: 'التسويق' },
    { id: 'branding', label: 'الهوية البصرية' },
    { id: 'design', label: 'التصميم' },
    { id: 'software', label: 'البرمجيات' },
    { id: 'web', label: 'تطوير الويب' },
    { id: 'mobile', label: 'تطبيقات الجوال' },
    { id: 'security', label: 'الأنظمة الأمنية' },
    { id: 'photography', label: 'التصوير' },
    { id: 'video', label: 'الإنتاج السينمائي' },
    { id: 'advertising', label: 'الإعلانات' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory =
      activeCategory === 'all' ||
      proj.category === activeCategory ||
      (proj.tags && proj.tags.includes(activeCategory));

    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16 space-y-16 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          badge="مشاريع منجزة لشركائنا"
          title="نحول الرؤى الاستراتيجية إلى"
          highlight="ريادة تجارية واقعية"
          subtitle="استكشف معرض أعمالنا المتكامل عبر تطوير البرمجيات المعقدة، وبناء الهويات الأيقونية، وإدارة الحملات الإعلانية، وتأمين المنشآت."
          align="center"
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl">
          {/* Categories Horizontal Scroll / Wrap */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-electric-600 text-white shadow-glow-sm border border-electric-cyan/40'
                    : 'bg-dark-900/60 text-slate-300 hover:text-white hover:bg-dark-900 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في دراسات الحالة والمشاريع..."
              className="w-full pr-9 pl-4 py-2 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none text-right"
            />
          </div>
        </div>

        {/* Projects Grid / Masonry Showcase */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-dark-800/50 border border-white/5 space-y-3">
            <span className="text-slate-400 text-sm">لم يتم العثور على مشاريع تطابق بحثك في هذا التصنيف.</span>
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                إعادة ضبط كافة المرشحات
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-dark-800/90 border border-white/10 hover:border-electric-cyan/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer flex flex-col justify-between text-right"
              >
                {/* Image Cover Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-900">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark Overlay with smooth transition on hover */}
                  <div className="absolute inset-0 bg-dark-950/40 group-hover:bg-dark-950/70 transition-all duration-300 flex items-center justify-center" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-dark-900/85 backdrop-blur-md text-xs font-bold text-electric-cyan border border-electric-cyan/30">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Corner Expand Indicator */}
                  <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-dark-900/80 border border-white/15 flex items-center justify-center text-slate-300 group-hover:bg-electric-cyan group-hover:text-dark-900 group-hover:border-electric-cyan transition-all">
                    <ArrowUpLeft className="w-4 h-4" />
                  </div>

                  {/* Center "View Project" Button on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-4 py-2 rounded-xl bg-electric-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-glow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>استكشف دراسة الحالة</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Information */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span>{project.industry}</span>
                      <span font-mono>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Results highlight tag & CTA link */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    {project.results && project.results[0] ? (
                      <span className="font-bold text-electric-cyan font-mono" dir="ltr">
                        {project.results[0].value} {project.results[0].improvement && `(${project.results[0].improvement})`}
                      </span>
                    ) : (
                      <span className="text-slate-400">حلول أعمال متكاملة</span>
                    )}

                    <span className="text-xs font-bold text-slate-300 group-hover:text-electric-cyan flex items-center gap-1 transition-colors">
                      <span>عرض التفاصيل</span>
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل لديك رؤية لمشروع أو حل متكامل لأعمالك؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            دعنا نصمم ونبني ونوسع حلاً متكاملاً يضع شركتك ومؤسستك في صدارة المنافسة في السوق العربي.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={onOpenQuote} glow>
              ابدأ إعداد مشروعك الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
