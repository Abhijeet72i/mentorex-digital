import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MentorExLogo } from './MentorExLogo';

interface GlassHeaderProps {
  onOpenCommission: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const GlassHeader: React.FC<GlassHeaderProps> = ({
  onOpenCommission,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#/' },
    { id: 'services', label: 'Services', href: '#/services' },
    { id: 'work', label: 'Our Work', href: '#/work' },
    { id: 'process', label: 'Process', href: '#/process' },
    { id: 'about', label: 'About', href: '#/about' },
    { id: 'contact', label: 'Contact', href: '#/contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div className="max-w-5xl mx-auto glass-nav rounded-2xl border border-white/12 shadow-2xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between pointer-events-auto backdrop-blur-xl">

        {/* MentorEx Digital Logo */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="group hover:opacity-95 transition-opacity whitespace-nowrap flex items-center gap-2 py-1 shrink-0"
          aria-label="MentorEx Digital Home"
        >
          <MentorExLogo size="sm" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs sm:text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-sky-300 font-bold drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                    : 'text-slate-200 hover:text-orange-400'
                }`}
              >
                <span className="whitespace-nowrap">
                  {item.label}
                </span>

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400 rounded-full animate-fade-in shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right-side CTA */}
        <button
          onClick={() => handleNavClick('contact')}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 border border-orange-400/30"
        >
          <span>Get a Free Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden p-1.5 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 glass-panel rounded-2xl border border-white/12 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 pointer-events-auto shadow-2xl">

          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-left text-base font-medium py-1 transition-colors ${
                  currentPage === item.id
                    ? 'text-orange-400 font-bold'
                    : 'text-neutral-200 hover:text-sky-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl transition-colors shadow-lg shadow-orange-500/20"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </header>
  );
};