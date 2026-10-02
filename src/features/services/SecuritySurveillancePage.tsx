import React, { useState, useEffect } from 'react';
import { ShieldCheck, Video, Server, HardDrive, Wifi, Lock, Eye, AlertCircle, ArrowRight, CheckCircle2, Radio, Activity, Bell, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface SecuritySurveillancePageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const SecuritySurveillancePage: React.FC<SecuritySurveillancePageProps> = ({ onOpenQuote }) => {
  const [selectedCam, setSelectedCam] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(now.getMilliseconds() / 100));
    };
    updateTime();
    const interval = setInterval(updateTime, 200);
    return () => clearInterval(interval);
  }, []);

  // 7 Required Capabilities per Prompt 12
  const securityCapabilities = [
    { title: 'CCTV Installation', desc: 'Commercial indoor and outdoor camera placement engineered for 100% perimeter coverage and blind spot elimination.', icon: Video },
    { title: '4K IP Cameras', desc: 'High-resolution digital optical sensors with DarkFighter low-light visibility and AI smart human/vehicle classification.', icon: Eye },
    { title: 'DVR Systems', desc: 'Reliable digital video recorders for analog coaxial and hybrid infrastructure retrofits with automated compression.', icon: Server },
    { title: 'NVR & RAID Arrays', desc: 'Enterprise network video recorders featuring RAID 6 multi-terabyte disk arrays for 120-day encrypted retention.', icon: HardDrive },
    { title: 'Network Setup & PoE', desc: 'Shielded Cat6/Cat7 structured cabling, PoE gigabit managed switches, and isolated air-gapped security VLANs.', icon: Wifi },
    { title: 'Access Control', desc: 'Biometric facial recognition, RFID turnstiles, electromagnetic locks, and automated employee attendance tracking.', icon: Lock },
    { title: '24/7 Monitoring & Mobile', desc: 'Real-time multi-screen command center software and encrypted mobile apps for live feeds and instant push alerts.', icon: ShieldCheck },
  ];

  // 5-Stage Animated Architecture per Prompt 12: Camera -> Network -> NVR/DVR -> Monitoring -> Alerts
  const architectureFlow = [
    { step: '01', title: 'Camera', desc: '4K AI IP Cameras capturing 60fps high-definition feeds with thermal night vision.', icon: Video },
    { step: '02', title: 'Network', desc: 'Shielded gigabit PoE trunks and isolated VLANs preventing external network tampering.', icon: Wifi },
    { step: '03', title: 'NVR / DVR', desc: 'Centralized RAID storage array with redundant hard drive failure protection.', icon: HardDrive },
    { step: '04', title: 'Monitoring', desc: 'Multi-screen video wall operations center and encrypted mobile dashboard feeds.', icon: Eye },
    { step: '05', title: 'Alerts', desc: 'Sub-second push notifications triggered by perimeter line breach or facial detection.', icon: Bell },
  ];

  const cameras = [
    {
      id: 1,
      name: 'CAM 01 - Main Entrance & Gate A',
      status: 'ONLINE • 4K AI LPR',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      location: 'Perimeter Barrier North',
    },
    {
      id: 2,
      name: 'CAM 02 - Server Vault & Datacenter',
      status: 'ONLINE • BIOMETRIC SENSOR',
      fps: '60 FPS',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      location: 'Secure Core Zone B',
    },
    {
      id: 3,
      name: 'CAM 03 - Logistics Loading Dock 4',
      status: 'ONLINE • NIGHT VISION',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
      location: 'Industrial Depot East',
    },
    {
      id: 4,
      name: 'CAM 04 - Perimeter Fence Line C',
      status: 'ONLINE • THERMAL BOUNDARY',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      location: 'Exterior Boundary Sector C',
    },
  ];

  const securityFaqs = [
    {
      q: 'How long can we retain recorded 4K security footage?',
      a: 'Depending on your facility compliance mandates and NVR hard drive configuration (RAID 5 or RAID 6), our setups retain anywhere from 30 to 180 days of continuous recording before FIFO cyclical rollover.',
    },
    {
      q: 'Can executives monitor security feeds remotely from smartphones?',
      a: 'Yes. Every setup includes an encrypted P2P mobile client with TLS encryption, biometric login, multi-channel live streaming, PTZ camera manipulation, and instant push notifications for boundary alarm events.',
    },
    {
      q: 'Does PRO SETUP provide physical installation and structural cabling?',
      a: 'Yes, we provide end-to-end turnkey installations including armored Cat6/Cat7 conduit piping, aerial pole mounting, server rack rigging, and UPS battery backup power integration.',
    },
  ];

  const relevantSecurityProjects = PORTFOLIO_PROJECTS.filter(p => p.tags?.includes('security') || p.category === 'security');

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION (Mandated Hero: "Secure What Matters Most") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Commercial Surveillance & Physical Security</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Secure What <span className="text-electric-gradient">Matters Most</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Eliminate facility blind spots with commercial CCTV, 4K AI-assisted cameras, centralized NVR storage, and biometric access control engineered to military-grade standards.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('security-surveillance')}
                icon={ArrowRight}
              >
                Request Security Inspection
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('live-cctv-ops');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inspect Operations Center
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                alt="Cinematic 4K CCTV Camera Rig"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE 7 MANDATED SECURITY CAPABILITIES */}
        <div className="space-y-8">
          <SectionHeading
            badge="Hardware & Installation"
            title="Complete Security & CCTV"
            highlight="Capabilities"
            subtitle="Commercial, industrial, and corporate surveillance engineered for zero downtime."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. ANIMATED SECURITY ARCHITECTURE FLOW (Mandated in Prompt 12: Camera -> Network -> NVR/DVR -> Monitoring -> Alerts) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              Architectural Pipeline Flow
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              End-to-End Surveillance Topology
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              From optical photon capture to encrypted storage and instant perimeter alerts: zero packet drop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            {architectureFlow.map((flow, i) => {
              const Icon = flow.icon;
              return (
                <div
                  key={flow.step}
                  className="p-5 rounded-2xl bg-dark-900 border border-white/10 hover:border-electric-cyan/50 transition-all duration-300 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-electric-cyan">{flow.step}</span>
                    <div className="w-8 h-8 rounded-lg bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {flow.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. LIVE CCTV OPERATIONS CENTER SIMULATOR */}
        <div id="live-cctv-ops" className="p-6 sm:p-10 rounded-3xl bg-dark-950 border border-electric-500/35 shadow-glow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                PRO SETUP SECURITY OPERATIONS CENTER [LIVE TELEMETRY]
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>SYS TIME: <strong className="text-electric-cyan">{currentTime}</strong></span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                ENCRYPTED TLS/AES-256
              </span>
            </div>
          </div>

          {/* 4 CCTV Camera Feeds Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cameras.map((cam) => {
              const isActive = selectedCam === cam.id;
              return (
                <div
                  key={cam.id}
                  onClick={() => setSelectedCam(cam.id)}
                  className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'border-electric-cyan shadow-glow-sm scale-[1.02]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="relative aspect-video bg-dark-900 overflow-hidden">
                    <img
                      src={cam.img}
                      alt={cam.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white bg-dark-950/70 backdrop-blur-sm px-2 py-1 rounded">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-bold">REC</span>
                      </div>
                      <span className="text-electric-cyan">{cam.fps}</span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 bg-dark-950/80 backdrop-blur-sm px-2 py-1 rounded text-left">
                      <span className="text-[11px] font-bold text-white block truncate">{cam.name}</span>
                      <span className="text-[9px] text-slate-400 block font-mono">{cam.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="Guidance & Standards"
            title="Surveillance & Security"
            highlight="FAQ"
            subtitle="Common questions regarding storage retention, mobile remote apps, and on-site hardware inspections."
            align="center"
          />

          <div className="space-y-3">
            {securityFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-dark-800/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-sm font-bold text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-electric-cyan' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Need an on-site facility security inspection?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Our certified security hardware engineers conduct thorough on-site blind spot assessments and draft complete equipment plans.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('security-surveillance')} glow>
              Schedule Security Inspection
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
