import type React from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}

const Section = ({ id, eyebrow, title, intro, children }: SectionProps) => (
  <section id={id} className="section">
    <div className="section__heading">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
    {children}
  </section>
);

export default Section;
