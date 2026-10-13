import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#080A10] py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#11141D] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#5B8CFF]">
                SJ
              </div>
              <span className="font-heading font-semibold text-sm text-[#F4F6FC]">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-[#969FB3] text-center md:text-left">
              &ldquo;Designed with curiosity. Built one step at a time.&rdquo;
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#969FB3]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#11141D] hover:bg-[#171B26] text-[#F4F6FC] border border-white/10 hover:border-[#5B8CFF]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#5B8CFF]" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#969FB3]/80">
          <div>
            Sahdev Singh Jhala &copy; 2026. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>B.Tech Computer Science Engineering</span>
            <span>•</span>
            <span className="text-[#5B8CFF]">JECRC University, Jaipur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
