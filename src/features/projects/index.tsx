import { useState } from 'react';
import { featuredProjects } from '../../shared/data/portfolioStructure';

const ALL_PROJECTS = [
  ...featuredProjects,
  {
    title: 'Brand Identity Design',
    category: 'Branding',
    summary: 'Complete visual identity package including logo, color palette, typography, and brand guidelines for a growing startup.',
    technologies: ['Figma', 'Canva', 'Photoshop'],
    result: 'Strong brand recognition and professional market presence.',
  },
  {
    title: 'Video Content Production',
    category: 'Content',
    summary: 'Short-form video content strategy and production for social media growth across TikTok and Instagram.',
    technologies: ['CapCut', 'Premiere Pro', 'Strategy'],
    result: 'Increased social engagement and audience growth.',
  },
];

const FILTERS = ['All', 'Development', 'Marketing', 'Branding', 'Content'];

const THUMB_COLORS: Record<string, string[]> = {
  Development: ['rgba(97,218,251,0.2)', 'rgba(5,8,22,0.85)'],
  Marketing: ['rgba(255,107,0,0.25)', 'rgba(5,8,22,0.85)'],
  Branding: ['rgba(168,85,247,0.2)', 'rgba(5,8,22,0.85)'],
  Content: ['rgba(34,197,94,0.2)', 'rgba(5,8,22,0.85)'],
};

const Projects = () => {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Selected Work</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--sub)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            A collection of projects that demonstrate technical expertise, creativity, problem-solving, and measurable business impact.
          </p>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="project-grid">
          {visible.map((p) => {
            const colors = THUMB_COLORS[p.category] || THUMB_COLORS.Development;
            return (
              <article key={p.title} className="project-card">
                <div className="project-thumb" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}), repeating-linear-gradient(45deg, transparent 0 8px, rgba(255,255,255,0.03) 8px 9px)` }}>
                  <span>{p.title.slice(0, 2).toUpperCase()}</span>
                </div>
                <div className="project-body">
                  <p className="project-cat">{p.category}</p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.summary}</p>
                  <p className="project-result">📈 {p.result}</p>
                  <div className="project-tags">
                    {p.technologies.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <div className="project-actions">
                    <button className="project-btn primary">View Case Study</button>
                    <button className="project-btn">Live Demo ↗</button>
                    <button className="project-btn">GitHub</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
