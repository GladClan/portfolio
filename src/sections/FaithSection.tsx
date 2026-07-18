import { Sparkles, Scale, Eye, Users, type LucideIcon } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { faithContent } from '../data/content';
import s from './FaithSection.module.css';

const icons: LucideIcon[] = [Sparkles, Scale, Eye, Users];

export default function FaithSection() {
  return (
    <Section id="faith">
      <SectionHeading
        eyebrow="Where worlds meet"
        title="Faith & Software Engineering"
        subtitle={faithContent.intro}
      />

      <div className={s.grid}>
        {faithContent.topics.map((topic, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={i} delay={i * 0.12}>
              <article className={s.card}>
                <div className={s.cardHeader}>
                  <div className={s.iconWrap}>
                    <Icon size={24} />
                  </div>
                  <h3 className={s.cardTitle}>{topic.title}</h3>
                </div>
                <p className={s.cardBody}>{topic.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
