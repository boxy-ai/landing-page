import { Section } from './ui/Section';
import { Container } from './ui/Container';
import warmSmileImage from '../assets/images/warm-smile.png';
import './ProactiveAgent.css';

export function ProactiveAgent() {
  return (
    <Section
      id="proactive"
      bgImage={warmSmileImage}
      overlayVariant="warm"
      className="proactive-agent"
    >
      <Container>
        <div className="proactive-agent__content">
          <div className="proactive-agent__text">
            <h2 className="proactive-agent__title text-shadow">
              Your Proactive AI Agent
            </h2>
            <p className="proactive-agent__description">
              Anticipates your needs, connects your apps, and executes actions—always on,
              always for you. Boxy learns your patterns and proactively assists without
              waiting to be asked.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
