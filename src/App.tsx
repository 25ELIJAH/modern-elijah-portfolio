import { useEffect, useRef, useState } from 'react';
import './styles/globals.css';

/* ── CONFIG ──────────────────────────────────── */
const WEB3FORMS_KEY = '96ab8c59-504c-4c87-a174-456df237cc59';
const EMAIL = 'easterjames420@gmail.com';
const WHATSAPP = '254740840018';          // 0740840018 → intl
const WHATSAPP_DISPLAY = '+254 740 840 018';
const LINKEDIN = 'https://www.linkedin.com/in/elijahjames254';
const GITHUB = 'https://github.com/25ELIJAH';
const INSTAGRAM = 'https://www.instagram.com/_easter4';

/* live website screenshot (renders the actual site) */
const SHOT = (url: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=900`;

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
    grad: 'linear-gradient(135deg,#1e3a5f,#0f2942)',
    label: 'eagleswingscommunity.org',
    url: 'https://eagleswingscommunity.org',
    logo: '/images/portfolio/eagleswings.png',
  },
  {
    title: 'Clarity Expeditions',
    cat: 'Product and Travel Booking',
    desc: 'A high conversion travel discovery and booking interface with dynamic packages, smart inquiry flows and a mobile first journey.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    grad: 'linear-gradient(135deg,#0ea5e9,#6366f1)',
    label: 'clarityexpeditions.com',
    url: 'https://clarityexpeditions.com/',
    logo: SHOT('https://clarityexpeditions.com/'),
  },
  {
    title: 'ModernLux Furnitures',
    cat: 'Web and Digital Marketing',
    desc: 'Ecommerce presence and growth engine for a premium furniture brand. Includes paid media, SEO and a conversion focused storefront.',
    stack: ['Web', 'Meta Ads', 'Google Ads', 'SEO'],
    grad: 'linear-gradient(135deg,#0f3d2e,#1a5c43)',
    label: 'modernluxfurnitures.co.ke',
    url: 'https://modernluxfurnitures.co.ke/',
    logo: SHOT('https://modernluxfurnitures.co.ke/'),
  },
  {
    title: 'FairPrice Furniture',
    cat: 'Web and Digital Marketing',
    desc: 'Online catalogue and lead generation system for a furniture retailer, paired with multi channel campaign management.',
    stack: ['Web', 'Meta Ads', 'Analytics', 'SEO'],
    grad: 'linear-gradient(135deg,#1e3a5f,#0f2942)',
    label: 'fairpricefurniture.co.ke',
    url: 'https://fairpricefurniture.co.ke',
    logo: SHOT('https://fairpricefurniture.co.ke/'),
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
  {
    level: 7, status: 'ACTIVE', tag: 'BOSS LEVEL',
    period: '2026 – Present', role: 'Head of Digital Marketing', company: 'Slims Arts & Design',
    logo: '/images/companies/slims.jpg', accent: '#f59e0b',
    bullets: ['Leading digital marketing strategy, brand growth and online presence', 'Managing ad campaigns, social platforms, content strategy and analytics', 'Driving customer acquisition and business growth through digital channels'],
  },
  {
    level: 6, status: 'CLEARED', tag: 'STRATEGIST',
    period: '2025 – 2026', role: 'Digital Strategist, Web Developer & Manager', company: 'Modern Lux Furniture',
    logo: '/images/companies/modernlux.png', accent: '#0f766e',
    bullets: ['Managed digital operations, website development and marketing strategy', 'Oversaw brand visibility, customer engagement and digital growth', 'Coordinated business and marketing activities toward company objectives'],
  },
  {
    level: 5, status: 'CLEARED', tag: 'GROWTH',
    period: '2025 – 2026', role: 'Digital Marketer', company: 'FairPrice Furniture',
    logo: '/images/companies/fairprice.png', accent: '#1e3a5f',
    bullets: ['Focused on lead generation, customer acquisition and sales campaigns', 'Managed digital ads and online promotions to grow sales and inquiries', 'Monitored performance and optimized marketing for stronger results'],
  },
  {
    level: 4, status: 'CLEARED', tag: 'GROWTH',
    period: '2024 – 2026', role: 'Digital Marketer', company: 'Kenty Furniture',
    logo: '/images/companies/kenty.jpg', accent: '#b45309',
    bullets: ['Managed social media, paid advertising campaigns and content creation', 'Built marketing strategies that grew brand awareness and engagement', 'Supported sales through targeted digital marketing initiatives'],
  },
  {
    level: 3, status: 'CLEARED', tag: 'BUILDER',
    period: '2024', role: 'Junior Web Developer Intern', company: 'Liveal',
    logo: '/images/companies/liveal.jpg', accent: '#dc2626',
    bullets: ['Assisted in website development and maintenance projects', 'Built responsive, user friendly pages with frontend technologies', 'Collaborated with teams to deliver functional web solutions'],
  },
  {
    level: 2, status: 'CLEARED', tag: 'CAMPAIGN',
    period: '2023 – 2024', role: 'Campaign Intern', company: 'Spiro',
    logo: '/images/companies/spiro.png', accent: '#3730a3',
    bullets: ['Supported campaign execution, digital reporting and coordination', 'Assisted in performance analysis and marketing operations'],
  },
  {
    level: 1, status: 'ONGOING', tag: 'ORIGIN',
    period: '2023 – Present', role: 'Freelance Software Developer & Digital Marketing Consultant', company: 'Self Employed',
    logo: '', accent: '#6366f1',
    bullets: ['Delivering web development, marketing and digital transformation', 'Working with clients across Kenya and internationally, including the UK', 'Consulting in furniture, design, marketing and travel industries'],
  },
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
  instagram: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38C1.35 2.65.94 3.32.63 4.11c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88" />,
};
function SocialIcons({ size = 42 }: { size?: number }) {
  const items: [string, string][] = [
    ['linkedin', LINKEDIN], ['github', GITHUB], ['instagram', INSTAGRAM], ['email', `mailto:${EMAIL}`], ['whatsapp', `https://wa.me/${WHATSAPP}`],
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
          <div className="reveal about-photo photo-frame">
            <div className="photo-glow" />
            <div className="photo-inner">
              <img src="/images/profile/elijah.jpg" alt="Elijah James"
                onError={e => { e.currentTarget.src = '/images/profile/logo.jpg'; e.currentTarget.style.objectFit = 'contain'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.padding = '1.5rem'; }} />
              <div className="photo-badge">
                <span className="avail-dot" />
                <span>Nairobi, Kenya</span>
              </div>
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
      <div className={`mock${(p as any).cover ? ' mock-logo' : ''}`} style={{ background: p.grad }}>
        {(p as any).logo
          ? <img className="mock-img" src={(p as any).logo} alt={p.title} onError={e => { (e.currentTarget.style.display = 'none'); }} />
          : null}
        {(p as any).cover
          ? <img className="mock-cover" src={(p as any).cover} alt={p.title} onError={e => { (e.currentTarget.style.display = 'none'); }} />
          : null}
        <div className="mock-dots" style={{ zIndex: 3 }}><span style={{ background: 'rgba(255,255,255,0.5)' }} /><span style={{ background: 'rgba(255,255,255,0.35)' }} /><span style={{ background: 'rgba(255,255,255,0.25)' }} /></div>
        {!(p as any).cover && <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.22), transparent 50%)' }} />}
        <div style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 3, padding: '0.35rem 0.85rem', borderRadius: 8, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.72rem', fontWeight: 600, color: '#fff' }}>
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

