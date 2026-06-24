import Section from '../../shared/components/Section';
import { services } from '../../shared/data/portfolioStructure';

const Services = () => (
  <Section id="services" eyebrow="Services" title="What I Do">
    <div className="card-grid service-grid">
      {services.map((service) => (
        <article key={service.title} className="service-card">
          <span>{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href="#contact">Learn More</a>
        </article>
      ))}
    </div>
  </Section>
);

export default Services;
