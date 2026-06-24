import React from 'react';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <section id="work" style={{ padding: '8rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '0.72rem', color: '#c9ff47', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>
            Selected Work
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Things I've shipped.
          </h2>
        </div>
        <a href="#contact" style={{ fontSize: '0.8rem', color: '#555', borderBottom: '1px solid #222', paddingBottom: '3px', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f2f2f2')}
          onMouseLeave={e => (e.currentTarget.style.color = '#555')}
        >Start a project →</a>
      </div>

      {/* Project rows */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((p, i) => (
          <a
            key={p.id}
            href={p.link || '#contact'}
            className="project-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '3rem 1fr auto',
              gap: '2.5rem',
              alignItems: 'center',
              padding: '2.25rem 1.5rem',
              borderTop: '1px solid #1a1a1a',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            {/* Index */}
            <span style={{ fontSize: '0.75rem', color: '#333', fontWeight: 600, letterSpacing: '0.05em' }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{p.title}</h3>
                <span style={{ fontSize: '0.72rem', color: '#555', border: '1px solid #222', borderRadius: '100px', padding: '0.2rem 0.7rem' }}>{p.role}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1rem' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.7rem', color: '#c9ff47', opacity: 0.65 }}>#{tag.replace(/ /g, '')}</span>
                ))}
              </div>
            </div>

            {/* Year + arrow */}
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: '0.75rem', color: '#333', marginBottom: '0.5rem' }}>{p.year}</p>
              <span style={{ fontSize: '1.2rem', color: '#333', transition: 'color 0.2s, transform 0.2s', display: 'inline-block' }}>↗</span>
            </div>
          </a>
        ))}
        <div style={{ borderTop: '1px solid #1a1a1a' }} />
      </div>
    </section>
  );
}
