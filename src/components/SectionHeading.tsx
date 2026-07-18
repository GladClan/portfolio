import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import s from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`${s.heading} ${align === 'center' ? s.center : s.left}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className={s.eyebrow}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.05 }}
        className={s.title}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className={s.subtitle}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedText({ children, delay = 0, className }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
