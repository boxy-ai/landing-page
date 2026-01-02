import { Container } from './ui/Container';
import logo from '../assets/images/boxy-logo.svg';
import './Footer.css';

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__brand-header">
              <img src={logo} alt="Boxy Logo" className="footer__logo" />
              <span className="footer__wordmark">Boxy</span>
            </div>
            <p className="footer__tagline">
              Your data, your device. Privacy-first AI that lives locally.
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Boxy. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
