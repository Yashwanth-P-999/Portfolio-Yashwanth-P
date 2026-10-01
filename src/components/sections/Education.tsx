import React from 'react';
import { education } from '../../data/portfolio';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#F9F9FB] relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E8E8EC]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-black font-semibold">
              <span>05</span>
              <span className="text-zinc-300">/</span>
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black tracking-tight">
              Education &amp; Academic Credentials
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#585860] max-w-md font-sans">
            Formal technical degrees and competitive academic distinction in Computer Science &amp; Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => {
            const isBe = edu.id === 'sjbit';
            return (
              <div
                key={edu.id}
                className="group relative p-8 sm:p-10 rounded-xs bg-white border border-[#E8E8EC] hover:border-black transition-all duration-200 text-left flex flex-col justify-between shadow-2xs hover:shadow-sm"
              >
                <div>
                  {/* Decorative index badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F4]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-2xs bg-black text-white flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-black font-bold">
                        0{idx + 1} · {isBe ? 'Undergraduate Degree' : 'Pre-University College'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-black" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Institution & Degree */}
                  <div className="mt-6">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-black leading-snug tracking-tight">
                      {edu.institution}
                    </h3>
                    <div className="mt-1.5 text-base font-semibold text-zinc-800 font-sans">
                      {edu.degree}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-[#8E8E98] font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>

                    {/* Program details */}
                    <p className="mt-4 text-xs sm:text-sm text-[#585860] leading-relaxed font-sans">
                      {edu.details}
                    </p>
                  </div>
                </div>

                {/* Score highlight box - Prominent Wix Studio presentation */}
                <div className="mt-8 pt-6 border-t border-[#F0F0F4] flex items-end justify-between bg-[#F9F9FB] -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-xs border-t border-[#E8E8EC]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E8E98] block font-bold">
                      Verified Result
                    </span>
                    <span className="text-xs font-mono text-black font-semibold mt-0.5 block">
                      {edu.scoreLabel}
                    </span>
                  </div>
                  <div className="text-right flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl font-display font-black text-black tracking-tighter">
                      {edu.scoreValue}
                    </span>
                    {isBe && (
                      <span className="px-2 py-0.5 rounded-2xs bg-[#D4FF00] border border-black/30 text-[11px] font-mono font-bold text-black">
                        VTU
                      </span>
                    )}
                    {!isBe && (
                      <span className="px-2 py-0.5 rounded-2xs bg-[#D4FF00] border border-black/30 text-[11px] font-mono font-bold text-black">
                        Distinction
                      </span>
                    )}
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
