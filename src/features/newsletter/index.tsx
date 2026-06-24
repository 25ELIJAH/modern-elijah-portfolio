import Section from '../../shared/components/Section';

const Newsletter = () => (
  <Section id="newsletter" eyebrow="Newsletter" title="Email Subscription, Industry Updates, and Portfolio Updates">
    <form className="newsletter-form">
      <input type="email" placeholder="Email address" aria-label="Email address" />
      <button type="submit">Subscribe</button>
    </form>
  </Section>
);

export default Newsletter;
