import React, { useState, useEffect } from 'react';
import { ShieldCheck, Video, Server, HardDrive, Wifi, Lock, Eye, AlertCircle, ArrowRight, CheckCircle2, Radio, Activity } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface SecuritySurveillancePageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const SecuritySurveillancePage: React.FC<SecuritySurveillancePageProps> = ({ onOpenQuote }) => {
  const [selectedCam, setSelectedCam] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(now.getMilliseconds() / 100));
    };
    updateTime();
    const interval = setInterval(updateTime, 200);
    return () => clearInterval(interval);
  }, []);

  const cameras = [
    {
      id: 1,
      name: 'CAM 01 - Main Entrance & Lobby',
      status: 'ONLINE • 4K AI',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      location: 'Corporate HQ Gate A',
    },
    {
      id: 2,
      name: 'CAM 02 - Server Room & Vault',
      status: 'ONLINE • BIOMETRIC',
      fps: '60 FPS',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      location: 'Server Grid Zone B',
    },
    {
      id: 3,
      name: 'CAM 03 - Logistics Loading Bay',
      status: 'ONLINE • NIGHT VISION',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
      location: 'Warehouse Gate 4',
    },
    {
      id: 4,
      name: 'CAM 04 - Perimeter Fence & Parking',
      status: 'ONLINE • THERMAL',
      fps: '30 FPS',
      img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      location: 'External Perimeter Sector D',
    },
  ];

  const securityOfferings = [
    { title: 'Commercial CCTV Installation', desc: 'Precision placement of dome, bullet, and PTZ cameras eliminating facility blind spots.', icon: Video },
    { title: '4K IP & Network Cameras', desc: 'Optical zoom clarity, ultra-low-light color capture, and AI smart human/vehicle classification.', icon: Eye },
    { title: 'NVR & Redundant Storage Arrays', desc: 'Continuous multi-terabyte RAID recording with secure cloud mirror redundancy.', icon: HardDrive },
    { title: 'Dedicated Gigabit PoE Networks', desc: 'Cat6/Cat7 shielded cabling, PoE managed switches, and air-gapped VLAN architecture.', icon: Wifi },
    { title: 'Smart Access Control & Biometrics', desc: 'Facial recognition, RFID credentials, and automated employee attendance tracking.', icon: Lock },
    { title: '24/7 Mobile Remote Feeds', desc: 'Encrypted mobile apps allowing executives to monitor live feeds and playback anywhere.', icon: ShieldCheck },
  ];

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Surveillance & Security Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Intelligent Surveillance <span className="text-electric-gradient">Without Blind Spots</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Protect your business premises, personnel, and intellectual property with high-definition digital security networks. From 4K AI-assisted cameras to biometric access barriers, PRO SETUP delivers military-grade peace of mind.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('security-surveillance')}
                icon={ArrowRight}
              >
                Secure Your Business
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                alt="4K Security CCTV Camera"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* INTERACTIVE CCTV SIMULATOR (Mandated in Prompt) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-dark-950 border border-electric-500/35 shadow-glow-md space-y-6">
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
                ENCRYPTED AES-256
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
                  {/* Camera Image with Scanlines */}
                  <div className="relative aspect-video bg-dark-900 overflow-hidden">
                    <img
                      src={cam.img}
                      alt={cam.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Scanline CRT overlay */}
                    <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

                    {/* Camera Top HUD */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white bg-dark-950/70 backdrop-blur-sm px-2 py-1 rounded">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-bold">REC</span>
                      </div>
                      <span className="text-electric-cyan">{cam.fps}</span>
                    </div>

                    {/* Camera Bottom HUD */}
                    <div className="absolute bottom-2 left-2 right-2 bg-dark-950/80 backdrop-blur-sm px-2 py-1 rounded text-left">
                      <span className="text-[11px] font-bold text-white block truncate">{cam.name}</span>
                      <span className="text-[9px] text-slate-400 block font-mono">{cam.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NETWORK TOPOLOGY VISUALIZATION (Mandated in Prompt: Camera -> Network -> Recording -> Monitoring) */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block text-left">
              Hardware Architecture Topology (Zero Packet Drop)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 text-center space-y-1">
                <Video className="w-6 h-6 text-electric-cyan mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">01 • 4K IP Cameras</span>
                <span className="text-[10px] text-slate-400 block">AI Motion & IR Night Vision</span>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 text-center space-y-1">
                <Wifi className="w-6 h-6 text-electric-cyan mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">02 • Gigabit Network</span>
                <span className="text-[10px] text-slate-400 block">PoE Switches & Cat7 Trunk</span>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 text-center space-y-1">
                <HardDrive className="w-6 h-6 text-electric-cyan mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">03 • NVR RAID Storage</span>
                <span className="text-[10px] text-slate-400 block">120-Day Continuous Backup</span>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-electric-500/40 text-center space-y-1 shadow-glow-sm">
                <ShieldCheck className="w-6 h-6 text-electric-cyan mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">04 • 24/7 Monitoring</span>
                <span className="text-[10px] text-emerald-400 block">Mobile & Desktop Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Offerings Grid */}
        <div className="space-y-8">
          <SectionHeading
            badge="Hardware & Installation"
            title="Complete Security & CCTV"
            highlight="Solutions"
            subtitle="Commercial, industrial, and corporate surveillance engineered to the highest standards."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityOfferings.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-sm text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{svc.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Need a comprehensive security audit for your facility?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Our certified security hardware engineers conduct thorough on-site blind spot assessments.
          </p>
          <Button variant="primary" onClick={() => onOpenQuote('security-surveillance')} glow>
            Request Security Inspection
          </Button>
        </div>

      </div>
    </div>
  );
};
