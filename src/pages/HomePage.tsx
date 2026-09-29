import React from 'react';
import { StreamSource, StreamTelemetry } from '../types/video';
import { HlsVideoBackground } from '../components/HlsVideoBackground';
import { HeroBottomLeft } from '../components/HeroBottomLeft';
import { STREAM_PRESETS, ARCHIVE_PROJECTS, MENTOREX_SERVICES, WHY_US_HIGHLIGHTS } from '../data/streams';
import { ArrowRight, ArrowUpRight, Palette, Code2, ShoppingCart, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

interface HomePageProps {
  currentStream: StreamSource;
  streams: StreamSource[];
  onSelectStream: (stream: StreamSource) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  isMuted: boolean;
  volume: number;
  selectedLevelIndex: number;
  onTelemetryUpdate: (telemetry: StreamTelemetry) => void;
  currentTime: number;
  duration: number;
  onTimeUpdate: (curr: number, dur: number) => void;
  onVideoEnd: () => void;
  customVideoFileUrl: string | null;
  onOpenArchive: () => void;
  onToggleTelemetry: () => void;
  isTelemetryOpen: boolean;
  onNavigate: (page: string) => void;
  onStartProject: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentStream,
  streams,
  onSelectStream,
  isPlaying,
  onTogglePlay,
  isMuted,
  volume,
  selectedLevelIndex,
  onTelemetryUpdate,
  currentTime,
  duration,
  onTimeUpdate,
  onVideoEnd,
  customVideoFileUrl,
  onOpenArchive,
  onToggleTelemetry,
  isTelemetryOpen,
  onNavigate,
  onStartProject,
}) => {
  return (
    <div className="w-full">
      {/* Cinematic Hero */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between">
        <HlsVideoBackground
          stream={currentStream}
          isPlaying={isPlaying}
          isMuted={isMuted}
          volume={volume}
          selectedLevelIndex={selectedLevelIndex}
          onTelemetryUpdate={onTelemetryUpdate}
          onTimeUpdate={onTimeUpdate}
          onVideoEnd={onVideoEnd}
          customVideoFileUrl={customVideoFileUrl}
        />

        {/* Hero Bottom-Left Content */}
        <HeroBottomLeft
          currentStream={currentStream}
          streams={streams}
          onSelectStream={onSelectStream}
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          onOpenArchive={() => onNavigate('work')}
          onToggleTelemetry={onToggleTelemetry}
          isTelemetryOpen={isTelemetryOpen}
          currentTime={currentTime}
          duration={duration}
          onStartProject={() => onStartProject('New Website Project')}
        />
      </section>

      {/* Multipage Quick Hub & Overview */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-10 lg:px-16 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/10 mb-16 shadow-2xl">
            <div>
              <span className="font-mono text-xs text-orange-400 uppercase tracking-widest block mb-1 font-semibold">Client Impact</span>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">99.8%</div>
              <div className="text-xs text-slate-300 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-1 font-semibold">Edge Speed</span>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">&lt; 0.8s</div>
              <div className="text-xs text-slate-300 mt-1">Average Load Speed</div>
            </div>
            <div>
              <span className="font-mono text-xs text-sky-300 uppercase tracking-widest block mb-1 font-semibold">Territory</span>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">50 States</div>
              <div className="text-xs text-slate-300 mt-1">USA + Canada Coverage</div>
            </div>
            <div>
              <span className="font-mono text-xs text-orange-400 uppercase tracking-widest block mb-1 font-semibold">Core Vitals</span>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">100 / 100</div>
              <div className="text-xs text-slate-300 mt-1">Google Performance Score</div>
            </div>
          </div>

          {/* Section Navigation Cards */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2 font-semibold">
                  Explore MentorEx Digital
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Everything Your Business Needs To{' '}
                  <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
                    Win Online.
                  </span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
                Browse our dedicated agency departments or get in touch directly to start building your custom digital presence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Services */}
              <div
                onClick={() => onNavigate('services')}
                className="group p-6 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/10 hover:border-orange-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-orange-500/10"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                    Our Services
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Modern website design, custom React/Next.js development, e-commerce stores, SEO architecture, and 24/7 maintenance.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-orange-400">
                  <span>Explore All 6 Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 2: Our Work */}
              <div
                onClick={() => onNavigate('work')}
                className="group p-6 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/10 hover:border-sky-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-sky-500/10"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                    Client Case Studies
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Real estate portfolios, boutique hotels, artisan restaurants, e-commerce storefronts, and venture-backed platforms.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-sky-400">
                  <span>View Full Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 3: 5-Stage Process */}
              <div
                onClick={() => onNavigate('process')}
                className="group p-6 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/10 hover:border-orange-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-orange-500/10"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                    5-Stage Process
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Discover, Design, Develop, Optimize, and Launch. Tested execution with zero friction and guaranteed deadlines.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-orange-400">
                  <span>How We Work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Case Study Teaser */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-black border border-white/15 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-wider mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span>Featured Client Success</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-sky-300">Hospitality &amp; Dining</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Lumina Osteria &amp; Wine Bar — Manhattan, NY
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                "<span className="text-sky-400 font-semibold">Mentor</span><span className="text-orange-400 font-bold">Ex</span> Digital took our traditional restaurant website and turned it into an immersive digital reservation powerhouse — resulting in a <span className="text-orange-400 font-semibold">+142% surge</span> in table bookings within 60 days."
              </p>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-orange-400 font-semibold">+142% Direct Reservations</span>
                <span className="text-neutral-600">·</span>
                <span className="text-sky-300 font-semibold">0.6s Load Time</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onNavigate('work')}
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 border border-orange-400/30"
              >
                <span>Browse All Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-medium text-sky-200 glass-panel border border-sky-400/30 hover:border-sky-300 hover:bg-sky-500/10 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span>Get A Free Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
