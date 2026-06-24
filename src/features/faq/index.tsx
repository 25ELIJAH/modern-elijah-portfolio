import Section from '../../shared/components/Section';
import { faqs } from '../../shared/data/portfolioStructure';

const FAQ = () => (
  <Section id="faq" eyebrow="FAQ" title="Common Questions, Pricing, Timelines, and Support">
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  </Section>
);

export default FAQ;
