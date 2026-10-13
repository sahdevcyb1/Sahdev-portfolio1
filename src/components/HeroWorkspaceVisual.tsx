import React, { useState } from 'react';
import { Play, Check, Terminal, Cpu, Sparkles, Copy } from 'lucide-react';

interface CodeTab {
  id: string;
  filename: string;
  lang: string;
  command: string;
  code: string;
  output: string;
  meta: string;
}

const TABS: CodeTab[] = [
  {
    id: 'c',
    filename: 'journey.c',
    lang: 'C',
    command: 'gcc -Wall -O2 journey.c -o app && ./app',
    code: `#include <stdio.h>

int main(void) {
    const char *developer = "Sahdev Singh Jhala";
    const char *branch = "CSE Core";
    int year = 1;

    printf("[INIT] Engineer: %s\\n", developer);
    printf("[NODE] JECRC University, Jaipur\\n");
    printf("[GOAL] Foundations: Year %d (%s)\\n", year, branch);

    return 0;
}`,
    output: `[INIT] Engineer: Sahdev Singh Jhala
[NODE] JECRC University, Jaipur
[GOAL] Foundations: Year 1 (CSE Core)
Process exited with return code 0.`,
    meta: 'GCC 13.2 · C17 Standard',
  },
  {
    id: 'python',
    filename: 'growth.py',
    lang: 'Python',
    command: 'python3 growth.py',
    code: `# Foundations built during Class 12
def roadmap():
    student = "Sahdev Singh Jhala"
    passions = ["Algorithms", "Problem Solving", "Systems"]
    
    for milestone in passions:
        yield f"Strengthening -> {milestone}"

for log in roadmap():
    print(log)`,
    output: `Strengthening -> Algorithms
Strengthening -> Problem Solving
Strengthening -> Systems`,
    meta: 'Python 3.12 · Scripting',
  },
  {
    id: 'sql',
    filename: 'query.sql',
    lang: 'SQL',
    command: 'psql -f query.sql',
    code: `-- Relational fundamentals from Class 12
SELECT 
    name, 
    education, 
    status 
FROM engineering_students
WHERE name = 'Sahdev Singh Jhala';`,
    output: `name               | education      | status
-------------------+----------------+-------------------
Sahdev Singh Jhala | B.Tech CSE Core| First Year Active
(1 row selected)`,
    meta: 'ANSI SQL · Relational Core',
  },
];

export const HeroWorkspaceVisual: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('c');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  const currentTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowTerminal(true);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow behind visual */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#5B8CFF]/20 via-[#9B7CFF]/15 to-[#38BDF8]/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

      {/* Main Terminal Shell */}
      <div className="relative rounded-2xl bg-[#11141D] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080A10]/90 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-1.5" />
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#969FB3]">
              <Cpu className="w-3.5 h-3.5 text-[#5B8CFF]" />
              <span className="text-white/80 font-medium">workspace@sahdev</span>
              <span className="text-white/30">:</span>
              <span className="text-[#5B8CFF]">~/{currentTab.filename}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.05] text-[#969FB3] border border-white/[0.06]">
              {currentTab.meta}
            </span>
            <button
              onClick={handleCopy}
              className="p-1 rounded text-[#969FB3] hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Copy code"
              aria-label="Copy code to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Tab selection row */}
        <div className="flex items-center justify-between px-3 bg-[#0C0F17] border-b border-white/[0.06] text-xs font-mono overflow-x-auto">
          <div className="flex items-center gap-1 py-1.5">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#171B26] text-white border border-white/10 shadow-sm'
                      : 'text-[#969FB3] hover:text-[#F4F6FC] hover:bg-white/[0.03]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      tab.id === 'c'
                        ? 'bg-[#5B8CFF]'
                        : tab.id === 'python'
                        ? 'bg-amber-400'
                        : 'bg-[#9B7CFF]'
                    }`}
                  />
                  <span>{tab.filename}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#5B8CFF]/15 text-[#5B8CFF] hover:bg-[#5B8CFF]/25 border border-[#5B8CFF]/30 transition-all active:scale-95 disabled:opacity-50"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Compiling...' : 'Run'}</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 font-mono text-xs text-[#F4F6FC]/90 bg-[#11141D] leading-relaxed overflow-x-auto min-h-[170px]">
          <pre className="text-left font-mono">
            <code>{currentTab.code}</code>
          </pre>
        </div>

        {/* Live Terminal Output Drawer */}
        {showTerminal && (
          <div className="bg-[#080A10] border-t border-white/[0.08] p-3.5 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-[#969FB3] mb-2 pb-1.5 border-b border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white/70">Console Output</span>
                <span className="text-white/20">|</span>
                <span className="text-white/40 text-[10px]">$ {currentTab.command}</span>
              </div>
              <span className="text-[10px] text-emerald-400/90 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SUCCESS
              </span>
            </div>
            <pre className="text-[#969FB3] text-[11px] leading-relaxed whitespace-pre-wrap font-mono">
              {currentTab.output}
            </pre>
          </div>
        )}

        {/* Footer status bar */}
        <div className="px-4 py-2 bg-[#0C0F17] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#969FB3]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Sparkles className="w-3 h-3" />
              <span>Active Workspace</span>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline text-white/60">Jaipur Node: JECRC</span>
          </div>
          <span className="text-white/50">UTF-8</span>
        </div>
      </div>

      {/* Floating Decorative Badges */}
      <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#171B26]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-lg items-center gap-2.5 text-xs font-mono animate-float-slow">
        <div className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-ping" />
        <span className="text-[#F4F6FC]">Class 10: 86.4%</span>
        <span className="text-white/20">|</span>
        <span className="text-[#969FB3]">Class 12: 75.6%</span>
      </div>

      <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#171B26]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-lg items-center gap-2 text-xs font-mono animate-float-reverse">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-white/80 font-medium">B.Tech CSE Core</span>
        <span className="text-[#9B7CFF] text-[10px] font-semibold">YR 1</span>
      </div>
    </div>
  );
};
