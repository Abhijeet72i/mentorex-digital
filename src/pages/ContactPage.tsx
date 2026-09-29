import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { MentorExLogo } from '../components/MentorExLogo';
import { Send, CheckCircle2, Mail, MapPin, Globe, Sparkles, Phone, ShieldCheck, Clock } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  initialTopic?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, initialTopic }) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('USA 🇺🇸');
  const [businessType, setBusinessType] = useState(initialTopic || 'Small Business / Startup');
  const [timeline, setTimeline] = useState('Within 1 Month');
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
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-16 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Contact' }]} />

        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            <span className="text-sky-400 font-semibold">Direct Strategy &amp; Inquiries</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-orange-400 font-semibold">USA &amp; Canada</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            Let's Build Something<br />
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
              Exceptional Together.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
            Have a business that needs a better website? Tell us what you're looking for, and we'll prepare a custom roadmap and proposal within 24 business hours.
          </p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-6 shadow-xl">
              <div className="pb-3 border-b border-white/10">
                <MentorExLogo size="md" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Contact Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block font-semibold">
                    Direct Email
                  </span>
                  <a
                    href="mailto:contact@mentorex.in"
                    className="text-base font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    contact@mentorex.in
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Response within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block font-semibold">
                    Active Territories
                  </span>
                  <p className="text-sm font-semibold text-white">
                    USA 🇺🇸 &amp; Canada 🇨🇦
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Serving clients across all North American time zones</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider block font-semibold">
                    Hours of Operation
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Monday – Friday, 8:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Zero-Risk Callout */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="text-sky-300 font-bold">Our Consultation Guarantee</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 font-mono text-[11px]">
                <li className="flex items-center gap-1.5"><span className="text-orange-400 font-bold">✓</span> 100% Free Initial Feasibility &amp; Quote</li>
                <li className="flex items-center gap-1.5"><span className="text-orange-400 font-bold">✓</span> Zero High-Pressure Sales Tactics</li>
                <li className="flex items-center gap-1.5"><span className="text-orange-400 font-bold">✓</span> Honest Technical &amp; Design Recommendations</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Project Request Form */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Project Request Transmitted!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-sky-400 font-bold">{name}</span>. We've received your request for <span className="text-orange-400 font-bold">{businessName || 'your business'}</span>. Our senior technical lead will review your specifications and reply to <span className="text-white font-semibold underline">{email}</span> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setName('');
                      setBusinessName('');
                      setEmail('');
                      setPhone('');
                      setProjectDetails('');
                      setIsSubmitted(false);
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/20 border border-orange-400/30"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-slate-300 font-normal">
                    Fill out the details below and we will prepare a tailored proposal within 24 hours.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-xs font-mono">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Name *
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
                      Business Email *
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
                      Phone Number
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
                      <option value="Other">Other Region</option>
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
                    Target Launch Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                  >
                    <option value="Immediately (Within 2 Weeks)">Immediately (Within 2 Weeks)</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="1 to 3 Months">1 to 3 Months</option>
                    <option value="Exploring Options / Flexible">Exploring Options / Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                    Project Details &amp; Goals
                  </label>
                  <textarea
                    rows={4}
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Tell us what you're looking for (e.g., new website, complete redesign, e-commerce features, current site URL, specific references)..."
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
                  Serving businesses across the <span className="text-sky-400 font-semibold">USA 🇺🇸</span> and <span className="text-orange-400 font-semibold">Canada 🇨🇦</span> · Direct: <a href="mailto:contact@mentorex.in" className="text-sky-300 hover:underline">contact@mentorex.in</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
