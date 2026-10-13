import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroWorkspaceVisual } from './HeroWorkspaceVisual';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const roles = PORTFOLIO_DATA.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState('in');
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141D] border border-white/10 text-xs font-mono text-[#969FB3] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
              <span className="tracking-wider uppercase text-[11px] font-semibold text-white/90">
                {PORTFOLIO_DATA.personal.eyebrow}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#5B8CFF] flex items-center gap-2">
                <span>PORTFOLIO OF</span>
                <span className="w-8 h-[1px] bg-[#5B8CFF]/50" />
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-[#F4F6FC] leading-[1.08]">
                {PORTFOLIO_DATA.personal.name}
              </h1>

              {/* Dynamic Rotating Role Badge */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-sm font-mono text-[#969FB3]">Focus:</span>
                <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171B26] border border-white/10 text-xs sm:text-sm font-mono text-[#5B8CFF] min-h-[32px]">
                  <span
                    className={`transition-opacity duration-300 font-medium ${
                      fadeState === 'in' ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {roles[roleIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-[#F4F6FC]/90 leading-snug">
              &ldquo;{PORTFOLIO_DATA.personal.headline}&rdquo;
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#969FB3] max-w-2xl leading-relaxed font-sans font-normal">
              {PORTFOLIO_DATA.personal.bioShort}
            </p>

            {/* Two Primary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#5B8CFF] text-[#080A10] hover:bg-[#5B8CFF]/90 transition-all duration-200 shadow-glow-sm hover:shadow-glow-md active:scale-95 group"
              >
                <Compass className="w-4 h-4 text-[#080A10] group-hover:rotate-45 transition-transform" />
                <span>Explore Portfolio</span>
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#11141D] text-[#F4F6FC] border border-white/10 hover:border-[#5B8CFF]/50 hover:bg-[#171B26] transition-all duration-200 active:scale-95 group"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#5B8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Micro verification footnote */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#969FB3]/80">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9B7CFF]" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <span>•</span>
              <div>B.Tech CSE Core (Class of 2029)</div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Workspace Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroWorkspaceVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#969FB3] pointer-events-auto">
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-1.5 text-[11px] font-mono hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll to about section"
        >
          <span className="tracking-widest uppercase text-[10px] text-[#969FB3]/80 group-hover:text-[#5B8CFF]">
            SCROLL DOWN
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#5B8CFF]">
            <div className="w-1 h-2 rounded-full bg-[#5B8CFF] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
