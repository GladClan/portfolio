import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Milestone, BookOpen, PenLine, TrendingUp, Quote, type LucideIcon } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Card from '../components/Card';
import { spiritualContent } from '../data/content';
import s from './SpiritualSection.module.css';

type Tab = 'milestones' | 'scriptures' | 'reflections' | 'growth';

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: 'milestones', label: 'Milestones', icon: Milestone },
  { id: 'scriptures', label: 'Scriptures', icon: BookOpen },
  { id: 'reflections', label: 'Reflections', icon: PenLine },
  { id: 'growth', label: 'Growth', icon: TrendingUp },
];

export default function SpiritualSection() {
  const [activeTab, setActiveTab] = useState<Tab>('milestones');

  return (
    <Section id="spiritual" className="surface-bg">
      <SectionHeading
        eyebrow="My walk with God"
        title="Spiritual Portfolio"
        subtitle="The milestones, scriptures, and reflections that shape my faith journey alongside my career."
      />

      <Reveal>
        <div className={s.tabs}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${s.tab} ${activeTab === tab.id ? s.tabActive : ''}`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

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
            {activeTab === 'reflections' && <ReflectionsTab />}
            {activeTab === 'growth' && <GrowthTab />}
          </motion.div>
        </AnimatePresence>
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
  return (
    <div className={s.scripturesGrid}>
      {spiritualContent.scriptures.map((scripture, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className={s.scriptureHeader}>
            <Quote size={24} />
            <p className={s.scriptureRef}>{scripture.reference}</p>
          </div>
          <blockquote className={s.scriptureText}>
            {scripture.text}
          </blockquote>
          <p className={s.scriptureReflection}>{scripture.reflection}</p>
        </Card>
      ))}
    </div>
  );
}

function ReflectionsTab() {
  return (
    <div className={s.reflectionsList}>
      {spiritualContent.reflections.map((r, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className={s.reflectionHeader}>
            <PenLine size={20} />
            <h3 className={s.reflectionTitle}>{r.title}</h3>
          </div>
          <p className={s.reflectionBody}>{r.body}</p>
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
          <TrendingUp size={28} />
          <h3 className={s.growthTitle}>Personal Growth</h3>
        </div>
        <p className={s.growthText}>
          {spiritualContent.personalGrowth}
        </p>
      </Card>
    </div>
  );
}
