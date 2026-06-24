import { useEffect, useRef, useState } from 'react';
import './styles/globals.css';

/* ── CONFIG ──────────────────────────────────── */
const WEB3FORMS_KEY = '96ab8c59-504c-4c87-a174-456df237cc59';
const EMAIL = 'easterjames420@gmail.com';
const WHATSAPP = '254740840018';          // 0740840018 → intl
const WHATSAPP_DISPLAY = '+254 740 840 018';
const LINKEDIN = 'https://www.linkedin.com/in/elijahjames254';
const GITHUB = 'https://github.com/25ELIJAH';

/* ── LOGO CDNs ───────────────────────────────── */
const DEV = (slug: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;
const SI = (slug: string) => `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${slug}.svg`;

const DEV_LOGOS = [
  { name: 'HTML5', icon: DEV('html5/html5-original') },
  { name: 'CSS3', icon: DEV('css3/css3-original') },
  { name: 'JavaScript', icon: DEV('javascript/javascript-original') },
  { name: 'TypeScript', icon: DEV('typescript/typescript-original') },
  { name: 'React', icon: DEV('react/react-original') },
  { name: 'Next.js', icon: DEV('nextjs/nextjs-original') },
  { name: 'Node.js', icon: DEV('nodejs/nodejs-original') },
  { name: 'Python', icon: DEV('python/python-original') },
  { name: 'Tailwind', icon: DEV('tailwindcss/tailwindcss-original') },
  { name: 'Bootstrap', icon: DEV('bootstrap/bootstrap-original') },
  { name: 'PostgreSQL', icon: DEV('postgresql/postgresql-original') },
  { name: 'MySQL', icon: DEV('mysql/mysql-original') },
  { name: 'Git', icon: DEV('git/git-original') },
  { name: 'GitHub', icon: DEV('github/github-original') },
  { name: 'Figma', icon: DEV('figma/figma-original') },
  { name: 'VS Code', icon: DEV('vscode/vscode-original') },
  { name: 'Vercel', icon: DEV('vercel/vercel-original') },
  { name: 'Netlify', icon: DEV('netlify/netlify-original') },
];

const MKT_LOGOS = [
  { name: 'Google Ads', icon: SI('googleads'), mono: true },
  { name: 'Meta Ads', icon: SI('meta'), mono: true },
  { name: 'Analytics', icon: SI('googleanalytics'), mono: true },
  { name: 'Tag Manager', icon: SI('googletagmanager'), mono: true },
  { name: 'Search Console', icon: SI('googlesearchconsole'), mono: true },
  { name: 'Mailchimp', icon: SI('mailchimp'), mono: true },
  { name: 'Canva', icon: SI('canva'), mono: true },
  { name: 'TikTok', icon: SI('tiktok'), mono: true },
  { name: 'LinkedIn', icon: SI('linkedin'), mono: true },
  { name: 'Semrush', icon: SI('semrush'), mono: true },
  { name: 'WordPress', icon: SI('wordpress'), mono: true },
  { name: 'HubSpot', icon: SI('hubspot'), mono: true },
];

const ALL_MARQUEE = [...DEV_LOGOS, ...MKT_LOGOS];

const PROJECTS = [
  {
    title: 'WAJIBU ESG Platform',
    cat: 'Full Stack Web',
    desc: 'A full institutional platform for Environmental, Social and Governance reporting. Built to improve public communication and stakeholder engagement at scale.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'SEO'],
    grad: 'linear-gradient(135deg,#065f46,#047857)',
    label: 'wajibu.uk',
    url: 'https://wajibu.uk/',
    logo: '/images/portfolio/wajibu.jpg',
  },
  {
    title: 'Eagles Wings Community',
    cat: 'Frontend Engineering',
    desc: 'A community web system for programs, stories and outreach. Engineered to boost digital visibility for partner initiatives.',
    stack: ['React', 'CSS3', 'Analytics'],
    grad: 'linear-gradient(135deg,#22c55e,#0ea5e9)',
    label: 'eagleswingscommunity.org',
    url: 'https://eagleswingscommunity.org',
  },
  {
    title: 'Clarity Expeditions',
    cat: 'Product and Travel Booking',
    desc: 'A high conversion travel discovery and booking interface with dynamic packages, smart inquiry flows and a mobile first journey.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    grad: 'linear-gradient(135deg,#0ea5e9,#6366f1)',
    label: 'clarityexpeditions.com',
    url: 'https://clarityexpeditions.com/',
  },
  {
    title: 'ModernLux Furnitures',
    cat: 'Web and Digital Marketing',
    desc: 'Ecommerce presence and growth engine for a premium furniture brand. Includes paid media, SEO and a conversion focused storefront.',
    stack: ['Web', 'Meta Ads', 'Google Ads', 'SEO'],
    grad: 'linear-gradient(135deg,#b45309,#92400e)',
    label: 'modernluxfurnitures.co.ke',
    url: 'https://modernluxfurnitures.co.ke/',
  },
  {
    title: 'FairPrice Furniture',
    cat: 'Web and Digital Marketing',
    desc: 'Online catalogue and lead generation system for a furniture retailer, paired with multi channel campaign management.',
    stack: ['Web', 'Meta Ads', 'Analytics', 'SEO'],
    grad: 'linear-gradient(135deg,#9a3412,#c2410c)',
    label: 'fairpricefurniture.co.ke',
    url: 'https://fairpricefurniture.co.ke',
  },
  {
    title: 'Multi Channel Growth System',
    cat: 'Growth Engineering',
    desc: 'Integrated paid media across Google and Meta with automated reporting pipelines and continuous performance optimization.',
    stack: ['Google Ads', 'Meta Ads', 'GA4'],
    grad: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
    label: 'growth.dashboard',
    url: '#',
  },
];

const EXPERIENCE = [
  { period: '2026 – Now', role: 'Digital Creative', company: 'Slims Arts', bullets: ['Leading brand visibility, digital content strategy, and full web presence', 'Directing marketing execution across social, content, and digital channels', 'Owning end-to-end creative direction and campaign delivery'] },
  { period: '2025 – 2026', role: 'Digital Marketer', company: 'ModernLux & FairPrice Furniture', bullets: ['Managed online visibility, product promotion, and performance campaigns', 'Grew audience engagement measurably across all digital platforms', 'Owned analytics reporting and continuous campaign optimization'] },
  { period: '2023 – Now', role: 'Software Developer', company: 'Independent', bullets: ['Designed and shipped responsive websites and web apps for clients globally', 'Delivered full frontend engineering from wireframe to production deployment', 'Managed client relationships, scoping, and technical delivery end-to-end'] },
  { period: '2023 – 2024', role: 'Campaign Intern', company: 'Spiro', bullets: ['Supported campaign execution, digital reporting, and content coordination', 'Assisted in performance analysis and marketing operations workflows'] },
];

const STATS = [
  { num: '3+', label: 'Years experience' },
  { num: '10+', label: 'Projects shipped' },
  { num: '5+', label: 'Clients served' },
  { num: '30+', label: 'Tools mastered' },
];

const CVS = [
  { title: 'Digital Marketing CV', desc: 'Paid media, SEO, analytics and multi channel campaign management track record.', file: '/documents/Elijah-James-Marketing-CV.pdf' },
  { title: 'Software Development CV', desc: 'Frontend and full stack engineering experience, projects and technical stack. Available on request.', file: '/documents/Elijah-James-Marketing-CV.pdf' },
];

/* ── SOCIAL ICONS (inline, always render) ────── */
const ICONS: Record<string, JSX.Element> = {
  linkedin: <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />,
  github: <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />,
  whatsapp: <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.1.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A10 10 0 1 1 12 22m8.5-18.5A12 12 0 0 0 1.6 17.4L0 24l6.7-1.7A12 12 0 1 0 20.5 3.5" />,
  email: <path d="M22 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4.4-10 5.6L2 8.4V6l10 5.6L22 6z" />,
};
function SocialIcons({ size = 42 }: { size?: number }) {
  const items: [string, string][] = [
    ['linkedin', LINKEDIN], ['github', GITHUB], ['email', `mailto:${EMAIL}`], ['whatsapp', `https://wa.me/${WHATSAPP}`],
  ];
  return (
    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
      {items.map(([k, href]) => (
        <a key={k} href={href} target="_blank" rel="noopener noreferrer" className="social-btn" title={k}
          style={{ width: size, height: size }}>
          <svg viewBox="0 0 24 24" width={size * 0.45} height={size * 0.45} fill="currentColor" aria-hidden="true">{ICONS[k]}</svg>
        </a>
      ))}
    </div>
  );
}

/* ── HOOK: reveal on scroll ──────────────────── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* logo with graceful fallback */
function Logo({ src, name, mono }: { src: string; name: string; mono?: boolean }) {
  const [ok, setOk] = useState(true);
  if (!ok) return <span style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600 }}>{name}</span>;
  return <img className={mono ? 'mono' : undefined} src={src} alt={name} title={name} onError={() => setOk(false)} />;
}

