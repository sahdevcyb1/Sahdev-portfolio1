import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { socials } = PORTFOLIO_DATA;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${socials.emailPlaceholder}?subject=${encodeURIComponent(
      formSubject || 'Connecting from Portfolio'
    )}&body=${encodeURIComponent(formMessage)}`;
    window.location.href = mailto;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141D] border border-white/10 text-xs font-mono text-[#5B8CFF]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8CFF]" />
              <span>LET&apos;S CONNECT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F4F6FC] tracking-tight">
              Good things start with a conversation.
            </h2>

            <p className="text-base sm:text-lg text-[#969FB3] max-w-2xl mx-auto leading-relaxed">
              I&apos;m at the beginning of my journey in computer science, always looking to learn, connect, and explore new ideas.
            </p>
          </div>

          {/* Notice banner about customizable placeholders */}
          <div className="mb-10 p-4 rounded-xl bg-[#171B26] border border-[#5B8CFF]/20 flex items-start gap-3 text-xs text-[#969FB3]">
            <AlertCircle className="w-4 h-4 text-[#5B8CFF] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Customization Notice:</span> The links below use verified placeholders (<code className="text-[#5B8CFF]">YOUR_EMAIL</code>, <code className="text-[#5B8CFF]">YOUR_LINKEDIN_URL</code>, <code className="text-[#5B8CFF]">YOUR_GITHUB_URL</code>). You can easily update them with your actual profiles in <code className="text-white font-mono">src/data/portfolioData.ts</code>.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* 1. Email Card */}
            <div className="rounded-2xl p-6 bg-[#11141D] border border-white/10 hover:border-[#5B8CFF]/50 transition-all flex flex-col justify-between group shadow-card">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#5B8CFF] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#969FB3] uppercase tracking-wider">
                    DIRECT EMAIL
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mt-1">
                    {socials.displayEmail}
                  </h3>
                </div>
                <p className="text-xs text-[#969FB3]">
                  Reach out for university collaborations, mentorship, or internships.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2">
                <a
                  href={`mailto:${socials.emailPlaceholder}`}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-medium bg-[#5B8CFF]/15 text-[#5B8CFF] hover:bg-[#5B8CFF]/25 border border-[#5B8CFF]/30 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(socials.emailPlaceholder, 'email')}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-[#969FB3] hover:text-white border border-white/[0.06] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email placeholder"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 2. LinkedIn Card */}
            <div className="rounded-2xl p-6 bg-[#11141D] border border-white/10 hover:border-[#9B7CFF]/50 transition-all flex flex-col justify-between group shadow-card">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#9B7CFF] group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#969FB3] uppercase tracking-wider">
                    PROFESSIONAL NETWORK
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mt-1 truncate">
                    {socials.displayLinkedin}
                  </h3>
                </div>
                <p className="text-xs text-[#969FB3]">
                  Connect on LinkedIn to follow my student milestones and future tech journey.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2">
                <a
                  href={socials.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-medium bg-[#9B7CFF]/15 text-[#9B7CFF] hover:bg-[#9B7CFF]/25 border border-[#9B7CFF]/30 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(socials.linkedinPlaceholder, 'linkedin')}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-[#969FB3] hover:text-white border border-white/[0.06] transition-colors"
                  title="Copy LinkedIn URL"
                  aria-label="Copy LinkedIn URL"
                >
                  {copiedType === 'linkedin' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 3. GitHub Card */}
            <div className="rounded-2xl p-6 bg-[#11141D] border border-white/10 hover:border-[#38BDF8]/50 transition-all flex flex-col justify-between group shadow-card">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#38BDF8] group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#969FB3] uppercase tracking-wider">
                    CODE REPOSITORIES
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mt-1 truncate">
                    {socials.displayGithub}
                  </h3>
                </div>
                <p className="text-xs text-[#969FB3]">
                  Follow open-source experiments, C labs, and Python algorithmic exercises.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2">
                <a
                  href={socials.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-medium bg-[#38BDF8]/15 text-[#38BDF8] hover:bg-[#38BDF8]/25 border border-[#38BDF8]/30 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(socials.githubPlaceholder, 'github')}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-[#969FB3] hover:text-white border border-white/[0.06] transition-colors"
                  title="Copy GitHub URL"
                  aria-label="Copy GitHub URL"
                >
                  {copiedType === 'github' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Message Composer Form */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#11141D] border border-white/10 shadow-card">
            <div className="max-w-xl mx-auto space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-heading font-bold text-white">
                  Send a Quick Note
                </h3>
                <p className="text-xs sm:text-sm text-[#969FB3]">
                  Have advice, project feedback, or an inquiry? Draft a note below.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#969FB3] mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Hello Sahdev / Connecting from Portfolio"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080A10] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#5B8CFF] focus:ring-1 focus:ring-[#5B8CFF]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#969FB3] mb-1.5">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Write your note or question here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080A10] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#5B8CFF] focus:ring-1 focus:ring-[#5B8CFF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5B8CFF] text-[#080A10] font-semibold text-sm hover:bg-[#5B8CFF]/90 transition-all shadow-glow-sm active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft in Email Client</span>
                </button>
              </form>

              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-xs text-emerald-400">
                  Ready to send! Opened your default email app with the draft.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
