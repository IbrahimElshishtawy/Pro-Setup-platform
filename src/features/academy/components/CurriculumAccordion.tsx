import React, { useState } from 'react';
import { ChevronDown, Clock, CheckCircle, Hammer } from 'lucide-react';
import { CurriculumModule } from '../../../core/types/academy';

export interface CurriculumAccordionProps {
  modules: CurriculumModule[];
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ modules }) => {
  // By default, open the first module
  const [openModuleIds, setOpenModuleIds] = useState<Record<string, boolean>>({
    [modules[0]?.id || '']: true,
  });

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {modules.map((mod) => {
        const isOpen = !!openModuleIds[mod.id];
        return (
          <div
            key={mod.id}
            className="rounded-2xl bg-[#080D1A]/80 border border-white/[0.08] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            {/* Module Accordion Header */}
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full flex items-center justify-between p-5 text-right cursor-pointer select-none gap-4 group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 text-cyan-400 font-mono font-bold text-sm shrink-0">
                  {mod.moduleNumber}
                </div>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{mod.duration}</span>
                    <span className="text-slate-600">•</span>
                    <span>{mod.topics.length} محاور تدريبية</span>
                  </div>
                </div>
              </div>

              <div
                className={`p-2 rounded-xl bg-white/[0.04] text-slate-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-cyan-400 bg-cyan-500/10' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Collapsible Content */}
            {isOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-white/[0.06] animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                  {mod.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                {mod.handsOnProject && (
                  <div className="mt-4 p-3.5 rounded-xl bg-blue-500/[0.07] border border-blue-500/20 flex items-start gap-3">
                    <Hammer className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-cyan-300 block mb-0.5">المشروع العملي للموديول:</span>
                      <p className="text-xs md:text-sm text-slate-200">{mod.handsOnProject}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
