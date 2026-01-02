import { Container } from './ui/Container';
import differentAnglesImage from '../assets/images/different-angles.png';
import './ExpressiveInterface.css';

const specs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
      </svg>
    ),
    title: 'Single-Board Computer',
    description: 'Powerful ARM-based SBC for core processing'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a7 7 0 1 0 10 10" />
      </svg>
    ),
    title: 'Optional AI Accelerator',
    description: 'Dedicated neural processing unit'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Expandable NVMe Storage',
    description: 'Fast, secure storage you control'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Wi-Fi/Bluetooth',
    description: 'Wireless connectivity built-in'
  }
];

export function ExpressiveInterface() {
  return (
    <section id="interface" className="expressive-interface">
      <Container>
        <h2 className="expressive-interface__title">
          Expressive Interface
        </h2>
        <p className="expressive-interface__subtitle">
          Boxy communicates through light, color, and subtle movements—expressing states
          and emotions without words.
        </p>

        <div className="expressive-interface__showcase">
          <img
            src={differentAnglesImage}
            alt="Boxy expressive interface angles"
          />
        </div>

        <div className="expressive-interface__specs">
          <h3 className="specs__title">Technical Specifications</h3>
          <div className="grid-2 specs__grid">
            {specs.map((spec, index) => (
              <div key={index} className="spec-item">
                <div className="spec-item__icon">{spec.icon}</div>
                <div className="spec-item__content">
                  <h4 className="spec-item__title">{spec.title}</h4>
                  <p className="spec-item__description">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
