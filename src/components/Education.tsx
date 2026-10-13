import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative z-10 py-24 sm:py-32 bg-[#0C0F17]/60 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11141D] border border-white/10 text-xs font-mono text-[#9B7CFF] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#9B7CFF]" />
            <span>ACADEMIC JOURNEY</span>
            <span className="text-white/20">•</span>
            <span>VERIFIED MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F4F6FC] tracking-tight">
            Academic Journey & Milestones
          </h2>
          <p className="mt-4 text-[#969FB3] text-base sm:text-lg">
            A chronological timeline of secondary, senior secondary, and university engineering education.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central connecting glow line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#5B8CFF] via-[#9B7CFF]/50 to-white/10" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((item) => {
              const isCurrent = item.highlight;
              return (
                <div key={item.id} className="relative flex items-start gap-6 sm:gap-10 group">
                  {/* Timeline Node Indicator */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <div
                      className={`w-8 sm:w-16 h-8 sm:h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#171B26] border-[#5B8CFF] shadow-glow-md'
                          : 'bg-[#11141D] border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      {isCurrent ? (
                        <div className="relative flex items-center justify-center">
                          <span className="w-3 h-3 rounded-full bg-[#5B8CFF] animate-ping absolute" />
                          <GraduationCap className="w-5 h-5 text-[#5B8CFF] relative z-10" />
                        </div>
                      ) : (
                        <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#969FB3]" />
                      )}
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`flex-1 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-br from-[#171B26] to-[#11141D] border-2 border-[#5B8CFF]/50 shadow-glow-sm'
                        : 'bg-[#11141D] border border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    {/* Top Meta Line */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {isCurrent ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#5B8CFF]/20 text-[#5B8CFF] border border-[#5B8CFF]/30">
                            <Sparkles className="w-3 h-3" />
                            CURRENT CHAPTER
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#969FB3] bg-white/[0.04] border border-white/[0.06]">
                            FOUNDATIONAL STAGE
                          </span>
                        )}
                        <span className="text-xs font-mono text-[#969FB3]">{item.status}</span>
                      </div>

                      {/* Score Indicator if applicable */}
                      {item.score && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
                          <span className="text-xs font-mono text-[#969FB3]">Score:</span>
                          <span className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                            {item.score}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Degree / Level Title */}
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F4F6FC]">
                      {item.level}
                    </h3>

                    {/* Institution & Location */}
                    {item.institution && (
                      <div className="mt-1 text-sm sm:text-base font-medium text-[#5B8CFF] flex items-center gap-2">
                        <span>{item.institution}</span>
                        {item.location && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="text-[#969FB3] font-normal text-xs">{item.location}</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-[#969FB3] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Refined Animated Percentage Visual Indicator */}
                    {item.scoreNumeric && (
                      <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#969FB3]">Academic Performance</span>
                          <span className="text-white font-semibold">{item.score}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#5B8CFF] via-[#9B7CFF] to-[#38BDF8]"
                            style={{ width: `${item.scoreNumeric}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#969FB3] border border-white/[0.05]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