/* ── NAV ─────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [['About', '#about'], ['Work', '#work'], ['Stack', '#stack'], ['Experience', '#experience'], ['Resume', '#resume'], ['Contact', '#contact']];
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: scrolled ? '1px solid rgba(39,39,42,0.6)' : '1px solid transparent', background: scrolled ? 'rgba(5,5,5,0.8)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a href="#hero" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.02em' }}>Elijah James</a>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 500, color: '#52525b' }}>
            <span className="avail-dot" />Available for work
          </span>
        </div>
        <nav className="nav-desktop" style={{ display: 'flex', gap: '1.9rem', alignItems: 'center' }}>
          {links.map(([l, h]) => <a key={l} href={h} className="nav-link">{l}</a>)}
        </nav>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu"
          style={{ display: 'none', flexDirection: 'column', gap: 5 }}>
          <span style={{ width: 22, height: 2, background: '#f4f4f5', borderRadius: 2 }} />
          <span style={{ width: 22, height: 2, background: '#f4f4f5', borderRadius: 2 }} />
          <span style={{ width: 22, height: 2, background: '#f4f4f5', borderRadius: 2 }} />
        </button>
      </div>
      {open && (
        <div className="nav-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid rgba(39,39,42,0.6)', background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(20px)' }}>
          {links.map(([l, h]) => <a key={l} href={h} className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: '0.95rem' }}>{l}</a>)}
        </div>
      )}
    </header>
  );
}

/* ── HERO ────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', zIndex: 1, paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', marginBottom: '2.5rem', padding: '0.35rem 0.85rem', borderRadius: 100, border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}>
          <span className="avail-dot" />
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#a5b4fc', letterSpacing: '0.04em' }}>OPEN TO OPPORTUNITIES · 2026</span>
        </div>

        <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.0, color: '#fafafa', marginBottom: '1.5rem', transitionDelay: '0.05s' }}>
          Software Engineer<br />
          <span className="gradient-text">&amp; Digital Strategist.</span>
        </h1>

        <p className="reveal" style={{ fontSize: '1.1rem', color: '#a1a1aa', lineHeight: 1.8, maxWidth: 560, marginBottom: '2.5rem', transitionDelay: '0.1s' }}>
          Architecting high performance digital systems and scalable marketing infrastructure. Turning complex problems into elegant, measurable products.
        </p>

        <div className="reveal" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem', transitionDelay: '0.15s' }}>
          <a href="#work" className="btn-primary">View work →</a>
          <a href="#resume" className="btn-ghost">Download CV ↓</a>
        </div>

        {/* Live tech + marketing logo marquee */}
        <div className="reveal" style={{ transitionDelay: '0.2s', overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', marginBottom: '3.5rem' }}>
          <div className="ticker-track logo-marquee" style={{ alignItems: 'center', gap: '2.5rem' }}>
            {[...ALL_MARQUEE, ...ALL_MARQUEE].map((t, i) => <Logo key={i} src={t.icon} name={t.name} mono={(t as any).mono} />)}
          </div>
        </div>

        {/* Stats */}
        <div className="reveal stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, borderTop: '1px solid rgba(39,39,42,0.5)', transitionDelay: '0.25s' }}>
          {STATS.map(({ num, label }, i) => (
            <div key={label} style={{ paddingTop: '1.5rem', paddingRight: '1.5rem', borderRight: i < 3 ? '1px solid rgba(39,39,42,0.5)' : 'none', marginRight: i < 3 ? '1.5rem' : 0 }}>
              <p style={{ fontSize: 'clamp(1.7rem,4vw,2.4rem)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fafafa', lineHeight: 1 }}>{num}</p>
              <p style={{ fontSize: '0.68rem', fontWeight: 500, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.4rem' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT / PORTRAIT ────────────────────────── */
function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '4rem', alignItems: 'center' }}>
          {/* Portrait */}
          <div className="reveal about-photo" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -1, borderRadius: 20, background: 'linear-gradient(160deg,#6366f1,#8b5cf6,#22c55e)', opacity: 0.5, filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(63,63,70,0.6)', aspectRatio: '4 / 5', background: 'linear-gradient(160deg,#18181b,#0a0a0a)' }}>
              <img src="/images/profile/elijah.jpg" alt="Elijah James"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.currentTarget.src = '/images/profile/logo.jpg'; e.currentTarget.style.objectFit = 'contain'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.padding = '1.5rem'; }} />
            </div>
          </div>
          {/* Bio */}
          <div className="reveal">
            <h2 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1.25rem' }}>About</h2>
            <p style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#fafafa', marginBottom: '1.5rem' }}>
              Engineering products and growth systems that perform.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#a1a1aa', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              A software engineer and digital marketing specialist based in Nairobi, Kenya. Work spans full stack web development, performance marketing and brand strategy. The focus stays constant. Build clean systems, ship measurable results and grow the brands behind them.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#a1a1aa', lineHeight: 1.85, marginBottom: '2rem' }}>
              From institutional platforms to ecommerce growth engines, every project is engineered for speed, clarity and scale.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#resume" className="btn-primary">Download CV ↓</a>
              <a href="#contact" className="btn-ghost">Work with me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3D TILT PROJECT CARD ────────────────────── */
function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 7}deg) rotateX(${(0.5 - py) * 7}deg) translateY(-4px)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };
  const live = p.url && p.url !== '#';
  return (
    <a ref={ref} href={p.url} target={live ? '_blank' : undefined} rel="noopener noreferrer" className="tilt-card reveal" onMouseMove={onMove} onMouseLeave={reset}>
      <div className="mock" style={{ background: p.grad }}>
        {p.logo
          ? <img src={p.logo} alt={p.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} onError={e => { (e.currentTarget.style.display = 'none'); }} />
          : null}
        <div className="mock-dots"><span style={{ background: 'rgba(255,255,255,0.5)' }} /><span style={{ background: 'rgba(255,255,255,0.35)' }} /><span style={{ background: 'rgba(255,255,255,0.25)' }} /></div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.22), transparent 50%)' }} />
        <div style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 2, padding: '0.35rem 0.85rem', borderRadius: 8, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.72rem', fontWeight: 600, color: '#fff' }}>
          ↗ {p.label}
        </div>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa', letterSpacing: '-0.01em' }}>{p.title}</h3>
            <p style={{ fontSize: '0.68rem', color: '#6366f1', fontWeight: 600, marginTop: '0.15rem' }}>{p.cat}</p>
          </div>
          <span className="card-arrow" style={{ fontSize: '1rem', color: '#3f3f46' }}>↗</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#71717a', lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.stack.map(t => (
            <span key={t} style={{ fontSize: '0.68rem', fontWeight: 500, color: '#a1a1aa', padding: '0.2rem 0.55rem', borderRadius: 5, border: '1px solid rgba(63,63,70,0.6)', background: 'rgba(39,39,42,0.3)' }}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Work() {
  return (
    <section id="work" style={{ position: 'relative', zIndex: 1, padding: '6rem 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em' }}>Selected Work</h2>
          <a href="#contact" style={{ fontSize: '0.78rem', color: '#6366f1', fontWeight: 500 }}>Start a project →</a>
        </div>
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ── STACK (dev + marketing) ─────────────────── */
function LogoGrid({ logos }: { logos: { name: string; icon: string; mono?: boolean }[] }) {
  return (
    <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '0.85rem' }}>
      {logos.map((t, i) => (
        <div key={t.name} className="logo-cell reveal" style={{ transitionDelay: `${(i % 6) * 0.04}s` }}>
          <Logo src={t.icon} name={t.name} mono={t.mono} />
          <span>{t.name}</span>
        </div>
      ))}
    </div>
  );
}

