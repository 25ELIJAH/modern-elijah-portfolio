import Section from '../../shared/components/Section';
import { brands } from '../../shared/data/portfolioStructure';

const Brands = () => (
  <Section id="brands" eyebrow="Brands" title="Worked With">
    <div className="brand-wall">
      {brands.map((brand) => (
        <article key={brand.name} className="brand-card">
          <strong>{brand.name}</strong>
          <span>{brand.type}</span>
        </article>
      ))}
    </div>
  </Section>
);

export default Brands;
