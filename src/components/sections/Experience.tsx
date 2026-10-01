import React from 'react';
import { experience } from '../../data/portfolio';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E8E8EC]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-black font-semibold">
              <span>04</span>
              <span className="text-zinc-300">/</span>
              <span>Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black tracking-tight">
              Work &amp; Applied Roles
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#585860] max-w-md font-sans">
            Direct production contributions to machine learning, exploratory data analysis, and vision systems.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline rail */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-[2px] bg-black pointer-events-none" />

          <div className="space-y-12">
            {experience.map((item) => (
              <div key={item.id} className="relative pl-12 sm:pl-20 text-left">
                {/* Timeline Node Icon with Wix Studio Acid Lime Dot */}
                <div className="absolute left-1.5 sm:left-5.5 top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="w-5 h-5 rounded-full bg-black ring-4 ring-white shadow-xs flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                    </span>
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-xs bg-[#F9F9FB] border border-[#E8E8EC] hover:border-black transition-all duration-200 shadow-2xs hover:shadow-sm">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E8EC]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-black bg-[#D4FF00] px-2 py-0.5 rounded-2xs font-bold border border-black/20">
                          {item.status}
                        </span>
                        <span className="text-zinc-300 text-xs">/</span>
                        <span className="text-xs font-mono text-zinc-600 font-semibold">
                          Internship
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl sm:text-2xl font-display font-bold text-black tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-zinc-800 mt-0.5 font-sans">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-600 space-y-1 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-black font-bold">
                      Key Technical Responsibilities
                    </div>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 leading-relaxed font-sans">
                          <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-6 pt-5 border-t border-[#E8E8EC]">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5 flex items-center gap-2 font-bold">
                      <Terminal className="w-3.5 h-3.5 text-black" />
                      Technologies Applied
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-2xs bg-white border border-[#E8E8EC] text-black font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
