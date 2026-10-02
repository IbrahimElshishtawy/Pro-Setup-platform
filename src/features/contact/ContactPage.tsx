import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, Globe } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../../core/config/constants';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { submitInquiry } from '../../core/firebase/firestore';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICE_CATEGORIES[0].name,
    budget: '$5,000 – $15,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    await submitInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0066FF', '#00D2FF', '#FFFFFF'],
      });
    } catch {
      // Ignored
    }
  };

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          badge="Direct Inquiries"
          title="Let's Build"
          highlight="Something Great"
          subtitle="Have a project in mind? Tell us about your vision and let's turn your idea into a complete commercial setup."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="p-8 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">WhatsApp Instant Chat</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {COMPANY_INFO.contact.phone}
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">Average reply in &lt; 15 mins</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electric-cyan/40 hover:bg-electric-600/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">Direct Business Inquiries</span>
                    <span className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">Office & Innovation Hub</span>
                    <span className="text-sm font-bold text-white">
                      {COMPANY_INFO.contact.address}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">Working Schedule</span>
                    <span className="text-sm font-bold text-white">
                      {COMPANY_INFO.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Complete Form with Firestore Backend Integration */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 backdrop-blur-2xl shadow-2xl text-left">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-glow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Inquiry Transmitted to Firestore!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-electric-cyan">{formData.name}</strong>. Our business setup team has received your project parameters and will contact you directly within 24 hours.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white">Start Your Project</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out this brief form and our directors will prepare an initial assessment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mostafa Ali"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. mostafa@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 123 456 7890"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Nexus Corp"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Primary Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white border border-white/10 focus:border-electric-cyan focus:outline-none"
                      >
                        {SERVICE_CATEGORIES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Full Business Setup (All Services)">Full Business Setup (Multiple Services)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Estimated Budget (USD)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white border border-white/10 focus:border-electric-cyan focus:outline-none"
                      >
                        <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                        <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                        <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                        <option value="$30,000+ (Enterprise)">$30,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Project Details & Objectives *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you want to build, current roadblocks, or key deadlines..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none"
                    />
                  </div>

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
