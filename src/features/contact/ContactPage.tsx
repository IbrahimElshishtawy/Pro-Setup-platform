import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, Globe, Sparkles, Navigation } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../../core/config/constants';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { SocialIcons } from '../../components/common/SocialIcons';
import { submitInquiry } from '../../core/firebase/firestore';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: SERVICE_CATEGORIES[0].name,
    budget: '$5,000 – $15,000',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;

    setIsSubmitting(true);
    await submitInquiry({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      message: formData.details,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0066FF', '#00D2FF', '#FFFFFF'],
      });
    } catch {
      // Ignored if canvas-confetti is unavailable
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION (Mandated Hero: "Let's Build Something Great") */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Let's Build <span className="text-electric-gradient">Something Great</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Have a project in mind? Tell us about your vision and let's turn your idea into a complete commercial setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 2. LEFT: DIRECT CHANNELS (WhatsApp, Email, Phone, Location per Prompt 19 & 28) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Direct Communication Channels</h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">WhatsApp Instant Chat</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      {COMPANY_INFO.contact.phone}
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-0.5 font-medium">Direct line to our setup team</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5 hover:border-electric-cyan/40 hover:bg-electric-600/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">Direct Business Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors font-mono">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">Corporate Switchboard</span>
                    <span className="text-sm font-bold text-white font-mono">
                      {COMPANY_INFO.contact.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">Headquarters / Location</span>
                    <span className="text-sm font-bold text-white">
                      {COMPANY_INFO.contact.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media System Bar */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Social Platforms:
                </span>
                <SocialIcons size="md" variant="glow" />
              </div>
            </div>

            {/* MAP SECTION (Prompt 19: "Add a map section if a real company location is available. Do not invent the location.") */}
            <div className="p-6 rounded-3xl bg-dark-800/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Navigation className="w-4 h-4 text-electric-cyan" />
                <span>Facility Map View</span>
              </div>
              <div className="rounded-2xl p-6 bg-dark-950 border border-dashed border-white/15 text-center space-y-2">
                <MapPin className="w-8 h-8 text-electric-cyan mx-auto opacity-70" />
                <span className="text-xs font-semibold text-white block">
                  Location: {COMPANY_INFO.contact.address}
                </span>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                  Interactive satellite map view will be rendered automatically when official physical headquarters coordinates are supplied.
                </p>
              </div>
            </div>
          </div>

          {/* 3. RIGHT: CONTACT FORM (Full Name, Company, Email, Phone, Service, Budget, Project Details, CTA: Start Your Project) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-glow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Project Request Transmitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-electric-cyan">{formData.name}</strong>. Our business setup directors have received your project details and will contact you directly within 24 hours.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white">Start Your Project</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this brief form to begin your business setup blueprint with our leadership team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Your Full Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Your Business Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. Your Phone Number"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                      >
                        {SERVICE_CATEGORIES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="All Services (Full Business Setup)">Full Business Setup (All Services in One Place)</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Estimated Budget (USD)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                      >
                        <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                        <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                        <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                        <option value="$30,000+ (Enterprise)">$30,000+ (Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Outline your project scope, timeline expectations, current roadblocks, or key deliverables..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  {/* CTA Button: Start Your Project */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={Send}
                      isLoading={isSubmitting}
                      glow
                      className="w-full sm:w-auto px-8"
                    >
                      Start Your Project
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
