/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from './types/portfolio';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { ProjectModal } from './components/common/ProjectModal';
import { ResumeModal } from './components/common/ResumeModal';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ExperienceSection } from './components/sections/Experience';
import { EducationSection } from './components/sections/Education';
import { CertificationsSection } from './components/sections/Certifications';
import { ContactSection } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121214] font-sans selection:bg-[#18181B] selection:text-white relative">
      {/* Subtle Desktop Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* Sticky 3-Zone Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
