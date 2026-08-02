import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import s from './ReflectionSection.module.css';
import { ChefHat, Feather, LucideIcon, Merge, ShieldAlert, Sparkles } from "lucide-react";
import { useState } from "react";
import Card from "../components/Card";
import { reflectionContent } from "../data/content";

type Tab = 'main' | 'attributes' | 'warnings' | 'strategies' | 'portfolio-review';

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [ 
  { id: 'main', label: 'Reflection', icon: Sparkles },
  { id: 'attributes', label: 'Christlike Attributes', icon: Feather },
  { id: 'warnings', label: 'Warning Signs', icon: ShieldAlert },
  { id: 'strategies', label: 'Realignment', icon: Merge },
  { id: 'portfolio-review', label: 'Review', icon: ChefHat },
];

export default function ReflectionSection() {
  const [activeTab, setActiveTab] = useState<Tab>('main');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    const el = document.getElementById('reflection-content');
    if (el && el.getBoundingClientRect().top < 0)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Section id='reflection'>
      <SectionHeading
        eyebrow="Seeing Christ in my life"
        title="Reflecting Him"
        subtitle="How I demonstrate Christlike attributes, recognize and respond to warning signs, and realign with my values"
      />
      
      <div id='reflection-content'>
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
              {activeTab === 'main' && <MainTab />}
              {activeTab === 'attributes' && <AttributesTab />}
              {activeTab === 'warnings' && <WarningsTab />}
              {activeTab === 'strategies' && <StrategiesTab />}
              {activeTab === 'portfolio-review' && <ReviewTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function MainTab() {
  return (
    <div className={s.mainWrap}>
      <Card hover={false}>
        <div className={s.mainHeader}>
          <Sparkles size={28} />
          <h3 className={s.mainTitle}>Portfolio Review and Reflection</h3>
        </div>
        As I reviewed my portfolio, I realized that it tells more than the story of what I have accomplished.
        It reflects who I am striving to become as a disciple of Jesus Christ and as a software engineer.
        My values of <strong>connection, making a difference, and creativity</strong> are strengthened by developing Christlike attributes, and together they shape both my personal life and my professional goals.
      </Card>
    </div>
  );
}

function AttributesTab() {
  return (
    <div className={s.attributesHeader}>
      <div className={s.attributesHeaderTitle}>
          <Feather size={28} />
          <h3 className={s.mainTitle}>Christlike Attributes</h3>
        </div>
      <div className={s.attributesGrid}>
        {reflectionContent.attributes.map((attr, i) => 
          <Card key={i} delay={i * 0.1}>
            <div className={s.attributesCard}>
              <div>
                <h3 className={s.attributesTitle}>{attr.title}</h3>
                <p className={s.attributesBody}>{attr.intro}</p>
                <ul className={s.attributesContent}>
                  {attr.content.map((item, i) => 
                    <div key={i}>
                      <li className={s.attributesContentIntro}>{item.intro}</li>
                      <ul>
                        {item.bullets.map((b, i) =>
                          <li key={`bullet-${i}`} className={s.attributesBody}>{b}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </ul>
                {attr.outro && 
                  <p className={s.attributesBody}>{attr.outro}</p>
                }
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function WarningsTab() {
  return (
    <div className={s.attributesHeader}>
      <div className={s.attributesHeaderTitle}>
        <ShieldAlert size={28} />
        <h3 className={s.mainTitle}>Personal Warning Signs</h3>
      </div>
      <div className={s.attributesGrid}>
        {reflectionContent.warnings.content.map((w, i) => 
          <Card key={i} delay={i * 0.1}>
            <div className={s.attributesCard}>
              <div>
                <h3 className={s.attributesTitle}>{w.title}</h3>
                <p className={s.attributesBody}>{w.intro}</p>
                <ul>
                  {w.bullets.map((b, i) =>
                    <li key={`bullet-${i}`} className={s.attributesBody}>{b}</li>
                  )}
                </ul>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function StrategiesTab() {
  return (
    <div className={s.attributesHeader}>
      <div className={s.attributesHeaderTitle}>
        <Merge size={28} />
        <h3 className={s.mainTitle}>Strategies for Realignment</h3>
      </div>
      <div className={s.attributesGrid}>
        {reflectionContent.strategies.content.map((strat, i) => 
          <Card key={i} delay={i * 0.1}>
            <div className={s.attributesCard}>
              <div>
                <p className={s.attributesBody}>{strat.intro}</p>
                <ul>
                  {strat.bullets.map((b, i) =>
                    <li key={`bullet-${i}`} className={s.attributesBody}>{b}</li>
                  )}
                </ul>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function ReviewTab() {
  return (
    <div className={s.attributesHeader}>
      <div className={s.attributesHeaderTitle}>
        <ChefHat size={28} />
        <h3 className={s.mainTitle}>Portfolio Review</h3>
      </div>
      <div className={s.attributesBody}>
        {reflectionContent.review.paragraph}
      </div>
      <div className={s.attributesCard}>
        <div>
          <h3 className={s.attributesBody}>{reflectionContent.review.content.intro}</h3>
          <ul>
            {reflectionContent.review.content.bullets.map((b, i) =>
              <li key={`bullet-${i}`} className={s.attributesBody}>{b}</li>
            )}
          </ul>
        </div>
      </div>
      {reflectionContent.review.close}
    </div>
  )
}