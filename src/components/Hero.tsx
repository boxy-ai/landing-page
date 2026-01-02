import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { IconBadge } from './ui/IconBadge';
import frontImage from '../assets/images/front.png';
import './Hero.css';

export function Hero() {
  return (
    <Section
      id="hero"
      bgImage={frontImage}
      overlayVariant="hero"
      minHeight="100vh"
      className="hero"
    >
      <Container>
        <div className="hero__content">
          <div className="hero__left">
            <h1 className="hero__title text-shadow">
              Your Data, Your Device.
              <br />
              <span className="text-gradient">Meet Boxy.</span>
            </h1>
            <p className="hero__subtitle text-shadow">
              The privacy-first AI agent that lives on your device. Local processing,
              proactive intelligence, and total control—without the cloud.
            </p>
            <div className="hero__ctas">
              <Button variant="primary">Waitlist opening soon</Button>
            </div>
            <div className="hero__features">
              <IconBadge
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                }
                label="Local Redaction Pipeline"
              />
              <IconBadge
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                }
                label="Event-Driven Agent"
              />
              <IconBadge
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                }
                label="Companion App Control"
              />
            </div>
          </div>
          <div className="hero__right"></div>
        </div>
      </Container>
    </Section>
  );
}
