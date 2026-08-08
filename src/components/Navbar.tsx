import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Linkedin, Menu, X } from 'lucide-react';
import { homeContent, navItems, professionalContent } from '../data/content';
import s from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  function ExternalLinks() {
    return (
      <div className={s.eLinks}>
        {/* Resume, GitHub, and LinkedIn links */}
        <a
          href={professionalContent.resume.pdfUrl}
          className={`${s.externalLink} ${s.Primary}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={'1rem'} />
          <span className={s.eLinkText}>View Resume</span>
        </a>
        <a
          href={homeContent.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.externalLink} ${s.Secondary}`}
        >
          <Github size={'1rem'} />
          <span className={s.eLinkText}>GitHub</span>
        </a>
        <a
          href={homeContent.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.externalLink} ${s.Secondary}`}
        >
          <Linkedin size={'1rem'} />
          <span className={s.eLinkText}>LinkedIn</span>
        </a>
      </div>
    )
  }

  return (
    <>
      <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
        <nav className={`section-container ${s.nav}`}>
          <button
            onClick={() => handleNavClick('home')}
            className={s.logo}
            aria-label="Go to home"
          >
            IG<span className={s.logoDot}>.</span>
          </button>

          <ul className={s.desktopNav}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`${s.navButton} ${activeSection === item.id ? s.navButtonActive : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <ExternalLinks />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={s.mobileToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={s.mobileMenu}
          >
            <ul className={s.mobileNavList}>
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`${s.mobileNavButton} ${activeSection === item.id ? s.mobileNavButtonActive : ''}`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
