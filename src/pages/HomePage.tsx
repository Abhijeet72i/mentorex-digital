import React, { useEffect, useState } from 'react';
import { StreamSource, StreamTelemetry } from '../types/video';
import { HlsVideoBackground } from '../components/HlsVideoBackground';
import { HeroBottomLeft } from '../components/HeroBottomLeft';
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Code2,
  CheckCircle2,
} from 'lucide-react';

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
  onToggleTelemetry,
  isTelemetryOpen,
  onNavigate,
  onStartProject,
}) => {
  /*
   * Controls the entrance animation of the featured case study.
   * The video is visible first.
   * Text starts appearing after 1.2 seconds.
   */
  const [featuredVisible, setFeaturedVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFeaturedVisible(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">

      {/* =====================================================
          CINEMATIC HERO
         ===================================================== */}

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

      {/* =====================================================
          MULTIPAGE QUICK HUB & OVERVIEW
         ===================================================== */}

      <section className="relative z-10 w-full py-20 px-6 sm:px-10 lg:px-16 bg-neutral-950 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          {/* =================================================
              QUICK STATS BAR
             ================================================= */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/10 mb-16 shadow-2xl">

            <div>
              <span className="font-mono text-xs text-orange-400 uppercase tracking-widest block mb-1 font-semibold">
                Client Impact
              </span>

              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                99.8%
              </div>

              <div className="text-xs text-slate-300 mt-1">
                Client Satisfaction
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-1 font-semibold">
                Edge Speed
              </span>

              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                &lt; 0.8s
              </div>

              <div className="text-xs text-slate-300 mt-1">
                Average Load Speed
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-sky-300 uppercase tracking-widest block mb-1 font-semibold">
                Territory
              </span>

              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                50 States
              </div>

              <div className="text-xs text-slate-300 mt-1">
                USA + Canada Coverage
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-orange-400 uppercase tracking-widest block mb-1 font-semibold">
                Core Vitals
              </span>

              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                100 / 100
              </div>

              <div className="text-xs text-slate-300 mt-1">
                Google Performance Score
              </div>
            </div>

          </div>

          {/* =================================================
              SECTION NAVIGATION
             ================================================= */}

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
                Browse our dedicated agency departments or get in touch
                directly to start building your custom digital presence.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* =================================================
                  SERVICES CARD
                 ================================================= */}

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
                    Modern website design, custom React/Next.js development,
                    e-commerce stores, SEO architecture, and 24/7 maintenance.
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-orange-400">

                  <span>
                    Explore All 6 Services
                  </span>

                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />

                </div>

              </div>

              {/* =================================================
                  OUR WORK CARD
                 ================================================= */}

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
                    Cloud technology platforms, real estate portfolios,
                    boutique hotels, restaurants, e-commerce storefronts,
                    and venture-backed digital platforms.
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-sky-400">

                  <span>
                    View Full Portfolio
                  </span>

                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />

                </div>

              </div>

              {/* =================================================
                  PROCESS CARD
                 ================================================= */}

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
                    Discover, Design, Develop, Optimize, and Launch.
                    Tested execution with zero friction and guaranteed
                    deadlines.
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-orange-400">

                  <span>
                    How We Work
                  </span>

                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              FEATURED CLOUD TECHNOLOGIES CASE STUDY
             ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-neutral-950
              border border-white/15
              shadow-2xl
              min-h-[540px]
            "
          >

            {/* =================================================
                3D ANIMATION VIDEO
                VIDEO APPEARS FIRST
               ================================================= */}

            <video
              src="/videos/cloud-technologies-3d.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                pointer-events-none
                opacity-100
                scale-100
                animate-featured-video
              "
            />

            {/* =================================================
                VIDEO COLOR / READABILITY OVERLAY
               ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black
                via-black/75
                to-black/20
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/10
                to-black/25
                pointer-events-none
              "
            />

            {/* =================================================
                TEXT CONTENT
                APPEARS AFTER VIDEO
               ================================================= */}

            <div
              className={`
                relative
                z-10
                min-h-[540px]
                p-8
                sm:p-10
                lg:p-12
                flex
                flex-col
                lg:flex-row
                items-start
                lg:items-center
                justify-between
                gap-10
                transition-all
                duration-1000
                ease-out
                ${
                  featuredVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }
              `}
            >

              {/* =================================================
                  LEFT CONTENT
                 ================================================= */}

              <div className="max-w-3xl">

                {/* Label */}

                <div
                  className={`
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-mono
                    text-orange-400
                    uppercase
                    tracking-wider
                    mb-3
                    font-semibold
                    transition-all
                    duration-700
                    ${
                      featuredVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }
                  `}
                >

                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />

                  <span>
                    Featured Client Success
                  </span>

                  <span className="text-neutral-600">
                    ·
                  </span>

                  <span className="text-sky-300">
                    Cloud &amp; Technology
                  </span>

                </div>

                {/* =================================================
                    TITLE
                   ================================================= */}

                <h3
                  className={`
                    font-display
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-white
                    tracking-tight
                    leading-[1.05]
                    mb-5
                    transition-all
                    duration-1000
                    delay-200
                    ${
                      featuredVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }
                  `}
                >
                  Cloud Technologies &amp; Cloud Technology Solutions
                  for Everything.
                </h3>

                {/* =================================================
                    DESCRIPTION
                   ================================================= */}

                <p
                  className={`
                    text-sm
                    sm:text-base
                    lg:text-lg
                    text-slate-200
                    leading-relaxed
                    font-normal
                    max-w-3xl
                    transition-all
                    duration-1000
                    delay-300
                    ${
                      featuredVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }
                  `}
                >
                  Transform your business with secure, scalable, and
                  reliable cloud solutions designed for the modern world.
                  From cloud infrastructure and data management to
                  cybersecurity, automation, and digital transformation,
                  we provide the technology you need to work smarter,
                  move faster, and grow without limits.
                </p>

                {/* =================================================
                    POSITIONING
                   ================================================= */}

                <p
                  className={`
                    text-sm
                    sm:text-base
                    text-slate-300
                    mt-4
                    transition-all
                    duration-1000
                    delay-[400ms]
                    ${
                      featuredVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }
                  `}
                >
                  Cloud-powered. Future-ready. Built for your business.
                  <span className="text-neutral-500">
                    {' '}— Manhattan, NY
                  </span>
                </p>

                {/* =================================================
                    QUOTE
                   ================================================= */}

                <p
                  className={`
                    text-xs
                    sm:text-sm
                    text-slate-300
                    leading-relaxed
                    font-normal
                    mt-6
                    max-w-2xl
                    transition-all
                    duration-1000
                    delay-500
                    ${
                      featuredVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }
                  `}
                >
                  "
                  <span className="text-sky-400 font-semibold">
                    Mentor
                  </span>
                  <span className="text-orange-400 font-bold">
                    Ex
                  </span>{' '}
                  Digital transformed our digital presence into a modern
                  technology platform that clearly communicates our cloud,
                  security, and digital transformation solutions."
                </p>

                {/* =================================================
                    METRICS
                   ================================================= */}

                <div
                  className={`
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-2
                    mt-5
                    text-xs
                    font-mono
                    transition-all
                    duration-1000
                    delay-[600ms]
                    ${
                      featuredVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }
                  `}
                >

                  <span className="text-orange-400 font-semibold">
                    Scalable Cloud Infrastructure
                  </span>

                  <span className="text-neutral-600">
                    ·
                  </span>

                  <span className="text-sky-300 font-semibold">
                    Secure Digital Architecture
                  </span>

                </div>

              </div>

              {/* =================================================
                  BUTTONS
                 ================================================= */}

              <div
                className={`
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  gap-3
                  w-full
                  lg:w-auto
                  shrink-0
                  transition-all
                  duration-1000
                  delay-700
                  ${
                    featuredVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }
                `}
              >

                <button
                  onClick={() => onNavigate('work')}
                  className="
                    w-full
                    sm:w-auto
                    px-6
                    py-3.5
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-white
                    bg-gradient-to-r
                    from-orange-500
                    to-orange-600
                    hover:from-orange-400
                    hover:to-orange-500
                    rounded-xl
                    transition-all
                    cursor-pointer
                    whitespace-nowrap
                    shadow-lg
                    shadow-orange-500/25
                    hover:shadow-orange-500/40
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-orange-400/30
                  "
                >
                  <span>
                    Browse All Work
                  </span>

                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="
                    w-full
                    sm:w-auto
                    px-6
                    py-3.5
                    text-xs
                    sm:text-sm
                    font-medium
                    text-sky-200
                    glass-panel
                    border
                    border-sky-400/30
                    hover:border-sky-300
                    hover:bg-sky-500/10
                    rounded-xl
                    transition-all
                    cursor-pointer
                    whitespace-nowrap
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <span>
                    Get A Free Quote
                  </span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};