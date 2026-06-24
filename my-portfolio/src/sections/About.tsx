import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        {/* Left */}
        <div>
          <p style={{ fontSize: '0.72rem', color: '#c9ff47', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.25rem' }}>
            About Me
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '2rem' }}>
            Strategy that ships.<br />Code that converts.
          </h2>
          <p style={{ color: '#666', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Most marketers can't build and most developers can't market. I do both — which means I understand the full picture from campaign click to codebase.
          </p>
          <p style={{ color: '#666', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            I've built paid ad funnels that generated 6-figure revenue, engineered web apps from scratch, and handled everything in between. If it lives on the internet and needs to perform, I can help.
          </p>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {['Digital Marketing', 'Web Development', 'Brand Strategy', 'UI/UX', 'Analytics'].map(tag => (
              <span key={tag} style={{
                border: '1px solid #222', borderRadius: '100px',
                padding: '0.3rem 0.85rem', fontSize: '0.75rem', color: '#666',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {[
            { label: 'Specialty', value: 'Digital Marketing + Software Development' },
            { label: 'Location', value: 'United States' },
            { label: 'Status', value: 'Open to freelance & full-time' },
            { label: 'Currently', value: 'Building brands & shipping products' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1.25rem 0', borderBottom: '1px solid #1a1a1a',
            }}>
              <span style={{ fontSize: '0.75rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
              <span style={{ fontSize: '0.875rem', color: '#aaa', textAlign: 'right', maxWidth: '55%' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
