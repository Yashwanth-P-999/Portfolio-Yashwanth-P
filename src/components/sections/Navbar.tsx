import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolio';
import { Menu, X, FileText, ArrowUpRight, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', ...navItems.map((item) => item.href.substring(1))];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E8EC] py-3.5 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs py-4.5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Wix Studio style logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2.5 text-base sm:text-lg font-display font-extrabold tracking-tight text-black"
          >
            <div className="w-5 h-5 bg-black rounded-xs flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-[#D4FF00]" />
            </div>
            <span className="tracking-tighter uppercase font-black text-sm sm:text-base">
              {personalInfo.name}
            </span>
          </a>

          {/* Center: Navigation Links with clean geometric sans */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-xs font-sans tracking-wide transition-colors py-1 ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-[#66666E] hover:text-black font-medium'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Status indicator */}
            {personalInfo.status.availableForOpportunities && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F4F6] border border-[#E8E8EC] text-[11px] font-mono text-black font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4FF00] border border-black/30" />
                <span className="text-[11px] tracking-tight">Available</span>
              </div>
            )}

            {/* Wix Studio high-contrast CTA button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold text-white bg-black hover:bg-[#D4FF00] hover:text-black rounded-xs transition-all duration-150 uppercase tracking-wider font-mono shadow-xs active:scale-95"
            >
              <span>Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-black hover:bg-zinc-100 rounded-sm transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-[#E8E8EC] p-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center justify-between text-sm py-2.5 border-b border-zinc-100 ${
                    isActive ? 'text-black font-bold' : 'text-zinc-600'
                  }`}
                >
                  <span className="font-display font-medium tracking-tight">{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF00] rounded-xs transition-colors flex items-center justify-center gap-2 border border-black shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