function Stack() {
  return (
    <section id="stack" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem' }}>Tech Stack</h2>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fafafa', letterSpacing: '-0.02em' }}>The tools I build &amp; grow with, every day.</p>
        </div>

        <p className="reveal" style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>◆ Development</p>
        <LogoGrid logos={DEV_LOGOS} />

        <p className="reveal" style={{ fontSize: '0.7rem', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.14em', margin: '2.5rem 0 1rem' }}>◆ Digital Marketing</p>
        <LogoGrid logos={MKT_LOGOS} />
      </div>
    </section>
  );
}

/* ── EXPERIENCE ──────────────────────────────── */
function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 className="reveal" style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '3rem' }}>Experience</h2>
        <div>
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="tl-row reveal">
              <div style={{ paddingTop: '0.4rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#6366f1', fontWeight: 600, whiteSpace: 'nowrap' }}>{e.period}</span>
              </div>
              <div className="tl-card">
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fafafa', letterSpacing: '-0.01em', marginBottom: '0.2rem' }}>{e.role}</p>
                <p style={{ fontSize: '0.8rem', color: '#52525b', fontWeight: 500, marginBottom: '0.9rem' }}>{e.company}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: '0.85rem', color: '#71717a', lineHeight: 1.6, display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#6366f1', flexShrink: 0, marginTop: '0.1rem', fontSize: '0.6rem' }}>◆</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── RESUME / CV ─────────────────────────────── */
