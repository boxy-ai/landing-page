import { useState, useEffect, type MouseEvent } from 'react';
import logo from '../assets/images/boxy-logo.svg';
import './Header.css';

const navLinks = [
  { label: 'Features', href: '#proactive' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'How it Works', href: '#how' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Interface', href: '#interface' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      {mobileMenuOpen && (
        <div
          className="header__backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className="header__container">
        <div className="header__brand">
          <img src={logo} alt="Boxy Logo" className="header__logo" />
          <span className="header__wordmark">Boxy</span>
        </div>

        <nav id="mobile-menu" className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`header__mobile-toggle ${mobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
