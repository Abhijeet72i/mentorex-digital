import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Globe, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { MentorExLogo } from './MentorExLogo';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('USA 🇺🇸');
  const [businessType, setBusinessType] = useState('Small Business / Startup');
  const [projectDetails, setProjectDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid business email.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 w-full scroll-mt-20 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-neutral-950/95 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        {/* Pre-Contact Banner: FINAL CTA */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900/80 to-black border border-white/15 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-2 font-semibold">
              Take The Next Step
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05] mb-3">
              Ready To Build Your<br />
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              Tell us about your business and let's create a website that works for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#contact-form"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xl shadow-orange-500/25 border border-orange-400/30"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact-form"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-sky-200 glass-panel border border-sky-400/30 hover:border-sky-300 hover:bg-sky-500/10 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Get A Free Quote</span>
            </a>
          </div>
        </div>

        {/* Contact Grid */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                <span className="text-sky-400 font-semibold">Direct Inquiries</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-orange-400 font-semibold">USA &amp; Canada</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05] mb-4">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
                  Great.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Have a business that needs a better website? Tell us what you're looking for.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-5 shadow-xl">
              <div className="pb-3 border-b border-white/10">
                <MentorExLogo size="md" />
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block font-semibold">
                    Email Consultation
                  </span>
                  <a href="mailto:contact@mentorex.in" className="text-sm font-semibold text-white hover:text-orange-400 transition-colors">
                    contact@mentorex.in
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Response within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block font-semibold">
                    Active Territories
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Serving businesses across the USA 🇺🇸 and Canada 🇨🇦
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-400 font-mono space-y-1">
              <p className="text-neutral-300 font-semibold">Response Guarantee:</p>
              <p>Every inquiry receives a tailored project feasibility assessment and preliminary quote within 24 business hours.</p>
            </div>
          </div>

          {/* Right Column: Contact Request Form */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-white/15 rounded-3xl p-7 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Project Request Transmitted!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{name}</span>. We've received your request for <span className="text-white font-semibold">{businessName || 'your business'}</span>. Our technical leads will review your requirements and reach out to <span className="text-white font-semibold">{email}</span>.
                </p>
                <button
                  onClick={() => {
                    setName('');
                    setBusinessName('');
                    setEmail('');
                    setPhone('');
                    setProjectDetails('');
                    setIsSubmitted(false);
                  }}
                  className="mt-6 px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/25 border border-orange-400/30"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-xs font-mono">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Morgan Hospitality Group"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@morganhg.com"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (415) 800-2918"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                    >
                      <option value="USA 🇺🇸">United States 🇺🇸</option>
                      <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Business Type
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-400 transition-colors cursor-pointer"
                    >
                      <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                      <option value="Hotel / Hospitality">Hotel / Hospitality</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="E-Commerce Store">E-Commerce Store</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Startup">Startup / Tech</option>
                      <option value="Small Business / Local">Small / Local Business</option>
                      <option value="Growing Company">Growing Company</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Tell us what you're looking for (e.g. new website design, redesign, e-commerce, timeline, target features)..."
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/40 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer shadow-xl shadow-orange-500/25 border border-orange-400/30 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Request →</span>
                  </button>
                </div>

                <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                  Serving businesses across the <span className="text-sky-400 font-semibold">USA 🇺🇸</span> and <span className="text-orange-400 font-semibold">Canada 🇨🇦</span> · Email: <a href="mailto:contact@mentorex.in" className="text-sky-300 hover:underline">contact@mentorex.in</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
