import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FolderOpen, Award, FileText, ChevronDown, ExternalLink, Github, Lightbulb, AlertTriangle, type LucideIcon } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { professionalContent } from '../data/content';
import s from './ProfessionalSection.module.css';

type Tab = 'skills' | 'projects' | 'certifications' | 'resume';

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'resume', label: 'Resume', icon: FileText },
];

export default function ProfessionalSection() {
  const [activeTab, setActiveTab] = useState<Tab>('skills');

  return (
    <Section id="professional">
      <SectionHeading
        eyebrow="What I bring"
        title="Professional Portfolio"
        subtitle="My technical skills, the projects I have built, the certifications I have earned, and my professional summary."
      />

      <Reveal>
        <div className={s.tabs}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${s.tab} ${activeTab === tab.id ? s.tabActive : ''}`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className={s.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'skills' && <SkillsTab />}
            {activeTab === 'projects' && <ProjectsTab />}
            {activeTab === 'certifications' && <CertificationsTab />}
            {activeTab === 'resume' && <ResumeTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

function SkillsTab() {
  return (
    <div className={s.skillsGrid}>
      {professionalContent.skills.map((cat, i) => (
        <Card key={i} delay={i * 0.08}>
          <h3 className={s.skillsCategory}>{cat.category}</h3>
          <div className={s.skillsList}>
            {cat.skills.map((skill) => (
              <Badge key={skill} variant="neutral">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function ProjectsTab() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={s.projectsGrid}>
      {professionalContent.projects.map((project, i) => (
        <Reveal key={project.id} delay={i * 0.1}>
          <article className={s.projectCard}>
            <div className={s.projectHeader}>
              <h3 className={s.projectTitle}>{project.title}</h3>
              <div className={s.projectLinks}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.iconLink}
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.iconLink}
                    aria-label={`${project.title} demo`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className={s.techRow}>
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className={s.projectSection}>
              <p className={`${s.projectLabel} ${s.labelAccent}`}>Problem</p>
              <p className={s.projectText}>{project.problem}</p>
            </div>
            <div className={s.projectSection}>
              <p className={`${s.projectLabel} ${s.labelSecondary}`}>Solution</p>
              <p className={s.projectText}>{project.solution}</p>
            </div>

            <button
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              className={s.expandButton}
              aria-expanded={expanded === project.id}
            >
              {expanded === project.id ? 'Show less' : 'Show more'}
              <ChevronDown
                size={16}
                className={`${s.chevron} ${expanded === project.id ? s.chevronOpen : ''}`}
              />
            </button>

            <AnimatePresence>
              {expanded === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={s.expandContent}
                >
                  <div className={s.expandInner}>
                    <div>
                      <p className={`${s.expandLabel} ${s.labelWarning}`}>
                        <AlertTriangle size={14} />
                        Challenges
                      </p>
                      <ul className={s.projectText}>
                        {project.challenges.map((text, i) =>
                          <li key={`challenge-${i}`}>{text}</li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <p className={`${s.expandLabel} ${s.labelPrimary}`}>
                        <Lightbulb size={14} />
                        Lessons Learned
                      </p>
                      <p className={s.projectText}>{project.lessons}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function CertificationsTab() {
  return (
    <div className={s.certGrid}>
      {professionalContent.certifications.map((cert, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className={s.certIconWrap}>
            <Award size={24} />
          </div>
          <p className={s.certYear}>{cert.year}</p>
          <h3 className={s.certTitle}>{cert.title}</h3>
          <p className={s.certIssuer}>{cert.issuer}</p>
          <p className={s.certDetails}>{cert.details}</p>
        </Card>
      ))}
    </div>
  );
}

function ResumeTab() {
  return (
    <div className={s.resumeWrap}>
      <Card hover={false}>
        <div className={s.resumeHeader}>
          <FileText className={s.resumeIcon} size={28} />
          <h3 className={s.resumeHeaderTitle}>Professional Summary</h3>
        </div>
        <p className={s.resumeSummary}>
          {professionalContent.resume.summary}
        </p>
        <a
          href={professionalContent.resume.pdfUrl}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={18} />
          View Resume
        </a>
      </Card>
    </div>
  );
}
