import { Container } from './ui/Container';
import { FeatureCard } from './ui/FeatureCard';
import './PrivacyFirst.css';

export function PrivacyFirst() {
  return (
    <section id="privacy" className="privacy-first">
      <Container>
        <h2 className="privacy-first__title">Privacy First</h2>
        <p className="privacy-first__subtitle">
          Your data never leaves your device. Every feature is designed with privacy at its core.
        </p>
        <div className="grid-3 privacy-first__cards">
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            }
            title="Local Processing"
            description="All AI processing happens on-device. Your conversations, data, and insights never touch external servers."
            bullets={[
              'No cloud dependencies',
              'Complete data sovereignty',
              'Works offline'
            ]}
          />
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            }
            title="Automatic Redaction"
            description="Built-in redaction pipeline automatically removes sensitive information before any processing."
            bullets={[
              'PII detection and removal',
              'Configurable sensitivity levels',
              'Audit logs for transparency'
            ]}
          />
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2" />
              </svg>
            }
            title="You're in Control"
            description="Full transparency and control over what Boxy can access and when. Manage permissions from your companion app."
            bullets={[
              'Granular permission controls',
              'Real-time activity monitoring',
              'Easy disable/enable toggle'
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
