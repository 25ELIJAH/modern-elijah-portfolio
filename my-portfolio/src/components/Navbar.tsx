import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      padding: '0 2.5rem',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(12,12,12,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${scrolled ? '#1f1f1f' : 'transparent'}`,
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ fontWeight: 900, fontSize: '1.05rem', letterSpacing: '-0.03em' }}>
        ELIJAH<span style={{ color: '#c9ff47' }}>.</span>
      </a>

      {/* Links */}
      <div style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} style={{
            fontSize: '0.8rem', color: '#777', fontWeight: 500,
            transition: 'color 0.2s', letterSpacing: '0.01em',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f2f2f2')}
          onMouseLeave={e => (e.currentTarget.style.color = '#777')}
          >{label}</a>
        ))}
      </div>

      {/* CTA */}
      <a href="/documents/resume.pdf" download style={{
        background: '#c9ff47', color: '#000',
        padding: '0.45rem 1.15rem', borderRadius: '100px',
        fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.01em',
      }}>Resume ↓</a>
    </nav>
  );
}
