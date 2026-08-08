import { ReactNode } from 'react';
import s from './Badge.module.css';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

export default function Badge({ children, variant = 'neutral' }: BadgeProps) {
  const variantClass = s[variant] ?? s.neutral;
  return (
    <span className={`${s.badge} ${variantClass}`}>
      {children}
    </span>
  );
}
