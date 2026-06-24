import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Tools', href: '#tools' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <a href="#home" className="navbar-logo">
        <span className="bracket">[</span>
        EJ
        <span className="bracket">]</span>
        <span style={{ fontWeight: 600, fontSize: '0.85rem', marginLeft: '0.4rem', color: 'rgba(255,255,255,0.7)' }}>
          Elijah James
        </span>
      </a>

      {/* Links */}
      <nav className="navbar-nav">
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>

      {/* Actions */}
      <div className="navbar-actions">
        <a href="/documents/resume.pdf" download className="btn-outline" style={{ padding: '0.5rem 1.1rem', fontSize: '0.78rem' }}>
          Download CV
        </a>
        <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.78rem' }}>
          Book Consultation
        </a>
      </div>
    </header>
  );
};

export default Navbar;
