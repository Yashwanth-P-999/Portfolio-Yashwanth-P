import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Code, Brain, Eye, Database } from 'lucide-react';

export const About: React.FC = () => {
  const skillHighlights = [
    {
      title: 'Full-Stack Web Development',
      icon: Code,
      description:
        'Architecting reactive, type-safe client applications with React.js and TypeScript, connected to performant backend services with FastAPI and Flask REST APIs.',
      technologies: ['React.js', 'TypeScript', 'FastAPI', 'Flask', 'REST APIs', 'Tailwind CSS'],
    },
    {
      title: 'Applied Machine Learning',
      icon: Brain,
      description:
        'Developing, evaluating, and deploying machine learning models for predictive analysis, financial risk evaluation, and automated decision systems.',
      technologies: ['Python', 'Scikit-learn', 'SHAP (Explainable AI)', 'Pandas', 'NumPy'],
    },
    {
      title: 'Computer Vision & OCR',
      icon: Eye,
      description:
        'Engineering document intelligence pipelines using Optical Character Recognition (OCR) for automated parsing of unstructured financial balance sheets and images.',
      technologies: ['OCR Pipelines', 'Document Ingestion', 'Image Preprocessing', 'Feature Extraction'],
    },
    {
      title: 'Databases & System Fundamentals',
      icon: Database,
      description:
        'Designing normalized relational database schemas, transactional integrity, and core computing foundations including algorithms and operating systems.',
      technologies: ['PostgreSQL', 'MySQL', 'Data Structures & Algorithms', 'DBMS', 'Linux'],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          category="Biography & Profile"
          title="Engineering Intelligent Web Systems and Predictive Architectures"
          subtitle="A disciplined Computer Science Engineer specializing in full-stack web technologies, machine learning workflows, and automated vision pipelines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Prose focusing strictly on engineering capabilities */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4 text-base sm:text-lg text-[#585860] leading-relaxed font-sans">
              <p>
                I am a Computer Science Engineer pursuing my Bachelor of Engineering at{' '}
                <strong className="text-black font-semibold">SJB Institute of Technology</strong>, Bangalore. My work focuses on building reliable full-stack applications and integrating machine learning solutions to solve practical engineering challenges.
              </p>
              <p>
                As a{' '}
                <strong className="text-black font-semibold">Machine Learning Intern</strong> at{' '}
                <strong className="text-black">Young Mind Creations</strong>, I develop predictive models, perform exploratory data analysis, and implement computer vision and OCR pipelines that bridge statistical models with backend REST APIs.
              </p>
              <p>
                My development process emphasizes modular design, type safety, and transparent systems. From architecting explainable AI credit risk models with SHAP to developing responsive personal finance management tools, I strive to build software that is both technically sound and intuitive to use.
              </p>
            </div>

            {/* Core Competencies Quick Summary */}
            <div className="pt-6 border-t border-[#E8E8EC]">
              <div className="text-xs font-mono uppercase tracking-widest text-black font-semibold mb-3">
                Key Areas of Focus
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-black">
                {[
                  'Full-Stack Architecture',
                  'Predictive Modeling',
                  'Computer Vision & OCR',
                  'RESTful API Design',
                  'Explainable AI (SHAP)',
                  'Relational Databases',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-2xs bg-[#F9F9FB] border border-[#E8E8EC] text-black font-medium hover:border-black transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skill Highlight Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillHighlights.map((skill, index) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group p-6 rounded-xs bg-[#F9F9FB] border border-[#E8E8EC] hover:border-black transition-all duration-150 text-left shadow-2xs hover:shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#E8E8EC]">
                      <div className="w-8 h-8 rounded-2xs bg-black flex items-center justify-center text-white group-hover:bg-[#D4FF00] group-hover:text-black transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                    </div>

                    <h3 className="mt-4 text-base font-display font-bold text-black tracking-tight">
                      {skill.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#585860] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E8E8EC]">
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-black">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-2xs bg-white border border-[#E8E8EC] text-black font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
