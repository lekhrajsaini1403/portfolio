import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Journey' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = '#' + s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <span className="nav-logo-text">Lekhraj Saini</span>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map(({ href, label, cta }) => (
            <li key={href}>
              <a
                href={href}
                className={`${cta ? 'nav-cta' : ''} ${active === href ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`fas ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} style={{ fontSize: 20, color: 'var(--text-secondary)' }}></i>
        </button>
      </div>
    </nav>
  );
}
