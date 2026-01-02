import type { ReactNode } from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bullets?: string[];
}

export function FeatureCard({ icon, title, description, bullets }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="feature-card__bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
