import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../../data/faqData';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface FaqPageProps {
  onOpenQuote: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenQuote }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          badge="Answers & Guidance"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know about our integrated agency services, onboarding process, timelines, and technical standards."
          align="center"
        />

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-dark-800/80 border border-white/10 backdrop-blur-xl">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All' },
              { id: 'general', label: 'General' },
              { id: 'services', label: 'Services' },
              { id: 'technical', label: 'Technical' },
              { id: 'pricing', label: 'Pricing & Timelines' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setCategoryFilter(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  categoryFilter === c.id
                    ? 'bg-electric-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-dark-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-6 rounded-2xl bg-dark-800/60 border border-white/5 text-slate-400 text-xs">
              No questions matched your search query. Try another keyword.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                    isOpen
                      ? 'bg-dark-800/95 border-electric-500/40 shadow-glow-sm'
                      : 'bg-dark-800/60 border-white/[0.08] hover:border-white/20 hover:bg-dark-800/80'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-electric-cyan' : 'text-slate-400'}`} />
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-electric-cyan text-dark-950 font-bold' : 'text-slate-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Have a specific question not answered here?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Our team is available 24/7 on WhatsApp to answer any operational, technical, or commercial question.
          </p>
          <Button variant="primary" onClick={onOpenQuote} glow>
            Speak With an Advisor
          </Button>
        </div>

      </div>
    </div>
  );
};
