import React from 'react';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.72rem', color: '#c9ff47', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>
        Expertise
      </p>
      <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '4rem' }}>
        My full toolkit.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', border: '1px solid #1a1a1a', borderRadius: '1rem', overflow: 'hidden' }}>
        {skillGroups.map((group, i) => (
          <div key={group.label} style={{
            padding: '2.25rem',
            background: '#0e0e0e',
            borderRight: i < skillGroups.length - 1 ? '1px solid #1a1a1a' : 'none',
          }}>
            <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#444', marginBottom: '1.5rem' }}>
              {group.label}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {group.items.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: '#bbb' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#c9ff47', flexShrink: 0, opacity: 0.7 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
