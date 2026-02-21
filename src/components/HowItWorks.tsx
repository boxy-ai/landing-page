import { Container } from './ui/Container';
import './HowItWorks.css';

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
    title: 'App Event',
    description: 'An event occurs in one of your connected apps'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Boxy Receives',
    description: 'Boxy captures the event on your local device'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Local Processing',
    description: 'AI processes data locally with automatic redaction'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m5 12 5 5L20 7" />
      </svg>
    ),
    title: 'Agent Action',
    description: 'Boxy executes the appropriate action via API'
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="how-it-works">
      <Container>
        <h2 className="how-it-works__title">How It Works</h2>
        <p className="how-it-works__subtitle">
          Boxy seamlessly integrates into your workflow with a simple, secure pipeline
        </p>
        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step__icon">{step.icon}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
