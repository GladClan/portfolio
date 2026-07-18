export interface NavItem {
  id: string;
  label: string;
}

export interface HomeContent {
  name: string;
  title: string;
  intro: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface AboutContent {
  biography: string;
  education: { institution: string; degree: string; year: string; details: string }[];
  interests: string[];
  goals: string[];
  timeline: TimelineEvent[];
}

export interface Principle {
  id: string;
  title: string;
  icon: string;
  reflection: string;
  examples: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  challenges: string;
  lessons: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  details: string;
}

export interface ResumeContent {
  summary: string;
  pdfUrl: string;
}

export interface ProfessionalContent {
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  resume: ResumeContent;
}

export interface SpiritualMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Scripture {
  reference: string;
  text: string;
  reflection: string;
}

export interface Reflection {
  title: string;
  body: string;
}

export interface SpiritualContent {
  milestones: SpiritualMilestone[];
  scriptures: Scripture[];
  reflections: Reflection[];
  personalGrowth: string;
}

export interface FaithTopic {
  title: string;
  body: string;
}

export interface FaithContent {
  intro: string;
  topics: FaithTopic[];
}

export interface EthicalContent {
  intro: string;
  principles: { title: string; body: string }[];
  examples: { title: string; body: string }[];
}
