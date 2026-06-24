import Section from '../../shared/components/Section';
import { certifications } from '../../shared/data/portfolioStructure';

const Certifications = () => (
  <Section id="certifications" eyebrow="Certifications" title="Qualifications, Workshops, Training, and Badges">
    <div className="card-grid compact">
      {certifications.map((item) => (
        <article key={item}>
          <h3>{item}</h3>
          <p>Ready for certificate details, issuer, date, and badge links.</p>
        </article>
      ))}
    </div>
  </Section>
);

export default Certifications;
