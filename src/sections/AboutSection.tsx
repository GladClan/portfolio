import { GraduationCap, Heart, Target, BookOpen } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { aboutContent } from '../data/content';
import s from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Get to know me"
        title="About Me"
        subtitle="The person behind the code—my story, my education, and what drives me forward."
      />

      <div className={s.biography}>
        <Reveal>
          <p className={s.bioText}>{aboutContent.biography}</p>
        </Reveal>
      </div>

      <div className={s.sectionBlock}>
        <Reveal>
          <div className={s.subHeading}>
            <GraduationCap className={s.iconPrimary} size={24} />
            <h3 className={s.subHeadingTitle}>Education</h3>
          </div>
        </Reveal>
        <div className={s.eduGrid}>
          {aboutContent.education.map((edu, i) => (
            <Card key={i} delay={i * 0.1}>
              <p className={s.eduYear}>{edu.year}</p>
              <h4 className={s.eduDegree}>{edu.degree}</h4>
              <p className={s.eduInstitution}>{edu.institution}</p>
              <p className={s.eduDetails}>{edu.details}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className={s.interestsGoalsGrid}>
        <div>
          <Reveal>
            <div className={s.subHeading}>
              <Heart className={s.iconSecondary} size={24} />
              <h3 className={s.subHeadingTitle}>Interests</h3>
            </div>
          </Reveal>
          <div className={s.interestsWrap}>
            {aboutContent.interests.map((interest, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <span className={s.interestTag}>
                  {interest}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className={s.subHeading}>
              <Target className={s.iconAccent} size={24} />
              <h3 className={s.subHeadingTitle}>Goals</h3>
            </div>
          </Reveal>
          <ul className={s.goalList}>
            {aboutContent.goals.map((goal, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className={s.goalItem}>
                  <span className={s.goalDot} />
                  <span className={s.goalText}>{goal}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className={s.sectionBlock}>
        <Reveal>
          <div className={s.subHeading}>
            <BookOpen className={s.iconPrimary} size={24} />
            <h3 className={s.subHeadingTitle}>My Journey</h3>
          </div>
        </Reveal>
        <div className={s.timelineWrap}>
          <div className={s.timelineLine} />

          <div className={s.timelineList}>
            {aboutContent.timeline.map((event, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`${s.timelineItem} ${i % 2 === 0 ? s.timelineReverse : ''}`}>
                  <div className={s.timelineDot} />
                  <div className={s.timelineSpacer} />
                  <div className={s.timelineContent}>
                    <Card hover={false} className={s.timelineCardInner}>
                      <p className={s.timelineYear}>{event.year}</p>
                      <h4 className={s.timelineTitle}>{event.title}</h4>
                      <p className={s.timelineDesc}>{event.description}</p>
                    </Card>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
