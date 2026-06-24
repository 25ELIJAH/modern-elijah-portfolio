import React, { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#111',
  border: '1px solid #1f1f1f',
  borderRadius: '0.6rem',
  padding: '0.9rem 1.15rem',
  color: '#f2f2f2',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: '8rem 2.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

        {/* Left */}
        <div>
          <p style={{ fontSize: '0.72rem', color: '#c9ff47', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>
            Contact
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Let's build<br />something great.
          </h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.95rem' }}>
            Whether it's a campaign, a web app, or just an idea — reach out. I respond within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {[
              { label: 'Email', value: 'easterjames420@gmail.com', href: 'mailto:easterjames420@gmail.com' },
              { label: 'LinkedIn', value: '/in/elijah-easter', href: '#' },
              { label: 'GitHub', value: 'github.com/25ELIJAH', href: 'https://github.com/25ELIJAH' },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{label}</p>
                <a href={href} style={{ fontSize: '0.9rem', color: '#888', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f2f2f2')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#888')}
                >{value}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {sent ? (
            <div style={{
              border: '1px solid #1f1f1f', borderRadius: '1rem', padding: '3rem',
              textAlign: 'center', color: '#c9ff47', fontSize: '1rem', fontWeight: 700,
            }}>
              Message received. I'll be in touch shortly ✓
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input style={inputStyle} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required
                  onFocus={e => (e.target.style.borderColor = '#333')}
                  onBlur={e => (e.target.style.borderColor = '#1f1f1f')}
                />
                <input style={inputStyle} type="email" placeholder="Email address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required
                  onFocus={e => (e.target.style.borderColor = '#333')}
                  onBlur={e => (e.target.style.borderColor = '#1f1f1f')}
                />
              </div>
              <select style={{ ...inputStyle, color: form.service ? '#f2f2f2' : '#555' }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required
                onFocus={e => (e.target.style.borderColor = '#333')}
                onBlur={e => (e.target.style.borderColor = '#1f1f1f')}
              >
                <option value="" disabled>What do you need?</option>
                <option value="marketing">Digital Marketing Campaign</option>
                <option value="web">Web Development</option>
                <option value="both">Marketing + Development</option>
                <option value="consult">Strategy / Consulting</option>
                <option value="other">Something else</option>
              </select>
              <textarea
                style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={e => (e.target.style.borderColor = '#333')}
                onBlur={e => (e.target.style.borderColor = '#1f1f1f')}
                required
              />
              <button type="submit" style={{
                background: '#c9ff47', color: '#000', border: 'none',
                borderRadius: '100px', padding: '0.9rem 2rem',
                fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', alignSelf: 'flex-start',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
