import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { homeContent, navItems } from '../data/content';
import s from './HomeSection.module.css';

export default function HomeSection() {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={s.hero}
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className={s.gridOverlay} />

      <div className={s.heroContent}>
        <div className={s.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={s.statusBadge}
          >
            <span className={s.statusDot} />
            <span className={s.statusText}>Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={s.heroName}
          >
            {homeContent.name.split(' ')[0]}
            <br />
            <span className="gradient-text">{homeContent.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={s.heroTitle}
          >
            {homeContent.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={s.heroIntro}
          >
            {homeContent.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={s.ctaRow}
          >
            <button
              onClick={() => handleNavClick('professional')}
              className="btn-primary"
            >
              <FileText size={18} />
              View Resume
            </button>
            <a
              href={homeContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={homeContent.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={s.quickNav}
          >
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={s.quickNavChip}
              >
                {item.label}
                <ArrowRight size={14} className={s.quickNavArrow} />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => handleNavClick('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={s.scrollIndicator}
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight size={24} className={s.scrollArrow} />
        </motion.div>
      </motion.button>
    </section>
  );
}
