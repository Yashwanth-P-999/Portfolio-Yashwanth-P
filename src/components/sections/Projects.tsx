import React, { useState } from 'react';
import { projects } from '../../data/portfolio';
import { Project } from '../../types/portfolio';
import { ArrowUpRight, CheckCircle2, Cpu, Database } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E8E8EC]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-black font-semibold">
              <span>03</span>
              <span className="text-zinc-300">/</span>
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black tracking-tight">
              Featured Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#585860] max-w-md font-sans">
            Full-stack web applications and machine learning architectures built with production rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => {
            const isHovered = hoveredProject === project.id;
            const isLending = project.id === 'corporate-lending';

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                className={`group cursor-pointer rounded-xs flex flex-col justify-between overflow-hidden text-left transition-all duration-200 border ${
                  isHovered
                    ? 'bg-white border-black shadow-lg -translate-y-1'
                    : 'bg-[#F9F9FB] border-[#E8E8EC] hover:border-zinc-400 shadow-2xs'
                }`}
              >
                {/* Visual Architecture Graphic Area (Wix Studio style light diagram) */}
                <div className="relative h-48 sm:h-56 bg-[#F0F0F4] border-b border-[#E8E8EC] overflow-hidden flex items-center justify-center p-6">
                  {/* Subtle Grid in background */}
                  <div className="absolute inset-0 bg-wix-dots opacity-60 pointer-events-none" />

                  {isLending ? (
                    /* Dynamic Corporate Lending Architecture Diagram */
                    <div className="relative z-10 w-full max-w-md">
                      <div className="flex items-center justify-between text-[11px] font-mono text-black mb-3">
                        <span className="flex items-center gap-1.5 font-bold">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>OCR Document Ingestion</span>
                        </span>
                        <span className="text-zinc-400">→</span>
                        <span className="flex items-center gap-1.5 font-bold">
                          <Database className="w-3.5 h-3.5" />
                          <span>SHAP Risk Engine</span>
                        </span>
                        <span className="text-zinc-400">→</span>
                        <span className="font-bold">FastAPI</span>
                      </div>

                      {/* Visual Flow Bars */}
                      <div className="p-3.5 rounded-2xs bg-white border border-[#E8E8EC] space-y-2 shadow-2xs">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-zinc-600">Balance Sheet Parse</span>
                          <span className="text-black font-bold">99.2% Accuracy</span>
                        </div>
                        <div className="w-full bg-[#E8E8EC] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-black h-full w-[85%] transition-all duration-300 group-hover:w-[94%]" />
                        </div>
                        <div className="flex justify-between text-[11px] font-mono pt-1">
                          <span className="text-zinc-600">SHAP Feature Attribution</span>
                          <span className="text-black font-bold">Explainable AI</span>
                        </div>
                        <div className="w-full bg-[#E8E8EC] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#D4FF00] h-full w-[78%] transition-all duration-300 group-hover:w-[88%]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Dynamic Expense Tracker Architecture Diagram */
                    <div className="relative z-10 w-full max-w-md">
                      <div className="flex items-center justify-between text-[11px] font-mono text-black mb-3 font-bold">
                        <span>React.js Frontend</span>
                        <span className="text-zinc-400 font-normal">⇄ REST API ⇄</span>
                        <span>Flask Server</span>
                      </div>

                      <div className="p-3.5 rounded-2xs bg-white border border-[#E8E8EC] space-y-2.5 shadow-2xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-black font-mono font-bold">Monthly Budget Summary</span>
                          <span className="text-black font-mono font-bold text-[11px] px-1.5 py-0.5 bg-[#D4FF00] rounded-2xs border border-black/20">
                            Active
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1">
                          <div className="p-1.5 bg-[#F9F9FB] rounded-2xs border border-[#E8E8EC]">
                            <span className="text-zinc-500 block">Category</span>
                            <span className="text-black font-bold">Utilities</span>
                          </div>
                          <div className="p-1.5 bg-[#F9F9FB] rounded-2xs border border-[#E8E8EC]">
                            <span className="text-zinc-500 block">Status</span>
                            <span className="text-black font-bold">Balanced</span>
                          </div>
                          <div className="p-1.5 bg-[#F9F9FB] rounded-2xs border border-[#E8E8EC]">
                            <span className="text-zinc-500 block">Latency</span>
                            <span className="text-black font-bold">&lt; 35ms</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Corner Status indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black text-[11px] font-mono text-black font-bold shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] border border-black/40 animate-pulse" />
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#66666E] font-medium">
                          {project.category}
                        </span>
                        <h3 className="mt-1 text-xl sm:text-2xl font-display font-bold text-black group-hover:text-black transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-black text-white group-hover:bg-[#D4FF00] group-hover:text-black transition-colors flex items-center justify-center shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-[#585860] leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>

                    {/* Features list */}
                    <ul className="mt-4 space-y-2">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-sans">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags & Action Footer */}
                  <div className="pt-4 border-t border-[#E8E8EC]">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-2xs bg-[#F0F0F4] border border-[#E8E8EC] text-[11px] text-black font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-zinc-500 font-mono">
                        Click card for complete architecture
                      </span>
                      <span className="text-xs font-mono font-bold text-black uppercase group-hover:underline">
                        Explore Blueprint →
                      </span>
                    </div>
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
