import { softwareStack, marketingStack } from '../../shared/data/portfolioStructure';

const ICON_COLORS: Record<string, string> = {
  html: '#E34F26', css: '#1572B6', js: '#F7DF1E', ts: '#3178C6',
  react: '#61DAFB', next: '#fff', node: '#339933', python: '#3776AB',
  git: '#F05032', github: '#fff', mysql: '#4479A1', postgres: '#4169E1',
  tailwind: '#06B6D4', bootstrap: '#7952B3', vscode: '#007ACC', figma: '#F24E1E',
  vercel: '#fff', netlify: '#00C7B7',
  'google-ads': '#4285F4', meta: '#0082FB', analytics: '#E37400',
  'tag-manager': '#246FDB', 'search-console': '#4285F4', canva: '#00C4CC',
  photoshop: '#31A8FF', tiktok: '#fff', linkedin: '#0A66C2',
  mailchimp: '#FFE01B', seo: '#FF6B00',
};

const ToolCard = ({ name, logo, sub }: { name: string; logo: string; sub: string }) => (
  <div className="tool-card">
    <div className="tool-icon" style={{ color: ICON_COLORS[logo] || 'var(--accent)', background: `${ICON_COLORS[logo] || 'var(--accent)'}18` }}>
      {logo.toUpperCase().slice(0, 2)}
    </div>
    <p className="tool-name">{name}</p>
    <p className="tool-years">{sub}</p>
  </div>
);

const Stacks = () => (
  <section id="tools" className="section" style={{ background: 'var(--bg2)' }}>
    <div className="wrap">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="eyebrow">Technologies & Platforms</span>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>
          Tools I Use
        </h2>
        <p style={{ color: 'var(--sub)', maxWidth: 580, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
          The tools, technologies, and platforms I use to build modern digital solutions and
          high-performing marketing campaigns.
        </p>
      </div>

      {/* Software Dev */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem' }}>
          ◆ Software Development
        </h3>
        <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '1rem' }}>
          {softwareStack.map(t => <ToolCard key={t.name} name={t.name} logo={t.logo} sub={`${t.years} yrs`} />)}
        </div>
      </div>

      {/* Digital Marketing */}
      <div>
        <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem' }}>
          ◆ Digital Marketing
        </h3>
        <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '1rem' }}>
          {marketingStack.map(t => <ToolCard key={t.name} name={t.name} logo={t.logo} sub={t.description} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Stacks;
