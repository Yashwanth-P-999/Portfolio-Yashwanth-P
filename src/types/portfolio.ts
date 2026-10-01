export interface PersonalInfo {
  name: string;
  role: string;
  titleTag: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  status: {
    availableForOpportunities: boolean;
    currentFocus: string;
  };
}

export interface SkillItem {
  name: string;
  description: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  status?: string;
  technologies: string[];
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  implementationDetails: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  status: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  details: string;
  location: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  context: string;
  tags: string[];
}

export interface CreativeDiscipline {
  id: string;
  title: string;
  role: string;
  description: string;
  concept: string;
  visualTheme: string;
  deliverables: string[];
}
