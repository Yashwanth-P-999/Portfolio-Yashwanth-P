import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white border-t border-[#E8E8EC] py-12 text-[#585860]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-4 h-4 bg-black rounded-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
              </div>
              <span className="text-base font-display font-extrabold text-black tracking-tight uppercase">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#8E8E98] font-mono mt-1">
              {personalInfo.role} · Full-Stack Developer &amp; Machine Learning
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#D4FF00] transition-colors flex items-center gap-1.5 font-bold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#D4FF00] transition-colors flex items-center gap-1.5 font-bold"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-black hover:text-[#D4FF00] transition-colors flex items-center gap-1.5 font-bold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Attribution & Back to top */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#8E8E98]">
            <span>Designed &amp; Built with React</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="w-8 h-8 rounded-full bg-black text-white hover:bg-[#D4FF00] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
