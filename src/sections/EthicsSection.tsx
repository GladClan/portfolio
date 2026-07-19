import { Shield, Eye, Scale, ClipboardCheck, AlertTriangle, type LucideIcon, MessagesSquare } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { ethicalContent } from '../data/content';
import s from './EthicsSection.module.css';
import { body } from 'framer-motion/client';

const principleIcons: LucideIcon[] = [Shield, Eye, Scale, ClipboardCheck];

export default function EthicsSection() {
  return (
    <Section id="ethics" className="surface-bg">
      <SectionHeading
        eyebrow="The AWS Kiro Incident"
        title="Ethical Responsibility"
        subtitle={ethicalContent.intro}
      />

      <div className={s.principlesGrid}>
        {ethicalContent.situation.map((p, i) => {
          const Icon = principleIcons[i % principleIcons.length];
          return (
            <Card key={i} delay={i * 0.1}>
              <div className={s.principleCard}>
                <div className={s.principleIconWrap}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className={s.principleTitle}>{p.title}</h3>
                  <ul>
                    {p.body.map((item, i) => 
                      <li key={i} className={s.principleBody}>{item}</li>
                    )}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className={s.examplesBlock}>
        <Reveal>
          <div className={s.examplesHeading}>
            <MessagesSquare size={48} />
            <h3 className={s.examplesTitle}>Discussion: {ethicalContent.topic}</h3>
          </div>
        </Reveal>
        <div className={s.examplesGrid}>
          {ethicalContent.discussionPoints.map((dp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className={s.exampleCard}>
                <h4 className={s.exampleTitle}>{dp.title}</h4>
                <p className={s.exampleBody}>{dp.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
