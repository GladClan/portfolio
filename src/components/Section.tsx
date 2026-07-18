import { type ReactNode } from 'react';
import s from './Section.module.css';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`${s.section} ${className ?? ''}`}>
      <div className={s.container}>{children}</div>
    </section>
  );
}
