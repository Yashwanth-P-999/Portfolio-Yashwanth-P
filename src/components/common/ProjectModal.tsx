import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { X, CheckCircle2, Cpu, Code2, ExternalLink, Github, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden transition-all text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold">
              {project.category}
            </span>
            {project.status && (
              <>
                <span className="text-zinc-300 text-xs">/</span>
                <span className="flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {project.status}
                </span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-zinc-500 hover:text-black rounded-lg hover:bg-zinc-200 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Header Title */}
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-display font-bold text-zinc-950 leading-snug"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Matrix */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2.5 flex items-center gap-2 font-medium">
              <Code2 className="w-4 h-4 text-zinc-800" />
              Technologies &amp; Frameworks
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-zinc-800">
              {project.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="bg-white px-2.5 py-1 rounded text-zinc-800 border border-zinc-200 font-medium shadow-2xs">
                    {tech}
                  </span>
                  {i < project.technologies.length - 1 && (
                    <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2">
                Problem Statement
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2">
                Engineered Solution
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-700 mb-3 flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-zinc-900" />
              Key Capabilities &amp; Features
            </div>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Details */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2 flex items-center gap-2 font-semibold">
              <Cpu className="w-4 h-4 text-zinc-900" />
              Implementation &amp; Architecture
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-200">
              {project.implementationDetails}
            </p>
          </div>

          {/* Link status notice */}
          {(!project.githubUrl || !project.liveUrl) && (
            <div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
              <AlertCircle className="w-4 h-4 text-zinc-700 shrink-0" />
              <span>
                {project.status === 'Ongoing'
                  ? 'Active development repository. Codebase will be published upon milestone completion.'
                  : 'Source code and deployment configuration can be linked in src/data/portfolio.ts.'}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-zinc-200 bg-zinc-50">
          <div className="text-xs text-zinc-500 font-mono">
            Authored by Yashwanth P
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-800 bg-white hover:bg-zinc-100 rounded-lg transition-colors border border-zinc-300"
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[#D4FF00] hover:bg-[#c9f500] rounded-lg transition-colors border border-black font-mono shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-600 hover:text-black bg-white hover:bg-zinc-100 rounded-lg transition-colors border border-zinc-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
