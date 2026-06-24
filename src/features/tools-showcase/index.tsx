import Section from '../../shared/components/Section';
import ToolIcon from '../../shared/components/ToolIcon';
import { marketingStack, softwareStack } from '../../shared/data/portfolioStructure';

const tools = [
  ...softwareStack.slice(0, 6).map((tool) => ({ name: tool.name, logo: tool.logo, meta: `${tool.years} years experience` })),
  ...marketingStack.slice(0, 6).map((tool) => ({ name: tool.name, logo: tool.logo, meta: tool.description })),
];

const ToolsShowcase = () => (
  <Section id="tools-showcase" eyebrow="Stack" title="Daily Tools">
    <div className="tool-grid">
      {tools.map((tool, index) => (
        <article key={tool.name} className="tool-card">
          <ToolIcon id={tool.logo} label={tool.name} />
          <h3>{tool.name}</h3>
          <p>{tool.meta}</p>
          <meter min="0" max="100" value={75 + (index % 4) * 5}>
            Experience level
          </meter>
        </article>
      ))}
    </div>
  </Section>
);

export default ToolsShowcase;
