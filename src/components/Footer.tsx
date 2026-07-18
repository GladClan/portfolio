import { Github, Linkedin, Mail } from 'lucide-react';
import { homeContent, navItems } from '../data/content';
import s from './Footer.module.css';

export default function Footer() {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.topRow}>
          <div className={s.brandBlock}>
            <p className={s.brandName}>{homeContent.name}</p>
            <p className={s.brandTitle}>{homeContent.title}</p>
          </div>

          <div>
            <p className={s.colHeading}>Navigate</p>
            <ul className={s.navGrid}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={s.navLink}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={s.colHeading}>Connect</p>
            <div className={s.socialRow}>
              <a
                href={homeContent.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={homeContent.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${homeContent.email}`}
                className={s.socialIcon}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={s.bottomBar}>
          <p className={s.copyright}>
            Built with intention. © {new Date().getFullYear()} {homeContent.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
