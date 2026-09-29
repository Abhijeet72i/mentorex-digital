import React from 'react';
import { ArrowUp, Mail, Globe } from 'lucide-react';
import { MentorExLogo } from './MentorExLogo';

interface FooterProps {
  onOpenCommission: () => void;
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCommission, onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-neutral-950 border-t border-white/10 text-neutral-400 pt-20 pb-14 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
              <MentorExLogo size="xl" />
            </div>
            <p className="font-display text-lg sm:text-xl font-bold bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
              "We Build Websites That Help Businesses Grow."
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              <span className="text-sky-400 font-semibold">Mentor</span><span className="text-orange-400 font-bold">Ex</span> Digital designs and develops modern, high-performance websites for businesses across the USA and Canada.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-sky-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              <span className="text-slate-200">Accepting New Client Projects: <span className="text-orange-400 font-semibold">USA &amp; Canada</span></span>
            </div>
          </div>

          {/* Company Nav */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  About MentorEx
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('work')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Client Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  5-Stage Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Contact &amp; Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Services Nav */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  E-Commerce Stores
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  SEO Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Hosting &amp; Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Regions & Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest font-bold">
              Regions Served
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>United States 🇺🇸</span>
              </li>
              <li className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Canada 🇨🇦</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[11px] text-sky-300 uppercase tracking-wider block mb-1 font-semibold">
                Direct Inquiries
              </span>
              <a href="mailto:contact@mentorex.in" className="text-xs sm:text-sm text-white hover:text-orange-400 font-mono font-semibold transition-colors">
                contact@mentorex.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © 2026 <span className="text-sky-400 font-semibold">Mentor</span><span className="text-orange-400 font-bold">Ex</span> Digital. All Rights Reserved.
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-sky-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
