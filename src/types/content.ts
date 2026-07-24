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
  biography: string[];
  education: { institution: string; degree: string; year: string; details: string }[];
  interests: string[];
  goals: string[];
  timeline: TimelineEvent[];
}

export interface Principle {
  id: string;
  title: string;
  title_long: string,
  subtitle: string,
  icon: string;
  reflection: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export enum values {
  connection = "Connection",
  difference = "Making a Difference",
  creativity = "Creativity and Shared Experience"
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  lessons: string;
  growth: string;
  githubUrl?: string;
  demoUrl?: string;
  values: values[];
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
  id: string;
  reference: string;
  hyperlink: string;
  text: string;
  reflection: string;
}

export interface Song {
  id: string;
  title: string;
  link: string;
  reflection: string[];
}

export interface Talk {
  id: string;
  title: string;
  link: string;
  reflection: string[];
}

export interface SpiritualContent {
  milestones: SpiritualMilestone[];
  scriptures: Scripture[];
  songs: Song[];
  talks: Talk[];
  personalGrowth: string[];
}

export interface FaithTopic {
  title: string;
  body: string;
}

export interface FaithContent {
  intro: string;
  topics: FaithTopic[];
  conclusion: string[];
}

export interface EthicalContent {
  intro: string;
  topic: string;
  situation: { title: string; body: string[] }[];
  ethicalPrinciples: string[];
  discussionPoints: { title: string; body: string }[];
}