function Resume() {
  return (
    <section id="resume" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem' }}>Resume</h2>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fafafa', letterSpacing: '-0.02em' }}>Download my CV.</p>
        </div>
        <div className="cv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
          {CVS.map(cv => (
            <a key={cv.title} href={cv.file} download className="tl-card reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', textDecoration: 'none' }}>
              <div>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fafafa', marginBottom: '0.3rem' }}>{cv.title}</p>
                <p style={{ fontSize: '0.82rem', color: '#71717a', lineHeight: 1.6 }}>{cv.desc}</p>
              </div>
              <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#a5b4fc' }}>↓</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT (Web3Forms) ─────────────────────── */
function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const field: React.CSSProperties = { width: '100%', background: 'rgba(24,24,27,0.4)', border: '1px solid rgba(63,63,70,0.5)', borderRadius: 10, padding: '0.8rem 1rem', color: '#f4f4f5', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' };
  const onFocus = (e: React.FocusEvent<any>) => (e.target.style.borderColor = '#6366f1');
  const onBlur = (e: React.FocusEvent<any>) => (e.target.style.borderColor = 'rgba(63,63,70,0.5)');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', 'New enquiry from portfolio');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      setStatus(json.success ? 'ok' : 'err');
    } catch { setStatus('err'); }
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 className="reveal" style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '3rem' }}>Contact</h2>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div className="reveal">
            <h3 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#fafafa', marginBottom: '1rem' }}>
              Let's build<br /><span className="gradient-text">something great.</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Need software built or a marketing engine that performs? Share the project details below. All applications receive a response within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.62rem', fontWeight: 600, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.2rem' }}>Email</p>
                <a href={`mailto:${EMAIL}`} style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>{EMAIL}</a>
              </div>
              <div>
                <p style={{ fontSize: '0.62rem', fontWeight: 600, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.2rem' }}>WhatsApp</p>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>{WHATSAPP_DISPLAY}</a>
              </div>
            </div>
            <p style={{ fontSize: '0.62rem', fontWeight: 600, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.7rem' }}>Connect</p>
            <SocialIcons />
          </div>

          {(
            <form className="reveal" onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <input name="name" style={field} placeholder="Name" required onFocus={onFocus} onBlur={onBlur} />
                <input name="email" type="email" style={field} placeholder="Email" required onFocus={onFocus} onBlur={onBlur} />
              </div>
              <select name="service" required defaultValue="" style={{ ...field, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                <option value="" disabled style={{ color: '#111', background: '#fff' }}>What service do you need?</option>
                <option style={{ color: '#111', background: '#fff' }}>Software Development</option>
                <option style={{ color: '#111', background: '#fff' }}>Digital Marketing</option>
                <option style={{ color: '#111', background: '#fff' }}>Both Services</option>
                <option style={{ color: '#111', background: '#fff' }}>Something Else</option>
              </select>
              <textarea name="message" style={{ ...field, minHeight: 130, resize: 'vertical' }} placeholder="Tell me about your project..." required onFocus={onFocus} onBlur={onBlur} />
              <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.6 : 1 }}>
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
              {status === 'err' && <p style={{ fontSize: '0.78rem', color: '#f87171' }}>Something went wrong. Please email me directly.</p>}
            </form>
          )}
        </div>
      </div>

      {/* Application received popup */}
      {status === 'ok' && (
        <div className="modal-overlay" onClick={() => setStatus('idle')}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.6rem', color: '#22c55e' }}>✓</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fafafa', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>Application Received</h3>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Thank you for reaching out. Your application has been received successfully and a response will follow within 24 hours.
            </p>
            <button className="btn-primary" onClick={() => setStatus('idle')} style={{ margin: '0 auto' }}>Done</button>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(39,39,42,0.5)', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#3f3f46', fontWeight: 500 }}>© 2026 Elijah James · Nairobi, Kenya</p>
        <div style={{ display: 'flex', gap: '1.75rem' }}>
          {[['GitHub', GITHUB], ['LinkedIn', LINKEDIN], ['Email', `mailto:${EMAIL}`], ['WhatsApp', `https://wa.me/${WHATSAPP}`]].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: '#52525b', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── APP ─────────────────────────────────────── */
export default function App() {
  useReveal();
  return (
    <div style={{ position: 'relative', background: '#050505', color: '#f4f4f5', minHeight: '100vh' }}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-overlay" />

      <Nav />
      <Hero />
      <About />
      <Work />
      <Stack />
      <Experience />
      <Resume />
      <Contact />
      <Footer />

      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 60, width: 50, height: 50, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', boxShadow: '0 8px 32px rgba(37,211,102,0.4)', transition: 'transform 0.25s' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >💬</a>
    </div>
  );
}
