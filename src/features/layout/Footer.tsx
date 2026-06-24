const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Tools', href: '#tools' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { label: 'GH', title: 'GitHub', href: 'https://github.com/25ELIJAH' },
  { label: 'LI', title: 'LinkedIn', href: '#' },
  { label: 'FB', title: 'Facebook', href: '#' },
  { label: 'IG', title: 'Instagram', href: '#' },
  { label: 'TK', title: 'TikTok', href: '#' },
  { label: 'WA', title: 'WhatsApp', href: 'https://wa.me/254710380689' },
];

const Footer = () => (
  <footer style={{ background: '#030710', borderTop: '1px solid var(--border)', padding: '4rem clamp(1.25rem,5vw,4rem) 2rem' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      {/* Top row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3.5rem', alignItems: 'start' }}>
        {/* Brand */}
        <div>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: '1.4rem', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--accent)' }}>[</span>EJ<span style={{ color: 'var(--accent)' }}>]</span> Elijah James
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--sub)', maxWidth: 280, lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Software Developer & Digital Marketing Specialist. Building powerful digital solutions that drive real business growth.
          </p>
          <a href="/documents/resume.pdf" download className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.35rem' }}>
            Download CV ↓
          </a>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>Navigation</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {NAV.map(n => (
              <a key={n.label} href={n.href} style={{ fontSize: '0.875rem', color: 'var(--sub)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--sub)')}
              >{n.label}</a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>Connect</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                style={{ fontSize: '0.875rem', color: 'var(--sub)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--sub)')}
              >{s.title} ↗</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>Contact</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <a href="mailto:jamesoigo87@gmail.com" style={{ fontSize: '0.825rem', color: 'var(--sub)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--sub)')}
            >jamesoigo87@gmail.com</a>
            <a href="tel:+254710380689" style={{ fontSize: '0.825rem', color: 'var(--sub)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--sub)')}
            >+254 710 380 689</a>
            <p style={{ fontSize: '0.825rem', color: 'var(--sub)' }}>Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Elijah James. All Rights Reserved.</p>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>Built with React & Vite · Designed for Impact</p>
      </div>
    </div>
  </footer>
);

export default Footer;
