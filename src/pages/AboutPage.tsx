import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { WHY_US_HIGHLIGHTS, TARGET_CUSTOMERS } from '../data/streams';
import { MentorExLogo } from '../components/MentorExLogo';
import { Check, ShieldCheck, Zap, Globe, HeartHandshake, Award, Users, Terminal, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onStartProject }) => {
  const techStack = [
    { name: 'React 19 & Next.js', role: 'Modern UI & Static Generation' },
    { name: 'TypeScript', role: 'Type-Safe Resilient Logic' },
    { name: 'Tailwind CSS', role: 'Pixel-Perfect Fluid Layouts' },
    { name: 'Figma', role: 'High-Fidelity UI/UX Systems' },
    { name: 'Cloudflare & Vercel', role: 'Global Edge CDN Delivery' },
    { name: 'Node.js & Express', role: 'Scalable API Integration' },
  ];

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            <span className="text-sky-400 font-semibold">The Agency Behind Your Digital Growth</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-orange-400 font-semibold">USA &amp; Canada</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            More Than Just A Website —{' '}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
              A Digital Choice.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
            Your website is often the first interaction customers have with your business. We build digital experiences that make that first impression count.
          </p>
        </div>

        {/* Agency Mission & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            <div className="mb-2">
              <MentorExLogo size="lg" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Why We Started MentorEx Digital
            </h2>
            <p>
              Most businesses face a frustrating dilemma when building a website: hire a bloated traditional agency that charges exorbitant retainers and takes 6 months to launch, or buy a generic template that looks like everyone else and fails to turn traffic into paying clients.
            </p>
            <p>
              <span className="text-sky-400 font-semibold">Mentor</span><span className="text-orange-400 font-bold">Ex</span> Digital was created to offer a better choice: high-performance, modern websites designed with strategic purpose, built with state-of-the-art web technology, and delivered with speed, transparency, and care.
            </p>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/10 text-xs font-mono space-y-1.5 shadow-xl">
              <span className="text-orange-400 font-bold uppercase tracking-wider block">Our Core Brand Promise:</span>
              <p className="text-slate-200 text-sm font-sans font-medium">"We build websites that help businesses grow. Fast, responsive, conversion-focused, and tailored for your brand."</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-900/80 border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-300 uppercase tracking-wider block font-semibold">Service Territory</span>
                <span className="font-display text-lg font-bold text-white">USA 🇺🇸 &amp; Canada 🇨🇦</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono">Response Time:</span>
                <span className="text-orange-400 font-semibold">&lt; 24 Business Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono">Code Ownership:</span>
                <span className="text-white font-semibold">100% Client Retained</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono">Direct Communication:</span>
                <span className="text-sky-300 font-semibold">Lead Designers &amp; Developers</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/25 border border-orange-400/30"
              >
                <span>Get In Touch With Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* The 6 Agency Pillars */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-2 font-semibold">
              Our 6 Pillars
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              The Standard Behind Every{' '}
              <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
                MentorEx Build
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/60 border border-white/10 hover:border-sky-500/30 rounded-2xl p-7 transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-orange-400 font-semibold">
                    {item.stat}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Customers Sectors */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/50 border border-white/10 mb-20">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1 font-semibold">
              Who We Build For
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Tailored Solutions For High-Ambition Industries
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {TARGET_CUSTOMERS.map((customer, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 transition-all flex items-center gap-2 hover:border-orange-500/30"
              >
                <Check className="w-3.5 h-3.5 text-orange-400" />
                <span>{customer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Stack */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1 font-semibold">
              Engineering Excellence
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Modern Technology We Rely On
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-sky-500/30 transition-all">
                <div>
                  <h4 className="text-xs font-semibold text-white">{tech.name}</h4>
                  <p className="text-[11px] text-sky-300 font-mono mt-0.5">{tech.role}</p>
                </div>
                <Terminal className="w-4 h-4 text-orange-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Page CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Want to discuss your project with our senior team?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
              We'll analyze your requirements and provide honest, straightforward technical advice.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/25 border border-orange-400/30 whitespace-nowrap"
          >
            Contact MentorEx Digital →
          </button>
        </div>
      </div>
    </div>
  );
};
