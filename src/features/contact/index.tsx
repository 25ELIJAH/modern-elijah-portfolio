import { useState } from 'react';

const CONTACT_CARDS = [
  { icon: '💬', label: 'WhatsApp', value: '+254 740 840 018', href: 'https://wa.me/254740840018' },
  { icon: '📞', label: 'Phone', value: '+254 710 380 689', href: 'tel:+254710380689' },
  { icon: '✉️', label: 'Email', value: 'jamesoigo87@gmail.com', href: 'mailto:jamesoigo87@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Nairobi, Kenya', href: '#' },
];

const Contact = () => {
  const [msg, setMsg] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="eyebrow">Get In Touch</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Let's Build Something<br />
            <span style={{ color: 'var(--accent)' }}>Amazing Together</span>
          </h2>
          <p style={{ color: 'var(--sub)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Whether you need a website, digital marketing strategy, content creation, or a complete digital transformation — I'd love to help.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* LEFT — Contact cards */}
          <div>
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
              {CONTACT_CARDS.map(c => (
                <a key={c.label} href={c.href} className="contact-card" style={{ textDecoration: 'none' }}>
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.72rem', color: 'var(--sub)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{c.label}</p>
                    <p style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.925rem' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Consultation booking card */}
            <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem' }}>
              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Book a Consultation</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--sub)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Let's discuss your project, goals, and how I can help you achieve measurable results.
              </p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <input className="field" placeholder="Your Name" />
                <input className="field" type="email" placeholder="Email Address" />
                <input className="field" type="tel" placeholder="Phone Number" />
                <select className="field">
                  <option value="">Service Needed</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>Content Creation</option>
                  <option>Full Digital Package</option>
                </select>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <input className="field" type="date" placeholder="Preferred Date" />
                  <input className="field" type="time" placeholder="Preferred Time" />
                </div>
                <select className="field">
                  <option value="">Budget Range</option>
                  <option>Under $500</option>
                  <option>$500 – $1,500</option>
                  <option>$1,500 – $5,000</option>
                  <option>$5,000+</option>
                </select>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Consultation →
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — Message form */}
          <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 20, padding: '2.5rem' }}>
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem' }}>Send a Message</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--sub)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Have a quick question or want to start a conversation? Drop me a message.
            </p>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 16 }}>
                <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</p>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: '#22c55e', marginBottom: '0.5rem' }}>Message Sent!</p>
                <p style={{ fontSize: '0.825rem', color: 'var(--sub)' }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input className="field" placeholder="Your Name" value={msg.name} onChange={e => setMsg({ ...msg, name: e.target.value })} required />
                  <input className="field" type="email" placeholder="Email" value={msg.email} onChange={e => setMsg({ ...msg, email: e.target.value })} required />
                </div>
                <input className="field" placeholder="Subject" value={msg.subject} onChange={e => setMsg({ ...msg, subject: e.target.value })} required />
                <textarea className="field" placeholder="Your message..." rows={6} value={msg.message} onChange={e => setMsg({ ...msg, message: e.target.value })} style={{ resize: 'vertical' }} required />
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
