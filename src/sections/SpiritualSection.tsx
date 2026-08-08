import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Milestone, BookOpen, PenLine, Sprout, Quote, type LucideIcon, ExternalLink, Music2, Music4, ChevronDown, SunMedium } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { spiritualContent } from '../data/content';
import s from './SpiritualSection.module.css';

type Tab = 'milestones' | 'scriptures' | 'talks' | 'music' | 'growth';

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: 'milestones', label: 'Milestones', icon: Milestone },
  { id: 'scriptures', label: 'Scriptures', icon: BookOpen },
  { id: 'talks', label: 'Talks', icon: PenLine },
  { id: 'music', label: 'Music', icon: Music4 },
  { id: 'growth', label: 'Growth', icon: Sprout },
];

export default function SpiritualSection() {
  const [activeTab, setActiveTab] = useState<Tab>('milestones');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    const el = document.getElementById('spiritual-content');
    if (el && el.getBoundingClientRect().top < 0)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Section id="spiritual" className="surface-bg">
      <SectionHeading
        eyebrow="My walk with God"
        title="Spiritual Portfolio"
        subtitle="The milestones, scriptures, and reflections that shape my faith journey alongside my career."
      />

      <div id='spiritual-content'>
        <div className={s.tabs}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${s.tab} ${activeTab === tab.id ? s.tabActive : ''}`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className={s.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'milestones' && <MilestonesTab />}
              {activeTab === 'scriptures' && <ScripturesTab />}
              {activeTab === 'talks' && <TalksTab />}
              {activeTab === 'music' && <SongsTab />}
              {activeTab === 'growth' && <GrowthTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function MilestonesTab() {
  return (
    <div className={s.milestonesList}>
      {spiritualContent.milestones.map((m, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <div className={s.milestoneRow}>
            <div className={s.milestoneIconCol}>
              <div className={s.milestoneIconWrap}>
                <Milestone size={18} />
              </div>
              {i < spiritualContent.milestones.length - 1 && (
                <div className={s.milestoneLine} />
              )}
            </div>
            <Card hover={false} className={s.milestoneCard}>
              <p className={s.milestoneYear}>{m.year}</p>
              <h3 className={s.milestoneTitle}>{m.title}</h3>
              <p className={s.milestoneDesc}>{m.description}</p>
            </Card>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ScripturesTab() {
  const [expanded, setExpanded] = useState<string | null>();
  return (
    <div className={s.scripturesGrid}>
      {spiritualContent.scriptures.map((scripture, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className={s.scriptureHeader}>
            <Quote size={24} />
            <p>{scripture.reference}</p>
            <a
              href={scripture.hyperlink}
              target="_blank"
              rel="noopener noreferrer"
              className={s.iconLink}
              aria-label={`${scripture.reference}`}
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <blockquote className={s.scriptureText}>
            {scripture.text}
          </blockquote>
          {/* <p className={s.scriptureReflection}>{scripture.reflection}</p> */}
          <button
            className={s.expandButton}
            onClick={() => setExpanded(expanded === scripture.id ? null : scripture.id)}
          >
            {expanded === scripture.id ? 'Hide reflection' : 'Show reflection'}
            <ChevronDown
              size={16}
              className={`${s.chevron} ${expanded === scripture.id ? s.chevronOpen : ''}`}
            />
          </button>
          <AnimatePresence>
            {expanded === scripture.id && 
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={s.expandContent}
              >
              <p className={s.contentBody}>{scripture.reflection}</p>
              </motion.div>
            }
          </AnimatePresence>
        </Card>
      ))}
    </div>
  );
}

function TalksTab() {
  const [expanded, setExpanded] = useState<string | null>();
  return (
    <div className={s.contentList}>
      {spiritualContent.talks.map((r, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className={s.contentHeader}>
            <PenLine size={20} />
            <h3 className={s.contentTitle}>{r.title}</h3>
            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.iconLink}
              aria-label={`talk-${i}`}
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <button
            className={s.expandButton}
            onClick={() => setExpanded(expanded === r.id ? null : r.id)}
          >
            {expanded === r.id ? 'Hide reflection' : 'Show reflection'}
            <ChevronDown
              size={16}
              className={`${s.chevron} ${expanded === r.id ? s.chevronOpen : ''}`}
            />
          </button>
          <AnimatePresence>
            {expanded === r.id && 
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={s.expandContent}
              >
                {
                  r.reflection.map((P, i) => 
                  <p className={s.contentBody} key={`paragraph-${i}`}>{P}</p>
                  )
                }
              </motion.div>
            }
          </AnimatePresence>
        </Card>
      ))}
    </div>
  );
}

function SongsTab() {
  const [expanded, setExpanded] = useState<string | null>();
  return (
    <div className={s.contentList}>
      {spiritualContent.songs.map((song, i) => (
        <Card key={i} delay={i * 0.1}>

          {/* Title */}
          <div className={s.contentHeader}>
            <Music2 size={20} />
            <h3 className={s.contentTitle}>{song.title}</h3>
            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.iconLink}
              aria-label={`talk-${i}`}
            >
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Embedded video */}
          <iframe
            src={song.embedLink? song.embedLink : song.link}
            title={`"YouTube video player: ${song.title}"`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={s.embeddedVideo}
          />

          {/* Show reflection */}
          <button
            className={s.expandButton}
            onClick={() => setExpanded(expanded === song.id ? null : song.id)}
          >
            {expanded === song.id ? 'Hide reflection' : 'Show reflection'}
            <ChevronDown
              size={16}
              className={`${s.chevron} ${expanded === song.id ? s.chevronOpen : ''}`}
            />
          </button>

          {/* Reflection content */}
          <AnimatePresence>
            {expanded === song.id && 
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={s.expandContent}
              >
                {song.reflection.map((text, i) => 
                  <p key={`paragraph-${i}`} className={s.contentBody}>{text}</p>
                )}
              </motion.div>
            }
          </AnimatePresence>
        </Card>
      ))}
    </div>
  );
}

function GrowthTab() {
  return (
    <div className={s.growthWrap}>
      <Card hover={false}>
        <div className={s.growthHeader}>
          <Sprout size={28} />
          <h3 className={s.growthTitle}>Personal Growth</h3>
        </div>
        {
          spiritualContent.personalGrowth.map((paragraph, i) =>
            <p key={`paragraph-${i}`} className={s.growthText}>{paragraph}</p>
          )
        }
      </Card>
    </div>
  );
}