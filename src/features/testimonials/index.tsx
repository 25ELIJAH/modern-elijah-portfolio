import Section from '../../shared/components/Section';
import { testimonials } from '../../shared/data/portfolioStructure';

const Testimonials = () => (
  <Section id="testimonials" eyebrow="What Clients Say" title="Modern testimonial slider-ready reviews.">
    <div className="card-grid compact testimonial-grid">
      {testimonials.map((testimonial) => (
        <article key={testimonial.name} className="testimonial-card">
          <div className="avatar">{testimonial.name.slice(0, 1)}</div>
          <div>
            <h3>{testimonial.name}</h3>
            <span>{testimonial.role}</span>
          </div>
          <strong>{'★'.repeat(5)} {testimonial.rating}</strong>
          <p>{testimonial.quote}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default Testimonials;
