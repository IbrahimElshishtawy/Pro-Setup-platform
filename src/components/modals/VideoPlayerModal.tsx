import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';

export interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isOpen) return;

    // Simulate video playback progress
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }
    }, 400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isPlaying, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-video-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-dark-950/90 backdrop-blur-2xl animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950/80 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span id="modal-video-title" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              PRO SETUP • Official Agency Showreel 4K
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Visual Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Animated Background Cinema Media */}
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
            alt="Agency Reel Preview"
            className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100 opacity-80'}`}
          />

          {/* Cinematic Dark & Neon Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-dark-950/60" />

          {/* Center Brand Hologram */}
          <div className="absolute flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-electric-gradient flex items-center justify-center shadow-glow-lg">
              <span className="text-white font-extrabold text-3xl font-display">P</span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {COMPANY_INFO.positioning}
              </h3>
              <p className="text-xs sm:text-sm text-electric-cyan font-medium mt-1">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            {/* Pulsing Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="mt-2 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-glow-sm hover:scale-110 transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
            </button>
          </div>

          {/* Simulated Audio Visualizer Waves */}
          {isPlaying && (
            <div className="absolute bottom-16 left-6 right-6 flex items-end justify-center gap-1.5 h-8 pointer-events-none opacity-40">
              {[40, 80, 55, 95, 30, 70, 85, 45, 100, 60, 35, 75, 90, 50, 65, 80, 45, 90, 70, 40].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-electric-cyan rounded-full animate-pulse"
                  style={{
                    height: `${(h * (progress % 10 + 5)) / 15}%`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Video Bottom Scrub Bar & Controls */}
        <div className="px-6 py-4 bg-dark-950/95 border-t border-white/10 space-y-3">
          {/* Progress timeline */}
          <div
            className="relative w-full h-1.5 bg-slate-800 rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.round((clickX / rect.width) * 100));
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-electric-600 to-electric-cyan rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
            <span
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-glow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 7px)` }}
            />
          </div>

          {/* Playback Button Row */}
          <div className="flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-electric-cyan transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-electric-cyan transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px] text-slate-400">
                0:{progress < 10 ? `0${Math.floor(progress * 0.6)}` : Math.floor(progress * 0.6)} / 1:00
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-electric-600/20 text-electric-cyan font-mono text-[10px] font-semibold border border-electric-500/30">
                4K UHD 60FPS
              </span>
              <button
                onClick={() => {
                  const elem = document.documentElement;
                  if (!document.fullscreenElement) {
                    elem.requestFullscreen?.().catch(() => {});
                  } else {
                    document.exitFullscreen?.().catch(() => {});
                  }
                }}
                className="hover:text-electric-cyan transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
