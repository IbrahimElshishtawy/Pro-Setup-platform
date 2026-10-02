import React from 'react';
import { ShieldCheck, Target, Zap, Award, CheckCircle2, ArrowRight, Users, Sparkles, Building2, Flame } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  const values = [
    { title: 'Full Architectural Synergy', desc: 'No disconnected silos. Marketing talks to engineering, and design integrates seamlessly with security infrastructure.', icon: Zap },
    { title: 'Obsession with Measurable ROI', desc: 'We do not build vanity projects. Every line of code, ad creative, and camera lens is deployed to yield concrete commercial return.', icon: Target },
    { title: 'Enterprise-Grade Security', desc: 'From cloud encryption standards to physical access control, we ensure your business remains protected at all times.', icon: ShieldCheck },
    { title: 'Zero Vendor Friction', desc: 'One partner, one dedicated project director, one invoice — eliminating months of finger-pointing between separate agencies.', icon: Award },
  ];

  const leadership = [
    { name: 'Ibrahim El-Shishtawy', role: 'Chief Executive Officer & Founder', bio: 'Strategic technologist directing large-scale digital business architectures across MENA.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Youssef Salem', role: 'Head of Software Engineering', bio: 'Former senior cloud engineer leading Flutter cross-platform and backend systems.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Layla Mansour', role: 'Creative & Brand Director', bio: 'Award-winning visual designer specializing in brutalist luxury identities and typography.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Karim Fathy', role: 'Surveillance & Hardware Lead', bio: 'Certified network and CCTV infrastructure engineer with 15+ years of industrial security deployments.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeading
          badge="Our Story & Vision"
          title="We Are Not Just a Service Provider — We Are Your"
          highlight="Growth Partner"
          subtitle="PRO SETUP brings technology, creativity, marketing, and physical security together under one unified agency roof."
          align="center"
        />

        {/* Split Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower modern businesses with the entire physical and digital ecosystem needed to launch, scale, and dominate. By uniting software engineering, brand identity, performance marketing, and physical surveillance, we eliminate vendor friction and engineer unstoppable business momentum.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become the premier business setup ecosystem in the region — known as the definitive powerhouse where an ambitious founder or corporate leader can enter with a vision and leave with an operating, profitable, and secure commercial enterprise.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <SectionHeading
            badge="Guiding Principles"
            title="What Sets PRO SETUP"
            highlight="Apart"
            subtitle="The fundamental core standards that dictate every client engagement and project delivery."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-dark-800/60 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-md transition-all text-left space-y-3"
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

        {/* Leadership Team */}
        <div className="space-y-8">
          <SectionHeading
            badge="Leadership"
            title="The Minds Behind"
            highlight="PRO SETUP"
            subtitle="Seasoned engineers, designers, and growth directors dedicated to your success."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/50 transition-all text-left p-4 space-y-3"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-dark-900">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {member.name}
                  </h4>
                  <span className="text-xs text-electric-cyan font-medium block mt-0.5">
                    {member.role}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Join forces with a dedicated partner</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Experience what happens when engineering precision meets creative mastery.
          </p>
          <Button variant="primary" onClick={onOpenQuote} glow>
            Start Your Journey
          </Button>
        </div>

      </div>
    </div>
  );
};
