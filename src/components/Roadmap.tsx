import { Route, Clock, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="relative z-10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11141D] border border-white/10 text-xs font-mono text-[#9B7CFF] mb-3">
            <Route className="w-3.5 h-3.5 text-[#9B7CFF]" />
            <span>LEARNING ROADMAP</span>
            <span className="text-white/20">•</span>
            <span>INTENDED PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F4F6FC] tracking-tight">
            The journey ahead.
          </h2>
          <p className="mt-4 text-[#969FB3] text-base sm:text-lg">
            A structured, realistic engineering roadmap bridging foundational student coursework to production software engineering.
          </p>
        </div>

        {/* Roadmap Stages Progression */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-12 bg-gradient-to-r from-[#5B8CFF] via-[#9B7CFF] to-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PORTFOLIO_DATA.roadmap.map((stage) => {
              const isCurrent = stage.status === 'In Progress';

              return (
                <div
                  key={stage.step}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gradient-to-b from-[#171B26] to-[#11141D] border-2 border-[#5B8CFF]/50 shadow-glow-sm -translate-y-2'
                      : 'bg-[#11141D] border border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-2xl font-mono font-bold tracking-tight ${
                          isCurrent ? 'text-[#5B8CFF]' : 'text-white/30'
                        }`}
                      >
                        {stage.step}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                          isCurrent
                            ? 'bg-[#5B8CFF]/15 text-[#5B8CFF] border border-[#5B8CFF]/30 font-semibold'
                            : 'bg-white/[0.03] text-[#969FB3] border border-white/[0.05]'
                        }`}
                      >
                        {isCurrent ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] animate-pulse" />
                            CURRENT
                          </>
                        ) : (
                          <>
                            <Clock className="w-2.5 h-2.5 text-[#969FB3]" />
                            FUTURE
                          </>
                        )}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-heading font-bold text-white mb-2 leading-snug">
                      {stage.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#969FB3] leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  {/* Focus Areas list */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                      Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {stage.focusAreas.map((focus) => (
                        <span
                          key={focus}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-[#969FB3] border border-white/[0.05]"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roadmap Mindset Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#11141D]/60 border border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs text-[#969FB3]">
          <div className="flex items-center gap-2 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white/90">Curriculum Commitment:</span>
            <span>Progressing through deliberate practice rather than rushing frameworks.</span>
          </div>
          <span className="font-mono text-[#5B8CFF]">2026 - 2029 Academic Horizon</span>
        </div>
      </div>
    </section>
  );
};
