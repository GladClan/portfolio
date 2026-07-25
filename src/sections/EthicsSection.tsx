import { Shield, Eye, Scale, ClipboardCheck, AlertTriangle, type LucideIcon, MessagesSquare } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { ethicalContent } from '../data/content';
import s from './EthicsSection.module.css';
// import { body } from 'framer-motion/client';

const principleIcons: LucideIcon[] = [Shield, Eye, ClipboardCheck, Scale];

export default function EthicsSection() {
  return (
    <Section id="ethics" className="surface-bg">
      <SectionHeading
        eyebrow="The AWS Kiro Incident"
        title="Ethical Responsibility"
        subtitle={ethicalContent.intro}
      />

      {/* Informational section */}
      <div className={s.blocksGrid}>
        {ethicalContent.situation.map((p, i) => {
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

      {/* Discussion section */}
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

      {/* Principles section */}
      <div className={s.startBlock}>
        <Reveal>
          <div className={s.discussionHeading}>
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

      {/* Alternative solution section */}
      <div className={s.startBlock}>
        <Reveal>
          <div className={s.discussionHeading}>
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
    </Section>
  );
}