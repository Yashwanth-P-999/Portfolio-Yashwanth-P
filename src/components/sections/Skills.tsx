import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { Code, Globe, Database, Terminal, Cpu, Users, Sparkles, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSkillInfo, setActiveSkillInfo] = useState<{ name: string; description: string } | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return Code;
      case 'web-apis':
        return Globe;
      case 'databases':
        return Database;
      case 'tools':
        return Terminal;
      case 'core':
        return Cpu;
      case 'soft':
        return Users;
      default:
        return Sparkles;
    }
  };

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F9F9FB] relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E8E8EC]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-black font-semibold">
              <span>02</span>
              <span className="text-zinc-300">/</span>
              <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black tracking-tight">
              Core Competencies
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-sm border border-[#E8E8EC] shadow-2xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-2xs ${
                activeCategory === 'all'
                  ? 'bg-black text-white font-bold'
                  : 'text-[#66666E] hover:text-black hover:bg-zinc-100 font-medium'
              }`}
            >
              All (6)
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-2.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-2xs whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-black text-white font-bold'
                    : 'text-[#66666E] hover:text-black hover:bg-zinc-100 font-medium'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Compact, Highly Aesthetic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCategories.map((cat, idx) => {
            const IconComp = getCategoryIcon(cat.id);
            return (
              <div
                key={cat.id}
                className="group p-6 rounded-xs bg-white border border-[#E8E8EC] hover:border-black transition-all duration-150 shadow-2xs hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F4]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-2xs bg-black flex items-center justify-center text-white">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-display font-bold text-black tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Tokens Cloud */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const isHighlighted = skill.highlight;
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => setActiveSkillInfo(skill)}
                          onMouseEnter={() => setActiveSkillInfo(skill)}
                          className={`px-3 py-1.5 rounded-2xs text-xs font-mono transition-all duration-100 border text-left cursor-pointer ${
                            isHighlighted
                              ? 'bg-black text-white border-black hover:bg-[#D4FF00] hover:text-black hover:border-black font-semibold'
                              : 'bg-[#F9F9FB] text-zinc-800 border-[#E8E8EC] hover:border-black hover:bg-white'
                          }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom count indicator */}
                <div className="mt-5 pt-3 border-t border-[#F0F0F4] flex items-center justify-between text-[11px] font-mono text-[#8E8E98]">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-black font-medium group-hover:underline">
                    Hover for details
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Detail Strip when hovering a skill */}
        {activeSkillInfo && (
          <div className="mt-6 p-4 rounded-xs bg-white border-2 border-black flex items-center justify-between gap-4 animate-in fade-in duration-100 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-2xs bg-[#D4FF00] text-black font-mono font-bold text-xs uppercase border border-black/30">
                {activeSkillInfo.name}
              </span>
              <p className="text-xs sm:text-sm text-zinc-800 font-sans">
                {activeSkillInfo.description}
              </p>
            </div>
            <button
              onClick={() => setActiveSkillInfo(null)}
              className="text-xs font-mono text-zinc-400 hover:text-black shrink-0 px-2 py-1"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
