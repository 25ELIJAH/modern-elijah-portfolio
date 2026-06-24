import { useEffect, useState } from 'react';

const ROLES = [
  'Software Developer',
  'Digital Marketing Specialist',
  'Frontend Developer',
  'Content Creator',
];

const STATS = [
  { num: '3+', label: 'Years Experience' },
  { num: '50+', label: 'Projects Completed' },
  { num: '20+', label: 'Happy Clients' },
  { num: '100%', label: 'Dedication' },
];

const SOCIAL = [
  { label: 'GH', title: 'GitHub', href: 'https://github.com/25ELIJAH', color: '#fff' },
  { label: 'LI', title: 'LinkedIn', href: '#', color: '#0A66C2' },
  { label: 'FB', title: 'Facebook', href: '#', color: '#1877F2' },
  { label: 'IG', title: 'Instagram', href: '#', color: '#E4405F' },
  { label: 'TK', title: 'TikTok', href: '#', color: '#fff' },
  { label: 'WA', title: 'WhatsApp', href: 'https://wa.me/254710380689', color: '#25D366' },
];

const FLOATS = [
  { label: 'React', top: '18%', left: '8%', delay: '0s' },
  { label: 'JS', top: '12%', right: '10%', delay: '0.8s' },
  { label: 'SEO', top: '60%', right: '6%', delay: '1.4s' },
  { label: 'Ads', top: '72%', left: '5%', delay: '0.4s' },
  { label: 'Py', top: '38%', right: '3%', delay: '1.8s' },
];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 72,
    }}>
      {/* Background glow orbs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '20%', left: '50%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 65%)',
          transform: 'translate(-50%,-50%)',
        }} />
        <div style={{
          position: 'absolute', top: '10%', left: '10%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,138,61,0.08) 0%, transparent 65%)',
        }} />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '4rem clamp(1.25rem,5vw,4rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* ── LEFT ── */}
          <div style={{ animation: 'fadeUp 0.8s ease both' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.25)',
              borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '1.75rem',
            }}>
              <span style={{ fontSize: '1rem' }}>👋</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: '#fff',
            }}>
              ELIJAH<br />
              <span style={{ color: 'var(--accent)' }}>JAMES</span>
            </h1>

            {/* Animated role */}
            <div style={{ height: '2rem', marginBottom: '1.5rem', overflow: 'hidden' }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
                opacity: fade ? 1 : 0,
                transform: fade ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.3s, transform 0.3s',
              }}>{ROLES[roleIdx]}</p>
            </div>

            {/* Description */}
            <p style={{ fontSize: '1rem', color: 'var(--sub)', lineHeight: 1.8, maxWidth: 500, marginBottom: '2.25rem' }}>
              I build powerful websites, digital experiences, and marketing systems that help
              businesses increase visibility, attract customers, and scale sustainably.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
              <a href="/documents/resume.pdf" download className="btn-primary">Download CV ↓</a>
              <a href="#projects" className="btn-outline">View Projects →</a>
              <a href="#contact" className="btn-outline">Book Consultation</a>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--sub)' }}>Follow Me:</span>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 900, color: 'rgba(255,255,255,0.7)',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Portrait + floating elements ── */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 500, animation: 'fadeUp 0.8s 0.2s ease both' }}>
            {/* Glow orb behind portrait */}
            <div style={{
              position: 'absolute', width: 380, height: 380, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,107,0,0.35) 0%, transparent 65%)',
              animation: 'glowPulse 3s ease-in-out infinite',
            }} />
            {/* Ring 1 */}
            <div style={{ position: 'absolute', width: 440, height: 440, borderRadius: '50%', border: '1px solid rgba(255,107,0,0.15)' }} />
            {/* Ring 2 */}
            <div style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', border: '1px dashed rgba(255,107,0,0.08)' }} />

            {/* Portrait card */}
            <div style={{
              position: 'relative', zIndex: 1,
              width: 280, height: 360,
              background: 'linear-gradient(145deg, #1f2937, #050816)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px 24px 8px 8px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Replace with: <img src="/images/profile/elijah.jpg" alt="Elijah James" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
              <div style={{
                position: 'absolute', bottom: 0, left: '16%',
                width: '68%', height: '82%',
                background: 'radial-gradient(circle at 50% 14%, #f6c9a9 0 12%, transparent 13%), linear-gradient(160deg, #111827 20%, #050815 80%)',
                borderRadius: '45% 45% 8px 8px',
              }} />
              <span style={{ position: 'relative', zIndex: 1, fontFamily: "'Poppins',sans-serif", fontSize: '4rem', fontWeight: 900, color: 'rgba(255,255,255,0.06)' }}>EJ</span>

              {/* Available chip */}
              <div style={{
                position: 'absolute', bottom: '1.25rem', right: '-1rem',
                background: 'rgba(11,17,32,0.9)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '0.6rem 0.9rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.72rem', fontWeight: 700,
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                <span className="glow-dot" />
                Available for work
              </div>
            </div>

            {/* Floating tech chips */}
            {FLOATS.map(f => (
              <div key={f.label} style={{
                position: 'absolute',
                top: f.top, left: (f as any).left, right: (f as any).right,
                background: 'rgba(11,17,32,0.85)',
                border: '1px solid rgba(255,107,0,0.25)',
                borderRadius: 10, padding: '0.5rem 0.85rem',
                fontSize: '0.75rem', fontWeight: 800, color: 'var(--white)',
                boxShadow: '0 4px 20px rgba(255,107,0,0.18)',
                animation: `float ${4 + parseFloat(f.delay) * 0.5}s ${f.delay} ease-in-out infinite`,
                zIndex: 2,
              }}>{f.label}</div>
            ))}
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1px', marginTop: '5rem',
          border: '1px solid var(--border)', borderRadius: 16,
          overflow: 'hidden', background: 'var(--border)',
        }}>
          {STATS.map(({ num, label }) => (
            <div key={label} style={{
              background: 'var(--bg2)', padding: '2rem',
              textAlign: 'center',
            }}>
              <p className="stat-num">{num}</p>
              <p className="stat-label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
