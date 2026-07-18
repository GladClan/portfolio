import { Sparkles, ShieldCheck, HeartHandshake, type LucideIcon } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { principles } from '../data/content';
import s from './PrinciplesSection.module.css';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
};

export default function PrinciplesSection() {
  return (
    <Section id="principles" className="surface-bg">
      <SectionHeading
        eyebrow="What guides me"
        title="My Guiding Principles"
        subtitle="Three convictions that shape how I write code, lead projects, and treat the people I work with."
      />

      <div className={s.grid}>
        {principles.map((principle, i) => {
          const Icon = iconMap[principle.icon] ?? Sparkles;
          return (
            <Reveal key={principle.id} delay={i * 0.15}>
              <article className={s.card}>
                <div className={s.iconWrap}>
                  <Icon size={28} />
                </div>
                <h3 className={s.cardTitle}>{principle.title}</h3>
                <p className={s.cardReflection}>{principle.reflection}</p>
                <div className={s.examples}>
                  <p className={s.examplesLabel}>In Practice</p>
                  <ul className={s.exampleList}>
                    {principle.examples.map((example, j) => (
                      <li key={j} className={s.exampleItem}>
                        <span className={s.exampleDot} />
                        <span className={s.exampleText}>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
