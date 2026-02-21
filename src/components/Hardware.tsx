import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import backImage from '../assets/images/back.png';
import internalsImage from '../assets/images/internals.png';
import './Hardware.css';

export function Hardware() {
  return (
    <>
      <Section
        id="hardware"
        bgImage={backImage}
        overlayVariant="hardware"
        className="hardware-hero"
        minHeight="90vh"
      >
        <Container>
          <div className="hardware-hero__content">
            <div className="hardware-hero__text">
              <h2 className="hardware-hero__title text-shadow">
                Intelligence,
                <br />
                Architected.
              </h2>
              <p className="hardware-hero__description text-shadow">
                Rectilinear design meets advanced AI. Boxy is the hub for your digital life,
                powered by a dedicated local engine.
              </p>
              <Button variant="primary" onClick={() => {
                const element = document.querySelector('#hardware-internals');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore the Hardware
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <section id="hardware-internals" className="hardware-internals">
        <Container>
          <div className="hardware-internals__header">
            <h3 className="hardware-internals__title">Transparently Secure Hardware</h3>
            <p className="hardware-internals__subtitle">
              See what's inside: open, understandable components designed for privacy and performance.
            </p>
          </div>

          <div className="hardware-internals__image glass">
            <img src={internalsImage} alt="Boxy internal components" />
          </div>
        </Container>
      </section>
    </>
  );
}