/* ── EXPERIENCE (game-level career path) ─────── */
function LevelCard({ e }: { e: typeof EXPERIENCE[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (ev: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((ev.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((ev.clientY - r.top) / r.height) * 100}%`);
  };
  const statusColor = e.status === 'ACTIVE' ? '#22c55e' : e.status === 'ONGOING' ? '#6366f1' : '#52525b';
  return (
    <div className="level-row reveal">
      {/* rail node */}
      <div className="level-rail">
        <div className="level-node" style={{ ['--accent' as any]: e.accent }}>
          <span>{String(e.level).padStart(2, '0')}</span>
        </div>
      </div>
      {/* card */}
      <div ref={ref} className="level-card" onMouseMove={onMove} style={{ ['--accent' as any]: e.accent }}>
        <div className="level-card-top">
          <div className="level-logo">
            {e.logo
              ? <img src={e.logo} alt={e.company} onError={ev => { ev.currentTarget.style.display = 'none'; }} />
              : <span style={{ fontSize: '1.4rem' }}>⚡</span>}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="level-badges">
              <span className="lvl-pill" style={{ color: e.accent, borderColor: e.accent }}>LVL {String(e.level).padStart(2, '0')}</span>
              <span className="lvl-tag">{e.tag}</span>
              <span className="lvl-status" style={{ color: statusColor }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: statusColor, display: 'inline-block', boxShadow: `0 0 8px ${statusColor}` }} />
                {e.status}
              </span>
            </div>
            <h3 className="lvl-role">{e.role}</h3>
            <p className="lvl-company">{e.company} <span style={{ color: '#3f3f46' }}>·</span> <span style={{ color: '#52525b' }}>{e.period}</span></p>
          </div>
        </div>
        <ul className="lvl-bullets">
          {e.bullets.map((b, j) => (
            <li key={j}><span className="lvl-xp" style={{ color: e.accent }}>+XP</span>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const pathRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = pathRef.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when top of path reaches 80% of viewport, 1 when bottom passes 40%
      const total = r.height + vh * 0.4;
      const progressed = Math.min(Math.max(vh * 0.8 - r.top, 0), total);
      const pct = Math.round(Math.min(progressed / total, 1) * 100);
      if (fillRef.current) fillRef.current.style.width = pct + '%';
      if (pctRef.current) pctRef.current.textContent = pct + '%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em' }}>Career Path</h2>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#22c55e', padding: '0.18rem 0.55rem', borderRadius: 100, border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.08)', letterSpacing: '0.08em' }}>7 LEVELS CLEARED</span>
        </div>
        <p className="reveal" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fafafa', marginBottom: '0.75rem' }}>
          The journey, played out level by level.
        </p>
        <p className="reveal" style={{ fontSize: '0.9rem', color: '#71717a', marginBottom: '1.75rem', maxWidth: 520, lineHeight: 1.7 }}>
          Every role unlocked new skills. Scroll the path from origin to current boss level.
        </p>

        {/* XP progress bar */}
        <div className="reveal xp-wrap" style={{ marginBottom: '2.75rem' }}>
          <div className="xp-labels">
            <span>XP PROGRESS</span>
            <span ref={pctRef} className="xp-pct">0%</span>
          </div>
          <div className="xp-track">
            <div ref={fillRef} className="xp-fill"><span className="xp-glow" /></div>
          </div>
        </div>

        <div ref={pathRef} className="quest-path">
          {EXPERIENCE.map((e) => <LevelCard key={e.level} e={e} />)}
          <div className="level-row reveal">
            <div className="level-rail"><div className="level-node level-start"><span>★</span></div></div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.25rem' }}>
              <p style={{ fontSize: '0.8rem', color: '#52525b', fontWeight: 600, letterSpacing: '0.04em' }}>2023 · GAME START</p>
            </div>
          </div>
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

/* ── CONTACT ─────────────────────────────────── */
/* animated letter-by-letter text */
function AnimText({ text, cls }: { text: string; cls?: string }) {
  return (
    <span className={cls} aria-label={text}>
      {text.split('').map((c, i) => (
        <span key={i} className="char" style={{ animationDelay: `${0.25 + i * 0.035}s` }}>{c === ' ' ? ' ' : c}</span>
      ))}
    </span>
  );
}

function SuccessOverlay({ onClose }: { onClose: () => void }) {
  const confetti = Array.from({ length: 26 });
  const colors = ['#6366f1', '#8b5cf6', '#22c55e', '#f59e0b', '#ec4899', '#0ea5e9'];
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="success-card" onClick={e => e.stopPropagation()}>
        <div className="confetti-layer" aria-hidden="true">
          {confetti.map((_, i) => (
            <span key={i} className="confetti" style={{
              left: `${Math.random() * 100}%`,
              background: colors[i % colors.length],
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${1.4 + Math.random() * 1.2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }} />
          ))}
        </div>

        <svg className="check-svg" viewBox="0 0 80 80">
          <circle className="check-ring" cx="40" cy="40" r="36" />
          <path className="check-mark" d="M24 41 L36 53 L57 29" />
        </svg>

        <h3 className="success-title"><AnimText text="Message Sent!" /></h3>
        <p className="success-sub">
          Thank you for reaching out. Your message landed safely and a response will follow within 24 hours.
        </p>
        <button className="btn-primary success-btn" onClick={onClose}>Awesome →</button>
      </div>
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

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
      if (json.success) (e.target as HTMLFormElement).reset();
    } catch { setStatus('err'); }
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '6rem 0', borderTop: '1px solid rgba(39,39,42,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.16em' }}>Contact</h2>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.62rem', fontWeight: 700, color: '#22c55e', padding: '0.18rem 0.55rem', borderRadius: 100, border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.08)', letterSpacing: '0.06em' }}>
            <span className="avail-dot" />REPLIES IN ~24H
          </span>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '4rem', alignItems: 'start' }}>
          {/* LEFT */}
          <div className="reveal">
            <h3 style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#fafafa', marginBottom: '1.25rem' }}>
              Let's build<br /><span className="gradient-text">something great.</span>
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#a1a1aa', lineHeight: 1.8, marginBottom: '2.25rem', maxWidth: 380 }}>
              Need software built or a marketing engine that performs? Share the details and let's make it happen.
            </p>

            {/* contact rows */}
            <div className="contact-rows">
              <a className="contact-row" href={`mailto:${EMAIL}`}>
                <span className="contact-ico">✉</span>
                <span><span className="contact-k">Email</span><span className="contact-v">{EMAIL}</span></span>
                <span className="contact-arr">↗</span>
              </a>
              <a className="contact-row" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                <span className="contact-ico">⌬</span>
                <span><span className="contact-k">WhatsApp</span><span className="contact-v">{WHATSAPP_DISPLAY}</span></span>
                <span className="contact-arr">↗</span>
              </a>
              <div className="contact-row" style={{ cursor: 'default' }}>
                <span className="contact-ico">⚲</span>
                <span><span className="contact-k">Location</span><span className="contact-v">Nairobi, Kenya · Remote worldwide</span></span>
              </div>
            </div>

            <p style={{ fontSize: '0.62rem', fontWeight: 600, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.14em', margin: '2rem 0 0.8rem' }}>Connect</p>
            <SocialIcons />
          </div>

          {/* RIGHT — form card */}
          <form className="reveal form-card" onSubmit={submit}>
            <div className="form-card-glow" aria-hidden="true" />
            <div className="form-grid2">
              <div className="field">
                <input className="field-input" name="name" placeholder=" " required />
                <label className="field-label">Your name</label>
              </div>
              <div className="field">
                <input className="field-input" name="email" type="email" placeholder=" " required />
                <label className="field-label">Email address</label>
              </div>
            </div>
            <div className="field field-select">
              <select className="field-input" name="service" required defaultValue="">
                <option value="" disabled hidden></option>
                <option>Software Development</option>
                <option>Digital Marketing</option>
                <option>Both Services</option>
                <option>Something Else</option>
              </select>
              <label className="field-label floated">Service needed</label>
            </div>
            <div className="field">
              <textarea className="field-input" name="message" placeholder=" " required style={{ minHeight: 130, resize: 'vertical' }} />
              <label className="field-label">Tell me about your project…</label>
            </div>
            <button type="submit" className={`send-btn${status === 'sending' ? ' sending' : ''}`} disabled={status === 'sending'}>
              <span className="send-btn-label">{status === 'sending' ? 'Sending' : 'Send message'}</span>
              <span className="send-plane">{status === 'sending' ? '✈' : '→'}</span>
            </button>
            {status === 'err' && <p style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '0.25rem' }}>Something went wrong. Please email me directly.</p>}
          </form>
        </div>
      </div>

      {status === 'ok' && <SuccessOverlay onClose={() => setStatus('idle')} />}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(39,39,42,0.5)', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#3f3f46', fontWeight: 500 }}>© 2026 Elijah James · Nairobi, Kenya</p>
        <div style={{ display: 'flex', gap: '1.75rem' }}>
          {[['GitHub', GITHUB], ['LinkedIn', LINKEDIN], ['Instagram', INSTAGRAM], ['Email', `mailto:${EMAIL}`], ['WhatsApp', `https://wa.me/${WHATSAPP}`]].map(([l, h]) => (
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
    </div>
  );
}
