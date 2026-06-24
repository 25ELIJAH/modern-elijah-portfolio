import React from 'react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '8rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.72rem', color: '#c9ff47', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>
        Experience
      </p>
      <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '4rem' }}>
        Where I've been.
      </h2>

      <div>
        {experience.map((exp, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '4rem',
            padding: '3rem 0',
            borderTop: '1px solid #1a1a1a',
            alignItems: 'start',
          }}>
            {/* Left */}
            <div style={{ paddingTop: '0.15rem' }}>
              <p style={{ fontSize: '0.8rem', color: '#c9ff47', marginBottom: '0.4rem', fontWeight: 600 }}>{exp.period}</p>
              <p style={{ fontSize: '0.8rem', color: '#444' }}>{exp.company}</p>
            </div>

            {/* Right */}
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.85rem' }}>{exp.role}</h3>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>{exp.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{
                    border: '1px solid #1f1f1f', borderRadius: '100px',
                    padding: '0.25rem 0.75rem', fontSize: '0.72rem', color: '#555',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #1a1a1a' }} />
      </div>
    </section>
  );
}
