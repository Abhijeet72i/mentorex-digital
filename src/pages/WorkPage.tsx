import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ARCHIVE_PROJECTS } from '../data/streams';
import { ProjectShowcase } from '../types/video';
import { ArrowUpRight, ArrowRight, ExternalLink, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: string) => void;
  onSelectProject: (projectTitle: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onSelectProject }) => {
  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Our Work' }]} />

        {/* Page Hero */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            <span className="text-sky-400 font-semibold">Proven Track Record</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-orange-400 font-semibold">USA &amp; Canada Case Studies</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            Websites That Make<br />
            Businesses{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Stand Out.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Every business has unique strengths. We build tailor-made digital experiences designed to showcase your credibility, maximize customer conversion, and drive measurable revenue.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ARCHIVE_PROJECTS.map((project: ProjectShowcase) => (
            <div
              key={project.id}
              className="group bg-neutral-950/90 hover:bg-neutral-900/90 border border-white/10 hover:border-sky-500/30 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl hover:-translate-y-1.5"
            >
              {/* Window Mockup Chrome */}
              <div className="bg-neutral-900/90 px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-neutral-400 truncate max-w-[180px]">
                  https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                </div>
                <span className="text-[10px] font-mono text-neutral-500">{project.year}</span>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-sky-300 font-semibold uppercase tracking-wider">{project.client}</span>
                    <span className="text-neutral-500">{project.location}</span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                    {project.summary}
                  </p>

                  {/* Impact Metric Box */}
                  <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/20 space-y-1 mb-4">
                    <div className="text-[10px] font-mono text-sky-300 uppercase tracking-wider font-semibold">Business Impact</div>
                    <div className="text-xs sm:text-sm font-bold text-sky-400">{project.outcome}</div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300 font-mono mb-4">
                    <div><span className="text-slate-500">Client:</span> {project.client}</div>
                    <div><span className="text-slate-500">Architecture:</span> {project.medium}</div>
                  </div>

                  {project.deliverables && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.deliverables.map((item, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-300">{project.scale}</span>
                  <button
                    onClick={() => onSelectProject(project.title)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                  >
                    <span>Start Similar Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Quote Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-white/10 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-orange-400 text-3xl font-serif">“</span>
            <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic">
              "<span className="text-sky-400 font-semibold">Mentor</span><span className="text-orange-400 font-bold">Ex</span> Digital transformed our digital presence completely. The site is lightning fast, converts visitors effortlessly, and our direct bookings increased dramatically right after launch."
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400">
              <span className="text-white font-semibold">Ridge Luxury Stays</span> · <span className="text-orange-400">Aspen, Colorado 🇺🇸</span>
            </div>
          </div>
        </div>

        {/* Bottom Page CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Ready to create your next{' '}
              <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
                success story?
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
              Tell us about your company and receive a detailed project roadmap tailored to your industry.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/25 border border-orange-400/30 whitespace-nowrap"
          >
            Start Your Project →
          </button>
        </div>
      </div>
    </div>
  );
};
