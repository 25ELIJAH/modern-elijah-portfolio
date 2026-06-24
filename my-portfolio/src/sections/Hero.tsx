import React from 'react';

const STATS = [
  { num: '3+', label: 'Years Experience' },
  { num: '20+', label: 'Projects Delivered' },
  { num: '2-in-1', label: 'Marketer & Developer' },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '6rem 2.5rem 4rem',
      maxWidth: '1200px', margin: '0 auto',
    }}>
      {/* Top row — availability tag */}
      <div style={{ marginBottom: '3.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%', background: '#c9ff47',
          display: 'inline-block', boxShadow: '0 0 8px #c9ff47',
        }} />
        <span style={{ fontSize: '0.75rem', color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Open to opportunities
        </span>
      </div>

      {/* Main two-col layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'flex-end' }}>
        {/* Left — headline */}
        <div>
          <h1 style={{
            fontSize: 'clamp(3rem, 7.5vw, 7rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            marginBottom: '2.5rem',
          }}>
            Marketing<br />
            meets<br />
            <span style={{ color: '#c9ff47' }}>code.</span>
          </h1>

          <p style={{
            fontSize: '1.05rem', color: '#666', maxWidth: '480px',
            lineHeight: 1.75, marginBottom: '2.5rem',
          }}>
            I'm <strong style={{ color: '#f2f2f2' }}>Elijah Easter</strong> — a digital marketer
            and software developer who builds brands, campaigns, and products that convert.
            Zero fluff, maximum impact.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a href="#work" style={{
              background: '#c9ff47', color: '#000',
              padding: '0.85rem 2rem', borderRadius: '100px',
              fontWeight: 700, fontSize: '0.875rem',
            }}>View My Work →</a>
            <a href="#contact" style={{
              border: '1px solid #2a2a2a', color: '#888',
              padding: '0.85rem 2rem', borderRadius: '100px',
              fontWeight: 600, fontSize: '0.875rem',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#f2f2f2'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#888'; }}
            >Get In Touch</a>
          </div>
        </div>

        {/* Right — profile image box */}
        <div style={{
          width: 'clamp(200px, 22vw, 320px)',
          aspectRatio: '3/4',
          background: '#141414',
          border: '1px solid #1f1f1f',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#333', fontSize: '0.75rem', textAlign: 'center', padding: '1rem',
        }}>
          {/* Drop your photo here ↓ */}
          {/* <img src="/images/profile/me.jpg" alt="Elijah Easter" style={{ width:'100%', height:'100%', objectFit:'cover' }} /> */}
          Add your photo to<br />/public/images/profile/me.jpg
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        display: 'flex', gap: '0', marginTop: '5rem',
        borderTop: '1px solid #1f1f1f', paddingTop: '2.5rem',
      }}>
        {STATS.map(({ num, label }, i) => (
          <div key={label} style={{
            flex: 1, paddingRight: '2rem',
            borderRight: i < STATS.length - 1 ? '1px solid #1f1f1f' : 'none',
            marginRight: i < STATS.length - 1 ? '2rem' : '0',
          }}>
            <p style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#f2f2f2' }}>{num}</p>
            <p style={{ fontSize: '0.75rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
