import { useState } from 'react';
import { Terminal, Database, Code, Check, Copy, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getIcon = (type: SkillItem['iconName']) => {
    switch (type) {
      case 'python':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#9B7CFF]" />;
      case 'code':
        return <Code className="w-5 h-5 text-[#5B8CFF]" />;
    }
  };

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11141D] border border-white/10 text-xs font-mono text-[#5B8CFF] mb-3">
            <Code className="w-3.5 h-3.5 text-[#5B8CFF]" />
            <span>MY CURRENT TOOLKIT</span>
            <span className="text-white/20">•</span>
            <span>BEGINNER & FOUNDATIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F4F6FC] tracking-tight">
            Technical Skills & Exploration
          </h2>
          <p className="mt-4 text-[#969FB3] text-base sm:text-lg">
            Practical programming languages and tools learned through secondary school and first-year university coursework.
          </p>
        </div>

        {/* 3 Distinct Interactive Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-2xl bg-[#11141D] border border-white/10 hover:border-[#5B8CFF]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card group hover:-translate-y-1.5"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 border-b border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:scale-105 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-[#969FB3] border border-white/[0.06]">
                    {skill.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-[#F4F6FC] group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <div className="mt-1 text-xs font-mono text-[#5B8CFF]">
                    Level: {skill.levelDescription}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#969FB3] leading-relaxed">
                  {skill.context}
                </p>

                {/* Concepts list */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#969FB3]/80 mb-2">
                    Key Topics Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.02] text-white/70 border border-white/[0.04]"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Syntax Highlighted Code Snippet & Terminal Output */}
              <div className="p-4 bg-[#0A0D14] flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.04] text-[11px] font-mono text-[#969FB3]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#5B8CFF]/80" />
                      {skill.codeSnippet.filename}
                    </span>
                    <button
                      onClick={() => handleCopy(skill.codeSnippet.code, skill.id)}
                      className="p-1 rounded text-[#969FB3] hover:text-white hover:bg-white/[0.05] transition-colors"
                      title="Copy snippet"
                    >
                      {copiedId === skill.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <pre className="font-mono text-[11px] text-[#F4F6FC]/85 leading-relaxed overflow-x-auto p-2 bg-[#080A10] rounded-lg border border-white/[0.04]">
                    <code>{skill.codeSnippet.code}</code>
                  </pre>
                </div>

                {/* Simulated execution output */}
                {skill.codeSnippet.output && (
                  <div className="mt-3 pt-2 border-t border-white/[0.04]">
                    <div className="text-[10px] font-mono text-[#969FB3]/70 mb-1 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      <span>Output Result:</span>
                    </div>
                    <pre className="font-mono text-[10px] text-emerald-400/90 whitespace-pre-wrap bg-emerald-950/20 p-2 rounded border border-emerald-500/10">
                      {skill.codeSnippet.output}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* "Currently Strengthening" Learning Goals Section */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#11141D] to-[#171B26] border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#9B7CFF] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACTIVE FOCUS</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#F4F6FC]">
                Currently Strengthening
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#969FB3] max-w-md">
              Targeted growth goals actively prioritized across coursework, daily coding practice, and conceptual study.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {PORTFOLIO_DATA.currentlyStrengthening.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-[#0C0F17]/80 border border-white/[0.06] hover:border-[#5B8CFF]/30 transition-all space-y-2.5"
              >
                <div className="font-mono text-xs text-[#5B8CFF] font-semibold">
                  GOAL 0{idx + 1}
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-[#969FB3] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
