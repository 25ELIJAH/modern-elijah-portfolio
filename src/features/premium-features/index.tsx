import Section from '../../shared/components/Section';
import { premiumFeatures } from '../../shared/data/portfolioStructure';

const PremiumFeatures = () => (
  <Section id="premium-features" eyebrow="Premium Features" title="Animations, SEO, Optimization, Downloads, and Integrations">
    <div className="pill-list">
      {premiumFeatures.map((feature) => (
        <span key={feature}>{feature}</span>
      ))}
    </div>
  </Section>
);

export default PremiumFeatures;
