import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, CheckCircle2, Shield, Sparkles, Send } from 'lucide-react';
import { Button } from '../common/Button';
import { submitQuote } from '../../core/firebase/firestore';
import confetti from 'canvas-confetti';
import { SERVICE_CATEGORIES } from '../../core/config/constants';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : []
  );
  const [budget, setBudget] = useState('$5,000 – $15,000');
  const [timeline, setTimeline] = useState('1 – 3 Months (Standard)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    await submitQuote({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      services: selectedServices,
      budget,
      timeline,
      details: formData.details,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0066FF', '#00D2FF', '#FFFFFF'],
      });
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-dark-900 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-6 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Submission Success State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-glow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Project Brief Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-electric-cyan font-semibold">{formData.name}</span>. Our technical director is analyzing your requirements and will reach out via WhatsApp or email with a customized setup proposal within 24 hours.
            </p>
            <div className="pt-4">
              <Button variant="primary" onClick={handleReset} glow>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Step Indicators */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? 'Select Services' : step === 2 ? 'Budget & Timeline' : 'Contact Information'}</span>
              </div>
              <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-electric-gradient transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: Select Services */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 id="modal-quote-title" className="text-xl sm:text-2xl font-black text-white">
                    What solutions does your business require?
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select all services that apply. Bundle for maximum synergy and cost savings.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const isSelected = selectedServices.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleService(cat.id)}
                        className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'bg-electric-600/15 border-electric-cyan text-white shadow-glow-sm'
                            : 'bg-dark-800/80 border-white/5 hover:border-white/20 text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-electric-cyan border-electric-cyan text-dark-900'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold block">{cat.name}</span>
                          <span className="text-[11px] text-slate-400 line-clamp-1">{cat.shortDesc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4 border-t border-white/10">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ArrowRight}
                    disabled={selectedServices.length === 0}
                    onClick={() => setStep(2)}
                  >
                    Continue to Budget
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Budget & Timeline */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Budget & Timeline Expectations
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    This helps us calibrate the scope and technical stack for optimal ROI.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Estimated Project Investment
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      '$1,000 – $5,000',
                      '$5,000 – $15,000',
                      '$15,000 – $30,000',
                      '$30,000+ (Enterprise)',
                    ].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                          budget === b
                            ? 'bg-electric-600/20 border-electric-cyan text-white shadow-glow-sm'
                            : 'bg-dark-800 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Target Completion Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Urgent (< 4 Weeks)',
                      '1 – 3 Months (Standard)',
                      'Flexible / Phased Rollout',
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                          timeline === t
                            ? 'bg-electric-600/20 border-electric-cyan text-white shadow-glow-sm'
                            : 'bg-dark-800 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={ArrowLeft}
                    iconPosition="left"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ArrowRight}
                    onClick={() => setStep(3)}
                  >
                    Continue to Details
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Where should we send your setup proposal?
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct communication with our engineering and growth directors.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Karim Mansour"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. karim@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 123 456 7890"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Project Summary & Notes</label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe your objectives, current challenges, or specific milestones..."
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    icon={ArrowLeft}
                    iconPosition="left"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    icon={Send}
                    isLoading={isSubmitting}
                    glow
                  >
                    Submit Project Proposal
                  </Button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
