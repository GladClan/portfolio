import { Shield, Eye, Scale, ClipboardCheck, AlertTriangle, type LucideIcon, MessagesSquare, MessageSquare, SearchCheck } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { ethicalContent } from '../data/content';
import s from './EthicsSection.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { body } from 'framer-motion/client';

const principleIcons: LucideIcon[] = [Shield, Eye, ClipboardCheck, Scale];

type Tab = 'information' | 'discussion' | 'principles' | 'alternative';

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [ 
  { id: 'information', label: 'Informational', icon: AlertTriangle },
  { id: 'discussion', label: 'Discussion', icon: MessageSquare },
  { id: 'principles', label: 'Principles', icon: Scale },
  { id: 'alternative', label: 'Alternative', icon: SearchCheck },
];

export default function EthicsSection() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    const el = document.getElementById('reflection-content');
    if (el && el.getBoundingClientRect().top < 0)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <Section id="ethics" className="surface-bg">
      <SectionHeading
        eyebrow="The AWS Kiro Incident"
        title="Ethical Responsibility"
        subtitle={ethicalContent.intro}
      />

      <div id='ethics-content'>
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
              { activeTab === 'information' && <InformationalSection /> }
              { activeTab === 'discussion' && <DiscussionSection /> }
              { activeTab === 'principles' && <PrinciplesSection /> }
              { activeTab === 'alternative' && <AlternativeSection /> }
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}


function InformationalSection() {
  return (
    <div className={s.blocksGrid}>
      {ethicalContent.information.map((p, i) => {
        const Icon = principleIcons[i % principleIcons.length];
        return (
          <Card key={i} delay={i * 0.1}>
            <div className={s.blockCard}>
              <div className={s.blockIconWrap}>
                <Icon size={24} />
              </div>
              <div>
                <h3 className={s.blockTitle}>{p.title}</h3>
                <ul>
                  {p.body.map((item, i) => 
                    <li key={i} className={s.blockBody}>{item}</li>
                  )}
                </ul>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function DiscussionSection() {
  return (
      <div className={s.startBlock}>
        <Reveal>
          <div className={s.discussionHeading}>
            <MessagesSquare size={48} />
            <h3 className={s.discussionTitle}>Discussion: {ethicalContent.topic}</h3>
          </div>
        </Reveal>
        <div className={s.contentGrid}>
          {ethicalContent.discussionPoints.map((dp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className={s.surfaceCard}>
                <h4 className={s.exampleTitle}>{dp.title}</h4>
                <p className={s.exampleBody}>{dp.body}</p>
                {dp.references.length > 0 && (
                  <div className={s.referencesBlock}>
                    <p className={s.referencesLabel}>References</p>
                    <ul className={s.referencesList}>
                      {dp.references.map((ref, i) => (
                        <li key={ref.link} className={s.referencesItem}>
                          <a
                            id={`reference-${i}`}
                            className={s.referenceLink}
                            target="_blank"
                            rel="noreferrer"
                            href={ref.link}
                          >
                            {ref.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
  );
}

function PrinciplesSection() {
  return (
      <div className={s.startBlock}>
        <Reveal>
          <div className={s.discussionHeading}>
            <Scale size={32} />
            <h3 className={s.discussionTitle}>What is the principle here?</h3>
          </div>
        </Reveal>

        <div className={s.contentGrid}>
          {ethicalContent.principles.map((principle, i) => (
            <Reveal key={principle.handle} delay={i * 0.1}>
              <article className={s.surfaceCard}>
                <div className={s.principleIndex}>{String(i + 1).padStart(2, '0')}</div>
                <h4 className={s.blockTitle}>{principle.handle}</h4>
                <p className={s.principleQuestion}>{principle.question}</p>
                <p className={s.exampleBody}>{principle.listOpener}</p>
                <ul className={s.principleList}>
                  {principle.listItems.map((item) => (
                    <li key={item} className={s.principleListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={s.exampleBody}>{principle.close}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
  );
}

function AlternativeSection() {
  return (
      <div className={s.startBlock}>
        <Reveal>
          <div className={s.discussionHeading}>
            <SearchCheck size={32} />
            <h3 className={s.discussionTitle}>What else could have been done?</h3>
          </div>
        </Reveal>

        <Reveal>
          <article className={s.surfaceCard}>
            {ethicalContent.alternateSuggestion.map((para, i) => (
                  <p key={`paragraph-${i}`} className={s.discussionBody}>{para}</p>
                ))}
          </article>
        </Reveal>
      </div>
  )
}