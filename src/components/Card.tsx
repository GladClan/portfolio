import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import s from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`${s.card} ${hover ? s.cardHover : ''} ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
}
