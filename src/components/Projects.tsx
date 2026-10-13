import React, { useState } from 'react';
import { FolderGit2, Terminal, Info, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectSlot } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<ProjectSlot | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24 sm:py-32 bg-[#0C0F17]/40 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11141D] border border-white/10 text-xs font-mono text-[#38BDF8] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>THE BUILDING ZONE</span>
            <span className="text-white/20">•</span>
            <span>UPCOMING PORTFOLIO RELEASES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#F4F6FC] tracking-tight">
            From learning to building.
          </h2>
          <p className="mt-4 text-[#969FB3] text-base sm:text-lg">
            Every developer starts somewhere. This is where my ideas will take shape.
          </p>
        </div>

        {/* 3 Project Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projectSlots.map((slot) => (
            <div
              key={slot.id}
              className="group rounded-2xl bg-[#11141D] border border-white/10 hover:border-[#5B8CFF]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card hover:-translate-y-2"
            >
              {/* Abstract Visual Header */}
              <div className="relative h-48 bg-gradient-to-br from-[#171B26] via-[#11141D] to-[#080A10] p-6 flex flex-col justify-between overflow-hidden border-b border-white/[0.06]">
                {/* Subtle geometric wireframe background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:opacity-60 transition-opacity" />
                
                {/* Glow accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#5B8CFF]/15 blur-2xl group-hover:bg-[#5B8CFF]/30 transition-colors" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/[0.06] text-white/90 border border-white/10">
                    {slot.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    {slot.status}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-mono text-[#969FB3] mb-1">Architecture Blueprint</div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#5B8CFF] transition-colors">
                    {slot.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-[#969FB3] leading-relaxed">
                    {slot.description}
                  </p>

                  {/* Planned Feature Scope */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                      Planned Focus Areas:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#969FB3]">
                      {slot.plannedFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#5B8CFF] font-mono mt-0.5">&rsaquo;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {slot.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-[#969FB3] border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Slot interactive inspection button */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono font-medium bg-[#171B26] hover:bg-[#1E2330] text-white/90 border border-white/10 hover:border-[#5B8CFF]/50 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-[#5B8CFF]" />
                      <span>View Slot Schema & Instructions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Recruiters & Visitors */}
        <div className="mt-12 p-6 rounded-2xl bg-[#11141D] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 text-[#5B8CFF] shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-semibold text-white">Honest Engineering Showcase:</span>
              <p className="text-[#969FB3]">
                As a first-year student, projects are currently in conceptual, algorithmic, and curriculum development phases. Projects will be linked with live demos and GitHub repositories as they are completed.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-center transition-colors"
          >
            Suggest a Project Idea &rarr;
          </a>
        </div>
      </div>

      {/* Schema / How-to-Edit Modal */}
      {selectedSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#11141D] border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSlot(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-[#969FB3] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono bg-[#5B8CFF]/15 text-[#5B8CFF]">
                <span>EDITABLE REPOSITORY STRUCTURE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {selectedSlot.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#969FB3]">
                This card has been prepared so Sahdev can easily plug in real project parameters inside <code className="text-[#5B8CFF] font-mono">src/data/portfolioData.ts</code> whenever a project is ready:
              </p>

              {/* Code snippet showing the exact schema */}
              <div className="p-4 rounded-xl bg-[#080A10] border border-white/10 font-mono text-xs text-[#969FB3] space-y-2">
                <div className="text-white/60">// How to fill in this project slot:</div>
                <div className="text-emerald-400 font-semibold">{`{`}</div>
                <div className="pl-4 text-white/90">
                  <span className="text-[#9B7CFF]">title</span>: &quot;<span className="text-emerald-300">My New Project Name</span>&quot;,
                </div>
                <div className="pl-4 text-white/90">
                  <span className="text-[#9B7CFF]">description</span>: &quot;<span className="text-white/70">Detailed project explanation...</span>&quot;,
                </div>
                <div className="pl-4 text-white/90">
                  <span className="text-[#9B7CFF]">technologies</span>: [<span className="text-amber-300">&quot;{selectedSlot.technologies[0]}&quot;</span>, <span className="text-amber-300">&quot;Git&quot;</span>],
                </div>
                <div className="pl-4 text-white/90">
                  <span className="text-[#9B7CFF]">githubUrl</span>: &quot;<span className="text-[#5B8CFF]">https://github.com/YOUR_GITHUB_URL/repo-name</span>&quot;,
                </div>
                <div className="pl-4 text-white/90">
                  <span className="text-[#9B7CFF]">liveDemoUrl</span>: &quot;<span className="text-[#5B8CFF]">https://your-demo-url.com</span>&quot;,
                </div>
                <div className="pl-4 text-white/90">
                  <span className="text-[#9B7CFF]">screenshotUrl</span>: &quot;<span className="text-white/70">/assets/screenshot.png</span>&quot;
                </div>
                <div className="text-emerald-400 font-semibold">{`}`}</div>
              </div>

              <div className="flex items-center justify-end pt-2">
                <button
                  onClick={() => setSelectedSlot(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#5B8CFF] text-[#080A10] font-semibold text-xs hover:bg-[#5B8CFF]/90 transition-colors"
                >
                  Got it, close preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
