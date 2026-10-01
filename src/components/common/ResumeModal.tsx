import React, { useEffect } from 'react';
import { personalInfo, education, experience, skillCategories, projects, certifications } from '../../data/portfolio';
import { X, Download, Printer, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Yashwanth_P_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-700 font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-zinc-300 text-xs hidden sm:inline">/</span>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              Verified Source Records
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-700 hover:text-black bg-white hover:bg-zinc-100 rounded-lg transition-colors border border-zinc-200"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              aria-label="Download PDF"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-black bg-[#D4FF00] hover:bg-[#c9f500] rounded-lg transition-colors border border-black font-mono shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 text-zinc-500 hover:text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-white text-zinc-800">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2
                  id="resume-modal-title"
                  className="text-3xl sm:text-4xl font-display font-bold text-zinc-950 tracking-tight"
                >
                  {personalInfo.name}
                </h2>
                <p className="text-base text-zinc-700 font-medium mt-1">
                  {personalInfo.role} · {personalInfo.titleTag}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-zinc-600 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {personalInfo.location}
                  </span>
                  <span>·</span>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-black">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    {personalInfo.email}
                  </a>
                  <span>·</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-black">
                    <Phone className="w-3.5 h-3.5 text-zinc-500" />
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="text-xs text-zinc-500 font-mono md:text-right">
                <div>github.com/Yashwanth-P-999</div>
                <div>linkedin.com/in/yashwanth-p-24392936b</div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-semibold mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-zinc-900" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-semibold text-zinc-950 text-sm sm:text-base">
                      {edu.institution}
                    </div>
                    <div className="text-xs font-mono text-zinc-500">{edu.duration}</div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-zinc-600 mt-1">
                    <span className="text-zinc-800 font-medium">{edu.degree}</span>
                    <span className="text-zinc-950 font-mono font-bold">
                      {edu.scoreLabel}: {edu.scoreValue}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-zinc-900" />
              Professional Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-semibold text-zinc-950 text-sm sm:text-base">
                      {exp.role} <span className="text-zinc-600">· {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-500">{exp.duration}</div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-700">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-zinc-200 flex flex-wrap gap-2 text-xs font-mono">
                    {exp.technologies.map((t) => (
                      <span key={t} className="bg-white px-2 py-0.5 rounded border border-zinc-200 text-zinc-800 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-semibold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-zinc-900" />
              Key Projects
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-950 text-sm">{proj.title}</span>
                    {proj.status && (
                      <span className="text-xs text-amber-700 font-mono font-medium">[{proj.status}]</span>
                    )}
                  </div>
                  <div className="text-xs text-zinc-600 font-mono mt-1">
                    {proj.technologies.join(' · ')}
                  </div>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-semibold mb-3">
              Technical &amp; Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="text-zinc-900 font-semibold mb-1 text-xs font-mono">
                    {cat.title}
                  </div>
                  <div className="text-zinc-600 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-zinc-900" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="font-semibold text-zinc-950 block">{cert.title}</span>
                  <span className="text-zinc-600 font-mono mt-0.5 block">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 bg-zinc-50">
          <div className="text-xs text-zinc-500 font-mono">
            File Location: /public/resume.pdf
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-700 hover:text-black bg-white hover:bg-zinc-100 rounded-lg transition-colors border border-zinc-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
