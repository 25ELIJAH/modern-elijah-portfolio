import Section from '../../shared/components/Section';
import { resources } from '../../shared/data/portfolioStructure';

const Resources = () => (
  <Section id="resources" eyebrow="Download My CV" title="Let's Work Together">
    <div className="resource-layout">
      <div className="pdf-card">PDF</div>
      <p>Download my CV to learn more about my experience, skills, and how I can help your business grow.</p>
      <div className="resource-grid">
        {resources.map((resource) => (
          <a key={resource.title} href="#contact">
            <strong>{resource.title}</strong>
            <span>{resource.detail}</span>
          </a>
        ))}
      </div>
    </div>
  </Section>
);

export default Resources;
