import { Shield, Eye, Scale, ClipboardCheck, AlertTriangle, type LucideIcon } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { ethicalContent } from '../data/content';
import s from './EthicsSection.module.css';

const principleIcons: LucideIcon[] = [Shield, Eye, Scale, ClipboardCheck];

export default function EthicsSection() {
  return (
    <Section id="ethics" className="surface-bg">
      <SectionHeading
        eyebrow="Doing right by users"
        title="Ethical Responsibility"
        subtitle={ethicalContent.intro}
      />

      <div className={s.principlesGrid}>
        {ethicalContent.principles.map((p, i) => {
          const Icon = principleIcons[i % principleIcons.length];
          return (
            <Card key={i} delay={i * 0.1}>
              <div className={s.principleCard}>
                <div className={s.principleIconWrap}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className={s.principleTitle}>{p.title}</h3>
                  <p className={s.principleBody}>{p.body}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className={s.examplesBlock}>
        <Reveal>
          <div className={s.examplesHeading}>
            <AlertTriangle size={24} />
            <h3 className={s.examplesTitle}>In Practice: Real-World Examples</h3>
          </div>
        </Reveal>
        <div className={s.examplesGrid}>
          {ethicalContent.examples.map((ex, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className={s.exampleCard}>
                <h4 className={s.exampleTitle}>{ex.title}</h4>
                <p className={s.exampleBody}>{ex.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
