import { MapPin, Compass, Quote, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11141D] border border-white/10 text-xs font-mono text-[#5B8CFF] mb-3">
            <span>ABOUT ME</span>
            <span className="text-white/20">•</span>
            <span>PHILOSOPHY & CONTEXT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F4F6FC] tracking-tight">
            A little about the mind behind the code.
          </h2>
          <p className="mt-4 text-[#969FB3] text-base sm:text-lg">
            Establishing rigorous foundations in software engineering and algorithmic problem-solving.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#11141D] border border-white/10 shadow-card">
              <Quote className="w-10 h-10 text-[#5B8CFF]/20 mb-4" />
              <blockquote className="text-base sm:text-lg text-[#F4F6FC] leading-relaxed font-sans font-normal space-y-4">
                <p>
                  &ldquo;I&apos;m <span className="text-white font-semibold">Sahdev Singh Jhala</span>, a first-year Computer Science Engineering student at JECRC University, Jaipur. I&apos;m currently building my foundation in programming and computer science, starting with Python and SQL from my school years and continuing with C programming at university.&rdquo;
                </p>
                <p>
                  &ldquo;I believe becoming a good developer is a process of consistent learning, experimentation, and turning ideas into working solutions. This portfolio is where I document my journey, showcase my progress, and share what I build along the way.&rdquo;
                </p>
              </blockquote>

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#969FB3]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white/90 font-medium">Sahdev Singh Jhala</span>
                </div>
                <span className="text-[#5B8CFF]">B.Tech CSE Core</span>
              </div>
            </div>

            {/* Core Pillars / Mindset */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#11141D]/60 border border-white/[0.06] hover:border-[#5B8CFF]/30 transition-colors">
                <div className="font-mono text-xs text-[#5B8CFF] font-semibold mb-1">01. AMBITION</div>
                <div className="text-sm font-semibold text-white mb-1">Purposeful Growth</div>
                <div className="text-xs text-[#969FB3] leading-relaxed">
                  Dedicated to becoming a thoughtful, resilient software engineer from day one.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#11141D]/60 border border-white/[0.06] hover:border-[#9B7CFF]/30 transition-colors">
                <div className="font-mono text-xs text-[#9B7CFF] font-semibold mb-1">02. CURIOSITY</div>
                <div className="text-sm font-semibold text-white mb-1">First-Principles</div>
                <div className="text-xs text-[#969FB3] leading-relaxed">
                  Digging under the hood to see how memory, compilers, and queries execute.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#11141D]/60 border border-white/[0.06] hover:border-emerald-400/30 transition-colors">
                <div className="font-mono text-xs text-emerald-400 font-semibold mb-1">03. DISCIPLINE</div>
                <div className="text-sm font-semibold text-white mb-1">Daily Practice</div>
                <div className="text-xs text-[#969FB3] leading-relaxed">
                  Writing clean, syntax-conscious code consistently across university coursework.
                </div>
              </div>
            </div>
          </div>

          {/* Compact Facts & Digital ID Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#11141D] border border-white/10 shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#969FB3]">
                  PROFILE DOSSIER
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  UNDERGRADUATE
                </span>
              </div>

              {/* Verified Compact Facts */}
              <div className="space-y-4">
                {PORTFOLIO_DATA.personal.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <span className="text-xs font-mono text-[#969FB3] flex items-center gap-1.5 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8CFF]" />
                      {fact.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Geographic / University coordinates pill */}
              <div className="p-4 rounded-xl bg-[#171B26] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5B8CFF]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Geographic Base</span>
                </div>
                <div className="text-sm font-medium text-white">
                  Jaipur, Rajasthan, India
                </div>
                <div className="text-xs text-[#969FB3]">
                  JECRC University Campus · Department of Computer Science & Engineering
                </div>
              </div>
            </div>

            {/* Current Direction Note */}
            <div className="p-5 rounded-2xl bg-[#11141D]/60 border border-white/[0.06] flex items-start gap-3.5">
              <Compass className="w-5 h-5 text-[#9B7CFF] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <div className="font-semibold text-white">Current Direction</div>
                <p className="text-[#969FB3] leading-relaxed">
                  {PORTFOLIO_DATA.personal.currentDirection}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
