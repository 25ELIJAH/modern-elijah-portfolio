import Section from '../../shared/components/Section';
import { caseStudies } from '../../shared/data/portfolioStructure';

const CaseStudies = () => (
  <Section id="case-studies" eyebrow="Case Studies" title="Problem, strategy, implementation, results, and feedback.">
    <div className="process-row">
      {caseStudies.map((step) => (
        <article key={step.label}>
          <h3>{step.label}</h3>
          <p>{step.detail}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default CaseStudies;
