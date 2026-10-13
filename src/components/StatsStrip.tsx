import React from 'react';
import { Award, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  const renderStatIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <Award className="w-4 h-4 text-[#5B8CFF]" />;
      case 1:
        return <BookOpen className="w-4 h-4 text-[#9B7CFF]" />;
      case 2:
        return <Terminal className="w-4 h-4 text-[#38BDF8]" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section className="relative z-10 py-12 border-y border-white/[0.08] bg-[#11141D]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-5 rounded-2xl bg-[#11141D] border border-white/[0.08] hover:border-[#5B8CFF]/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#969FB3]">
                  {stat.sublabel}
                </span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                  {renderStatIcon(index)}
                </div>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F4F6FC] tracking-tight group-hover:text-white transition-colors">
                  {stat.value}
                </span>
              </div>

              <div className="mt-1 text-sm font-semibold text-[#F4F6FC]/90">
                {stat.label}
              </div>

              <p className="mt-1 text-xs text-[#969FB3] font-sans leading-relaxed">
                {stat.detail}
              </p>

              {/* Progress bar visual for percentages */}
              {stat.numeric && stat.numeric > 10 && (
                <div className="mt-3.5 w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#9B7CFF] transition-all duration-1000 ease-out"
                    style={{ width: `${stat.numeric}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
