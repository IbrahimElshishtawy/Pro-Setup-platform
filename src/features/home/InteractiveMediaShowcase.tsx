import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  ArrowLeft, 
  MessageSquare, 
  CheckCircle2, 
  X, 
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { ProjectItem, ProjectCategory } from '../../core/types/portfolio';
import { Button } from '../../components/common/Button';
import { ENV } from '../../core/config/env';

interface InteractiveMediaShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const InteractiveMediaShowcase: React.FC<InteractiveMediaShowcaseProps> = ({
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'كافة الأعمال' },
    { id: 'software', label: 'البرمجيات والأنظمة' },
    { id: 'security', label: 'كاميرات المراقبة والأمن' },
    { id: 'video', label: 'الإنتاج السينمائي والتصوير' },
    { id: 'branding', label: 'الهوية البصرية وتصميم UI/UX' },
    { id: 'marketing', label: 'الحملات والتسويق الرقمي' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory || (p.tags ? p.tags.includes(activeCategory) : false);
  });

  const openLightbox = (project: ProjectItem) => {
    setLightboxProject(project);
    setCurrentGalleryIndex(0);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
  };

  const getWhatsAppLink = (projectTitle: string) => {
    const cleanPhone = (ENV.CONTACT.WHATSAPP || '201234567890').replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(
      `مرحباً فريق PS، اطلعت على معرض الأعمال وأعجبني مشروع: (${projectTitle}). أرغب في معرفة التكلفة والمدة لتنفيذ تجهيز مماثل لشركتي.`
    );
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden text-right">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/25 text-electric-cyan text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>معرض الأعمال السينمائي والتنفيذي</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              معرض الإنجازات{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-electric-cyan to-amber-300">
                بأعلى معايير الدقة
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              استكشف نماذج حية وموثقة لتجهيزات الأعمال والحلول الشاملة التي صممناها ونفذناها. اضغط على أي عمل للمعاينة فائقة الدقة أو لطلب تجهيز مماثل فوراً.
            </p>
          </div>

          {/* WhatsApp Direct Inquiry Button */}
          <div className="shrink-0">
            <a
              href={getWhatsAppLink('استشارة عامة في معرض الأعمال')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-400" />
              <span>تواصل مع استشاري المشاريع عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-electric-600 to-electric-cyan text-white shadow-glow-sm scale-105'
                  : 'bg-dark-800/80 hover:bg-dark-700 text-slate-300 hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-3xl bg-dark-900 border border-white/10 hover:border-electric-cyan/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Image Container with Zoom & Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-950">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Top Badge: Category */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-dark-950/80 backdrop-blur-md text-electric-cyan border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Top Left: Quick Zoom Button */}
                <button
                  onClick={() => openLightbox(project)}
                  className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-dark-950/80 hover:bg-electric-600 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                  title="معاينة بكامل الشاشة"
                  aria-label="معاينة بكامل الشاشة"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Impact Result Pill (if present) */}
                {project.results && project.results[0] && (
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-dark-950/90 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.results[0].label}: {project.results[0].value}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {project.client} • {project.year}
                  </span>
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold text-slate-300 hover:text-white px-0"
                  >
                    <span>تفاصيل الحالة</span>
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  </Button>

                  <div className="flex items-center gap-2">
                    <a
                      href={getWhatsAppLink(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all hover:scale-105"
                      title="استفسار عبر واتساب"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onOpenQuote(project.title)}
                      className="text-xs font-bold py-1.5 px-3"
                    >
                      اطلب مثله
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-5xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden text-right flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-dark-950/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-electric-cyan/20 text-electric-cyan">
                  {lightboxProject.categoryLabel}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white truncate max-w-md">
                  {lightboxProject.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                aria-label="إغلاق المعاينة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Image & Gallery Carousel */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] bg-dark-950 flex items-center justify-center overflow-hidden">
              <img
                src={
                  lightboxProject.gallery && lightboxProject.gallery.length > 0
                    ? lightboxProject.gallery[currentGalleryIndex] || lightboxProject.coverImage
                    : lightboxProject.coverImage
                }
                alt={lightboxProject.title}
                className="w-full h-full max-h-[55vh] object-contain transition-all duration-300"
              />

              {/* Gallery Prev/Next Navigation */}
              {lightboxProject.gallery && lightboxProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentGalleryIndex((prev) => (prev > 0 ? prev - 1 : lightboxProject.gallery!.length - 1))}
                    className="absolute right-4 p-3 rounded-full bg-dark-900/80 text-white hover:bg-electric-600 transition-all border border-white/10 shadow-lg cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentGalleryIndex((prev) => (prev < lightboxProject.gallery!.length - 1 ? prev + 1 : 0))}
                    className="absolute left-4 p-3 rounded-full bg-dark-900/80 text-white hover:bg-electric-600 transition-all border border-white/10 shadow-lg cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Footer Details & Quick CTA */}
            <div className="p-4 sm:p-6 bg-dark-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-right w-full sm:w-auto">
                <div className="text-xs text-slate-400">العميل والمجال: {lightboxProject.client} ({lightboxProject.industry})</div>
                <div className="text-sm font-semibold text-white">{lightboxProject.summary}</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <a
                  href={getWhatsAppLink(lightboxProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>استفسار واتساب</span>
                </a>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    closeLightbox();
                    onOpenQuote(lightboxProject.title);
                  }}
                  className="flex-1 sm:flex-initial text-xs font-bold py-2.5 px-5"
                >
                  اطلب تجهيز مماثل
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
