import type { ReactNode } from 'react';
import './IconBadge.css';

interface IconBadgeProps {
  icon: ReactNode;
  label: string;
}

export function IconBadge({ icon, label }: IconBadgeProps) {
  return (
    <div className="icon-badge">
      <div className="icon-badge__icon">{icon}</div>
      <span className="icon-badge__label">{label}</span>
    </div>
  );
}
