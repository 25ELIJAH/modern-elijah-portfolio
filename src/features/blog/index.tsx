import Section from '../../shared/components/Section';
import { blogTopics } from '../../shared/data/portfolioStructure';

const Blog = () => (
  <Section id="blog" eyebrow="Blog / Insights" title="Digital marketing, SEO, development, and business growth ideas.">
    <div className="card-grid compact">
      {blogTopics.map((topic) => (
        <article key={topic} className="blog-card">
          <span>Insight</span>
          <h3>{topic}</h3>
          <p>Professional article category prepared for search, filtering, and future CMS publishing.</p>
          <a href="#newsletter">Read More</a>
        </article>
      ))}
    </div>
  </Section>
);

export default Blog;
