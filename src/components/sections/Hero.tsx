import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 overflow-hidden bg-white bg-wix-dots border-b border-[#E8E8EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Label */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8E8EC]">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-black">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] border border-black/40" />
            <span className="font-semibold">{personalInfo.role}</span>
            <span className="text-zinc-300">/</span>
            <span className="text-[#66666E]">{personalInfo.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black hover:text-[#66666E] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-300">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black hover:text-[#66666E] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Massive Wix Studio Typography Headline */}
        <div className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-left">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-display font-extrabold text-black tracking-[-0.04em] leading-[0.94] max-w-5xl">
            {personalInfo.name}
          </h1>

          <div className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-black tracking-tight max-w-4xl">
            Computer Science Engineer · Full-Stack Developer &amp; Machine Learning
          </div>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#585860] leading-relaxed max-w-3xl font-sans">
            {personalInfo.shortBio}
          </p>

          {/* Quick Action Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-black bg-white border border-black hover:bg-zinc-50 rounded-xs transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#66666E] hover:text-black border border-[#E8E8EC] hover:border-black rounded-xs transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Iconic Wix Studio High-Voltage Acid Lime Banner */}
        <div className="mt-4">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group block w-full bg-[#D4FF00] hover:bg-[#c9f500] border-2 border-black rounded-xs p-6 sm:p-10 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold block mb-1">
                  Selected Work &amp; Engineering Solutions
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-black tracking-tight block">
                  Explore Projects
                </span>
              </div>

              {/* High-contrast black circular arrow container like in Wix Studio image */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-md">
                <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
