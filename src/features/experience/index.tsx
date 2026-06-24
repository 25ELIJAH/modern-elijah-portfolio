const MILESTONES = [
  {
    year: '2021',
    icon: '✍️',
    role: 'Content Writer',
    desc: 'Started writing professional content and copywriting projects. Built a foundation in storytelling, SEO writing, and client communication.',
    tags: ['Content Writing', 'SEO Writing', 'Blog Writing'],
    achievement: 'Started freelance career',
  },
  {
    year: '2022',
    icon: '📊',
    role: 'Digital Marketing Specialist',
    desc: 'Managed digital campaigns and brand growth strategies across social and search channels.',
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
    achievement: 'Successfully managed client campaigns',
  },
  {
    year: '2023',
    icon: '💻',
    role: 'Frontend Developer',
    desc: 'Built responsive websites and web applications for businesses, NGOs, and brands.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    achievement: 'Launched multiple business websites',
  },
  {
    year: '2024',
    icon: '🚀',
    role: 'Software Developer',
    desc: 'Expanded into full project development — databases, APIs, and scalable web solutions.',
    tags: ['React', 'Python', 'Node.js', 'PostgreSQL'],
    achievement: 'Built scalable web solutions',
  },
  {
    year: '2025–Now',
    icon: '⚡',
    role: 'Helping Businesses Grow',
    desc: 'Combining development and marketing expertise to deliver complete digital transformation for clients.',
    tags: ['Full-Stack Dev', 'Digital Strategy', 'Branding'],
    achievement: 'Complete digital solutions',
  },
];

const Journey = () => (
  <section id="journey" className="section" style={{ background: 'var(--bg)' }}>
    <div className="wrap">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <span className="eyebrow">Professional Journey</span>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>
          My Roadmap
        </h2>
        <p style={{ color: 'var(--sub)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          From content writer to software developer and digital strategist — a journey of continuous growth.
        </p>
      </div>

      <div className="roadmap">
        {MILESTONES.map((m, i) => (
          <div key={i} className="milestone">
            <div className="milestone-dot" style={{ animationDelay: `${i * 0.15}s` }}>{m.icon}</div>
            <div className="milestone-card">
              <p className="milestone-year">{m.year}</p>
              <p className="milestone-role">{m.role}</p>
              <p className="milestone-desc">{m.desc}</p>
              <div className="milestone-tags">
                {m.tags.map(tag => <span key={tag} className="milestone-tag">{tag}</span>)}
              </div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,107,0,0.75)', fontWeight: 600, marginTop: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.6rem' }}>
                🏆 {m.achievement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Journey;
