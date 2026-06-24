import React from 'react';

const NAV = ['About', 'Work', 'Skills', 'Experience', 'Contact'];
const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/25ELIJAH' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:easterjames420@gmail.com' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a', padding: '4rem 2.5rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '4rem', alignItems: 'start', marginBottom: '4rem' }}>
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>
              ELIJAH<span style={{ color: '#c9ff47' }}>.</span>
            </p>
            <p style={{ fontSize: '0.825rem', color: '#444', maxWidth: '240px', lineHeight: 1.7 }}>
              Digital marketer & software developer. Building things that work on the internet.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: '0.65rem', color: '#333', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} style={{ fontSize: '0.825rem', color: '#555', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f2f2f2')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                >{n}</a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: '0.65rem', color: '#333', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.825rem', color: '#555', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f2f2f2')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                >{s.label} ↗</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid #141414', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.72rem', color: '#333' }}>© {new Date().getFullYear()} Elijah Easter. All rights reserved.</p>
          <p style={{ fontSize: '0.72rem', color: '#333' }}>BUILT WITH REACT & VITE</p>
        </div>
      </div>
    </footer>
  );
}
