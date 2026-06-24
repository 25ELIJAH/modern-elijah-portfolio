import Section from '../../shared/components/Section';

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Digital Builder"
    intro="Web development, digital marketing, branding, and content strategy focused on clean execution and business growth."
  >
    <div className="about-layout">
      <div className="about-photo">
        <span>4+</span>
        <small>Years Experience</small>
      </div>
      <div className="about-copy">
        <h3>Building websites and campaigns that move businesses forward.</h3>
        <p>
          Elijah James creates professional websites, digital campaigns, content systems, and brand experiences for businesses and
          organizations that need a stronger online presence. His work blends clean web execution with practical marketing thinking.
        </p>
        <div className="about-highlights">
          <div><strong>Web Development</strong><span>Responsive, modern websites built for clarity and trust</span></div>
          <div><strong>Digital Marketing</strong><span>Campaign support, SEO, analytics, and audience growth</span></div>
          <div><strong>Brand Support</strong><span>Content direction, messaging, and professional digital presence</span></div>
        </div>
        <div className="inline-actions">
          <a href="#resources">Download CV</a>
          <a href="#contact">Let's Talk</a>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
