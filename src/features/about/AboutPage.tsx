import React from 'react';
import { ShieldCheck, Target, Zap, Award, CheckCircle2, ArrowRight, Users, Sparkles, Building2, Eye, Compass, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { SocialIcons } from '../../components/common/SocialIcons';

export interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  // Required Pillars per Prompt 17:
  // Who We Are, What We Do, Our Vision, Our Mission, Our Values, Our Team
  const values = [
    { title: 'Architectural Synergy', desc: 'No disconnected agency silos. Software engineers collaborate directly with marketing directors and security hardware specialists.', icon: Zap },
    { title: 'Obsession with Measurable ROI', desc: 'We do not build vanity projects. Every line of code, ad creative, and optical sensor is deployed for concrete commercial yield.', icon: Target },
    { title: 'Institutional Integrity & Security', desc: 'From cloud encryption and data governance to physical access control, we ensure your business remains bulletproof.', icon: ShieldCheck },
    { title: 'Zero Vendor Friction', desc: 'One partner, one dedicated project director, one invoice — eliminating months of finger-pointing between separate vendors.', icon: Award },
  ];

  // Professional Team Cards with Placeholders (Strictly adhering to Prompt 17 & 28: "Do not invent real names. Use placeholders until actual team information is provided.")
  const teamMembers = [
    {
      name: '[Executive Director Placeholder]',
      position: 'Chief Executive Officer',
      specialization: 'Corporate Business Setup & Strategic Growth',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      socialLinks: ['linkedin'],
    },
    {
      name: '[Engineering Director Placeholder]',
      position: 'Head of Software & Cloud Systems',
      specialization: 'Flutter Cross-Platform, Microservices & Data Arch',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      socialLinks: ['linkedin'],
    },
    {
      name: '[Creative Director Placeholder]',
      position: 'Head of Brand Design & UI/UX',
      specialization: 'Visual Identity, Design Systems & Packaging',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      socialLinks: ['linkedin'],
    },
    {
      name: '[Security Systems Lead Placeholder]',
      position: 'Director of Hardware & Surveillance',
      specialization: 'Commercial CCTV, PoE Networks & Biometrics',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      socialLinks: ['linkedin'],
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. SECTION: WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              The Single Partner for <span className="text-electric-gradient">Complete Business Setups</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              PRO SETUP is not a fragmented vendor or a traditional single-discipline agency. We are an integrated business architecture company that brings marketing, brand design, software engineering, security installations, cinema media production, and commercial advertising together under one roof.
            </p>

            <div className="pt-2">
              <Button variant="primary" onClick={onOpenQuote} glow icon={ArrowRight}>
                Partner With PRO SETUP
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="PRO SETUP Integrated Operations Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. SECTION: WHAT WE DO */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              Integrated Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We engineer everything required to launch, operate, scale, and protect modern commercial enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              { title: 'Digital Marketing & Growth', desc: 'Predictable audience targeting, lead generation funnels, and social media management.' },
              { title: 'Design & Visual Branding', desc: 'Iconic brand identities, UI/UX systems, and tactile luxury packaging.' },
              { title: 'Software & Technology', desc: 'Next.js web platforms, Flutter mobile apps, ERPs, and cloud microservices.' },
              { title: 'Security & Surveillance', desc: 'Turnkey 4K CCTV installation, centralized NVR storage, and biometric access barriers.' },
              { title: 'Photography & Production', desc: 'Cinema 4K commercials, studio product photography, and viral vertical reels.' },
              { title: 'Commercial Advertising', desc: 'Full-funnel media buying and algorithmic ROAS scale across global ad networks.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mb-1" />
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SECTION: OUR VISION & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To stand as the definitive corporate setup and commercial architecture powerhouse — where founders, executives, and organizations can enter with an ambitious vision and emerge with an operating, profitable, technologically advanced, and secure enterprise.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To permanently eliminate the chaos of coordinating disconnected agencies. By uniting technology, creative design, digital marketing, physical security, and advertising under one roof, we empower businesses with unstoppable operational momentum.
            </p>
          </div>
        </div>

        {/* 4. SECTION: OUR VALUES */}
        <div className="space-y-8">
          <SectionHeading
            badge="Core Philosophy"
            title="Our Guiding"
            highlight="Values"
            subtitle="The fundamental standards that govern every line of code, ad campaign, and security deployment."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-dark-800/70 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-md transition-all text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. SECTION: OUR TEAM (Using Professional Cards with Placeholders per Prompt 17 & 28) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Executive Leadership"
            title="The Minds Behind"
            highlight="PRO SETUP"
            subtitle="Seasoned technology architects, creative directors, and security systems specialists."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-dark-800/90 border border-white/10 hover:border-electric-cyan/50 transition-all p-5 space-y-4 shadow-xl"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-950">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {member.name}
                  </h4>
                  <span className="text-xs text-electric-cyan font-semibold block">
                    {member.position}
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                    {member.specialization}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Official Channel:</span>
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-400 hover:text-electric-cyan transition-colors"
                  >
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to partner with an integrated team?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Experience what happens when engineering precision, creative mastery, and operational security unite under one roof.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={onOpenQuote} glow>
              Start Your Journey With Us
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
