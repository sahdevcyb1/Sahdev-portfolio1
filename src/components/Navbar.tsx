import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'roadmap', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#080A10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#hero"
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded-lg p-1"
              aria-label="Sahdev Singh Jhala - Back to top"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#11141D] border border-white/10 group-hover:border-[#5B8CFF]/50 transition-colors overflow-hidden">
                <span className="font-mono font-bold text-sm tracking-tighter bg-gradient-to-br from-[#5B8CFF] to-[#9B7CFF] bg-clip-text text-transparent">
                  SJ
                </span>
                <div className="absolute inset-0 bg-[#5B8CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <div className="font-heading font-semibold text-sm tracking-tight text-[#F4F6FC] group-hover:text-white transition-colors flex items-center gap-1.5">
                  {PORTFOLIO_DATA.personal.name}
                </div>
                <div className="text-[11px] font-mono text-[#969FB3] flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>JECRC · 1st Year CSE</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-[#11141D]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10 shadow-sm'
                        : 'text-[#969FB3] hover:text-[#F4F6FC] hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5B8CFF]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#11141D] hover:bg-[#171B26] text-[#F4F6FC] border border-white/10 hover:border-[#5B8CFF]/50 transition-all duration-200 hover:shadow-glow-sm group"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5B8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-[#11141D] border border-white/10 text-[#969FB3] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#080A10]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-[#969FB3] tracking-wider uppercase mb-4 pl-3">
              Navigation
            </div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#11141D]/50 border border-white/[0.06] text-base font-medium text-[#F4F6FC] hover:border-[#5B8CFF]/40 active:bg-white/[0.08]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#969FB3]">&rarr;</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <div className="p-3.5 rounded-xl bg-[#11141D] border border-white/[0.08] flex items-center gap-3">
              <Terminal className="w-4 h-4 text-[#5B8CFF]" />
              <div className="text-xs">
                <div className="text-[#F4F6FC] font-medium">B.Tech CSE Core (Year 1)</div>
                <div className="text-[#969FB3]">JECRC University, Jaipur</div>
              </div>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5B8CFF] text-[#080A10] font-semibold text-sm hover:bg-[#5B8CFF]/90 transition-colors"
            >
              <span>Connect with Sahdev</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
