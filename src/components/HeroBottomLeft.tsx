import React from 'react';
import { Play, Pause, ChevronRight, Activity, ArrowRight } from 'lucide-react';
import { StreamSource } from '../types/video';

interface HeroBottomLeftProps {
  currentStream: StreamSource;
  streams: StreamSource[];
  onSelectStream: (stream: StreamSource) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onOpenArchive: () => void;
  onToggleTelemetry: () => void;
  isTelemetryOpen: boolean;
  currentTime: number;
  duration: number;
  onStartProject: () => void;
}

export const HeroBottomLeft: React.FC<HeroBottomLeftProps> = ({
  currentStream,
  streams,
  onSelectStream,
  isPlaying,
  onTogglePlay,
  onOpenArchive,
  onToggleTelemetry,
  isTelemetryOpen,
  currentTime,
  duration,
  onStartProject,
}) => {
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenArchive();
    }
  };

  return (
    <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12 max-w-2xl z-20 pointer-events-auto pr-4 sm:pr-0">
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
        <div className="flex items-center flex-wrap gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase">
          <span className="flex items-center gap-1.5 text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <span className="font-semibold text-sky-300">MENTOREX DIGITAL</span>
          </span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>WEB DESIGN &amp; DEVELOPMENT</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span className="text-orange-400 font-semibold tracking-wider">USA + CANADA</span>
        </div>

        {/* Editorial Headline with MentorEx Brand Gradient */}
        <h1
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02]"
          style={{ textWrap: 'balance' }}
        >
          Websites Built<br className="hidden sm:inline" />
          {' '}For Businesses<br className="hidden sm:inline" />
          {' '}That{' '}
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
            Want To Grow.
          </span>
        </h1>

        {/* Value Proposition Prose */}
        <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-xl font-normal">
          <span className="text-sky-300 font-medium">Mentor</span><span className="text-orange-400 font-semibold">Ex</span> Digital designs and develops modern, responsive websites that help businesses build credibility, attract customers and grow online.
        </p>

        {/* Action Controls */}
        <div className="flex items-center flex-wrap gap-3 pt-1">
          {/* Primary Action Button */}
          <button
            onClick={onStartProject}
            className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xl shadow-orange-500/25 border border-orange-400/40 hover:scale-[1.02]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Action: View Our Work */}
          <button
            onClick={scrollToWork}
            className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium rounded-xl glass-panel text-neutral-200 hover:text-white hover:border-sky-400/40 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>View Our Work</span>
            <ChevronRight className="w-4 h-4 text-sky-400" />
          </button>

          {/* Third Control: Website Preview (Preserved video interaction functionality) */}
          <button
            onClick={onToggleTelemetry}
            className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium rounded-xl glass-panel hover:border-sky-400/40 transition-all cursor-pointer whitespace-nowrap ${
              isTelemetryOpen ? 'text-white border-sky-400/50 bg-sky-500/15' : 'text-neutral-300'
            }`}
          >
            <Activity className="w-4 h-4 text-sky-400" />
            <span>Website Preview</span>
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
            className="flex items-center gap-2 px-3.5 py-3 rounded-xl glass-panel text-neutral-200 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current text-sky-300" />
            ) : (
              <Play className="w-4 h-4 fill-current text-orange-400" />
            )}
          </button>
        </div>

        {/* Stream Timeline */}
        <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
          {/* Timeline scrub line */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono-tabular text-sky-300 shrink-0">
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-sky-400 to-orange-400 transition-all duration-300 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
              />
            </div>
            <span className="text-[11px] font-mono-tabular text-neutral-400 shrink-0">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
