import React from 'react';
import { achievements } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { Users, Palette, Sparkles, Megaphone, ArrowUpRight } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Mentorship & Leadership':
        return Users;
      case 'Visual Design':
        return Palette;
      case 'Branding':
        return Sparkles;
      default:
        return Megaphone;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#0A0A0A] relative border-t border-[#181818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          category="Leadership & Creative Output"
          title="Collegiate Leadership, Mentorship & Technical Marketing"
          subtitle="Active contributions to student communities through hackathon mentorship, event visual branding, and technical content campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => {
            const IconComp = getIcon(ach.category);
            return (
              <div
                key={ach.id}
                className="group p-6 sm:p-7 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#EADCB0]/50 transition-all duration-300 text-left flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E1E1E]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#161616] border border-zinc-800 flex items-center justify-center text-[#DC5C3F]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        {ach.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#EADCB0] transition-colors leading-snug">
                    {ach.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E1E1E] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-zinc-500">
                    {ach.context}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                    {ach.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {i < ach.tags.length - 1 && <span className="text-zinc-700">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
