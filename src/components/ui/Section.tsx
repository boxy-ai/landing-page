import type { ReactNode, CSSProperties } from 'react';
import './Section.css';

interface SectionProps {
  id?: string;
  children: ReactNode;
  bgImage?: string;
  overlayVariant?: 'hero' | 'warm' | 'hardware' | 'interface' | 'none';
  className?: string;
  minHeight?: string;
}

export function Section({
  id,
  children,
  bgImage,
  overlayVariant = 'none',
  className = '',
  minHeight
}: SectionProps) {
  const style: CSSProperties = {
    ...(bgImage && { backgroundImage: `url(${bgImage})` }),
    ...(minHeight && { minHeight })
  };

  return (
    <section
      id={id}
      className={`section ${overlayVariant !== 'none' ? `section--overlay-${overlayVariant}` : ''} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
