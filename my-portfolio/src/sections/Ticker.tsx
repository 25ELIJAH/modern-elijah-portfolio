import React from 'react';

const ITEMS = [
  'Digital Marketing', 'SEO / SEM', 'React', 'Next.js',
  'TypeScript', 'Google Ads', 'Meta Ads', 'Email Automation',
  'Node.js', 'Content Strategy', 'UI/UX', 'Tailwind CSS',
  'CRO', 'Brand Identity', 'REST APIs', 'Analytics',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      borderTop: '1px solid #1f1f1f', borderBottom: '1px solid #1f1f1f',
      padding: '1.1rem 0', overflow: 'hidden', background: '#0e0e0e',
    }}>
      <div className="marquee-track" style={{ gap: '0' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '1.5rem',
            paddingRight: '1.5rem',
            fontSize: '0.78rem', color: '#555',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            whiteSpace: 'nowrap',
          }}>
            {item}
            <span style={{ color: '#c9ff47', fontSize: '1rem' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
